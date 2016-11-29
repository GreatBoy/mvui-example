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
        <h5>颜色</h5>
        <div>Loadding 传参</div>
        <code>
             class="mv-loadding-primary"
        </code>
        <Modal :class="mv-center" :type="line" :show="show"></Modal>
    </div>
</template>
<script>
    import { Modal } from 'mvui';
    export default{   
        data(){   
            return {  
                message: 'Modal Demo',
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
            Modal
        },
        methods: {
           
        }
    }
</script>