<template >
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div :key="todo.id" v-for="todo in Todos" class="todo">
        {{ todo.title }}
        <em class="fas fa-trash-alt"></em>
      </div>
    </div>
  </div>
</template>
<script>jjj
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["Todos"]),
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>
<style scoped >
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  color: #fff;
  cursor: pointer;
}
</style>