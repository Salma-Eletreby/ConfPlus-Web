const session = document.querySelector("#session-form");
const form = document.querySelector("#sched-form");

let papers = [];
let schedule = [];
let locs = [];
let dates = [];

//creating elements that will be used in repeat
const paperDD = document.createElement("select");
paperDD.setAttribute("name", "papers");
paperDD.setAttribute("id", "papers");

const locDD = document.createElement("select");
locDD.setAttribute("name", "location");
locDD.setAttribute("id", "location");

const dateDD = document.createElement("select");
dateDD.setAttribute("name", "date");
dateDD.setAttribute("id", "date");

document.addEventListener("DOMContentLoaded", async () => {
  schedule = await getSched();
  papers = await getPapers();
  locs = await getLocation();
  dates = await getDates();

  scheduleHTML = schedule ? schedule.map((s) => sessionHTML(s)).join("") : sessionHTML();
  session.innerHTML = scheduleHTML;

  form.addEventListener("submit", submitSchedule);
});

function createSession() {
  let currSess = {};
  currSess.id = "S" + Date.now();
  schedule.push(currSess);
  const button = document.querySelector("#add-session");

  button.insertAdjacentHTML("beforebegin", sessionHTML());
}

function sessionHTML(session) {
  session = session ? session : "";
  session.id = session ? session.id : Date.now();
  return `<fieldset id="${session.id}">
    <legend>Session Details</legend>
    <form>
        <label for="confName">Session Name </label>
        <input type="text" name="title" id="title" class="input" placeholder="Session Name" required value="${session.title}">
    
        <label for="date">Session Date </label>
        ${dateHTML(session.date)}
    
        <label for="date">Session Location </label>
        ${locationHTML(session)}
    
        <hr>
        ${session.papers ? session.papers.map((p) => paperHTML(p)).join("") : paperHTML()}
    
        <button type="button" class="btn" id="add-paper" onclick="addPaper('${session.id}')">Add Paper</button>
        <hr>
        <button type="button" class="btn" id="del-session" onclick="deletePaper('${session.id}')">Delete Session</button>
    </form>
</fieldset>`;
}

function deletePaper(id) {
  document.querySelector(`#${id}`).remove();
}

function dateHTML(date) {
  dateDD.innerHTML = dates.map((d) => `<option value="${d}">${d}</option>`);
  if (date) {
    const index = dates.findIndex((d) => d === date);
    dateDD.options[index].setAttribute("selected", true);
  }
  return `${dateDD.outerHTML}`;
}

function locationHTML(session) {
  locDD.innerHTML = locs.map((l) => `<option value="${l.building}-${l.room}">${l.building} - ${l.room}</option>`);
  if (session) {
    const index = locs.findIndex((l) => l.building == session.location.building && l.room == session.location.room);
    locDD.options[index].setAttribute("selected", true);
  }

  return `${locDD.outerHTML}`;
}

function paperHTML(paper) {
  let container = document.createElement("div");
  container.setAttribute("data-id", Date.now());
  container.setAttribute("class","paper")

  const start = document.createElement("input");
  start.setAttribute("type", "time");
  start.setAttribute("name", "start");
  start.setAttribute("id", "start");
  start.setAttribute("required", "true");

  const end = document.createElement("input");
  end.setAttribute("type", "time");
  end.setAttribute("name", "end");
  end.setAttribute("id", "end");
  end.setAttribute("required", "true");

  paperDD.innerHTML = papers
    .map(
      (p, a) =>
        `<option value="${p.id}" data-title="${p.title}" data-first="${p.authors.map((a) => (a.presenter == true ? a.first_name : "")).join('')}" data-last="${p.authors.map((a) => (a.presenter == true ? a.last_name : "")).join('')}">
    ${p.title} - ${p.authors.map((a) => (a.presenter == true ? a.first_name : "")).join("")} ${p.authors.map((a) => (a.presenter == true ? a.last_name : "")).join("")}
    </option>`
    )
    .join("");

  if (paper) {
    const index = papers.findIndex((p) => p.title === paper.paper_title);
    paperDD.options[index].setAttribute("selected", true);
    start.setAttribute("value", `${paper.timing.start_time}`);
    end.setAttribute("value", `${paper.timing.end_time}`);
  }

  container.innerHTML = `
    <label for="">Paper Title & Presenter </label>
    ${paperDD.outerHTML}
    <label for="start">Start Time </label>
    ${start.outerHTML}
    <label for="end">End Time </label>
    ${end.outerHTML}
    <button type="button" class="btn btn-del" id="del-paper" onclick="DelPaper('${container.dataset.id}')"><i class="fa-sharp fa-regular fa-trash-can"></i></button>
    <br>`;

  return container.outerHTML;
}

function addPaper(id) {
  const container = document.querySelector("#" + id);
  const button = container.querySelector("#add-paper");
  const HTML = paperHTML();
  button.insertAdjacentHTML("beforebegin", HTML);
}

function DelPaper(dd) {
  document.querySelector(`[data-id="${dd}"]`).remove();
}

function submitSchedule(e) {
  e.preventDefault();
  schedule = formToObject(e.target);

  // console.log(schedule);
  alert("Form Succesfully Submitted");
  addSchedule(schedule);
}

function formToObject(form) {
  let data = [];
  const sessions = form.querySelectorAll("fieldset");

  for (let i = 0; i < sessions.length; ++i) {
    let details = { id: "", title: "", location: {}, papers: [] };
    const s = sessions[i];

    details.id = schedule[i].id;
    details.title = s.querySelector("#title").value;
    details.date = s.querySelector("#date").value;
    const building = s.querySelector("#location").value.split("-");
    details.location.building = building[0];
    details.location.room = building[1];

    const paper_container = s.querySelectorAll("#papers");
    const startTimes = s.querySelectorAll("#start");
    const endTimes = s.querySelectorAll("#end");

    for (let j = 0; j < paper_container.length; ++j) {
      let pap = {
        id: "",
        paper_title: "",
        presenter: {},
        timing: { start_time: "", end_time: "" },
      };
      pap.id = paper_container[j].value;
      pap.paper_title = paper_container[j].options[paper_container[j].selectedIndex].dataset.title;
      pap.presenter.first_name = paper_container[j].options[paper_container[j].selectedIndex].dataset.first;
      pap.presenter.last_name = paper_container[j].options[paper_container[j].selectedIndex].dataset.last;
      pap.timing.start_time = startTimes[j].value;
      pap.timing.end_time = endTimes[j].value;
      details.papers.push(pap);
    }

    data.push(details);
  }
  return data;
}

// api stuff
async function getSched() {
  const url = "/api/schedule";
  const response = await fetch(url);
  return await response.json();
}

async function getDates() {
  const url = "/api/dates";
  const response = await fetch(url);
  return await response.json();
}

async function getPapers() {
  const url = "/api/reviewedPapers";
  const response = await fetch(url);
  return await response.json();
}

async function getLocation() {
  const url = "/api/locations";
  const response = await fetch(url);
  return await response.json();
}

async function addSchedule(schedule) {
  const url = "/api/schedule";
  console.log(url);
  try {
    console.log(""); // Clear any error message displayed on the screen
    await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(schedule),
    });
  } catch (e) {
    console.log(e);
  }
}
