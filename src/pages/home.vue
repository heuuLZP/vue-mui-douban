<template>
  <div class="home">
    <header>
      <div class="h-inner">
        <div class="h-title">
          <h1>豆瓣</h1>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
