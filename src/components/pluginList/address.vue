<template>
  <div class="plugin-type el-plugin-type">
    <div class="plugin-name">{{name}}插件</div>
    <p class="explain">本章节主要介绍插件库选择地址插件，主要用于定位，选择所属省份等。</p>
    <div class='plugin-item'>
      <div class="plugin-content el-plugin-01001">
        <div class="position">
          <address1 />
        </div>
      </div>
      <br>
      <div class="instruction-title-sec">HTML代码</div>
      <br><pre class="instruction-code">
                                        <pre><<span class="element">div</span> <span class="attr">class</span>="position"></pre>
      <pre>      <<span class="element">div</span> <span class="attr">class</span>="location" <span class="attr">x-plugin</span>="address"><<span class="element">/div</span>></pre>
      <pre><<span class="element">/div</span>></pre>
      </pre><br>
      <div class="instruction-title-sec">JS代码</div>
      <br><pre  class="instruction-code">
                                    <pre><span>{</span></pre>
      <pre><span>      name: 'address',</span>      <span class="comment">/*插件模块的模块名称*/</span></pre>
      <pre><span>      el: '.location',</span>      <span class="comment">/*插件渲染容器*/</span></pre>
      <pre><span>      data: {</span></pre>
      <pre><span>            location_country:  '*****'</span>      <span class="comment">/*当前位置城市名*/</span></pre>
      <pre><span>            popular_country: [{name: '北京'}]</span>      <span class="comment">/*热门城市数组*/</span></pre>
      <pre><span>            small_div: {</span>      <span class="comment">/*颜色对象*/</span>
      </pre>
      <pre><span>                  color_1: '#ffffff',</span>      <span class="comment">/*热门城市bg颜色*/</span></pre>
      <pre><span>                  color_2: '#66d9ef',</span>      <span class="comment">/*定位颜色*/</span></pre>
      <pre><span>                  color_3: '#457eb1',</span>      <span class="comment">/*城市列表标题颜色*/</span></pre>
      <pre><span>                  color_4: '#5a8dba'</span>      <span class="comment">/*热门城市边框颜色*/</span></pre>
      <pre><span>      }</span></pre>
      <pre><span>}</span></pre>
      </pre><br>
      <div class='plugin-explain'>
        <p class="instruction-title-sec">插件说明:</p>
        <br>
        <p class='explain'>这是一款选择与获取当前省份的智能Location插件。插件分为"当前省份"、"热门省份"以及按照拼音首字母排列的各个省份三个部分。通过点击省份名称，来改变"当前省份"。" </p>
      </div>
    </div>
  </div>
</template>
<script>
import address1 from '@/components/pluginlist/address/address1.vue'
export default {
  name: "addressdb",
  data() {
    return {
      name: "地址插件"
    }
  },
  components: {
    address1
  }
}

</script>
