<template>
    <div class="body-wrapper">
        <Hometitle>Progress</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认进度条</div>
                <div class="wrapper-area-content">
                    <Progress :percent.sync="percent"></Progress>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">高度</div>
                <div class="wrapper-area-content">
                    <Progress :percent.sync="percent" :height="0.05" class="my-progress"></Progress>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">颜色</div>
                <div class="wrapper-area-content">
                    <Progress :percent.sync="percent" stroke-color="#23d089" class="my-progress"></Progress>
                    <Progress :percent.sync="percent" bg-color="#cddc39" class="my-progress"></Progress>
                </div>
            </div>
            <div class="wrapper-area">
                <div class="wrapper-area-title">更改进度</div>
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
    Progress,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Progress,
        Button
    },
    data() {
        return {
            percent: 10
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
.progress-btn-example {
    padding: 0.03rem 0.5rem;
}
</style>
