🧪 Noveli QA Tests

Automated end-to-end and API test suite for Noveli.app
 built with Cypress
.
This repository ensures the reliability of Noveli’s key user flows — from homepage access to account signup, authentication, project creation, and character generation.

📁 Project Structure
cypress/
├── e2e/
│   ├── homepage.cy.js               # Tests homepage load and navigation
│   ├── auth/
│   │   └── protected-routes.cy.js   # Tests access to protected pages after login
│   └── character-creation.cy.js     # Tests project & character creation via API
├── support/
│   └── commands.js                  # Custom Cypress commands (login, setup, etc.)
├── fixtures/
│   └── (optional test data)
└── cypress.config.js

⚙️ Setup
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/noveli-qa-tests.git
cd noveli-qa-tests

2. Install dependencies
npm install

3. Create the environment file

Create a file named cypress.env.json at the root of the repo (this file is not committed):

{
  "username": "your_test_username",
  "password": "your_test_password"
}


⚠️ Never share or commit real credentials.
This file is ignored automatically via .gitignore.

🧩 Running Tests
Run interactively (with UI)
npx cypress open

Run headless (CLI / CI)
npx cypress run


Cypress will launch all tests under cypress/e2e/.

🔒 Environment & Secrets

Sensitive data like credentials are stored securely in environment files.

File	Purpose	Committed?
.gitignore	Tells Git which files to ignore	✅ Yes
cypress.env.json	Stores local test credentials	❌ No
.env.example	Template for teammates	✅ Yes

Example .env.example (optional to include in your repo):

{
  "username": "example_username",
  "password": "example_password"
}

🚀 GitHub Actions CI Setup

To automate your Cypress tests on each push or pull request, create:

.github/workflows/cypress.yml

name: Cypress Tests

on:
  push:
    branches: [ main, dev ]
  pull_request:
    branches: [ main, dev ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        run: npx cypress run
        env:
          CYPRESS_username: ${{ secrets.CYPRESS_username }}
          CYPRESS_password: ${{ secrets.CYPRESS_password }}


Then go to GitHub → Settings → Secrets and variables → Actions and add:

CYPRESS_username
CYPRESS_password

🧪 Included Tests
File	Description
homepage.cy.js	Ensures the homepage loads and navigation bar exists
auth/protected-routes.cy.js	Confirms logged-in users can access the dashboard
character-creation.cy.js	Verifies test project and character creation via API
signup-flow.cy.js	Checks signup form validation and email verification messages
🧠 Tips

Use cy.session() to cache login sessions for faster test runs.

Reuse helpers from commands.js to keep tests clean and modular.

Check the Cypress Dashboard (if connected) for visual runs and video playback.

👤 Author

Zakaria Boumarouane
QA Engineer & AI Product Builder — Noveli.app

📧 z.boumarouane@gmail.com

🧾 License

This project is licensed under the MIT License — see the LICENSE
 file for details.
