<template>
<div>
  <div id ="all-content">
    <!-- Topbar Start -->
    <div class="navbar-custom topnav-navbar">
      <div class="container-fluid">

        <!-- LOGO -->
        <a href="#" class="topnav-logo">
          <span class="topnav-logo-lg">
            <img src="/ace/assets/images/logo-light.png" alt="" height="16">
          </span>
          <span class="topnav-logo-sm">
            <img src="/ace/assets/logo_sm.png" alt="" height="16">
          </span>
        </a>

        <ul class="list-unstyled topbar-right-menu float-right mb-0">

          <li class="dropdown notification-list topbar-dropdown d-none d-lg-block">
            <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" id="topbar-languagedrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <img src="/ace/assets/images/flags/china.jpg" alt="user-image" class="mr-1" height="12"> <span class="align-middle">中文</span> <i class="mdi mdi-chevron-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu" aria-labelledby="topbar-languagedrop">

              <!-- item-->
              <a href="javascript:alert('平台还未支持该语言');" class="dropdown-item notify-item">
                <img src="/ace/assets/images/flags/germany.jpg" alt="user-image" class="mr-1" height="12"> <span class="align-middle">德文</span>
              </a>

              <!-- item-->
              <a href="javascript:alert('平台还未支持该语言');" class="dropdown-item notify-item">
                <img src="/ace/assets/images/flags/us.jpg" alt="user-image" class="mr-1" height="12"> <span class="align-middle">英文</span>
              </a>

              <!-- item-->
              <a href="javascript:alert('平台还未支持该语言');" class="dropdown-item notify-item">
                <img src="/ace/assets/images/flags/spain.jpg" alt="user-image" class="mr-1" height="12"> <span class="align-middle">西班牙文</span>
              </a>

              <!-- item-->
              <a href="javascript:alert('平台还未支持该语言');" class="dropdown-item notify-item">
                <img src="/ace/assets/images/flags/russia.jpg" alt="user-image" class="mr-1" height="12"> <span class="align-middle">俄文</span>
              </a>

            </div>
          </li>

          <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" id="topbar-notifydrop" role="button" aria-haspopup="true" aria-expanded="false">
              <i class="dripicons-bell noti-icon"></i>
              <span class="noti-icon-badge"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg" aria-labelledby="topbar-notifydrop">

              <!-- item-->
              <div class="dropdown-item noti-title">
                <h5 class="m-0">
                      <span class="float-right">
                        <a href="javascript: void(0);" class="text-dark">
                          <small>Clear All</small>
                        </a>
                      </span>Notification
                </h5>
              </div>

              <div class="slimscroll" style="max-height: 230px;">
                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-primary">
                    <i class="mdi mdi-comment-account-outline"></i>
                  </div>
                  <p class="notify-details">Caleb Flakelar commented on Admin
                    <small class="text-muted">1 min ago</small>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-info">
                    <i class="mdi mdi-account-plus"></i>
                  </div>
                  <p class="notify-details">New user registered.
                    <small class="text-muted">5 hours ago</small>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon">
                    <img src="/ace/assets/images/users/avatar-2.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                  <p class="notify-details">Cristina Pride</p>
                  <p class="text-muted mb-0 user-msg">
                    <small>Hi, How are you? What about our next meeting</small>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-primary">
                    <i class="mdi mdi-comment-account-outline"></i>
                  </div>
                  <p class="notify-details">Caleb Flakelar commented on Admin
                    <small class="text-muted">4 days ago</small>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon">
                    <img src="/ace/assets/images/users/avatar-4.jpg" class="img-fluid rounded-circle" alt="" /> </div>
                  <p class="notify-details">Karen Robinson</p>
                  <p class="text-muted mb-0 user-msg">
                    <small>Wow ! this admin looks good and awesome design</small>
                  </p>
                </a>

                <!-- item-->
                <a href="javascript:void(0);" class="dropdown-item notify-item">
                  <div class="notify-icon bg-info">
                    <i class="mdi mdi-heart"></i>
                  </div>
                  <p class="notify-details">Carlos Crouch liked
                    <b>Admin</b>
                    <small class="text-muted">13 days ago</small>
                  </p>
                </a>
              </div>

              <!-- All-->
              <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
                View All
              </a>

            </div>
          </li>

          <li class="dropdown notification-list">
            <a class="nav-link right-bar-toggle" href="javascript: void(0);">
              <i class="dripicons-gear noti-icon"></i>
            </a>
          </li>

          <li class="dropdown notification-list">
            <a class="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
                  <span class="account-user-avatar">
                    <img src="/ace/assets/images/users/avatar-default-man.png" alt="user-image" class="rounded-circle">
                  </span>
              <span>
                    <span class="account-user-name">{{ user.nickname ? user.nickname : user.username }}</span>
                    <span class="account-position">普通用户</span>
                  </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
              <!-- item-->
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">您好，{{ user.nickname }} !</h6>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-circle mr-1"></i>
                <span>我的账户</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-edit mr-1"></i>
                <span>设置</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account-supervisor mr-1"></i>
                <span>支持</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item" @click="lock">
                <i class="mdi mdi-account-clock-outline mr-1"></i>
                <span>锁屏</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item" @click="logout">
                <i class="mdi mdi-account-off mr-1"></i>
                <span>退出</span>
              </a>

            </div>
          </li>

        </ul>
        <a class="button-menu-mobile disable-btn">
          <div class="lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
        <!--<div class="app-search">
          <form>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="查询...">
              <span class="mdi mdi-magnify"></span>
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">查询</button>
              </div>
            </div>
          </form>
        </div>-->
      </div>
    </div>

    <!-- end Topbar -->
    <div class="container-fluid">

      <!-- Begin page -->
      <div class="wrapper">

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <!-- Start Content-->

        <!-- ========== Left Sidebar Start ========== -->
        <div class="left-side-menu action">

          <div class="leftbar-user">
            <a href="#">
              <img src="/ace/assets/images/users/avatar-default-man.png" alt="user-image" height="42" class="rounded-circle shadow-sm">
              <span class="leftbar-user-name">{{ user.nickname ? user.nickname : user.username }}</span>
            </a>
          </div>

          <!--- Sidemenu -->
          <ul class="metismenu side-nav in">
            <li class="side-nav-title side-nav-item">『 功能菜单 』</li>
            <li v-for="(menu) in menus" :key="menu.id" class="side-nav-item action">
              <a href="javascript: void(0);" class="side-nav-link action">
              <i class="dripicons-meter"></i>
              <span class="badge badge-success float-right">3</span>
              <span> {{ menu.name }} </span>
              </a>
              <ul class="side-nav-second-level" aria-expanded="false">
                <li v-for="(son) in menu.sons" :key="son.id">
                  <router-link :to=son.url> {{ son.name }} </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- Help Box -->
          <div class="help-box text-center">
            <a href="javascript: void(0);" class="float-right close-btn text-body">
              <i class="mdi mdi-close"></i>
            </a>
            <img src="/ace/assets/images/help-icon.svg" height="90" alt="Helper Icon Image" />
            <h5 class="mt-3">Unlimited Access</h5>
            <p class="mb-3">Upgrade to plan to get access to unlimited reports</p>
            <a href="javascript: void(0);" class="btn btn-outline-primary btn-sm">Upgrade</a>
          </div>
          <!-- end Help Box -->
          <!-- End Sidebar -->
          <div class="clearfix"></div>
          <!-- Sidebar -left -->

        </div>
        <!-- Left Sidebar End -->
        <div class="content-page">
          <router-view></router-view>
            <!-- Footer Start -->
          <footer class="footer">
            <div class="row">
              <div class="col-md-6">
                2019 - 2020 © Hyper - masochism.top
              </div>
              <div class="col-md-6">
                <div class="text-md-right footer-links d-none d-md-block">
                  <a href="javascript: void(0);">关于</a>
                  <a href="javascript: void(0);">支持</a>
                  <a href="javascript: void(0);">联系我们</a>
                </div>
              </div>
            </div>
          </footer>
          <!-- end Footer -->
        </div>
      </div> <!-- end wrapper-->

      <!-- ============================================================== -->
      <!-- End Page content -->
      <!-- ============================================================== -->

    </div>
    <!-- END Container -->

    <!-- Right Sidebar -->
    <div class="right-bar">

      <div class="rightbar-title">
        <a href="javascript:void(0);" class="right-bar-toggle float-right">
          <i class="dripicons-cross noti-icon"></i>
        </a>
        <h5 class="m-0">Settings</h5>
      </div>

      <div class="slimscroll-menu rightbar-content">

        <!-- Settings -->
        <hr class="mt-0" />
        <h5 class="pl-3">Basic Settings</h5>
        <hr class="mb-0" />

        <div class="p-3">
          <div class="custom-control custom-checkbox mb-2">
            <input type="checkbox" class="custom-control-input" id="notifications-check" checked>
            <label class="custom-control-label" for="notifications-check">Notifications</label>
          </div>

          <div class="custom-control custom-checkbox mb-2">
            <input type="checkbox" class="custom-control-input" id="api-access-check">
            <label class="custom-control-label" for="api-access-check">API Access</label>
          </div>

          <div class="custom-control custom-checkbox mb-2">
            <input type="checkbox" class="custom-control-input" id="auto-updates-check" checked>
            <label class="custom-control-label" for="auto-updates-check">Auto Updates</label>
          </div>

          <div class="custom-control custom-checkbox mb-2">
            <input type="checkbox" class="custom-control-input" id="online-status-check" checked>
            <label class="custom-control-label" for="online-status-check">Online Status</label>
          </div>

          <div class="custom-control custom-checkbox mb-2">
            <input type="checkbox" class="custom-control-input" id="auto-payout-check">
            <label class="custom-control-label" for="auto-payout-check">Auto Payout</label>
          </div>

        </div>

        <!-- Timeline -->
        <hr class="mt-0" />
        <h5 class="pl-3">Recent Activity</h5>
        <hr class="mb-0" />
        <div class="pl-2 pr-2">
          <div class="timeline-alt">
            <div class="timeline-item">
              <i class="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
              <div class="timeline-item-info">
                <a href="#" class="text-info font-weight-bold mb-1 d-block">You sold an item</a>
                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                <p class="mb-0 pb-2">
                  <small class="text-muted">5 minutes ago</small>
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <i class="mdi mdi-airplane bg-primary-lighten text-primary timeline-icon"></i>
              <div class="timeline-item-info">
                <a href="#" class="text-primary font-weight-bold mb-1 d-block">Product on the Bootstrap Market</a>
                <small>Dave Gamache added
                  <span class="font-weight-bold">Admin Dashboard</span>
                </small>
                <p class="mb-0 pb-2">
                  <small class="text-muted">30 minutes ago</small>
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <i class="mdi mdi-microphone bg-info-lighten text-info timeline-icon"></i>
              <div class="timeline-item-info">
                <a href="#" class="text-info font-weight-bold mb-1 d-block">Robert Delaney</a>
                <small>Send you message
                  <span class="font-weight-bold">"Are you there?"</span>
                </small>
                <p class="mb-0 pb-2">
                  <small class="text-muted">2 hours ago</small>
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <i class="mdi mdi-upload bg-primary-lighten text-primary timeline-icon"></i>
              <div class="timeline-item-info">
                <a href="#" class="text-primary font-weight-bold mb-1 d-block">Audrey Tobey</a>
                <small>Uploaded a photo
                  <span class="font-weight-bold">"Error.jpg"</span>
                </small>
                <p class="mb-0 pb-2">
                  <small class="text-muted">14 hours ago</small>
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <i class="mdi mdi-upload bg-info-lighten text-info timeline-icon"></i>
              <div class="timeline-item-info">
                <a href="#" class="text-info font-weight-bold mb-1 d-block">You sold an item</a>
                <small>Paul Burgess just purchased “Hyper - Admin Dashboard”!</small>
                <p class="mb-0 pb-2">
                  <small class="text-muted">1 day ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rightbar-overlay"></div>
  <!-- /Right-bar -->
</div>
</template>
<script>
export default {
  name: 'admin',
  data () {
    return {
      user: {},
      menus: []
    }
  },
  mounted () {
    const _this = this
    _this.user = JSON.parse(sessionStorage.getItem('loginUser'))
    _this.getMenus((arr) => {
      _this.handleMenu(arr)
    })
  },
  // mounted () {
  //   const _this = this
  //   _this.user = JSON.parse(sessionStorage.getItem('loginUser'))
  //   _this.getMenus((arr) => {
  //     _this.handleMenu(arr)
  //   })
  // },
  methods: {
    logout () {
      const _this = this
      _this.$axios.get(_this.HOST + '/demo/user/logout', {
        params: {

        }
      }).then(function (res) {
        if (res.data.success) {
          sessionStorage.removeItem('loginUser')
          _this.$router.push('/login')
        } else {
          alert('退出失败，请重新退出!')
        }
      })
    },
    getMenus (callback) {
      const _this = this
      _this.$axios.get(_this.HOST + '/demo/menu/getCommon', {
        params: {

        }
      }).then(function (res) {
        if (res.data.success) {
          callback(res.data.data)
        } else {
          alert(res.data.msg)
        }
      })
    },
    handleMenu (menuArr) {
      const _this = this
      for (const menu of menuArr) {
        if (menu.level === 1) {
          menu.sons = []
          _this.menus.push(menu)
        } else {
          for (const up of _this.menus) {
            if (up.id === menu.upId) {
              up.sons.push(menu)
            }
          }
        }
      }
      console.log(_this.menus)
    },
    lock () {
      const _this = this
      sessionStorage.setItem('isLock', '1')
      _this.$router.push('/lock')
    }
  }
}
</script>
