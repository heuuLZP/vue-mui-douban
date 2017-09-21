<template>
  <div class="home">
    <header>
      <div class="h-inner">
        <div class="h-title">
          <h1>豆瓣图书</h1>
        </div>
      </div>
    </header>
    <div class="container mui-scroll-wrapper" id="refresh">
      <ul id="list">
        <li class="item" v-for="item in bookList">
          <a href="other.html" :id=item.id>
            <div class="cover">
              <img :src=item.image :alt=item.bookname class="img-show">
            </div>
            <div class="info">
              <h4></h4>
              <h3>{{item.bookname}}</h3>
              <p class="meta author">{{item.author}}</p>
              <p class="meta">{{item.info}}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from 'mui'
import API from '../../common/api/index'
export default {
  name: 'home',
  data () {
    return {
      bookList: []
    }
  },
  mounted: function () {
    mui.get(API.List.list, {}, (data) => {
      // 获得服务器响应
      this.bookList = data.list
    }, 'json')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  a {
    position: relative;
    display: block;
    text-decoration: none;
    color: #333;
    margin: -20px -4%;
    padding: inherit;
    overflow: hidden;
  }
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
        margin-top: 5px;
        line-height: 1.5;
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
