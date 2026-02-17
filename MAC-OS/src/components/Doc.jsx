import React from 'react'
import "./dock.scss"

const Doc = ({windowState,setwindowsState}) => {
  return (
    <div>
      <footer className='doc'>
        <div 
        onClick={() => { setwindowsState(state => ({ ...state, github: true })) }}
        className="icon github"><img src="/doc-icons/github.svg" alt="" />
        </div>
        <div 
       onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
        className="icon calender"><img src="/doc-icons/calender.svg" alt="" />
        </div>
        <div
         onClick={() => { setwindowsState(state => ({ ...state, cli: true })) }}
        className="icon cli"><img src="/doc-icons/cli.svg" alt="" />
        </div>
        <div 
         onClick={()=>{window.open("https://www.instagram.com/harpreet_singh.46","_blank")}}
        className="icon link"><img src="/doc-icons/link.svg" alt="" />
        </div>
        <div
        onClick={()=>{window.open("mailto:theharpreetsingh524.com","_blank")}}
        className="icon mail"><img src="/doc-icons/mail.svg" alt="" />
        </div>
        <div 
        onClick={() => { setwindowsState(state => ({ ...state, resume: true })) }}
        className="icon note"><img src="/doc-icons/note.svg" alt="" />
        </div>
        <div 
          onClick={() => { setwindowsState(state => ({ ...state, resume: true })) }}
        className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" />
        </div>
        <div 
        onClick={() => { setwindowsState(state => ({ ...state, spotify: true })) }}
        className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" />
        </div>
      </footer>
    </div>
  )
}

export default Doc
