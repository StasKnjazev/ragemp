
<script>
export default {
    name: 'Auth',

    data: function() {
        return {
            visible: true,

            page: 0,
            page_id: 0
        }
    },

    methods: {
        sendPage: function(number) {
            this.page = number;

            setTimeout(() => {
                this.page_id = number;
            }, 400);
        }
    },

    components: {
        
    }
}
</script>

<template>
    <div id="auth" v-if="visible">
        <div class="auth-box" :class="page == 0 ? 'showBlock' : 'hideBlock'" v-if="page_id == 0">
            <img src="./img/logotype.png" alt="" />

            <div class="title">Авторизация</div>

            <div class="inputs-box">
                <input class="input-box" spellcheck="false" type="text" placeholder="Логин" />
                <input class="input-box" spellcheck="false" type="password" placeholder="Пароль" />
            </div>

            <div class="buttons-box">
                <div class="button-next">Войти</div>
            </div>

            <div class="info-register-box" @click="sendPage(1)">Нет аккаунта?</div>
        </div>

        <div class="auth-box" :class="page == 1 ? 'showBlock' : 'hideBlock'" v-if="page_id == 1">
            <img src="./img/logotype.png" alt="" />

            <div class="title">Регистрация</div>

            <div class="inputs-box">
                <input class="input-box" spellcheck="false" type="text" placeholder="Почта" />
                <input class="input-box" spellcheck="false" type="text" placeholder="Логин" />
                <input class="input-box" spellcheck="false" type="password" placeholder="Пароль" />
                <input class="input-box" spellcheck="false" type="password" placeholder="Повторите пароль" />
            </div>

            <div class="buttons-box">
                <div class="button-next">Создать аккаунт</div>
            </div>

            <div class="info-register-box" @click="sendPage(0)">Назад</div>
        </div>
    </div>
</template>

<style scoped>
#auth {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background: radial-gradient(circle, rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 0.9));
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

.auth-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    row-gap: 10px;

    width: 100%;
    height: 100%;
}

.title {
    font-family: 'Montserrat SemiBold';
    font-size: 22px;

    letter-spacing: 1.5px;

    color: rgb(252, 252, 252);
}

.inputs-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    row-gap: 10px;

    margin-top: 20px;

    width: auto;
    height: auto;
}

.input-box {
    font-family: 'Montserrat SemiBold';
    font-size: 14px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 50px;

    /* padding-left: 25px; */

    color: rgb(252, 252, 252, 0.85);
    background: rgb(252, 252, 252, 0.08);
    border: none;
    outline: none;
    border-radius: 5px;

    transition: background 0.3s;
}

.input-box:hover {
    background: rgb(252, 252, 252, 0.13);
}

.input-box::placeholder {
    font-size: 12px;
    color: rgb(252, 252, 252, 0.3);
}

.buttons-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    row-gap: 10px;

    margin-top: 10px;

    width: auto;
    height: auto;
}

.button-next {
    font-family: 'Montserrat SemiBold';
    font-size: 18px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 50px;

    color: rgb(252, 252, 252, 0.85);
    background: radial-gradient(circle at 50%, #FF6600, #803300);
    border-radius: 5px;
    opacity: 0.4;

    transition: opacity 0.3s;
}

.button-next:hover {
    opacity: 1;
}

.info-register-box {
    font-family: 'Montserrat Regular';
    font-size: 14px;

    color: rgb(252, 252, 252, 0.35);

    transition: color 0.3s;
}

.info-register-box:hover {
    color: rgb(252, 252, 252, 0.8);
}
</style>