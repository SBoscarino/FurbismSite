import React, { Component } from 'react';
import '../styles/more.css';
import roundDoughnut from './images/roundDoughnut.png'

class More extends Component {
  render(){
    return(
    <div>
      <h1>Hungry For More? Do you CRAVE length?!</h1>
      <div>
        <h3>Would you like to help us out?</h3>
        <div className="levelOneDiv">
          <div className="paddingDiv">
            <p style={{fontWeight: 'bold'}}>Here are some ways to assist us in our LONG CAUSE:</p>

            <div className="row">
              <img src={roundDoughnut} className="bullet" /> 
              <p> Put in a Pull Request to help us upkeep the site! You can find the public Repo <a className="link" href='https://github.com/SBoscarino/FurbismSite'>HERE</a>.</p>
            </div>

            <div className="row">
              <img src={roundDoughnut} className="bullet" /> 
              <p> Take part in the <a className="link" href='https://www.reddit.com/r/LongFurbies/comments/9zlieu/welcome_to_rlongfurbies/'>r/longfurby</a> and <a className="link" href='https://www.reddit.com/r/furby/'>r/furby</a> communities on Reddit and be super-helpful!</p>
            </div>

            <div className="row">
              <img src={roundDoughnut} className="bullet" /> 
              <p> Do good work in the name of Furbism. Make people remember the 90's through Furbies and how being good to one another doesnt have to be driven by some weird angry man in a cloud-chair.</p>
            </div>
            
            <div className="row">
              <img src={roundDoughnut} className="bullet" /> 
              <p> Help us write LORE! Since all religions, books, and movies are just offshoots of one another, why not Furbism? People like familiar stories and if you enjoy a good book, have been forced to practice a religion in the past, or currently practice, you might know of a good addition to our GROWING lore! We would love to attain so much LORE LENGTH that it would warrant its own page!! If you have some Good Long Tales you'd like to add, you can contact us with those at admin_furb@furbism.org.</p>
            </div>
          </div>
        </div>
        <p>Feel free to email us wih ideas and more at admin_furb@furbism.org!</p>
      </div>
    </div>   
    )
  }
}
export default More;