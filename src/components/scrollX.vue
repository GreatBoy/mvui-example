<template>
    <div class="body-wrapper">
        <Hometitle>ScrollX</Hometitle>
        <div class="wrapper-example wrapper-example-scroll-x">
            <div class="wrapper-area-content" id="parent">
                <Scroll direction="x">
                    <ul>
                        <li>首页</li>
                        <li>热点</li>
                        <li>社会</li>
                        <li>股票</li>
                        <li>美女</li>
                        <li>搞笑</li>
                        <li>科技</li>
                        <li>互联网</li>
                        <li>军事</li>
                        <li>体育</li>
                    </ul>
                </Scroll>
            </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Scroll,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Scroll,
        Button
    }
}
</script>
<style>
    .wrapper-example-scroll-x{
        position: fixed;
        width: 100%;
        height: 100%;
        padding-top: 0.45rem;
        top: 0px;
        left: 0px;
        border-top: solid 1px #ccc;
        box-sizing: border-box;
    }
    .wrapper-example-scroll-x .wrapper-area-content{
        width: 100%;
        height: 0.4rem;
        overflow: hidden;
        border-bottom: solid 1px #ccc;
    }
    .wrapper-example-scroll-x .wrapper-area-content ul{
        width: 4rem;
        height: 0.4rem;
    }
    .wrapper-example-scroll-x .wrapper-area-content li{
        height: 0.4rem;
        line-height: 0.4rem;
        padding-left: 0.1rem;
        color: #666;
        float: left;
    }
    .wrapper-example-scroll-x .wrapper-area-content li: last-child {
        border-bottom-width: 0px;
    }
    .wrapper-example-scroll-x .wrapper-area-content .wrapper-area{
        padding: 0px;
        margin: 0px;
    }
</style>
