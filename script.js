function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("signupForm").classList.remove("active");
    document.querySelector(".tabs .tab:nth-child(1)").classList.add("active");
    document.querySelector(".tabs .tab:nth-child(2)").classList.remove("active");
  }
  
  function showSignup() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.add("active");
    document.querySelector(".tabs .tab:nth-child(1)").classList.remove("active");
    document.querySelector(".tabs .tab:nth-child(2)").classList.add("active");
  }
  
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Capture the user's roll number and password
    const rollNumber = document.querySelector("#loginForm #rollNumber").value;
    const password = document.querySelector("#loginForm #password").value;
  
    // Construct the full URL with roll number and password
    const loginUrl = 'http://103.106.180.68/ecap/Default.aspx?rollnumber=' + encodeURIComponent(rollNumber) + '&password=' + encodeURIComponent(password);
    
    // Redirect the user to the new URL
    window.location.href = loginUrl;
  });