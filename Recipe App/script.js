 async function searchrecipes() {
  const searchInputs = document.getElementById("searchInputs");
  const recipesContainer = document.getElementById("recipesContainer");
    recipesContainer.innerHTML = ""


  try{
    const response = await fetch(`https://api.edamam.com/search?q=${searchInputs}
      app_id=5ce6be69$app_key=f7587589bf570f239e9638a6dfdf06db`)
    if(!response.ok){
      throw new Error(`Http Error! status : ${response.status} `)
    }
    const data = await response.json()
    console.log(data);

    data.hits.forEach(recipe => {
      const recipeHTML = `
      <div> class="recipe"
      <h2>${recipe.recipe.label}</h2>
      <img scr ="${recipe.recipe.image}" alt="{recipe.recipe.label}">
      <p>Calories: ${Math.round(recipe.recipe.calories)}</p>
      <p>Servings: ${recipe.recipe.url}"target="_blank">View Recipe</a>
      </div>
      `
      recipesContainer.innerHTML += recipeHTML
    })
    

    
  }catch (error){
  console.log("Error fetching recipes",error);
  
  };


 }
 