import AddTodoField from '@/components/AddTodoField/AddTodoField.vue'
import DeleteBtn from '@/components/buttons/DeleteBtn.vue'
import EditBtn from '@/components/buttons/EditBtn.vue'
import CompleteCheckbox from '@/components/buttons/CompleteCheckbox.vue'
import EditTodoDialog from '@/components/EditTodoDialog/EditTodoDialog.vue'
import Loader from '@/components/Loader/Loader.vue'

import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      editTodo: {},
      editDialogOpen: false,
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
    async getData(){
      await this.$store.dispatch('getTodos')
    },
    openEditDialog(todo){
      this.editTodo = todo
      this.editDialogOpen = true
    }
  },
  computed: mapGetters(['allTodos', 'loading'])
}