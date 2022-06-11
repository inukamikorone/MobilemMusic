<template>
<div class="panel">

</div>
</template>

<script setup>
import axios from 'axios'

axios({
    url:''
})
</script>

<style lang="less" scoped>
.panel{
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background-color: #fff;
    .list{
        padding: 20px;
        padding-top: 0;
        li{
            height: 60px;
            border-bottom: 1px solid #eee;
            padding-left: 0;
            display: flex;
            padding-top: 10px;
            .poster{
                position: relative;
                width: 45px;
                margin-right: 8px;
                img{
                    border: 1px solid #eee;
                }
            }
        }
    }
}
.info{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .name{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        color:#333;

    }
    .author{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        color: #999;
        margin-top: 2px;
    }
}
.more-songs{
    color:#999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>