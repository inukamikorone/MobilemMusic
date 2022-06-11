<template>
<div class="banner">
<swiper :modules="modules" :pagination="{ clickable: true }" :options="swiperOption">
    <swiper-slide><img src="../assets/images/swiper1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/swiper2.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/swiper3.jpg" alt=""></swiper-slide>
  </swiper>
  </div>
</template>

<script>
  import SwiperClass, { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  // more module style...

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination]
      }
    }
  }
</script>
<style scoped lang="less">
.banner{
    padding: 10px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
