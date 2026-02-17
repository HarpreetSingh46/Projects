import React ,{useEffect, useState} from 'react'
import MacWindow  from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from "react-markdown"
import  "./note.scss"

const Note = () => {
    const [markDown, setmarkDown] = useState(null)
    useEffect(()=>{
        fetch("/note.txt")
        .then(res=>res.text())
        .then(text =>setmarkDown(text))
    },[])
  return (
            <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
      <div className='note-window'>
          { markDown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markDown}</SyntaxHighlighter> : <p>Loading .....</p>}
        </div>
        </MacWindow>
  )
}

export default Note
