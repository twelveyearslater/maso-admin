<template>
  <div class="content">

    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
              <li class="breadcrumb-item"><a href="javascript: void(0);">eCommerce</a></li>
              <li class="breadcrumb-item active">Checkout</li>
            </ol>
          </div>
          <h4 class="page-title">Checkout</h4>
        </div> <!-- end page-title-box -->
      </div> <!-- end col-->
    </div>
    <!-- end page title -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">

            <!-- Checkout Steps -->
            <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
              <li class="nav-item">
                <a href="#billing-information" data-toggle="tab" aria-expanded="false"
                   class="nav-link rounded-0 active">
                  <i class="mdi mdi-account-circle font-18"></i>
                  <span class="d-none d-lg-block">网站用户信息</span>
                </a>
              </li>
            </ul>

            <!-- Steps Information -->
            <div class="tab-content" id="add">

              <!-- Billing Content-->
              <div class="tab-pane show active" id="billing-information">
                <div class="row">
                  <div class="col-lg-12">
                    <h4 class="mt-2">网站用户信息</h4>

                    <p class="text-muted mb-4">补充您的密码信息，然后保存</p>

                    <div class="row">
                      <div class="col-md-2">
                        <div class="form-group">
                          <label>平台名称 <span class="text-danger">*</span></label>
                          <select class="form-control" title="Country" v-model="select0" @change='selected'>
                            <option value=""> 请选择</option>
                            <option v-for="(web, index) in platforms" :value="index" :key="index">{{ web.platformName }}
                            </option>
                          </select>
                          <input type="hidden" v-model="pName"/>
                          <!--<input class="form-control" type="text" placeholder="请输入用户的网站名" id="new-adr-first-name" />-->
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="new-adr-last-name"> ( 选择或输入 ) <span class="text-danger"> </span></label>
                          <input class="form-control" type="text" placeholder="请输入网站的网站名" v-model="inputName" @blur="afterInput" required/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="new-adr-last-name">用户名 <span class="text-danger">*</span></label>
                          <input class="form-control" type="text" placeholder="请输入网站的用户名" id="new-adr-last-name" v-model="username" required/>
                        </div>
                      </div>
                    </div> <!-- end row -->
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="billing-last-name">密码 <span class="text-danger">*</span></label>
                          <input class="form-control" type="password" placeholder="请输入网站的密码" id="billing-last-name" v-model="password" required/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="billing-phone">绑定手机号</label>
                          <input class="form-control" type="text" placeholder="请输入绑定的手机号" id="billing-phone" v-model="phone"/>
                        </div>
                      </div>
                    </div> <!-- end row -->
                    <div  class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="billing-email-address">绑定邮箱</label>
                          <input class="form-control" type="email" placeholder="请输入绑定的邮箱" id="billing-email-address" v-model="email" />
                        </div>
                      </div>
                    </div> <!-- end row -->
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="new-adr-address">身份证号</label>
                          <input class="form-control" type="text" placeholder="请输入绑定的身份证号" id="new-adr-address" v-model="idCard">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>状态 <span class="text-danger">*</span></label>
                          <select class="form-control" title="Country" v-model="state0" required>
                            <option value="1"> 启用</option>
                            <option value="2"> 不启用</option>
                          </select>
                        </div>
                      </div>
                    </div> <!-- end row -->

                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck2" v-model="state1">
                            <label class="custom-control-label" for="customCheck2">是否放入保险箱？</label>
                          </div>
                        </div>

                        <div class="form-group mt-3">
                          <label for="example-textarea">备注:</label>
                          <textarea class="form-control" id="example-textarea" rows="3" placeholder="请输入备注信息.." v-model="remark"></textarea>
                        </div>
                      </div>
                    </div> <!-- end row -->

                    <div class="row mt-4">
                      <div class="col-sm-6">
                        <router-link to="/password/list" class="btn text-muted d-none d-sm-inline-block btn-link font-weight-semibold">
                          <i class="mdi mdi-arrow-left"></i>返回用户列表
                        </router-link>
                      </div> <!-- end col -->
                      <div class="col-sm-6">
                        <div class="text-sm-right">
                          <button class="btn btn-danger" @click="save">
                            <b class="mdi mdi-truck-fast mr-1"></b>保存</button>
                        </div>
                      </div> <!-- end col -->
                    </div> <!-- end row -->
                  </div>
                </div> <!-- end row-->
              </div>
              <!-- End Billing Information Content-->

            </div> <!-- end tab content-->

          </div> <!-- end card-body-->
        </div> <!-- end card-->
      </div> <!-- end col -->
    </div>
    <!-- end row-->

  </div> <!-- content -->
</template>
<script>
export default {
  name: 'addPwd',
  data () {
    return {
      /* eslint-disable */
      encryptObj : new JSEncrypt(),
      /* eslint-enable */
      code: '',
      pName: '',
      userId: '',
      select0: '',
      select1: '',
      username: '',
      password: '',
      inputName: '',
      platforms: [],
      email: '',
      phone: '',
      idCard: '',
      state0: '',
      state1: '',
      remark: '',
      user: JSON.parse(sessionStorage.getItem('loginUser'))
    }
  },
  mounted () {
    this.getPlatforms()
  },
  methods: {
    encodeA (pass) {
      const _this = this
      _this.encryptObj.setPublicKey('-----BEGIN PUBLIC KEY-----' + _this.user.encodeQueue + '-----END PUBLIC KEY-----')
      return _this.encryptObj.encrypt(pass)
    },
    save () {
      const _this = this
      const pwdMsg = {}
      pwdMsg.userId = _this.user.id
      pwdMsg.username = _this.username
      pwdMsg.password = _this.encodeA(_this.password)
      pwdMsg.phone = _this.phone
      pwdMsg.email = _this.email
      pwdMsg.idCard = _this.idCard
      pwdMsg.remark = _this.remark
      if (_this.state1 === 1) {
        pwdMsg.status = 3
      } else {
        pwdMsg.status = _this.state0
      }
      if (_this.select0 === '') {
        pwdMsg.platformId = _this.select0
      } else {
        pwdMsg.platformId = _this.platforms[_this.select0].id
      }
      pwdMsg.platformName = _this.inputName
      _this.$axios.get(_this.HOST + 'demo/psw/add', {
        params: {
          pswMsg: JSON.stringify(pwdMsg)
        }
      }).then(function (res) {
        if (res.data.success) {
          alert('操作成功！')
          _this.$router.push('/password/list')
        } else {
          alert('操作失败！')
        }
        _this.platforms = res.data.data // data是vue封装的一层
      })
    },
    getPlatforms () {
      const _this = this
      _this.$axios.get(_this.HOST + '/demo/platform/getListForSelect', {
        params: {
        }
      }).then(function (res) {
        _this.platforms = res.data.data // data是vue封装的一层
      })
    },
    selected () {
      const _this = this
      _this.pName = _this.platforms[_this.select0].platformName
      _this.inputName = _this.pName
    },
    afterInput () {
      const _this = this
      _this.select0 = ''
      for (let i = 0; i < _this.platforms.length; i++) {
        if (_this.platforms[i].platformName === _this.inputName) {
          _this.select0 = i
          break
        }
      }
    }
  }
}
</script>
