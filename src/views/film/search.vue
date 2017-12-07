<template>
  <div>
    <list :lists="lists" :requesting="requesting" v-if="showList"></list>
    <div class="no-search-list common-w" v-if="!showList" :style="{height: getContentHeight}">
      <p class="title">{{ searchTitle }}</p>
      <p>没有找到关于 “{{ searchVal }}” 的电影，换个搜索词试试吧。</p>
      <router-link to="/Film/InTheaters">>查看正在热映</router-link>
      <router-link to="/Film/ComingSoon">>查看即将上映</router-link>
      <router-link to="/Film/Top250">>查看Top250</router-link>
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
      contentHeight () {
        return this.$store.state.main.content_height
      },
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
                if (res.data.count >= res.data.total) {
                  this.showPage = false
                } else {
                  this.showPage = true
                }
                setTimeout(() => {
                  this.$store.commit('content_height_update', ['.header-box', '.search-wrap', '.type-tabs', 37])
                  const $dataList = document.querySelector('.data-list')
                  console.log($dataList.clientHeight)
                  console.log(this.contentHeight)
                  console.log(this.getContentHeight)
                  if ($dataList.clientHeight <= this.contentHeight) {

                  }
                })
                this.requesting = false
                this.$bus.$emit('show/footer')
              })
            } else {
              // 搜索结果不存在
              this.searchTitle = res.data.title
              this.$store.commit('content_height_update', ['.header-box', '.search-wrap', '.type-tabs', 37])
              console.log(this.$store.getters.getContentHeight)
              this.$nextTick(() => {
                this.showPage = false
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

  .no-search-list p, .no-search-list a {
    display: block;
    font-size: 12px;
    color: rgba(0,0,0,.7);
    margin-bottom: 20px;
    padding: 0 10px;
  }

  .no-search-list a {
    text-decoration: underline;
    color: #409EFF;
  }

  .no-search-list .title {
    font-size: 14px;
    padding: 0;
  }
</style>
