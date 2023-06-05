const myID = document.getElementById("userlg");
const myPw = document.getElementById("password");
const submitbtn = document.getElementById("submit");

const profileDis = document.getElementById("Profile");
const CreatePro = document.createElement("div");

const getLogin = async (username, password) => {
  const loginOb = { username, password };
  try {
    const response = await fetch(
      "https://api.learnhub.thanayut.in.th/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(loginOb),
      }
    );
    const data = await response.json();
    if (data.statusCode === 400) {
      alert(data.message);
      return;
    }
    console.log(data.accessToken);
    localStorage.setItem("token", data.accessToken);
    getProfile();
    return data.accessToken;
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
    console.log(data);

    CreatePro.innerHTML = `<p>User id : <span>${data.id}</span></p>
    <p>username : <span>${data.username}</span></p>
    <p>name : <span>${data.name}</span></p>`;
    return profileDis.appendChild(CreatePro);
  } catch (err) {
    console.log(err);
  }
};

//click button
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  //check user and password if doen't have any text.
  if (!myID.value || !myPw.value) {
    alert("!!!");
    return;
  }
  // localStorage.setItem("token", [myID.value, myPw.value]);
  getLogin(myID.value, myPw.value);
  // if (!asset) return;
  // localStorage.setItem("tokenID", myID.value);
  //Inpto function this.
});
//put button login
