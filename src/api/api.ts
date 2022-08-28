export function getAllUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json())
}

export function getUserById(id:string) {
    const singleUser = `https://jsonplaceholder.typicode.com/users/${id}`;
    return fetch(singleUser)
    .then((response) => response.json())
}
