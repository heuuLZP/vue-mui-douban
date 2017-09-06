<template>
  <div class="detail">
    <div class="container">
      <h1>{{bookInfo.bookname}}</h1>
      <div class="subjectwrap">
        <div class="subject clearfix">
          <div class="cover">
            <img :src=bookInfo.image :alt=bookInfo.bookname class="img-show">
          </div>
          <div class="info">
            <span class="pl">作者：</span>{{bookInfo.author}}
            <br>
            <span class="pl">出版社：</span>{{bookInfo.bookname}}
            <br>
            <span class="pl">副标题：</span>{{bookInfo.bookname}}
            <br>
            <span class="pl">译者：</span>{{bookInfo.author}}
            <br>
            <span class="pl">出版年：</span>{{bookInfo.date}}
            <br>
            <span class="pl">页数：</span>{{bookInfo.page}}
            <br>
            <span class="pl">定价：</span>{{bookInfo.page}}
            <br>
            <span class="pl">装帧：</span>{{bookInfo.binding}}
            <br>
            <span class="pl">ISBN：</span>{{bookInfo.isbn}}
            <br>
          </div>
        </div>
      </div>
      <div class="related-info">
        <h2>内容简介&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
        <div class="indent">
          <p>{{bookInfo.info}}</p>
        </div>
        <h2>作者简介&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·</h2>
        <div class="indent">
          <p>{{bookInfo.info}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  name: 'other',
  data () {
    return {
      bookInfo: {}
    }
  },
  mounted: function () {
    this.bookInfo = Mock.mock({
      'id|+1': 1,
      'bookname': '@ctitle',
      'author': '@cname',
      'info': '@cparagraph',
      'image': '@image("200x250", "#ffcccc")',
      'page|1-100': 100,
      'date': '@date("yyyy-M-d")',
      'isbn': 9787513323369,
      'binding': '精装'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  word-wrap: break-word;
  font-size: 25px;
  color: #494949;
  margin: 0;
  padding: 15px;
  line-height: 1.1;
}
.subjectwrap {
  position: relative;
  margin-bottom: 15px;
  padding: 0 15px;
}

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
  float: left;
  max-width: 248px;
  word-wrap: break-word;
  font: 12px Arial, Helvetica, sans-serif;
  color: #666;
  .pl {
    line-height: 150%;
  }
}

.related-info {
  padding: 0 15px;
  h2 {
    margin-top: 24px;
    margin-bottom: 3px;
    color: #007722;
  }
  .indent p {
    text-indent: 2em;
    word-break: normal;
    font: 12px Helvetica,Arial,sans-serif;
    line-height: 1.62;
    color: #666;
  }
}
</style>
