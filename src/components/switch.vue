<template>
    <div class="body-wrapper">
        <Hometitle>Switch</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">slot显示</div>
                <div class="wrapper-area-content">
                    <span>开关</span>
                    <Switch :checked.sync="selected1">
                        <span slot="open">开</span>
                        <span slot="close">关</span>
                    </Switch>
                </div>
                <div>{{ selected1 }}</div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认</div>
                <div class="wrapper-area-content">
                    <span>选择姓名</span>
                    <Switch :checked.sync="selected2"></Switch>
                </div>
                <div>{{ selected2 }}</div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">是否可用</div>
                <div class="wrapper-area-content">
                    <span>选择姓名</span>
                    <Switch :checked.sync="selected3" :disabled="true"></Switch>
                </div>
                <div>{{ selected3 }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Switch,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Switch,
        Button
    },
    data() {
        return {
            selected1: true,
            selected2: true,
            selected3: true
        }
    }
}
</script>
