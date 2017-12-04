<template>
  <div class="pagination common-w">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="size"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    props: {
      currentPage: {
        type: Number
      },
      size: {
        type: Number
      },
      total: {
        type: Number
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (currentPage) {
        console.log(`当前页: ${currentPage}`)
        this.$bus.$emit('change/page', currentPage)
      }
    }
  }
</script>

<style scoped>
  .pagination {
    text-align: right;
    padding: 20px 0;
  }
</style>
