<template>
    <button class="btn" :data-clipboard-target="item">
        <img src="assets/clippy.svg" alt="Copy to clipboard">
    </button>
</template>


<script lang="ts" setup>

const props = defineProps({
    item: {
        required: true,
        type: String,
    }
})

</script>

<style scoped lang="scss"></style>