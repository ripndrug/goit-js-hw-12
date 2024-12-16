export function fetchData(url = BASE_URL) {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
    })
}