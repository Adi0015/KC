let uploadVidBtn = document.getElementById("upload_video_btn");

uploadVidBtn.addEventListener("click", () => {
  let formData = new FormData();

  // Loop through each file input element
  for (let i = 1; i <= 9; i++) {
    let input = document.getElementById(`video${i}`);
  
    // If a file has been selected, add it to the form data
    if (input.files.length > 0) {
      let filename = `video${i}.mp4`; // Replace with existing filename
      formData.append(`video${i}`, input.files[0], filename);
      console.log(`video${i}`);
    }
  }
  
  for (let i = 1; i <= 9; i++) {
    var element = document.getElementById(`vdc${i}`);
    var value = element.value;
    console.log(value);
    formData.append(`vdlabel${i}`, value);
    
  }
  
  
    
  // Submit the form data to the server using fetch
  fetch("/admin/videos", {
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
