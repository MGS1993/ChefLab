export default async function getSearchedRecipes(query, sortBy) {
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