function addListItem(e) {
  // adds item to the <ul>
  e.preventDefault();
  //   console.log("Item added");

  const items = document.getElementById("items");
  const item = document.getElementById("item").value;
  const li = document.createElement("li");
  li.innerHTML = item;
  li.classList.add("list-group-item");
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
  btn.innerText = "X";
  li.appendChild(btn);
  items.appendChild(li);

  //   console.log(li);
}

function removeListItem() {
  // remove item from the <ul>
}

const submitForm = document.getElementById("submitForm");

submitForm.addEventListener("click", addListItem);
