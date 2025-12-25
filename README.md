🤖 n8n + Next.js: AI-Powered Contact Automation 🚀
A sophisticated end-to-end automation system that bridges a modern Next.js frontend with an n8n orchestration backend. This project handles lead capture, persistent storage, AI-driven communication, and time-sensitive follow-ups.
📸 Workflow Preview
![alt text](https://github.com/Muneeb2019/n8n-nextjs-ai-responder/blob/main/public/workflow-screenshot.png?raw=true)

(Note: Upload your screenshot to the public folder in GitHub and update this link to see the image live!)
✨ Features
🌐 Modern Frontend: Responsive contact form built with Next.js 14 and Tailwind CSS.
🔐 Secure Integration: Communication via Webhooks with Environment Variables to protect sensitive API endpoints.
📊 Persistent Storage: Automated logging of every lead into Google Sheets for CRM purposes.
🧠 AI-Driven Replies: Real-time professional response generation using DeepSeek-V3 via the OpenRouter API.
✉️ Dual-Phase Emailing:
Phase 1: Immediate AI-generated HTML email.
Phase 2: A 2-minute delayed follow-up.
🕒 Dynamic Timezone Logic: Custom JavaScript implementation to calculate and format the current time in IST (Asia/Kolkata) at the exact moment of delivery.
🚀 Tech Stack
Frontend: Next.js (React)
Deployment: Vercel
Automation: n8n
AI Model: DeepSeek-V3 (via OpenRouter)
Database: Google Sheets
Email Protocol: SMTP (Tested via Mailtrap)
Logic: JavaScript (Node.js)
⚙️ How It Works
Submission: A user submits their Name, Email, and Message via the Next.js form.
Trigger: The data is sent as a POST request to the n8n Webhook.
Logging: n8n immediately appends the lead details to a Google Sheet.
Inference: The message is sent to DeepSeek AI to generate a polite, professional 2-sentence reply.
Engagement: An SMTP node sends the AI's reply to the user in a styled HTML format.
Delay: The system enters a 2-minute "Wait" state.
Custom Code: A JavaScript node executes to calculate the dynamic time in IST.
Follow-up: A second email is sent containing the dynamic timestamp, fulfilling the dynamic time requirement.
🛠️ Setup and Installation
Prerequisites
An n8n account (Cloud or Desktop).
A Vercel account.
An OpenRouter API Key.
Mailtrap (or any SMTP provider) credentials.
1. Frontend Setup (Vercel)
Clone this repository.
Deploy to Vercel.
Add the Environment Variable:
NEXT_PUBLIC_N8N_WEBHOOK_URL = Your_n8n_Production_Webhook_URL
2. n8n Workflow Setup
Import the n8n_workflow_export.json file provided in this repo.
Configure Credentials:
Google Sheets: Connect your Google account.
HTTP Request: Add your OpenRouter API Key in the Header (Authorization: Bearer YOUR_KEY).
SMTP: Enter your Mailtrap Host, Port, User, and Password.
Activate: Toggle the workflow to Active.
✍️ Author
Muneeb Ali Khan
GitHub: @Muneeb2019
LinkedIn: Muneeb Ali Khan
Live Demo: Vercel Deployment
