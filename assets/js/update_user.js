const formUpdate = document.querySelector("#update_user");

let serializeArray = function (form) {
  let arr = [];
  Array.prototype.slice.call(form.elements).forEach(function (field) {
    if (
      !field.name ||
      field.disabled ||
      ["file", "reset", "submit", "button"].indexOf(field.type) > -1
    )
      return;
    if (field.type === "select-multiple") {
      Array.prototype.slice.call(field.options).forEach(function (option) {
        if (!option.selected) return;
        arr.push({
          name: field.name,
          value: option.value,
        });
      });
      return;
    }
    if (["checkbox", "radio"].indexOf(field.type) > -1 && !field.checked)
      return;
    arr.push({
      name: field.name,
      value: field.value,
    });
  });
  return arr;
};

formUpdate.onsubmit = (e) => {
  e.preventDefault();

  let unindexed_array = serializeArray(formUpdate);

  var data = {};
  unindexed_array.map((array) => {
    data[array["name"]] = array.value;
  });
  console.log(data);

  var req = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(req).done(() => {
    alert("Data Updated Successfully!");
  });
};
