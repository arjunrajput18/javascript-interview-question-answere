// function fetchUser(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   .then(response=>response.json())
//   .then((data) =>
//     console.log(`${data.name} ${data.username}`)
//   );
// }
// fetchUser(1)

// const ul = document.querySelector(`ol`);

// const fetchUser = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
//   const data = await response.json();

// ul.innerHTML = data.map((ele) => `<li>${ele.name} ${ele.email}</li>`);
// };

// fetchUser();


// const app = document.querySelector("#app");

// const getUser = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   app.innerHTML = `<ol>
//   ${data.map((user) => `<li>name :- ${user.name} <br>Email:- ${user.email}</li>`)}
//   </ol>`;
// };


// getUser(`https://jsonplaceholder.typicode.com/users`);


// // a retun 'b'
// const value = a() 
// //promise {b}

// // a retun 'b'
// const value = await a()
// //b

// const data = response.json()
// // promise{resp}

// const data = await response.json()
// // resp



