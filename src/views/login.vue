<template>
  <div class="auth-fluid-pages pb-0">
    <div class="auth-fluid">
      <!--Auth fluid left content -->
      <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
          <div class="card-body" id="login">

            <!-- Logo -->
            <div class="auth-brand text-center text-lg-left">
              <a href="#">
                <span><img src="/ace/assets/images/logo-light.png" alt="" height="18"></span>
              </a>
            </div>

            <!-- title-->
            <h4 class="mt-0">登陆</h4>
            <p class="text-muted mb-4">请输入您的账号和密码.</p>

            <!-- form -->
              <div class="form-group">
                <label for="emailaddress">账号</label>
                <input class="form-control" type="text" id="emailaddress" required="" placeholder="你的账号/手机号/邮箱" v-model="username">
              </div>
              <div class="form-group">
                <a href="pages-recoverpw-2.html" class="text-muted float-right"><small>忘记密码？</small></a>
                <label for="password">密码</label>
                <input class="form-control" type="password" required="" id="password" placeholder="请输入密码" v-model="password">
              </div>
              <div class="form-group mb-3">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="checkbox-signin">
                  <label class="custom-control-label" for="checkbox-signin">记住我 <small> (不是自己的电脑上不要勾选此项)</small></label>
                </div>
              </div>
              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary btn-block" @click="login"><i class="mdi mdi-login"></i> 登录 </button>
              </div>
              <!-- social-->
              <div class="text-center mt-4">
                <p class="text-muted font-16">关联登录</p>
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
            <!-- end form-->

            <!-- Footer-->
            <footer class="footer footer-alt">
              <p class="text-muted">还没有账号? <router-link to="/register" class="text-muted ml-1"><b>注册</b></router-link></p>
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
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const _this = this
      _this.$axios.get(_this.HOST + '/demo/user/login', {
        params: {
          code: _this.username,
          ups: _this.password
        }
      }).then(res => {
        if (res.data.success) {
          sessionStorage.setItem('loginUser', JSON.stringify(res.data.data))
          _this.$router.push('/welcome')
        } else {
          alert(res.data.msg)
        }
      })
    }
  }
}
</script>
