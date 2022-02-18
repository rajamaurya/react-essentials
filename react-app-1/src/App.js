import * as React from 'react';
import "./App.css";
import AlertDialog from './composition/AlertDialog';
import ConditionalDialog from './composition/ConditionalDialog';
import Dialog from './composition/Dialog';
import WelcomeDialog from './composition/WelcomeDialog';
import ProductHeader from './FIlterProducts/productsContainer/ProductHeader';
import Products from './FIlterProducts/productsContainer/Products';
import ProductsList from './FIlterProducts/productsContainer/ProductsList';
import SearchableProductTable from './FIlterProducts/SearchableProductTable';
import SearchProduct from './FIlterProducts/SearchProduct';
import MyInput from './ForwardRef/MyInput';
import Counter from './HOC/Counter';
import Hover from './HOC/Hover';
import Calculator from './liftState/calculator';
import AnotherCounter from './RenderProps/AnotherCounter';
import KrishnaCounter from './RenderProps/KrishnaCounter';
import Counter1 from './RenderProps/Counter1';
import { SearchContext } from './SearchContext';
import SuperDialog from './SuperDialog';
import Memo from './Memo/MemoDemo';
import MemoDemo from './Memo/MemoDemo';
import { Provider } from 'react-redux';
import {store} from "./store.js";
import Posts from './Posts/Posts';
import "./Global.css";
import LoginModel from './Components/login/LoginModel';
const {useState} = React;






function App(){
  const [defultState, setdefaultState] = useState("welcome onboardig");
  const [chekboxState, setChekboxState] = useState(false);
  const [posts, setPosts] = useState([]);
  const [alertType, setAlertType] = useState("alert");

  const [val, SetVal] = useState();
  const inputRef = React.createRef();
  const forwdRef = React.createRef();

  const focus = ()=>{
    setdefaultState('');
    const node = inputRef.current;
    console.log(node)
    inputRef.current.focus();
  }
  const checkboxHandler = ()=>{
    chekboxState?setChekboxState(false):setChekboxState(true);
    inputRef.current.disabled = !inputRef.current.disabled;
  }
  const inputHandler = (event)=>{
    setdefaultState(event.target.value)
    inputRef.current.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  const addPost = ()=>{
     let value = inputRef.current.value;
     setPosts([...posts,value]);
  }


  const searchEventHandler=(val)=>{
    SetVal(val);
  }
 return (
      <>

      <LoginModel/>

      <div className = "logged">

      <div>Hello there..</div>

      <label> Disable Text Pad: <input type = "checkbox" checked  ={chekboxState} onClick={checkboxHandler}/></label>
      <textarea  value = {defultState} ref = {inputRef} onClick={focus} onChange={inputHandler}/>
      <pre> {defultState}</pre>
      <button value="add post" onClick={addPost}>Add Post</button>
      {posts.length > 0 && <p>Posts</p>}
      {
        posts.map((post, postIdx)=>(
          <p>{post}</p>
        )
        )
      }
      
       <hr/>
       <h1> Lifting state up testing....</h1>
       <hr/>

       <Calculator />

       <hr/>
       <h1> composition in React....</h1>
       <hr/>
       {
         alertType && alertType == "alet" ? <Dialog> <AlertDialog/> </Dialog>
                              : <Dialog> <WelcomeDialog/> </Dialog>
       }
       
       <ConditionalDialog type = {alertType} />
       <SuperDialog welcome = {<WelcomeDialog/>} alert = {<AlertDialog/>} />

       <hr/>
       <SearchableProductTable>
       <SearchProduct searchEventHandler= {searchEventHandler}/>
         <SearchContext.Provider value = {val}> 
         <Products>
              <ProductHeader/>
              <ProductsList/>
          </Products>
         </SearchContext.Provider>
          
          
       </SearchableProductTable>

      <hr/>
      <h2>Forwarding ref..</h2>       
       <MyInput ref = {x=> x && x.focus()} />

       <hr/>
       <h2>HOC DEMO.</h2>
       <Counter myName = "Raja Krishn Mourya"/>
       <Hover myName = "Kaushal"/>

       <hr/>
       <h2>Render Props..</h2>
       <KrishnaCounter 
        render = {
                (count, incrementCount)=> 
                  <Counter1 
                    count={count} 
                    incrementCount ={incrementCount} 
                  />
              }
        />

      <KrishnaCounter 
        render = {
                (count, incrementCount)=> 
                  <AnotherCounter 
                    count={count} 
                    incrementCount ={incrementCount} 
                  />
              }
        />

       <hr/>
       <h2>Memo Demo down here....</h2>
       <MemoDemo />
       <hr/>
       <div className="posts-comp">
          <Posts/>
        </div>
        </div>
      </>
 );

}

export default App;