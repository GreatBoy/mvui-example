<template>
    <div class="body-wrapper">
        <Hometitle>PullRefresh</Hometitle>
        <div class="wrapper-example wrapper-example-refresh">
            <div class="wrapper-area-content" id="parent">
                <ul>
                    <li><a v-link="{path:'/pullRefreshWindow' , activeClass:'active'}">下拉刷新默认滚动条</a></li>
                    <li><a v-link="{path:'/pullRefreshElem' , activeClass:'active'}">下拉刷新元素滚动条</a></li>
                    <li><a v-link="{path:'/pullRefreshScroll' , activeClass:'active'}">下拉刷新Scroll滚动条</a></li>
                </ul>
            </div>
        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Pullrefresh,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Pullrefresh,
        Button
    },
    data() {
        return {
            selected: true,
            status: 0
        }
    }
}
</script>
<style>
header {
    position: relative;
    z-index: 100;
}
.wrapper-example-refresh {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
}

.wrapper-example-refresh .wrapper-area-content {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.wrapper-example-refresh .wrapper-area-content li {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: solid 1px #ccc;
    padding-left: 0.1rem;
    color: #666;
}

.wrapper-example-refresh .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-refresh .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
