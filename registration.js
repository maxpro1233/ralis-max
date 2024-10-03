document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript працює!");
  
    let registerButton = document.querySelector(".register-btn");
    
  
    registerButton.addEventListener("click", function() {
      let passwordInput = document.getElementById("password");
      let confirmPasswordInput = document.getElementById("confirmPassword");
      let passwordError = document.getElementById("passwordError");
  
      if (!passwordInput || !confirmPasswordInput || !passwordError) {
        console.error("Один або декілька елементів не знайдені.");
        return;
      }
  
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      // Очищення попередніх помилок
      passwordInput.style.border = "";
      confirmPasswordInput.style.border = "";
      passwordError.textContent = "";
      passwordError.style.display = "none";
  
      // Перевірка паролів
      if (password !== confirmPassword) {
        passwordInput.style.border = "2px solid red";
        confirmPasswordInput.style.border = "2px solid red";
        passwordError.textContent = "Паролі мають співпадати";
        passwordError.style.display = "block";
      } else {
        console.log("Паролі співпадають");
      }
    });
  });
  
