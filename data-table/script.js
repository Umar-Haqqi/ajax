
const url = 'https://dummyjson.com/users?limit=5'
let users;

const fetchUsers = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let response = xhr.responseText;
            let data = JSON.parse(response);
            console.log("user: ", data.users);

            users = data.users;
            initializeDataTable();
        }
    }
    xhr.send();
}

const initializeDataTable = () => {
    new DataTable('#data_table', {
        responsive: true,
        data: users,
        columns: [
            { "render": (data, type, row, meta) => { return meta.row + 1 } },
            { "data": "firstName" },
            { "data": "email" },
        ]
    });
}

fetchUsers();
