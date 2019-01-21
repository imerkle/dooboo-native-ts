import i18n from "i18next";

const resources = {
    en: {
        translation: {
            "Changelog": "Me English"
        }
    },
    es: {
        translation: {
            "Changelog": "Hola Espanos"
        }        
    }
};


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