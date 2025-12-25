# 🤖 n8n + Next.js: AI-Powered Contact Automation 🚀

A sophisticated end-to-end automation system that bridges a modern **Next.js** frontend with an **n8n** orchestration backend. This project handles lead capture, persistent storage, AI-driven communication, and time-sensitive follow-ups.

---

## 📸 Workflow Preview
![Workflow Screenshot](workflow-screenshot.png)

> **Note:** Upload your screenshot to the `public` folder in GitHub and name it `workflow-screenshot.png` to see the image live!

---

## ✨ Features
*   **🌐 Modern Frontend:** Responsive contact form built with **Next.js 14** and **Tailwind CSS**.
*   **🔐 Secure Integration:** Communication via Webhooks with **Environment Variables** to protect sensitive API endpoints.
*   **📊 Persistent Storage:** Automated logging of every lead into **Google Sheets** for CRM purposes.
*   **🧠 AI-Driven Replies:** Real-time professional response generation using **DeepSeek-V3** via the **OpenRouter API**.
*   **✉️ Dual-Phase Emailing:** 
    *   **Phase 1:** Immediate AI-generated HTML email.
    *   **Phase 2:** A 2-minute delayed follow-up email.
*   **🕒 Dynamic Timezone Logic:** Custom **JavaScript** implementation to calculate and format the current time in **IST (Asia/Kolkata)** at the exact moment of delivery.

---

## 🚀 Tech Stack
*   **Frontend:** Next.js (React)
*   **Deployment:** Vercel
*   **Automation:** n8n
*   **AI Model:** DeepSeek-V3 (via OpenRouter)
*   **Database:** Google Sheets
*   **Email Protocol:** SMTP (Tested via Mailtrap)
*   **Logic:** JavaScript (Node.js)

---

## 🛠️ Setup and Installation

### 1. Frontend Setup (Vercel)
1. Clone this repository.
2. Deploy to Vercel.
3. Add the Environment Variable: `NEXT_PUBLIC_N8N_WEBHOOK_URL` = `Your_n8n_Production_Webhook_URL`

### 2. n8n Workflow Setup
1. Import the `.json` workflow file provided in this repo.
2. **Configure Credentials:** Google Sheets, OpenRouter (Header Auth), and SMTP (Mailtrap).
3. **Activate:** Toggle the workflow to **Active**.

---

## ✍️ Author
**Muneeb Ali Khan**
*   **GitHub:** [@Muneeb2019](https://github.com/Muneeb2019)
*   **LinkedIn:** [Muneeb Ali Khan](https://www.linkedin.com/in/muneeb-ali-khan-2a1675365)
*   **Live Demo:** [Vercel Deployment](https://full-stack-project-rosy.vercel.app)


