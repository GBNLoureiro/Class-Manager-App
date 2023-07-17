import CardTrophy from "./cardTrophy";
import NavBar from "./navBar";
import './App.css';
import cardClass from "./cardClass";
import BtnAddClass from "./btnAddClass";
import CreateClass from "./CreateClass";
import {useState, useEffect} from 'react';
import ScheadulePage from "./ScheadulePage";

function App() {
  let [page, setPage] = useState(0);

  useEffect( //Separa a url pela direção e pelo index recupera a página -- Como enviar ao returnPa*ge?
    ()=>{
      const url = window.location.href; //Locate url
      const res = url.split('?')        //split url into 2 strings
      setPage(page = res[1])            // Store second string into page variable
      console.log("use effect working, res: " + res[1] + " setPage: " + setPage + " page variable: " + page)
    }
  )
    
  const linksPage = (p) => {  //called at onClick={} with page parameter, another method is set href '?p'
    if (p===1) {
      window.open('http://localhost:5173?1', '_self')
    } else if (p===2) {
      window.open('http://localhost:5173?2', '_self')
    }
  }
  
  const returnPage = () => {  //"Return page to be loaded" call in on App function return
    if (page == 1) {
      return <ScheadulePage/>
    } else if (page == 2) {
      return <CreateClass/>
    } else if (page == 3) {
      return <ClassProfile/>
    } else if (page == 4) {
      return <TaskDone/>
    } else if (page == 5) {
      return <DeleteConfirm/>
    } else if (page == 6) {
      return <UserProfile/>
    } else if (page == 7) {
      return <EditProfile/>
    } else if (page == 8) {
      return <MenuPage/>
    } else if (page == 9) {
      return <OpeningLogo/>
    } else {
      return (
              <>
                {console.log("running function,page didn't catch")} 
                <div>{ScheadulePage}</div>
              </>)
    }
  } //To navigate use: onclick={()=>linksPage(nº)} 
  return (
            <>
              <div>{returnPage()}</div>
              <button onClick={()=>linksPage(2)}>teste</button>
              <button onClick={()=>linksPage(1)}>teste</button>
              <button onClick={()=>linksPage(3)}>teste</button>
            </>
  
  ) 
}
export default App;