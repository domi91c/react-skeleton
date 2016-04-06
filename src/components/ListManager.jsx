var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function () {
    return {items: ['hello', 'world', 'click', 'me'], newItemText: 'peenor'};
  },

  onChange: function (e) {

    this.setState({newItemText: e.target.value});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText: ''});
  },

  render: function () {
    return (
      <div className="col-md-4">
        <div className="card ">
          <h3 className="card-header">{this.props.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} value={this.state.newItemText}/>
            <button className="btn-danger">Add</button>
          </form>
          <List items={this.state.items}/>
        </div>
      </div>
    )


  }
});

module.exports = ListManager;
