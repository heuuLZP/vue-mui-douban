<template>
  <div class="home">
    <header>
      <div class="h-inner">
        <div class="h-title">
          <h1>豆瓣</h1>
        </div>
      </div>
      <ul>
        <li>
          <div class="mui-card">
    				<!--页眉，放置标题-->
    				<div class="mui-card-header mui-card-media">
    					<img src="http://a3.att.hudong.com/48/45/01100000000000144728459490363_s.jpg" />
    					<div class="mui-media-body">
    						小黄人
    						<p>发表于 2017-09-01 15:00</p>
    					</div>
    				</div>
    				<!--内容区-->
    				<div class="mui-card-content">
    					<div class="custom-content">
    						<img src="http://a3.att.hudong.com/48/45/01100000000000144728459490363_s.jpg" alt="avator" />
    					</div>
    				</div>
    				<!--页脚，放置补充信息或支持的操作-->
    				<div class="mui-card-footer">LIKE</div>
    			</div>
        </li>
      </ul>
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
