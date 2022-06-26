
<script>
export default {
    name: 'Login',

    props: {
        
    },

    data() {
        return {

        }
    },

    methods: {

    }
}
</script>

<template>
    <div id="box">
        <div class="header">
            <div class="title">Авторизация</div>
            <div class="desc">Добро пожаловать</div>
        </div>

        <div class="inputs-box">
            <div class="input-box">
                <div class="input-title">Логин</div>
                <input type="text" placeholder="Придумайте логин" />
            </div>

            <div class="input-box">
                <div class="input-title">Пароль</div>
                <input type="text" placeholder="Придумайте пароль" />
            </div>
        </div>

        <div class="buttons-box">
            <div class="button-next">
                <p class="next">Войти</p>
            </div>

            <div class="button-back">Нет аккаунта</div>
        </div>
    </div>
</template>

<style scoped>
@import url(./styles.css);
</style>