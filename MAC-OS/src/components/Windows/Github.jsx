import React from 'react'
import github from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./github.scss"
const Gitcard=({data={id,image:"",title:"",description:"",tags:[],repolink:"",demoLink:""}})=>{
return <div className="card">
  <img src={data.image} alt="" />
  <h1>{data.title}</h1>
  <p className='description'>{data.description}</p>
  <div className="tags">
    {
      data.tags.map(tag=><p className='tag'>{tag}</p>)
    }
  </div>
  <div className="urls">
      <a href={data.repolink}>Respository</a>
    { data.demoLink && <a href={data.demoLink}>DemoLink</a>}
  </div>
</div>
}
const Github = ({windowName,setwindowState}) => {
  return (
    <div>
      <MacWindow windowName={windowName}  setwindowState={setwindowState} >
        <div className="cards">
            {github.map(function(e){
                return <Gitcard data={e}/>
            })}
        </div>
      </MacWindow>
    </div>
  )
}

export default Github
