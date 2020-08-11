<template>
  <div class="content">

      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item"><a href="javascript: void(0);">Hyper</a></li>
                <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                <li class="breadcrumb-item active">404 Error</li>
              </ol>
            </div>
            <h4 class="page-title">功能建设中...</h4>
          </div> <!-- end page-title-box -->
        </div> <!-- end col-->
      </div>
      <!-- end page title -->

      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="text-center">
            <!--<img src="assets/images/file-searching.svg" height="90" alt="File not found Image">-->

            <h1 class="text-error mt-4">So Sorry</h1>
            <h4 class="text-uppercase text-danger mt-3">功能建设中</h4>
            <p class="text-muted mt-3">
              It's looking like you may have taken a wrong turn. Don't worry... it
              happens to the best of us. Here's a
              little tip that might help you get back on track.
            </p>
            <router-link to="/welcome" class="btn btn-info mt-3"><i class="mdi mdi-reply"></i> Return Home</router-link>
          </div> <!-- end /.text-center-->
        </div> <!-- end col-->
      </div>
      <!-- end row -->

    </div> <!-- content -->
</template>
<script>
export default {
  name: 'building'
}
</script>
