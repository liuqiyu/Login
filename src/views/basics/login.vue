<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  created () {
    // window.sessionStorage.removeItem('isLogin')
  },
  methods: {
//    toLogin () {
//      window.sessionStorage.setItem('isLogin', 1)
//      this.$router.push({
//        path: '/Film'
//      })
//    }
  }
}
</script>

<style scoped>
  body {
    background-color: #eee;
    overflow: hidden;
  }
  canvas {
    background-color: #eee;
    display: block;
    margin: 0 auto;
  }
</style>
