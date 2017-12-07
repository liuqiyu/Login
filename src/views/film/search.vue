<template>
  <div>
    <list :lists="lists" :requesting="requesting" v-if="showList"></list>
    <div class="no-search-list common-w" v-if="!showList" :style="{height: getContentHeight}">
      <p class="title">{{ searchTitle }}</p>
      <p>没有找到关于 “213esds12343ttdgdsfgfds” 的电影，换个搜索词试试吧。</p>
      <p>>查看正在热映</p>
      <p>>查看即将上映</p>
      <p>>查看Top250</p>
    </div>
    <ixPagination v-if="showPage" :total="total" :size="size" :currentPage="currentPage"></ixPagination>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import film from './../../api/film'
  import list from './list'
  import ixPagination from '../../components/ixPagination'

  export default {
    beforeRouteUpdate (to, from, next) {
      next()
      this.searchVal = this.$route.query.q
      this.getDataList()
    },
    created () {
      this.searchVal = this.$route.query.q
      this.getDataList()
      this.$bus.$on('change/page', this.changePage)
      this.$bus.$on('search/list', this.getDataList)
    },
    beforeDestory () {
      this.$bus.$off('change/page', this.changePage)
      this.$bus.$off('search/list', this.getDataList)
    },
    data () {
      return {
        lists: [],
        total: 0,
        currentPage: 1,
        size: 18,
        start: 0,
        showPage: false,
        requesting: true,
        searchVal: '',
        searchTitle: '',
        showList: true
      }
    },
    computed: {
      ...mapGetters([
        'getContentHeight'
      ])
    },
    components: {
      list,
      ixPagination
    },
    methods: {
      getDataList () {
        this.requesting = true
        this.showList = true
        this.showPage = false
        this.$bus.$emit('hide/footer')
        film.search(this.searchVal, this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            if (data.length > 0) {
              this.total = res.data.total
              this.$nextTick(() => {
                this.showPage = true
                this.requesting = false
                this.$bus.$emit('show/footer')
              })
            } else {
              // 搜索结果不存在
              this.searchTitle = res.data.title
              this.$store.commit('content_height_update', ['.header-box', '.search-wrap', '.type-tabs', 37])
              console.log(this.$store.getters.getContentHeight)
              this.$nextTick(() => {
                this.requesting = false
                this.showList = false
                this.$bus.$emit('show/footer')
              })
            }
          }
        })
      },
      changePage (page) {
        this.start = this.size * (page - 1)
        this.currentPage = page
        this.getDataList()
      }
    }
  }
</script>

<style scoped>

  .no-search-list {
    height: 400px;
    padding: 20px;
  }

  .no-search-list p {
    font-size: 12px;
    color: rgba(0,0,0,.7);
    margin-bottom: 20px;
    padding: 0 10px;
  }

  .no-search-list .title {
    font-size: 14px;
    padding: 0;
  }
</style>
