import classes from './MainContent.module.css'
import Header from './Header/Header'
import Dashboardcards from './DashboardCards/DashboardCards'
import Recent from './Recent/Recent'
import React,{useState} from 'react'
const MainContent = (props) => {
    const [collapseStat,setcollapseStat] = useState(false)

    const checkCollapse = (cond)=>{
   
       props.check()
       if(collapseStat){
setcollapseStat(false)
       }else{
      setcollapseStat(true)
        }
    }
    const increaseWidth = () =>{
        if(collapseStat){
    
           return classes.mainContentCollapse
        }else{
            
            return classes.mainContent
        }
    }
    return(
        <div className={increaseWidth()}>
            <Header  checkCollapse={checkCollapse} collapseCond={collapseStat}/>
            <main>
            <Dashboardcards/>
            <Recent/>
            </main>
        </div>
    )
}
export default MainContent