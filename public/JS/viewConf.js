loadSessions()
loadDates()

const schedDate = document.querySelector("#date")
const schedArea = document.querySelector("#sched-Area")

async function loadSessions(){
    const session = await getSched()

    const sessHTML = sessionHTML(session)
    schedArea.innerHTML = sessHTML;
}

async function loadDates(){
    const dates = await getDates()
    schedDateHTML = dates.map(d => `<option value="${d}">${d}</option>`).join(' ')
    schedDate.innerHTML = schedDate.innerHTML+ schedDateHTML
}

async function handleDateChange(){
    const schedule = await getSched()
    let sessHTML;
    if(schedDate.value ==0)
        loadSessions()
    else{
        const session = schedule.filter(s => s.date == schedDate.value)

        if(session.length ==0)
        {
            sessHTML = `<h1>No Sessions exist for this day!</h1>`
        }
        else
        {
            sessHTML = sessionHTML(session)
        }

        schedArea.innerHTML = sessHTML;
    }
}

function sessionHTML(sess){
    return `
    ${sess.map(s=>`
    <section class="session">
        <div class="gen-detail">
            <h4>Name</h4>
            <p>${s.title}</p>
        </div>
        <div class="gen-detail">
            <h4>Date</h4>
            <p id="date">${s.date}</p>
        </div>
        <div class="gen-detail">
            <h4>Location</h4>
            <p>${s.location.building} ${s.location.room}</p>
        </div>
        <div class="gen-detail">
            ${s.papers.map(p => `
                <div class="paper-details">
                    <div>
                        <h4>Paper</h4>
                        <p>${p.paper_title}</p>
                    </div>
                    <div>
                        <h4>Presenter</h4>
                        <p>${p.presenter.first_name} ${p.presenter.last_name}</p>
                    </div>
                    <div>
                        <h4>Start Time</h4>
                        <p>${p.timing.start_time}</p>
                    </div>
                    <div>
                        <h4>End Time</h4>
                        <p>${p.timing.end_time}</p>
                    </div>
                </div>`).join('')}
        </div>
    </section>`).join('')}`
}

// api stuff
async function getSched() {
    const url = '/api/schedule';
    const response = await fetch(url);
    return await response.json()
}

async function getDates() {
    const url = '/api/dates';
    const response = await fetch(url);
    return await response.json()
}