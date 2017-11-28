<template>
  <div>
    <topNav></topNav>
    <search></search>
    <router-view class="content common-w"></router-view>
  </div>
</template>

<script>
  import topNav from './topNav'
  import search from './search'

  export default {
    components: {
      topNav,
      search
    }
  }
</script>

<style>
  .content {
    background: #fff;
  }
</style>
