import React, { Component } from 'react';
import '../styles/pr.css';

class PoliteRequests extends Component {
  render(){
    return(
      <div>
        <h1>Polite Requests</h1>
        <p>Most religions have rules. People like rules, so we have a few.</p>
        <p>The cool thing about our rules is that they aren't really rules at all. They are Polite Requests. You are in no way required to follow anything we have listed here as the Core Tenants, nor do you have to follow anything appended beyond it. Like the Great Long One, this list will grow and grow with user assistance until the database tells us that there are too many lines and that it's time to stop, then we will have to come up with other ideas. Until then, append to your heart's content what you think should be a Polite Request. Remember that requests are just that - requests. No one has to do what any of us say because we are on the internet. You'll just have to deal with your lack of power.</p>
        <div className="placeholderRequestsBox">
          <div className="paddingDiv">
            <h2>The Polite Requests</h2>
            <h3>Until we have a live, updateable list, here's what we have...</h3>
            <div className="center">
              <h4>Eat the holiest, longest foods. Or don't.</h4>
              <h4>Do the right thing as often as possible. Or don't. Whatever.</h4>
              <h4>Achieve length through any number of means, or simply remain short. We're chill.</h4>
              <h4>Stay hydrated. Or don't.</h4>
              <h4>Lift with your legs and not with your back. It's not our deductable.</h4>
              <h4>Achieve great macros. Or don't.</h4>
            </div>
          </div>
        </div>
      </div>     
    )
  }
}
export default PoliteRequests;