<template>

    <div class="carousel-wrapper">
        <h1 class="title">Carousel</h1>
        <carousel :items-to-show="3" :wrap-around="true">
            <slide v-for="slide in 10" :key="slide" :style="{
            background: `rgba(${(slide * 255)}, ${(slide * 255)}, ${(slide * 255)}`
        }">
                {{ slide }}
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>

    <CarouselComponent />
    
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CarouselComponent from '../../code/carousel.vue';

const components = defineComponent({
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    }
})

</script>

<style scoped>
.carousel__slide {
    background: white;
    color: #333;
    height: 40rem;
    border: .1rem solid #000;
    font-size: 4rem;
    line-height: 4.4rem;
    font-weight: 700;
    opacity: 0.5 !important;
}

.carousel__slide--active {
    opacity: 1 !important;
}

.carousel-wrapper {
    padding: 2rem 0;
}

.carousel-wrapper h1 {
    padding-left: 2rem;
    margin-bottom: 2rem;
}

* {
    background: white;
    color: #333;
}
</style>