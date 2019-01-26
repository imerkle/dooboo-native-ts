import AppStore from "./AppStore";
import { initStorage } from "app/utils";

export function createStores() {
    initStorage();
    const appStore = AppStore.create({});

    return {
        appStore,
    };
}
