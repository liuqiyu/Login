<template>
  <header>
    <div class="header-box">
      <div class="title">豆瓣网站</div>
      <div class="header-nav">
        <router-link to="/" class="nav-item">电影</router-link>
        <router-link to="/1" class="nav-item">读书</router-link>
        <router-link to="/2" class="nav-item">音乐</router-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
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
    padding: 0 100px;
    margin: 0 auto;
    height: 30px;
    display: flex;
    flex-direction: row;
  }

  .header-box .title {
    line-height: 30px;
    font-size: 14px;
    color: #fff;
  }

  .header-nav {
    margin-left: 20px;
  }

  .nav-item {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 35px;
    color: rgba(255, 255, 255, .85);
    font-size: 12px;
  }

  .nav-item:hover {
    color: yellow;
  }

    .router-link-active {
    color: yellow;
  }
</style>
