if (sessionStorage.getItem("isAdmin") !== "true") {
  alert("Unauthorized access. Please login as admin.");
  window.location.href = "admin.html";
}

function logout() {
  sessionStorage.removeItem("isAdmin");
  window.location.href = "admin.html";
}

async function loadFeedbacks() {
  const res = await fetch('http://localhost:5000/api/feedbacks');
  const feedbacks = await res.json();

  const container = document.getElementById("feedbackList");
  container.innerHTML = "";

  feedbacks.forEach(fb => {
    const div = document.createElement("div");
    div.className = "feedback-item";
    div.innerHTML = `
      <strong>${fb.name}</strong> (${fb.email})<br>
      ${fb.message}<br>
      <small>${new Date(fb.createdAt).toLocaleString()}</small>
    `;
    container.appendChild(div);
  });
}

window.onload = loadFeedbacks;
