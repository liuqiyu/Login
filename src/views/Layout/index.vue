<template>
  <div>
    <ixTopNav></ixTopNav>
    <router-view class="content"></router-view>
    <ixFooter v-if="showFooter"></ixFooter>
  </div>
</template>

<script>
  import ixTopNav from './ixTopNav'
  import ixFooter from './ixFooter'

  export default {
    created () {
      this.$bus.$on('show/footer', this.showFoot)
      this.$bus.$on('hide/footer', this.hideFoot)
    },
    beforeDestory () {
      this.$bus.$off('show/footer', this.showFoot)
      this.$bus.$off('hide/footer', this.hideFoot)
    },
    components: {
      ixTopNav,
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
      },
      hideFoot () {
        this.showFooter = false
      }
    }
  }
</script>

<style>
  .content {
    background: #fff;
  }
</style>
