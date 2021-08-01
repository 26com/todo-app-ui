<template>
    <div>
      <v-btn icon @click="deleteData">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
</template>

<script>
export default {
  props: {
    id: Number
  },
  methods: {
    async deleteData(){
      await this.$store.dispatch('deleteTodo', this.id)
      this.$emit('todoListUpdated')
    }
  }
}
</script>