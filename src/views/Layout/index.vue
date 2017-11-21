<template>
  <div>
    <topNav></topNav>
    <search></search>
    <router-view></router-view>
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

</style>
