
<script>
export default {
    name: 'Auth',

    data: function() {
        return {
            visible: true,

            page: 0,
            page_id: 0,

            notify_list: [],

            reg_email: '',
            reg_username: '',
            reg_password: '',
            reg_rpassword: ''
        }
    },

    methods: {
        sendPage: function(number) {
            this.page = number;

            setTimeout(() => {
                this.page_id = number;
                this.notify_list = [];
            }, 400);
        },

        sendNotify: function(text, timeout = 10) {
            let status = this.notify_list.find(el => el.text == text);
            if(status) {
                document.getElementById(`notify${status.id}`).classList.remove('showBlock');
                document.getElementById(`notify${status.id}`).classList.add('hideBlock');
                setTimeout(() => {
                    document.getElementById(`notify${status.id}`).classList.remove('hideBlock');
                    document.getElementById(`notify${status.id}`).classList.add('showBlock');
                }, 290);
            } else {
                let array = {
                    id: this.notify_list.length + 2,
                    text: text
                };

                this.notify_list.push(array);

                setTimeout(() => {
                    document.getElementById(`notify${array.id}`).classList.remove('hideBlock2');
                    document.getElementById(`notify${array.id}`).classList.add('showBlock');
                }, 10);

                setTimeout(() => {
                    document.getElementById(`notify${array.id}`).classList.remove('showBlock');
                    document.getElementById(`notify${array.id}`).classList.add('hideBlock');
                    
                    setTimeout(() => {
                        this.notify_list.shift();
                    }, 290);
                }, timeout * 1000);
            }
        },

        sendRegister: function() {
            if(this.reg_username == '' || this.reg_username == ' ' || this.reg_password == '' || this.reg_password == ' ' || this.reg_email == '' || this.reg_email == ' ' || this.reg_rpassword == '' || this.reg_rpassword == ' ') {
                this.sendNotify('Пожалуйста запоните пустые поля!');
            } else {
                if(this.reg_rpassword == this.reg_password) {
                    let array = JSON.stringify({
                        email: this.reg_email,
                        username: this.reg_username,
                        password:  this.reg_password
                    });

                    global.mp.trigger('client.auth:sendRegister', array);
                } else {
                    this.sendNotify('Введенные Вами пароли не совпадают');
                }
            }
        }
    },

    components: {
        
    }
}
</script>

<template>
    <div id="auth" v-if="visible">
        <!-- NOTIFY -->

        <div class="notifys-box">
            <div class="notify-box" v-for="item in notify_list" :key="item.u" :id="'notify' + item.id">
                <div class="notify-icon">
                    <svg width="11px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"> <g transform="matrix(1,0,0,1,-2180.46,-2250.75)"> <g transform="matrix(50,0,0,50,2171.62,2291.91)"> <path d="M0.184,-0.81L0.186,-0.814C0.191,-0.819 0.198,-0.822 0.206,-0.823C0.214,-0.824 0.221,-0.821 0.226,-0.816L0.5,-0.544L0.77,-0.814C0.778,-0.822 0.788,-0.825 0.8,-0.822C0.812,-0.819 0.819,-0.812 0.822,-0.8C0.825,-0.788 0.822,-0.778 0.814,-0.77L0.544,-0.5L0.814,-0.23C0.819,-0.225 0.822,-0.218 0.823,-0.211C0.824,-0.204 0.821,-0.197 0.816,-0.19L0.814,-0.186C0.809,-0.181 0.802,-0.178 0.794,-0.177C0.786,-0.176 0.779,-0.179 0.774,-0.184L0.5,-0.456L0.23,-0.186C0.225,-0.181 0.218,-0.178 0.209,-0.178C0.2,-0.178 0.193,-0.181 0.187,-0.187C0.181,-0.193 0.178,-0.2 0.178,-0.209C0.178,-0.218 0.181,-0.225 0.186,-0.23L0.456,-0.5L0.186,-0.77C0.181,-0.775 0.178,-0.782 0.177,-0.789C0.176,-0.796 0.179,-0.803 0.184,-0.81L0.186,-0.814L0.184,-0.81Z" style="fill:white;fill-rule:nonzero;"/> </g> </g></svg>
                </div>
                <div class="notify-text">{{ item.text }}</div>
            </div>
        </div>

        <!-- AUTH -->

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
                <input class="input-box" spellcheck="false" type="text" placeholder="Почта" v-model="reg_email" />
                <input class="input-box" spellcheck="false" type="text" placeholder="Логин" v-model="reg_username" />
                <input class="input-box" spellcheck="false" type="password" placeholder="Пароль" v-model="reg_password" />
                <input class="input-box" spellcheck="false" type="password" placeholder="Повторите пароль" v-model="reg_rpassword" />
            </div>

            <div class="buttons-box">
                <div class="button-next" @click="sendRegister()">Создать аккаунт</div>
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

.hideBlock2 {
    animation: hideBlock 0.1ms linear forwards;
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

.notifys-box {
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    row-gap: 10px;

    width: auto;
    max-width: 400px;
    height: 100%;

    margin: auto;
    left: 15px;
    bottom: 15px;
}

.notify-box {
    font-family: 'Montserrat Regular';
    font-size: 13px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    column-gap: 10px;
    
    width: auto;
    height: auto;

    padding: 10px 15px 10px 15px;

    color: rgb(252, 252, 252, 0.9);
    background: rgb(128, 9, 0, 0.75);
    border-radius: 5px;

    opacity: 0;
}

.notify-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 25px;
    height: 20px;
}

.notify-text {
    width: auto;
    max-width: 250px;
    height: auto;

    transition: all 0.3s;
}
</style>