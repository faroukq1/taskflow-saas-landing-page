# TaskFlow SaaS Retheme TODO

This file documents the planned changes to retheme the Brainwave AI chatbot landing page into a TaskFlow SaaS project management tool. Use this as a checkpoint to track progress and restore work in future conversations.

## Overview

- Original project: AI chatbot app landing page.
- New theme: SaaS for project management (TaskFlow), focusing on team collaboration, task tracking, and productivity.

## TODO List of Changes

### 1. Package.json

- [x] Change `"name"` from `"brainwave"` to `"taskflow-saas-landing-page"`.

### 2. Constants/Index.js

- [x] Update `navigation` array:
  - Change "How to use" to "How It Works".
  - Change "New account" to "Sign Up".
  - Change "Sign in" to "Log In".
- [ ] Update `brainwaveServices` array to: `["Task Tracking", "Team Collaboration", "Project Analytics"]`.
- [x] Update `roadmap` array with new project management milestones:
  - Item 0: "Kanban Boards" - "Visualize and manage workflows with drag-and-drop boards for better task organization." (June 2023, done).
  - Item 1: "Time Tracking" - "Track time spent on tasks and projects to improve productivity and billing." (July 2023, progress).
  - Item 2: "Custom Workflows" - "Allow teams to create custom automation rules for repetitive tasks." (August 2023, done).
  - Item 3: "Integrations" - "Connect with tools like Slack, Jira, and Google Workspace for seamless workflows." (September 2023, progress).
- [x] Update `collabText` to: "With intuitive collaboration tools and enterprise-grade security, TaskFlow is the perfect solution for teams aiming to boost productivity."
- [x] Update `collabContent` titles to: "Seamless Integrations", "Automated Workflows", "Enterprise Security".
- [x] Update `pricing` array:
  - Basic: Description "Essential task management for small teams", Features: ["Unlimited tasks and projects", "Basic reporting", "Email support"].
  - Premium: Description "Advanced collaboration for growing teams", Price "19.99", Features: ["All Basic features", "Advanced analytics", "Priority support", "API access"].
  - Enterprise: Description "Custom solutions for large organizations", Price "Contact us", Features: ["All Premium features", "Dedicated account manager", "Custom integrations", "On-premise deployment"].
- [x] Update `benefits` array with 6 new items focused on project management (titles and texts as listed in previous summary).
- [x] Optionally update `heroIcons` and `notificationImages` to project-themed icons.

### 3. Components

- [x] Hero.jsx:
  - Change `<h1>` title to "Streamline Your Projects with TaskFlow".
  - Update `<p>` description to "Unleash team productivity with TaskFlow, the ultimate SaaS for project management and collaboration."
  - Replace `robot` image with project management-themed graphic.
  - Update Notification text from "Code generation" to "Task Assignment".
- [x] Benefits.jsx:
  - Change Heading title to "Manage Projects Smarter with TaskFlow".
- [x] Services.jsx:
  - Change Heading title to "Project Management Made Easy." and text to "TaskFlow empowers teams to collaborate and deliver faster."
  - Update `<h4>` to "Smartest Workflow" and `<p>` to "TaskFlow unlocks the potential of efficient project management."
- [x] Pricing.jsx:
  - Change Heading tag to "Get started with TaskFlow" and title to "Flexible Plans for Every Team".
- [x] Roadmap.jsx:
  - Change Heading title to "What We're Building Next".
- [x] Scan and update any remaining "Brainwave" mentions in Footer, Header, etc., to "TaskFlow".
  - Update button texts like "Get started" to "Start Free Trial".

### 4. Assets

- [ ] Replace `robot` in Hero with project dashboard image.
- [ ] Replace `service1` in Services with task board screenshot.
- [ ] Update icons in `brainwaveServicesIcons` to checklist, calendar, analytics.
- [ ] Update Benefits card SVGs to project-themed designs.

### 5. Other Files

- [ ] Index.html: Update `<title>` to "TaskFlow - SaaS Project Management".
- [ ] README.md: Rewrite to describe TaskFlow as a SaaS for project management, with setup instructions.

## Validation Steps

- [ ] After changes, run `npm run dev` to preview.
- [ ] Run `npm run build` and `npm run lint` to check for errors.
- [ ] Test responsiveness and links.

## Notes

- Prioritize data changes in `constants/index.js` first, as they feed into components.
- If new assets are needed, source or create project management-themed images/icons.
- This retheme keeps the existing layout/structure intact for efficiency.
