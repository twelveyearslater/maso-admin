<template>
  <div class="auth-fluid-pages pb-0">

    <div class="auth-fluid">
      <!--Auth fluid left content -->
      <div class="auth-fluid-form-box">
        <div class="align-items-center d-flex h-100">
          <div class="card-body">

            <!-- Logo -->
            <div class="auth-brand text-center text-lg-left">
              <a href="javascript:void(0);">
                <span><img src="/ace/assets/images/logo-light.png" alt="" height="18"></span>
              </a>
            </div>

            <!-- User pic with title-->
            <div class="text-center w-75 m-auto">
              <img src="/ace/assets/images/users/avatar-default-man.png" height="88" alt="user-image" class="rounded-circle shadow">
              <h4 class="text-dark-50 text-center mt-3 font-weight-bold">您好 ! {{ user.nickname ? user.nickname : user.username }} </h4>
              <p class="text-muted mb-4">请输入密码，解除锁定！</p>
            </div>

            <!-- form -->
            <div class="form-group mb-3">
              <label for="password">Password</label>
              <input class="form-control" type="password" required="" id="password" placeholder="Enter your password" v-model="ups">
            </div>
            <div class="form-group mb-0 text-center">
              <button class="btn btn-primary btn-block" @click="unlock"><i class="mdi mdi-login"></i> Log In </button>
            </div>
            <!-- social-->
            <div class="text-center mt-4">
              <p class="text-muted font-16">Authentication in with</p>
              <ul class="social-list list-inline mt-3">
                <li class="list-inline-item">
                  <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                  <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github-circle"></i></a>
                </li>
              </ul>
            </div>
            <!-- end form-->

            <!-- Footer-->
            <footer class="footer footer-alt">
              <p class="text-muted">Not you? return <a href="pages-login-2.html" class="text-muted ml-1"><b>Sign In</b></a></p>
            </footer>

          </div> <!-- end .card-body -->
        </div> <!-- end .align-items-center.d-flex.h-100-->
      </div>
      <!-- end auth-fluid-form-box-->

      <!-- Auth fluid right content -->
      <div class="auth-fluid-right text-center">
        <div class="auth-user-testimonial">
          <h2 class="mb-3">I love the color!</h2>
          <p class="lead"><i class="mdi mdi-format-quote-open"></i> It's a elegent templete. I love it very much! . <i class="mdi mdi-format-quote-close"></i>
          </p>
          <p>
            - Hyper Admin User
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
  name: 'lock',
  data () {
    return {
      user: {},
      ups: ''
    }
  },
  mounted () {
    const _this = this
    _this.user = JSON.parse(sessionStorage.getItem('loginUser'))
  },
  methods: {
    unlock () {
      const _this = this
      _this.$axios.get(_this.HOST + '/demo/user/unlock', {
        params: {
          id: _this.user.id,
          ups: _this.ups
        }
      }).then(res => {
        if (res.data.success) {
          sessionStorage.setItem('isLock', '0')
          _this.$router.push('/welcome')
        } else {
          alert(res.data.msg)
          _this.ups = ''
        }
      })
    }
  }
}
</script>
