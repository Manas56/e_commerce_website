export function showToast(operation, id) {
    const toast = document.createElement("div");
    toast.classList.add("toast");//css class given for styling
  
    // Set the text content of the toast based on the operation
    if (operation === "add") {
      toast.textContent = `Product with ID ${id} has been added.`;
    } else {
      toast.textContent = `Product with ID ${id} has been deleted.`;
    }
  
    document.body.appendChild(toast);//toast notification appended to the document;s body
  
    // Automatically remove the toast after a few seconds
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }