<template>
    <div class="alerts-container">
        <h1 class="title">Custom Status Alerts</h1>

        <div class="alerts">
            <div class="alert success">
                <SuccessAlert :loaded="true" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SuccessAlert from '../../components/alerts/success.vue';

let statuses = ref([
    {
        loaded: false,
        type: 'success',
        message: 'Operation was successful',
        setTimeout: 5000
    },
    {
        loaded: false,
        type: 'error',
        message: 'Operation failed',
        setTimeout: 5000
    },
    {
        loaded: false,
        type: 'warning',
        message: 'Operation has potential issues',
        setTimeout: 5000
    },
    {
        loaded: false,
        type: 'info',
        message: 'Operation is in progress',
        setTimeout: 5000
    },
    // Add more statuses here
]);

onMounted(() => {
    statuses.value.forEach((status) => {
        setTimeout(() => {
            status.loaded = true;
        }, status.setTimeout / 10);
    });
});


</script>

<style scoped lang="scss"></style>