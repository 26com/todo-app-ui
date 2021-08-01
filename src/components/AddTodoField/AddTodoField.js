// import { addTodo } from '@/api/api'

export default {
  data(){
    return {
      newTodoTitle: ''
    }
  },
  methods: {
    addData: async function(){
      // await addTodo(this.newTodoTitle)
      await this.$store.dispatch('createTodo', {title: this.newTodoTitle})
      this.newTodoTitle = ''
      this.$emit('todoListUpdated')
    }
  }
}