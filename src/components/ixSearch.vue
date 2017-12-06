<template>
  <div class="search-wrap">
    <div class="search-box common-w">
      <div class="title">{{ getTitle }}</div>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="searchVal" size="small" @keyup.enter.native="submit">
          <el-button slot="append" icon="el-icon-search" @click="submit"></el-button>
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
        searchVal: ''
      }
    },
    computed: {
      ...mapGetters([
        'getTitle'
      ])
    },
    methods: {
      submit () {
        console.log(this.$route.matched[1].path)
        console.log(this.searchVal)
        this.$router.push({path: this.$route.matched[1].path + '/Search', query: {q: this.searchVal}})
        // this.$bus.$emit('search/list', this.searchVal)
      }
    }
  }
</script>

<style scoped>
  .search-wrap {
    background: #e9e9e2;
  }

  .search-box {
    height: 70px;
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
