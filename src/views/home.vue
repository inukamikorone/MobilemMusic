<template>
<div>
    <today/>
    <new-music/>
    <swiper-banner/>
    <music-list-nav/>
</div>
</template>
<script setup>
import today from '../components/Today.vue'
import NewMusic from '../components/NewMusic.vue'
import SwiperBanner from '../components/SwiperBanner.vue'
import MusicListNav from './musicList/MusicListNav.vue'
</script>