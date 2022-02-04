const postCategory = async(values) => {
    const response = await fetch(`http://localhost:5000/categories`, {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
        },
        credentials: "include",
        body:JSON.stringify({
            name: values.name,
            image: values.image,
            products: values.products
        }),
    })
    if (response.status >= 400) {
        throw response.stautusText
    }
    const categorie = await response.json()

    return categorie
};

export default postCategory;