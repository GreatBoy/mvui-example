<template>  
    <div class="body-wrapper">
        <Hometitle>Gotop</Hometitle>
        <div class="wrapper-example">
            
            <div class="wrapper-area">
                <div class="wrapper-area-title">回到顶部</div>
                <div class="wrapper-area-content">
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                    <div>回到顶部</div>
                </div>
            </div>

            <Gotop @on-click="gotopCallback"></Gotop>

        </div>
    </div>
</template>
<script>
    import Hometitle from './common/hometitle.vue';
    import { Gotop } from 'mvui';
    export default{   
        components: { 
            Hometitle,
            Gotop
        },
        methods: {
            gotopCallback(e){
                console.dir('click');
            }
        }
    }
</script>
<style lang="less">
    .mv-btn{
        margin-top: 0.05rem;
    }
</style>