<script setup lang="ts">
import {useColorStore} from "@/stores/colorModeStore";

useColorStore().apply();
</script>

<template>
    <RouterView/>
</template>

