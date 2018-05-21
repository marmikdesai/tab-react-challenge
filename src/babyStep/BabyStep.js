import React, { Component } from 'react';
import BabyStepTab from './../babyStepTab/BabyStepTab';
import BabyStepData from './../babyStepData/BabyStepData';
import './BabyStep.scss';

class BabyStep extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    return fetch('https://api.myjson.com/bins/xjl5e')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleClick(e) {
    let stepDetails = document.querySelectorAll(".step__details");
    let liStep = document.querySelectorAll(".leftNav");

    for(var li in liStep) {
    	if(liStep.hasOwnProperty(li) && liStep[li] != undefined && li != "length") {
        e.target.getAttribute("data-tab") === liStep[li].getAttribute("data-tab") ? liStep[li].className = "leftNav active" : liStep[li].className = "leftNav"
      }
    }

    for(var li in stepDetails) {
    	if(stepDetails.hasOwnProperty(li) && stepDetails[li] != undefined && li != "length") {
        e.target.getAttribute("data-tab") === stepDetails[li].getAttribute("id") ? (stepDetails[li].style.display = "block", stepDetails[li].className = "step__details active") : (stepDetails[li].style.display = "none", stepDetails[li].className = "step__details");
      }
    }
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div>Loading</div>
      )
    }

    let group = [],
        group1 = [];

    this.state.data[0].babySteps.forEach((baby, i) => {
      group1.push(
        <BabyStepTab step={baby} handleClick={this.handleClick} id={i} key={i} />
      )
      group.push(
        <BabyStepData step={baby} id={i} key={i}/>
      )
    });

    return (
      <div className="BabyStep">
        <ul className="sideBar">
          {group1}
        </ul>
        <section className="step__holder">
          {group}
        </section>
      </div>
    );
  }
};

export default BabyStep;
