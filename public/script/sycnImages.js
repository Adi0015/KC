let uploadBtn = document.getElementById("upload_btn");

uploadBtn.addEventListener("click", () => {
  let formData = new FormData();

  // Loop through each file input element
  for (let i = 1; i <= 9; i++) {
    let input = document.getElementById(`image${i}`);
    // console.log(document.getElementById(`image${i}`));
    // If a file has been selected, add it to the form data
    if (input.files.length > 0) {
      let filename = `image${i}.jpg`; // Replace with existing filename
      formData.append(`image${i}`, input.files[0], filename);
      
    }
  }
  
  for (let i = 1; i <= 9; i++) {
    var element = document.getElementById(`imc${i}`);
    var value = element.value;
    // console.log(value);
    formData.append(`label${i}`, value);
    
    
  }
  
  
    
  // Submit the form data to the server using fetch
 // Submit the form data to the server using fetch
 fetch("/admin", {
  method: "POST",
  body: formData
})
alert ("GALLERY UPDATED");
for (let i = 1; i <= 9; i++) {
document.getElementById(`imc${i}`).value = null;
document.getElementById(`image${i}`).value =null;
}
});
