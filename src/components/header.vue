<template>
    <el-menu :default-active="activeHeader" 
    class="el-menu-demo" 
    mode="horizontal" 
    background-color="#232323"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">文章</el-menu-item>
      <el-menu-item index="3">项目</el-menu-item>
      <el-menu-item index="4">关于</el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: 'blogheader',
  data() {
    return {
      activeHeader: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    }
  },
}
</script>

<style lang="scss" scoped>
.header{
  padding: 0;
}
</style>



