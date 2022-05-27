import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0},
            { id: 2, name: 'Running', count: 0},
            { id: 3, name: 'Coding', count: 0},
        ],
    };

    handleIncrement = habit => {
        /*
        1. 아래와 같이 handleIncrement함수를 구현할 수도 있으나, React에서 state를 직접적으로 변경하는 것은 권장되지 않음
        habit.count++;
        this.setState()
        */

        /*
        2. 1번 방법대신 아래 코드를 사용할 수 있으나, 아래 코드도 사실상 State를 변경하는 것
        ...: spread opertator연산자로 특정 배열(habits)안의 오브젝트를 새로운 배열에 복사해옴
        indexOf: 오브젝트가 배열에서 갖는 index번호 출력
        */
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits: habits});
    };

    handleDecrement = habit => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits: habits});
    };

    handleDelete= habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits: habits}); //key와 value값이 동일한 경우 한 개만 작성가능(ex. ({ habits }))
    };

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit 
                    key={habit.id} 
                    habit={habit}
                    //handleIncrement함수를 onIncrement라는 prop에 전달
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;

