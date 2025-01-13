document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Check if the username and password are correct
    if (username === "yza123" && password === "@_yza_@") {
      errorMessage.textContent = "";
      alert("Login successful!");
      
      // Redirect to the specified Canva link
      window.location.href = "https://www.canva.com/design/DAGYwZEtLxI/7v5-bQIBFshemFSFOB54ZA/edit";
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });
  