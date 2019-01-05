import React from 'react'
import List from './List'
import Form from './Form'

export default class App extends React.Component {
  state = {
    tasks: []
  };

  handleSubmit = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

//  handleSearch = () => {
  componentDidMount = () => {
    let url = 'http://localhost:3000/api/v1/task';

    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      this.setState({ tasks: data });
    });
  }

  render () {
    const { tasks } = this.state;

    return (
      <div>
        <List tasks={tasks} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
