<template>
    <div class="body-wrapper">
        <Hometitle>Lazyload</Hometitle>
        <div class="wrapper-example wrapper-example-lazyload">
            <div class="wrapper-area-content" id="parent">
                <Imager></Imager>
            </div>
        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Imager,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Button,
        Imager
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>
<style>
.wrapper-example-lazyload {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
}

.wrapper-example-lazyload .wrapper-area-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.wrapper-example-lazyload .wrapper-area-content li {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: solid 1px #ccc;
    padding-left: 0.1rem;
    color: #666;
}

.wrapper-example-lazyload .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-lazyload .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
