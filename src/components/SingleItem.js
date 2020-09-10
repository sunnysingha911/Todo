import React from 'react';
import {Modal,Button} from 'react-bootstrap';

class SingleItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e){
        e.preventDefault();
        let newVal = e.target.InputText.value;
        let id = this.props.index;
        console.log(id);
        this.props.updateTodo(newVal,id);

    }
    handleModal(){
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <li className="list-group-item">
                <div className="row justify-content-center">               
                    <div className="col-5">
                        {this.props.value}
                    </div>
                    <div className="col-2">
                        <Button className="btn btn-warning" onClick={()=>{this.handleModal()}}>Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
                            <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                                <Modal.Header closeButton>Update Todo</Modal.Header>
                                <form action="" onSubmit={this.submitForm}>
                                    <Modal.Body>
                                        <input className="form-control" type="text" name="InputText" id=""/>
                                    </Modal.Body>
                                    <Modal.Footer>  
                                        <button className="btn btn-warning" onClick={()=>{this.handleModal()}}>Update</button>
                                        <Button onClick={()=>{this.handleModal()}}>Close</Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger" onClick={()=>{this.props.removeTodo(this.props.index)}}>Remove  <i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            </li>
        )
    }
}
export default SingleItem;