<template>
    <div class="body-wrapper">
        <Hometitle>Slider</Hometitle>
        <div class="wrapper-example wrapper-example-slider-x">
            <div class="wrapper-area-content" id="parent">
                <Slider>
                    <li>
                        <img src="/mvui-example/static/click1.jpg"/>
                        <span>文案1</span>
                    </li>
                    <li>
                        <img src="/mvui-example/static/click1.jpg"/>
                        <span>文案2</span>
                    </li>
                    <li>
                        <img src="/mvui-example/static/click1.jpg"/>
                        <span>文案3</span>
                    </li>
                    <li>
                        <img src="/mvui-example/static/click1.jpg"/>
                        <span>文案4</span>
                    </li>
                </Slider>
            </div>
        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Slider,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Button,
        Slider
    },
}
</script>
<style>
.wrapper-example-slider-x {
    width: 100%;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
}

.wrapper-example-slider-x .wrapper-area-content {
    width: 100%;
}

.wrapper-example-slider-x .wrapper-area-content li {
    border-bottom: solid 1px #ccc;
    color: #666;
}

.wrapper-example-slider-x .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-slider-x .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
