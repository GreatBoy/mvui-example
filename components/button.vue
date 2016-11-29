<style>
.mv-btn{
    margin: 5px;
}
</style>
<template>  
    <p>{{ message }}</p>  

    <div>
        <code>
            button 主要由三个参数：<br/>
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

    <Button class="mv-btn-primary" style="font-size: 14px;" type="submit" icon-style="font-size: 14px;">primary</Button>

    <Button class="mv-btn-success" style="font-size: 14px;" type="submit" icon-style="font-size: 14px;">success</Button>

    <Button class="mv-btn-warning" style="font-size: 14px;" type="submit" icon-style="font-size: 14px;">warnning</Button>

    <Button class="mv-btn-danger" style="font-size: 14px;"  type="submit" icon-style="font-size: 14px;">danger</Button>

    <Button class="mv-btn-royal" style="font-size: 14px;"  type="submit" icon-style="font-size: 14px;">royal</Button>

    <Button class="mv-btn-primary" style="font-size: 14px;" icon="ion-android-mail" type="submit" icon-style="font-size: 14px;color: red;">icon style</Button>

    <Button class="mv-btn-primary mv-btn-radius" style="font-size: 14px;" type="submit" icon-style="font-size: 14px;">radius</Button>

    <Button class="mv-btn-primary" style="font-size: 14px;" icon="ion-android-mail" type="submit" icon-style="font-size: 14px;">type</Button>

    <Button class="mv-btn-primary" style="font-size: 14px;" type="submit" disabled="disabled">type</Button>

</template>
<script>
    import { Button } from 'mvui';
    export default{   
        data(){   
            return {  
                message: 'Button Demo',
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
            Button
        }
    }
</script>