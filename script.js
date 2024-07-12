document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const editItemBtn = document.getElementById("editItemBtn");
  const addItemBtn = document.getElementById("addItemBtn");
  const removeItemBtn = document.getElementById("removeItemBtn");
  const shoppingList = document.getElementById("shoppingList");
  let currentItem = null;

  addItemBtn.addEventListener("click", addItem);
  editItemBtn.addEventListener("click", editItem);
  removeItemBtn.addEventListener("click", removeItem);
  shoppingList.addEventListener("click", selectItem);

  function addItem() {
    const itemValue = itemInput.value.trim();
    if (itemValue) {
      const li = document.createElement("li");
      li.textContent = itemValue;
      shoppingList.appendChild(li);
      itemInput.value = "";
    }
  }

  function editItem() {
    if (currentItem) {
      currentItem.textContent = itemInput.value.trim();
      currentItem.classList.remove("selected");
      currentItem = null;
      itemInput.value = "";
    }
  }

  function removeItem() {
    if (currentItem) {
      shoppingList.removeChild(currentItem);
      currentItem = null;
      itemInput.value = "";
    }
  }

  function selectItem(event) {
    const selectedItem = event.target;
    const items = document.querySelectorAll("li");
    items.forEach(item => item.classList.remove("selected"));
    selectedItem.classList.add("selected");
    currentItem = selectedItem;
    itemInput.value = currentItem.textContent;
  }
});

