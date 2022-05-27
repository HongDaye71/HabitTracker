import React, { Component } from 'react';

class HabitAddForm extends Component {
    //React에서 다른 요소에 접근하고자 할 때 사용
    inputRef = React.createRef();

    onSubmit = (event) => {
        //submit은 기본적으로 페이지를 reload함으로 preventDefault()호출
        event.preventDefault();
        const name = this.inputRef.current.value;
        //&&: if기능으로, 아래 코드는 name이 있다면 onAdd에 name전달
        //props: 부모 컴포넌트가 자식 컴포넌트에 값을 전달할 때 사용
        name && this.props.onAdd(name);

        //input reset
        this.inputRef.current.value = '';
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input 
                ref={this.inputRef} 
                type="text" 
                className="add-input" 
                placeholder='Please enter your habit!'/>
                <button className="add-button">Add</button>
            </form>
        )
    }
}

export default HabitAddForm;