import React from 'react';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('appbody'));
root.render(<h1>Hello, world</h1>);



// class QuestControl {
//     appbody;
//     initHome() {
//         fetch('/r/name')
//             .then((response) => response.json())
//             .then((json) => {
//                 this.appbody.innerHTML = json.html;
//             });
//     }
//     initNameForm() {
//         const subBtn = document.getElementById('user_name_submit');
//         if (!subBtn) {
//             return;
//         }
//         subBtn.addEventListener('click', () => {
//             const inp = document.getElementById('user_name');
//             console.log(inp);
//         });
//     }
//     init() {
//         this.appbody = document.getElementById('appbody');
//         this.initHome();
//         this.initNameForm();
//     }
// }

// const qs = new QuestControl();
// qs.init();