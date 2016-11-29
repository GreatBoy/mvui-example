<template>
    <div class="body-wrapper">
        <Hometitle>Checkbox</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认</div>
                <div class="wrapper-area-content">
                    <span>选择姓名</span>
                    <Checkbox :picked.sync="message" value="张三"></Checkbox>
                    <Checkbox :picked.sync="message" value="李四"></Checkbox>
                    <Checkbox :picked.sync="message" value="王五"></Checkbox>
                </div>
                <div>{{ message }}</div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">失效</div>
                <div class="wrapper-area-content">
                    <span>选择男女</span>
                    <Checkbox :picked.sync="sex" disabled :checked="true" value="男"></Checkbox>
                    <Checkbox :picked.sync="sex" disabled value="女"></Checkbox>
                </div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">change事件</div>
                <div class="wrapper-area-content">
                    <span>选择基友</span>
                    <Checkbox :picked.sync="hobby" value="妹子" ></Checkbox>
                    <Checkbox :picked.sync="hobby" value="哥哥" ></Checkbox>
                    <Checkbox :picked.sync="hobby" value="小三" ></Checkbox>
                </div>
                <div>{{ hobby }}</div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">自定义icon</div>
                <div class="wrapper-area-content">
                    <span>选择</span>
                    <Checkbox :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="test1" ></Checkbox>
                    <Checkbox :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="test2" ></Checkbox>
                    <Checkbox :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="test3" ></Checkbox>
                </div>
                <div>{{ hobby }}</div>
            </div>

        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Checkbox,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Checkbox,
        Button
    },
    data() {
        return {
            message: [],
            hobby: [],
            sex: [],
            test: []
        }
    },
    methods: {
        change(val){
            console.dir(val);
            debugger;
        }
    }
}
</script>
