<template>
    <div class="body-wrapper">
        <Hometitle>Inputbox</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认</div>
                <div class="wrapper-area-content">
                    <span>姓名</span>
                    <Inputbox :value.sync="name"></Inputbox>
                </div>
                <div class="wrapper-area-content">
                    <span>公司</span>
                    <Inputbox :value.sync="company"></Inputbox>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">修改样式</div>
                <div class="wrapper-area-content">
                    <div>姓名：</div>
                    <Inputbox :value.sync="name" style="border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;"></Inputbox>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">动态数据</div>
                <div class="wrapper-area-content">
                    <div>消息：</div>
                    <Inputbox :value.sync="message" style="border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;"></Inputbox>
                </div>
                <div>消息：{{ message }}</div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">placeHolder</div>
                <div class="wrapper-area-content">
                    <div>爱好：</div>
                    <Inputbox :value.sync="like" placeholder="请输入爱好" :close-icon="false" style="border: solid 1px #ccc;border-radius: 0.03rem;width: 100%;"></Inputbox>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Inputbox,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Inputbox,
        Button
    },
    data() {
        return {
            name: ' ',
            message: '',
            like: '',
            company: ''
        }
    }
}
</script>