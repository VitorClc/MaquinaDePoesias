<template>
  <div id="app" oncontextmenu="return false;">
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
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */

    -webkit-user-drag: none;
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