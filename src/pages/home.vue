<template>
  <div class="home">
    <header>
      <div class="h-inner">
        <div class="h-title">
          <h1>豆瓣</h1>
        </div>
      </div>
      <div class="container">
        <ul>
          <li class="item" v-for="item in bookList">
            <div class="cover">
              <img :src=item.image :alt=item.bookname class="img-show">
            </div>
            <div class="info">
              <h4></h4>
              <h3>{{item.bookname}}</h3>
              <p class="meta">{{item.author}}</p>
              <p class="meta">{{item.info}}</p>
            </div>
          </li>
        </ul>
      </div>

    </header>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  name: 'home',
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
        'image': '@image("200x300", "#ffcccc")'
      }]
    }).list
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
