<template>
  <div>
    <list :lists="lists"></list>
    <ixPagination :total="total" :size="size" :currentPage="currentPage"></ixPagination>
  </div>
</template>

<script>
  import film from './../../api/film'
  import list from './list'
  import ixPagination from '../../components/ixPagination'

  export default {
    beforeRouteUpdate (to, from, next) {
      next()
      this.dataList()
    },
    created () {
      this.$bus.$on('change/page', this.changePage)
      // 标题
      this.$store.commit('title_update', '豆瓣电影1')
      this.dataList()
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
        start: 0
      }
    },
    components: {
      list,
      ixPagination
    },
    methods: {
      dataList () {
        const city = '深圳'
        film.inTheaters(city, this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            this.total = res.data.total
            this.$bus.$emit('show/footer')
          }
        })
      },
      changePage (page) {
        this.start = this.size * (page - 1)
        this.dataList()
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
