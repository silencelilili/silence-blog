<template>
  <div class="home">
    <el-timeline :reverse="timeReverse">
      <el-timeline-item color="#47a1ef"
       v-for="item in activities" 
       :key="item.articleId"  
       :timestamp="item.timestamp" 
       placement="top">
        <el-card>
          <h4>{{item.title}} 
            <el-tag class="tag-item" v-for="tag in item.tagtType" :key="tag" type="info">{{tag}}</el-tag>
          </h4>
          <p>{{item.summary}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { Appapi } from '@/server/api'
export default {
  name: 'home',
  data() {
    return {
      timeReverse: false,
      activities: []
    }
  },
  methods: {
    // 获取文章列表
    getArticleListFn(){
      Appapi.getArticleList()
      .then(res=>{
        let {status, result} = res;
        this.activities = result;
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getArticleListFn()
  },
}
</script>
<style lang="scss" scoped>
  .tag-item{
    margin: 0 5px;
  }
</style>

