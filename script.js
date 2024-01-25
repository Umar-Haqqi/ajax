let url = 'https://api.github.com/users/Umar-Haqqi';

document.querySelector('#btn').addEventListener('click', () => {
    getData(renderData);
});

function getData(res) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            res(xhr.responseText);
        }
    }
    xhr.send();
}

function renderData(res) {
    let data = JSON.parse(res);
    document.querySelector('#username').innerHTML = `${data.login}`;
    document.querySelector('#location').innerHTML = `${data.location}`;
}




