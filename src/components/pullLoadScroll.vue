<template>
    <div class="body-wrapper">
        <Hometitle>PullLoadScroll</Hometitle>
        <div class="wrapper-example wrapper-example-load-scroll">
            <div class="wrapper-area-content" id="parent">
                <Scroll :size.sync="size" :is-refresh.sync="isRefresh">
                    <div slot="down">我是down按钮</div>
                    <div slot="up">我是up按钮</div>
                    <div slot="load">我是loadding</div>
                    <ul>
                        <li v-for="(key, value) in data">
                            {{ value.message }} {{ key }}
                        </li>
                    </ul>
                    <Pullload scroll="scroll" :size.sync="size" :status.sync="status" @on-load="loaded"></Pullload>
                </Scroll>
            </div>
        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Scroll,
    Pullload,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Scroll,
        Pullload,
        Button
    },
    data() {
        return {
            status: 'ready',
            size: 0,
            isRefresh: false,
            data: [
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'},
                {'message': '我是消息'}
            ]
        }
    },
    methods: {
        loaded: function(){
            let self = this;
            setTimeout(function(){
                self.status = 'end';
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                debugger;
                self.isRefresh = true;
            }, 1000);
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
