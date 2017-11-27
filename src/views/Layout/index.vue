<template>
  <div>
    <topNav></topNav>
    <search></search>
    <router-view class="content"></router-view>
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
    width: 1200px;
    margin: 0 auto;
    background: #fff;
  }
</style>
