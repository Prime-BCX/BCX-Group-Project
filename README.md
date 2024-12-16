BCX 100-Day Challenge - App README
Welcome to the BCX 100-Day Challenge App! This application supports participants through their transformative 100-day journey, focusing on building and maintaining healthy habits. Below you'll find a summary of the technologies used, nonfunctional requirements, assumptions, and additional stretch goals for the app.

Technologies
The BCX 100-Day Challenge app is built with the following technologies:

Node.js: The backend server environment for building scalable and efficient applications.
Express: A web framework for Node.js, used to create the app’s API routes and manage HTTP requests.
React: A JavaScript library for building the user interface, ensuring a responsive and dynamic frontend experience.
PostgreSQL: A powerful, open-source relational database to store user data, progress, journal entries, and other necessary app information.
Heroku: Cloud platform used for deploying and hosting the application, ensuring scalability and easy management.
AWS S3 (Stretch Goal): For storing images and videos uploaded by users, offering better scalability and reliability in media storage.
Nonfunctional Requirements
Progression Logic: Users cannot skip steps; progression through the 100-day challenge is strictly linear. Each user must complete the previous habit before progressing to the next.

Uploaded Photos Validation: Uploaded photos will have basic validations in place to ensure compatibility (e.g., valid file format and size). Invalid uploads will be rejected with a user-friendly error message.

Notifications:

Notifications will be auto-generated based on user activity, ensuring that users are prompted to stay on track.
Notifications will be sent through in-app alerts.
Users can configure the timing of notifications but will not be able to disable them completely.
Progress Reset: If a user’s progress resets (due to missing a habit or failing multiple times), their previous data (such as journal entries and photos) will remain accessible.

Failure Handling: If a user fails a habit step three times, they will receive clear guidance on how to reset their progress, along with motivational messaging to help them stay encouraged and prevent discouragement.

Assumptions
Linear Progression: Users must complete each step in order, and they cannot skip any steps. This ensures that progress is gradual, supporting the building of sustainable habits.

User Data Persistence: Users’ previous data, including journal entries and uploaded photos, will be stored persistently even if their progress resets.

In-App Notifications: The app will automatically generate notifications based on the user’s activities, reminding them of their next steps or upcoming tasks. These notifications can be customized in terms of timing but cannot be turned off entirely.

Stretch Goals
While the current implementation focuses on core functionality, the following features are planned for future releases:

AWS S3 Integration for Media: In the future, media uploads (such as images and videos) will be handled by AWS S3. This provides better scalability and faster delivery of media to the user interface.

Progress Day 100 Animation: On completion of the 100-day challenge, users will see a celebratory animation with a congratulatory message and an option to share their achievement on social media.

Interactive FAQ: An FAQ section will be integrated into the app, with a link to an external website for additional support and information related to the BCX 100-Day Challenge.

Sweet Notes (Pop-up Notifications): A pop-up feature for motivational notes that users can receive during their journey. These notes will be designed to inspire and encourage participants.

Alerts for Notifications: Users will receive alerts when important notifications are generated, helping them stay on track without missing any critical reminders.

Getting Started
To start the BCX 100-Day Challenge, clone or fork this repository, and follow the instructions below to get the app up and running:

1. Clone the Repository
bash
Copy code
git clone https://github.com/your-repo/bcx-challenge.git
cd bcx-challenge
2. Install Dependencies
For the backend (Node/Express):

bash
Copy code
cd server
npm install
For the frontend (React):

bash
Copy code
cd client
npm install
3. Environment Setup
Make sure to create an .env file in the root of your project with the following variables:

DATABASE_URL: Your PostgreSQL database connection string.
JWT_SECRET: A secret key for signing JWT tokens.
AWS_S3_BUCKET: (Optional) Your AWS S3 bucket for media uploads.
HEROKU_APP_URL: The URL for your Heroku deployment (if applicable).
4. Run the Application
To run the backend server locally:

bash
Copy code
cd server
npm run dev
To run the frontend (React) development server:

bash
Copy code
cd client
npm start
The app will be available at http://localhost:3000 by default.

Contributing
We welcome contributions to the BCX 100-Day Challenge app! If you have any ideas, bug fixes, or improvements, please submit a pull request.

Steps for contributing:
Fork the repository.
Create a feature branch.
Commit your changes.
Push to your fork and create a pull request.
Support
For questions, bug reports, or feature requests, please open an issue in the GitHub repository, and we will get back to you as soon as possible.

Thank you for being a part of the BCX 100-Day Challenge! We’re excited to see you on your transformative journey.

Let’s build, grow, and thrive—together!
