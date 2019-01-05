import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

export default class Form extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      task: '',
      date: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name] : value
    });

  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
  }

  render () {
    return (
      <div>
        <form>
          <TextField type="text" name="task" onChange={this.handleChange} />
          <TextField type="date" name="date" onChange={this.handleChange} />
          <Button variant="contained" color="primary" onClick={this.submitForm} >Submit</Button>
        </form>
      </div>
    );
  }
}
