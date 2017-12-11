<template>
  <div>
    <list :lists="lists" :requesting="requesting" v-if="showList" :style="{height: contentHeight}"></list>
    <div class="no-search-list common-w" v-if="!showList" :style="{height: contentHeight}">
      <p class="title">{{ searchTitle }}</p>
      <p>没有找到关于 “{{ searchVal }}” 的电影，换个搜索词试试吧。</p>
      <router-link to="/Film/InTheaters">>查看正在热映</router-link>
      <router-link to="/Film/ComingSoon">>查看即将上映</router-link>
      <router-link to="/Film/Top250">>查看Top250</router-link>
    </div>
  </div>
</template>

<script>
  import read from './../../api/read'
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
    },
    beforeDestory () {
      this.$bus.$off('change/page', this.changePage)
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
        showList: true,
        contentHeight: 'auto'
      }
    },
    components: {
      list,
      ixPagination
    },
    methods: {
      getDataList () {
        this.$store.commit('content_height_update', ['.header-box', '.search-wrap', '.type-tabs', 37])
        this.requesting = true
        this.showList = true
        this.showPage = false
        this.$bus.$emit('hide/footer')
        read.search(this.searchVal, this.size, this.start).then((res) => {
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
                  const $dataList = document.querySelector('.data-list')
                  if ($dataList.clientHeight <= this.$store.state.main.content_height) {
                    this.contentHeight = this.$store.state.main.content_height + 'px'
                  } else {
                    this.contentHeight = 'auto'
                  }
                })
                this.requesting = false
                this.$bus.$emit('show/footer')
              })
            } else {
              // 搜索结果不存在
              this.searchTitle = res.data.title
              this.contentHeight = this.$store.state.main.content_height + 'px'
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
