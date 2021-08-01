<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <v-card class="card">
        <v-card-title class="lighten-2">
          Edit todo №{{todo.id}}
        </v-card-title>

        <v-row>
          <v-col cols="12" md="2"></v-col>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="title"
              clearable
              label="Edit todo title:"
              type="text"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2"></v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="editData"
          >
            Apply
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="$emit('closeDialog')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title: ''
      }
    },
    props: {
      open: Boolean,
      todo: Object
    },
    computed: {
      dialog(){
        return this.open
      }
    },
    watch: {
      open: function(){
        if (this.open) {
          this.title = this.todo.title
          console.log(this.title);
        }
      }
    },
    methods: {
      editData: async function(){
        await this.$store.dispatch('editTodo', { id: this.todo.id, data: {title: this.title}})
        this.$emit('closeDialog')
        this.$emit('todoListUpdated')
      }
    }
  }
</script>

<style scoped>
.card{
  overflow: hidden;
}
</style>