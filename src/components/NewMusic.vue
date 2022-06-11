<template>
  <div class="mod-albums">
    <div class="hd log url">
      <h2>歌手榜单</h2>
      <div>更多</div>
    </div>
    <div class="container">
      <div class="gallery">
        <div class="scroller">
          <div
            class="card url"
            v-for="(item, index) in today.slice(0,3)"
            :key="index"
          >
            <div class="album">
              <img :src="item.picUrl" alt="" />
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import axios from "axios";

let data = reactive({
  today: [],
});

axios({ url: "/api/toplist/artist" }).then((res) => {
  data.today = res.data.list.artists;
});
const {today} = {...toRefs(data)}

</script>

<style scoped lang="less">
.mod-albums {
  background-color: #fff;
  padding: 10px 17px;
  margin-top: 10px;
  
}
.gallery {
  overflow: hidden;
  margin: 0 -5px;
  .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
    .author {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #999;
      font-size: 12px;
      line-height: 12px;
    }
    .album {
      position: relative;

      img {
        width: 100%;
        height: auto;
        border: 1px solid #eee;
      }
      .name {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 4px;
        line-height: 14px;
        max-height: 28px;
        margin-bottom: 2px;
      }
    }
  }
}
.hd {
  display: flex;
  margin: 14px 0 18px 0;
  h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  div {
    width: 64px;
    font-size: 12px;
    text-align: right;
  }
}
</style>
