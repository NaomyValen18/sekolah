
function login() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const error = document.getElementById('error-msg');
  if (pass === '123' && user !== '') {
    localStorage.setItem('valtaxUser', user);
    window.location.href = 'index.html';
  } else {
    error.textContent = "Nama atau password salah!";
  }
}

function showPage(id) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Auto redirect ke login jika belum login
if (window.location.pathname.includes('index.html')) {
  const user = localStorage.getItem('valtaxUser');
  if (!user) {
    window.location.href = 'login.html';
  }
}
