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
              <div className="column is-3">
                <ProfileCard title='ChatGPT' imgUrl='data:image/png;base64,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' handle="@cortana79"
                description="Chatgpt was made by OpenAi to make searching earier."/>
              </div>
              <div className="column is-3">
                <ProfileCard title='Claude' imgUrl='data:image/png;base64,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' handle="@cortana79"
                description="Chatgpt was made to making coding and development easier."/>
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
