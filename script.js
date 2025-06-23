const form = document.getElementById('feedbackForm');
const thankYou = document.getElementById('thankYou');
const feedbackList = document.getElementById('feedbackList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const res = await fetch('http://localhost:5000/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    thankYou.classList.remove('hidden');
    form.reset();
    loadFeedbacks();
    setTimeout(() => {
      thankYou.classList.add('hidden');
    }, 3000);
  }
});

async function loadFeedbacks() {
  const res = await fetch('http://localhost:5000/api/feedbacks');
  const feedbacks = await res.json();

  feedbackList.innerHTML = '';
  feedbacks.forEach(fb => {
    const div = document.createElement('div');
    div.className = 'feedback-item';
    div.innerHTML = `<strong>${fb.name}</strong> (${fb.email})<br>${fb.message}<br><small>${new Date(fb.createdAt).toLocaleString()}</small>`;
    feedbackList.appendChild(div);
  });
}

window.onload = loadFeedbacks;
