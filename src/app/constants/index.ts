export const changelog = [
    {
        title: "v0.02",
        captions: [
            "Added feature to remember mnemonic and passphrase from settings",
            "Added feature to lock, unlock and forget wallets from settings",
            "Ability to sort coins by price and name"
        ],
    },
    {
        title: "v0.01",
        captions: [
            "Added BTC, ETH, NEO, NANO, XRP, VET protocol",
            "Added Backup and Restore feature from settings"
        ],
    },
]
export const darkPrimary = {
    light: "#d3d9ee",
    main: "#6b80c5",
    dark: "#3c50a3",
    contrastText: "#fff",
};
export const LOCALES = Object.freeze({
    en_US: Object.freeze({
        bcp47: 'en-US',
        i18n: 'en',
        displayName: 'English (US)\u200e',
        englishName: 'English (US)',
        rtl: false,
    }),
    es_LA: Object.freeze({
        bcp47: 'es-419',
        i18n: 'es',
        displayName: 'Espa\u00F1ol',
        englishName: 'Spanish',
        rtl: false,
    }),
})

export * from "./resources";