 function getJoke() {
      // 1. Call the API
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json()) // 2. Convert the response to JSON
        .then(data => {
          // 3. Use the data
          document.getElementById("setup").innerText = data.setup;
          document.getElementById("punchline").innerText = data.punchline;
        })
        .catch(error => {
          // 4. Handle errors
          console.error("Error fetching joke:", error);
        });
    }