<template>
  <div class="common-w">
    <div class="data-list" v-if="!noData">
      <el-row :gutter="20">
        <el-col :span="4" v-for="(item, index) in lists" :key="index">
          <el-card :body-style="{ padding: '0px' }" class="elcard">
            <div class="image-box" @click="realLink(item)">
              <img :src="item.images.small" class="image">
              <!--<img v-lazyload="item.images.small" class="image" src="./../../assets/logo.png">-->
            </div>
            <div style="padding: 14px;" @click="realLink(item)">
              <div class="item-name">{{ item.title}}</div>
              <div class="bottom">
                <span class="rate">
                  <el-rate
                    v-model="item.rating.average/2"
                    disabled
                    score-template="{item.rating.average/2}"
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
    <div class="no-data" v-if="noData">
      <img src="./../../assets/images/no-data.gif" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      lists: null,
      noData: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      lists (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal.length === 0)
      }
    },
    methods: {
      realLink (item) {
        window.open(item.alt)
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

  .no-data {
    text-align: center;
    padding: 20px;
  }
</style>
