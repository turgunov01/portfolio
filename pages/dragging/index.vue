<template>
    <h1 class="title">Custom Draggable</h1>
    <draggable v-model="items" class="columns">
        <template #item="{ element }" class="column">
            <div>Element with id: {{ element.id }}</div>
        </template>
    </draggable>

</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import { generateObjects } from '../../composables/generate';
import draggable from 'vuedraggable';

const components = defineComponent({
    components: {
        draggable,
    }
})

const items = ref(generateObjects())

</script>


<style scoped lang="scss">
.columns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 3rem;
    margin-top: 3rem;
}

.columns>div {
    width: 100%;
    height: 10rem;
    border: .3rem dashed #fff;
    transition: 100ms;
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;

    &.sortable-ghost,
    &.sortable-chosen {
        background: #fff;
        color: black;
    }
}
</style>
