<style>
.mv-btn{
    margin: 5px;
}
</style>
<template>  
    <p>{{ message }}</p>  

    <div>
        <code>
            gotop 主要由三个参数：<br/>
            class: String,<br/>
            style: [Object, String],<br/>
            disabled: Boolean,<br/>
            type: String,<br/>
            icon: String,<br/>
            icon-style: [Object, String],<br/>

            class 主要指传入的类名
            例如.mv-btn-primary
        </code>
    </div>
        <div>
        <code>
            gotop 主要由三个参数：<br/>
            class: String,<br/>
            style: [Object, String],<br/>
            disabled: Boolean,<br/>
            type: String,<br/>
            icon: String,<br/>
            icon-style: [Object, String],<br/>

            class 主要指传入的类名
            例如.mv-btn-primary
        </code>
    </div>

        <div>
        <code>
            gotop 主要由三个参数：<br/>
            class: String,<br/>
            style: [Object, String],<br/>
            disabled: Boolean,<br/>
            type: String,<br/>
            icon: String,<br/>
            icon-style: [Object, String],<br/>

            class 主要指传入的类名
            例如.mv-btn-primary
        </code>
    </div>


        <div>
        <code>
            gotop 主要由三个参数：<br/>
            class: String,<br/>
            style: [Object, String],<br/>
            disabled: Boolean,<br/>
            type: String,<br/>
            icon: String,<br/>
            icon-style: [Object, String],<br/>

            class 主要指传入的类名
            例如.mv-btn-primary
        </code>
    </div>

        <div>
        <code>
            gotop 主要由三个参数：<br/>
            class: String,<br/>
            style: [Object, String],<br/>
            disabled: Boolean,<br/>
            type: String,<br/>
            icon: String,<br/>
            icon-style: [Object, String],<br/>

            class 主要指传入的类名
            例如.mv-btn-primary
        </code>
    </div>

    <Gotop class="mv-btn-primary" style="font-size: 0.14rem;" type="submit" icon-style="font-size: 0.18rem;" @on-click="gotopCallback"></Gotop>
    
</template>
<script>
    
    import { Gotop } from 'mvui';
    export default{   
        data(){   
            return {  
                message: 'Gotop Demo',
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
            Gotop
        },
        methods: {
            gotopCallback(){
                alert('点击子组件');
            }
        }
    }
</script>