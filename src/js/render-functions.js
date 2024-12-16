export function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class='form-item'>
            <a href='${largeImageURL}'><img src='${webformatURL}' alt='${tags}' width='360' class='form-image'>
                <div class='stats-container'>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Likes</h2>
                        <p class='stats-text'>${likes}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Views</h2>
                        <p class='stats-text'>${views}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Comments</h2>
                        <p class='stats-text'>${comments}</p>
                    </div>
                    <div class='stats-info'>
                        <h2 class='stats-title'>Downloads</h2>
                        <p class='stats-text'>${downloads}</p>
                    </div>
                </div>
            </a>
        </li>
        `).join('');
}