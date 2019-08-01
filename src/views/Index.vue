<template>
  <div class="container">
    <el-container>
      <!-- Header -->
      <el-header class="header">
        <blogHeader></blogHeader>
      </el-header>
      <!-- Main -->
      <el-main>
        <el-row :gutter="20">
          <!-- Home -->
          <el-col :span="16">
            <router-view></router-view>
          </el-col>
          <!-- Aside -->
          <el-col :span="8">
            <blogAside></blogAside>
          </el-col>
        </el-row>
      </el-main>
      <!-- Footer -->
      <blogFooter></blogFooter>
    </el-container>
  </div>
</template>


<script>
import blogHeader from '@/components/header'
import blogFooter from '@/components/footer'
import blogAside from '@/components/aside'
export default {
  data() {
    return {
      
    }
  },
  components: {
    blogHeader,
    blogFooter,
    blogAside
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>
<style lang="scss" scoped>
.header{
  padding: 0;
}
</style>


