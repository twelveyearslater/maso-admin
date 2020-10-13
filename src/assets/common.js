exports.install = function (Vue) {
  Vue.prototype.checkOnline = function (data) {
    const _this = this
    if (!data.success) {
      alert(data.msg)
      if (data.errCode === '00') {
        _this.$router.push('/login')
      }
    }
  }
}
