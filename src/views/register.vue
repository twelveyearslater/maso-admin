<template>
  <div class="auth-fluid-pages pb-0">
    <div class="auth-fluid">
      <!--Auth fluid left content -->
      <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
          <div class="card-body">

            <!-- Logo -->
            <div class="auth-brand text-center text-lg-left">
              <a href="#">
                <span><img src="/ace/assets/images/logo-light.png" alt="" height="18"></span>
              </a>
            </div>

            <!-- title-->
            <h4 class="mt-0">免费注册</h4>
            <p class="text-muted mb-4">还没有账号? 快来创建一个吧！</p>
            <div id="create">
              <div class="form-group">
                <label for="fullname">用户名</label>
                <input class="form-control" type="text" id="fullname" v-model="username" placeholder="请输入用户名" required>
              </div>
              <div class="form-group">
                <label for="emailaddress">邮箱</label>
                <input class="form-control" type="email" id="emailaddress" v-model="email" required placeholder="请输入邮箱">
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input class="form-control" type="password" required id="password" v-model="password" placeholder="请输入密码">
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" v-model="isAdminMyself" id="checkbox-signup1">
                  <label class="custom-control-label" for="checkbox-signup1">解密方式： <a href="javascript: confirm('如果丢失秘钥，平台将无法解读用户存储的信息');" class="text-muted">由个人存储秘钥</a></label>
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" v-model="isAgree" id="checkbox-signup2">
                  <label class="custom-control-label" for="checkbox-signup2">我已同意 <a href="javascript: void(0);" class="text-muted">《卜M平台用户使用协议》</a></label>
                </div>
              </div>
              <div class="form-group mb-0 text-center" v-show="showButton">
                <button class="btn btn-primary btn-block" type="submit" @click="signUp"><i class="mdi mdi-account-circle"></i> 注 册 </button>
              </div>
              <div class="form-group mb-0 text-center" v-show="!showButton">
                <button class="btn btn-primary btn-block" type="submit" @click="sendActiveMail"><i class="mdi mdi-account-circle"></i> 邮件激活 </button>
              </div>
              <!-- social-->
              <div class="text-center mt-4">
                <p class="text-muted font-16">关联注册</p>
                <ul class="social-list list-inline mt-3">
                  <li class="list-inline-item">
                    <a href="javascript: alert('很抱歉，暂未开启');" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript: alert('很抱歉，暂未开启');" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript: alert('很抱歉，暂未开启');" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript: alert('很抱歉，暂未开启');" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github-circle"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Footer-->
            <footer class="footer footer-alt">
              <p class="text-muted">已有账号，直接登陆? <a href="_login.html" class="text-muted ml-1"><b>登陆</b></a></p>
            </footer>

          </div> <!-- end .card-body -->
        </div> <!-- end .align-items-center.d-flex.h-100-->
      </div>
      <!-- end auth-fluid-form-box-->

      <!-- Auth fluid right content -->
      <div class="auth-fluid-right text-center">
        <div class="auth-user-testimonial">
          <h2 class="mb-3">希望能有更多的人加入！</h2>
          <p class="lead"><i class="mdi mdi-format-quote-open"></i> 无论是使用还是创新·我都需要大家的支持！ <i class="mdi mdi-format-quote-close"></i>
          </p>
          <p>
            - 卜M 弱鸡 开发者
          </p>
        </div> <!-- end auth-user-testimonial-->
      </div>
      <!-- end Auth fluid right content -->
    </div>
    <!-- end auth-fluid-->
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      isAdminMyself: '',
      isAgree: '',
      showButton: true
    }
  },
  methods: {
    signUp () {
      const _this = this
      if (!_this.isAgree) {
        alert('请查看相关协议或条款，并同意。')
        return
      }
      if (_this.isAdminMyself) {
        alert('平台暂不支持由个人保存秘钥！')
        return
      }
      const user = {}
      user.username = _this.username
      user.email = _this.email
      user.password = _this.password
      _this.$axios.get(_this.HOST + '/demo/user/signUp', {
        params: {
          user: JSON.stringify(user)
        }
      }).then(function (res) {
        if (res.data.success) {
          alert('注册成功，请收取邮件并激活账户')
        } else {
          const msg = res.data.msg
          if (res.data.data === 0) {
            alert('注册失败！' + msg)
            _this.$router.push('/register')
          } else if (res.data.data === 2) {
            alert('注册失败！' + msg)
            _this.showButton = !_this.showButton
          }
        }
      })
    }
  }
}
</script>
<style>

</style>
