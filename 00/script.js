function sendData() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "https://dummy.restapiexample.com/api/v1/create", true);
    xhr.setRequestHeader("Content-type", "application/json");

    const params = JSON.stringify({ "name": "Umar", "salary": "123", "age": "23" })

    xhr.send(params);
}

document.querySelector('#post_btn').addEventListener('click', sendData);