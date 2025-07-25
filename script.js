 async function getJoke() {
    try{
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
     if (!response.ok) {
      throw new Error("⚠️ Network response was not OK");}
    const data = await response.json();
    document.getElementById("setup").innerText = data.setup;
    document.getElementById("punchline").innerText = data.punchline;
   console.log(data); }
    catch (error) {document.getElementById("error").innerText = "⚠️ Error: " + error.message;
};

    
    }