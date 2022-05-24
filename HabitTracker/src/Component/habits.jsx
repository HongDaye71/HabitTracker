import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0},
            { id: 2, name: 'Running', count: 0},
            { id: 3, name: 'Coding', count: 0}
        ]
    }

    render() {
        return (
            <ul>
                {/*habits을 map을 통해 돌면서 미리 만들어둔 Habit Component에 할당*/}
                {this.state.habits.map(habit => (
                    <Habit key={habit.id} habit={habit}/>
                    //Habit component에 habit object전달(Habit에 map을 통해 도는 this.state의 habit이 전달될 수 있도록)
                ))}
            </ul>
        );
    }
}

export default Habits;


{/*
React list Rendering시, key(id)값을 지정해야 하는 이유
-> Key값이 지정되지 않은 경우: React는 state list에 변경이 있을 경우, 상단 요소부터 비교하여 상단에서 변경사항이 있다면 전체를 다시 렌더링한다.
-> Key값이 지정된 경우: key값이 같은 것을 비교하여 변경된 요소만 Rendering한다 
*/}