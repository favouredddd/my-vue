<template>
  <div class="root">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'vue',
}

</script>
<style>
input{
  -webkit-appearance: none;
}
.slide-left-enter-active {
  transition: all .3s ease;
}
.slide-left-leave-active {
  transition: all .8s ease  ;
}
.slide-left-enter, 
{
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to{
 transform: translateX(-100%);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all .3s ease;
}
.slide-right-leave-active {
  transition: all .8s ease  ;
}
.slide-right-enter{
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to{
    transform: translateX(100%);
    opacity: 0;
}</style>

</style>
