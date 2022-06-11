<template>
  <div class="index">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../assets/images/music.png" alt="" />
        </router-link>
      </li>
      <li>
        <router-link to="/singer"> 歌手 </router-link>
      </li>
      <li><router-link to="/listcate"> 列表 </router-link></li>
      <li><router-link to="/ucenter"> 我的 </router-link></li>
      <li><router-link to="/search"> 搜索 </router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.index {
  img {
    width: 40px;
    height: 40px;
  }
  ul {
    display: flex;
    height: 50px;
    line-height: 50px;
    background-color: #f9f9f9;

    li {
      flex: 1;
      text-align: center;
      a {
        font-size: 16px;
        color: #999;
      }
    }
  }
}
</style>
