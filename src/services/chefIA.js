const COHERE_API_KEY = 'iKe8Cywshgb9PqHqcHFTiZ5YwA2WbZ29rnm1ADOk'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'


export async function searchARecipe(input){
    const search = `
    This program will generate the recipe for food without directions or intructions.
    --
    Recipe for pizza.
    Ingredients:
    2 ½ cups warm water(600 mL),1 teaspoon sugar,2 teaspoons active dry yeast,7 cups all-purpose flour(875 g) plus more for dusting,6 tablespoons extra virgin olive oil plus more for greasing,1 ½ teaspoons kosher salt, ¼ cup semolina flour(30 g)
    --
    Recipe for burger.
    Ingredients: ½ pound lean ground beef(250 g), 1 teaspoon kosher salt, ¼ teaspoon freshly ground pepper, 1 cup loosely packed cheddar cheese(60 g), Bread for burgers
    --
    Recipe for ${input}.
    Ingredients:
`
    const data = {
        model: "command-xlarge-nightly",
        prompt: search,
        max_tokens: 250,
        temperature: 0.1,
        k: 0,
        p:1,
        frequency_penalty:0,
        presence_penalty:0,
        stop_sequences:['--'],
        return_likelihoods: 'NONE'
    }
    const response = await fetch(COHERE_API_GENERATE_URL,{
        method:'POST',
        headers:{
            Authorization: `BEARER ${COHERE_API_KEY}`,
            "Content-Type": 'application/json',
            "Cohere-Version": '2022-12-06'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    const {text} = response.generations[0]
    return text.replace('--','').trim().substring(1,text.length-1)     
}