var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function () {
    return {
      items: ['hello', 'world', 'click', 'me'],
      newItemText: 'peenor',
    };
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

    var buttonStyle = {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
    };
    var divStyle = {
      marginLeft: 10,
    };
    return (
      <div style={divStyle} className="col-sm-12">
        <div className="card  card-primary-outline">
          <h3 className="card-header bg-primary">{this.props.title}</h3>
          <div className="card-block row">
            <form style={divStyle} onSubmit={this.handleSubmit}
                  className="form-inline">
              <div className="col-sm-8">
                <input
                  className="form-control"
                  onChange={this.onChange}
                  value={this.state.newItemText}/>
              </div>
              <div className="col-sm-4">
                <button style={buttonStyle} className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
          <List items={this.state.items}/>
        </div>
      </div>
    );
  },
});

module.exports = ListManager;
