<template>
  <div class="type-tabs common-w">
    <router-link :exact-active-class="activeTabs" :key="index" v-for="(item, index) in dataTypes" :to="{path: item.url }" class="tab-item">{{ item.name }}</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataTypes: [
          {
            url: '/Film/InTheaters',
            type: 'in_theaters',
            name: '正在热映'
          },
          {
            url: '/Film/ComingSoon',
            type: 'coming_soon',
            name: '即将上映'
          },
          {
            url: '/Film/Top250',
            type: 'top250',
            name: 'Top250'
          }
        ],
        activeTabs: 'activeTabs'
      }
    }
  }
</script>

<style scoped>
  .type-tabs {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
  }

  .tab-item {
    color: rgba(0,0,0,.5);
    font-size: 14px;
    display: inline-block;
    margin-right: 15px;
  }

  .activeTabs {
    color: #409EFF;
  }
</style>
