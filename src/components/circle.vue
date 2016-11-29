<template>
    <div class="body-wrapper">
        <Hometitle>Circle</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认cricle</div>
                <div class="wrapper-area-content">
                    <Circle :percent.sync="percent"></Circle>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">进度环顶端的形状</div>
                <div class="wrapper-area-content">
                    <Circle :percent.sync="percent" stroke-linecap="square"></Circle>
                    <Circle :percent.sync="percent" stroke-linecap="round"></Circle>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">背景环宽度、颜色</div>
                <div class="wrapper-area-content">
                    <Circle :percent.sync="percent" :bg-width="5" bg-color="#7a67ee"></Circle>
                    <Circle :percent.sync="percent" :bg-width="15" bg-color="#fd6131"></Circle>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">进度环宽度、颜色</div>
                <div class="wrapper-area-content">
                    <Circle :percent.sync="percent" :stroke-width="5" stroke-color="#10c0d8"></Circle>
                    <Circle :percent.sync="percent" :stroke-width="15" stroke-color="#ff4081"></Circle>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">进度环文本</div>
                <div class="wrapper-area-content">
                    <Circle :percent.sync="percent">
                        润度
                    </Circle>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">控制进度环</div>
                <div class="wrapper-area-content">
                    <div>
                        <Button @click="add" class="progress-btn-example" shape="round">增加</Button>
                        <Button @click="minus" class="progress-btn-example" shape="round">减少</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Circle,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Circle,
        Button
    },
    data() {
        return {
            percent: 10,
        }
    },
    methods: {
        add() {
            if (this.percent < 100) {
                this.percent = this.percent + 10;
            }
        },
        minus() {
            if (this.percent > 0) {
                this.percent = this.percent - 10;
            }
        }
    }
}
</script>
<style lang="less">
.click-btn {
    cursor: pointer;
}
</style>
