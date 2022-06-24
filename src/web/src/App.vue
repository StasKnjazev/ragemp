
<script>
import './fonts/style.css';

import Auth from './components/Auth/Auth.vue';

export default {
    name: 'App',

    data: function() {
        return {
            
        }
    },

    methods: {

    },

    components: {
        Auth
    }
}
</script>

<template>
    <div id="app">
        <!-- <router-view /> -->

        <Auth />
    </div>
</template>

<style lang="scss" scoped>
#app {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
}
</style>