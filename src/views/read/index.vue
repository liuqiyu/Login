<template>
  <div>
    <ixSearch></ixSearch>
    <ixTypeTabs></ixTypeTabs>
    <list :lists="lists" :requesting="requesting"></list>
    <ixPagination v-if="showPage" :total="total" :size="size" :currentPage="currentPage"></ixPagination>
  </div>
</template>

<script>
  import film from './../../api/film'
  import list from './list'
  import ixSearch from './../../components/ixSearch'
  import ixTypeTabs from './../../components/ixTypeTabs'
  import ixPagination from '../../components/ixPagination'

  export default {
    beforeRouteUpdate (to, from, next) {
      next()
      this.toGet()
    },
    created () {
      this.$bus.$on('change/page', this.changePage)
      // 标题
      this.$store.commit('title_update', '豆瓣读书')
      this.toGet()
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
        requesting: true
      }
    },
    components: {
      ixSearch,
      ixTypeTabs,
      ixPagination,
      list
    },
    methods: {
      toGet () {
        this.requesting = true
        this.showPage = false
        this.$bus.$emit('hide/footer')
        const type = this.$route.query.type
        switch (type) {
          case undefined:
            this.getInTheatersData()
            break
          case 'in_theaters':
            this.getInTheatersData()
            break
          case 'coming_soon':
            this.getComingSoonData()
            break
          case 'top250':
            this.getTop250Data()
            break
          default:
            break
        }
      },
      getInTheatersData () {
        const city = '深圳'
        film.inTheaters(city, this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            this.total = res.data.total
            this.showPage = true
            this.requesting = false
            this.$bus.$emit('show/footer')
          }
        })
      },
      getComingSoonData () {
        film.comingSoon(this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            this.total = res.data.total
            this.showPage = true
            this.requesting = false
            this.$bus.$emit('show/footer')
          }
        })
      },
      getTop250Data () {
        film.top250(this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            this.total = res.data.total
            this.showPage = true
            this.requesting = false
            this.$bus.$emit('show/footer')
          }
        })
      },
      changePage (page) {
        this.start = this.size * (page - 1)
        this.currentPage = page
        this.toGet()
      }
    }
  }
</script>

<style scoped>

  .data-list {
    width: 100%;
    padding-top: 20px;
  }

  .elcard {
    margin-bottom: 20px;
  }

  .image-box {
    height: 250px;
    overflow: hidden;
  }

  .image {
    width: 100%;
  }

  .item-name {
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .rate {
    font-size: 13px;
    color: #999;
  }

  .year {
    padding: 0;
    font-size: 13px;
    color: #999;
  }
</style>
