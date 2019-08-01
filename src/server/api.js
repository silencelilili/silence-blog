import { post, get, patch, put, _delete } from './axios';

export const Appapi = {
  $post: post,
  $get: get,
  $patch: patch,
  $put: put,
  $_delete: _delete,
  // 获取标签
  getTagList(){
    return new Promise((resolve, reject) => {
      this.$get('/mock/tags.json')
      .then(res => {
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  },
  // 获取文章分类
  getArticleClassList(){
    return new Promise((resolve, reject) => {
      this.$get('/mock/articleClass.json')
      .then(res => {
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  },
  // 获取文章列表
  getArticleList() {
    return new Promise((resolve, reject) => {
      this.$get('/mock/article.json')
      .then(res => {
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }
}