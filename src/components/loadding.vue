<template>  
    <div class="body-wrapper">
        <Hometitle>Loadding</Hometitle>
        <div class="wrapper-example wrapper-example-loadding">
            
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认loadding</div>
                <div class="wrapper-area-content">
                    <Loadding class="custome-loadding" :show="show"></Loadding>
                </div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">颜色</div>
                <div class="wrapper-area-content">
                    <Loadding class="mv-loadding-primary" :show="show"></Loadding>
                </div>
            </div>


            <div class="wrapper-area">
                <div class="wrapper-area-title">circle or line</div>
                <div class="wrapper-area-content">
                    <Loadding type="circle" :show="show"></Loadding>
                    <Loadding type="line" :show="show"></Loadding>
                </div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">自定义</div>
                <div class="wrapper-area-content">
                    <Loadding :show="show">
                        <Icon class="mv-icon-loading-6 mv-circular" position="center"></Icon>
                    </Loadding>
                    <Loadding :show="show">
                        <Icon class="mv-icon-loading-4 mv-circular"></Icon>
                    </Loadding>
                </div>
            </div>


            <div class="wrapper-area">
                <div class="wrapper-area-title">居中</div>
                <div class="wrapper-area-content">
                    <Loadding position="center" :show="show"></Loadding>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import Hometitle from './common/hometitle.vue';
    import { Loadding, Icon } from 'mvui';
    export default{   
        components: { 
            Hometitle,
            Loadding,
            Icon
        },
        data (){
            return {
                show: true
            }
        }
    }
</script>
<style lang="less">
    .wrapper-example-loadding .mv-circular {
        font-size: 0.3rem;
    }
</style>