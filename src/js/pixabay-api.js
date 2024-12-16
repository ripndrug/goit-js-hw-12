export async function fetchData(url, query, page, per_page) {
    const { data } = await axios.get(url, {
        params: {
            q: query,
            key: API_KEY,
            per_page,
            page,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
    return data;
}