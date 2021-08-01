<template>
    <v-checkbox
      v-model="checkbox"
      @change="changeData"
    ></v-checkbox>
</template>

<script>
  export default {
    data () {
      return {
        checkbox: this.completed
      }
    },
    props: {
      completed: Boolean,
      id: Number
    },
    methods: {
      changeData: async function(completed){
        console.log(completed);
        await this.$store.dispatch('editTodo', {id: this.id, data: {completed}})
        this.$emit('todoListUpdated')
      }
    }
  }
</script>