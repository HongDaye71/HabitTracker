import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Habit extends Component {
    state = {
        count:0,
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
        /*
        this.state.count++;와 같은 코드는 작동되지 않음
        -> React에서는 setState함수를 사용해야만 현재의 상태가 변경되어 render를 업데이트 해야 한다는 것을 할 수 있음
        */
    }

    handleDecrement = () => {
        const count = this.state.count - 1;
        this.setState( {count: count < 0 ? 0 : count} );
    }

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

/*
- Component골격 자동생성: "rcc"입력 후 탭버튼 클릭
- 클래스명은 항상 대문자로 시작
- 스크립트 이동 단축키: Ctrl + p
- [font awesome free ver download]
    cmd: yarn add @fontawesome/fontawesome-free
*/