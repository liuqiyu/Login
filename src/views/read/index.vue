<template>
  <div>
    <ixSearch></ixSearch>
    <router-view></router-view>
  </div>
</template>

<script>
  import ixSearch from './../../components/ixSearch'

  export default {
    created () {
      // 标题
      this.$store.commit('title_update', '豆瓣读书')
    },
    components: {
      ixSearch
    }
  }
</script>

<style scoped>

</style>
