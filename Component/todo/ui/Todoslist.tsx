import React from 'react'
import {
  Button, Input, Grid, Heading,Flex,  Checkbox,
  HStack,
  Spacer
} from '@chakra-ui/react'
import { ITodoModel } from '@/imodels/iTodoModels'
import todosStore from '../store/todoStore'
import { observer } from 'mobx-react-lite'
function TodoListItems() {
  return (
    <>
    {todosStore.todolist.map((todo:ITodoModel)=>
    (

      <Flex pt={2} key={todo.id}>
        <Checkbox position="static" />
        <input  value={todo.text} onChange={(e)=>DOMRectReadOnly}/>
        <Button position="static" onClick={()=> todosStore.deletetodo(todo.id)}>Delete</Button>
      </Flex>
    ))}
    </>
  ) 
}

const TodoListObserver=observer (TodoListItems);
const Todoslist = () => {
  return (
    <>
      
      <HStack>
      <Heading>Todoslist</Heading>
      <Spacer/>
       <Button onClick={()=>todosStore.getTodosFromApi()}>Load from API</Button>
       </HStack>
      <TodoListObserver />
    </>
  )
}

export default Todoslist