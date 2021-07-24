import AddTodoField from '@/components/AddTodoField/AddTodoField.vue'
import DeleteBtn from '@/components/buttons/DeleteBtn.vue'
import EditBtn from '@/components/buttons/EditBtn.vue'
import CompleteCheckbox from '@/components/buttons/CompleteCheckbox.vue'
import EditTodoDialog from '@/components/EditTodoDialog/EditTodoDialog.vue'
import Loader from '@/components/Loader/Loader.vue'
import { getTodos } from '@/api/api'
export default {
  data(){
    return {
      loading: true,
      editTodo: {},
      editDialogOpen: false,
      todos: [],
      headers: [
          { text: 'ID', 
            value: 'id', 
            divider: true, 
            width: false 
          },
          { text: 'TODO', 
            value: 'title', 
            align: 'start', 
            sortable: false, 
            cellClass: 'todo-title' 
          },
        ],
    }
  },
  mounted(){
    this.getData()
  },
  components: {
    DeleteBtn, EditBtn, CompleteCheckbox, EditTodoDialog, Loader, AddTodoField
  },
  methods: {
    getData: async function(){
      this.todos = await getTodos()
      this.loading = false
    },
    openEditDialog(todo){
      console.log(todo.id);
      this.editTodo = todo
      this.editDialogOpen = true
    }
  },
}