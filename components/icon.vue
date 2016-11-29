<template>  
    <p>{{ message }}</p>  

    <div>
        icon 有两种个props，一个class 传class类名 , 例如： ion-android-mail test-class
        <br/>第二个 参数style，传样式，例如font-size: 12px;color: blue 或者直接传对象
    </div>

    <div>参数一：ion-android-mail test-class  参数二： font-size: 12px;color: blue;</div>
    <Icon class="ion-android-mail test-class" style="font-size: 12px;color: blue;"></Icon>

    <div>参数一：ion-android-mail test-class  参数二： {"color":"red","margin-top":"12px"}</div>
    <Icon class="ion-android-mail test-class" :style="iconStyle"></Icon>
</template> 
<script>
    import { Icon } from 'mvui';
    export default{   
        data(){   
            return {  
                message: 'Icon Demo',
            }
        },
        computed: {
            iconStyle () {
                return {
                    "color":"red",
                    "margin-top":"12px"
                }
            }
        },
        components: { 
            Icon
        }
    }
</script>