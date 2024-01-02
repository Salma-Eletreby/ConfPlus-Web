# ConfPlus-Web
A website built for Web development (CMPS 350) course. 

# Overview

ConfPlus is a Conference Management System designed to facilitate the organization and execution of academic conferences. It aims to cater to the requirements of various stakeholders involved in the conference, including organizers, authors, reviewers, and visitors.

### Use Cases

#### Use Case 1: Submit a Paper

- Authors enter paper details (title, abstract, authors' details), select a presenter, and upload a PDF.
- The system:
  - Uploads the paper PDF to the server.
  - Assigns 2 reviewers randomly from the users listed in users.json.
  - Saves paper details to papers.json.

#### Use Case 2: Create/Update Conference Schedule

- The user:
  - Navigates to the schedule editor.
  - Defines sessions with titles, locations, dates, and times.
  - Assigns accepted papers and presenters to sessions based on evaluations.
- The system:
  - Saves the conference schedule to schedule.json.

#### Use Case 3: Get Conference Schedule

- Allows visitors to view the conference schedule from schedule.json.
- Provides filtering by conference date to display specific sessions.

## Web API
<table>
  <tr>
    <th>Method</th>
    <th>URL</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/dates</td>
    <td>Returns all dates</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/institution</td>
    <td>Returns all institutions</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/locations</td>
    <td>Returns all locations</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/reviewedPapers</td>
    <td>Returns all the papers that have been reviewed</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/schedule</td>
    <td>Returns all the schedules</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/schedule</td>
    <td>Adds the schedules</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/submitPapers</td>
    <td>Returns all the papers that have been submitted</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/submitPapers</td>
    <td>Adds new paper</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/users</td>
    <td>Returns all the users</td>
  </tr>
</table>

## Wireframes
<div style="display: flex;" align="center">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/bf345eb9-30ef-4147-84fc-dc6a0365f936" alt="image" width="400" height="300">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/3d1a723a-aed1-4c13-b4cf-27302a525809" alt="image" width="400" height="300">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/78547774-bd87-4326-a240-a987a0d35dcd" alt="image" width="400" height="300">
</div>

## UI
<div style="display: flex;" align="center">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/00b3c474-7c1b-4c1b-8686-509d023df36b" alt="image" width="207" height="846">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/73263a5c-da03-4e98-b00c-c5ec111da1da" alt="image" width="512" height="595">
</div>
<br>

<div style="display: flex;" align="center">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/29af059b-2f6d-467d-81af-d1d88022fe37" alt="image" width="207" height="846">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/a65879d9-8d97-4635-afa8-15f711454b57" alt="image" width="256" height="618">
</div>
<br>

<div style="display: flex;" align="center">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/09644308-e6ea-49ee-a702-b86c8171830c" alt="image" width="207" height="846">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/5ccdd2b6-26e0-46fd-82d4-23fecfa31ea3" alt="image" width="512" height="610">
</div>
