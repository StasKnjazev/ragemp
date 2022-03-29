
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
        Auth, // 0
    }
}
</script>

<template>
    <div id="app">
        <Auth />
    </div>
</template>

<style scoped>
#app {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background: radial-gradient(circle, rgba(0, 0, 0, 0.05), rgb(0, 0, 0, 0.2));
}

.showBlock {
    animation: showBlock 0.3s linear forwards;
}

.hideBlock {
    animation: hideBlock 0.3s linear forwards;
}

/* Animation */

@keyframes showBlock {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes hideBlock {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>