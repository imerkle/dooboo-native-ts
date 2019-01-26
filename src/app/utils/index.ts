import Storage from "react-native-storage";
import { AsyncStorage } from 'react-native';

export const setKey = async (key, data) => {
    await (window as any).storage.save({
        key,
        data,
    });
}
export const getKey = async (key) => {
    let res;
    try {
        res = await (window as any).storage.load({
            key,
        });
    } catch (e) {
        throw e;
    }
    return res;
}
export const initStorage = () => {
    const storage = new Storage({
        size: 1000,
        storageBackend: AsyncStorage,
        defaultExpires: null,
        enableCache: true,
        sync: {
        }
    });
    (global as any).storage = storage;
}