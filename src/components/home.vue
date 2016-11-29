
<template>
<div class="home">
    <Hometitle :icon="false"><img class="home-img" src="/static/logo.png"/></Hometitle>
    <div class="home-list">
        <div class="home-list-title">base</div>
        <ul>
            <li><a v-link="{path:'/icon' , activeClass:'active'}">Icon 图标</a></li>
            <li><a v-link="{path:'/button' , activeClass:'active'}">Button 按钮</a></li>
        </ul>
        <div class="home-list-title">form</div>
        <ul>
            <li><a v-link="{path:'/inputbox' , activeClass:'active'}">Inputbox 输入框</a></li>
            <li><a v-link="{path:'/radio' , activeClass:'active'}">Radio 单选</a></li>
            <li><a v-link="{path:'/checkbox' , activeClass:'active'}">Checkbox 多选</a></li>
            <li><a v-link="{path:'/selector' , activeClass:'active'}">Selector 下拉框</a></li>
            <li><a v-link="{path:'/switch' , activeClass:'active'}">Switch 开关</a></li>
        </ul>
        <div class="home-list-title">chart</div>
        <ul>
            <li><a v-link="{path:'/progress' , activeClass:'active'}">Progress 进度条</a></li>
            <li><a v-link="{path:'/circle' , activeClass:'active'}">Circle 进度环</a></li>
        </ul>
        <div class="home-list-title">view</div>
        <ul>
            <li><a v-link="{path:'/tip' , activeClass:'active'}">Tip 提示</a></li>
            <li><a v-link="{path:'/alert' , activeClass:'active'}">Alert 提示框</a></li>
            <li><a v-link="{path:'/modal' , activeClass:'active'}">Modal 模态框</a></li>
            <li><a v-link="{path:'/accordion' , activeClass:'active'}">Accordion 折叠面板</a></li>
        </ul>
        <div class="home-list-title">orther</div>
        <ul>
            <li><a v-link="{path:'/gotop' , activeClass:'active'}">Gotop 回到顶部</a></li>
            <li><a v-link="{path:'/loadding' , activeClass:'active'}">Loadding 加载</a></li>
            <li><a v-link="{path:'/scroll' , activeClass:'active'}">Scroll 滚动条</a></li>
            <li><a v-link="{path:'/pullRefresh' , activeClass:'active'}">PullRefresh 下拉刷新</a></li>
            <li><a v-link="{path:'/pullLoad' , activeClass:'active'}">PullLoad 上拉加载</a></li>
            <li><a v-link="{path:'/slider' , activeClass:'active'}">Slider 轮播</a></li>
            <li><a v-link="{path:'/uploader' , activeClass:'active'}">Uploader 上传</a></li>
            <li><a v-link="{path:'/page' , activeClass:'active'}">Page 分页</a></li>
           <!--  <li><a v-link="{path:'/lazyload' , activeClass:'active'}">LazyLoad 懒加载</a></li> -->
        </ul>
    </div>
</div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
export default{
    data(){
        return {
            
        }
    },
    components:{
        Hometitle
    },
    route:{
        data() {
            /*每次切换路由，在渲染出页面前都会执行*/
        }
    }
}
</script>
<style lang="less">
    .home-list {
        .home-list-title{
            height: 0.45rem;
            line-height: 0.45rem;
            border-bottom: 1px solid #e6e6e6;
            padding-left:0.1rem;
            font-size: 0.16rem;
            color: #aaa;
        }
        ul li{
            height: 0.45rem;
            line-height: 0.45rem;
            border-bottom: 1px solid #e6e6e6;
            padding-left:0.2rem;
            font-size: 0.13rem;
            background: white;
            color: black;
            a{
                display: block
            }
        }
    }
</style>