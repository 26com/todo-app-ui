<template>
    <div>
      <v-btn icon @click="deleteData">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
</template>

<script>
import { deleteTodo } from '@/api/api'
export default {
  props: {
    id: Number
  },
  methods: {
    deleteData: async function(){
      await deleteTodo(this.id)
      this.$emit('todoListUpdated')
    }
  }
}
</script>