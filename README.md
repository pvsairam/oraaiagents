# Oracle Fusion AI Agent Studio Quiz Application

A complete, single-page quiz application designed for Oracle Fusion AI Agent Studio certification preparation. Features a clean Oracle Redwood-inspired design with instant feedback, detailed review, and admin capabilities.

## 🎯 Features

- **68 Oracle Fusion AI Agent Studio Questions** - Comprehensive question bank covering all topics
- **Instant Feedback Toggle** - Choose to see answers immediately or at quiz completion
- **68% Pass Mark** - Official certification passing threshold with pass/fail banners
- **Detailed Review** - Complete answer review with source citations for every question
- **Admin Mode** - Add custom questions with localStorage persistence
- **Oracle Redwood Design** - Clean, professional aesthetic with #C74634 red accents
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile

## 🚀 Quick Start

### Instant Use (Recommended)

Simply open the standalone HTML file in your browser:

1. Navigate to project directory
2. Double-click `index-standalone.html` OR right-click → Open With → Browser
3. Start taking the quiz!

No installation, no build process, no dependencies required!

### Development Mode

If you want to modify the React source code:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deploy to Vercel

Deploy your quiz application to Vercel for free hosting and share it with students!

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Oracle Fusion Quiz App"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/oracle-fusion-quiz.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects the configuration from `vercel.json`
   - Click "Deploy"
   - Your quiz will be live at `https://your-project.vercel.app`

### Method 2: Direct Deployment via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Method 3: Deploy Standalone HTML

If you prefer to use the standalone version:

1. Create a new folder with just `index-standalone.html`
2. Rename it to `index.html`
3. Deploy using Vercel CLI or drag-and-drop on Vercel dashboard

**Your quiz will be live and accessible to students worldwide!** 🌍

## 📁 Project Structure

```
oracle-fusion-quiz/
├── index-standalone.html      # ✅ Complete app - open directly in browser
├── src/
│   ├── App.jsx                # Main React component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Tailwind imports
│   └── data/
│       └── questions.js       # Question database (68 questions)
├── vercel.json                # Vercel deployment config
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎮 How to Use

### Dashboard
- View total questions and passing score (68%)
- Click "Start Quiz" to begin
- Access "Admin Mode" to add questions

### Taking the Quiz
- **Instant Feedback ON**: See correct/incorrect answers immediately with source citations
- **Instant Feedback OFF**: Review all answers at quiz completion
- Use Previous/Next buttons to navigate
- Progress bar shows your position in the quiz

### Results
- See your score with pass/fail determination
- Review all questions with:
  - Your selected answer (marked correct ✓ or incorrect ✗)
  - Correct answer (if you got it wrong)
  - Source citation for reference
- Click "Retake Quiz" to try again

### Admin Mode
- Add new questions to the quiz
- Questions persist via localStorage
- Customize your practice experience

## 🛠 Technical Details

- **Frontend**: React 18 (via CDN in standalone, Vite in dev mode)
- **Styling**: Tailwind CSS 3 (via CDN)
- **Storage**: Browser localStorage API
- **Icons**: Custom inline SVG
- **Deployment**: Vercel-ready with automatic configuration
- **No Build Required**: Standalone HTML works out-of-the-box

## 📊 Question Topics Covered

All 68 questions cover essential Oracle Fusion AI Agent Studio topics:
- AI Agent evaluation and monitoring
- Prompt engineering best practices
- Security and access controls  
- Business Object and REST tool configuration
- Testing strategies (offline vs A/B testing)
- Deployment using Guided Journeys
- Topic management and escalation logic
- External integrations and data flow
- Multi-agent orchestration and supervision
- Document tools and semantic search
- Guardrails and Human-in-the-Loop workflows

## 💾 Data Persistence

New questions added via Admin Mode are automatically saved to localStorage and will persist across browser sessions.

## 🎨 Design Philosophy

Built following Oracle Redwood design principles:
- Clean whites and light grays for readability
- Oracle red (#C74634) for primary actions and accents
- Professional, polished appearance
- Intuitive navigation and clear visual hierarchy

## 📝 License

This quiz application is for educational purposes.

## 🙏 Credits

Built with modern web technologies including React, Tailwind CSS, and the Web Storage API.

---

**Ready to ace your Oracle Fusion AI Agent Studio certification? Open `index-standalone.html` and start practicing!** 🚀

