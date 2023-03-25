async function handleLogin(e) {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // console.log(email,password);
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    let res = await fetch('/admin/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({email,password}),
    })
    // console.log(res);
    let { login } = await res.json()
    // console.log(login);
    if (res.status==202) {
        document.getElementById('loginDiv').style.display = "none"
        document.getElementById('adminDiv').style.display = "block"
    } else {
        alert("Incorrect email or password")
    }
}