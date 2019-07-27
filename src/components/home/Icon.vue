<template>
  <div class="icons">
     <ul>
       <!--渲染数据-->
       <li v-for="item in iconsList">
         <!--<img src="@/assets/img/icons1.png"/>-->
         <img :src="item.imgUrl"/>
         <p>{{item.title}}</p>
       </li>
     </ul>
  </div>
</template>
<script>
    export default{
      data(){
        return {
           //定义数据
           iconsList:[
              {
                imgUrl:'img/icons1.png',
                title:"国内游"
              },
              {
                imgUrl:'img/icons2.png',
                title:"国际游"
              },
              {
                imgUrl:'img/icons3.png',
                title:"地图"
              },
              {
                imgUrl:'img/icons4.png',
                title:"深林"
              },
              {
                imgUrl:'img/icons5.png',
                title:"热气球"
              },
              {
                imgUrl:'img/icons6.png',
                title:"相机"
              },
              {
                imgUrl:'img/icons7.png',
                title:"游乐"
              },{
                imgUrl:'img/icons8.png',
                title:"完山"
              },{
                imgUrl:'img/icons9.png',
                title:"国内游"
              },
              {
                imgUrl:'img/icons10.png',
                title:"国内游"
              }
            ]
        }
      }
    }
</script>
<style scoped>
      .icons{
        padding-top:.4rem;
        padding-bottom:.1rem;
        border-bottom:1px solid #eee;
        font-size:0.2rem;
      }
      ul{overflow:hidden;}
      ul li{width:20%; float:left; margin-bottom:.4rem;}
      ul li img{margin:0 auto;
       display:block;
       width:1.067rem;
       height:1.06rem;
       }
      ul li p{font-szie:.373rem;
       text-align:center;
       margin-top:.1rem;
       color:#333;
      }
</style>
