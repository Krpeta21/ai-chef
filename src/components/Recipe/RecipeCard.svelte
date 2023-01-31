<script>
  export let state;
  export let food;
  export let recipe;
</script>

{#if state === true}
<div class="flex flex-col gap-10 w-full border border-cyan-700 rounded-sm h-fit">
  <p>The recipe for {food} is:</p>
  <p>{recipe}</p>
</div>
{/if}