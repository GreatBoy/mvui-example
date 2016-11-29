<template>
    <div class="body-wrapper">
        <Hometitle>Page</Hometitle>
        <div class="wrapper-example wrapper-example-page">
            <div class="wrapper-area-content" id="parent">
                <Page :current="current" :all="all" @on-change="change"></Page>
            </div>
        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Button,
    Page
} from 'mvui';
export default {
    components: {
        Hometitle,
        Button,
        Page
    },
    data() {
        return {
            current: 1,
            all: 10
        }
    },
    methods: {
        change: function(page){
            console.dir(page);
        }
    }
}
</script>
<style lang="less">
.wrapper-example-page {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    top: 0px;
    left: 0px;
    box-sizing: border-box;

    .wrapper-area-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-align: center;
    }
    .wrapper-area-content li {
        height: 0.4rem;
        line-height: 0.4rem;
        border-bottom: solid 1px #ccc;
        padding-left: 0.1rem;
        color: #666;
    }
    .wrapper-area-content li:last-child {
        border-bottom-width: 0px;
    }

    .wrapper-area-content .wrapper-area {
        padding: 0px;
        margin: 0px;
    }
}
</style>
