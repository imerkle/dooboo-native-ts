import AppStore from "./AppStore";

export function createStores() {
    const appStore = AppStore.create({});

    return {
        appStore,
    };
}