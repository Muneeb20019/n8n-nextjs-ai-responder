# AI-Powered n8n Contact Automation

An end-to-end system that captures website inquiries, processes them via n8n, and engages users with AI-generated responses.

### 🚀 Tech Stack
- **Frontend:** Next.js (React) hosted on Vercel.
- **Automation:** n8n Workflow.
- **AI Model:** DeepSeek-V3 via OpenRouter API.
- **Lead Storage:** Google Sheets API.
- **Email Service:** SMTP (Mailtrap for testing).

### 🧠 Key Decisions
- **JavaScript Code Node:** Instead of using standard date nodes, I used a custom JavaScript Code node in n8n to handle the IST timezone conversion. This ensures the 2-minute follow-up reflects the exact execution time in the `Asia/Kolkata` zone.
- **Webhook Security:** Used Vercel's Environment Variables (`NEXT_PUBLIC_N8N_WEBHOOK_URL`) to keep the automation endpoint secure.
- **Mailtrap Sandbox:** Used for SMTP testing to demonstrate HTML email formatting without risk of spamming real addresses.
