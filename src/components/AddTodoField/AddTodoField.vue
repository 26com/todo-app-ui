<template>
<v-row>
  <v-col sm="3">
    <v-text-field
      v-model="newTodoTitle"
      :append-outer-icon="newTodoTitle ? 'mdi-send' : null"
      clearable
      label="::Add new todo"
      type="text"
      @click:append-outer="addData"
    ></v-text-field>
  </v-col>
</v-row>
</template>

<script src='./AddTodoField.js'></script>