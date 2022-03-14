import React, { Component } from 'react'
import SecondApp from '../../../Lesson-21/SecondApp'
import FirstForm from '../../../Lesson-22/FirstForm'
import PropsParent from '../../../Lesson-23/PropsParent'
import EventsParent from '../../../Lesson-24/EventsParent'
import LifeCycle from '../../LifeCycleParent'



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'

export class Exercise22 extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="app-container">
      <Nav />
      <Routes>
        <Route path="/lesson21" element={<SecondApp />}/>
        <Route path="/lesson22" element={<FirstForm />}/>
        <Route path="/lesson23" element={<PropsParent />}/>
        <Route path="/lesson24" element={<EventsParent />}/>
        <Route path="/lesson25" element={<LifeCycle />}/>
      </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default Exercise22
