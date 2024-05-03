<script setup lang="ts">
import {useColorStore} from "@/stores/colorModeStore";

useColorStore().apply();
</script>

<template>
    <main>
        <RouterView/>
    </main>
</template>

