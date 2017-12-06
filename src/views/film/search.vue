<template>
  <div>
    <list :lists="lists" :noData="noData"></list>
    <ixPagination v-if="showPage" :total="total" :size="size" :currentPage="currentPage"></ixPagination>
  </div>
</template>

<script>
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
        noData: true,
        searchVal: ''
      }
    },
    components: {
      list,
      ixPagination
    },
    methods: {
      getDataList () {
        this.noData = true
        this.showPage = false
        this.$bus.$emit('hide/footer')
        film.search(this.searchVal, this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            this.total = res.data.total
            this.$nextTick(() => {
              this.showPage = true
              this.noData = false
              this.$bus.$emit('show/footer')
            })
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

<style>

</style>
