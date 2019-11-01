<template>
    <div class="navigation">
        <router-link to="/"><button class="rightSpacing">Anterior</button></router-link>
        <router-link to="/about"><button>Próxima</button></router-link>
    </div>
</template>

<script>
export default {
  name: 'IndexNav',
}
</script>

<style scoped>
    .navigation{
        margin: 45px;
        float:right;
    }

    button{
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        background-color: #a33689;
        border-radius: 25px;
    }

    button:focus {outline:0 !important;}

    button:active{
        background-color: #c4a5c5;
        text-decoration: none;
    }

    .rightSpacing{
        margin-right: 10px;
    }

</style>