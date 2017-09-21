<template>
  <div class="home">
    <!-- header -->
		<header class="mui-bar mui-bar-nav scrm-nav">
		    <h1 class="mui-title scrm-title">统计分析</h1>
		</header>
    <div class="mui-content">
      <ul class="mui-table-view">
  			    <li class="mui-table-view-cell mui-media" v-for="item in items">
  			        <a href="javascript:;">
  			            <img class="mui-media-object mui-pull-left scrm-media-object" :src=item.src>
  			            <div class="mui-media-body scrm-media-body">
  			                {{item.name}}
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
import * as Data from './data'

export default {
  name: 'home',
  data () {
    return {
      items: Data.Items
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
}
.scrm-nav {
  background: #41c128;
}
.scrm-title {
  color: #fff;
}
.scrm-media-object {
  max-width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 15px!important;
}
</style>
