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
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/00b3c474-7c1b-4c1b-8686-509d023df36b" alt="image" width="300" height="800">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/73263a5c-da03-4e98-b00c-c5ec111da1da" alt="image" width="500" height="400">
</div>

<div style="display: flex;" align="center">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/29af059b-2f6d-467d-81af-d1d88022fe37" alt="image" width="300" height="800">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/6dfa9167-9a70-492e-a05b-f723ba485d3f" alt="image" width="500" height="400">
</div>

<div style="display: flex;" align="center">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/85a4f0dc-463b-41ee-beea-31e5585ee758" alt="image" width="300" height="800">
  <img src="https://github.com/Salma-Eletreby/ConfPlus-Web/assets/142803990/48266767-259e-4f58-abe2-d7283e560a98" alt="image" width="500" height="400">
</div>
