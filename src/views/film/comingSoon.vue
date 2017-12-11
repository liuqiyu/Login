<template>
  <div>
    <list :lists="lists" :requesting="requesting" :style="{height: contentHeight}"></list>
    <ixPagination v-if="showPage" :total="total" :size="size" :currentPage="currentPage"></ixPagination>
  </div>
</template>

<script>
  import film from './../../api/film'
  import list from './list'
  import ixPagination from '../../components/ixPagination'

  export default {
    created () {
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
        this.showPage = false
        this.$bus.$emit('hide/footer')
        film.comingSoon(this.size, this.start).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
            this.total = res.data.total
            this.$nextTick(() => {
              this.showPage = true
              this.requesting = false
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
