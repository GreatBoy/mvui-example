<template>
    <div class="body-wrapper">
        <Hometitle>PullLoadElem</Hometitle>
        <div class="wrapper-example wrapper-example-load-elem">
            <div class="wrapper-area-content" id="parent">
                    <ul>
                        <li v-for="(key, value) in data">
                            {{ value.message }} {{ key }}
                        </li>
                    </ul>
                    <Pullload scroll="other" :status.sync="status" @on-load="loaded"></Pullload>
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
                self.status = 'ready';
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
                self.data.push({'message': '我是消息'});
            }, 1000);
        }
    }
}
</script>
<style>
.wrapper-example-load-elem {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 0.45rem;
    top: 0px;
    left: 0px;
    border-top: solid 1px #ccc;
    box-sizing: border-box;
}

.wrapper-example-load-elem .wrapper-area-content {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.wrapper-example-load-elem .wrapper-area-content li {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: solid 1px #ccc;
    padding-left: 0.1rem;
    color: #666;
}

.wrapper-example-load-elem .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-load-elem .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
