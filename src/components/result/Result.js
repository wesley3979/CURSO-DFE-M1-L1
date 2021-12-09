import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, data2 } = this.props;
    const result = Number(data) + Number(data2);

    return (
      <div className="Result">
        <p className="ResultData">{result}</p>
      </div>
    );

  }
}

export default Result;