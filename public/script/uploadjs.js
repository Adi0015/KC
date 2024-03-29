let uploadBtn = document.getElementById("upload_btn");

uploadBtn.addEventListener("click", () => {
  let parpic = document.getElementById("parentPicture");
  let childpic = document.getElementById("childPicture");
  let birthcer =document.getElementById("birthCertificate")
  
  const maxSizeInBytes = 256 * 1024; // 256 KB

  const validateFileSize = (file) => {
    if (file.size > maxSizeInBytes) {
      throw new Error("File size should be less than 256 KB.");
    }
  };

  try {
    validateFileSize(parpic.files[0]);
    validateFileSize(childpic.files[0]);
    validateFileSize(birthcer.files[0]);
  } catch (error) {
    alert(error.message);
    return;
  }

  if (parpic.value.length === 0 ||
    childpic.value.length === 0 ||
    birthcer.value.length === 0 ||
    document.getElementById("name").value.length === 0 ||
    document.getElementById("email").value.length === 0 ||
    document.getElementById("childAge").value.length === 0 ||
    document.getElementById("whatsapp").value.length === 0 ||
    document.getElementById("birthdate").value.length === 0 ||
    document.getElementById("branch").value.length === 0 ||
    document.getElementById("standard").value.length === 0 ||
    document.getElementById("fatherName").value.length === 0 ||
    document.getElementById("fatheroccupation").value.length === 0 ||
    document.getElementById("fatherMobileNumber").value.length === 0 ||
    document.getElementById("motherName").value.length === 0 ||
    document.getElementById("motheroccupation").value.length === 0 ||
    document.getElementById("motherMobileNumber").value.length === 0
    ) {
    alert("Please fill in all fields");
  } else {
    let t = Date.now()
    let imgNameChild = t + "-child.jpg" 
    let imgNameParent = t + "-parent.jpg" 
    let imgBirthCer = t + "-birthCertificate.jpg"
    console.log(childpic.files[0]);
    
    let newImageChild = new File([childpic.files[0]], `${imgNameChild}`);
    let newImageParent = new File([parpic.files[0]], `${imgNameParent}`);
    let newImageBirthCer = new File([birthcer.files[0]],`${imgBirthCer}`)
    // console.log(newImageChild);
    // alert(imgNameChild)
    // console.log(newImageChild);
    let formData = new FormData();

    
    formData.append("childPicture", newImageChild);
    formData.append("parentPicture", newImageParent);
    formData.append("birthCertificate", newImageBirthCer);
    formData.append("name",document.getElementById("name").value)
    formData.append("email",document.getElementById("email").value)
    formData.append("whatsapp",document.getElementById("whatsapp").value)
    formData.append("childAge",document.getElementById("childAge").value)
    formData.append("birthdate",document.getElementById("birthdate").value)
    formData.append("branch",document.getElementById("branch").value)
    formData.append("standard",document.getElementById("standard").value)
    formData.append("fatherName",document.getElementById("fatherName").value)
    formData.append("fatheroccupation",document.getElementById("fatheroccupation").value)
    formData.append("fatherMobileNumber",document.getElementById("fatherMobileNumber").value)
    formData.append("motherName",document.getElementById("motherName").value)
    formData.append("motheroccupation",document.getElementById("motheroccupation").value)
    formData.append("motherMobileNumber",document.getElementById("motherMobileNumber").value)
    
        
    document.getElementById("childPicture").value = null;
    document.getElementById("parentPicture").value = null;
    document.getElementById("birthCertificate").value = null;
    fetch("/admission", {
      method: "POST",
      body: formData,
    })
      .then((res) => document.location.href="/")
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

});
