document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission or default behavior
      handleSearch();
    }
  });

  
function handleSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const beaches = document.getElementById("beaches");
    const temples = document.getElementById("temples");
  
    // Hide both initially
    beaches.style.display = "none";
    temples.style.display = "none";
  
    if (!input) return;
  
    if (input.includes("beach") || input.includes("sea")) {
      beaches.style.display = "block";
    }
    if (input.includes("temple")) {
      temples.style.display = "block";
    }
    if (input.includes("india") || input.includes("thailand") || input.includes("vietnam") || input.includes("philippines")) {
      // If they search a country, show both (optional logic)
      beaches.style.display = "block";
      temples.style.display = "block";
    }
  }
  
  function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("beaches").style.display = "none";
    document.getElementById("temples").style.display = "none";
  }
  