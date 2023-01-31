<script>
  export let food;
  export let recipe;  
</script>


<div class="flex flex-col gap-10 border-2 border-blue-500 rounded-lg p-5 h-fit bg-white">
  <p>The recipe for <strong>{food}</strong> is:</p>
  <p>{recipe}</p>
</div>
