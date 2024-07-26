import TodoCompIndex from '@/Component/todo/ui'
import axios from 'axios';
import { GetServerSideProps } from 'next'
import React from 'react'
import { ITodoModel } from "../../imodels/iTodoModels";
import todosStore from '@/Component/todo/store/todoStore';
export const getServerSideProps: GetServerSideProps = async () => {
  console.log(
    `nñ     `
  );
  const mockData: ITodoModel[] = [
    { id: 1, text: 'Learn Next.js', done: false },
    { id: 2, text: 'Build a todo app', done: false },
    { id: 3, text: 'Deploy the app', done: false },
  ];

  return {
    props: { todolist: mockData },
  };
  const apiurl = "YOUR_API_URL_HERE";
  const todolistfromapi = await axios.get(apiurl);
  const todolist: ITodoModel[] = todolistfromapi.data;
  // this.todo=this.resetTodoData();

  if (!todolist) {
    return {
      notFound: true,
    };
  }
  return {
    props: { todolist }
  };



}
const index = ({ todolist }: { todolist: ITodoModel[] }) => {
  todosStore.todolist=todolist;
  return (
    <>
      <TodoCompIndex mytodoList={todolist}/>
      {/* {todolist.map((todo:ITodoModel)=>(
        <h1 key={todo.id}>{todo.text}</h1>
      ))} */}
    </>
  )
}

export default index