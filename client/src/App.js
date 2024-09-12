
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/header/';
import AddNewBlog from './pages/add-new/';
import Home from './pages/home/';


function App() {
  return (
  <div className = "App">

  
    

  
  <BrowserRouter>


  <Header/>

  
  


  
  
  <Routes>
  
  <Route exact path = "/" element = {<Home/>}/>
  

  <Route path = "/add-new" element = {<AddNewBlog/>}/>



  </Routes>
  

  
  
  </BrowserRouter>
  
    
    

    

    

    


    </div>
      
  )
}

export default App;
