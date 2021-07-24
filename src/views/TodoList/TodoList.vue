<template>
    <div class="list-container">
      <EditTodoDialog 
        :open="editDialogOpen"
        :todo="editTodo"
        @closeDialog="editDialogOpen = false"
        @todoListUpdated="getData"
      />
      <AddTodoField 
        @todoListUpdated="getData"
      />
      <Loader v-if="loading" />
      <h1 v-else-if="!todos.length">
        NO TODOS
      </h1>
      <v-simple-table 
        v-else
        fixed-header
        height="100%"
      >
        <template v-slot:default>
          <tbody>
            <tr
              v-for="todo in todos"
              :key="todo.id"
            >
              <td>
                <CompleteCheckbox 
                  :completed='todo.completed' 
                  :id='todo.id'
                  @todoListUpdated='getData'
                />
              </td>
              <td class='todo-title' :class='{completed: todo.completed}'>
                {{ todo.title }}
              </td>
              <td>
                <EditBtn 
                  @editBtnClick="openEditDialog(todo)"
                />
              </td>
              <td>
                <DeleteBtn 
                  :id='todo.id'
                  @todoListUpdated='getData'
                />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
</template>

<script src='./TodoList.js'></script> 
<style src='./TodoList.css'></style>
