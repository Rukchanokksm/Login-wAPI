const myID = document.getElementById("userlg");
const myPw = document.getElementById("password");
const submitbtn = document.getElementById("submit");

const getLogin = async (username, password) => {
  const loginOb = { username, password };
  console.log(loginOb);
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
    return data.accessToken;
  } catch (err) {
    console.log(err);
  }
};

// const getProfile = async () => {

//   try {
//     const getRes = fetch("https://api.learnhub.thanayut.in.th/auth/me" ,
//     {
//       method: "GET",

//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  //check user and password if doen't have any text.
  if (!myID.value || !myPw.value) {
    alert("!!!");
    return;
  }
  localStorage.setItem("tokenID", myID.value);
  localStorage.setItem("tokenPw", myPw.value);
  getLogin(myID.value, myPw.value);
  //set value to function to getLogin from userID and passwordID
  // const asset = await getLogin(myID.value, myPw.value);

  // if (!asset) return;
  // localStorage.setItem("tokenID", myID.value);
  //Inpto function this.
  // getperSonId();
});
//put button login
