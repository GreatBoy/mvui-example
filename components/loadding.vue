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
        .custome-loadding{
            color: red !important;
        } 
        </code>

        <div>Loadding 传参</div>
        <code>
             class="custome-loadding"
        </code>
        <Loadding class="custome-loadding" :show="show"></Loadding>
    </div>


    <div class='example'>
        <h5>居中</h5>
        <div>Loadding 传参</div>
        <code>
             class="mv-center"
        </code>
        <Loadding class="mv-center" :show="show"></Loadding>
    </div>


    <div class='example'>
        <h5>颜色</h5>
        <div>Loadding 传参</div>
        <code>
             class="mv-loadding-primary"
        </code>
        <Loadding class="mv-loadding-primary" :show="show"></Loadding>
    </div>


    <div class='example'>
        <h5>自定义style</h5>
        <div>Loadding 传参</div>
        <code>style="background: red;" </code>
        <Loadding style="background: red;"></Loadding>
    </div>


    <div class='example'>
        <h5>type 两种类型 circle 和 line </h5>
        <code>
            type="circle"<br/>
            type="line"
        </code>
        <Loadding type="circle" :show="show"></Loadding>
        <Loadding type="line" :show="show"></Loadding>
    </div>


    <Loadding :class="mv-center" :type="line" :show="show"></Loadding>

</template>
<script>
    import { Loadding } from 'mvui';
    export default{   
        data(){   
            return {  
                message: 'Loadding Demo',
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
            var self = this;
            setTimeout(function(){
                self.show = false;
            },3000);
        },
        components: { 
            Loadding
        },
        methods: {
           
        }
    }
</script>