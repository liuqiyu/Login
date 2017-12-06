<template>
  <div>
    <ixSearch></ixSearch>
    <ixTypeTabs></ixTypeTabs>
    <router-view></router-view>
  </div>
</template>

<script>
  import ixSearch from './../../components/ixSearch'
  import ixTypeTabs from './../../components/ixTypeTabs'

  export default {
    created () {
      // 标题
      this.$store.commit('title_update', '豆瓣电影')
    },
    components: {
      ixSearch,
      ixTypeTabs
    }
  }
</script>

<style scoped>

</style>
