import React from 'react';
import Single from './SingleItem';

class Output extends React.Component{
    
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {
                            this.props.myItem.map((val,i)=>{
                                return <Single value={val} updateTodo={this.props.updateTodo} index={i} removeTodo={this.props.removeTodo}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Output;