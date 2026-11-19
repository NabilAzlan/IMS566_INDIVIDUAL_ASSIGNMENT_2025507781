# Apex Motorsport Dashboard

## Project Description
Apex Motorsport Dashboard is a web-based motorsport driver management interface developed for the IMS566 individual assignment.

The website provides a simple platform for viewing racing performance, race results, championship standings and driver information.

## Features

- **Login Page:** Simulated login authentication with invalid credential feedback.
- **Dashboard:** Displays racing statistics and championship performance through a chart.
- **Race Results:** Shows race history, finishing positions and points earned.
- **Championship Standings:** Displays driver rankings, teams, wins and championship points.
- **Driver Profile:** Presents driver information and racing statistics.
- **Responsive Navigation:** Allows users to navigate between the different pages.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Chart.js

## Demo Login Credentials

Use the following credentials to access the dashboard:

| Field | Credentials |
|---|---|
| Username | admin |
| Password | racing123 |

## How to Run the Project Locally

1. Install and open Laragon.
2. Start Apache.
3. Place the project folder inside the Laragon `www` directory.
4. Open Google Chrome.
5. Visit `http://localhost/apex-motorsport-dashboard/`.
6. Click **SIGN IN**; the demo login credentials are prefilled on the login page.

## Project Structure

```text
apex-motorsport-dashboard/
│
├── css/
│   └── style.css
│
├── js/
│   ├── auth.js
│   └── dashboard.js
│
├── index.html
├── dashboard.html
├── results.html
├── standings.html
├── profile.html
└── README.md
```

## Notes

This project uses sample motorsport data for demonstration and educational purposes. The login system uses simulated authentication and does not connect to a database.

## Author
IMS566 Individual Assignment

Apex Motorsport Dashboard