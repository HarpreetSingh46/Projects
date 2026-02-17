import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"
const Resume = () => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
    <div className="resume-window">
        <iframe src="/resume.txt" frameborder="0"></iframe>
    </div>
    </MacWindow>
  )
}

export default Resume
