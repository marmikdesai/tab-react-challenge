import React, { Component } from 'react';
import './BabyStepData.scss';

class BabyStepData extends Component {
  render() {
    const data = this.props.step;
    let babyStepID= "bs"+this.props.step.babyStep;
    if(this.props.id === 0) {
      return (
        <div className="step__details active" id={babyStepID}>
          <figure>
            <img src={this.props.step.babyStepIcon} alt={this.props.step.babyStepName} />
            <figcaption>
              <div className="step__details-name">{this.props.step.babyStepName}</div>
              <div className="step__details-summary">{this.props.step.babyStepShortSummary}</div>
            </figcaption>
          </figure>
          <p>{this.props.step.babyStepSummary}</p>
          <div id="friendListing1"></div>
        </div>
      )
    } else {
      return (
        <div className="step__details" id={babyStepID}>
          <figure>
            <img src={this.props.step.babyStepIcon} alt={this.props.step.babyStepName} />
            <figcaption>
              <div className="step__details-name">{this.props.step.babyStepName}</div>
              <div className="step__details-summary">{this.props.step.babyStepShortSummary}</div>
            </figcaption>
          </figure>
          <p>{this.props.step.babyStepSummary}</p>
          <div id="friendListing1"></div>
        </div>
      )
    }
  }
}

export default BabyStepData;
