<template>
    <div class="body-wrapper">
        <Hometitle>lider</Hometitle>
        <div class="wrapper-example wrapper-example-slider">
            <div class="wrapper-area-content" id="parent">
                <ul>
                    <li><a v-link="{path:'/sliderY' , activeClass:'active'}">垂直滚动</a></li>
                    <li><a v-link="{path:'/sliderX' , activeClass:'active'}">横向滚动</a></li>
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
.wrapper-example-slider {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
}

.wrapper-example-slider .wrapper-area-content {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.wrapper-example-slider .wrapper-area-content li {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: solid 1px #ccc;
    padding-left: 0.1rem;
    color: #666;
}

.wrapper-example-slider .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-slider .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
