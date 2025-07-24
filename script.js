
function login() {
  const nama = document.getElementById("nama").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (password === "123" && nama !== "") {
    sessionStorage.setItem("nama", nama);
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Nama dan/atau Password salah!";
  }
}

window.onload = () => {
  const greeting = document.getElementById("user-greeting");
  if (greeting) {
    const nama = sessionStorage.getItem("nama") || "Pengunjung";
    greeting.textContent = `Halo, ${nama}!`;
  }
};
