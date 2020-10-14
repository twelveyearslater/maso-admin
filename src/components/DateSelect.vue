<template>
  <div class="col-md-10 row mb-0">
    <div class="col-md-4">
      <select v-model="selectedYear" name="province" class="form-control">
        <template v-for="(item, index) in years">
          <option :value="item" :key="index">
            {{ item }}
          </option>
        </template>
      </select>
    </div>
    <div class="col-md-4">
      <select v-model="selectedMonth" name="province" class="form-control">
        <template v-for="(item, index) in months">
          <option :value="item" :key="index">
            {{ item }}
          </option>
        </template>
      </select>
    </div>
    <div class="col-md-4">
      <select v-model="selectedDay" name="province" class="form-control">
        <template v-for="(item, index) in days">
          <option :value="item" :key="index">
            {{ item }}
          </option>
        </template>
      </select>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'dateSelect',
  data () {
    return {
      years: [],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      selectedYear: 1900,
      selectedMonth: 1,
      selectedDay: 1
    }
  },
  created () {
    const _this = this
    const currentYear = new Date().getFullYear()
    for (let i = 1900; i < currentYear - 3; i++) {
      _this.years.push(i)
    }
    Vue.nextTick(() => {
      _this.selectedYear = 1900
      _this.selectedMonth = 1
      _this.selectedDay = 1
    })
  },
  watch: {
    selectedYear () {
      const _this = this
      Vue.nextTick(() => {
        _this.selectedMonth = 1
        _this.selectedDay = 1
      })
    },
    selectedMonth (newVal, oldVal) {
      const _this = this
      let diff = 0
      if (newVal === oldVal) {
        return
      } else {
        const newDays = _this.getDays(_this.selectedYear, newVal)
        const oldDays = _this.getDays(_this.selectedYear, oldVal)
        diff = newDays - oldDays
      }
      if (diff === 0) return
      if (diff > 0) {
        while (diff > 0) {
          _this.days.push(_this.days.length + 1)
          diff--
        }
      } else {
        while (diff < 0) {
          _this.days.pop()
          diff++
        }
      }
      Vue.nextTick(() => {
        _this.selectedDay = 1
      })
    },
    selectedBlock () {
      Vue.nextTick(() => {
        this.$emit('input', this.info)
      })
    }
  },
  computed: {
    info () {
      return {
        year: this.selectedYear,
        month: this.selectedMonth,
        day: this.selectedDay
      }
    }
  },
  methods: {
    getDays (year, month) {
      switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return 31
        case 4:
        case 6:
        case 9:
        case 11:
          return 30
        case 2:
          return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28
        default:
          return 0
      }
    }
  }
}
</script>
