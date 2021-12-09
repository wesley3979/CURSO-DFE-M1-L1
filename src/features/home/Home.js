import React, { Component } from 'react';
import Header from '../../containers/header';
import Input from '../../components/input';
import Result from '../../components/result'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { Data: props.Data, Data2: props.Data2 }
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleChangeData2 = this.handleChangeData2.bind(this);
  }

  handleChangeData(value) {
    this.setState({ Data: value });
  }

  handleChangeData2(value2) {
    this.setState({ Data2: value2 });
  }

  render() {
    const { title } = this.props;
    const { Data } = this.state;
    const { Data2 } = this.state;
    const divClassName = 'divClassName';
    const Equals = 'Equals';
    const operationTypeClass = "operationTypeClass";
    const operationType = "+";


    return (
      <div className="Home">
        <Header title={title}></Header>
        <div className={divClassName}> <Input callback={this.handleChangeData} /></div>
        <div className={operationTypeClass}>{operationType}</div>
        <div className={divClassName}> <Input callback={this.handleChangeData2} /></div>
        <div className={Equals}>=</div>
        <div> <Result data={Data} data2={Data2} /></div>
      </div >
    )
  }

}
export default Home;