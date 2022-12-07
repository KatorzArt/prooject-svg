<script setup>
const props = defineProps({ name: String, x: Number, y: Number });
</script>

<template>
    <div>
        <p>{{ name }}</p>
        <div>
            <label>Pos</label>
            <input type="number" :value="x">
            <input type="number" :value="y">
        </div>
    </div>
</template>