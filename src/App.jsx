import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexImg from './images/alexa.png'
import SiriImg from './images/siri.png'
import CortanaImg from './images/cortana.png'

function App() {

  return (
    <>
    <section className='hero is-primary'>
      <div className="hero-body">
        <h1 className='title has-text-centered'>Personal Digital Assitants</h1>
        </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-3">
                <ProfileCard title='Alexa' imgUrl={AlexImg} handle="@alexa99" 
                description="Alexa was created by Amazon to helps you suggestions to buy things"/>
              </div>
              <div className="column is-3">
                <ProfileCard title='Siri' imgUrl={SiriImg} handle="@siri89" 
                description="Siri was created by Apple to helps you as a operator of your system"/>

              </div>
              <div className="column is-3">
                <ProfileCard title='Cortana' imgUrl={CortanaImg} handle="@cortana79"
                description="Cortana was made by microsoft to make things easier"/>
              </div>
            </div>
          </section>
        </div>
        {/* <h1>{new Date().toLocaleTimeString()}</h1>
      <input type="number" min={5} max={25} />
      <hr />
      <input type="text" spellCheck={false} style={{border:'5px solid blue', margin:'5px'}}/>
      <hr />
      <textarea name="" id="" autoFocus={true}></textarea> */}
    </>
  )
}

export default App
