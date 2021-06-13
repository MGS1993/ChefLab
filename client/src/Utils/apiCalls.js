const getSearchedRecipes = async(query, sortBy) => {
  const apiKey = '21b6ee32984f4b08a19a9a643d0edbce';
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&sort=${sortBy}`);
    const data = await response.json();
    console.log(data.results)
    return data
  }catch(err) {
    console.log(err)
    return null
  }
}

const getRecipeById = async (id) => {
  const apiKey = '21b6ee32984f4b08a19a9a643d0edbce';
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    const data = await response.json();
    return data
  }catch(err) {
    console.log(err)
    return null
  }
}


const getNutritionById = async (id) => {
  const apiKey = '21b6ee32984f4b08a19a9a643d0edbce'
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`)
    const data = await response.json();
    console.log(data);
    return data;
  } catch(err) {
    console.log(err)
  }
}

const getRandomRecipes = async () => {
  const apiKey = '21b6ee32984f4b08a19a9a643d0edbce';
  try {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?sort=random&apiKey=${apiKey}`)
    const data = await response.json();
    // console.log(data)
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}
export { getSearchedRecipes, getRecipeById, getNutritionById, getRandomRecipes }