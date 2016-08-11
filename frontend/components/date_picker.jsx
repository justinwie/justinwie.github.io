const React = require('react');
const Moment = require('moment');
const DatePicker = require('react-datepicker');

const ReactDatePicker = React.createClass({

  render() {
    return (
      <DatePicker
        selected={this.props.date}
        onChange={this.props.action}

        placeholderText={this.props.placeholder}
        className='date-dropdown'
      />
    );
  }
});

module.exports = ReactDatePicker;