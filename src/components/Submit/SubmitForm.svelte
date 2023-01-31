<script>
  import { searchARecipe } from "../../services/chefIA.js";
  import RecipeCard from "../Recipe/RecipeCard.svelte";
  let promise = null;
  let state = false
  let value
  let text
  const handleClick = async () => {
    text = document.getElementById("recipeInput").value;
    promise = searchARecipe(text);
    value = await promise   
    promise = null
    state = true
  } 
</script>
<div class="flex flex-row mb-5">
<input
id='recipeInput'
class="appearance-none border-2 border-blue-500 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
type="text"
placeholder="Find a recipe..."
/>
{#if promise === null}
  <button
    on:click={handleClick}
    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >Search!</button
  >
{:else}
    {#await promise}
    <button
    class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 rounded cursor-not-allowed flex flex-col items-center"
  >
    <svg
      class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    Loading...
  </button>   
    {/await}
{/if}
</div>
{#if state === true}
  <RecipeCard food={text} recipe={value}/>
{/if}