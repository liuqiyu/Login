<template>
  <div class="search-wrap">
    <div class="search-box">
      <div class="title">{{ getTitle }}</div>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="searchVal" size="small">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        searchVal: null
      }
    },
    computed: {
      ...mapGetters([
        'getTitle'
      ])
    }
  }
</script>

<style scoped>
  .search-wrap {
    background: #e9e9e2;
  }

  .search-box {
    width: 1200px;
    height: 70px;
    margin: 0 auto;
  }

  .title {
    display: inline-block;
    line-height: 70px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.42);
    font-size: 22px;
  }

  .search {
    display: inline-block;
    line-height: 70px;
    margin-left: 20px;
    width: 600px;
  }
</style>
