export default async function getRandomRecipes() {
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