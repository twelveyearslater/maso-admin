<template>
  <div class="col-md-10 row mb-0">
    <div class="col-md-4">
      <select v-model="selectedProvince" name="province" class="form-control">
        <template v-for="(item, index) in provinces">
          <option v-if="item.level === 1" :value="item" :key="index">
            {{ item.name }}
          </option>
        </template>
      </select>
    </div>
    <div class="col-md-4">
      <select v-model="selectedCity" name="city" class="form-control">
        <option
          v-for="(item, index) in cities"
          :value="item"
          :key="index">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="col-md-4">
      <select v-model="selectedBlock" name="block" class="form-control">
        <option
          v-for="(item, index) in blocks"
          :value="item"
          :key="index">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import provinces from '../assets/js/provinces.js'
import Vue from 'vue'
export default {
  name: 'regionSelect',
  created () {
    // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
    const beijing = this.provinces.slice(0, 19)
    this.cities = beijing.filter(item => {
      if (item.level === 2) {
        return true
      }
    })
    this.selectedCity = this.cities[0]
    this.blocks = beijing.filter(item => {
      if (item.level === 3) {
        return true
      }
    })
    this.selectedBlock = this.blocks[0]
  },
  watch: {
    selectedProvince (newVal, oldVal) {
      // 港澳台数据只有一级,特殊处理
      if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
        this.cities = [newVal]
        this.blocks = [newVal]
      } else {
        this.cities = this.provinces.filter(item => {
          if (item.level === 2 && item.sheng && newVal.sheng === item.sheng) {
            return true
          }
        })
      }
      // 此时在渲染DOM,渲染结束之后再选中第一个
      Vue.nextTick(() => {
        this.selectedCity = this.cities[0]
        this.$emit('input', this.info)
      })
    },
    selectedBlock () {
      Vue.nextTick(() => {
        this.$emit('input', this.info)
      })
    },
    selectedCity (newVal) {
      // 选择了一个市,要选择区了 di是城市的代表,sheng
      if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
        this.blocks = [newVal]
        this.cities = [newVal]
      } else {
        this.blocks = this.provinces.filter(item => {
          if (item.level === 3 && item.sheng && item.sheng === newVal.sheng && item.di === newVal.di && item.name !== '市辖区') {
            return true
          }
        })
      }
      Vue.nextTick(() => {
        this.selectedBlock = this.blocks[0]
        // 触发与 v-model相关的 input事件
        this.$emit('input', this.info)
      })
    }
  },
  computed: {
    info () {
      return {
        province: this.selectedProvince,
        city: this.selectedCity,
        block: this.selectedBlock
      }
    }
  },
  data () {
    return {
      selectedProvince: provinces[0],
      selectedCity: 0,
      selectedBlock: 0,
      cities: 0,
      provinces,
      blocks: 0
    }
  }
}
</script>
