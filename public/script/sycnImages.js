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
  
    
  formData.append('label',document.getElementById(`imc1`).value)
  formData.append('id',document.getElementById(`imc1`).name)
  formData.append('label',document.getElementById(`imc2`).value)
  formData.append('id',document.getElementById(`imc2`).name)
  formData.append('label',document.getElementById(`imc3`).value)
  formData.append('id',document.getElementById(`imc3`).name)
  formData.append('label',document.getElementById(`imc4`).value)
  formData.append('id',document.getElementById(`imc4`).name)
  formData.append('label',document.getElementById(`imc5`).value)
  formData.append('id',document.getElementById(`imc5`).name)
  formData.append('label',document.getElementById(`imc6`).value)
  formData.append('id',document.getElementById(`imc6`).name)
  formData.append('label',document.getElementById(`imc7`).value)
  formData.append('id',document.getElementById(`imc7`).name)
  formData.append('label',document.getElementById(`imc8`).value)
  formData.append('id',document.getElementById(`imc8`).name)
  formData.append('label',document.getElementById(`imc9`).value)
  formData.append('id',document.getElementById(`imc9`).name)
    
  
    
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
