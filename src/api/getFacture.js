const getFacture = async (setFacture) => {
    const response = await fetch(`http://localhost:5000/invoices`, {
        credentials: "include"
    })
    if (response.status >= 400) {
        throw response.stautusText
    }
    const facture = await response.json()
    return setFacture(facture)
}
export default getFacture;