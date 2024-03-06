// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 4);

// Your code goes here ...
threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td> `;

  const button = newRow.querySelector(".btn-delete");
  button.addEventListener("click", (event) => {
    newRow.remove();
  });

  const likeButton = newRow.querySelector(".btn-like");
  likeButton.addEventListener("click", (event) => {
    likeButton.classList.toggle("selected");
  });
  console.log(likeButton);
  tableBody.appendChild(newRow);
});

buttonAddRandom.addEventListener("click", (event) => {
  const ArrNewRow = contacts.splice(randomIndex, 1);
  const newlyCreatedContact = ArrNewRow[0];
  const newlyCreatedRow = document.createElement("tr");
  newlyCreatedRow.innerHTML = `
  <td>
    <img src="${newlyCreatedContact.pictureUrl}" />
  </td>
  <td> ${newlyCreatedContact.name} </td>
  <td> ${newlyCreatedContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td> `;

  const buttonDelete = newlyCreatedRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", (event) => {
    newlyCreatedContact.remove();
  });

  const likeButton = newlyCreatedRow.querySelector(".btn-like");
  likeButton.addEventListener("click", (event) => {
    likeButton.classList.toggle("selected");
  });

  tableBody.appendChild(newlyCreatedRow);
});

const allButtonDelete = document.querySelectorAll(".btn-delete");
for (const buttonDelete of allButtonDelete) {
  buttonDelete.addEventListener("click", (event) => {
    buttonDelete.closest("tr").remove();
  });
}

// ITERATION 2 - Delete Buttons

// Your code goes here ...

// ITERATION 3 - Like Buttons

// Your code goes here ...

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
