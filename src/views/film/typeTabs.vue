<template>
  <div class="type-tabs">
    <div class="common-w">
      <router-link :exact-active-class="activeTabs" :key="index" v-for="(item, index) in dataTypes" :to="{path: item.url, query: {type: item.type}}" class="tab-item">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dataTypes: [
          {
            url: '/Film',
            type: 'in_theaters',
            name: '正在热映'
          },
          {
            url: '/Film',
            type: 'coming_soon',
            name: '即将上映'
          },
          {
            url: '/Film',
            type: 'top250',
            name: 'Top250'
          }
//          {
//            url: '/Film',
//            type: 'usBox',
//            name: '北美票房榜'
//          }
        ],
        activeTabs: 'activeTabs'
      }
    }
  }
</script>

<style scoped>
  .type-tabs {
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid rgba(0,0,0, 0.04);
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
