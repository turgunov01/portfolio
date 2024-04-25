<template>
    <div class="nav">
        <div class="container">
            <a href="https://instagram.com/sarik.turgunov" target="_blank" class="nav-logo">@sarik.turgunov</a>
            <ul class="nav-list">
                <li class="nav-item">
                    <nuxt-link to="/" class="nav-link">Components</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="main">
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"></style>