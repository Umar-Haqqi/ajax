document.querySelector('#btn').addEventListener('click', clickHandler);

function clickHandler() {
    console.log('button clicked');

    // init an xhr object
    const xhr = new XMLHttpRequest();

    // open the object 
    xhr.open('GET', 'data.json', true);

    // optional
    xhr.onprogress = function () {
        console.log("in process...", xhr.readyState);
    }

    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);
    }

    // when reponse is ready
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
        }
        else {
            console.log("some error occured", this.status);
        }
    }

    // send the request
    xhr.send();
}






