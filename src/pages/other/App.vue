<template>
  <div class="home">
    <header>
      <div class="h-inner">
        <div class="h-title">
          <h1>豆瓣图书</h1>
        </div>
      </div>
    </header>
    <div class="container">
      <ul>
        <li class="item" v-for="item in bookList">
          <div class="cover">
            <img :src=item.image :alt=item.bookname class="img-show">
          </div>
          <div class="info">
            <h4></h4>
            <h3>{{item.bookname}}</h3>
            <p class="meta author">{{item.author}}</p>
            <p class="meta">{{item.info}}</p>
          </div>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  name: 'other',
  data () {
    return {
      bookList: []
    }
  },
  mounted: function () {
    this.bookList = Mock.mock({
      'list|20': [{
        'id|+1': 1,
        'bookname': '@ctitle',
        'author': '@cname',
        'info': '@cparagraph',
        'image': '@image("200x250", "#ffcccc")'
      }]
    }).list
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html, body {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.home {
  height: 100%;
  padding-top: 51px;
}
  /**
   * header部分
   */
  header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
  }
  .h-inner {
    height: 100%;
    padding: 15px 20px;
    border-bottom: 1px solid #ebebeb;
  }
  .h-title {
    h1 {
      margin: 0;
      font-size: 20px;
      color: #42b983;
    }
  }
  /**
   * 内容区域
   */
  .item {
    padding: 20px 4%;
    overflow: hidden;
    position: relative;
    .cover {
      float: left;
      margin-right: 15px;
      width: 100px;
      min-height: 100px;
      .img-show {
        opacity: 1;
      }
      img {
        width: 100%;
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
    }
    .info {
      overflow: hidden;
      padding-top: 5px;
      h3 {
        font-size: 16px;
        color: #494949;
      }
      .meta {
        font-size: 12px;
        margin: 0;
      }
      .author {
        color: #333;
      }
    }
  }
  .item::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ccc;
  }

</style>
