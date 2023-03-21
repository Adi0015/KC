let uploadBtn = document.getElementById("upload_btn");

uploadBtn.addEventListener("click", () => {
    let image1 = document.getElementById("image1");
    // let image2 = document.getElementById("image2");
    // let image3 = document.getElementById("image3");
    // let image4 = document.getElementById("image4");
    // let image5 = document.getElementById("image5");
    // let image6 = document.getElementById("image6");
    // let image7 = document.getElementById("image7");
    // let image8 = document.getElementById("image8");
    // let image9 = document.getElementById("image9");   
    
    let im1 = "1.jpg"
    let newImage1 = new File ([image1[0]], `${im1}`);
    let formData = new FormData();
    

  // Loop through each file input element and append the file to the form data
    formData.append("image1",im1);
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
