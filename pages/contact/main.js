//GET LIST OF SUBMISSIONS (see txt att.)


//FORM SUBMISSION:
// document.querySelector('form').addEventListener('submit', sendMsg);
// window.addEventListener('keydown', (e)=>{
//   if(e.code === 'Enter'){
//     sendMsg(e)
//   }
// });
// window.addEventListener('DOMContentLoaded', ()=> document.querySelector('#name').focus());


// function sendMsg(e){

// const input = {
// name: document.querySelector('#name').value,
// email: document.querySelector('#email').value,
// phone: document.querySelector('#phone').value,
// message: document.querySelector('#message').value,
// _subject: 'Новое уведомление с сайта'
// };

// const request = new XMLHttpRequest(); 

// if(input.name !== '' && input.email !== '' && input.message !== ''){
// try{
// request.open('POST', 'https://formsubmit.co/ajax/avidu97@gmail.com', true);
// request.setRequestHeader('Content-Type','application/json; charset=utf-8');
// const body = JSON.stringify(input);

// console.log('msg sent');
// console.log(request);
// console.log(body);
// request.send(body);

// document.querySelector('#name').value = '';
// document.querySelector('#email').value = '';
// document.querySelector('#phone').value = '';
// document.querySelector('#message').value = '';
// }

// catch{
// console.log(Error)
// }
// } else{
//   alert('fill all forms')
// }



// e.preventDefault();

// }

import axios from "axios";

const input = {
name: document.querySelector('#name').value,
email: document.querySelector('#email').value,
phone: document.querySelector('#phone').value,
message: document.querySelector('#message').value,
_subject: 'Новое уведомление с сайта'
};

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.post('https://formsubmit.co/ajax/avidu97@gmail.com', {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    message: document.querySelector('#message').value,
})
    .then(response => console.log(response))
    .catch(error => console.log(error));