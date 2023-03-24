// function fetchUser(id) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   .then(response=>response.json())
//   .then((data) =>
//     console.log(`${data.name} ${data.username}`)
//   );
// }
// fetchUser(1)

const ul = document.querySelector(`ol`);

const fetchUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();

ul.innerHTML = data.map((ele) => `<li>${ele.name} ${ele.email}</li>`);
};

fetchUser();
