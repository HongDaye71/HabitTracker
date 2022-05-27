import './app.css';
import Habits from './Component/habits';
import React, {Component} from 'react';
import Navbar from './Component/navbar';
import HabitAddForm from './Component/habitAddForm';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'Running', count: 0},
        { id: 3, name: 'Coding', count: 0},
    ],
  };
  
  handleIncrement = habit => {
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
    this.setState({ habits: habits });  
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id:Date.now(), name:name, count:0}];
    this.setState({ habits: habits });  
  }

  render() {
    return (
      <>
      {/*filter: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환*/}
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
      <Habits 
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
      />
      </>
    );
  }
}

export default App;