document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple hardcoded credentials (for demo only)
  if (username === "admin" && password === "1234") {
    sessionStorage.setItem("isAdmin", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginError").classList.remove("hidden");
  }
});
