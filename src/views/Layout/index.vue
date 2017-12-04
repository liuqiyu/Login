<template>
  <div>
    <topNav></topNav>
    <search></search>
    <router-view class="content common-w"></router-view>
    <ixFooter v-if="showFooter"></ixFooter>
  </div>
</template>

<script>
  import topNav from './topNav'
  import search from './search'
  import ixFooter from '../../components/ixFooter'

  export default {
    created () {
      this.$bus.$on('show/footer', this.showFoot)
    },
    beforeDestory () {
      this.$bus.$off('show/footer', this.showFoot)
    },
    components: {
      topNav,
      search,
      ixFooter
    },
    data () {
      return {
        showFooter: false
      }
    },
    methods: {
      showFoot () {
        this.showFooter = true
      }
    }
  }
</script>

<style>
  .content {
    background: #fff;
  }
</style>
