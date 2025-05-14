// Button Click
document.getElementById("magicButton").addEventListener("click", function () {
    const text = document.getElementById("textArea");
    text.textContent = "✨ The magic is happening! ✨";
    text.style.color = "purple";
  });
  
  // Gallery - Next Image
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150/ff4444",
    "https://via.placeholder.com/150/44ff44",
  ];
  let imgIndex = 0;
  document.getElementById("nextImg").addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[imgIndex];
  });
  
  // Tabs
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      contents.forEach(c => c.classList.add("hidden"));
      document.getElementById(tab.dataset.content).classList.remove("hidden");
    });
  });
  
  // Keypress
  document.addEventListener("keydown", (e) => {
    if (e.key === "m") alert("You pressed 'm'! 🎹");
  });
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    if (!email.includes("@")) {
      feedback.textContent = "Invalid email format!";
      return;
    }
  
    if (pass.length < 8) {
      feedback.textContent = "Password must be at least 8 characters!";
      return;
    }
  
    feedback.textContent = "✅ Form submitted successfully!";
  });
  
  // Bonus: Double-click Easter Egg
  document.getElementById("magicButton").addEventListener("dblclick", () => {
    alert("🪄 Secret double-click unlocked!");
  });
  