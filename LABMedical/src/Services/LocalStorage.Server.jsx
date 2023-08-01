const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const set = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const LocalStorageService = {
    get,
    set,
}