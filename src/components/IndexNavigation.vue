<template>
    <div class="navigation">
        <button @click="previousPage" class="rightSpacing" :disabled="!this.page > 0">Anterior</button>
        <button @click="nextPage">Próxima</button>
    </div>
</template>

<script>
export default {
    name: 'IndexNav',
    methods:{
        nextPage:function(){
            if(this.page < 9){
                this.page+=1
                this.$emit("pageValue", this.page)
            }
        },
        previousPage:function(){
            if(this.page > 0){
                this.page-=1
                this.$emit("pageValue", this.page)
            }
        }
    },
    data(){
        return{
            page: 0
        }
    },
}
</script>

<style scoped>
    button{
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        background-color: #a33689;
        border-radius: 30px;
        font-family: 'Roboto';
        font-style: normal;
    }

    button:focus {outline:0 !important;}

    button:active{
        background-color: #c4a5c4;
        text-decoration: none;
    }

    button:disabled{
        padding: 15px 32px;
        background-color: #cccccc;
        color: #666666;
    }

    .rightSpacing{
        margin-right: 10px;
    }

</style>