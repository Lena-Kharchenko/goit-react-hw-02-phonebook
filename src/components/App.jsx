import React, { Component } from 'react';
import Form from './contactForm/contactForm';

export class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
