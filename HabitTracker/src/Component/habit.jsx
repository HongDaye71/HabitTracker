import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Habit extends Component {
    //Habit: 자체적으로 상태를 갖지 않고, 외부에서 받아온 Prop을 출력하는 컴포넌트
    state = {
        count: 0,
      };
    
      handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
      };
    
      handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
      };
    
      handleDelete = () => {
        this.props.onDelete(this.props.habit);
      };

    render() {
        const {name, count} = this.props.habit;
        //Habits에서 전달되는 habit의 name, count를 받아옴
        return (
            <li className='habit'>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>

                <button 
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <FontAwesomeIcon icon={faSquarePlus} />
                </button>

                <button 
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <FontAwesomeIcon icon={faSquareMinus} />
                </button>

                <button 
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                    >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </li>
        );
        
    }
}

export default Habit;
