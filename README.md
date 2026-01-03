# 🤖 n8n + Next.js: AI-Powered Contact Automation 🚀

![Workflow](https://img.shields.io/badge/Workflow-n8n-EF5B25) ![AI](https://img.shields.io/badge/AI-DeepSeek--V3-412991) ![Storage](https://img.shields.io/badge/Storage-Google%20Sheets-34A853) ![Logic](https://img.shields.io/badge/Logic-JavaScript-F7DF1E)

An enterprise-grade, full-stack automation engine that bridges a modern **Next.js 14** frontend with a robust **n8n** orchestration backend. Designed to handle lead capture, data persistence, AI communication, and localized follow-up logic.

---

## 📸 System Architecture
![n8n Workflow Screenshot](workflow-screenshot.png)

---

## 🎯 Purpose & Problem Solved

### **The Problem**
Small and medium businesses often lose **60% of potential leads** due to slow response times (Lead Decay). Manual data entry into CRMs leads to human error, and inconsistent follow-up schedules result in missed conversion opportunities. 

### **The Solution**
This system provides an **automated, asynchronous pipeline** that:
1.  **Eliminates Latency:** Responds to users instantly using AI.
2.  **Zero Manual Entry:** Automatically logs leads into a centralized database (Google Sheets).
3.  **Human-Like Persistence:** Executes a timed, multi-phase follow-up strategy.
4.  **Local Context:** Uses custom JavaScript logic to deliver timestamps in the user's local timezone (**IST**).

---

## ✨ Key Features

*   **🌐 Modern Lead Capture:** Responsive form built with **Next.js 14** and **Tailwind CSS**.
*   **🧠 Intelligence Engine:** Powered by **DeepSeek-V3** via **OpenRouter** to generate context-aware, professional replies.
*   **✉️ Dual-Phase Engagement:** 
    *   *Phase 1:* Immediate AI response via **SMTP (Mailtrap)**.
    *   *Phase 2:* 2-minute delayed follow-up to simulate human review.
*   **🕒 Dynamic Timezone Logic:** Custom **JavaScript** implementation to calculate and format the current time in **IST (Asia/Kolkata)** at the exact moment of delivery.
*   **📊 CRM Integration:** Real-time data streaming to **Google Sheets API** for persistent lead tracking.
*   **🔐 Production Security:** Secured via **Vercel Environment Variables** and Webhook protection.

---

## 🚀 Technical Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 14 (React, Tailwind CSS) |
| **Hosting** | Vercel (CI/CD via GitHub) |
| **Automation** | n8n Orchestration |
| **AI / LLM** | DeepSeek-V3 (OpenRouter API) |
| **Data / Storage** | Google Sheets API |
| **Logic** | Node.js / JavaScript (n8n Code Node) |
| **Email** | SMTP Protocol (Mailtrap for testing) |

---

## ⚙️ Advanced Implementation Details

### **Scalability & Performance**
Designed to handle thousands of records by utilizing n8n's asynchronous webhook processing. For higher loads, the architecture supports splitting into **Sub-workflows** to prevent memory blowups.

### **Reliability & Idempotency**
The system is built to prevent duplicate processing. By generating a unique `timestamp` at the frontend, the n8n backend can implement check-logic to ensure each lead is only emailed and logged once.

### **Custom JavaScript Logic**
To satisfy strict timezone requirements, I utilized a **JavaScript Code Node** in n8n. This ensures the follow-up time is calculated dynamically using the Luxon library at the exact millisecond of execution, rather than being hardcoded from the initial trigger.

---

## ✍️ Author

**Muneeb Ali Khan**
- **GitHub:** [@Muneeb20019](https://github.com/Muneeb20019)
- **LinkedIn:** [Muneeb Ali Khan](https://www.linkedin.com/in/muneeb-ali-khan-2a1675365)
- **Live Demo:** [Vercel Deployment](https://full-stack-project-rosy.vercel.app)





