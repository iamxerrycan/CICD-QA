# 🚀 Cypress x Jira x Jenkins Integration Project

This project demonstrates a professional-grade **plugin-style CI integration** of:
- ✅ Cypress for end-to-end testing
- 🐞 Jira API for auto bug reporting
- ⚙️ Jenkins (or GitHub Actions) for CI/CD automation

---

## 🧩 Features

- 🧪 Automatically detects failed Cypress tests  
- 🐛 Creates bugs in **Jira** via REST API  
- 📸 (Optional) Attach failure screenshots to bugs  
- 🔧 Easily extendable to Jenkins or GitHub Actions

---

## 🏗️ Project Structure

```
CICD-QA/
├── api/                        # Backend logic
├── cypress/                   # Cypress end-to-end tests
│   ├── e2e/
│   ├── fixtures/
│   ├── plugins/
│   └── support/
├── function/                  # Custom logic to test
├── tests/
│   ├── unit/                  # Jest unit tests
│   ├── integration/          # Combined function/module tests
│   ├── api/                  # API testing (Supertest or Postman export)
│   ├── performance/          # JMeter/k6 test scripts
│   └── visual/               # Percy/Cypress screenshot snapshots
├── test-docs/                # Manual test cases, plans, bug reports
│   ├── test-cases.md
│   ├── bug-reports.md
│   ├── test-plan.md
│   └── test-scenarios.md
├── .github/workflows/        # GitHub Actions CI
├── README.md                 # Project summary
├── jest.config.js
├── cypress.config.js
├── package.json
└── postman_collection.json   # Optional: API tests in Postman format

```
---

## 🧪 Test Execution Proof

✅ Unit Tests (Jest) – Pass  
✅ End-to-End Tests (Cypress) – Pass via GitHub Actions

📺 **Watch Full Cypress Test Run**  
👉 [GitHub CI Logs](https://github.com/iamxerrycan/CICD-QA/actions)

📸 **Screenshot:**
![Test Screenshot](./cypress/screenshots/form.cy.js/test-run.png)

---


---

## 🧪 Test Execution Proof

✅ Unit Tests (Jest) – Pass  
✅ End-to-End Tests (Cypress) – Pass via GitHub Actions

📺 **Watch Cypress CI Test Run Logs**  
👉 [GitHub CI Logs](https://github.com/iamxerrycan/CICD-QA/actions)

📸 **Failure Screenshot Example:**  
![Test Screenshot](./cypress/screenshots/form.cy.js/test-run.png)

---

## 🐞 Jira Bug Reporting Sample

When a test fails, the plugin:

1. Parses failure info from Cypress result
2. Sends POST request to Jira API with:
   - Bug title (from test title)
   - Steps to reproduce
   - Screenshot (optional)

### 🔗 Example Bug (Jira):
```json
{
  "fields": {
    "project": { "key": "QA" },
    "summary": "[BUG] Form validation failed on empty email",
    "description": "Steps: \n1. Leave email empty\n2. Click Submit\nExpected: Error shown\nActual: Form submitted silently.",
    "issuetype": { "name": "Bug" }
  }
}

```

---

## 🐛 Sample Bug Report
ID: BUG-001
Module: Form Validation
Severity: High
Steps:

Leave email blank

Submit the form

Expected: Error message
Actual: Form submitted silently

---

## 📦 Tech Stack
Cypress (E2E Automation)

Jest (Unit Testing)

Node.js + Express

GitHub Actions / Jenkins

Jira REST API

---

## ✅ Phase-Wise QA Roadmap (Production Style)

We'll go in this sequence – each with concept + practical:

✅ Manual Planning → Test Plan, Test Scenarios, Test Cases, Bug Reports

✅ Unit Testing with Jest → Business Logic Testing

✅ API Testing with Jest + Supertest

✅ Integration Testing

✅ E2E Testing with Cypress

✅ Visual Testing (Percy, optional)

✅ Performance Testing (JMeter intro)

✅ CI/CD (GitHub Actions)

✅ Bonus: Test Coverage, Report Generation, Jira Integration

