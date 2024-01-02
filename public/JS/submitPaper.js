const paper = document.querySelector("#paper-form");
const form = document.querySelector("#p-form");
const authors = document.querySelector("#authors")

let reviewers = [];
let institutions = [];

//creating elements that will be used in repeat
const instDD = document.createElement("select");
instDD.setAttribute("name", "institutions");
instDD.setAttribute("id", "institutions");

document.addEventListener("DOMContentLoaded", async () => {
    reviewers = await getUsers();
    reviewers = reviewers.filter(r => r.role == "reviewer")
    
    institutions = await getInst()

    formHTML = loadAuthors()
    authors.innerHTML = formHTML
    form.addEventListener("submit", submitPaper);
  });

function loadAuthors(){
    return `
        <legend>Authors</legend>

        <div>
            ${authorHTML()}

            <div>
                <button type="button" class="btn" id="add-author" onclick="addAuthor()">Add Another Author</button>
            </div>
        </div>
    `
}

function authorHTML(){
    return `
    <div class="a-details">
        <div>
            <label for="firstName">First Name </label>
            <input type="text" name="firstName" id="firstName" class="input" placeholder="First Name" required>
        </div>

        <div>
            <label for="lastName">Last Name </label>
            <input type="text" name="lastName" id="lastName" class="input" placeholder="Last Name" required>
        </div>
       
        <div>
            <label for="email">Email </label>
            <input type="email" name="email" id="email" class="input" placeholder="email" required>
        </div>

        <div>
            <label for="institutions">Institution </label>
            ${institutionsOptions()}
        </div>

        <div>
            <label for="presenter">Presenter </label>
            <input type="radio" id="presenter" name="presenter" required>
        </div>
        <hr>`
}

function addAuthor(){
    const button = document.querySelector("#add-author");
    button.insertAdjacentHTML("beforebegin", authorHTML());
}

function institutionsOptions(){
    instDD.innerHTML = institutions.map((i) => `<option value="${i.name}">${i.name}</option>`);
    return `${instDD.outerHTML}`;
}

function submitPaper(e){
    e.preventDefault();
    let paper = formToObject(e.target);

    addPaper(paper);
    alert("Paper Succesfully Submitted for review");
    window.location = "./viewConfSched.html"
}

function formToObject(form) {
    let paper = {};
    let authors =[];
    let assignedReviewers=[]
    const paperDetails = form.querySelector("#paper");
    paper.title = paperDetails.querySelector("#title").value
    paper.abstract = paperDetails.querySelector("#abstract").value 

    const authorDetails = form.querySelectorAll(".a-details")
  
    for (let i = 0; i < authorDetails.length; ++i) {
      let author = {firstName: "", lastName: "", email: "",Institution: "" };
      const a = authorDetails[i];
  
      author.firstName = a.querySelector("#firstName").value;
      author.lastName = a.querySelector("#lastName").value;
      author.email = a.querySelector("#email").value;
      author.Institution = a.querySelector("#institutions").value;
      author.presenter = a.querySelector("#presenter").checked;

      authors.push(author);
    }

    paper.authors = authors;
 
    for (let i =0; i<2;++i){
        assignedReviewers[i] = reviewers[Math.floor(Math.random() * (reviewers.length + 1))]
    }

    paper.reviewers = assignedReviewers
    return paper;
  }

// api stuff
async function getUsers() {
    const url = "/api/users";
    const response = await fetch(url);
    return await response.json();
}

async function getInst() {
    const url = "/api/institution";
    const response = await fetch(url);
    return await response.json();
}

async function addPaper(paper) {
    const url = "/api/submitPapers";
    console.log(url);
    try {
      console.log(""); // Clear any error message displayed on the screen
      await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paper),
      });
    } catch (e) {
      console.log(e);
    }
  }