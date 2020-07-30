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
                <a href="_save-pwd.html;" class="btn btn-danger mb-2"><i class="mdi mdi-account-plus mr-2"></i>添加 </a>
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
                          <img :src="assets/p_images/pwd.iconUrl" alt="contact-img" title="contact-img" class="rounded mr-3" height="48" />
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
                        <li v-for="(pageMark,index) in pageMarks" :class="pageMark.class" :id="pageMark.id" :key="pageMark.id">
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
