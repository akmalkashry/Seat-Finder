<img width="1334" height="564" alt="Image" src="https://github.com/user-attachments/assets/b9008c78-2409-45f2-80f5-0d0195574e10" />

URL: _https://shorturl.at/5tpET_
Form: _https://forms.gle/Q8bis7tN3iQxjbbP6_
Sheet: _https://docs.google.com/spreadsheets/d/1m0lpFxgCXQVAEqPpaSY1wsqFcEvyYqcy8jzif6OyxKU/edit?usp=sharing_
# 🎟️ Seat-Finder — Wedding Guest Table Lookup System

Seat-Finder is a custom-built web application designed for my wedding event to help guests easily find their assigned table number by searching their name.

The system is powered by Google Forms, Google Sheets, and Google Apps Script, creating a simple but effective automated guest lookup experience.

---

## 🧭 Project Overview

This project was built to improve guest experience during wedding check-in by eliminating confusion around table arrangements.

Instead of manually checking printed lists, guests can:
> Enter their name → Instantly view their assigned table number

Only table numbers are assigned (no fixed seats), ensuring a fair and systematic seating arrangement.

---

## 🎯 Problem Statement

During large events such as weddings:

- Guests often struggle to find their table
- Staff must manually guide guests one by one
- Printed seating lists are difficult to navigate
- Lack of real-time access to seating information

---

## 💡 Solution

Seat-Finder solves this by building a lightweight automated lookup system:

- Guests submit RSVP via Google Form  
- Data is stored in Google Sheets  
- A structured sheet is created to extract only relevant fields (Name + Table)  
- Table assignment is manually handled to ensure fairness and organization  
- Google Apps Script reads the processed data  
- Guests search their name in a web interface to find their table instantly  

---

## 🏗️ System Workflow

```text
Google Form (RSVP)
        ↓
Google Sheets (Raw Responses)
        ↓
Processed Sheet (Name + Manually Assigned Table)
        ↓
Google Apps Script (Data Reader)
        ↓
Web App (Seat Finder UI)
        ↓
Guest sees Table Number
