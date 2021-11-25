import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let UserData = [
    {
        id: '1', username: 'user1'
    },
    {
        id: '2', username: 'user2'
    },
    {
        id: '3', username: 'user3'
    }
]
let DialogData = [
    {
        id:'1',message:'1'
    },
    {
        id:'2',message:'3'
    },
    {
        id:'3',message:'3'
    },
    {
        id:'14',message:'4'
    },
]
let PostData = [
    { message : 'Первое сообщение' ,  likeCount : '0'},
    { message : '212321312312312' ,  likeCount : '2'},
    { message : '312312312312' ,  likeCount : '3'}
]
ReactDOM.render(
  <React.StrictMode>
    <App UserData={UserData} DialogData={DialogData} PostData={PostData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
