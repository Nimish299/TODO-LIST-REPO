import React from 'react'
import Todoslist from './Todoslist'
import AddTodo from './AddTodo'
import {
  Box,
  Button,
  HStack,
} from '@chakra-ui/react'
import { ITodoModel } from '@/imodels/iTodoModels'
import todosStore from '../store/todoStore'
const TodoCompIndex = ({mytodoList}:{mytodoList:ITodoModel[]}) => {
  todosStore.todolist=mytodoList;
  return (
    <>
      <Box>
       
        <Todoslist />
        <AddTodo />
      </Box>

    </>
  )
}

export default TodoCompIndex