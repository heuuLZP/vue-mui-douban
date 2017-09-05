<template>
  <div class="home">
    <div class="container">
      <h3>other</h3>
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
   * 内容区域
   */


</style>
