<template >
  <div>
    <h3>Add Todo</h3>
    <form @submit="onsubmit">
      <input type="text" v-model="title" placeholder="add todo" />
      <input type="submit" @ value="submit" />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodos",
  methods: {
    ...mapActions(["addTodos"]),
    onsubmit(e) {
      e.preventDefault();
      this.addTodos(this.title);
    },
  },
  data() {
    return {
      title: "",
    };
  },
};
</script>
<style  scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>