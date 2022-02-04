
const LoginUser = async(values,navigate) => {
    const response = await fetch(`http://localhost:5000/auth/login`, {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
        },
        credentials: "include",
        body:JSON.stringify({
            email: values.email,
            password: values.password,
        }),
    })
    if (response.status >= 400) {
        throw response.stautusText
    }
    const user = await response.json()
    if (user.role === "admin") {
        return user, navigate('/home')
    } else {
        alert("pas autoriser");
    }
    
};

export default LoginUser;