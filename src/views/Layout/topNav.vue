<template>
  <header>
    <div class="header-box">
      <div clas="header-l">
        <div class="title">豆瓣网站</div>
        <div class="header-nav">
          <router-link to="/Film" class="nav-item">电影</router-link>
          <router-link to="/Read" class="nav-item">读书</router-link>
          <router-link to="/Music" class="nav-item">音乐</router-link>
        </div>
      </div>
      <div class="header-r">
        <el-button type="" size="mini" v-if="isLogin">用户1</el-button>
        <el-button @click="logout" type="" size="mini" v-if="isLogin">注销</el-button>
        <el-button type="" size="mini" v-if="!isLogin">登录</el-button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    created () {
      const isLogin = window.sessionStorage.getItem('isLogin')
      if (!isLogin || isLogin === null) {
        this.isLogin = false
      } else {
        this.isLogin = true
      }
    },
    data () {
      return {
        isLogin: false
      }
    },
    methods: {
      logout () {
        window.sessionStorage.removeItem('isLogin')
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

<style scoped>
  header {
    background: #409EFF;
    width: 100%;
    overflow: hidden;
  }

  .header-box {
    /*width: 1200px;*/
    padding: 0 20px;
    margin: 0 auto;
    height: 30px;
    display: flex;
    flex-direction: row;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
  }

  .header-box .title {
    display: inline-block;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
  }

  .header-nav {
    display: inline-block;
    margin-left: 5px;
  }

  .nav-item {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 32px;
    color: rgba(255, 255, 255, .85);
    font-size: 12px;
  }

  .nav-item:hover {
    color: yellow;
  }

  .router-link-active {
  color: yellow;
  }

  .user {
    float: right;
  }
</style>
