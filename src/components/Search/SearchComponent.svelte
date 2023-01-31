<script>
  import ButtonSubmit from "../Button/ButtonSubmit.svelte";
  import RecipeCard from "../Recipe/RecipeCard.svelte";
  const variable = 'Hola que tal todos'
</script>
<div class="flex flex-col">
<div class="flex flex-row mb-5">
    <input
      id='recipeInput'
      class="appearance-none border-2 border-blue-500 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      type="text"
      placeholder="Find a recipe..."
    />
    <ButtonSubmit/>
  </div>
  <RecipeCard food={'hola'} recipe={variable} state={true}/>
</div>
