
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
            <div class="title">Регистрация</div>
            <div class="desc">Внимательно заполняйте данные, восстановить их будет не просто</div>
        </div>

        <div class="inputs-box">
            <div class="input-box">
                <div class="input-title">Почта</div>
                <input type="text" placeholder="Введите почту" />
            </div>

            <div class="input-box">
                <div class="input-title">Логин</div>
                <input type="text" placeholder="Придумайте логин" />
            </div>

            <div class="input-box">
                <div class="input-title">Пароль</div>
                <input type="text" placeholder="Придумайте пароль" />
            </div>

            <div class="input-box">
                <div class="input-title">Повторите пароль</div>
                <input type="text" placeholder="Введите пароль" />
            </div>
        </div>

        <div class="buttons-box">
            <div class="button-next">
                <p class="next">Создать аккаунт</p>
                <img src="../img/arrow.svg" alt="">
            </div>

            <div class="button-back">Назад</div>
        </div>
    </div>
</template>

<style scoped>
@import url(./styles.css);
</style>