
// IMPORTS

import { createApp } from 'vue';
import App from './App.vue';

import { createI18n } from 'vue-i18n/index';
import { createEventEmitter } from './EventEmmiter.mjs';

// CODE

function loadLocaleMessages() {
    const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i);
    const messages = {};

    locales.keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);

        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });

    return messages;
}

let VueI18n = createI18n({
    locale: "ru",
    fallbackLocale: "en",
    messages: loadLocaleMessages()
});

let app = createApp(App);
app.config.globalProperties.$mp = window.mp;
app.config.globalProperties.$events = createEventEmitter(false);

app.use(VueI18n).mount('#app');