const getCategories = async () => {
    const response = await fetch(`http://localhost:5000/categories`, {
      credentials: "include"
    })

    if (response.status >= 400) {
        throw response.stautusText
    }
  
    const categories = await response.json()
    return categories
  }
  
  export default getCategories