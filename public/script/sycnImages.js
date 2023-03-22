let uploadBtn = document.getElementById("upload_btn");

uploadBtn.addEventListener("click", () => {
  let formData = new FormData();

  // Loop through each file input element
  for (let i = 1; i <= 9; i++) {
    let input = document.getElementById(`image${i}`);

    // If a file has been selected, add it to the form data
    if (input.files.length > 0) {
      let filename = `image${i}.jpg`; // Replace with existing filename
      formData.append(`image${i}`, input.files[0], filename);
    }
  }
    
  // Submit the form data to the server using fetch
  fetch("/enquiries", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      // Handle the server response here
      console.log(res);
    })
    .catch((err) => {
      // Handle any errors here
      console.log(err);
    });
});
