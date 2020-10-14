<template>
  <div class="content">

    <!-- start page title -->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item"><a href="javascript: void(0);">主页</a></li>
              <li class="breadcrumb-item"><a href="javascript: void(0);">管理设置</a></li>
              <li class="breadcrumb-item active">个人信息</li>
            </ol>
          </div>
          <h4 class="page-title">个人信息</h4>
        </div> <!-- end page-title-box -->
      </div> <!-- end col-->
    </div>
    <!-- end page title -->

    <div class="row">
      <div class="col-sm-12">
        <!-- Profile -->
        <div class="card bg-primary">
          <div class="card-body profile-user-box">

            <div class="row">
              <div class="col-sm-8">
                <div class="media">
                  <span class="float-left m-2 mr-4"><img src="/ace/assets/images/users/avatar-default-man.png" style="height: 100px;" alt="" class="rounded-circle img-thumbnail"></span>
                  <div class="media-body">

                    <h4 class="mt-1 mb-1 text-white">{{ this.user.nickname }}</h4>
                    <p class="font-13 text-white-50">{{ this.user.username }}（{{ 'sid: ' + user.id }}）</p>

                    <ul class="mb-0 list-inline text-light">
                      <li class="list-inline-item">
                        <h5 class="mb-1">自我介绍</h5>
                        <p class="mb-0 font-13 text-white-50">这个人太懒了，什么都没留下...</p>
                      </li>
                    </ul>
                  </div> <!-- end media-body-->
                </div>
              </div> <!-- end col-->

              <div class="col-sm-4">
                <div class="text-center mt-sm-0 mt-3 text-sm-right">
                  <button type="button" class="btn btn-light" v-show="!isEdit" @click="edit">
                    <i class="mdi mdi-account-edit mr-1"></i> 编辑信息
                  </button>
                  <button type="button" class="btn btn-light" v-show="isEdit" @click="save">
                    <i class="mdi mdi-account-edit mr-1"></i> 保存信息
                  </button>
                </div>
              </div> <!-- end col-->
            </div> <!-- end row -->

          </div> <!-- end card-body/ profile-user-box-->
        </div><!--end profile/ card -->
      </div> <!-- end col-->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-md-6">
        <!-- Personal-Information -->
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-3">基本信息</h4>
            <p class="text-muted font-13">
              基本信息主要包括以下几项不涉及个人隐私的内容，如果您对此类信息较为敏感，可以不填或在设置中选择保密。当然，完善基本信息有助于其他人更快的了解您，让您拥有更多与他人交流的机会。如果您愿意的话，请在百忙之中抽出闲暇的片刻完善以下信息吧！
            </p>

            <hr/>

            <div class="text-left">
              <p class="text-muted" v-show="!isEdit">
                <strong>账号 :</strong>
                <span class="ml-2">{{ user.username }}</span>
              </p>

              <p class="text-muted" v-show="!isEdit">
                <strong>昵称 :</strong>
                <span class="ml-2" >{{ user.nickname }}</span>
                <input class="form-control col-md-10" v-show="isEdit" v-model="user.nickname" />
              </p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">昵称 :</label>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.nickname">
                </div>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>性别 :</strong> <span class="ml-2"> {{ gender }} </span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">性别 :</label>
                <div class="col-md-10  row mb-0">
                  <div class="col-md-4">
                    <select id="inputState" class="form-control" v-model="selectedGender">
                      <option>不明</option>
                      <option>男</option>
                      <option>女</option>
                    </select>
                  </div>
                </div>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>生日 :</strong><span class="ml-2"> 2000-11-11 </span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">生日 :</label>
                <DateSelect v-model="birthday"></DateSelect>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>所在地 :</strong> <span class="ml-2"> 中国 - 北京 </span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">所在地 :</label>
                <RegionSelect v-model="liveIn"></RegionSelect>
              </div>

              <p class="text-muted mb-0" v-show="!isEdit"><strong>家乡 :</strong><span class="ml-2"> 中国 - 河北 - 石家庄 </span></p>
              <div class="form-group row mb-0" v-show="isEdit">
                <label class="col-md-2 col-form-label">家乡 :</label>
                <RegionSelect v-model="hometown"></RegionSelect>
              </div>

            </div>
          </div>
        </div>
        <!-- Personal-Information -->

      </div> <!-- end col-->

      <div class="col-md-6">
        <!-- Personal-Information -->
        <div class="card">
          <div class="card-body">
            <h4 class="header-title mt-0 mb-3">认证信息</h4>
            <p class="text-muted font-13">
              认证信息主要包括以下几项涉及个人隐私的内容，<b style="color: red">请您谨慎填写。</b>此类信息主要用于账户安全和网站监管工作，比如：当您忘记密码需要重置密码是，则需要填写您绑定的认证信息；认证信息还可以防止不轨之人冒充您，如有需要就请快来绑定以下信息吧！
            </p>

            <hr/>

            <div class="text-left">
              <p class="text-muted" v-show="!isEdit"><strong>实名认证 :</strong> <span class="ml-2">{{ user.realName }} （{{ idCardEncode === '' ? '未认证' : idCardEncode }}）</span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">实名认证 :</label>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.nickname">
                </div>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>绑定手机号 :</strong><span class="ml-2">{{ phoneEncode === '' ? '未绑定' : phoneEncode }}</span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">绑定手机号 :</label>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.nickname">
                </div>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>绑定邮箱 :</strong> <span class="ml-2">{{ user.email == undefined || user.email === '' ? '未绑定' : user.email }}</span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">绑定邮箱 :</label>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.nickname">
                </div>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>绑定微信号 :</strong> <span class="ml-2">{{ user.weChatId == undefined || user.weChatId === '' ? '未绑定' : user.weChatId }}</span></p>
              <div class="form-group row mb-3" v-show="isEdit">
                <label class="col-md-2 col-form-label">绑定微信号 :</label>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.nickname">
                </div>
              </div>

              <p class="text-muted" v-show="!isEdit"><strong>绑定微博 :</strong>
                <span class="ml-2"> {{ user.sina == undefined || user.sina === '' ? '未绑定' : user.sina}} </span>
              </p>
              <div class="form-group row mb-0" v-show="isEdit">
                <label class="col-md-2 col-form-label">绑定微博 :</label>
                <div class="col-md-10">
                  <input type="text" class="form-control" v-model="user.nickname">
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- Personal-Information -->

      </div> <!-- end col-->

    </div>
    <!-- end row -->

  </div> <!-- content -->
</template>
<script>
import RegionSelect from '../../components/RegionSelect.vue'
import DateSelect from '../../components/DateSelect.vue'
export default {
  name: 'user',
  data () {
    return {
      user: JSON.parse(sessionStorage.getItem('loginUser')),
      isEdit: false,
      birthday: '',
      liveIn: '',
      hometown: '',
      idCardEncode: '',
      phoneEncode: '',
      gender: '不明',
      selectedGender: 2
    }
  },
  components: {
    RegionSelect,
    DateSelect
  },
  created () {
    const _this = this
    const idCard = _this.user.idCard
    const phone = _this.user.phone
    const genderNum = _this.user.gender
    if (idCard !== '') {
      _this.idCardEncode = idCard.substring(0, 3) + '***********' + idCard.substring(14)
    }
    if (phone !== '') {
      _this.phoneEncode = phone.substring(0, 3) + '****' + phone.substring(7)
    }
    if (genderNum !== '') {
      switch (genderNum) {
        case 0:
          _this.gender = '女'
          break
        case 1:
          _this.gender = '男'
          break
        default:
          _this.gender = '不明'
      }
    }
  },
  methods: {
    edit () {
      const _this = this
      _this.isEdit = !_this.isEdit
      _this.selectedGender = _this.gender
    },
    save () {
      const _this = this
      _this.isEdit = !_this.isEdit
    }
  }
}
</script>
