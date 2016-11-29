<template>
    <div class="body-wrapper">
        <Hometitle>Radio</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认</div>
                <div class="wrapper-area-content">
                    <div><Radio :picked.sync="message" value="测试2"></Radio></div>
                    <div><Radio :picked.sync="message" value="测试3"></Radio></div>
                </div>
                <div>{{ message }}</div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">不可用</div>
                <div class="wrapper-area-content">
                    <div>
                        <Radio :picked.sync="message" disabled :checked="true" value="测试1"></Radio>
                    </div>
                    <div>
                        <Radio :picked.sync="message" disabled value="测试1"></Radio>
                    </div>
                </div>
            </div>

            
            <div class="wrapper-area">
                <div class="wrapper-area-title">自定义icon</div>
                <div class="wrapper-area-content">
                    <div>
                        <Radio :picked.sync="name" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill"  :checked="true" value="测试2"></Radio>
                    </div>
                    <div>
                        <Radio :picked.sync="name" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="测试4"></Radio>
                    </div>
                </div>
                <div>{{ name }}</div>
            </div>


            <div class="wrapper-area">
                <div class="wrapper-area-title">change事件</div>
                <div class="wrapper-area-content">
                    <div>
                        <Radio :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill"  :checked="true" value="测试8" @on-change="change"></Radio>
                    </div>
                    <div>
                        <Radio :picked.sync="test" no-select-icon="mv-icon-round-add" select-icon="mv-icon-round-add-fill" value="测试6" @on-change="change"></Radio>
                    </div>
                </div>
                <div>{{ test }}</div>
            </div>
    
        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Radio,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Radio,
        Button
    },
    data() {
        return {
            message: '',
            name: '',
            test: ''
        }
    },
    methods: {
        change(test){
            console.log(test);
        }
    }
}
</script>
