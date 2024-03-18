export const getNonStaffUsers = () => {
    return fetch("http://localhost:8088/users?isAdmin=false").then((res) => res.json())
}

export const getStaffUsers = () => {
    return fetch("http://localhost:8088/users?isAdmin=true").then((res) => res.json())
}

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) => res.json())
}

export const createUser = (customer) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    }).then((res) => res.json())
}