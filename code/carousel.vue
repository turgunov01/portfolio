<template>
    <div class="language-vue fragment"><span class="lang">.vue</span>
        <pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:autoplay</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">2000</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:wrap-around</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Slide</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">slide in 10</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">slide</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">carousel__item</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ slide }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Slide</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"></span>
        <span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">addons</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Pagination</span><span style="color:#89DDFF;"> /&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"></span>
        <span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">'</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">'</span></span>
        <span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Carousel</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Pagination</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Slide</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">'</span><span style="color:#C3E88D;">vue3-carousel</span><span style="color:#89DDFF;">'</span></span>
        <span class="line"></span>
        <span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">'</span><span style="color:#C3E88D;">vue3-carousel/dist/carousel.css</span><span style="color:#89DDFF;">'</span></span>
        <span class="line"></span>
        <span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
        <span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">'</span><span style="color:#C3E88D;">Autoplay</span><span style="color:#89DDFF;">'</span><span style="color:#89DDFF;">,</span></span>
        <span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
        <span class="line"><span style="color:#A6ACCD;">    Carousel</span><span style="color:#89DDFF;">,</span></span>
        <span class="line"><span style="color:#A6ACCD;">    Slide</span><span style="color:#89DDFF;">,</span></span>
        <span class="line"><span style="color:#A6ACCD;">    Pagination</span><span style="color:#89DDFF;">,</span></span>
        <span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
        <span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
        <span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
        <span class="line"></span></code></pre>
    </div>
</template>


<script lang="ts" setup></script>

<style>
.language-vue {
    position: relative;
}
</style>