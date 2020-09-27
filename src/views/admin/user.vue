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
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-account-edit mr-1"></i> 编辑信息
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
              <p class="text-muted"><strong>账号 :</strong> <span class="ml-2">{{ user.username }}</span></p>

              <p class="text-muted"><strong>昵称 :</strong><span class="ml-2">{{ user.nickname }}</span></p>

              <p class="text-muted"><strong>性别 :</strong> <span class="ml-2"> 不明 </span></p>

              <p class="text-muted"><strong>生日 :</strong><span class="ml-2"> 2000-11-11 </span></p>

              <p class="text-muted"><strong>所在地 :</strong> <span class="ml-2"> 中国 - 北京 </span></p>

              <p class="text-muted mb-0"><strong>家乡 :</strong><span class="ml-2"> 中国 - 河北 - 石家庄 </span></p>

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
              <p class="text-muted"><strong>实名认证 :</strong> <span class="ml-2">Michael A. Franklin</span></p>

              <p class="text-muted"><strong>绑定手机号 :</strong><span class="ml-2">(+86) 123 1234 5678</span></p>

              <p class="text-muted"><strong>绑定邮箱 :</strong> <span class="ml-2">aaaaa347852901@qq.com</span></p>

              <p class="text-muted"><strong>绑定微信号 :</strong> <span class="ml-2">T-mac_347852901</span></p>

              <p class="text-muted"><strong>绑定微博 :</strong>
                <span class="ml-2"> 暂无 </span>
              </p>

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
export default {
  name: 'user',
  data () {
    return {
      user: JSON.parse(sessionStorage.getItem('loginUser'))
    }
  }
}
</script>
