

import { ITodoModel } from "@/imodels/iTodoModels";
import axios from "axios";
import{makeAutoObservable} from "mobx";


class TodoStore
{
    
    todolist:ITodoModel[]=[];
    todo:ITodoModel=this.resetTodoData();
    resetTodoData(){
        return{
            // id:Math.max(0,Math.max(...this.todolist.map(({id})=>id)))+1,
            id: Math.max(0, ...this.todolist.map(({ id }) => id)) + 1,
            text:"",
            done:false,
        }
    }

    constructor()
    {
        makeAutoObservable(this);//change if any change in above then change ui //todolist change ->>change in UI
    }
    addTodo()
    {
        console.log(`myTodo ${this.todo.text}`);
        this.todolist.push(this.todo);
        this.todo=this.resetTodoData()
    }
    deletetodo(id:number)
    {
       this.todolist= this.todolist.filter((todo)=>todo.id!==id);

    }
    getTodosFromApi=async()=>
    {
        try{
        const apiurl="";
        let todolistfromapi =await axios.get(apiurl);
            this.todolist =todolistfromapi.data;
            this.todo=this.resetTodoData();
        }
        catch(error)
        {
            console.error(error);
        }
    }
}  

const todosStore =new TodoStore();
export default todosStore;