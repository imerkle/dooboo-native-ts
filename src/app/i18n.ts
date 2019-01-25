import i18n from "i18next";
import {resources} from "app/constants";

i18n
    //.use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        },
        debug: true
    });
export default i18n;