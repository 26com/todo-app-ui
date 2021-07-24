<template>
    <v-checkbox
      v-model="checkbox"
      @change="change"
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
      change(event){
        fetch('http://todo-app/index.php/todos/' + this.id, {
          mode: 'cors',
          method: 'PUT',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({completed: event}),
        })
        .then(() => this.$emit('todoListUpdated'))
      }
    }
  }
</script>