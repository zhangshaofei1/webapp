<template>
  <div id="banner">
      <transition
       enter-active-class="bounceInLeft"
       leave-active-class="bounceOutLeft"
      >
      <div class="banner-left animated" v-show="toshow">
          <div class="banner-left-top">
              <div class="information">
	             <a href="javascript:viod()">注册</a>
	             <a>/</a>
	             <a href="javascript:viod()">登录</a>
	          </div>
	          <div class="banner-left-search">
	             <i class="iconfont">&#58890;</i>
	             <span>搜索</span>
	          </div>
          </div>
          <div class="left-nav">
              <ul class="left-nav-list">
                 <li>首页</li>
                 <li>游侠攻略</li>
                 <li>视频</li>
                 <li>游记</li>
                 <li>目的地</li>
                 <li>圈子</li>
                 <li>集市</li>
                 <li>民宿营地</li>
                 <li>App</li>
              </ul>
          </div>
      </div><!--v-show控制显示与隐藏-->
      </transition>
      <div class="banner-header">
         <div class="banner-top">
            <div class="top-left" @click="toCity">
                <span>北京</span>
                <i class="iconfont">&#58628;</i>
            </div>
            <div class="top-search">
                <i class="iconfont">&#58890;</i>
                <span>搜索</span>
            </div>
            <div class="top-right">
                <img src="@/assets/img/show.png" @click="toShow"/>
            </div>
         </div>
         <div class="banner-swiper">
	        <swiper :options="swiperOption">
  			    <!-- slides -->
  			    <swiper-slide><img src="@/assets/img/banner1.png"/></swiper-slide>
  			    <swiper-slide><img src="@/assets/img/banner2.png"/></swiper-slide>
  			    <swiper-slide><img src="@/assets/img/banner3.png"/></swiper-slide>
  			    <!-- Optional controls -->
  			    <div class="swiper-pagination"  slot="pagination"></div>
			    </swiper>
         </div>
      </div>    
  </div>
</template>
<script>
   export default{
      data(){
         return {
              toshow:false,
              swiperOption:{
                  autoplay:true,
                  loop:true,
                  pagination:{
                    el:'.swiper-pagination',
                  }
              }
         }
      },methods:{
         toShow(){
            this.toshow=!this.toshow
         },
         toCity(){
            this.$router.push({
              path:'/city'
            })
         }
      }
   }
</script>
<style scoped>
    .banner-header{background:#efefef; width:100%; height:5.6rem; position:relative;}
    .banner-top{width:100%; height:.8rem; position:absolute; left:0; top:0.5rem; z-index:99; display:flex;justify-content:center; align-item:center;}
    .top-left{padding:.2rem .4rem; color:#fff; font-size:.5rem;}
    .top-search{
             flex:1; color:#333; background:#fff; 
             border-radius:.1rem;
             font-size:.4rem;
             padding:.2rem .2rem; 
             }
    .top-right{padding:.1rem .2rem; padding-left:0.7rem; position:relative;}
    .top-right img{width:.5rem; height:.5rem;  position:absolute; left:9px; top:0.2rem;}
    .banner-swiper{width:100%; height:100%;}
    .banner-swiper img{width:100%; height:100%;}
    .swiper-pagination .swiper-pagination-bullet{  /*swiper-pagination-bullet是从检查里面复制的*/
      background:red;
      }

      /*侧边滑动栏*/
      .banner-left{width:6.5rem; height:100%; position:absolute; left:0; top:0; z-index:100; background:#2d2d2b;}
      .banner-left-top{padding:0.4rem 0.4rem; color:#fff;}
      .information{ display:flex; font-size:0.4rem; justify-content:flex-end; padding:0.2rem 0 0.6rem;}
      .information a{color:#fff;}
      .banner-left-search{display:flex; flex:1; background:#1a1a18; color:#fff;
             border-radius:.1rem;
             font-size:.4rem;
             padding:.2rem .2rem; }
      .banner-left-search .iconfont{padding-right:0.2rem;}

      .left-nav-list{display:flex; flex-direction:column; color:#fff; font-size:.4rem;}
      .left-nav-list li{border-bottom:1px solid #252523; padding:0.4rem 0 0.4rem 0.4rem;}
      .left-nav-list li:nth-child(1){border-top:1px solid #252523;}
</style>
