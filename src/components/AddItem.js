import React from 'react';

class AddTodoItem extends React.Component{
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
    }
    sendData(e){
        e.preventDefault();
        let newItem = e.target.addTodoText.value;
        this.props.addTodo(newItem);
    }
    render() {
        return (
            <div className="container">
                <br/>
                <form action="" onSubmit={this.sendData}>
                    <div className="card">
                        <div className="row justify-content-center">
                            <h1>Todo App</h1>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <input className="form-control" type="text" name="addTodoText" required/>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Add  <i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodoItem;