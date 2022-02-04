const getAdmin = async() => {
    const response = await fetch(`http://localhost:5000/users`, {
        credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
    const users = await response.json()

    return users
};

export default getAdmin;