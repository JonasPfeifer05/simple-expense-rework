import {defineStore} from "pinia";

export const useColorStore = defineStore("color", {
    state: () => {
        return {
            darkMode: true
        }
    },
    actions: {
        change() {
            this.darkMode = !this.darkMode;
        },

        apply(){
            document.body.classList.remove("dark-mode")
            document.body.classList.remove("light-mode")
            document.body.classList.add(this.darkMode ? "dark-mode" : "light-mode")
        }
    }
})