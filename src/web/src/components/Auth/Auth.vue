
<script>
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export default {
    name: 'Auth',

    props: {
        
    },

    data() {
        return {
            visible: false,
            page: null,

            defaultLogin: null
        }
    },

    methods: {

    },

    mounted() {
        this.$mp.events.add('cef.auth.visible:set', (state) => {
            this.visible = state;
        });

        this.$mp.events.add('cef.auth.page:set', (page) => {
            this.page = page;
        });

        this.$mp.events.add('cef.auth.default:username:send', (username) => {
            this.defaultLogin = username;
        });
    },

    components: {
        Login,
        Register
    }
}
</script>

<template>
    <div id="auth" v-if="visible">
        <img src="./img/logotype.png" alt="">

        <Login v-if="page == 'login'" />
        <Register v-if="page == 'register'" />

        <!-- <div class="background"></div> -->
    </div>
</template>

<style lang="scss" scoped>
#auth {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    row-gap: 45px;

    width: 100%;
    height: 100%;

    background: linear-gradient(124.27deg, rgba(6, 6, 6, 0.9025) 0%, rgba(21, 21, 21, 0.8075) 68.14%);
}

// .background {
//     position: absolute;

//     width: 100%;
//     height: 100%;

//     background-image: url(./img/background.png);
//     background-size: 100% 100%;
//     background-repeat: no-repeat;

//     z-index: -1;
// }
</style>