<template>
  <footer class="footer">
     <ul class="footer-nav">
       <li v-for="item in footerList">
         <img :src="item.imgUrl"/>
         <p>{{item.title}}</p>
       </li>
     </ul>
  </footer>
</template>
<script>
    export default{
      data(){
        return {
          footerList:[
             {
               imgUrl:'img/footer1.png',
               title:"首页"
             },
             {
               imgUrl:'img/footer2.png',
               title:"订单"
             },
             {
               imgUrl:'img/footer3.png',
               title:"个人中心"
             },
          ],
        }
      }
    }
</script>
<style scoped>
     .footer{width:100%;position: fixed; bottom:0; z-index:9999; border-top:1px solid #eee; font-size:0.2rem; padding:0.2rem 0; background:#fff;}
     .footer-nav{overflow:hidden; display:flex; flex-direction:row; color:#fff; }
     .footer-nav li{ width:33.3%; justify-content:center; align-items:center;}
     .footer-nav li img{margin:0 auto;
       display:block;
       width:0.6rem;
       height:0.6rem;
       }
      .footer-nav li p{
       text-align:center;
       margin-top:.15rem;
       color:#333;
      }
</style>
