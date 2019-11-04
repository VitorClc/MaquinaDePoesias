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
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
    }

    button:focus {outline:0 !important;}

    button:active{
        background-color: #c4a5c4;
        text-decoration: none;
    }

    .rightSpacing{
        margin-right: 10px;
    }

</style>