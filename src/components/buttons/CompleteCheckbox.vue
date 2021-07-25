<template>
    <v-checkbox
      v-model="checkbox"
      @change="changeData"
    ></v-checkbox>
</template>

<script>
  import { editTodo } from '@/api/api'
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
        await editTodo(this.id, {completed})
        this.$emit('todoListUpdated')
      }
    }
  }
</script>