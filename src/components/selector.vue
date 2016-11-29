<template>
    <div class="body-wrapper">
        <Hometitle>Selector</Hometitle>
        <div class="wrapper-example">
            <div class="wrapper-area">
                <div class="wrapper-area-title">默认</div>
                <div class="wrapper-area-content">
                    <span>选择省</span>
                    <Selector :selected.sync="selected" :options="option"></Selector>
                </div>
                <div>{{ selected }}</div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">失效</div>
                <div class="wrapper-area-content">
                    <span>选择省</span>
                    <Selector :selected.sync="testSelected" :disabled="true" placeholder="选择省" :options="testOption"></Selector>
                </div>
            </div>

            <div class="wrapper-area">
                <div class="wrapper-area-title">更改Icon</div>
                <div class="wrapper-area-content">
                    <span>选择省</span>
                    <Selector :selected.sync="testSelected" placeholder="选择省" arrow-icon="mv-icon-caret-bottom" :options="testOption"></Selector>
                </div>
            </div>


            <div class="wrapper-area">
                <div class="wrapper-area-title">change事件</div>
                <div class="wrapper-area-content">
                    <span>选择省</span>
                    <Selector :selected.sync="changeSelect" @on-change="change" placeholder="选择省" arrow-icon="mv-icon-caret-bottom" :options="changeOption"></Selector>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import Hometitle from './common/hometitle.vue';
import {
    Selector,
    Button
} from 'mvui';
export default {
    components: {
        Hometitle,
        Selector,
        Button
    },
    data() {
        return {
            selected: "2",
            option: [
                {
                    label: '北京',
                    value: '1'
                },
                {
                    label: '南京',
                    value: '2',
                }
            ],
            testSelected: '',
            testOption: [
                {
                    label: '北京',
                    value: '1'
                },
                {
                    label: '南京',
                    value: '2',
                }
            ],
            changeSelect: '',
            changeOption: [
                {
                    label: '北京',
                    value: '1'
                },
                {
                    label: '南京',
                    value: '2',
                }
            ]

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
