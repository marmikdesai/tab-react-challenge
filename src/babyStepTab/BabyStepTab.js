import React, { Component } from 'react';
import './BabyStepTab.scss';

class BabyStepTab extends Component {
  render() {
    const data = this.props.step;
    let babyStepID= "bs"+this.props.step.babyStep;
    if(this.props.id === 0) {
      return (
        <li className="leftNav active" data-tab={babyStepID} id={this.props.step.babyStep} onClick={this.props.handleClick}>{this.props.step.babyStepName}</li>
      )
    } else {
      return (
        <li className="leftNav" data-tab={babyStepID} id={this.props.step.babyStep} onClick={this.props.handleClick}>{this.props.step.babyStepName}</li>
      )
    }

  }
}

export default BabyStepTab;
