import React from 'react'
import {
  Button, Input, Flex
} from '@chakra-ui/react'
import todosStore from '../store/todoStore'
import { observer } from 'mobx-react-lite'
const AddTodo = () => {
  return (

    <Flex pt={2} >

      <Input placeholder="New todo"
        value={todosStore.todo.text}
        onChange={(evt) => (todosStore.todo.text = evt.target.value)}
      />
      <Button onClick={() => {
        if (todosStore.todo.text == "") {
          return alert("Empty Cant add");
        }

        return todosStore.addTodo()
      }}>Add Todo
      </Button>
    </Flex>

  )
}

export default observer(AddTodo);