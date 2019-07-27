<template>
  <div class="swipers">
     <div class="swiper-list">
        <swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide><img src="img/swiper1.png"/></swiper-slide>
		    <swiper-slide><img src="img/swiper2.png"/></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
     </div>
  </div>
</template>
<script>

</script>
<style scoped>
    .swipers{width:100%; height:3rem; position:relative;}
    .swiper-list{width:100%;height:100%;}
    .swiper-list img{width:100%;height:100%;}
</style>
