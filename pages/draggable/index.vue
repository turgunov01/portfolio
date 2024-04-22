<template>
    <div id="app">
        <draggableComponent v-model="list">
            <div v-for="element in list" :key="element.name" class="list-element">
                {{ element.name }}
            </div>
        </draggableComponent>
    </div>
</template>

<script setup lang="ts">
const list = ref([
    { name: 'Element 1' },
    { name: 'Element 2' },
    { name: 'Element 3' },
    { name: 'Element 4' },
    { name: 'Element 5' },
    { name: 'Element 6' },
    { name: 'Element 7' },
    { name: 'Element 8' },
    { name: 'Element 9' },
    { name: 'Element 10' },
]);
</script>

<style>
.list-element {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: move;
}
</style>
</draggable>