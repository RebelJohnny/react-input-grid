import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('language') == null ? "fa" : localStorage.getItem('language'), //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;