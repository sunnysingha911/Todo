import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoItem from './components/AddItem';
import Output from './components/OutputAll';

class App extends React.Component{
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.state={
      item:[],
      firstTime:true
    }
  }

  addTodo(item){
    this.setState(prevstate=>{
      return{
        item:prevstate.item.concat(item),
        firstTime:false
      }
    })
  }

  updateTodo(item,index){
    this.setState(prevstate=>{
      let newTodo = prevstate.item.map((val,i)=>{
        if(i===index)
          return val = item;
        else
          return val;
      });
      return{
        item: newTodo
      }
    })
  }

  removeTodo(index){
    this.setState(prevstate=>{
      return{
        item: prevstate.item.filter((val,i)=>i!==index)
      }
    })
  }

  render() {
    let item;
    if(!this.state.firstTime)
      if(this.state.item.length>0)
        item = <Output removeTodo={this.removeTodo} updateTodo={this.updateTodo} myItem={this.state.item} firstTime={this.state.firstTime}/>
      else
        item = <div className="card">
                <div className="card-body">
                  All todos completed
                </div>
              </div>
    else
      item = <div className="card">
              <div className="card-body">
                No todos yet
              </div>
            </div>
    return (
      <div className="container">
        <AddTodoItem addTodo={this.addTodo}/>
        <br/>
        {item}
      </div>
    )
  }
}

export default App;
