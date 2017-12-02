<template>
  <div>
    <topNav></topNav>
    <search></search>
    <router-view class="content common-w"></router-view>
    <ixFooter></ixFooter>
  </div>
</template>

<script>
  import topNav from './topNav'
  import search from './search'
  import ixFooter from '../../components/ixFooter'

  export default {
    components: {
      topNav,
      search,
      ixFooter
    }
  }
</script>

<style>
  .content {
    background: #fff;
  }
</style>
