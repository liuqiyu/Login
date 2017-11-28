<template>
  <div>
    <div class="data-list">
      <el-row :gutter="20">
        <el-col :span="4" v-for="(item, index) in lists" :key="index">
          <el-card :body-style="{ padding: '0px' }" class="elcard">
            <div class="image-box">
              <img :src="item.images.small" class="image">
            </div>
            <div style="padding: 14px;">
              <div class="item-name">{{ item.title}}</div>
              <div class="bottom">
                <span class="rate">
                  <el-rate
                    v-model="item.rating.average/2"
                    disabled
                    :max="item.rating.max/2">
                  </el-rate>
                </span>
                <span class="year">{{item.year}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import film from './../../api/film'

  export default {
    data () {
      return {
        lists: []
      }
    },
    created () {
      // 标题
      this.$store.commit('title_update', '豆瓣电影')

      // 获取正在热映的电影
      this.getInTheatersData()
    },
    methods: {
      getInTheatersData () {
        const city = '深圳'
        film.inTheaters(city).then((res) => {
          if (res.status === 200) {
            const data = res.data.subjects
            this.lists = data
          }
        })
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
