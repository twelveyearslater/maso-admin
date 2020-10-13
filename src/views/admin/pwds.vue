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
              <li class="breadcrumb-item active">Products</li>
            </ol>
          </div>
          <h4 class="page-title">账号清单</h4>
        </div> <!-- end page-title-box -->
      </div> <!-- end col-->
    </div>
    <!-- end page title -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <div class="col-sm-4">
                <router-link to='/password/add' class="btn btn-danger mb-2">
                  <i class="mdi mdi-account-plus mr-2"></i>添加
                </router-link>
              </div>
              <div class="col-sm-8">
                <div class="text-sm-right">
                  <button type="button" class="btn btn-light mb-2 mr-1" @click="getModel">下载模板</button>
                  <button type="button" class="btn btn-light mb-2 mr-1" @click="importExcel">导入</button>
                  <input type="file" ref="uploadExcel" v-show="false" accept=".xls,.xlsx" @change="parseExcel">
                  <button type="button" class="btn btn-light mb-2" @click="exportExcel">导出</button>
                </div>
              </div><!-- end col-->
            </div>

            <div class="table-responsive">
              <div id="products-datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                <!-- 分页数选择 开始-->
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div class="dataTables_length" id="products-datatable_length">
                      <label>展示
                        <select class="custom-select custom-select-sm ml-1 mr-1" v-model="pageCount" @change="selectPc($event)">
                          <option v-for="page in pages" :value="page.id" :key="page.id">{{page.count}}</option>
                          <!-- <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="-1">All</option> -->
                        </select>条
                      </label>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div id="products-datatable_filter" class="dataTables_filter">
                      <label>Search:
                        <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="products-datatable" />
                      </label>
                    </div>
                  </div>
                </div>
                <!-- 分页数选择 结束-->

                <!-- 数据列表 开始 -->
                <div class="row">
                  <div class="col-sm-12">
                    <table class="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                      <thead class="thead-light">
                      <tr  role="row">
                        <th class="all" style="width: 20px;">
                          <!--<div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">&nbsp;</label>
                          </div>-->
                        </th>
                        <th class="all">平台</th>
                        <th>用户名/账号</th>
                        <th>邮箱</th>
                        <th>备注</th>
                        <th>创建日期</th>
                        <th>状态</th>
                        <th style="width: 85px;">操作</th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="(pwd,i) in pwds" :key="pwd.id">
                        <td class="dt-checkboxes-cell">
                          <!--<div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" :id="getCheckId(i)">
                            <label class="custom-control-label" :for="getCheckId(i)">&nbsp;</label>
                          </div>-->
                        </td>
                        <td>
                          <img :src="'/ace/assets/p_images/' + pwd.iconUrl" alt="contact-img" title="contact-img" class="rounded mr-3" height="48" />
                          <p class="m-0 d-inline-block align-middle font-16">
                            {{ pwd.platformName }}
                            <br/>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star"></span>
                            <span class="text-warning mdi mdi-star"></span>
                          </p>
                        </td>
                        <td>
                          {{ pwd.username }}
                        </td>
                        <td>
                          {{ pwd.email }}
                        </td>
                        <td>
                          {{ pwd.remark }}
                        </td>

                        <td>
                          {{ pwd.createTime.substring(0,10) }}
                        </td>
                        <td>
                          <span class="badge badge-success">{{ pwd.status == 1 ? '启用' :  '停用' }}</span>
                        </td>

                        <td class="table-action">
                          <a href="javascript:void(0);" data-clipboard-text="passS" id="copy-p" class="action-icon" @click="copyText(i)"> <i class="mdi mdi-bullseye"></i></a>
                          <a href="javascript:void(0);" class="action-icon" @click="modify(i)"> <i class="mdi mdi-circle-edit-outline"></i></a>
                          <a href="javascript:;" class="action-icon" @click="deletePwd(i)"> <i class="mdi mdi-delete"></i></a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- 数据列表 结束 -->
                <div class="row">
                  <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="products-datatable_info" role="status" aria-live="polite">展示 {{firstCount}} to {{ lastCount > totalCount ? totalCount : lastCount }} of {{totalCount}}</div>
                  </div>

                  <div class="col-sm-12 col-md-7">

                    <div class="dataTables_paginate paging_simple_numbers" id="products-datatable_paginate">

                      <ul class="pagination pagination-rounded">
                        <li v-for="(pageMark, index) in pageMarks" :class="pageMark.class" :id="pageMark.id" :key="index">
                          <a href="javascript:;" @click="turnPage(index)" aria-controls="products-datatable" :data-dt-idx="index" tabindex="0" class="page-link" v-html="pageMark.content"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> <!-- end card-body-->
        </div> <!-- end card-->
      </div> <!-- end col -->
    </div>
    <!-- end row -->
  </div> <!-- content -->
</template>

<script>
export default {
  name: 'pwds',
  data () {
    return {
      /* eslint-disable */
      encryptObj : new JSEncrypt(),
      /* eslint-enable */
      pageCount: 5,
      user: JSON.parse(sessionStorage.getItem('loginUser')),
      pages: [
        { id: 5, count: 5 },
        { id: 10, count: 10 },
        { id: 20, count: 20 },
        { id: -1, count: 'ALL' }
      ],
      firstCount: 1,
      totalCount: 0,
      currentPage: 1,
      lastCount: 0,
      pwds: [],
      pageMarks: [
        {
          class: 'paginate_button page-item previous',
          id: 'products-datatable_previous',
          content: '<i class="mdi mdi-chevron-left"></i>'
        },
        {
          class: 'paginate_button page-item next',
          id: 'products-datatable_next',
          content: '<i class="mdi mdi-chevron-right"></i>'
        }
      ]
    }
  },
  mounted () {
    const _this = this
    _this.getPwds()
  },
  methods: {
    getPwds () {
      const _this = this
      _this.$axios.get(_this.HOST + '/demo/psw/getPageListByUser', {
        params: {
          userId: _this.user.id,
          currentPage: _this.currentPage,
          pageCount: _this.pageCount
        }
      }).then(function (res) {
        _this.checkOnline(res.data)
        _this.pwds = res.data.data.data // data是vue封装的一层
        _this.totalCount = res.data.data.totalCount
        _this.firstCount = res.data.data.firstCount
        _this.lastCount = res.data.data.lastCount
        _this.loadPageMark()
      })
    },
    loadPageMark () {
      const _this = this
      if (_this.pageMarks.length > 2) {
        _this.pageMarks.splice(1, _this.pageMarks.length - 2)
      }
      if (_this.currentPage === 1) {
        _this.pageMarks[0].class = 'paginate_button page-item previous disabled'
      } else {
        _this.pageMarks[0].class = 'paginate_button page-item previous'
      }
      const maxPage = Math.ceil(_this.totalCount / _this.pageCount)
      if (_this.currentPage === maxPage) {
        _this.pageMarks[1].class = 'paginate_button page-item next disabled'
      } else {
        _this.pageMarks[1].class = 'paginate_button page-item next'
      }
      for (var i = 2; i > -3; i--) {
        if (_this.currentPage + i > 0 && _this.currentPage + i <= maxPage) {
          _this.pageMarks.splice(1, 0, {
            class: i === 0 ? 'paginate_button page-item active' : 'paginate_button page-item',
            id: '',
            content: _this.currentPage + i
          })
        }
      }
    },
    turnPage (index) {
      const _this = this
      if (index === 0) {
        _this.currentPage--
      } else if (index === _this.pageMarks.length - 1) {
        _this.currentPage++
      } else {
        _this.currentPage = _this.pageMarks[index].content
      }
      _this.getPwds()
    },
    getModel () {
      window.open('/ace/用户信息模板.xlsx')
    },
    importExcel () {
      const _this = this
      _this.dialogChangePwdVisible = true
      _this.$refs.uploadExcel.click()
    },
    parseExcel (e) {
      const _this = this
      const files = e.target.files
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('userId', _this.userId)
      _this.$axios.post(_this.HOST + 'demo/psw/import', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then((res) => {
        if (res.data.success) {
          alert(res.data.msg)
          _this.getPwd()
        } else {
          alert(res.data.msg + '不符合模板要求！')
        }
      })
    },
    exportExcel () {
      const _this = this
      window.open('../psw/download?userId=' + _this.userId)
      _this.$axios.get(_this.HOST + 'demo/psw/download', {
        responseType: 'blob',
        params: {
          userId: _this.userId
        }
      })
    },
    modify (index) {
      const _this = this
      const pid = _this.pwds[index].id
      _this.$router.push({ path: '/password/modify', query: { pid: pid } })
    },
    deletePwd (index) {
      const _this = this
      _this.$axios.get(_this.HOST + 'demo/psw/remove', {
        params: {
          id: _this.pwds[index].id
        }
      }).then(function (res) {
        if (res.data.success) {
          alert('操作完成！')
          _this.getPwds()
        } else {
          alert('操作失败，请重新尝试！')
        }
      })
    },
    copyText (index) {
      const _this = this
      const pass = _this.decodeA(_this.pwds[index].password)
      alert('请手动复制[密码]：' + pass)
    },
    decodeA (pass) {
      const _this = this
      _this.encryptObj.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----' + _this.user.decodeQueue + '-----END RSA PRIVATE KEY-----')
      pass = _this.encryptObj.decrypt(pass)
      return pass
    }
  }
}
</script>
