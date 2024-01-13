import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ManagerLocalStorage {

    getObjectItemStorage<T>(keyObject: string): T {
        return JSON.parse(localStorage.getItem(keyObject)!) as T;
    }

    getItemStorage<T>(key: string): T {
        return localStorage.getItem(key) as T;
    }

    setItemStorage(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    setObjectItemStorage<T>(key: string, valueObject: T): void {
        localStorage.setItem(key, JSON.stringify(valueObject));
    }

    removeItemStorage(key: string): void {
        localStorage.removeItem(key);
    }

    removeItemsStorage(): void {
        localStorage.clear();
    }

    
}