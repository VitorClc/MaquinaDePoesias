<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
  ::-webkit-scrollbar {
  display: none;
  }

  html{
    overflow: hidden;
  }

  /*slide transition*/
  .slide-enter-active,.slide-leave-active {  
    transition: transform 0.4s;
  }

  .slide-enter {  
    transform: translateX(100%);
  }
  
  .slide-leave-to {  
    transform: translateX(-100%);
  }
</style>