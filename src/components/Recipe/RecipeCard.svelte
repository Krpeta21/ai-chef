<script>
  export let food;
  export let recipe;
  const recipeS = recipe.split(",");
</script>

<article
  class="flex flex-col gap-10 border-2 border-blue-500 rounded-lg p-5 bg-white mt-10 mb-10"
>
  <p>The recipe for <strong class="text-blue-500 text-xl">{food}</strong> is:</p>  
  <ul>
    <p class="text-2xl font-bold text-blue-500">Ingredients:</p>
    {#each recipeS as ingredient}
      <li class="px-5 py-1">{ingredient}.</li>    
    {/each}    
  </ul>
</article>
