import React from 'react';
import './features.scss';
import { featuresData } from './constants';
import { Feature } from '../../components'

const Features = () => {
  return (
    <div className='gpt3_features section_padding' id='features'>
      <div className='gpt3_features-heading'>
        <h1 className='gradient_text'>
        The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3_features-container'>
        {
          featuresData.map(({title, text}, index) => (
            <Feature title={title} text={text} key={title + index} />
          ))
        }
      </div>
    </div>
  )
}

export default Features
