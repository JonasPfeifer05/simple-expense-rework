<script setup lang="ts">
import {sha256} from "js-sha256";
const cookie = useCookie("password");

const passwordModel = ref("");


onMounted(async () => {
    if (await isCorrectPassword())
        await navigateTo("/home")
})

async function tryLogin() {
    cookie.value = sha256(passwordModel.value);
    await nextTick()
    if (await isCorrectPassword()) {
        await navigateTo("/home")
    }
}

async function isCorrectPassword(): Promise<boolean> {
    try {
        const response = await $fetch<string>("/api/ping");
        return response == "pong";
    } catch (ignored) {
        console.log("error:", ignored);
        return false;
    }
}
</script>

<template>
    <div id="authorization-container">
        <div id="password-form">
            <h1>Enter Password</h1>
            <input type="password" placeholder="password" v-model="passwordModel" @keydown.enter="tryLogin">
            <button @click="tryLogin">login</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#authorization-container {
    #password-form {
        position: absolute;
        top: 50dvh;
        left: 50vw;
        translate: -50% -50%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 300px;
        height: 200px;

        padding: 16px;
        box-sizing: border-box;

        background: var(--surface-mixed-200);

        border-radius: 8px;

        h1 {
            margin: 0 !important;
        }

        & > input, select, button {
            height: 45px;
            width: 100%;

            border-radius: 8px;

            background: var(--surface-mixed-300);

            color: var(--color);

            outline: none;

            border: var(--surface-mixed-300) 1px solid;

            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;

            padding: 0 8px;
            box-sizing: border-box;
            font-size: 16px;
        }

        button {
            background: var(--primary-100);
        }

        & > *:focus {
            outline: none;
            border: var(--primary-300) 1px solid;
        }
    }
}
</style>