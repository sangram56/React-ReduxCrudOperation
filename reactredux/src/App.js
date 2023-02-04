import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./component/Home";
import Pnf from "./component/Pnf";
import Update from "./component/Update";
import Menu from "./component/Menu";
import Create from "./component/Create";


import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Provider} from 'react-redux'
import {createStore}  from 'redux'
import CourseReducer from "./Reducer/courseReducer";
import CourseApi from "./API/CourseApi";


function App() {
const [course,setCourse] = useState([]);

useEffect(() => {
  CourseApi.getAll().then(res => {
    console.log('data ', res);
    setCourse(res.data)
  }).catch(err => toast.error(err.message));
},[]);

  return (
   <Provider store={createStore(CourseReducer,course)}>
      <BrowserRouter>
    <Menu/>
    <ToastContainer position="top-right"/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/create'} element={<Create/>}/>
      <Route path={'/update/:id'} element={<Update/>}/>
      <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;


//Redux is basicallly a contaier to store your whole application data.
//we  call it as  a state management tool for your application.
//its totally belongs to frontend .
//we cant  use the redux for permanent storing  .
//basically used for communicate betwen different components. 
//we just create a wrapper on whole applcation and it cotroled through  redux. 
//the data we get and transfer  in redux is through props.
//one application having one store ans data alwayc unidirectional.
//react-redux library used to connect react and redux.
//install redux and react redux.
//


                                   //  (   Redux architecture    )

// view   (just as a ui ux design what the user see like buttons)
//Action  (Action is just like collect data from the user performed action and tell the reducer what to do or it 
//sene the data from react to reduc store through rudcer  )
//Reducer (just get the data from Action and send to store )
//Store   (storrs the whole data and send the whole data when any component needed it  )
//state is contain whole application data and it is not same as a component state


//                                    (Digram)

//    Action ->                       Reducer                      -> Store
//      ^                              View                           <-|



//                                    (  folder structure of  redux  )


//1. components 
//2.container = connect redux and react component
//3.services -> Action,reducer,constant(which data flow from action to reducer and matched in reducer  )




//when we crete a redux project we basically create a  particular container for that component for connect the redux and react
//


//                                          ( flow   )

// create a component -> store it on homecontainer -> crate the action -> creet the constant ->crete the reduer
//crte the root reducer -> connect ract and redux using homecontainer ->  now make the redux store  in index.js 
//get the adto cart function on  home compoantn -> add data in cart
