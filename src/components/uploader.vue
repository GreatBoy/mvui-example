<template>
    <div class="body-wrapper">
        <Hometitle>Uploader</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">单张图片</div>
                <div class="wrapper-area-content">
                    <Uploader url="http://www.huiyi.com/upload/upload" @on-preview="preview" @on-before="before" @on-validate="validate" @on-progress="progress"  @on-error="error" @on-success="success" @on-complete="complete"></Uploader>
                    <img style="width: 40px;" :src="previewImage"/>
                </div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">多张图片</div>
                <div class="wrapper-area-content">
                    <Uploader url="http://www.huiyi.com/upload/upload" @on-preview="preview1" @on-before="before1" @on-validate="validate1" @on-progress="progress1"  @on-error="error1" @on-success="success1" @on-complete="complete1" :more="true"></Uploader>
                    <div v-for="item in previewImage1">
                        <img style="width: 40px;" :src="item"/>
                    </div>
                </div>
            </div>

        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Uploader
} from 'mvui';
export default {
    components: {
        Hometitle,
        Uploader
    },
    data() {
        return {
            previewImage: '',
            previewImage1: []
        }
    },
    methods: {
        preview(file){
            debugger;
            console.dir(arguments)
            this.previewImage = file[0];
        },
        validate(){
            debugger;
            console.dir(arguments)
        },
        before(){
            debugger;
            console.dir(arguments)
        },
        progress(){
            debugger;
            console.dir(arguments)
        },
        error(){
            debugger;
            console.dir(arguments)
        },
        success(){
            debugger;
            console.dir(arguments)
        },
        complete(){
            debugger;
            console.dir(arguments)
        },
        preview1(file){
            debugger;
            console.dir(arguments)
            this.previewImage1 = file;
        },
        validate1(){
            debugger;
            console.dir(arguments)
        },
        before1(){
            debugger;
            console.dir(arguments)
        },
        progress1(){
            debugger;
            console.dir(arguments)
        },
        error1(){
            debugger;
            console.dir(arguments)
        },
        success1(){
            debugger;
            console.dir(arguments)
        },
        complete1(){
            debugger;
            console.dir(arguments)
        }
    }
}
</script>
<style>
.wrapper-example-load-scroll {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    top: 0px;
    left: 0px;
    box-sizing: border-box;
}

.wrapper-example-load-scroll .wrapper-area-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.wrapper-example-load-scroll .wrapper-area-content li {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: solid 1px #ccc;
    padding-left: 0.1rem;
    color: #666;
}

.wrapper-example-load-scroll .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-load-scroll .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
