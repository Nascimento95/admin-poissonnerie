const getProduct = async (setProducts) => {
    const response = await fetch(`http://localhost:5000/products`, {
        credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
    const products = await response.json()

    return products,setProducts(products)
}

export default getProduct;