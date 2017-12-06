<template>
  <div class="footer">
    <div class="foot-menu">
      <a href="#">技术说明</a>
      <a href="#">网站介绍</a>
      <a href="#">最新动态</a>
      <a href="#">个人想法</a>
      <a href="#">关于自己</a>
    </div>
    <p></p>
  </div>
</template>

<script>
    export default {
      name: 'footer'
    }
</script>

<style scoped>
  .footer {
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.25);
  }

  .foot-menu {
    text-align: center;
    padding: 10px 0;
  }

  .foot-menu a {
    padding: 0 8px;
    font-size: 12px;
    color: rgba(0,0,0,.8);
  }
</style>
