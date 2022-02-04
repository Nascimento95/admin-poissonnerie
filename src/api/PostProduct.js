const createProduct = async(values) => {
    const response = await fetch(`http://localhost:5000/products`, {
        method : 'post',
        headers : {
            'content-type' : 'application/json'
        },
        credentials: "include",
        body:JSON.stringify({
            name: values.name,
            image: values.image,
            characteristic: values.characteristic,
            kiloPrice: values.kiloPrice,
            pricePerPiece: values.pricePerPiece,
            netWeight: values.netWeight,
            fishingArea: values.fishingArea,
            conditioning: values.conditioning,
            available: values.available,
            categories: values.categories
        }),
    })
    if (response.status >= 400) {
        throw response.stautusText
    }
    const product = await response.json()

    return product
};

export default createProduct;