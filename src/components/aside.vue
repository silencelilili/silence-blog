<template>
  <div class="aside">
    <el-card class="box-card">
      <div slot="header" class="clearfix card-header">
        <span>文章分类</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="list in articleClass" :key="list.id" class="text collapse-item">
        <span>{{list.name}}</span>
        <el-link type="primary" :underline="false">{{list.count}}篇</el-link>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix card-header">
        <span>技能标签</span>
      </div>
      <div class="skill-tag">
        <el-tag class="tag-item" v-for="skill in skillTag" :key="skill.tagId" :type="skill.tagType">{{skill.tagName}}</el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Appapi } from '@/server/api'
export default {
  data() {
    return {
      skillTag: [],
      articleClass: []
    }
  },
  methods: {
    // 获取标签
    getTagListFn(){
      Appapi.getTagList()
      .then(res=>{
        let {status, result} = res;
        this.skillTag = result;
      })
      .catch(err=>{
        console.log(err)
      })
    },
    // 获取分类
    getArticleClassFn(){
      Appapi.getArticleClassList()
      .then(res=>{
        let {status, result} = res;
        this.articleClass = result;
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.getArticleClassFn();
    this.getTagListFn();
  },
}
</script>

<style lang="scss">
.box-card{
  margin: 10px 0;
  .el-card__header{
    background: #e7f6ff !important;
  }
}
.skill-tag{
  .tag-item{
    margin: 5px 8px;
  }
}
.collapse-item {
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
}

</style>


