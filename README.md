[![Software License](https://img.shields.io/badge/Code_License-MIT-blue.svg)](LICENSE)
[![Content License](https://img.shields.io/badge/Content_License-CC_BY_4.0-green.svg)](LICENSE-CONTENT)
[![Digital Public Goods](https://img.shields.io/badge/DPG-Standard_Compliant-orange.svg)](https://digitalpublicgoods.net/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline_First-brightgreen.svg)](#technical-architecture)

The *Roothub Digiverse* is an open-source, transmedia EdTech ecosystem designed to bridge the digital divide for children aged 6–14 across low-resource and low-bandwidth environments in Sub-Saharan Africa. 

By unifying physical comic workbooks (The Digital Adventures of Toyo and Boro), broadcast media (DigiKidz with Uncle Francis), and an offline-first Progressive Web App (PWA) with edge-based Machine Learning, the Digiverse delivers age-appropriate digital citizenship, AI literacy, and computational thinking without requiring continuous internet access.

---

## 🚀 Key Features

* *📱 Offline-First Progressive Web App:* Full interactive access to comic workbooks, audio modules, and quizzes powered by Service Workers and local IndexedDB storage.
* *🧠 Edge ML Inference (ONNX Runtime):* Runs lightweight client-side decision trees locally to analyze reading speed and comprehension, dynamically adapting prompt difficulty offline.
* *🎙️ Open Multilingual Speech Pipeline:* Automated text-to-speech and NLP translation engine converting audio scripts and character dialogues into regional dialects (e.g., Nigerian Pidgin, Hausa, Igbo).
* *🎨 Generative Co-Creation Studio:* A child-safe, quantized AI module allowing kids to transform hand-drawn sketches or text prompts into rendered Toyo and Boro comic panels.
* *🔒 Privacy-Preserving Analytics:* Anonymized telemetry sync using differential privacy to track aggregate regional digital literacy gains without capturing Personally Identifiable Information (PII).

---

## 🏗️ Technical Architecture


+-----------------------------------------------------------------------------------+
|                            CLIENT & APPLICATION LAYER                             |
|  [PWA / Mobile Web Engine]   [SMS / USSD Quiz Fallback]  [Radio Broadcast Audio]  |
+-----------------------------------------------------------------------------------+
|
v
+-----------------------------------------------------------------------------------+
|                        OFFLINE-FIRST EDGE & AI ENGINE                             |
|  • Service Workers & Cache Storage      • ONNX Runtime Web (Client ML Inference) |
|  • Local SQLite / IndexedDB Database    • Edge NLP & Multilingual Voice Pipeline  |
+-----------------------------------------------------------------------------------+
|
v (Sync when connection detected)
+-----------------------------------------------------------------------------------+
|                        CENTRAL API & TELEMETRY GATEWAY                            |
|  • Node.js / FastAPI Gateway            • Anonymized Analytics Engine             |
|  • Content Delivery Pipeline            • Differential Privacy Data Aggregator    |
+-----------------------------------------------------------------------------------+

---

## 📂 Repository Directory Structure

```dir
roothub-digiverse/
├── .github/                  # CI/CD workflows and issue templates
├── assets/                   # Open-licensed media assets (CC BY 4.0)
│   ├── comics/               # PDFs and vector assets for Toyo & Boro
│   ├── audio/                # DigiKidz radio episode masters and scripts
│   └── branding/             # Character design sheets and logos
├── docs/                     # Architecture diagrams and API specifications
├── public/                   # Static PWA assets, icons, and manifest.json
├── src/                      # Source code
│   ├── components/           # UI components (Comic Reader, Quiz Engine, AI Studio)
│   ├── ai/                   # ONNX Runtime models and local inference scripts
│   ├── service-workers/      # Offline caching and sync handlers
│   └── utils/                # Anonymized telemetry and encryption helpers
├── LICENSE                   # Software License (MIT)
├── LICENSE-CONTENT           # Content License (CC BY 4.0)
├── package.json              # Dependencies and build scripts
└── README.md                 # Project documentation

⚡ Quickstart & Local Setup
Prerequisites
 * Node.js: v18.0.0 or higher
 * npm: v9.0.0 or higher
Installation
 * Clone the repository:
   git clone [https://github.com/roothub/roothub-digiverse.git](https://github.com/roothub/roothub-digiverse.git)
cd roothub-digiverse

 * Install dependencies:
   npm install

 * Launch the development server:
   npm run dev

   Open http://localhost:3000 in your browser to inspect the application.
 * Build for production & test PWA offline capabilities:
   npm run build
npm run preview

🌐 Open Source & Digital Public Goods (DPG) Strategy
The Roothub Digiverse is engineered as a Digital Public Good to eliminate vendor lock-in and foster global community adaptation.
 * Software Codebase: Released under the MIT License.
 * Media Assets & Curricula: All comics, character designs, broadcast audio files, and lesson plans are distributed under Creative Commons Attribution 4.0 International (CC BY 4.0).
 * Child Safety & Ethics: Compliant with UNICEF’s Policy on Personal Data Protection. No personal data, location traces, or real names are collected or transmitted.
📅 12-Month Technical Roadmap
| Phase | Timeline | Milestone Deliverables |
|---|---|---|
| Phase 1 | Q1 2027 | Public repository setup, offline PWA refactoring, edge ML ONNX integration. |
| Phase 2 | Q2 2027 | Multilingual voice pipeline release, child-safe AI Co-Creation Studio deployment. |
| Phase 3 | Q3 2027 | Field pilot deployment (1,000+ active learners), radio broadcast integration. |
| Phase 4 | Q4 2027 | M&E data analysis, open dataset publication on Hugging Face, full DPG registry filing. |
🤝 Contributing
We welcome contributions from software developers, animators, educators, and language translators!
 * Fork the repository.
 * Create a feature branch (git checkout -b feature/AmazingFeature).
 * Commit your changes (git commit -m 'Add some AmazingFeature').
 * Push to the branch (git push origin feature/AmazingFeature).
 * Open a Pull Request following our Contribution Guidelines.
📄 License & Attribution
 * Software: Developed by The RootHub Accelerator Systems and released under the MIT License.
 * Creative Intellectual Property: The Digital Adventures of Toyo and Boro and DigiKidz with Uncle Francis are created by Francis Onuk and licensed under CC BY 4.0.

