# Invoice2Tally AI 🧾

**Tired of manually typing invoice data into Tally? Same.**

This is a desktop app I built during my internship that lets you upload invoices, extract data automatically using OCR + AI, review it, and push it straight to Tally — no manual entry, no typos, no headaches.

---

## The Problem It Solves

Accountants and finance teams spend hours every week manually copying invoice details into Tally ERP. Vendor name, GST number, line items, amounts — one invoice at a time. It's tedious, error-prone, and honestly a waste of human time.

Invoice2Tally fixes that. Upload the invoice → AI reads it → you review → it goes to Tally. Done.

---

## What I Built

I was responsible for the **entire frontend** — from scratch, solo. That means:

- 10 screens designed and implemented
- 7 Zustand stores for state management
- 7 API service modules connecting to the backend
- Keyboard shortcuts for power users
- A fully typed codebase in TypeScript

The backend (FastAPI + PaddleOCR + OpenAI) was handled by the rest of the team. My job was to make sure the UI felt fast, clean, and actually usable.

---

## Tech Stack

I didn't just pick random libraries — here's why each one is here:

| What | Why |
|---|---|
| **Tauri 2** | Desktop app without the Electron bloat |
| **React + TypeScript** | Component-driven UI with type safety |
| **Tailwind CSS v4** | Fast, consistent styling without writing custom CSS |
| **shadcn/ui** | Beautiful accessible components I could customize |
| **Zustand** | Lightweight state management — no Redux boilerplate |
| **TanStack Query** | Smart data fetching with caching built in |
| **React Hook Form + Zod** | Forms that validate properly without pain |
| **Recharts** | Clean charts for the dashboard |
| **Sonner** | Toast notifications that don't feel ugly |

---

## Screens

- **Splash** — License check on startup
- **Login** — Auth with remember me
- **Dashboard** — KPIs, charts, recent activity at a glance
- **Upload** — Drag & drop invoices, live OCR progress
- **Review** — Edit extracted data, see AI confidence scores, send to Tally
- **Invoice Preview** — PDF on one side, extracted data on the other
- **History** — Every past invoice with filters, retry, and export
- **Ledger Mapping** — Map vendors to the right Tally ledger accounts
- **Logs** — Full activity and error logs
- **Settings** — App config and preferences

---

## Keyboard Shortcuts

Because clicking is slow.

| Shortcut | Action |
|---|---|
| `Ctrl+U` | Upload |
| `Ctrl+S` | Save |
| `Ctrl+Enter` | Send to Tally |
| `Ctrl+H` | History |
| `Ctrl+F` | Search |
| `Ctrl+,` | Settings |

---

## Honest Note on How I Built This

I used AI (Claude) heavily during development — for generating component code, debugging TypeScript errors, and thinking through architecture. I'm not going to pretend otherwise.

But here's what that actually meant in practice: I had to understand every piece of code well enough to integrate it, debug it when it broke, explain it to my team, and make decisions about when the AI suggestion was wrong. That's a real skill.

If you're a recruiter or developer reading this — I can walk you through any part of this codebase. Ask me anything.

---

## Run It

```bash
npm install
npm run tauri dev
```

Needs the backend running separately.

---

## About Me

I'm a BSc IT (Data Science & Analytics) student in my 5th semester, interning at an AI startup and actively building toward a career in AI/data engineering. This is one of the real projects I've shipped.

*Frontend only · Internship Project · 2025*