import React from "react";
import withTimer from "../c6/withTimer";

class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.messages.map(msg => <li>{msg}</li>)}
      </ul>
    );
  }
}

class MessageListNew extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.messages.map(msg => <p>{msg}</p>)}
      </div>
    );
  }
}

export class ChatApp extends React.Component {
  state = {
    messages: [],
    inputMsg: ""
  };

  handleInput = evt => {
    this.setState({
      inputMsg: evt.target.value
    });
  };
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessages = [...this.state.messages, text];
      this.setState({
        messages: newMessages,
        inputMsg: ""
      });
    }
  };
  render() {
    return (
      <div>
        <MessageListNew messages={this.state.messages} />
        <div>
          <input value={this.state.inputMsg} onChange={e => this.handleInput(e)}/>
          <button onClick={this.handleSend}>Send</button>
        </div>
        <h2>{this.props.time.toLocaleString()}</h2>
      </div>
    );
  }
}

export default withTimer(ChatApp);
