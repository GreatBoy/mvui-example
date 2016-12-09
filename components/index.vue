<template>
    <p @click="clickEvent">{{ message }}</p>
    <input v-model="message">
    <Icon type="ion-android-mail test" style="font-size: 12px;color: blue;"></Icon>
</template>
<script>
import {
    Icon
} from 'mvui';
export default {
    data() {
        return {
            message: 'Hello Vue.js!',
        }
    },
    computed: {
        iconStyle() {
            return {
                "color": "red",
                "margin-top": "12px"
            }
        }
    },
    components: {
        Icon
    },
    methods: {
        clickEvent: function(rs){
            debugger;
        }
    },
    watch: {
        message(val){
            console.log(val);
        }
    }
}
</script>
