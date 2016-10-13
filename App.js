import React from 'react';
var marked = require('marked');

require('!style!css!sass!./style.scss');

var startUpMarkdown = require('./startUpMarkdown').txt

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: startUpMarkdown,
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  componentWillMount(){
    this.setState({output: marked(this.state.input)})
  }
  update(e) {
    let raw = e.target.value;
    try {
      this.setState({
        output: marked(raw),
        err: ''
      })
    } catch(err) {
      this.setState({err: err.message})
    }
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="textAreaDiv">
          <textarea onChange={this.update}
                    defaultValue={this.state.input}>
          </textarea>
        </div>
          <div className="outputArea" dangerouslySetInnerHTML={{__html: this.state.output}}>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
