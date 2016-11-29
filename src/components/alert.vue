<template>  
    <div class="body-wrapper">
        <Hometitle>Alert</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认alert弹框</div>
                <div class="wrapper-area-content">
                    <div class="click-btn" @click="clickshow1">点击提示弹框</div>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">弹框回调</div>
                <div class="wrapper-area-content">
                    <div class="click-btn" @click="clickshow2">点击提示弹框2</div>
                </div>
            </div>
        </div>

        <Tip :show.sync="showtip">{{tipmessage}}</Tip>
    </div>
</template>
<script>
    import Hometitle from './common/hometitle.vue';
    import { Modal, Tip, Alert } from 'mvui';
    export default{   
        components: { 
            Hometitle,
            Modal,
            Tip,
            Alert
        },
        data(){
             return {
                show1: false,
                show2: false,
                tipmessage: '',
                showtip: false
             }
        },
        methods: {
            clickshow1(){
                Alert.show({
                    title: '我是title',
                    content: '我是内容'
                });
            },
            clickshow2(){
                var self = this;
                Alert.show({
                    title: '我是title',
                    content: '我是内容',
                    onClose: function(){
                        Alert.remove();
                        self.tipmessage = '弹框已经被销毁';
                        self.showtip = true;
                    }
                });
            },
        }
    }
</script>
<style lang="less">
    .click-btn{
        cursor: pointer;
    }
</style>