<template>
  <div class="tabs">
      <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="item in tabsList">
              <div class="tabs-content">
                 <img :src="item.imgUrl" alt=""/>
                 <p>{{item.title}}</P>
              </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
   export default{
     data(){
        return{
          tabsList:[
               {
                id:0,
                imgUrl:'img/tabs1.png',
                title:"国内游"
               },
               {
                id:1,
                imgUrl:'img/tabs2.png',
                title:"asdas"
               },
               {
                id:2,
                imgUrl:'img/tabs3.png',
                title:"asdas"
               },
               {
                id:3,
                imgUrl:'img/tabs4.png',
                title:"asdas"
               },
               {
                id:4,
                imgUrl:'img/tabs5.png',
                title:"asdas"
               },
               {
                id:5,
                imgUrl:'img/tabs6.png',
                title:"asdas"
               },
               {
                id:6,
                imgUrl:'img/tabs7.png',
                title:"asdas"
               },
               {
                id:7,
                imgUrl:'img/tabs8.png',
                title:"asdas"
               },
               {
                id:8,
                imgUrl:'img/tabs9.png',
                title:"asdas"
               },
               {
                id:3,
                imgUrl:'img/tabs2.png',
                title:"asdas"
               },
          ],
          //这步注意
          swiperOption:{
              slidesPerView:5
           }
        }
     }
   }
</script>
<style scoped>
   .tabs{
     padding:.3rem 0;
     border-top:1px solid  rgba(#252523,0.5);
   }
   .tabs-content{
      
   }
   .tabs-content img{
     margin:0 auto;
     display:block;
     width:.7733rem;
     height:.7733rem;
   }
   .tabs-content p{
     margin-top:.1rem;
     text-align:center;
     font-size:.3rem;
   }
</style>
