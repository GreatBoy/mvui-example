<template>  
    <div class="body-wrapper">
        <Hometitle>Tip</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">顶部位置</div>
                <div class="wrapper-area-content">
                    <div class="click-btn" @click="clickshow1">点击</div>
                    <Tip :show.sync="show1" position="top">tip提示框 top 位置</Tip>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">中间位置</div>
                <div class="wrapper-area-content">
                    <div class="click-btn" @click="clickshow2">点击</div>
                    <Tip :show.sync="show2" position="center">tip提示框 center 位置</Tip>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">底部位置</div>
                <div class="wrapper-area-content">
                    <div class="click-btn" @click="clickshow3">点击</div>
                    <Tip :show.sync="show3" position="bottom">tip提示框 bottom 位置</Tip>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">手动关闭</div>
                <div class="wrapper-area-content">
                    <div class="click-btn" @click="clickshow4">显示tip</div>
                    <div class="click-btn" @click="clickclose4">关闭tip</div>
                    <Tip :show.sync="show4" position="center" :auto="false">tip提示框 center 位置</Tip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Hometitle from './common/hometitle.vue';
    import { Tip } from 'mvui';
    export default{   
        components: { 
            Hometitle,
            Tip
        },
        data(){
             return {
                show1: false,
                show2: false,
                show3: false,
                show4: false
             }
        },
        methods: {
            clickshow1(){
                this.show1 = true;
            },
            clickshow2(){
                this.show2 = true;
            },
            clickshow3(){
                this.show3 = true;
            },
            clickshow4(){
                this.show4 = true;
            },
            clickclose4(){
                this.show4 = false;
            }
        }
    }
</script>
<style lang="less">
    .click-btn{
        cursor: pointer;
    }
</style>