<template>
  <div>
    <div class="data-list">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="data-item">
            音乐
          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-item">

          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-item">

          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-item">

          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-item">

          </div>
        </el-col>
        <el-col :span="6">
          <div class="data-item">

          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.commit('title_update', '豆瓣音乐')
    }
  }
</script>

<style scoped>

  .data-list {
    width: 100%;
    padding-top: 20px;
  }
  .data-item {
    border: 1px solid #e1e1e1;
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }
</style>
