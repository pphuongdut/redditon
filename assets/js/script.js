// Retrieve items from local storage or use default items
function getItemsFromLocalStorage() {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [
    {
      username: "TheMisterFrog",
      content: "Aping life savings into $reddit 🐸🐸🐸",
    },
    {
      username: "fra_calls",
      content: "reddit meta has officially started $reddit",
    },
    { username: "pump_the_stock", content: "Roaring kitty is back." },
    {
      username: "reddit_lover123",
      content: "YOOO I heard green candles r the new thing",
    },
  ];
}

// Save items to local storage
function saveItemsToLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to render the list
function renderList(items) {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = ""; // Clear the list before rendering
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "rounded overflow-hidden shadow-lg mb-4";

    itemDiv.innerHTML = `
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${item.content}</div>
          <p class="text-gray-700 text-base">Posted by: ${item.username}</p>
        </div>
      `;
    itemList.appendChild(itemDiv);
  });
}

// Event listener for the button click
document.getElementById("postButton").addEventListener("click", function () {
  const username = document.getElementById("inline-full-name").value;
  const content = document.getElementById("inline-password").value;

  if (username.trim() !== "" && content.trim() !== "") {
    const newItem = { username: username, content: content };
    const items = getItemsFromLocalStorage();
    items.unshift(newItem); // Add new item to the beginning of the list
    saveItemsToLocalStorage(items); // Save updated list to local storage
    renderList(items); // Re-render the list
    document.getElementById("inline-password").value = ""; // Clear the content input field
  } else {
    alert(
      "Oops! It looks like you forgot to type something. Try again, buddy!"
    );
  }
});

// Initial render of the items
const items = getItemsFromLocalStorage();
renderList(items);
