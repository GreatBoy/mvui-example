<style>
.mv-btn{
    margin: 5px;
}
.example{
    margin: 20px 0px;
    background: #ecf1f4;
}
code{
    display:block;
}
</style>
<template>  
    <h2>{{ message }}</h2>  
    <div>
        主要由三个参数:
        <code>
            class: String 主要可以自由添加类名以及定义好的类名<br/>
            style: [Object, String]<br/>
            type: String 圆形的以及线性的动画<br/>
        </code>
    </div>

    <div class='example'>
        <h5>自定义class</h5>

        <div>样式</div>
        <code>
        .custome-tip{
            color: red !important;
        } 
        </code>

        <div>Tip 传参</div>
        <code>
             class="custome-loadding"
        </code>
        <Tip class="mv-top" :show.sync="show" style="color: red;"></Tip>
        <Tip class="mv-center" :show.sync="show"></Tip>
    </div>
</template>
<script>
    import { Tip } from 'mvui';
    export default{   
        data(){   
            return {  
                message: 'Tip Demo',
                show: true
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
        ready (){
            
        },
        components: { 
            Tip
        },
        methods: {
           
        }
    }
</script>