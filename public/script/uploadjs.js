let uploadBtn = document.getElementById("upload_btn");

uploadBtn.addEventListener("click", () => {
  let parpic = document.getElementById("parentPicture");
  let childpic = document.getElementById("childPicture");
  let birthcer =document.getElementById("birthCertificate")
  
  if (parpic.value.length === 0 && childpic.value.length === 0 && birthcer.value.length === 0 ) {
    alert("Please Upload a file");
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
