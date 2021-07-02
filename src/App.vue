<template>
  <div id="app">
    <add-todos></add-todos>
    <filter-todos></filter-todos>
    <div class="container">
      <todos></todos>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import FilterTodos from "./components/FilterTodo";
import AddTodos from "./components/AddTodos";

export default {
  name: "App",
  components: {
    Todos,
    AddTodos,
    FilterTodos,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
}
</style>
