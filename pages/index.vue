<template>
    <div class="component-wrapper">
        <div class="components">
            <nuxt-link class="draggable" to="/dragging">Draggable</nuxt-link>
            <nuxt-link class="draggable" to="/carousel">Carousel</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">


</script>

<style scoped>
.components {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
</style>