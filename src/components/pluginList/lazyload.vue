<template>
  <div class="wrap">
    <div v-for="(i,index) in imgs" class="imgWrap">
    	<img  v-lazy="i.src" :key="index+i.src">
    </div>
	</div>
</template>
<script>
let src =  [
"https://nodom.store/plugin_set/public/plugins/plugins_show/carousel/carousel_1/img/1.jpg", 
"https://nodom.store/plugin_set/public/plugins/plugins_show/carousel/carousel_1/img/2.jpg", 
"https://nodom.store/plugin_set/public/plugins/plugins_show/carousel/carousel_1/img/3.jpg",
"https://nodom.store/plugin_set/public/plugins/plugins_show/carousel/carousel_1/img/4.jpg",
"https://nodom.store/plugin_set/public/plugins/plugins_show/carousel/carousel_1/img/5.jpg",
]
let imgs = src.map(i => {
  return { src: i, show: false }
});
export default {
  name: "lazyload",
  data() {
    return { imgs: imgs }
  }
}

</script>
<style scoped lang="less">
.wrap{
	.imgWrap{
		width:100%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center; 
		img{
			width:100%;
			height: 100%;
		}
	}
}
</style>
