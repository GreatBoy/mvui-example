<template>
    <div class="body-wrapper">
        <Hometitle>PullLoadWindow</Hometitle>
        <div class="wrapper-example wrapper-example-load-window">
            <div class="wrapper-area-content" id="parent">
                <ul>
                    <li v-for="(key, value) in data">
                        {{ value.message }} {{ key }}
                    </li>
                </ul>
                <Pullload scroll="window" :status.sync="status" @on-load="loaded"></Pullload>
            </div>
        </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Panel,
    Pullload,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
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
            }, 1000);
        }
    }
}
</script>
<style>

.wrapper-example-load-window .wrapper-area-content li {
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: solid 1px #ccc;
    padding-left: 0.1rem;
    color: #666;
}

.wrapper-example-load-window .wrapper-area-content li: last-child {
    border-bottom-width: 0px;
}

.wrapper-example-load-window .wrapper-area-content .wrapper-area {
    padding: 0px;
    margin: 0px;
}
</style>
