// Example POST method implementation from fetch api post request:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  

sendButton.addEventListener("click", async()=>{

    questionInput=document.getElementById("questionInput").value;
    document.getElementById("questionInput").value = "";
    document.querySelector(".right2").style.display = "block"
    document.querySelector(".right1").style.display = "none"
    question1.innerHTML = questionInput;
    question2.innerHTML = questionInput;
    //get the answere populated
    let result = await postData("api",{"question": questionInput})
    solution.innerHTML = result.answer
})