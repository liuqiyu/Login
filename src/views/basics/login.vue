<template>
  <div id="login">
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="login-box">
      <div class="title">逗比网站</div>
      <div class="subtitle">与世界分享你的知识、经验和见解</div>
      <div class="submit">
        <el-button @click="toLogin">点击登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from './../../login'

  export default {
    mounted () {
      // 背景动态图片
      Login.loginBG(this.$refs.canvas)
    },
    methods: {
      toLogin () {
        window.sessionStorage.setItem('isLogin', 1)
        this.$router.push({
          path: '/Film'
        })
      }
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

  #login {
    position: relative;
  }

  .login-box {
    width: 300px;
    height: 500px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top: -250px;
    margin-left: -150px;
  }

  .title {
    font-size: 46px;
    opacity: 0;
    text-align: center;
    font-family: 'PingFang SC';
    color: #0f88eb;
  }

  .subtitle {
    margin: 30px 0 20px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    text-align: center;
  }

  .submit {
    text-align: center;
    padding: 30px 0;
  }
</style>
