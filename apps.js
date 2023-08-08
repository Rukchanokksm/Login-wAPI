const myID = document.getElementById("username");
const myPw = document.getElementById("password");
const submitbtn = document.getElementById("submit");
const profileDis = document.getElementById("Profile");
const CreatePro = document.createElement("div");

//click button
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  //check user and password if doen't have any text.
  if (!myID.value || !myPw.value) {
    alert("Please fill username and password !!!");
    return;
  }
  Login(myID.value, myPw.value);
});

const Login = async (username, password) => {
  const loginObject = { username, password };
  try {
    const response = await fetch(
      "https://api.learnhub.thanayut.in.th/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(loginObject),
      }
    );
    const data = await response.json();
    if (data.statusCode === 400) {
      alert(data.message);
      return;
    }
    localStorage.setItem("token", data.accessToken);
    getProfile();
    return;
  } catch (err) {
    console.log(err);
  }
};

const getProfile = async () => {
  const assetTokenID = localStorage.getItem("token");
  try {
    const getRes = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      method: "GET",
      headers: {
        accept: "application/json; charset=UTF-8",
        Authorization: `Bearer ${assetTokenID}`,
      },
    });
    const data = await getRes.json();
    // console.log(data);

    CreatePro.innerHTML = `<p>User id : <span>${data.id}</span></p>
    <p>username : <span>${data.username}</span></p>
    <p>name : <span>${data.name}</span></p>`
    return profileDis.appendChild(CreatePro);
  } catch (err) {
    console.log(err);
  }
};

