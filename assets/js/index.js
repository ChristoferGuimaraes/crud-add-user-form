const deleteBtn = document.querySelectorAll(".delete");
let arrayBtn = Array.prototype.slice.call(deleteBtn);

arrayBtn.map((array) => {
  array.addEventListener("click", () => {
    const dataID = array.getAttribute("data-id");
    const request = {
      url: `http://localhost:3000/api/users/${dataID}`,
      method: "DELETE",
    };

    if (confirm("Do you really want yo delete this record?")) {
      $.ajax(request).done(() => {
        alert("Data Deleted Successfully");
        location.reload();
      });
    }
  });
});
