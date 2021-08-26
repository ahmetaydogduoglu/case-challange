const localStorageName = 'links';

export const saveList = (data) => {
    localStorage.setItem(localStorageName, JSON.stringify(data));
}

export const getList = () => {
    const list = localStorage.getItem(localStorageName);

    return JSON.parse(list);
}