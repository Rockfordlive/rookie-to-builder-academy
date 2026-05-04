const navItems = [
  ["dashboard", "Dashboard", "D"],
  ["learning-path", "Learning Path", "L"],
  ["claude-foundations", "Claude Foundations", "AI"],
  ["app-anatomy", "Files & App Anatomy", "F"],
  ["vscode", "VS Code Basics", "V"],
  ["github", "GitHub From Zero", "G"],
  ["agents", "Agents vs Automations", "A"],
  ["agent-library", "20 Agent Ideas", "20"],
  ["microsoft", "Azure + Copilot Studio", "M"],
  ["claude-linkedin", "Claude Code for LinkedIn", "C"],
  ["setup", "Claude Setup", "S"],
  ["deploy", "Deploy Apps", "P"],
  ["recipes", "Project Recipes", "R"],
  ["glossary", "Glossary + Safety", "T"],
  ["quiz", "Quick Check", "Q"],
  ["sources", "Sources", "U"],
];

const modules = [
  {
    title: "Foundations: how app building actually works",
    summary: "Understand folders, files, apps, terminals, APIs, deployment, and why AI coding tools need context.",
    lessons: ["A folder is your project home", "An app is files plus behavior", "Deployment means making it available to others"],
  },
  {
    title: "Claude foundations before coding",
    summary: "Understand Claude, ChatGPT, Gemini, LLMs, context windows, tokens, Projects, Artifacts, Connectors, and smart tool choice before opening VS Code.",
    lessons: ["Claude is strongest for deep reasoning and long context", "Projects and handovers give AI practical memory", "Artifacts and prompts help you build before code"],
  },
  {
    title: "Files and app anatomy",
    summary: "Learn what folders, file extensions, JSON, CSS, JavaScript, Python, scripts, and project structure mean before opening VS Code.",
    lessons: ["A folder is the workspace boundary", "File extensions tell you each file's job", "Agents can read and create files only where you give access"],
  },
  {
    title: "GitHub from zero",
    summary: "Learn repositories, branches, commits, pull requests, merges, and GitHub Pages without developer jargon.",
    lessons: ["Repository = project with memory", "Commit = saved checkpoint", "Pull request = review before change becomes official"],
  },
  {
    title: "Claude app, Claude Code, Codex, VS Code, and Copilot",
    summary: "Know which AI surface to choose before you start so you do not overcomplicate the work.",
    lessons: ["Chat tools think with you", "Coding agents work on files", "VS Code is the workbench"],
  },
  {
    title: "Company setup and data access",
    summary: "Translate LNKDPROD, GitHub access, SSH, Captain, MCPs, and approved data connections into plain English.",
    lessons: ["Identity proves who you are", "SSH proves your computer is trusted", "MCPs connect AI to approved tools"],
  },
  {
    title: "Agents vs prompts vs automations",
    summary: "Decide when a task deserves an agent and when a simple prompt or scheduled workflow is enough.",
    lessons: ["Prompts are manual", "Automations are predictable", "Agents adapt with tools and judgment"],
  },
  {
    title: "Build apps and dashboards",
    summary: "Create offline tools, CSV dashboards, Google Sheets-backed apps, and internal pages in small safe steps.",
    lessons: ["Start with fake data", "Test locally", "Publish only when data and access are safe"],
  },
  {
    title: "Azure and Copilot Studio for support work",
    summary: "Learn when Microsoft low-code agent tools are better than a code-backed app.",
    lessons: ["Copilot Studio builds business agents", "Agent flows automate work", "Azure AI Foundry is for custom hosted AI"],
  },
  {
    title: "Safety, review, and sharing",
    summary: "Keep humans in control when tools can read data, change files, send messages, or affect customers.",
    lessons: ["Read-only first", "Human approval for risky actions", "Verify current company access and policies"],
  },
];

const toolRecommendations = {
  brainstorm: ["Use Claude app or ChatGPT", "Best when you need thinking, writing, planning, summaries, or help turning a fuzzy idea into a clear project brief."],
  "local-build": ["Use Claude Code or Codex locally", "Best when the AI should read and edit files in a project folder, run checks, and help you build an app step by step."],
  "repo-agent": ["Use Codex cloud or Claude Code web/desktop where approved", "Best when the task lives in a GitHub repo and you want an agent to work in the background, run tests, and propose a pull request."],
  "company-data": ["Use approved Captain/MCP or company connectors", "Best when the AI needs Google Docs, Glean, Jira, Figma, Trino, or internal systems. Do not use random external APIs for private company data."],
  microsoft: ["Use Copilot Studio or Microsoft 365 Copilot agents", "Best when the agent should live in Teams, Microsoft 365, SharePoint, or a low-code Microsoft workflow."],
  workflow: ["Use Power Automate, agent flows, or a scheduled Codex/Claude routine", "Best when the steps are predictable and the value comes from repetition, not judgment."],
};

const agentRecommendations = {
  "one-time": ["Use a prompt", "Ask the AI once. Good for drafting, explaining, summarizing, or planning."],
  repeatable: ["Use an automation or agent flow", "If the steps are always the same, make the repeatable process run on a trigger or schedule."],
  judgment: ["Use an agent", "Agents are worth it when the work requires searching, choosing tools, handling exceptions, or deciding what to do next."],
  "sensitive-action": ["Use an agent with human approval", "If the task sends messages, updates records, shares data, deploys, or affects customers, require a human review step."],
};

const anatomyLessons = [
  {
    id: "folder-map",
    label: "Folder map",
    title: "A project folder is the app's home",
    summary: "A project folder is one safe container for one app, dashboard, agent experiment, or learning project. It holds the files, images, notes, settings, and helper scripts that belong together.",
    plain: "Think of a project folder like a binder. The binder has dividers, worksheets, photos, and instructions. Claude Code and Codex work best when you hand them the right binder, not your whole filing cabinet.",
    keyIdeas: [
      "Folder: a container that can hold files and more folders.",
      "Project root: the top folder for one project. In this app, the root is Claude Code and Upskilling.",
      "Subfolder: a smaller folder inside the project, often used for assets, data, docs, scripts, or tests.",
      "File path: the address of a file, such as /Users/.../Claude Code and Upskilling/index.html.",
      "Workspace: the folder an editor or AI agent is currently allowed to see and work inside.",
    ],
    parts: [
      ["Why one folder matters", "It keeps related things together. If you ask AI to build a support tracker, the HTML, styling, behavior, notes, and data examples should live in one project folder so you can find them again."],
      ["What happens when AI creates files", "When Codex or Claude Code works in a folder, new files appear inside that folder unless you ask for another location and permissions allow it."],
      ["What not to open", "Do not casually give an AI your entire Desktop, Documents, or Downloads folder. That gives too much context and makes it harder to tell where changes happened."],
      ["Beginner naming rule", "Use clear names with hyphens: support-dashboard, case-trend-summary, weekly-agent-demo. Clear names help you, teammates, and AI understand the project."],
    ],
    exampleTitle: "Example: this learning app folder",
    tree: [
      "Claude Code and Upskilling/",
      "  index.html                 page structure and course sections",
      "  styles.css                 colors, spacing, layout, mobile rules",
      "  app.js                     navigation, quizzes, tabs, saved progress",
      "  claude-foundations-content.js  imported Claude Foundations lessons",
      "  index Earlier Claude.html  older standalone Claude course source",
      "  Claude Code setup PDFs     source material for setup lessons",
    ],
    watch: "If you ever feel lost, ask: what folder am I in, what files are here, and which file is the main entry point?",
    prompt: "Please explain this project folder like I am brand new. What is the project root, what are the important files, and which file should I open first?",
  },
  {
    id: "file-types",
    label: "File types",
    title: "File extensions tell you what kind of job a file does",
    summary: "The letters after the dot, like .html or .json, are called file extensions. They tell your computer, VS Code, and AI tools how to treat the file.",
    plain: "A file extension is like a label on a box. A box labeled photos is handled differently from a box labeled receipts. Code projects work the same way.",
    keyIdeas: [
      ".html usually describes the content and structure of a web page.",
      ".css usually controls how the page looks.",
      ".js usually controls what the page does in the browser.",
      ".json usually stores structured settings or data.",
      ".py usually contains Python code, often for helper scripts, data work, or a backend.",
    ],
    parts: [
      [".md", "Markdown files are plain-text documents. They are great for README guides, notes, setup instructions, and simple documentation."],
      [".csv", "CSV files are spreadsheet-like data files. They are useful for exports, ticket lists, dashboards, and quick analysis."],
      [".png / .jpg / .svg", "Image files hold screenshots, logos, icons, diagrams, or app assets. SVG is a code-like image format that can scale cleanly."],
      [".env", "Environment files often store secrets or local settings. Treat them carefully. Do not publish API keys or passwords."],
      ["package.json", "In many JavaScript apps, this special JSON file lists project dependencies and common commands like start, build, and test."],
      ["README.md", "This is usually the friendly front door for a project. It explains what the project is, how to run it, and what a new person should know."],
    ],
    exampleTitle: "Common beginner project files",
    tree: [
      "my-support-tool/",
      "  README.md       what this project is",
      "  index.html      the visible page structure",
      "  styles.css      the visual design",
      "  app.js          button clicks, filters, saved state",
      "  data.json       sample support data",
      "  assets/         images and icons",
      "  scripts/        helper recipes run from the terminal",
    ],
    watch: "Changing a file extension can break how the computer reads it. Renaming notes.txt to notes.json does not magically turn the content into valid JSON.",
    prompt: "Please list every file type in this folder and explain what each one is usually responsible for in plain English.",
  },
  {
    id: "json",
    label: "JSON",
    title: "What is JSON?",
    summary: "JSON is a simple format for storing structured data. Apps use it for settings, saved information, API responses, content, and configuration.",
    plain: "JSON is like a form with labeled fields. Instead of a paragraph, it says: ticketId is this, priority is that, tags are these, and needsHumanReview is true.",
    keyIdeas: [
      "Curly braces { } usually mean one object, like one ticket or one user profile.",
      "Square brackets [ ] usually mean a list, like many tickets or many tags.",
      "Keys are labels, like priority or owner.",
      "Values are the actual information, like High, Jamie, 42, true, or a list.",
      "Commas and quotes matter. A missing comma can make JSON unreadable.",
    ],
    parts: [
      ["Where you see JSON", "API responses, app settings, saved progress, package.json, configuration files, exported data, and sometimes AI tool settings."],
      ["Why apps like it", "It is structured enough for computers to read reliably, but still readable enough for humans to inspect."],
      ["What JSON is not", "It is not a spreadsheet, not a document, and not a full programming language. It stores information; code decides what to do with it."],
      ["Common rookie mistake", "JSON usually does not allow comments. If you add a friendly note inside a JSON file, the app may fail unless that tool supports comments specially."],
    ],
    exampleTitle: "Example: a support ticket as JSON",
    tree: [
      "{",
      "  \"ticketId\": \"CASE-123\",",
      "  \"priority\": \"High\",",
      "  \"customerImpact\": \"Login failing for five users\",",
      "  \"tags\": [\"login\", \"incident\", \"urgent\"],",
      "  \"needsHumanReview\": true",
      "}",
    ],
    watch: "Never put private API keys, passwords, or customer-sensitive data into JSON files that will be published to GitHub Pages or shared broadly.",
    prompt: "Please look for JSON files in this project. For each one, explain what data or settings it controls and whether it is safe to edit.",
  },
  {
    id: "css",
    label: "CSS",
    title: "What is CSS?",
    summary: "CSS is the visual instruction sheet for a web page. It controls color, spacing, borders, layout, fonts, mobile behavior, and many hover or focus states.",
    plain: "HTML says what is on the page. CSS says how it should look. JavaScript says what should happen when a user interacts with it.",
    keyIdeas: [
      "Selector: the part that says which element you are styling, like .primary-button.",
      "Property: the visual thing being changed, like background, color, padding, or border.",
      "Value: the chosen setting, like #0a66c2, white, 16px, or grid.",
      "Cascade: later or more specific rules can override earlier rules.",
      "Responsive CSS: rules that make the page readable on desktop, tablet, and phone screens.",
    ],
    parts: [
      ["Why CSS matters", "Without CSS, many web apps look like plain documents. CSS turns the same content into a polished course, dashboard, form, or tool."],
      ["Why changes can surprise you", "One CSS rule can affect many cards or buttons if they share the same class. That is powerful, but it means small changes should be checked across the app."],
      ["What a class is", "A class is a reusable label, like primary-button or lesson-card. HTML adds the label, CSS decides how anything with that label looks."],
      ["Mobile thinking", "Good CSS gives fixed-format elements stable sizes, lets text wrap cleanly, and changes layout before content becomes cramped."],
    ],
    exampleTitle: "Example: a button style",
    tree: [
      ".primary-button {",
      "  background: #0a66c2;",
      "  color: white;",
      "  border-radius: 8px;",
      "  padding: 12px 16px;",
      "}",
    ],
    watch: "If text overlaps, buttons resize oddly, or mobile feels cramped, the issue is usually CSS layout, spacing, or responsive rules.",
    prompt: "Please explain styles.css like a designer would. What sections control colors, layout, cards, buttons, and mobile behavior?",
  },
  {
    id: "javascript",
    label: "JavaScript",
    title: "What is JavaScript?",
    summary: "JavaScript is the behavior layer for many web apps. It reacts to clicks, changes tabs, filters lists, saves progress, validates forms, and talks to APIs.",
    plain: "If HTML is the page skeleton and CSS is the outfit, JavaScript is the muscles and reflexes. It makes the page respond.",
    keyIdeas: [
      "In this app, app.js controls navigation, progress tracking, tabs, modals, quizzes, filters, and decision trees.",
      "JavaScript can run in the browser, which is why a static app can still feel interactive.",
      "JavaScript can also run outside the browser through Node.js in more advanced projects.",
      "Event listeners are instructions like: when this button is clicked, do this action.",
      "LocalStorage lets the browser remember simple data on your own computer, such as course progress.",
    ],
    parts: [
      ["JavaScript is not Java", "The names sound similar, but for your learning path, treat JavaScript as the language of browser interactivity."],
      ["Why beginner apps use it", "It gives you useful behavior without needing a backend: tabs, filters, progress, calculators, simulators, and local saved state."],
      ["When JavaScript is not enough", "If the app needs private secrets, shared team data, a database, or secure AI API calls, you usually need a backend or approved platform."],
      ["How AI edits it", "Codex or Claude Code can add a new button behavior, change a decision tree, or update saved progress logic by editing app.js."],
    ],
    exampleTitle: "Example: browser behavior in plain English",
    tree: [
      "User clicks a tab",
      "  -> JavaScript notices the click",
      "  -> Finds the selected lesson",
      "  -> Replaces the lesson area with new content",
      "  -> Highlights the active tab",
    ],
    watch: "If a button exists but nothing happens, the issue is often JavaScript wiring: the click handler, the element id, or the data attribute.",
    prompt: "Please explain app.js as a beginner map. Which parts control navigation, progress, tabs, modals, and saved state?",
  },
  {
    id: "python-scripts",
    label: "Python + scripts",
    title: "Why apps sometimes use Python, and what scripts are",
    summary: "This browser app does not need Python to run. Python is often used around an app as a helper, a data processor, a content converter, a local server, or a backend.",
    plain: "A script is a repeatable recipe. Instead of manually doing ten steps every time, you run one recipe that performs those steps in order.",
    keyIdeas: [
      "A script usually does a specific job and then stops.",
      "An app usually waits for users, clicks, requests, or data.",
      "Python is popular for data cleanup, file conversion, automation, AI experiments, and simple servers.",
      "JavaScript is common for browser behavior and modern web apps.",
      "Terminal commands are how you often run scripts, preview apps, or install dependencies.",
    ],
    parts: [
      ["Why this course might mention Python", "Python can extract text from PDFs or decks, transform data into JSON, create reports, or start a simple local preview server. Those are helper jobs, not always part of the final app."],
      ["Example helper script", "A script could read a CSV of support tickets, remove fake rows, group tickets by issue type, and create a clean JSON file for a dashboard."],
      ["Example backend", "A Python backend could receive a request from a browser, safely call an AI API with a hidden API key, and return a summary to the page."],
      ["Scripts folder", "Many projects keep repeatable helper recipes in a scripts folder so teammates and AI tools can find them easily."],
      ["Package scripts", "In JavaScript projects, package.json can define friendly commands like npm run start or npm run build. Those commands are also scripts: named recipes for common tasks."],
    ],
    exampleTitle: "Script vs app",
    tree: [
      "Script:",
      "  Run once -> clean a CSV -> write output.json -> stop",
      "",
      "App:",
      "  Open page -> wait for clicks -> filter tickets -> save progress -> keep running",
      "",
      "Backend:",
      "  Wait for requests -> check permissions -> call AI/API -> send response",
    ],
    watch: "Do not run random scripts from the internet or unknown repos. Scripts can change files, install packages, or expose data. Ask the AI to explain a script before running it.",
    prompt: "Please find any scripts or commands in this project and explain what each one does, what files it touches, and whether it is safe for a beginner to run.",
  },
  {
    id: "agents-folder-access",
    label: "Agent access",
    title: "How Codex and Claude Code read and create files inside a folder",
    summary: "Coding agents work by receiving access to a workspace, reading the files they need, making changes, running checks when allowed, and reporting what changed.",
    plain: "You are not handing the AI your entire life. Ideally, you are handing it one project folder and saying: work inside this box, explain what you do, and ask before risky actions.",
    keyIdeas: [
      "Agents need context. The folder provides real files instead of vague memory.",
      "Agents can search across files to find where something is defined or used.",
      "Agents can create new files when a feature needs them, such as a CSS file, data file, or script.",
      "Agents can edit existing files, but you should review the changes before committing or sharing.",
      "Permissions decide what the agent can read, write, run, access on the network, or connect to through tools.",
    ],
    parts: [
      ["Read access", "The agent can inspect files to understand the project. This is useful for explaining structure, finding bugs, and making targeted changes."],
      ["Write access", "The agent can create or edit files. This is powerful and should be scoped to the project folder, especially when you are learning."],
      ["Command access", "The agent may run project checks, start a local server, or inspect output. Commands can be helpful, but some commands change files or install packages."],
      ["Tool access", "With approved tools like MCPs, Captain, GitHub, Google, Jira, or internal systems, agents may access data beyond the folder. That should follow company policy."],
      ["Human approval", "Require approval before deleting files, sending messages, changing records, deploying apps, exposing URLs, or using real customer/company data."],
    ],
    exampleTitle: "A safe agent workflow",
    tree: [
      "1. Open one project folder",
      "2. Ask: explain the files before editing",
      "3. Ask: propose a small plan",
      "4. Let the agent edit only scoped files",
      "5. Review changed files",
      "6. Test locally with fake or approved data",
      "7. Commit, deploy, or share only after review",
    ],
    watch: "If an AI asks for broader access, pause and ask why. More access is not always better; it can increase confusion and risk.",
    prompt: "Before editing anything, please tell me what access you have, what folder you are working in, which files you plan to change, and what you will not touch.",
  },
  {
    id: "front-back-storage",
    label: "Frontend/backend",
    title: "Frontend, backend, storage, and API keys",
    summary: "Most beginner confusion clears up when you separate what runs in the browser, what runs privately on a server, and where data is saved.",
    plain: "Frontend is the shop window. Backend is the staff-only room. Storage is the filing cabinet. APIs are service desks that let systems talk to each other.",
    keyIdeas: [
      "Frontend: HTML, CSS, and browser JavaScript. Users can open and inspect much of it.",
      "Backend: private server logic that can check permissions, call APIs, use secrets, and store shared data.",
      "Storage: where information is saved, such as localStorage, Google Sheets, Drive files, JSON, or a database.",
      "API key: a secret credential used to access a service. Keep it out of public frontend code.",
      "Static site: a site with no private backend. Great for learning pages, docs, and front-end-only prototypes.",
    ],
    parts: [
      ["This local course app", "It is mainly a frontend-only app. index.html, styles.css, app.js, and localStorage are enough for the browser experience."],
      ["GitHub Pages path", "Use it for static pages where everyone sees the same frontend and there is no private data write-back or secret AI key."],
      ["Google Apps Script path", "Use it for lightweight internal tools that need a backend-like layer and shared Google Sheets data."],
      ["AI app path", "If an app calls an AI model with an API key, the safer pattern is frontend -> backend -> AI API. The backend protects the key."],
      ["Company data path", "For company information, use approved access: internal connectors, MCPs, Captain, Copilot Studio, Azure, or other company-approved systems."],
    ],
    exampleTitle: "Choosing the right architecture",
    tree: [
      "Static learning page",
      "  HTML + CSS + JS -> GitHub Pages",
      "",
      "Shared team tracker",
      "  HTML frontend -> Apps Script backend -> Google Sheet",
      "",
      "AI-powered app",
      "  Browser frontend -> approved backend -> AI API -> response",
    ],
    watch: "Free or trial AI access changes often. Treat pricing and quota claims as verify-current-access items, and never paste company data into unapproved tools.",
    prompt: "Please tell me whether this app is frontend-only, needs a backend, needs storage, or needs an API key. Explain the safest deployment path.",
  },
];

const anatomyScenarios = {
  staticCourse: {
    title: "Static website or learning course",
    bestFor: "Guides, internal explainers, prototypes, simple dashboards, calculators, and pages that do not need shared saved data.",
    why: "The browser can load the page, styling, and behavior directly. No server needs to remember anything for the whole team.",
    tree: [
      "static-course/",
      "  index.html      page structure",
      "  styles.css      visual design",
      "  app.js          interactions",
      "  content.js      lessons or data",
      "  assets/         images, icons, screenshots",
    ],
    caution: "Do not put secret API keys or private company data into frontend files that others can inspect.",
  },
  sharedData: {
    title: "Google Sheets-backed internal tool",
    bestFor: "Trackers, forms, planners, checklists, lightweight dashboards, and tools where teammates save shared information.",
    why: "The HTML gives people the interface, Apps Script acts like a small backend, and Google Sheets becomes the shared storage.",
    tree: [
      "apps-script-tool/",
      "  index.html      user interface",
      "  Code.gs         backend functions like doGet, loadState, saveState",
      "  Google Sheet    shared rows, settings, changelog",
      "  README.md       setup and update instructions",
    ],
    caution: "Use the deployed /exec URL for sharing, and make sure access is set only for the approved audience.",
  },
  aiBackend: {
    title: "AI app with a backend",
    bestFor: "Apps that summarize, classify, draft, search, or call an AI API while protecting keys and company data.",
    why: "The backend keeps secrets private and controls what data goes to the AI service. The browser should not directly hold sensitive keys.",
    tree: [
      "ai-support-app/",
      "  frontend/",
      "    index.html",
      "    styles.css",
      "    app.js",
      "  server.py or app.py     private backend",
      "  requirements.txt        Python packages",
      "  .env                    local secrets, not shared",
      "  tests/                  checks for risky behavior",
    ],
    caution: "Only use approved APIs, approved data, and approved hosting. AI apps can become sensitive quickly.",
  },
  agentWorkspace: {
    title: "Claude Code or Codex workspace",
    bestFor: "A folder where an AI coding agent can inspect, edit, test, explain, and help you iterate.",
    why: "The agent needs the actual files. The workspace is the boundary that tells the agent what project it is helping with.",
    tree: [
      "agent-workspace/",
      "  README.md       what this project is",
      "  CLAUDE.md       optional project instructions for Claude Code",
      "  src/            app source files",
      "  tests/          checks the agent can run",
      "  scripts/        repeatable helper commands",
      "  .git/           Git history, if the folder is a repo",
    ],
    caution: "Ask the agent to explain access and changed files. Review before commit, deployment, or sharing.",
  },
};

const vscodeLessons = [
  {
    id: "mental-model",
    label: "Mental model",
    title: "What VS Code is, in plain English",
    summary: "VS Code is your project workbench. It does not magically know your whole computer; it works best when you open the specific project folder you want to build.",
    why: "If Claude Code, Codex, GitHub, and Terminal feel confusing, VS Code gives you a visual center of gravity: files on the left, the file you are editing in the middle, tools and terminal below, and status signals around the edges.",
    steps: [
      "Think of a project as a folder. The folder might contain HTML, CSS, JavaScript, images, docs, and settings.",
      "Open the project folder in VS Code. That folder becomes the workspace for that window.",
      "Use the Explorer on the left to browse files and folders.",
      "Open files in editor tabs in the middle.",
      "Use the integrated terminal at the bottom when you need commands like starting a local app, installing packages, or running tests.",
    ],
    watch: "Opening a single file is not the same as opening the whole folder. For AI coding help, Git, search, and terminal context, open the folder.",
  },
  {
    id: "create-folder",
    label: "Create folder",
    title: "How to create a project folder",
    summary: "A project folder is the home for one app, dashboard, script, or experiment. Keeping each project in its own folder prevents confusion.",
    why: "AI coding tools need boundaries. If you open your entire Desktop or Documents folder, the tool may see too much and you may not know where new files are going.",
    steps: [
      "In Finder, choose where you want projects to live, such as Documents or a dedicated folder named AI Projects.",
      "Create a new folder with a clear name, for example support-dashboard or weekly-summary-agent.",
      "Avoid spaces and vague names for project folders. support-dashboard is easier than Final New Thing 2.",
      "Open VS Code, then use File > Open Folder and choose that folder.",
      "Once opened, create files from the Explorer using the New File and New Folder buttons.",
    ],
    watch: "One folder per project is the beginner-friendly rule. Do not mix unrelated experiments in one big folder.",
  },
  {
    id: "open-switch",
    label: "Open + switch",
    title: "How to open, switch, and manage workspaces",
    summary: "A VS Code workspace is the folder or set of folders currently open in a VS Code window.",
    why: "If the wrong workspace is open, Claude Code or your terminal may work on the wrong project. Learning how to switch folders is one of the biggest beginner unlocks.",
    steps: [
      "Open a project: File > Open Folder, then select the project folder.",
      "Switch projects: File > Open Recent, then choose a recent folder, or use File > Open Folder again.",
      "Open another project separately: File > New Window, then open a different folder in that window.",
      "Add a second folder to the same workspace only when the projects are related. This is called a multi-root workspace and is more advanced.",
      "Use the top window title and Explorer root name to confirm which folder is currently open.",
    ],
    watch: "If you ask an AI tool to edit files, first check the Explorer root folder. That is the project it is likely working inside.",
  },
  {
    id: "interface",
    label: "Interface",
    title: "How to read the VS Code screen",
    summary: "VS Code looks busy at first, but most beginner work happens in five areas: Activity Bar, Explorer, Editor, Terminal, and Source Control.",
    why: "Once you know what each area is for, VS Code stops feeling like an engineering cockpit and starts feeling like a familiar workspace.",
    steps: [
      "Activity Bar: the vertical icon strip on the far left. It switches views like Explorer, Search, Source Control, Run, Extensions, and Claude/Copilot tools.",
      "Explorer: the file tree. This is where you create, rename, delete, and open files.",
      "Editor: the center area where file tabs open.",
      "Panel/Terminal: the bottom area where terminal output, problems, and logs appear.",
      "Status Bar: the bottom strip. It shows useful signals like branch name, language mode, errors, and sometimes extension status.",
    ],
    watch: "If you feel lost, go back to Explorer. It is the home base.",
  },
  {
    id: "files",
    label: "Files",
    title: "How files and folders work inside VS Code",
    summary: "Files are the pieces of your app. Folders organize those pieces so you and the AI can find them.",
    why: "When Claude Code creates an app, you should be able to inspect what it made. You do not need to understand every line, but you should know where the main files live.",
    steps: [
      "Create a file: use the Explorer New File button, then type a name such as index.html, styles.css, or app.js.",
      "Create a folder: use New Folder for assets, data, docs, or scripts.",
      "Rename carefully: right-click a file and choose Rename. If code references that file, ask the AI to update references too.",
      "Search your project: use the Search view to find words across files.",
      "Use Quick Open: press Cmd+P on Mac or Ctrl+P on Windows/Linux to jump to a file by name.",
    ],
    watch: "Do not delete files just because you do not recognize them. Ask the AI to explain what each file does first.",
  },
  {
    id: "terminal",
    label: "Terminal",
    title: "How the integrated terminal works",
    summary: "The VS Code terminal is a command line inside the same window. It usually starts at the root of your opened workspace.",
    why: "Many app-building tasks need commands: run a local server, install dependencies, start a dev app, check Git status, or run tests. The integrated terminal keeps that work connected to your project folder.",
    steps: [
      "Open it with View > Terminal, or use Ctrl+backtick on many keyboards.",
      "Check where you are with pwd on Mac/Linux. The folder shown should be your project folder.",
      "List files with ls on Mac/Linux.",
      "Run app commands from the terminal only when you understand what they do or when the AI explains them.",
      "If something fails, copy the error and ask the AI to explain it in plain English before trying random fixes.",
    ],
    watch: "Terminal commands can change files. Be extra careful with delete commands, install scripts, and anything involving credentials or secrets.",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    title: "How Claude Code fits inside VS Code",
    summary: "Claude Code can help you understand and change files in the project you have open, especially when installed as a VS Code extension or launched in the right folder.",
    why: "VS Code gives you visibility, and Claude Code gives you action. Together, you can ask for an app, inspect the generated files, test it, and ask for revisions.",
    steps: [
      "Open the correct project folder in VS Code before asking Claude Code to work.",
      "Ask Claude Code to explain the folder first: what files exist, what each one does, and what the app entry point is.",
      "For changes, ask for a plan before edits if the project matters.",
      "After edits, review changed files in VS Code. Look for unexpected files, secrets, or changes outside the requested area.",
      "Run the app locally and test the actual workflow before sharing or deploying.",
    ],
    watch: "Claude Code is powerful because it can act. Use that power deliberately: explain, plan, edit, verify.",
  },
  {
    id: "git",
    label: "Git + GitHub",
    title: "How VS Code helps with Git and GitHub",
    summary: "VS Code has a Source Control view that shows what changed in your project and helps you commit changes.",
    why: "Git is the history system. GitHub is the shared home. VS Code makes both more visual so you are not forced to remember every command at the start.",
    steps: [
      "Open Source Control from the Activity Bar.",
      "Changed files appear in a list. Click each file to see what changed.",
      "Write a clear commit message, such as Add support dashboard filters.",
      "Commit only changes you understand. Ask the AI to summarize changes first.",
      "Use GitHub or your company workflow for pull requests when sharing code with others.",
    ],
    watch: "If you see many unexpected changes, pause. Do not commit everything blindly.",
  },
  {
    id: "safe-workflow",
    label: "Safe workflow",
    title: "A safe beginner workflow for every VS Code project",
    summary: "Use this repeatable path whenever you build something new with AI.",
    why: "The workflow keeps you oriented: open the right folder, ask for explanation, make scoped changes, review, test, then share.",
    steps: [
      "Create or choose one project folder.",
      "Open that folder in VS Code.",
      "Ask AI: Explain this folder and suggest the safest next step.",
      "Ask AI: Make only the specific change I request.",
      "Review changed files in Explorer and Source Control.",
      "Run and test locally.",
      "Only then commit, deploy, or share.",
    ],
    watch: "Your best beginner superpower is slowing the AI down: ask it to explain before it changes, and verify before you trust.",
  },
];

const vscodeScenarios = {
  newProject: {
    title: "You want to start a brand-new app",
    answer: "Create a dedicated folder first, open that folder in VS Code, then ask Claude Code or Codex to create the first version. This keeps the project clean and makes it obvious where files are created.",
    checklist: ["Create folder in Finder", "Open folder in VS Code", "Confirm Explorer shows that folder name", "Ask AI to create files", "Run locally before sharing"],
  },
  switchProject: {
    title: "You already have one workspace open and need another",
    answer: "Use File > Open Recent if you have opened it before, or File > Open Folder to switch. Use File > New Window if you want both projects open side-by-side without mixing them.",
    checklist: ["Check current Explorer root", "Use Open Recent or Open Folder", "Use New Window for separate projects", "Do not add folders unless they are related", "Confirm terminal path after switching"],
  },
  aiEdit: {
    title: "You want Claude Code to change files",
    answer: "First make sure VS Code is open to the correct project folder. Then ask the AI to explain the existing files, propose a plan, make the change, and summarize exactly what changed.",
    checklist: ["Open correct folder", "Ask for project explanation", "Ask for a scoped plan", "Let AI edit", "Review changes in Source Control", "Test locally"],
  },
  lost: {
    title: "You feel lost in VS Code",
    answer: "Return to the basics: Explorer shows files, Editor shows the open file, Terminal runs commands, Search finds text, Source Control shows changes. You can close extra tabs and reopen the project folder.",
    checklist: ["Click Explorer", "Confirm folder name", "Close extra editor tabs", "Open the file you care about", "Use Search or Cmd+P to find files"],
  },
};

const claudeLinkedInLessons = [
  {
    id: "agentic-coding",
    label: "Why agentic coding",
    title: "Why Claude Code matters: from chat helper to coding agent",
    summary: "The decks frame Claude Code as part of the move from simple AI chat to agents that can use tools in a loop.",
    simple: "A normal AI chat is like asking a smart coworker for advice. Claude Code is closer to asking that coworker to sit beside your project folder, inspect the files, make a plan, edit, test, and report back.",
    fromDecks: [
      "AI tooling has moved from single-LLM features, to workflows, to agents.",
      "An agent is a model using tools in a loop: it observes, decides, acts, gets feedback, and continues.",
      "More agency means more capability, but also more need for clear goals, boundaries, and review.",
    ],
    examples: [
      "Instead of: 'Write me HTML.' Try: 'Build a simple support dashboard from this CSV, explain the files, and help me test it locally.'",
      "Instead of: 'Fix this bug.' Try: 'Read the error, inspect likely files, propose a plan, then make the smallest safe fix.'",
    ],
    beginnerRule: "Use agents when the task has multiple steps, files, or decisions. Use normal chat when you only need thinking, writing, or explanation.",
  },
  {
    id: "what-it-is",
    label: "What it is",
    title: "What Claude Code is",
    summary: "Claude Code is a terminal-based and IDE-connected coding agent that can help with coding, prototyping, design, analysis, and project understanding.",
    simple: "Claude Code is not just the Claude app. It runs where your files are. That means it can understand your current folder, edit files, run commands, and use approved tools.",
    fromDecks: [
      "Claude Code CLI is a terminal-based agent for delegating complex tasks while keeping transparency and control.",
      "Claude Code also integrates with IDEs such as VS Code, JetBrains IDEs, and VS Code forks like Cursor or Windsurf.",
      "It can handle daily development tasks, tests, modernization, deployment preparation, debugging, and multi-file changes.",
    ],
    examples: [
      "Create a browser app for a team checklist.",
      "Explain a repo in plain English for onboarding.",
      "Turn user feedback into a PRD, then into a working prototype.",
    ],
    beginnerRule: "Open Claude Code only in the folder you want it to work on. Folder context is power.",
  },
  {
    id: "setup-run",
    label: "Start + login",
    title: "Getting started: install, navigate, run, authenticate",
    summary: "The 101 deck walks through installation, using cd to choose a directory, running claude, and logging in.",
    simple: "Claude Code works from a folder. First you go to the folder, then you start Claude Code there. That tells Claude, 'this is the project I want you to understand.'",
    fromDecks: [
      "Install Claude Code, log in, and start building.",
      "Use cd to navigate to the directory where Claude Code will run.",
      "Type claude and press enter.",
      "Use the Anthropic Console or approved company auth path when prompted.",
      "Run claude doctor in normal Terminal if setup is broken.",
    ],
    examples: [
      "If your folder is support-dashboard, open Terminal there and run claude.",
      "If login is stuck, use /logout inside Claude Code, restart, and try again.",
    ],
    beginnerRule: "Do not start Claude Code from your whole Downloads folder. Create a project folder first.",
  },
  {
    id: "basic-use",
    label: "Basic use",
    title: "Basic interactions: natural language, commands, file mentions",
    summary: "You can type normal requests, use slash commands, cancel operations, clear context, and reference files directly.",
    simple: "Talk to Claude Code like a teammate, but be specific. It can read the current folder, but you still need to explain the outcome you want.",
    fromDecks: [
      "Type natural language requests directly.",
      "Use /help to see available commands.",
      "Use /clear to start fresh.",
      "Press Escape to cancel a running operation.",
      "Use @ to reference files, such as @README.md explain this.",
      "Claude can ask clarifying questions and can use copied text, pasted text, or dragged files.",
    ],
    examples: [
      "@README.md explain this file like I am new to this project.",
      "Analyze this CSV and make a small dashboard, but ask before creating files.",
      "Use /clear when the conversation has wandered and you want a fresh start.",
    ],
    beginnerRule: "Specific beats vague. 'Analyze this CSV and summarize top issues' is better than 'help me.'",
  },
  {
    id: "models-context",
    label: "Models + context",
    title: "Model selection, context, and cost awareness",
    summary: "The decks call out model selection and context management as part of using Claude Code responsibly.",
    simple: "Different models are like different coworkers: some are faster and cheaper for simple tasks, while stronger models are better for complex reasoning, large codebases, and long sessions.",
    fromDecks: [
      "Use model selection when you need to balance capability, speed, and cost.",
      "Longer context helps Claude work across larger projects or longer sessions, but it can also increase usage.",
      "Claude Code can show status, account, health, and usage information through built-in commands.",
      "For company environments, access and cost details can differ from public docs, so verify current company guidance.",
    ],
    examples: [
      "Use a stronger model for: 'Refactor this multi-file app and explain tradeoffs.'",
      "Use a faster/cheaper model for: 'Format this file' or 'generate simple test cases.'",
      "Use /cost or current account/status tooling when you need to understand usage.",
    ],
    beginnerRule: "Do not obsess over models on day one. Start with the recommended default, then learn model choice when tasks get slower, larger, or expensive.",
  },
  {
    id: "plan-control",
    label: "Plan + control",
    title: "Plan Mode, interruption, rewind, resume, and screenshots",
    summary: "Claude Code has control features that help you steer it before, during, and after work.",
    simple: "You are still the driver. Plan Mode makes Claude think out loud before editing. Escape lets you stop it. Resume lets you continue a prior session.",
    fromDecks: [
      "Plan Mode can be entered with Shift+Tab and lets Claude create an execution plan without writing code until approved.",
      "Escape interrupts Claude so you can add context or catch mistakes early.",
      "Escape twice or /rewind can jump back in the conversation, but it does not undo file changes.",
      "/resume lets you pick up a previous Claude Code session in the current working directory.",
      "Screenshots and visual feedback can be dragged or pasted into Claude Code for debugging or UI work.",
    ],
    examples: [
      "Use Plan Mode before: 'Refactor this dashboard and add filters.'",
      "Press Escape if Claude starts editing the wrong file.",
      "Paste a screenshot and ask: 'Why does this button overlap on mobile?'",
    ],
    beginnerRule: "For anything bigger than a tiny change, ask for a plan first.",
  },
  {
    id: "claude-md",
    label: "CLAUDE.md",
    title: "CLAUDE.md: project memory and instructions",
    summary: "Both decks emphasize CLAUDE.md as a way to teach Claude how your project or team works.",
    simple: "CLAUDE.md is a note to future Claude. It can say how the project is structured, what commands to run, what style to follow, and what mistakes to avoid.",
    fromDecks: [
      "CLAUDE.md can document project structure, common commands, and personal style tips.",
      "Claude Code can use a hierarchy of instructions: user-level settings, repo-level CLAUDE.md, and subdirectory-level instructions.",
      "Recursive loading lets Claude find relevant instructions as it works in parts of a codebase.",
      "/review-claude-md can help keep these instructions current after project changes.",
    ],
    examples: [
      "Add: 'Run the app by opening index.html. This project has no backend.'",
      "Add: 'Use simple language in UI copy because the audience is non-technical support teammates.'",
      "Ask: 'Review CLAUDE.md and update it based on what changed in this project.'",
    ],
    beginnerRule: "If you keep repeating an instruction, put it in CLAUDE.md.",
  },
  {
    id: "ide-vscode",
    label: "IDE + VS Code",
    title: "Using Claude Code with VS Code",
    summary: "The 101 deck highlights IDE integration: run Claude Code inside the IDE terminal, view diffs in the IDE, and use selected files/tabs as context.",
    simple: "VS Code is the visual workbench; Claude Code is the agent. Use VS Code to see files and diffs while Claude does the heavy lifting.",
    fromDecks: [
      "Supported IDEs include VS Code, JetBrains IDEs, and VS Code forks.",
      "Run Claude Code in the IDE's integrated terminal.",
      "Diff viewing lets you review changes visually instead of only in the terminal.",
      "Current selection and open tab context can be shared with Claude Code.",
    ],
    examples: [
      "Open a file, select a confusing function, and ask Claude to explain the selection.",
      "After Claude edits, use VS Code Source Control to inspect every changed file.",
      "Use the integrated terminal so Claude starts from the same project folder you are viewing.",
    ],
    beginnerRule: "If VS Code shows one folder and Terminal is in another, pause and fix that before running Claude.",
  },
  {
    id: "mcp-captain",
    label: "MCP + Captain",
    title: "MCP and Captain: connecting Claude to tools and company context",
    summary: "MCP is presented as the standard interface for connecting AI to tools. At LinkedIn, Captain is the approved internal route for many such connections.",
    simple: "MCP is like a universal adapter. It lets Claude talk to approved tools. Captain is the company-approved way to connect Claude Code to many internal systems.",
    fromDecks: [
      "MCP is described as the USB-C port for AI: one standard interface that connects AI to tools.",
      "Use mcp add <server-name> to add a server where appropriate.",
      "Use /mcp to manage servers, check status, authenticate, and inspect tools.",
      "Server configs can be written to .mcp.json; managed MCPs can be distributed centrally.",
      "Captain MCP is the reminder path for connecting to internal systems.",
    ],
    examples: [
      "Use a Google MCP to read an approved doc and draft a summary.",
      "Use Jira MCP to find tickets assigned to you and summarize blockers.",
      "Use Glean through approved setup to search internal knowledge.",
    ],
    beginnerRule: "Connecting a tool is access. Start with read-only behavior and confirm company policy before write actions.",
  },
  {
    id: "permissions",
    label: "Permissions",
    title: "Permissions: allow, deny, ask",
    summary: "The 101 deck covers default permissions at user and project levels so Claude knows which tools can run automatically and which need approval.",
    simple: "Permissions are guardrails. They decide when Claude can act by itself, when it must ask you, and what it cannot do.",
    fromDecks: [
      "Permissions can be set at user level in ~/.claude/settings.json.",
      "Project-level settings can live in .claude/settings.json and be shared with a team.",
      "Local project settings can live in .claude/settings.local.json for personal experiments.",
      "Permissions can allow, deny, or ask for specific tools.",
    ],
    examples: [
      "Allow reading files in a project folder.",
      "Ask before editing files.",
      "Deny deleting files or sending data unless explicitly approved.",
    ],
    beginnerRule: "If a permission feels scary, choose ask. The friction is worth it while learning.",
  },
  {
    id: "plugins-skills",
    label: "Plugins + skills",
    title: "Plugins and skills: reusable expertise packages",
    summary: "Claude Code 201 focuses heavily on plugins and skills as a way to package repeatable team workflows.",
    simple: "A plugin is a bundle of Claude Code customizations. A skill is a reusable expertise package Claude can load when needed.",
    fromDecks: [
      "Plugins can bundle skills, slash commands, subagents, hooks, and MCP servers.",
      "Skills are folders of instructions, scripts, and resources that Claude can discover and load dynamically.",
      "Skills can capture organization, vertical, or individual best practices.",
      "Skills are good for procedures Claude does not know out of the box, such as creating polished spreadsheets, docs, or slides.",
      "A skill directory contains a SKILL.md file with metadata such as name and description.",
    ],
    examples: [
      "A weekly GitHub issues report skill that fetches issues and updates a spreadsheet.",
      "A support-summary skill that always outputs trends, evidence, risks, and next actions.",
      "A brand/style skill that keeps team artifacts consistent.",
    ],
    beginnerRule: "If you want Claude to do the same specialized task many times, think skill or plugin.",
  },
  {
    id: "slash-commands",
    label: "Slash commands",
    title: "Slash commands: reusable prompt buttons",
    summary: "Claude Code 201 shows slash commands as a way to store repeatable prompt templates in files and invoke them with /command syntax.",
    simple: "A slash command is a shortcut. Instead of retyping a long instruction, you save it once and run it with a short command.",
    fromDecks: [
      "Custom commands can live in .claude/commands or ~/.claude/commands.",
      "They are usually Markdown files.",
      "Examples include /security-review, /onboarding, /pr-review, /generate-pr, and /investigate-incident.",
      "/commit-push-pr can gather git status/diff, generate commit and PR messages, create branches, and include safety rails.",
      "/review-claude-md keeps Claude instructions up to date after changes.",
    ],
    examples: [
      "/support-summary could always produce: overview, evidence, customer impact, risks, and next steps.",
      "/handoff could create a shift handoff note from case context.",
      "/qa-review could inspect a support tool before sharing it.",
    ],
    beginnerRule: "Use slash commands for workflows you can describe as a checklist.",
  },
  {
    id: "subagents-hooks",
    label: "Subagents + hooks",
    title: "Subagents and hooks: specialization and lifecycle automation",
    summary: "The decks introduce subagents for delegated specialized work and hooks for commands that run at lifecycle moments.",
    simple: "A subagent is a specialist helper. A hook is an automatic action that happens when Claude reaches a certain moment.",
    fromDecks: [
      "Subagents have their own context, preserving the main agent's context.",
      "Subagents can have specialized system prompts and different tool permissions.",
      "Use /agents to configure them.",
      "Example subagents include code-simplifier and verify-app.",
      "Hooks can trigger shell commands for notifications, formatting, logging, or correcting Claude behavior.",
      "Hooks can inject CLAUDE.md or extra instructions before certain tools or commands.",
    ],
    examples: [
      "A verifier subagent checks the app after Claude builds it.",
      "A simplifier subagent reduces unnecessary complexity after a first version works.",
      "A hook runs formatting after file edits, if approved by your environment.",
    ],
    beginnerRule: "Subagents and hooks are advanced. Learn them after normal Claude Code, Plan Mode, and file review feel comfortable.",
  },
  {
    id: "parallel-sdk",
    label: "Parallel + SDK",
    title: "Parallel Claude and Agent SDK workflows",
    summary: "Advanced decks show how teams run multiple Claude sessions and trigger workflows from systems like tickets.",
    simple: "Parallel Claude means multiple Claude Code sessions working on separate tasks. The Agent SDK means Claude-powered workflows can be launched from other systems.",
    fromDecks: [
      "Parallel Claude can be done with multiple terminals, parallel agents, or subagents.",
      "A writer/reviewer pattern has one Claude implement while another reviews for edge cases and consistency.",
      "Clear session names, objectives, markdown handoff files, and summaries reduce confusion.",
      "Git worktrees can prevent file conflicts between parallel sessions.",
      "The Claude Agent SDK can initiate workflows from tickets, kick off changes, create branches, commit, and open PRs.",
    ],
    examples: [
      "One Claude builds a dashboard while another writes documentation.",
      "One Claude implements a fix while another reviews for regression risk.",
      "A Jira ticket could trigger a branch and draft PR flow, with human review before merge.",
    ],
    beginnerRule: "Do not multi-Claude until one-Claude workflows feel safe. Parallel work multiplies both speed and confusion.",
  },
  {
    id: "product-workflows",
    label: "PM/support use cases",
    title: "How product, support, and non-engineering teams use Claude Code",
    summary: "The 101 deck emphasizes non-engineering leverage: prototypes, dashboards, docs, onboarding, design iteration, and internal workflows.",
    simple: "You do not need to become an engineer to get value. You need to learn how to frame problems, provide context, review outputs, and use approved paths.",
    fromDecks: [
      "Claude Code helps with fast prototyping, test generation, bug fixes, dashboards, onboarding, codebase comprehension, and cross-language translation.",
      "For product teams, it can take user feedback or a rough feature idea, write a PRD, collaborate on implementation, and build a functional prototype.",
      "It can help new users ramp on codebases by explaining structure and creating documentation.",
      "It can make best practices easier to apply through CLAUDE.md and reusable skills.",
      "Teams can track metrics such as feature development time, prototyping velocity, review success, security fix velocity, and code acceptance.",
    ],
    examples: [
      "Build an internal support triage prototype before asking engineering for production help.",
      "Create a dashboard from CSV exports and narrate trends.",
      "Generate a PRD from repeated support pain points.",
      "Explain a repo so you can have a better conversation with engineering.",
    ],
    beginnerRule: "Your job is not to ship risky production code alone. Your job is to turn ambiguity into tested prototypes, clearer asks, and better collaboration.",
  },
];

const claudeScenarioGuides = {
  learnRepo: {
    title: "Use Claude Code as an onboarding guide",
    answer: "Ask Claude to inspect the project, identify important files, explain the structure, and create or improve documentation. This maps to the 101 deck's codebase comprehension and onboarding use case.",
    tools: ["@-file mentions", "CLAUDE.md", "/resume", "VS Code diff/search"],
    prompt: "Please explain this repository like I am new to coding. What does it do, what files matter, and what should I read first?",
  },
  prototype: {
    title: "Use Claude Code for PRD-to-prototype",
    answer: "Start with user feedback or a rough idea. Ask Claude to draft a PRD, propose an implementation plan, build a local prototype, and help you test it.",
    tools: ["Plan Mode", "Screenshots", "VS Code", "local testing"],
    prompt: "Turn this rough support workflow idea into a short PRD, then propose a simple prototype I can run locally.",
  },
  repeatWorkflow: {
    title: "Use slash commands or skills",
    answer: "If you repeat the same prompt often, make it a slash command. If the workflow requires instructions, scripts, assets, or specialized expertise, make it a skill or plugin.",
    tools: ["Custom /commands", "Skills", "Plugins", "CLAUDE.md"],
    prompt: "Help me design a reusable slash command or skill for this repeated support workflow.",
  },
  companyData: {
    title: "Use Captain/MCP with approved access",
    answer: "If Claude needs company docs, tickets, spreadsheets, or knowledge search, use approved MCPs through Captain or your internal setup. Start read-only and cite sources.",
    tools: ["/mcp", "Captain", "Google/Glean/Jira MCPs", "permissions"],
    prompt: "Using only approved connected sources, find relevant context for this support question and cite where each answer came from.",
  },
  parallel: {
    title: "Use parallel Claude only after scoping carefully",
    answer: "Parallel Claude is advanced. Split independent tasks clearly and use handoff docs or git worktrees to avoid conflicts.",
    tools: ["multi-terminal Claude", "subagents", "handoff markdown", "git worktrees"],
    prompt: "Split this project into independent tasks that could be handled in parallel, with clear file ownership and verification steps.",
  },
  safeReview: {
    title: "Use review, permissions, and human approval",
    answer: "Before sharing, committing, or deploying, ask Claude to summarize changes, inspect diffs, run tests, and list risks. Keep human approval for write/send/share actions.",
    tools: ["/review", "/permissions", "Source Control", "Plan Mode"],
    prompt: "Review the changes you made. Summarize files changed, tests run, risks, and anything I should manually verify.",
  },
};

const claudeCommandCards = [
  ["/help", "Show available commands", "Use when you are lost or want to discover what Claude Code can do."],
  ["Ask Claude docs", "Ask official docs", "Use code.claude.com/docs or current official docs when you have a feature or behavior question."],
  ["/clear", "Start a fresh conversation", "Use when context has become messy or you want a clean slate."],
  ["Esc", "Interrupt Claude", "Use when Claude is heading in the wrong direction or you need to add context."],
  ["Shift+Tab", "Plan Mode", "Use before larger changes so Claude plans before editing."],
  ["/model", "Choose or change model", "Use when you need a different balance of speed, cost, context, or capability."],
  ["/doctor", "Check installation health", "Use from normal Terminal when Claude Code setup or login seems broken."],
  ["/cost", "Check usage", "Use to understand token usage or cost signals, subject to your account type."],
  ["/resume", "Continue prior session", "Use when returning to a previous task in the same folder."],
  ["@file", "Mention a specific file", "Use when you want Claude to read or explain a particular file."],
  ["/mcp", "Manage tool connections", "Use to check Captain/MCP tools, status, and authentication."],
  ["/permissions", "Review tool permissions", "Use to decide what Claude can do automatically, ask about, or never do."],
  ["/agents", "Manage subagents", "Use for specialized helper agents after you are comfortable."],
  ["/hooks", "Lifecycle automations", "Use for advanced notifications, formatting, logging, or behavior correction."],
  ["/plugin", "Install/manage plugins", "Use to add approved bundles of skills, commands, agents, hooks, and MCPs."],
  ["/review", "Ask for code review", "Use before committing or sharing a change."],
];



const simSteps = [
  ["Create a repo", "GitHub makes a project home with history.", "github.com/new -> create repository"],
  ["Create a branch", "A branch is a safe side copy for changes.", "git checkout -b support-dashboard"],
  ["Make a commit", "A commit saves a checkpoint with a message.", "git add . && git commit -m \"Add dashboard\""],
  ["Open a pull request", "A PR asks others to review before merging.", "Compare changes -> Open pull request"],
  ["Merge to main", "Approved changes join the official version.", "Merge pull request"],
  ["Deploy with Pages", "Static HTML/CSS/JS can publish from the repo.", "Settings -> Pages -> Deploy from branch"],
];

const githubLessons = [
  {
    id: "mental-model",
    label: "Mental Model",
    title: "What GitHub is, in normal language",
    summary: "GitHub is a shared home for project files. It remembers every important version, shows who changed what, and gives teammates a review process before changes become official.",
    why: "Without GitHub, a project can become a pile of renamed folders like final, final-v2, final-real-final. GitHub gives the project one trusted home and a visible history.",
    steps: [
      "A project starts as a folder on your computer, such as a small website with index.html, styles.css, and app.js.",
      "Git tracks the folder history. Think of Git as the time machine running underneath the project.",
      "GitHub stores a copy of that tracked project online so you and other people can reach the same files.",
      "You save meaningful checkpoints called commits. Each commit has a short message explaining what changed.",
      "When other people are involved, you usually make a branch and open a pull request so changes can be reviewed before they join the main project.",
    ],
    watch: "Git and GitHub are related but not identical. Git is the history tool. GitHub is the website/platform where that history is stored, reviewed, discussed, and sometimes published.",
  },
  {
    id: "repo-tour",
    label: "Repo Tour",
    title: "What you see inside a GitHub repository",
    summary: "A repository, often shortened to repo, is the project page. It contains files, history, issues, pull requests, settings, and sometimes a published website.",
    why: "Once you know the parts of a repo, GitHub stops feeling like a wall of developer words. You can inspect a project without touching anything risky.",
    steps: [
      "Code tab: the main file view. This is where you see folders and files like index.html or README.md.",
      "README: the front page note for the repo. It usually explains what the project is and how to run or use it.",
      "Commits: the checkpoint history. Use this to see how the project changed over time.",
      "Branches: safe side versions of the project. A branch lets someone work without immediately changing the main version.",
      "Pull requests: review conversations around proposed changes.",
      "Issues: task or bug cards. Teams use them to track work, questions, and follow-ups.",
      "Actions: automated checks or deployments. For example, a website build can run when new code is pushed.",
      "Settings: admin area for access, Pages publishing, repository visibility, and other controls.",
    ],
    watch: "Settings can affect publishing and access. If a repo contains company or private material, do not make it public just to test something.",
  },
  {
    id: "daily-flow",
    label: "Daily Flow",
    title: "The everyday GitHub workflow",
    summary: "Most GitHub work follows the same story: copy the project, make a safe change, save a checkpoint, ask for review, then merge.",
    why: "This workflow keeps experiments separate from the official version until someone reviews them.",
    steps: [
      "Clone: copy the GitHub repo onto your computer so you can work on the files locally.",
      "Branch: create a side version with a clear name like add-github-lesson or fix-homepage-button.",
      "Edit: change the files in VS Code or with an AI coding assistant.",
      "Test: open the app locally and check that the important workflow still works.",
      "Commit: save a checkpoint with a human-readable message.",
      "Push: send your branch from your computer back up to GitHub.",
      "Pull request: ask teammates or yourself to review the change before it joins main.",
      "Merge: move the approved change into the main branch.",
    ],
    watch: "Commit messages should explain the purpose, not just say update. A useful message is Add GitHub beginner guide or Fix Pages setup steps.",
  },
  {
    id: "pages-publishing",
    label: "Publish HTML",
    title: "How GitHub Pages publishes simple web apps",
    summary: "GitHub Pages can turn static files into a shareable website. Static means the browser can run it with HTML, CSS, JavaScript, images, and data files, without a private server.",
    why: "This is one of the easiest ways to share a simple page, course, calculator, dashboard, or prototype.",
    steps: [
      "Check that the app is static: it should work with files like index.html, styles.css, app.js, images, and maybe JSON data.",
      "Remove secrets: do not publish passwords, API keys, private customer data, internal decks, or anything that should not be visible.",
      "Create or choose a GitHub repository for the site.",
      "Put the website files in the repo. For a tiny app, index.html should usually sit at the top level of the repo.",
      "Commit and push the files to GitHub.",
      "Open repository Settings, then Pages.",
      "Under Build and deployment, choose Deploy from a branch.",
      "Choose the main branch and the root folder, then save.",
      "Wait a few minutes, then use the Pages link. It often looks like https://username.github.io/repository-name/.",
    ],
    watch: "GitHub Pages is public on normal personal/public repos. Inside a company, use the approved internal path and approved repository visibility. Publishing is an access decision, not just a technical step.",
  },
  {
    id: "ai-workflow",
    label: "AI + GitHub",
    title: "How Claude Code or Codex fits with GitHub",
    summary: "AI coding tools can help read a repo, edit files, run checks, summarize changes, and prepare a pull request. GitHub is where the work becomes reviewable.",
    why: "This is the bridge from 'AI built something on my machine' to 'a teammate can inspect, approve, and use it safely.'",
    steps: [
      "Open the correct project folder before asking AI to edit anything.",
      "Ask the AI to explain the repo first: what files matter, how the app runs, and where risks live.",
      "Ask for a plan before bigger changes.",
      "Let it make a scoped edit, then ask for a changed-files summary.",
      "Run the app or checks locally.",
      "Ask the AI to review the diff and call out risks before committing.",
      "Commit only the intended files.",
      "Push the branch and open a pull request when the change should be reviewed or shared.",
    ],
    watch: "Do not let an AI commit, push, deploy, or expose a link until you understand what changed and what data the app contains.",
  },
];

const githubConceptCards = [
  ["Git", "The time machine", "Tracks file changes on your computer. You can use Git even before GitHub is involved."],
  ["GitHub", "The shared project home", "Stores the project online and adds collaboration, review, issues, automation, and Pages publishing."],
  ["Repository", "The project container", "A repo holds files, history, branches, pull requests, issues, and settings."],
  ["Main branch", "The official version", "Usually the stable version people trust. Changes should reach main through review."],
  ["Commit", "A saved checkpoint", "A named moment in project history. Good commits make it easier to understand and undo changes."],
  ["Pull request", "A review request", "A page that compares your branch with main and lets people discuss before merging."],
  ["Merge", "Bring changes together", "Adds the reviewed branch into the official version."],
  ["GitHub Pages", "Static website publishing", "Publishes HTML/CSS/JS from a repo so others can open the app in a browser."],
];

const githubPublishChecklist = [
  ["Good fit", "A simple website, guide, docs page, prototype, calculator, or static dashboard."],
  ["Files needed", "Usually index.html, styles.css, app.js, image/assets folders, and maybe README.md."],
  ["Not a fit", "Apps that need secret API keys, private databases, login rules, scheduled jobs, or shared writes."],
  ["Safety check", "Remove private data, passwords, tokens, internal-only source files, and any customer-sensitive information."],
  ["First publish", "Create repo, add files, commit, push, open Settings > Pages, choose branch and root folder, save."],
  ["Updates", "Edit locally, test, commit, push again. Pages usually republishes automatically after the new version reaches the publishing branch."],
];

const githubScenarioGuides = {
  firstWebsite: {
    title: "I made one HTML page and want to share it",
    answer: "Use GitHub Pages if the page has no private data and no secret key. Keep index.html at the top level, add any CSS/JS files it uses, publish from main and root.",
    checklist: ["Open the page locally first", "Make sure all links and buttons work", "Create a repo", "Upload or push the files", "Turn on Pages from Settings"],
  },
  teammateReview: {
    title: "I want someone to review my app changes",
    answer: "Use a branch and pull request. The branch keeps your work separate; the pull request gives reviewers a place to see exactly what changed.",
    checklist: ["Create a branch with a clear name", "Commit the intended files only", "Push the branch", "Open a pull request", "Ask the reviewer what you want feedback on"],
  },
  privateData: {
    title: "My app uses private data or an API key",
    answer: "Pause before GitHub Pages. Browser files can be inspected by users, so secrets do not belong in index.html, app.js, or public data files.",
    checklist: ["Use fake sample data for the static prototype", "Ask what approved backend or internal platform should hold secrets", "Do not publish real customer or company-sensitive data", "Get the access path reviewed before sharing"],
  },
  aiBuiltIt: {
    title: "Claude or Codex built files for me",
    answer: "Treat the AI work like a draft. Ask it to explain the project, summarize changed files, run checks, and help you review before anything is committed or published.",
    checklist: ["Ask what files were changed", "Open the app locally", "Check the visible content and data", "Ask for risks", "Commit only after you understand the result"],
  },
};

const agents = [
  ["Weekly support trend summarizer", "Summarizes top contact reasons, rising issues, and recommended follow-ups.", "Cases, dashboards, docs", "Low", "Starter", "Before sending the summary", "Claude Code/Codex or Copilot Studio"],
  ["Case/ticket duplicate detector", "Finds likely duplicate tickets and suggests linking or closing paths.", "Ticket system, Jira", "Medium", "Builder", "Before changing ticket status", "Copilot Studio or Captain/MCP"],
  ["Escalation readiness checker", "Checks whether an escalation has impact, evidence, owners, timeline, and customer language.", "Tickets, docs, templates", "Medium", "Starter", "Before escalation is submitted", "Claude Code/Codex"],
  ["SLA risk monitor", "Looks for cases nearing SLA breach and drafts a prioritized action list.", "Case queue, SLA data", "High", "Advanced", "Before notifications or record changes", "Azure AI Foundry or Copilot Studio"],
  ["Customer-impact summary drafter", "Turns messy notes into a concise impact summary for internal review.", "Case notes, incident docs", "Medium", "Starter", "Before customer-facing use", "Claude app, Claude Code, Copilot Studio"],
  ["Known-issue finder", "Searches approved docs and tickets for similar symptoms and likely known issues.", "Glean, Jira, Google Docs", "Medium", "Builder", "Before recommending resolution", "Captain/MCP"],
  ["Product-release support brief generator", "Creates support-facing release notes, risks, FAQs, and watch-outs.", "Release docs, PRDs, tickets", "Medium", "Builder", "Before publishing to team", "Claude Code/Codex"],
  ["Jira-to-status-update agent", "Reads Jira context and drafts weekly status updates with blockers and asks.", "Jira, docs", "Medium", "Starter", "Before posting updates", "Captain/MCP or Copilot Studio"],
  ["Support dashboard insight narrator", "Explains what changed in a dashboard and what the team should notice.", "CSV, BI export, dashboards", "Low", "Starter", "Before sharing interpretation", "Claude Code/Codex"],
  ["Glean/Docs onboarding answer agent", "Answers new teammate questions from approved onboarding materials.", "Glean, docs", "Low", "Starter", "When answer confidence is low", "Captain/MCP or Copilot Studio"],
  ["Team handoff note generator", "Converts case context into structured handoff notes for another region or shift.", "Cases, notes", "Medium", "Starter", "Before handoff is sent", "Claude app or Copilot Studio"],
  ["Incident timeline builder", "Builds a timeline from notes, tickets, changes, and updates.", "Jira, docs, chat exports", "Medium", "Builder", "Before incident review", "Captain/MCP or Azure AI Foundry"],
  ["Root-cause evidence collector", "Collects supporting evidence and unanswered questions for RCA work.", "Tickets, docs, dashboards", "High", "Advanced", "Before RCA conclusions", "Azure AI Foundry"],
  ["Macro/response quality reviewer", "Reviews drafted responses for clarity, policy alignment, and empathy.", "Response drafts, policy docs", "Medium", "Starter", "Before customer send", "Copilot Studio or Claude app"],
  ["Policy lookup assistant", "Finds the relevant internal policy and explains it in plain English.", "Policy docs, Glean", "Low", "Starter", "If policy is ambiguous", "Captain/MCP or Copilot Studio"],
  ["Training gap detector", "Finds repeated confusion themes in cases and suggests training topics.", "Cases, QA notes", "Medium", "Builder", "Before training recommendations", "Claude Code/Codex"],
  ["Support backlog prioritizer", "Ranks backlog based on impact, age, SLA, severity, and dependency signals.", "Case queue, dashboards", "High", "Advanced", "Before changing priorities", "Azure AI Foundry or Copilot Studio"],
  ["FAQ freshness checker", "Flags stale FAQs by comparing docs to recent product changes and tickets.", "Docs, release notes, tickets", "Low", "Builder", "Before editing docs", "Claude Code/Codex"],
  ["Bug report completeness checker", "Checks if a bug report has repro steps, expected/actual behavior, screenshots, scope, and logs.", "Jira, case notes", "Medium", "Starter", "Before filing or updating bug", "Claude Code/Codex"],
  ["Ask my company knowledge base", "Answers questions grounded only in approved company sources and cites where it found answers.", "Glean, docs, Jira", "Medium", "Builder", "When source confidence is weak", "Captain/MCP or Copilot Studio"],
];

const setupItems = [
  {
    title: "LNKDPROD account",
    summary: "Your production identity for company engineering and cloud systems.",
    what: "This is a separate production identity, usually tied to your work account, that proves who you are when accessing internal production-adjacent tools. It is not the same idea as a random new website account; it is part of the company's identity and access system.",
    why: "Many internal tools need a stronger identity check before they let your computer or AI tooling reach company infrastructure. Without this account, later steps like rdev, Azure virtual machines, Captain authentication, or some MCP connections may fail even if your normal work login works.",
    enables: ["Authentication to production-oriented internal services", "Access paths for Azure, rdev, and Captain", "A consistent identity trail for auditing and security"],
    success: "You can sign in with the production identity where the setup guide asks you to verify it, and later tools stop failing with identity or account-not-found errors.",
    watch: "Do not treat this like a throwaway login. If activation is missing or confusing, ask the internal helpdesk rather than creating duplicate accounts or guessing.",
  },
  {
    title: "LinkedIn GitHub account",
    summary: "Your code collaboration identity inside company GitHub.",
    what: "GitHub is where code projects live. Your company GitHub account lets you see internal repositories, install approved plugins, review changes, create pull requests, and publish some internal static pages.",
    why: "Claude Code, Codex, Captain plugins, deployment workflows, and engineering collaboration often assume that your GitHub identity exists and has access to the right organizations. If GitHub is not set up, the AI may be able to make files locally but fail when anything needs a repository.",
    enables: ["Access to internal code repositories", "Pull requests and code review", "Approved plugin installation", "GitHub Pages deployment for static sites where allowed"],
    success: "You can sign in to GitHub with the company username format and see the expected company organizations or repositories.",
    watch: "Access may take time after group membership is added. If you cannot see expected organizations, do not regenerate keys or create a personal workaround; check group membership and SSO first.",
  },
  {
    title: "SSH key",
    summary: "A secure handshake between your computer and GitHub.",
    what: "An SSH key is a matched pair of files: a private key that stays on your computer and a public key that GitHub can know about. Together they let GitHub recognize your machine without asking for a password every time.",
    why: "When Claude Code or you try to clone, push, or install from internal GitHub repositories, GitHub needs proof that the request comes from your trusted machine. SSH keys make that proof secure and repeatable.",
    enables: ["Cloning internal repositories", "Pushing code changes", "Installing approved GitHub-hosted plugins", "Working with repos without repeated password prompts"],
    success: "The SSH test returns a successful authentication message for your company GitHub user.",
    watch: "The private key is sensitive. Do not paste it into chat or docs. If a key stops working, ask for help before regenerating because key changes can temporarily break access.",
  },
  {
    title: "Git identity",
    summary: "Your name and work email stamped onto code checkpoints.",
    what: "Git identity tells Git which name and email to attach when you save a checkpoint, called a commit. It does not give access by itself; it labels your work clearly.",
    why: "When teammates review a change, they need to know who made it. A clean Git identity makes your commits understandable and avoids confusing authorship like personal emails or unknown users.",
    enables: ["Readable commit history", "Cleaner pull requests", "Accountability when AI helps create changes", "Fewer review questions from engineering partners"],
    success: "New commits show your proper work name and work email.",
    watch: "Use the company-approved work email, not a personal email. This matters because GitHub, compliance, and reviewers use that identity trail.",
  },
  {
    title: "VS Code",
    summary: "Your visual workbench for project folders and files.",
    what: "VS Code is the app where you can open a project folder, see files in a sidebar, edit text, preview code, use extensions, and understand what Claude Code or Codex changed.",
    why: "You can build simple things from Terminal alone, but VS Code makes the work visible. For a non-technical builder, it is the difference between feeling like commands are happening in a black box and seeing the actual app files.",
    enables: ["Opening project folders", "Reviewing generated files", "Using Claude Code or related extensions where approved", "Searching code and comparing changes"],
    success: "You can open a folder in VS Code and, if configured, launch it from Terminal or use the Claude Code extension experience.",
    watch: "VS Code is an editor, not the AI itself. It becomes powerful when paired with a project folder, GitHub, and an AI coding assistant.",
  },
  {
    title: "Bluejay and Phoenix",
    summary: "Company toolchain installers that prepare your machine.",
    what: "Bluejay and Phoenix are internal setup tools. Their job is to install or update the approved developer tooling your machine needs so later commands can work consistently.",
    why: "A lot of AI coding and internal-data work depends on command-line tools, certificates, network configuration, Node, Git, and internal packages. Phoenix reduces the amount of manual setup you would otherwise need to understand.",
    enables: ["Approved developer tools", "Internal certificates and configuration", "Node/npm or other runtime support where required", "Captain and related internal tooling installation"],
    success: "The install/update finishes without errors, and new terminal sessions can find the expected commands.",
    watch: "After installation, close and reopen Terminal. If a command is still not found, it may be a path or install issue, not proof that you did something wrong.",
  },
  {
    title: "Claude Code",
    summary: "An agentic coding assistant that can work inside your project folder.",
    what: "Claude Code is different from the Claude chat app. The chat app mainly talks with you; Claude Code can inspect files, edit files, run commands, explain a project, and use connected tools when they are configured.",
    why: "This is what lets you move from 'AI gave me advice' to 'AI helped build the thing.' For your goals, Claude Code can create offline apps, dashboards, internal pages, scripts, and prototypes while explaining what each file does.",
    enables: ["Building local apps and dashboards", "Explaining unfamiliar code", "Editing files with your approval", "Using MCP tools such as Captain connections", "Creating deployable project folders"],
    success: "Running Claude Code opens an interactive session in the intended project folder, and it can see the files you want it to work on.",
    watch: "Folder permission matters. Only open Claude Code in folders you are comfortable letting it inspect. Ask it to explain before allowing broad edits.",
  },
  {
    title: "Captain",
    summary: "Approved bridge from Claude Code to internal company tools.",
    what: "Captain is internal AI tooling that adds approved MCP connections and plugin marketplace access. It lets Claude Code reach company-approved systems such as docs, Jira, code search, or other internal sources, depending on what is configured and allowed.",
    why: "Without Captain, Claude Code can still work on local files, but it may not know anything about internal context. Captain is what turns it from a local coding helper into a company-context helper, while staying within approved channels.",
    enables: ["Approved MCP server access", "Internal plugin marketplace setup", "Connections to supported company knowledge and workflow systems", "More grounded answers from real internal sources"],
    success: "Claude Code shows Captain or its tools in the MCP/plugin list, and test prompts can reach approved sources you have access to.",
    watch: "Captain is not a license to expose all data. It still depends on your permissions, VPN/network state, SSO, and company policy. Treat connector setup as sensitive access.",
  },
  {
    title: "Google, Glean, Jira, Figma, Trino MCPs",
    summary: "Specific approved connections for specific jobs.",
    what: "Each MCP connection gives Claude Code a controlled way to interact with a particular system. Google can help with Docs/Sheets/Drive, Glean with internal knowledge search, Jira with tickets, Figma with design context, and Trino with read-only data queries when approved.",
    why: "Agents are only useful if they can see the right context. These connections let your agent search, summarize, draft, or analyze from real work systems instead of relying on pasted snippets.",
    enables: ["Searching internal knowledge", "Reading or drafting around documents", "Finding and summarizing tickets", "Working with design references", "Querying approved datasets for dashboards or analysis"],
    success: "The MCP list shows the connection as authenticated, and a small test query works against a source you are allowed to access.",
    watch: "Connect only what you need. Some tools are read-only; others may create or update records. Any write, share, send, or customer-impacting action should have human approval.",
  },
  {
    title: "Deployment path",
    summary: "The route that makes your app usable by other people.",
    what: "Deployment means moving from 'it works on my computer' to 'someone else can open and use it.' The right path depends on whether your app is just static files, needs shared data, or needs a backend service.",
    why: "A local app is great for learning, but a support tool becomes valuable when teammates can use it reliably. Choosing the wrong deployment path can create access, security, or maintenance problems.",
    enables: ["GitHub Pages for simple static sites", "Google Apps Script for lightweight Google Sheets-backed tools where allowed", "Azure or VM-style hosting for more complex backend apps", "A clearer conversation with engineering about production readiness"],
    success: "You can explain where the app lives, who can access it, what data it touches, and how updates will be published.",
    watch: "Static GitHub Pages cannot safely hide secrets or run private backend logic by itself. If the app needs AI API keys, customer data, shared writes, or scheduled jobs, you probably need a backend or approved internal platform.",
  },
];

const recipes = [
  ["Offline decision app", "Build a small browser app that runs from one HTML file.", "Ask Claude Code: create a beautiful local decision maker with options, random pick, and saved history."],
  ["CSV dashboard", "Turn a support export into charts and simple insights.", "Ask Codex: build a dashboard from this CSV, explain trends, and keep all data local."],
  ["Google Sheets-backed tracker", "Use a Sheet as a lightweight backend for shared team data.", "Ask Claude Code: create an Apps Script web app with index.html and Code.gs for this workflow."],
  ["Internal GitHub Pages site", "Publish a static resource page for teammates.", "Ask Claude Code: prepare this static site for GitHub Pages and explain each deployment step."],
  ["Known-issue research assistant", "Search approved docs and tickets to answer support questions.", "Ask the agent to use only approved MCP sources and cite the source of each answer."],
  ["Weekly support automation", "Draft a recurring summary of metrics, risks, and action items.", "Ask Codex or Copilot Studio to create a weekly runbook with human approval before sharing."],
];

const deployPathGuides = {
  githubPages: {
    title: "GitHub Pages through LinkedIn Sandbox",
    bestFor: "Front-end-only experiences: HTML pages, Markdown documentation, static dashboards, Docusaurus-style documentation sites, prototypes you want colleagues to open internally.",
    notFor: "Apps that need databases, hidden API keys, server-side logic, shared writes, or live backend processing.",
    time: "About 30-45 minutes for first setup; faster after GitHub, Captain, plugins, and SSH are already working.",
    why: "GitHub Pages publishes static files from a GitHub repository. In this internal workflow, the approved deploy skill publishes through repositories in linkedin-sandbox so the site can be internally visible without touching production code.",
    prerequisiteNote: "You should have nearly everything set up before attempting this path. If GitHub access, SSH keys, Captain, or plugins are not ready, deployment will fail or become confusing.",
    steps: [
      {
        title: "0. Prerequisites",
        body: "Confirm you have Claude Code, Captain, Figma MCP if your prototype uses Figma/design input, Claude Plugins, GitHub access through go/github/guide, and GitHub SSH keys that allow push/pull. You are preparing the path for Claude to create or update a sandbox repo, push files, and trigger deployment.",
        why: "The deploy skill depends on Claude Code being able to run, install approved plugins, authenticate to GitHub, and push to the correct internal GitHub organization.",
      },
      {
        title: "1. Prep your prototype, website, or dashboard",
        body: "Ask Claude to build something first. It may be a single HTML file, a Markdown page, a dashboard, or something you already created. Do not overthink the first version; the point is to have a front-end artifact ready to publish.",
        why: "Deployment is easier after you have a working local artifact. Test it locally before you publish so you know whether deployment broke something or the app was already broken.",
      },
      {
        title: "2. Create a repository in linkedin-sandbox",
        body: "GitHub Pages only works in certain approved repositories for this workflow. If you want control over the repository name, share https://github.com/linkedin-sandbox with Claude and ask it to help create or guide you through a sandbox repo with your chosen name. If you do not care about the name, the deployment skill can automatically create a repo for you.",
        why: "The repo must be in linkedin-sandbox. A personal repo will not work for this internal GitHub Pages path. The sandbox is standalone and not connected to production code, so it is the safe place to publish experiments.",
      },
      {
        title: "3. Install the deploy skill",
        body: "Update the LinkedIn plugin marketplace, then install the deploy skill built by Snehal Mulchandani. Use only approved marketplace plugins, not random internet plugins.",
        commands: ["/plugin marketplace update linkedin-plugins", "/plugin install deploy-website-ghp@linkedin-plugins"],
        why: "This skill packages the deployment workflow so Claude can create the needed GitHub Pages setup, build a site, commit files, push, and trigger the deploy workflow.",
      },
      {
        title: "4. Deploy your website",
        body: "Call the deploy skill with the slash command. Type the command and let autocomplete help you select it.",
        commands: ["/deploy-website-ghp:deploy-website-ghp"],
        why: "Behind the scenes, the skill can initialize a sandbox GitHub repository if needed, add GitHub Pages configuration, generate a Docusaurus documentation scaffold, build the site, commit and push files, and trigger GitHub Actions deployment.",
      },
      {
        title: "5. Wait for deployment",
        body: "The deploy workflow usually takes 1-2 minutes. When it finishes, Claude should provide a live internally visible URL. The URL should work for internal colleagues.",
        why: "GitHub Actions needs a little time to build and publish the static site. Do not assume failure immediately; wait for the workflow to finish.",
      },
      {
        title: "6. Optional debugging",
        body: "If something seems wrong, manually check that your file exists in the repo. Visit https://github.com/linkedin-sandbox and search for your folder or repository name. You can also ask Claude to inspect the repo and confirm the files were pushed.",
        why: "Deployment problems often come from files being in the wrong place, the wrong repo, missing GitHub auth, or a workflow still running.",
      },
      {
        title: "7. Deploy updates later",
        body: "For updates to the same site, use the deploy skill again. In some cases the skill may automatically push a PR or update workflow for you.",
        commands: ["/deploy-website-ghp"],
        why: "A deployed site is not one-and-done. You need a repeatable path for updates, changes, fixes, and new versions.",
      },
    ],
    watchouts: [
      "GitHub Pages is front-end-only. It cannot connect directly to private databases or hide secret API keys.",
      "Use linkedin-sandbox for this workflow; personal repos are not the intended path.",
      "Marketplace plugins are approved. Random internet plugins are not a safe default.",
      "If your app needs shared writes, persistence, or backend calls, consider Google Apps Script or a governed backend path instead.",
    ],
  },
  appsScript: {
    title: "Google Apps Script web app with Google Sheets backend",
    bestFor: "Trackers, dashboards, forms, budget tools, capacity planners, team workflows, and small multi-user tools that need shared data saved to Google Sheets.",
    notFor: "Highly complex production apps, sensitive regulated workflows without approval, heavy backend compute, or experiences that need non-Google infrastructure.",
    time: "About 30-45 minutes. Requires Claude Code, a LinkedIn Google account, Drive/Sheets access, and an idea for a tracker, dashboard, or form.",
    why: "Google Apps Script can host a web app at a shareable /exec URL and use Google Sheets/Drive as lightweight storage. It does not require GitHub access, command line tools, special hosting, or a separate backend service.",
    prerequisiteNote: "This path is lighter than GitHub Pages for shared-data tools. You mainly need Claude Code, drive.google.com, and a project idea.",
    steps: [
      {
        title: "0. Prerequisites",
        body: "You need Claude Code, a LinkedIn Google account, Drive/Sheets access, and something to build. You do not need GitHub access, command-line deployment tools, a hosting plan, or special permissions for a basic prototype.",
        why: "Apps Script is a low-friction path for internal tools because Google hosts the web app and Sheets can store shared data.",
      },
      {
        title: "1. Build your HTML tool with Claude",
        body: "Ask Claude to build a single HTML file. Tell it you will connect to Google Apps Script later and ask it to use google.script.run for backend calls such as loadState() and saveState(payload). Ask for localStorage fallback so you can test the UI locally before deployment.",
        prompt: "Build me a budget tracker as a single HTML file. I will connect it to Google Apps Script later. Use google.script.run to call loadState() and saveState(payload) for the backend. Add localStorage fallback so I can test locally.",
        why: "The frontend needs to know how to call Apps Script after deployment, but localStorage fallback lets you test layout and interactions before Sheets sync exists.",
      },
      {
        title: "2. Create a Google Sheet",
        body: "Go to drive.google.com, create a new Google Sheet, and name it for your project. Keep it in the same Drive folder as your tool if your backend expects to find the Sheet by checking its parent folder.",
        why: "The Sheet becomes your lightweight database. It can hold current state, entries, changelog rows, and shared team data.",
      },
      {
        title: "3. Open Apps Script",
        body: "Inside the Google Sheet, go to Extensions > Apps Script. Delete any placeholder code in Code.gs because you will replace it. Keep each project in its own Sheet and Apps Script editor so you do not paste code into the wrong project.",
        why: "Apps Script is the backend editor. Code.gs will contain the doGet() entry point and load/save functions.",
      },
      {
        title: "4. Paste two files into Apps Script",
        body: "Ask Claude to generate Code.gs and index.html. Paste Code.gs into the default Code.gs file. Create a new HTML file named exactly index, with no extension, and paste index.html there. The name must match createHtmlOutputFromFile('index') in doGet().",
        commands: ["cat Code.gs | pbcopy", "cat index.html | pbcopy"],
        why: "Apps Script needs a server-side file for doGet/load/save and a frontend HTML file. If the index name does not match, the web app will fail to render.",
      },
      {
        title: "5. Preview before deploying",
        body: "Before deployment, open index.html in a browser to check layout and interactions. Data will not sync to Sheets yet, and that is expected. You can double-click index.html in Finder or run python3 -m http.server 8000 and open http://localhost:8000.",
        commands: ["python3 -m http.server 8000"],
        why: "This separates frontend bugs from backend/deployment bugs. localStorage fallback lets you test add/edit interactions locally.",
      },
      {
        title: "6. Deploy as a Web App",
        body: "In Apps Script, choose Deploy > New deployment. Set Type to Web app, Execute as Me, and Who has access to Anyone at LinkedIn. Click Deploy, authorize permissions when prompted, and copy the Web App URL.",
        why: "The /exec URL is the live URL colleagues can use. The /dev URL is for testing and should not be shared as the durable team link.",
      },
      {
        title: "7. Connect frontend and test",
        body: "Paste your /exec URL into your tool if your frontend needs to know it. Save something, then verify the data appears in the Google Sheet within a few seconds. If Google asks for authorization the first time, complete the dialog.",
        why: "This confirms the frontend, Apps Script backend, and Sheet storage are connected. Multiple users can write to the same shared data when the backend is designed for it.",
      },
      {
        title: "8. Share your tool",
        body: "Share the /exec URL with internal teammates. Good places include Slack, Confluence, a team bookmarks doc, a wiki page, or a go link. If you lose the URL, return to Apps Script > Deploy > Manage deployments.",
        why: "This path is useful because teammates do not need GitHub, installs, or local setup. They just open the internal URL.",
      },
      {
        title: "9. Push updates",
        body: "When you change HTML or Apps Script, go to Deploy > Manage deployments, click the pencil icon, set Version to New version, and deploy. The URL stays the same.",
        why: "Your users keep the same bookmark while you update the code behind it. Data in Drive/Sheets persists across updates.",
      },
    ],
    watchouts: [
      "Use the /exec URL for users, not /dev.",
      "Keep each project in its own Sheet and Apps Script editor.",
      "Name the HTML file index, not index.html, inside Apps Script.",
      "First-time Google authorization is normal.",
      "For tracking who changed data, a name modal is simple and reliable. Google account detection can be finicky depending on org settings.",
      "Apps Script can support multi-user shared data, but sensitive workflows still need policy review.",
    ],
  },
};

const deployDecision = {
  static: {
    title: "Choose GitHub Pages through linkedin-sandbox",
    body: "Your tool is front-end-only: HTML, Markdown, docs, a static dashboard, or a prototype that does not need shared writes or secret backend logic.",
    next: "Follow the GitHub Pages tab. Make sure Claude Code, Captain, plugins, GitHub access, and SSH are ready.",
  },
  shared: {
    title: "Choose Google Apps Script",
    body: "Your tool needs shared saved data, Google Sheets sync, multi-user writes, a changelog tab, or a lightweight backend without GitHub deployment.",
    next: "Follow the Apps Script tab. Build a single HTML frontend plus Code.gs backend.",
  },
  unsure: {
    title: "Prototype locally first",
    body: "If you are unsure, build the first version as a local HTML file with fake data. Then decide: static display goes to GitHub Pages; shared data goes to Apps Script.",
    next: "Ask Claude: 'Does this app need a backend, shared writes, API keys, or persistent team data?'",
  },
};

const deployReferenceCards = [
  ["GitHub Pages", "Static hosting", "Publishes front-end-only files from a sandbox repo. Great for docs, HTML pages, static dashboards, and prototypes."],
  ["linkedin-sandbox", "Safe repo home", "The approved sandbox GitHub organization for this internal GitHub Pages workflow. Personal repos are not the intended path."],
  ["deploy skill", "Automation bundle", "The approved Claude plugin command that creates/updates repo files, builds, commits, pushes, and triggers deployment."],
  ["Docusaurus", "Docs scaffold", "A documentation-site framework the deploy skill may generate behind the scenes for a polished static site."],
  ["Google Apps Script", "Light backend", "Google-hosted scripts that can serve an HTML app and read/write to Google Sheets."],
  ["google.script.run", "Frontend-to-backend bridge", "The browser-side way for Apps Script HTML to call server functions like loadState() and saveState(payload)."],
  ["/exec URL", "Shareable app URL", "The deployed Apps Script web app URL to share with teammates. Use this instead of /dev for normal users."],
  ["Changelog tab", "Audit trail", "A Sheet tab your backend can write on every save to record timestamps and diffs."],
];


const glossary = [
  ["Agent", "An AI helper that can pursue a goal, inspect context, use tools, adapt, verify, and ask for help when needed."],
  ["API", "A doorway one software system uses to talk to another. If your app needs live AI, weather, ticket, or database data, it may need an API."],
  ["API key", "A secret password for an API. Treat it like a credential, never paste it into public code, and rotate it if exposed."],
  ["Automation", "A predictable workflow that runs from a trigger, schedule, or button."],
  ["Backend", "The private part of an app that can protect secrets, check permissions, call APIs, and store shared data."],
  ["Branch", "A safe side version of a GitHub repository where changes can be tried before joining the main version."],
  ["Claude app", "A chat-style place for thinking, writing, planning, analysis, and prompts that do not need direct file editing."],
  ["Claude Code", "An agentic coding tool that can work inside a project folder, edit files, run commands, and connect to tools through MCP."],
  ["Codex", "OpenAI's coding agent for understanding repos, editing code, running checks, and delegating software tasks locally or in the cloud when available."],
  ["Commit", "A saved checkpoint in a repository with a short message explaining what changed."],
  ["Copilot Studio", "Microsoft's low-code tool for creating agents and agent flows that can connect to business systems and publish to channels like Teams."],
  ["CSS", "The visual instruction sheet for a web page: colors, layout, spacing, fonts, borders, and responsive behavior."],
  ["Deployment", "The process of making your app or site available somewhere other people can open it."],
  [".env", "A file often used for local secrets or settings. Do not publish it or paste secret values into public code."],
  ["File extension", "The letters after the dot in a file name, such as .html, .css, .js, .json, .py, or .md."],
  ["Frontend", "The part of an app that runs in the browser: usually HTML, CSS, and JavaScript."],
  ["Git", "The version-history system underneath GitHub. Git tracks file changes over time."],
  ["GitHub", "A platform for storing code, tracking history, collaborating, reviewing changes, and publishing some sites."],
  ["GitHub Pages", "A GitHub feature for publishing static websites from a repository."],
  ["HTML", "The structure and content of a web page, such as headings, paragraphs, buttons, sections, and forms."],
  ["JavaScript", "The behavior layer for many web apps. It reacts to clicks, filters data, saves progress, and talks to APIs."],
  ["JSON", "A structured data format used for settings, API responses, saved state, and app content."],
  ["MCP", "Model Context Protocol: a standard way for AI tools to connect to external data sources and tools."],
  ["Project root", "The top folder for one project. It is the main boundary you open in VS Code or give to a coding agent."],
  ["Pull request", "A request to review and merge changes from one branch into another."],
  ["Python", "A programming language often used for scripts, data cleanup, automation, AI experiments, local servers, and backends."],
  ["Repository", "A project on GitHub containing files, history, collaborators, issues, and settings."],
  ["Script", "A repeatable recipe that usually performs a specific job, such as converting data, starting a server, or running tests."],
  ["Skill", "A reusable AI capability or workflow that teaches an agent how to do a specialized task."],
  ["Terminal", "A text-based control room where you run commands."],
  ["VS Code", "A code editor where you can open folders, inspect files, and use coding assistants."],
];

const microsoftLessons = [
  {
    id: "copilot-studio",
    label: "Copilot Studio",
    title: "Copilot Studio: the low-code agent builder",
    summary: "Use this when your support agent should be created mostly through a guided UI and used in places like Teams, Microsoft 365, a website, or Power Platform.",
    rookie: "Think of Copilot Studio as the agent-building workshop for business users. You describe what the agent should do, add approved knowledge, add tools or flows for actions, test it, and publish it to a channel.",
    whenToUse: [
      "You want a support Q&A agent in Teams.",
      "You want an agent connected to SharePoint, Office 365, Dynamics, or Power Platform.",
      "You want low-code controls instead of building a custom app from scratch.",
      "You need business-owner-friendly testing, analytics, and publishing.",
    ],
    howTo: [
      "Start with one support problem, such as answering policy questions or drafting handoff notes.",
      "Create the agent in Copilot Studio and write clear instructions: what it should do, what it must not do, and when it should ask a human.",
      "Add knowledge sources, such as approved SharePoint pages, files, or curated URLs if allowed by company policy.",
      "Add tools only after the read-only experience works. A tool might create a ticket, look up a record, or call a flow.",
      "Test with safe examples, including messy questions, missing information, and questions the agent should refuse.",
      "Publish to a small channel first, such as Teams for a pilot group, then monitor analytics and improve.",
    ],
    supportExample: "A 'Support Policy Helper' that answers internal process questions, cites approved docs, and suggests escalation language without sending anything by itself.",
    approval: "Human review is needed before the agent sends messages, updates records, creates tickets, or gives customer-facing guidance.",
    modal: "copilot-studio-guide",
  },
  {
    id: "agent-flows",
    label: "Agent Flows",
    title: "Agent flows: repeatable work that agents can call",
    summary: "Use this when a process has predictable steps, but you still want it available inside an agent experience.",
    rookie: "An agent flow is closer to a recipe than a free-thinking agent. It can gather inputs, run steps, request human information, and return a result. The agent can call that recipe when the conversation reaches the right moment.",
    whenToUse: [
      "The task has a clear trigger and known steps.",
      "The output should be consistent, such as a weekly summary template or escalation checklist.",
      "You need a human-in-the-loop step before the workflow continues.",
      "You want a reusable action that several agents or teammates can use.",
    ],
    howTo: [
      "Write the workflow as a checklist first: trigger, inputs, steps, output, approval point.",
      "Build the flow in natural language or a visual flow builder if your company has access.",
      "Connect only the systems needed for the flow.",
      "Return a structured result: summary, risks, recommended next action, and confidence.",
      "Add it to the agent as a tool so the agent can call it when needed.",
      "Test the flow independently before trusting the agent to use it.",
    ],
    supportExample: "An 'Escalation Packet Builder' flow that collects case ID, severity, impact, blockers, owner, and next action, then drafts a review-ready escalation packet.",
    approval: "Human approval belongs before submission, posting, ticket creation, or any customer-facing action.",
    modal: "agent-flows-guide",
  },
  {
    id: "connectors",
    label: "Connectors",
    title: "Connectors: approved doors into business systems",
    summary: "Use connectors when an agent or workflow needs to talk to another system without you hand-building the API integration.",
    rookie: "A connector is like a safe adapter plug. Instead of your agent guessing how to talk to SharePoint, Office 365, Power Automate, Dynamics, or another service, the connector provides known actions and triggers.",
    whenToUse: [
      "Your agent needs to read or write data in a business system.",
      "You need authentication handled through approved Microsoft or company controls.",
      "You want prebuilt actions and triggers rather than a custom API.",
      "You need to stay within data policies, environments, and access rules.",
    ],
    howTo: [
      "Name the system the agent needs: SharePoint, Teams, Outlook, Dynamics, Jira, ServiceNow, or another source.",
      "Check whether an approved standard, premium, verified, or custom connector exists.",
      "Decide read vs write access. Start read-only if the learning goal allows it.",
      "Confirm who the connector acts as: the user, the agent, or a service account.",
      "Add the connector action to the agent or flow and test with non-sensitive records.",
      "Document exactly what data can be accessed, changed, or shared.",
    ],
    supportExample: "A 'Ticket Lookup Tool' that retrieves status and priority from a support system, then lets the agent explain what is missing before escalation.",
    approval: "Any connector that changes records, posts messages, emails people, or exposes sensitive data should have a human gate.",
    modal: "connectors-guide",
  },
  {
    id: "foundry",
    label: "Azure Foundry",
    title: "Azure/Microsoft Foundry: managed platform for serious agents",
    summary: "Use this when the agent needs custom code, enterprise hosting, tracing, evaluation, monitoring, identity, or stable endpoints.",
    rookie: "Foundry is the more technical factory. Copilot Studio is great for low-code business agents; Foundry is where engineering teams can build, host, evaluate, and monitor custom agents at scale.",
    whenToUse: [
      "You need a custom code-backed agent or backend API.",
      "The agent needs tracing, evaluations, monitoring, or stable production endpoints.",
      "You need enterprise identity, RBAC, networking, or governed deployment.",
      "The workflow is complex enough for prompt agents, workflow agents, or hosted agents.",
    ],
    howTo: [
      "Prototype the support task with fake data and a simple prompt agent first.",
      "Choose the agent type: prompt agent for configuration, workflow agent for orchestrated steps, hosted agent for custom code.",
      "Add tools carefully: search, file search, custom functions, MCP servers, or approved APIs.",
      "Trace each run so you can see model calls, tool calls, and decisions.",
      "Evaluate with test cases: easy question, ambiguous question, missing data, unsafe request, and expected refusal.",
      "Publish a version, monitor performance, and roll back or revise when quality drops.",
    ],
    supportExample: "A 'Support Triage Agent API' that receives a case ID, gathers approved evidence, proposes severity and next steps, and returns a structured draft for review.",
    approval: "Production agents need formal access, evaluation, monitoring, and human review for high-impact actions.",
    modal: "foundry-guide",
  },
  {
    id: "publish-govern",
    label: "Publish + Govern",
    title: "Publishing and governance: how agents become real",
    summary: "Use this checklist before an agent leaves your private test area and becomes something teammates rely on.",
    rookie: "Publishing is not just clicking a button. It means choosing where people will use the agent, who can access it, what data it can touch, how you will monitor mistakes, and who owns updates.",
    whenToUse: [
      "You are moving from personal prototype to team pilot.",
      "The agent will appear in Teams, a website, Microsoft 365 Copilot, or an API.",
      "The agent has access to internal data sources or record-changing tools.",
      "You need a rollback and ownership plan.",
    ],
    howTo: [
      "Choose the channel: Teams, Microsoft 365 Copilot, demo website, live website, or backend endpoint.",
      "Limit the first audience to a pilot group that understands it is being tested.",
      "Publish only after testing source citation, refusals, and human approval moments.",
      "After every change, publish again so users see the latest version.",
      "Review analytics, failed answers, user feedback, and unsafe attempts.",
      "Keep a named owner responsible for content freshness, access, and incident response.",
    ],
    supportExample: "A Teams-based support assistant released first to one region, then expanded after quality review and feedback.",
    approval: "Approval is needed before broad release, write access, customer-facing advice, or any workflow that affects records.",
    modal: "publish-guide",
  },
];

const microsoftFlipCards = [
  ["Copilot Studio", "Low-code agent builder", "Use when the support agent should live in Teams, Microsoft 365, a website, or business workflows. You configure instructions, knowledge, tools, testing, and publishing."],
  ["Agent Flows", "Repeatable workflow engine", "Use when the steps are predictable: collect info, call systems, ask a human, produce a structured output, then hand the result back to the agent."],
  ["Connectors", "Approved system adapters", "Use when the agent needs to talk to SharePoint, Office 365, Dynamics, Power Automate, or another approved service without custom API plumbing."],
  ["Azure Foundry", "Enterprise agent factory", "Use when engineering support is needed for custom code, hosting, tracing, evaluation, monitoring, identity, and stable endpoints."],
];

const microsoftAccordions = [
  {
    title: "What would I actually build first?",
    body: "Start with a read-only support knowledge agent. Give it one source, one audience, and one job: answer internal process questions with citations and tell the user when it is unsure. This avoids the riskiest parts of automation while still teaching agents, knowledge, testing, and publishing.",
  },
  {
    title: "How is Copilot Studio different from Power Automate?",
    body: "Power Automate is strongest when the work is a predictable workflow: when X happens, do Y and Z. Copilot Studio is strongest when a person is conversing with an agent that may answer, ask follow-up questions, call tools, or trigger a flow as part of the conversation.",
  },
  {
    title: "How is Copilot Studio different from Claude Code or Codex?",
    body: "Claude Code and Codex are best when you are building or changing files, apps, dashboards, and code-backed workflows. Copilot Studio is best when you want a low-code business agent that lives in Microsoft channels and connects to Microsoft or Power Platform systems.",
  },
  {
    title: "What does deployment mean here?",
    body: "For Copilot Studio, deployment usually means publishing the agent to a channel such as Teams, Microsoft 365 Copilot, or a web experience. For Foundry, deployment can mean publishing a managed agent or endpoint with identity, monitoring, and versioning.",
  },
  {
    title: "What should I ask IT or engineering before using real company data?",
    body: "Ask which sources are approved, whether the connector is allowed, whether the agent can read or write, who owns the access, what data policies apply, and where human approval is required. If the answer is unclear, keep the prototype on fake data.",
  },
];

const msBlueprints = {
  knowledge: {
    title: "Recommended build: Copilot Studio knowledge agent",
    path: "Copilot Studio -> approved knowledge source -> test answers -> publish to Teams pilot",
    why: "This is the safest first Microsoft agent because it focuses on answering from known sources instead of changing records.",
    steps: ["Create the agent and write narrow instructions.", "Add one approved SharePoint or knowledge source.", "Test source citation and refusal behavior.", "Publish to a small Teams group.", "Review missed answers weekly."],
  },
  handoff: {
    title: "Recommended build: Agent flow plus Copilot Studio",
    path: "Agent flow -> structured handoff template -> agent calls flow -> human reviews note",
    why: "Handoffs have a predictable structure but need judgment around what is important, so the agent should draft and a person should approve.",
    steps: ["Define the handoff template.", "Build a flow that gathers required fields.", "Let the agent call the flow when the user asks for a handoff.", "Return a draft with missing-info warnings.", "Require human approval before sharing."],
  },
  sla: {
    title: "Recommended build: governed workflow or Foundry-backed agent",
    path: "Approved data connector -> risk rules -> draft action list -> human approval",
    why: "SLA work can affect customer outcomes and priorities, so it needs stricter access, monitoring, and approval.",
    steps: ["Confirm approved SLA data access.", "Start with read-only risk detection.", "Define severity and aging rules with support leaders.", "Draft actions instead of making changes automatically.", "Monitor false positives and missed risks."],
  },
  incident: {
    title: "Recommended build: Foundry or Copilot Studio with strong governance",
    path: "Approved sources -> timeline extraction -> evidence summary -> review workflow -> publish summary",
    why: "Incident work has high visibility and can involve sensitive context, so traceability, source citations, and human review matter.",
    steps: ["Collect only approved incident sources.", "Extract timeline events with source references.", "Separate facts from assumptions.", "Run review with incident owner.", "Publish only the approved summary."],
  },
};

const modalContent = {
  "claude-foundations-overview": {
    title: "Claude Foundations: before VS Code",
    body: [
      "This section comes from the earlier Claude learning file and is now the bridge before the technical setup material.",
      "Start here if Claude, ChatGPT, Gemini, tokens, context windows, Projects, Artifacts, Connectors, or vibe coding still feel fuzzy.",
      "The goal is not to memorize product names. The goal is to understand what each AI surface is good at, how Claude uses context, why chats hit limits, and how to move work between sessions without losing momentum.",
      "After this section, VS Code Basics will make more sense because you will already understand why AI tools need folders, context, instructions, and a safe workflow.",
      "Pricing, model names, feature names, and company access can change. Treat this as a mental model and verify current access before using real company data.",
    ],
  },
  "app-anatomy-overview": {
    title: "Files & App Anatomy: the beginner map",
    body: [
      "This section exists because VS Code, Claude Code, Codex, GitHub, and deployment all become easier once you understand what a project folder contains.",
      "The simple model is: HTML is the page content, CSS is the visual design, JavaScript is browser behavior, JSON is structured data/settings, Python is often a helper or backend language, and scripts are repeatable recipes.",
      "A coding agent can only work well when it has the right context. The safest beginner habit is to give it one project folder, ask it to explain the folder first, then let it make scoped changes.",
      "Frontend files can be seen by users when published. Secrets, API keys, and sensitive company data should not live in frontend files; use approved backends, connectors, or company tools.",
      "After this section, VS Code Basics will feel more concrete because Explorer, Terminal, Source Control, and Claude Code will all map back to files and folders you understand.",
    ],
  },
  "vscode-overview": {
    title: "VS Code cheat sheet for beginners",
    body: [
      "VS Code is a visual workbench for a project folder. The most important beginner habit is opening the correct folder before asking an AI tool to edit anything.",
      "Create one folder per project. Open that folder with File > Open Folder. The folder name at the top of the Explorer is your current workspace.",
      "Use Explorer for files, Editor for open tabs, Terminal for commands, Search for finding text, Source Control for reviewing changes, and Extensions for installed tools like Claude Code.",
      "To switch projects, use File > Open Recent or File > Open Folder. Use File > New Window if you want two unrelated projects open at the same time.",
      "Before letting Claude Code change anything, ask it to explain the folder, propose a plan, make a scoped change, summarize changed files, and help you test locally.",
    ],
  },
  "github-overview": {
    title: "GitHub map for absolute beginners",
    body: [
      "GitHub is a shared home for project files. It remembers changes, shows who made them, supports review, and can publish simple websites through GitHub Pages.",
      "Git is the history system on your computer. GitHub is the online platform around that history. A repository is the project container on GitHub.",
      "The safest collaboration flow is: create a branch, make changes, commit a checkpoint, push to GitHub, open a pull request, review, then merge into main.",
      "GitHub Pages can publish static apps: HTML, CSS, JavaScript, images, Markdown docs, and front-end-only dashboards. It is not the right place for secret API keys, private databases, or customer-sensitive data.",
      "When AI coding tools help, still review the changed files, test locally, and ask for a risk summary before committing, pushing, or publishing.",
    ],
  },
  "claude-linkedin-overview": {
    title: "Claude Code for LinkedIn: 101 to 201 map",
    body: [
      "Claude Code 101 starts with the why: AI coding is moving from simple chat to agents that can use tools in a loop. For you, that means Claude can inspect a project, make a plan, edit files, run checks, and explain the result.",
      "The beginner path is: create a project folder, open it in VS Code, start Claude Code in that folder, ask it to explain the files, use Plan Mode for bigger changes, review diffs, and test locally.",
      "The LinkedIn/company path adds setup and approved context: GitHub access, SSH, Claude Code, Captain, and MCPs such as Google, Glean, Jira, Figma, or Trino where allowed.",
      "Claude Code 201 is the customization layer: plugins distribute reusable bundles; skills encode expertise; slash commands save repeatable prompts; subagents delegate specialized work; hooks automate lifecycle moments; MCP connects tools; parallel Claude and Agent SDK workflows support advanced teams.",
      "The safe support-team mindset is: read-only first, draft-only before human approval, approved connectors only for company data, and never commit/deploy/share changes you have not reviewed.",
    ],
  },
  "deploy-overview": {
    title: "Deployment map for rookie builders",
    body: [
      "Deployment means making something you built available to other people. The safest path depends on whether your app is static or needs a backend.",
      "GitHub Pages is for front-end-only experiences: HTML, Markdown, documentation pages, static dashboards, or prototypes. In this internal workflow, use linkedin-sandbox and the approved deploy-website-ghp plugin.",
      "Google Apps Script is for small internal tools that need saved data, Google Sheets sync, multi-user writes, or a shareable web app URL without GitHub deployment.",
      "If you need secret API keys, private databases, regulated data, or production-grade reliability, pause and ask for the approved backend path. Do not hide secrets in browser JavaScript.",
      "Beginner rule: build locally first, test with fake data, pick the deployment path, publish to a small audience, then update through the same path.",
    ],
  },
  "microsoft-overview": {
    title: "Beginner guide: Microsoft agent stack",
    body: [
      "The Microsoft path is useful when the agent should live where business users already work: Teams, Microsoft 365, SharePoint, Power Platform, websites, or Azure-backed systems.",
      "Copilot Studio is the low-code layer. It helps business teams create agents, add knowledge, connect tools, build agent flows, test behavior, and publish to channels.",
      "Connectors are the access layer. They let agents and flows talk to services through approved actions and triggers instead of you building every API integration yourself.",
      "Azure/Microsoft Foundry is the enterprise engineering layer. It is where teams build, host, trace, evaluate, publish, and monitor more custom or production-grade agents.",
      "The beginner move is simple: build read-only first, use one approved knowledge source, test with fake examples, add human approval before actions, and publish to a small pilot group.",
    ],
  },
  "copilot-studio-guide": {
    title: "How to use Copilot Studio for support work",
    body: [
      "Use Copilot Studio when you want a business-friendly agent more than a code project. It is especially useful for Teams assistants, Microsoft 365 experiences, website chat, and Power Platform workflows.",
      "A good first build is a support policy agent. Give it approved knowledge, tell it to cite sources, ask it to say when it is unsure, and prevent it from creating or sending anything without review.",
      "Your design checklist: audience, job, knowledge sources, allowed tools, blocked topics, approval points, pilot channel, owner, and quality review rhythm.",
      "Do not start with broad access. Start with one source and one use case. The agent becomes more trustworthy because every mistake is easier to diagnose.",
    ],
  },
  "agent-flows-guide": {
    title: "How to think about agent flows",
    body: [
      "Agent flows are useful when part of the work is repeatable. The agent can still talk naturally, but the flow handles the predictable recipe.",
      "For support, this is ideal for escalation packets, handoff notes, weekly summaries, intake forms, QA checklists, or approval requests.",
      "Write the flow on paper first: trigger, inputs, steps, systems touched, output, human approval point, and what happens if information is missing.",
      "The safest pattern is draft-only: the flow produces a structured output, then a human decides whether to send, post, submit, or update.",
    ],
  },
  "connectors-guide": {
    title: "How connectors fit into agent building",
    body: [
      "Connectors are the way agents and flows reach business systems. A connector may offer actions like get a file, create a record, post a message, search a list, or trigger a workflow.",
      "The main beginner question is not 'can it connect?' It is 'what exactly can it read or change, under whose identity, and who approves that access?'",
      "For a rookie build, prefer read-only connector use. Once the agent proves it can find and explain the right information, then discuss write actions with IT, security, or the system owner.",
      "Document every connector: system, purpose, read/write permissions, owner, data sensitivity, and approval checkpoint.",
    ],
  },
  "foundry-guide": {
    title: "How Azure/Microsoft Foundry fits",
    body: [
      "Foundry is for more serious AI apps and agents: custom code, hosted agents, stable endpoints, tracing, evaluations, monitoring, identity, and enterprise controls.",
      "For you, Foundry matters because it explains what happens after a prototype becomes important. A support agent that influences SLA, triage, incident handling, or customer impact needs stronger governance than a personal helper.",
      "The practical lifecycle is create, test, trace, evaluate, publish, and monitor. That means you do not just build the agent; you prove it works and keep watching it after release.",
      "Use Foundry with engineering help when you need custom integrations, managed hosting, deep observability, or production-grade controls.",
    ],
  },
  "publish-guide": {
    title: "How publishing and governance work",
    body: [
      "Publishing makes the agent available in a real channel. In Copilot Studio, that might be Teams, Microsoft 365 Copilot, a demo website, or a live web channel. In Foundry, it may be a managed endpoint or shared agent.",
      "Publish only after testing the newest version. If you change the agent but do not publish again, users may not see the updated behavior.",
      "A good rollout starts small: one team, one process, one owner, one feedback path. Expand only after the agent is useful, safe, and monitored.",
      "Governance means knowing who owns instructions, sources, tools, access, approvals, analytics, and incident response if the agent behaves badly.",
    ],
  },
};

const quiz = [
  {
    q: "Which GitHub concept is most like a saved checkpoint?",
    options: ["Commit", "API key", "MCP"],
    answer: "Commit",
  },
  {
    q: "When should you prefer an agent over a simple prompt?",
    options: ["When the task needs judgment and tool use", "When you need one sentence rewritten", "When no data is involved"],
    answer: "When the task needs judgment and tool use",
  },
  {
    q: "What should happen before an AI tool sends customer-facing content?",
    options: ["Human approval", "Automatic merge", "Delete the repo"],
    answer: "Human approval",
  },
  {
    q: "Which file type is usually the visual instruction sheet for a web page?",
    options: ["CSS", "JSON", "CSV"],
    answer: "CSS",
  },
  {
    q: "Where should a private AI API key go?",
    options: ["In an approved backend or secret store", "Directly inside app.js on GitHub Pages", "In a public screenshot"],
    answer: "In an approved backend or secret store",
  },
];

const state = {
  completed: JSON.parse(localStorage.getItem("r2b.completed") || "[]"),
  simIndex: Number(localStorage.getItem("r2b.simIndex") || "0"),
  microsoftTab: localStorage.getItem("r2b.microsoftTab") || "copilot-studio",
  foundationChapter: localStorage.getItem("r2b.foundationChapter") || "intro",
  activeSection: navItems.some(([id]) => id === window.location.hash.slice(1)) ? window.location.hash.slice(1) : "dashboard",
};

function saveState() {
  localStorage.setItem("r2b.completed", JSON.stringify(state.completed));
  localStorage.setItem("r2b.simIndex", String(state.simIndex));
  localStorage.setItem("r2b.microsoftTab", state.microsoftTab);
  localStorage.setItem("r2b.foundationChapter", state.foundationChapter);
}

function renderNav() {
  const nav = document.querySelector("#primaryNav");
  nav.innerHTML = navItems.map(([id, label, icon]) => `<a class="nav-link" href="#${id}"><span class="nav-icon">${icon}</span>${label}</a>`).join("");
}

function renderModules() {
  const list = document.querySelector("#moduleList");
  list.innerHTML = modules
    .map((module, index) => {
      const complete = state.completed.includes(index);
      return `
        <article class="module-card">
          <span class="module-number">${index + 1}</span>
          <div>
            <h3>${module.title}</h3>
            <p>${module.summary}</p>
            <ul>${module.lessons.map((lesson) => `<li>${lesson}</li>`).join("")}</ul>
          </div>
          <button class="status-toggle ${complete ? "complete" : ""}" type="button" data-module="${index}">
            ${complete ? "Completed" : "Mark done"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderProgress() {
  const total = modules.length;
  const percent = Math.round((state.completed.length / total) * 100);
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressRing").style.setProperty("--progress", `${percent}%`);
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#progressTitle").textContent = percent === 100 ? "You finished the full path." : `${state.completed.length} of ${total} modules complete.`;
  document.querySelector("#progressSubtitle").textContent =
    percent === 100 ? "Now use the recipes to build something real with safe data." : "Keep going section by section: foundations, file anatomy, VS Code, GitHub, agents, then real projects.";
}

function getCourseSections() {
  return navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
}

function renderSectionPager(activeId) {
  const sections = navItems.filter(([id]) => document.getElementById(id));
  const index = sections.findIndex(([id]) => id === activeId);
  const activeSection = document.getElementById(activeId);
  if (!activeSection || index < 0) return;

  document.querySelectorAll(".section-pager").forEach((pager) => pager.remove());
  const previous = sections[index - 1];
  const next = sections[index + 1];
  const pager = document.createElement("nav");
  pager.className = "section-pager";
  pager.setAttribute("aria-label", "Section navigation");
  pager.innerHTML = `
    <button class="ghost-button" type="button" data-section-target="${previous ? previous[0] : ""}" ${previous ? "" : "disabled"}>
      Previous${previous ? `: ${previous[1]}` : ""}
    </button>
    <span>${index + 1} of ${sections.length}</span>
    <button class="primary-button" type="button" data-section-target="${next ? next[0] : ""}" ${next ? "" : "disabled"}>
      Next${next ? `: ${next[1]}` : ""}
    </button>
  `;
  activeSection.insertAdjacentElement("afterend", pager);
}

function setActiveSection(sectionId, updateHash = true) {
  const ids = navItems.map(([id]) => id);
  const activeId = ids.includes(sectionId) && document.getElementById(sectionId) ? sectionId : "dashboard";
  state.activeSection = activeId;

  getCourseSections().forEach((section) => {
    section.classList.add("course-page");
    section.hidden = section.id !== activeId;
    section.querySelectorAll(".section-pager").forEach((pager) => {
      if (section.id !== activeId) pager.remove();
    });
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });

  const activeLabel = navItems.find(([id]) => id === activeId)?.[1] || "Dashboard";
  document.querySelector(".topbar h1").textContent = activeLabel === "Dashboard" ? "Rookie-to-Builder Academy" : activeLabel;
  document.querySelector(".topbar p").textContent =
    activeLabel === "Dashboard" ? "Learn the tools, then build real support apps, dashboards, agents, and automations safely." : "One section at a time. Use Previous and Next to move through the course.";

  renderSectionPager(activeId);
  if (updateHash) history.replaceState(null, "", `#${activeId}`);
  document.querySelector(".main").scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderToolChooser() {
  const select = document.querySelector("#toolGoal");
  const target = document.querySelector("#toolRecommendation");
  const [title, body] = toolRecommendations[select.value];
  target.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
}

function renderAgentChooser() {
  const select = document.querySelector("#agentNeed");
  const target = document.querySelector("#agentRecommendation");
  const [title, body] = agentRecommendations[select.value];
  target.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
}

function renderClaudeFoundations(activeId = state.foundationChapter) {
  const chapters = window.claudeFoundationChapters || [];
  const tabs = document.querySelector("#foundationTabs");
  const lesson = document.querySelector("#foundationLesson");
  if (!tabs || !lesson) return;

  if (!chapters.length) {
    lesson.innerHTML = `
      <article class="lesson-main">
        <div class="lesson-heading">
          <span class="tag high">Content missing</span>
          <h3>Claude Foundations content did not load</h3>
          <p>Check that claude-foundations-content.js is next to index.html and loads before app.js.</p>
        </div>
      </article>
    `;
    return;
  }

  const selected = chapters.find((chapter) => chapter.id === activeId) || chapters[0];
  state.foundationChapter = selected.id;
  saveState();

  tabs.innerHTML = chapters
    .map((chapter) => `
      <button class="lesson-tab foundation-tab ${chapter.id === selected.id ? "active" : ""}" type="button" data-foundation-tab="${chapter.id}" ${chapter.id === selected.id ? 'aria-current="page"' : ""}>
        <span>${chapter.order}</span>
        <strong>${chapter.title}</strong>
      </button>
    `)
    .join("");

  lesson.innerHTML = `
    <article class="foundation-chapter" data-foundation-current="${selected.id}">
      ${selected.html}
    </article>
  `;

  resetFoundationDesk();
  updateFoundationChecklistCount();
}

function openFoundationTerm(key) {
  const term = (window.claudeFoundationTerms || {})[key];
  if (!term) return;
  openModal(term.label, [
    term.def,
    "Beginner move: after reading the definition, return to the chapter and ask how the term changes what you should do next.",
  ]);
}

function resetFoundationDesk() {
  const lesson = document.querySelector("#foundationLesson");
  if (!lesson || !lesson.querySelector("#desk-slots")) return;
  lesson.dataset.deskCount = "0";
  for (let index = 0; index < 8; index += 1) {
    const slot = lesson.querySelector(`#ds${index}`);
    if (slot) {
      slot.className = "desk-slot";
      slot.textContent = "Empty";
    }
  }
  const bar = lesson.querySelector("#desk-bar");
  const label = lesson.querySelector("#desk-label");
  const button = lesson.querySelector("#desk-btn");
  const warning = lesson.querySelector("#desk-warning");
  const status = lesson.querySelector("#desk-status");
  if (bar) bar.style.width = "0%";
  if (label) label.textContent = "0 / 8 slots used";
  if (button) button.disabled = false;
  if (warning) warning.style.display = "none";
  if (status) status.textContent = "";
}

function addFoundationDeskItem() {
  const lesson = document.querySelector("#foundationLesson");
  if (!lesson) return;
  const labels = window.claudeFoundationDeskLabels || [];
  const count = Number(lesson.dataset.deskCount || "0");
  if (count >= 8) return;

  const slot = lesson.querySelector(`#ds${count}`);
  if (slot) {
    slot.className = `desk-slot filled${count >= 6 ? " overflow" : ""}`;
    slot.innerHTML = labels[count] || `Message ${count + 1}`;
  }

  const nextCount = count + 1;
  lesson.dataset.deskCount = String(nextCount);
  const bar = lesson.querySelector("#desk-bar");
  const label = lesson.querySelector("#desk-label");
  const button = lesson.querySelector("#desk-btn");
  const warning = lesson.querySelector("#desk-warning");
  const status = lesson.querySelector("#desk-status");
  if (bar) bar.style.width = `${Math.round((nextCount / 8) * 100)}%`;
  if (label) label.textContent = `${nextCount} / 8 slots used`;
  if (nextCount >= 8) {
    if (button) button.disabled = true;
    if (warning) warning.style.display = "block";
    if (status) status.textContent = "Desk is full!";
  } else if (nextCount >= 6 && status) {
    status.textContent = "Almost full...";
  }
}

function selectFoundationModel(model) {
  const details = window.claudeFoundationModelDetails || {};
  document.querySelectorAll("#foundationLesson .model-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.foundationModel === model);
  });
  const detail = document.querySelector("#foundationLesson #model-detail");
  if (detail && details[model]) detail.innerHTML = details[model];
}

function switchFoundationArtTab(tabName) {
  document.querySelectorAll("#foundationLesson [data-foundation-art-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.foundationArtTab === tabName);
  });
  document.querySelectorAll("#foundationLesson .tab-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === `pane-art-${tabName}`);
  });
}

function updateFoundationChecklistCount() {
  const items = document.querySelectorAll("#foundationLesson .check-item");
  const count = document.querySelector("#foundationLesson #cl-count");
  if (!items.length || !count) return;
  count.textContent = `${document.querySelectorAll("#foundationLesson .check-item.done").length} / ${items.length} done`;
}

function showFoundationDecision(id) {
  const answers = window.claudeFoundationDecisionAnswers || {};
  const answer = answers[id];
  if (!answer) return;
  document.querySelectorAll("#foundationLesson .dt-answer").forEach((item) => {
    item.style.display = "none";
  });
  const target = document.querySelector(`#foundationLesson #${CSS.escape(id)}`);
  if (!target) return;
  target.innerHTML = `
    <div class="dt-tool">${answer.icon} ${answer.tool}</div>
    <div class="dt-why">${answer.why}</div>
    <button class="dt-reset" type="button" data-foundation-decision-reset>Ask again</button>
  `;
  target.style.display = "block";
}

function renderAnatomyLessons(activeId = "folder-map") {
  const tabs = document.querySelector("#anatomyTabs");
  const lessonTarget = document.querySelector("#anatomyLesson");
  if (!tabs || !lessonTarget) return;

  const selected = anatomyLessons.find((lesson) => lesson.id === activeId) || anatomyLessons[0];
  tabs.innerHTML = anatomyLessons
    .map((lesson) => `<button class="lesson-tab ${lesson.id === selected.id ? "active" : ""}" type="button" data-anatomy-tab="${lesson.id}">${lesson.label}</button>`)
    .join("");

  const promptText = encodeURIComponent(selected.prompt);
  lessonTarget.innerHTML = `
    <article class="lesson-main anatomy-main">
      <div class="lesson-heading">
        <span class="tag medium">Files before VS Code</span>
        <h3>${selected.title}</h3>
        <p>${selected.summary}</p>
      </div>

      <div class="rookie-callout">
        <strong>Rookie translation</strong>
        <p>${selected.plain}</p>
      </div>

      <div class="lesson-columns anatomy-lesson-columns">
        <div>
          <h4>Core ideas</h4>
          <ul>${selected.keyIdeas.map((idea) => `<li>${idea}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>${selected.exampleTitle}</h4>
          <pre class="folder-tree">${selected.tree.join("\n")}</pre>
        </div>
      </div>

      <div class="anatomy-detail-grid">
        ${selected.parts
          .map(
            ([title, body]) => `
              <article>
                <h4>${title}</h4>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="anatomy-bottom-row">
        <div class="anatomy-watch">
          <strong>Beginner watch-out</strong>
          <p>${selected.watch}</p>
        </div>
        <div class="prompt-strip">
          <strong>Prompt to try</strong>
          <code>${selected.prompt}</code>
          <button class="copy-prompt" type="button" data-prompt="${promptText}">Copy prompt</button>
        </div>
      </div>
    </article>
  `;
}

function renderAnatomyScenario() {
  const select = document.querySelector("#anatomyScenario");
  const target = document.querySelector("#anatomyScenarioResult");
  if (!select || !target) return;
  const scenario = anatomyScenarios[select.value] || anatomyScenarios.staticCourse;
  target.innerHTML = `
    <div class="anatomy-result-head">
      <span class="tag">Folder pattern</span>
      <h3>${scenario.title}</h3>
    </div>
    <div class="anatomy-result-copy">
      <p><strong>Best for:</strong> ${scenario.bestFor}</p>
      <p><strong>Why it is structured this way:</strong> ${scenario.why}</p>
    </div>
    <pre class="folder-tree compact">${scenario.tree.join("\n")}</pre>
    <div class="anatomy-watch">
      <strong>Risk point</strong>
      <p>${scenario.caution}</p>
    </div>
  `;
}

function renderVSCodeLessons(activeId = "mental-model") {
  const selected = vscodeLessons.find((lesson) => lesson.id === activeId) || vscodeLessons[0];
  document.querySelector("#vscodeTabs").innerHTML = vscodeLessons
    .map((lesson) => `<button class="lesson-tab ${lesson.id === selected.id ? "active" : ""}" type="button" data-vscode-tab="${lesson.id}">${lesson.label}</button>`)
    .join("");

  document.querySelector("#vscodeLesson").innerHTML = `
    <article class="lesson-main">
      <div class="lesson-heading">
        <span class="tag">VS Code lesson</span>
        <h3>${selected.title}</h3>
        <p>${selected.summary}</p>
      </div>
      <div class="rookie-callout">
        <strong>Why this matters</strong>
        <p>${selected.why}</p>
      </div>
      <div class="lesson-columns">
        <div>
          <h4>Do this step by step</h4>
          <ol>${selected.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </div>
        <div>
          <h4>Beginner watch-out</h4>
          <p>${selected.watch}</p>
          <h4>Try this prompt</h4>
          <code>Please explain what is open in VS Code right now. What folder am I in, what files matter, and what should I do next as a beginner?</code>
        </div>
      </div>
    </article>
  `;
}

function renderVSCodeScenario() {
  const scenario = vscodeScenarios[document.querySelector("#vscodeScenario").value] || vscodeScenarios.newProject;
  document.querySelector("#vscodeScenarioResult").innerHTML = `
    <span class="tag medium">Beginner path</span>
    <h3>${scenario.title}</h3>
    <p>${scenario.answer}</p>
    <ul>${scenario.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function renderGitHubLessons(activeId = "mental-model") {
  const selected = githubLessons.find((lesson) => lesson.id === activeId) || githubLessons[0];
  document.querySelector("#githubTabs").innerHTML = githubLessons
    .map((lesson) => `<button class="lesson-tab ${lesson.id === selected.id ? "active" : ""}" type="button" data-github-tab="${lesson.id}">${lesson.label}</button>`)
    .join("");

  document.querySelector("#githubLesson").innerHTML = `
    <article class="lesson-main">
      <div class="lesson-heading">
        <span class="tag">GitHub lesson</span>
        <h3>${selected.title}</h3>
        <p>${selected.summary}</p>
      </div>
      <div class="rookie-callout">
        <strong>Why this matters</strong>
        <p>${selected.why}</p>
      </div>
      <div class="lesson-columns">
        <div>
          <h4>Step-by-step explanation</h4>
          <ol>${selected.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </div>
        <div>
          <h4>Beginner watch-out</h4>
          <p>${selected.watch}</p>
          <h4>Try this prompt</h4>
          <code>Please explain this GitHub repository in plain English. What is this project, what files matter, what branch am I on, and is it safe to publish with GitHub Pages?</code>
        </div>
      </div>
    </article>
  `;
}

function renderGitHubConcepts() {
  document.querySelector("#githubConceptGrid").innerHTML = githubConceptCards
    .map(([term, title, body]) => `
      <article class="command-card">
        <code>${term}</code>
        <strong>${title}</strong>
        <p>${body}</p>
      </article>
    `)
    .join("");
}

function renderGitHubScenario() {
  const scenario = githubScenarioGuides[document.querySelector("#githubScenario").value] || githubScenarioGuides.firstWebsite;
  document.querySelector("#githubScenarioResult").innerHTML = `
    <span class="tag medium">Beginner path</span>
    <h3>${scenario.title}</h3>
    <p>${scenario.answer}</p>
    <ul>${scenario.checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function renderGitHubChecklist() {
  document.querySelector("#githubPublishChecklist").innerHTML = githubPublishChecklist
    .map(([title, body], index) => `
      <details class="learning-accordion" ${index === 0 ? "open" : ""}>
        <summary>${title}</summary>
        <p>${body}</p>
      </details>
    `)
    .join("");
}

function renderMicrosoftLessons() {
  const tabs = document.querySelector("#microsoftTabs");
  const lesson = microsoftLessons.find((item) => item.id === state.microsoftTab) || microsoftLessons[0];
  tabs.innerHTML = microsoftLessons
    .map((item) => `<button class="lesson-tab ${item.id === lesson.id ? "active" : ""}" type="button" data-ms-tab="${item.id}">${item.label}</button>`)
    .join("");

  document.querySelector("#microsoftLesson").innerHTML = `
    <article class="lesson-main">
      <div class="lesson-heading">
        <span class="tag">How-to page</span>
        <h3>${lesson.title}</h3>
        <p>${lesson.summary}</p>
      </div>
      <div class="rookie-callout">
        <strong>Rookie translation</strong>
        <p>${lesson.rookie}</p>
      </div>
      <div class="lesson-columns">
        <div>
          <h4>Use it when...</h4>
          <ul>${lesson.whenToUse.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>How to build with it</h4>
          <ol>${lesson.howTo.map((item) => `<li>${item}</li>`).join("")}</ol>
        </div>
      </div>
      <div class="lesson-example">
        <div>
          <strong>Support example</strong>
          <p>${lesson.supportExample}</p>
        </div>
        <div>
          <strong>Human approval point</strong>
          <p>${lesson.approval}</p>
        </div>
      </div>
      <button class="primary-button" type="button" data-modal="${lesson.modal}">Open full explanation</button>
    </article>
  `;
}

function renderMicrosoftFlipGrid() {
  document.querySelector("#microsoftFlipGrid").innerHTML = microsoftFlipCards
    .map(([title, front, back], index) => `
      <button class="flip-card" type="button" data-flip-card="${index}" aria-pressed="false">
        <span class="flip-front">
          <strong>${title}</strong>
          <em>${front}</em>
          <small>Click to flip</small>
        </span>
        <span class="flip-back">
          <strong>${title}</strong>
          <em>${back}</em>
          <small>Click again to flip back</small>
        </span>
      </button>
    `)
    .join("");
}

function renderMicrosoftAccordions() {
  document.querySelector("#microsoftAccordions").innerHTML = microsoftAccordions
    .map((item, index) => `
      <details class="learning-accordion" ${index === 0 ? "open" : ""}>
        <summary>${item.title}</summary>
        <p>${item.body}</p>
      </details>
    `)
    .join("");
}

function renderMicrosoftBlueprint() {
  const scenario = document.querySelector("#msScenario").value;
  const data = document.querySelector("#msData").value;
  const channel = document.querySelector("#msChannel").value;
  const blueprint = msBlueprints[scenario];
  const riskNote = {
    internal: "Risk posture: start read-only, use approved internal sources, and cite where answers came from.",
    customer: "Risk posture: keep it draft-only until a human reviews because customer-impacting data can affect outcomes.",
    restricted: "Risk posture: use fake data until security, legal, data governance, and system owners approve the exact access.",
  }[data];
  const channelNote = {
    teams: "Best channel: Teams or Microsoft 365 Copilot, because support teams already work there.",
    web: "Best channel: internal web experience, useful when the agent should sit beside a dashboard or resource hub.",
    api: "Best channel: backend/API, which usually means engineering help and stronger Foundry/Azure governance.",
  }[channel];

  document.querySelector("#msBlueprint").innerHTML = `
    <span class="tag medium">Blueprint</span>
    <h3>${blueprint.title}</h3>
    <p>${blueprint.why}</p>
    <code>${blueprint.path}</code>
    <ul>${blueprint.steps.map((step) => `<li>${step}</li>`).join("")}</ul>
    <div class="blueprint-notes">
      <p>${riskNote}</p>
      <p>${channelNote}</p>
    </div>
  `;
}

function renderClaudeLessons(activeId = "agentic-coding") {
  const selected = claudeLinkedInLessons.find((lesson) => lesson.id === activeId) || claudeLinkedInLessons[0];
  document.querySelector("#claudeTabs").innerHTML = claudeLinkedInLessons
    .map((lesson) => `<button class="lesson-tab ${lesson.id === selected.id ? "active" : ""}" type="button" data-claude-tab="${lesson.id}">${lesson.label}</button>`)
    .join("");

  document.querySelector("#claudeLesson").innerHTML = `
    <article class="lesson-main">
      <div class="lesson-heading">
        <span class="tag">From Claude Code 101/201</span>
        <h3>${selected.title}</h3>
        <p>${selected.summary}</p>
      </div>
      <div class="rookie-callout">
        <strong>Simple explanation</strong>
        <p>${selected.simple}</p>
      </div>
      <div class="lesson-columns">
        <div>
          <h4>What the decks teach</h4>
          <ul>${selected.fromDecks.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Easy examples</h4>
          <ul>${selected.examples.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h4>Beginner rule</h4>
          <p>${selected.beginnerRule}</p>
        </div>
      </div>
    </article>
  `;
}

function renderClaudeScenario() {
  const scenario = claudeScenarioGuides[document.querySelector("#claudeScenario").value] || claudeScenarioGuides.learnRepo;
  document.querySelector("#claudeScenarioResult").innerHTML = `
    <span class="tag medium">Recommended path</span>
    <h3>${scenario.title}</h3>
    <p>${scenario.answer}</p>
    <h4>Useful Claude Code features</h4>
    <div class="tag-row">${scenario.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}</div>
    <h4>Prompt to try</h4>
    <code>${scenario.prompt}</code>
  `;
}

function renderClaudeCommands() {
  document.querySelector("#claudeCommandGrid").innerHTML = claudeCommandCards
    .map(([command, title, body]) => `
      <article class="command-card">
        <code>${command}</code>
        <strong>${title}</strong>
        <p>${body}</p>
      </article>
    `)
    .join("");
}

function renderDeployDecision() {
  const decision = deployDecision[document.querySelector("#deployNeed").value] || deployDecision.static;
  document.querySelector("#deployDecision").innerHTML = `
    <span class="tag medium">Recommendation</span>
    <h3>${decision.title}</h3>
    <p>${decision.body}</p>
    <h4>Next best step</h4>
    <p>${decision.next}</p>
  `;
}

function renderDeployGuide(activeId = "githubPages") {
  const active = deployPathGuides[activeId] || deployPathGuides.githubPages;
  document.querySelector("#deployTabs").innerHTML = Object.entries(deployPathGuides)
    .map(([id, guide]) => `<button class="lesson-tab ${id === activeId ? "active" : ""}" type="button" data-deploy-tab="${id}">${guide.title}</button>`)
    .join("");

  document.querySelector("#deployGuide").innerHTML = `
    <article class="lesson-main">
      <div class="lesson-heading">
        <span class="tag">Deployment guide</span>
        <h3>${active.title}</h3>
        <p>${active.why}</p>
      </div>
      <div class="lesson-example">
        <div>
          <strong>Best for</strong>
          <p>${active.bestFor}</p>
        </div>
        <div>
          <strong>Not for</strong>
          <p>${active.notFor}</p>
        </div>
      </div>
      <div class="rookie-callout">
        <strong>Time and prerequisites</strong>
        <p>${active.time} ${active.prerequisiteNote}</p>
      </div>
      <div class="deploy-step-list">
        ${active.steps
          .map((step, index) => `
            <details class="deploy-step" ${index === 0 ? "open" : ""}>
              <summary>
                <span class="module-number">${index}</span>
                <span><strong>${step.title}</strong><em>${step.why}</em></span>
              </summary>
              <div class="deploy-step-body">
                <p>${step.body}</p>
                ${step.prompt ? `<h4>Prompt to use</h4><code>${step.prompt}</code>` : ""}
                ${step.commands ? `<h4>Command or slash command</h4><div class="command-stack">${step.commands.map((command) => `<code>${command}</code>`).join("")}</div>` : ""}
              </div>
            </details>
          `)
          .join("")}
      </div>
      <div class="lesson-columns">
        <div>
          <h4>Important watch-outs</h4>
          <ul>${active.watchouts.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>Plain-English summary</h4>
          <p>${activeId === "githubPages" ? "Use this path when your tool is basically a website. The deploy skill handles the GitHub setup and publishes a static internal URL." : "Use this path when people need to save or share data. Apps Script serves the app and Google Sheets stores the shared data."}</p>
        </div>
      </div>
    </article>
  `;
}

function renderDeployReference() {
  document.querySelector("#deployReferenceGrid").innerHTML = deployReferenceCards
    .map(([term, title, body]) => `
      <article class="command-card">
        <code>${term}</code>
        <strong>${title}</strong>
        <p>${body}</p>
      </article>
    `)
    .join("");
}

function renderSimulator() {
  const container = document.querySelector("#simSteps");
  container.innerHTML = simSteps
    .map(([title, body], index) => {
      const status = index < state.simIndex ? "done" : index === state.simIndex ? "current" : "";
      const mark = index < state.simIndex ? "OK" : index + 1;
      return `
        <button class="sim-step ${status}" type="button" data-sim="${index}">
          <span>${mark}</span>
          <div><strong>${title}</strong><small>${body}</small></div>
          <span>${index < state.simIndex ? "Done" : index === state.simIndex ? "Next" : "Locked"}</span>
        </button>
      `;
    })
    .join("");

  const visibleStep = simSteps[Math.max(0, Math.min(state.simIndex, simSteps.length - 1))];
  const done = state.simIndex >= simSteps.length;
  document.querySelector("#simTerminal").textContent = done
    ? "$ deploy complete\nYour static site is live. In real life, check access settings, company policy, and whether your app needs a backend."
    : `$ ${visibleStep[2]}\n${visibleStep[1]}`;
}

function renderAgents() {
  const risk = document.querySelector("#riskFilter").value;
  const difficulty = document.querySelector("#difficultyFilter").value;
  const query = document.querySelector("#agentSearch").value.toLowerCase();
  const filtered = agents.filter(([name, does, tools, agentRisk, agentDifficulty, approval, platform]) => {
    const blob = `${name} ${does} ${tools} ${approval} ${platform}`.toLowerCase();
    return (risk === "all" || agentRisk === risk) && (difficulty === "all" || agentDifficulty === difficulty) && blob.includes(query);
  });

  document.querySelector("#agentGrid").innerHTML = filtered
    .map(([name, does, tools, riskLevel, difficultyLevel, approval, platform]) => {
      const index = agents.findIndex((agent) => agent[0] === name);
      return `
      <article class="agent-card">
        <div class="card-top">
          <h3>${name}</h3>
          <span class="tag ${riskLevel.toLowerCase()}">${riskLevel}</span>
        </div>
        <p>${does}</p>
        <div class="agent-meta">
          <span><strong>Data/tools:</strong> ${tools}</span>
          <span><strong>Human approval:</strong> ${approval}</span>
          <span><strong>Possible platform:</strong> ${platform}</span>
        </div>
        <div class="tag-row">
          <span class="tag">${difficultyLevel}</span>
          <span class="tag">Depends on company access</span>
        </div>
        <button class="ghost-button small-action" type="button" data-agent-guide="${index}">Open build notes</button>
      </article>
    `;
    })
    .join("") || `<p>No matching agents. Try a broader filter.</p>`;
}

function renderSetup() {
  document.querySelector("#setupList").innerHTML = setupItems
    .map((item, index) => `
      <details class="setup-item" ${index === 0 ? "open" : ""}>
        <summary>
          <span class="module-number">${index + 1}</span>
          <span>
            <strong>${item.title}</strong>
            <em>${item.summary}</em>
          </span>
        </summary>
        <div class="setup-detail-grid">
          <section>
            <h4>What this is</h4>
            <p>${item.what}</p>
          </section>
          <section>
            <h4>Why you are doing it</h4>
            <p>${item.why}</p>
          </section>
          <section>
            <h4>What it enables</h4>
            <ul>${item.enables.map((enabled) => `<li>${enabled}</li>`).join("")}</ul>
          </section>
          <section>
            <h4>Success looks like</h4>
            <p>${item.success}</p>
          </section>
          <section class="setup-watch">
            <h4>Beginner watch-out</h4>
            <p>${item.watch}</p>
          </section>
        </div>
      </details>
    `)
    .join("");
}

function renderRecipes() {
  document.querySelector("#recipeGrid").innerHTML = recipes
    .map(([title, body, prompt], index) => `
      <article class="recipe-card">
        <h3>${title}</h3>
        <p>${body}</p>
        <code>${prompt}</code>
        <div class="button-row">
          <button class="primary-button copy-prompt" type="button" data-prompt="${encodeURIComponent(prompt)}">Copy prompt</button>
          <button class="ghost-button" type="button" data-recipe-guide="${index}">How to build</button>
        </div>
      </article>
    `)
    .join("");
}

function renderGlossary() {
  const query = document.querySelector("#glossarySearch").value.toLowerCase();
  const filtered = glossary.filter(([term, definition]) => `${term} ${definition}`.toLowerCase().includes(query));
  document.querySelector("#glossaryList").innerHTML = filtered
    .map(([term, definition]) => `<div class="glossary-item"><strong>${term}</strong><span>${definition}</span></div>`)
    .join("") || `<p>No glossary match yet.</p>`;
}

function renderQuiz() {
  document.querySelector("#quizCard").innerHTML = quiz
    .map((item, index) => `
      <article class="quiz-question">
        <strong>${index + 1}. ${item.q}</strong>
        <div class="quiz-options">
          ${item.options.map((option) => `<button type="button" data-answer="${option}" data-correct="${item.answer}">${option}</button>`).join("")}
        </div>
      </article>
    `)
    .join("");
}

function openModal(title, paragraphs) {
  const body = document.querySelector("#modalBody");
  body.innerHTML = `
    <h2 id="modalTitle">${title}</h2>
    ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
  document.querySelector("#modalBackdrop").hidden = false;
  document.querySelector("#modalClose").focus();
}

function closeModal() {
  document.querySelector("#modalBackdrop").hidden = true;
}

function openAgentGuide(index) {
  const agent = agents[index];
  if (!agent) return;
  const [name, does, tools, risk, difficulty, approval, platform] = agent;
  openModal(`${name}: build notes`, [
    does,
    `Best starter version: make it read-only and draft-only. Ask it to summarize what it found, cite the source or system, and list what a human must verify.`,
    `Likely data or tools: ${tools}. Possible platform: ${platform}. Difficulty: ${difficulty}. Risk level: ${risk}.`,
    `Approval checkpoint: ${approval}. If the agent would send, update, prioritize, close, escalate, or expose sensitive information, keep a human in control.`,
    "Prototype with fake or sanitized examples first. Once the behavior is useful, ask the right system owner which approved connector, MCP, or access path is allowed.",
  ]);
}

function openRecipeGuide(index) {
  const recipe = recipes[index];
  if (!recipe) return;
  const [title, body, prompt] = recipe;
  openModal(`${title}: how to build`, [
    body,
    "Step 1: describe the audience, the input data, the output, and what the tool must never do.",
    "Step 2: ask Claude Code or Codex to create a first version with fake data. Open it locally and test the workflow before connecting real systems.",
    "Step 3: add only the smallest real integration needed. For company data, use approved connectors, MCPs, or internal tooling.",
    "Step 4: add review gates before sharing, sending, writing data, or publishing broadly.",
    `Prompt to try: ${prompt}`,
  ]);
}

function wireEvents() {
  document.body.addEventListener("click", (event) => {
    const navLink = event.target.closest(".nav-link");
    if (navLink) {
      event.preventDefault();
      setActiveSection(navLink.getAttribute("href").slice(1));
      return;
    }

    const sourceLink = event.target.closest(".source-link");
    if (sourceLink) {
      event.preventDefault();
      setActiveSection("sources");
      return;
    }

    const sectionTarget = event.target.closest("[data-section-target]");
    if (sectionTarget) {
      const target = sectionTarget.dataset.sectionTarget;
      if (target) setActiveSection(target);
      return;
    }

    const moduleButton = event.target.closest("[data-module]");
    if (moduleButton) {
      const index = Number(moduleButton.dataset.module);
      state.completed = state.completed.includes(index) ? state.completed.filter((item) => item !== index) : [...state.completed, index].sort((a, b) => a - b);
      saveState();
      renderModules();
      renderProgress();
    }

    const simButton = event.target.closest("[data-sim]");
    if (simButton) {
      const index = Number(simButton.dataset.sim);
      if (index <= state.simIndex) {
        state.simIndex = Math.min(index + 1, simSteps.length);
        saveState();
        renderSimulator();
      }
    }

    const copyButton = event.target.closest(".copy-prompt");
    if (copyButton) {
      const prompt = decodeURIComponent(copyButton.dataset.prompt);
      navigator.clipboard?.writeText(prompt);
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        copyButton.textContent = "Copy prompt";
      }, 1200);
    }

    const quizButton = event.target.closest(".quiz-options button");
    if (quizButton) {
      const group = quizButton.closest(".quiz-options");
      group.querySelectorAll("button").forEach((button) => {
        button.classList.remove("correct", "wrong");
        if (button.dataset.answer === button.dataset.correct) button.classList.add("correct");
      });
      if (quizButton.dataset.answer !== quizButton.dataset.correct) quizButton.classList.add("wrong");
    }

    const scrollButton = event.target.closest("[data-scroll]");
    if (scrollButton) {
      setActiveSection(scrollButton.dataset.scroll);
    }

    const msTab = event.target.closest("[data-ms-tab]");
    if (msTab) {
      state.microsoftTab = msTab.dataset.msTab;
      saveState();
      renderMicrosoftLessons();
    }

    const foundationTab = event.target.closest("[data-foundation-tab]");
    if (foundationTab) {
      renderClaudeFoundations(foundationTab.dataset.foundationTab);
      return;
    }

    const foundationTerm = event.target.closest("#foundationLesson [data-term]");
    if (foundationTerm) {
      openFoundationTerm(foundationTerm.dataset.term);
      return;
    }

    const foundationFlip = event.target.closest("#foundationLesson [data-foundation-flip]");
    if (foundationFlip) {
      foundationFlip.classList.toggle("flipped");
      return;
    }

    const foundationReveal = event.target.closest("#foundationLesson [data-foundation-reveal]");
    if (foundationReveal) {
      foundationReveal.classList.toggle("open");
      return;
    }

    const foundationCopy = event.target.closest("#foundationLesson [data-foundation-copy]");
    if (foundationCopy) {
      const prompt = foundationCopy.closest(".prompt-card")?.querySelector(".pc-body")?.textContent.trim();
      if (prompt) navigator.clipboard?.writeText(prompt);
      foundationCopy.textContent = "Copied";
      window.setTimeout(() => {
        foundationCopy.textContent = "Copy Prompt";
      }, 1200);
      return;
    }

    const foundationDesk = event.target.closest("#foundationLesson [data-foundation-desk]");
    if (foundationDesk) {
      if (foundationDesk.dataset.foundationDesk === "add") addFoundationDeskItem();
      if (foundationDesk.dataset.foundationDesk === "reset") resetFoundationDesk();
      return;
    }

    const foundationModel = event.target.closest("#foundationLesson [data-foundation-model]");
    if (foundationModel) {
      selectFoundationModel(foundationModel.dataset.foundationModel);
      return;
    }

    const foundationArtTab = event.target.closest("#foundationLesson [data-foundation-art-tab]");
    if (foundationArtTab) {
      switchFoundationArtTab(foundationArtTab.dataset.foundationArtTab);
      return;
    }

    const foundationCheck = event.target.closest("#foundationLesson [data-foundation-check]");
    if (foundationCheck) {
      foundationCheck.classList.toggle("done");
      updateFoundationChecklistCount();
      return;
    }

    const foundationDecision = event.target.closest("#foundationLesson [data-foundation-decision]");
    if (foundationDecision) {
      showFoundationDecision(foundationDecision.dataset.foundationDecision);
      return;
    }

    const foundationDecisionReset = event.target.closest("#foundationLesson [data-foundation-decision-reset]");
    if (foundationDecisionReset) {
      document.querySelectorAll("#foundationLesson .dt-answer").forEach((item) => {
        item.style.display = "none";
      });
      return;
    }

    const foundationJump = event.target.closest("#foundationLesson [data-foundation-jump]");
    if (foundationJump) {
      const target = foundationJump.dataset.foundationJump;
      if ((window.claudeFoundationChapters || []).some((chapter) => chapter.id === target)) renderClaudeFoundations(target);
      return;
    }

    const anatomyTab = event.target.closest("[data-anatomy-tab]");
    if (anatomyTab) {
      renderAnatomyLessons(anatomyTab.dataset.anatomyTab);
      return;
    }

    const vscodeTab = event.target.closest("[data-vscode-tab]");
    if (vscodeTab) {
      renderVSCodeLessons(vscodeTab.dataset.vscodeTab);
    }

    const githubTab = event.target.closest("[data-github-tab]");
    if (githubTab) {
      renderGitHubLessons(githubTab.dataset.githubTab);
    }

    const claudeTab = event.target.closest("[data-claude-tab]");
    if (claudeTab) {
      renderClaudeLessons(claudeTab.dataset.claudeTab);
    }

    const deployTab = event.target.closest("[data-deploy-tab]");
    if (deployTab) {
      renderDeployGuide(deployTab.dataset.deployTab);
    }

    const flipCard = event.target.closest("[data-flip-card]");
    if (flipCard) {
      const pressed = flipCard.getAttribute("aria-pressed") === "true";
      flipCard.classList.toggle("flipped", !pressed);
      flipCard.setAttribute("aria-pressed", String(!pressed));
    }

    const modalButton = event.target.closest("[data-modal]");
    if (modalButton) {
      const content = modalContent[modalButton.dataset.modal];
      if (content) openModal(content.title, content.body);
    }

    const agentGuide = event.target.closest("[data-agent-guide]");
    if (agentGuide) openAgentGuide(Number(agentGuide.dataset.agentGuide));

    const recipeGuide = event.target.closest("[data-recipe-guide]");
    if (recipeGuide) openRecipeGuide(Number(recipeGuide.dataset.recipeGuide));

    if (event.target.id === "modalBackdrop" || event.target.id === "modalClose") closeModal();
  });

  document.querySelector("#toolGoal").addEventListener("change", renderToolChooser);
  document.querySelector("#agentNeed").addEventListener("change", renderAgentChooser);
  document.querySelector("#anatomyScenario").addEventListener("change", renderAnatomyScenario);
  document.querySelector("#vscodeScenario").addEventListener("change", renderVSCodeScenario);
  document.querySelector("#githubScenario").addEventListener("change", renderGitHubScenario);
  document.querySelector("#claudeScenario").addEventListener("change", renderClaudeScenario);
  document.querySelector("#deployNeed").addEventListener("change", renderDeployDecision);
  document.querySelector("#msScenario").addEventListener("change", renderMicrosoftBlueprint);
  document.querySelector("#msData").addEventListener("change", renderMicrosoftBlueprint);
  document.querySelector("#msChannel").addEventListener("change", renderMicrosoftBlueprint);
  document.querySelector("#riskFilter").addEventListener("change", renderAgents);
  document.querySelector("#difficultyFilter").addEventListener("change", renderAgents);
  document.querySelector("#agentSearch").addEventListener("input", renderAgents);
  document.querySelector("#glossarySearch").addEventListener("input", renderGlossary);
  document.querySelector("#resetSimulatorBtn").addEventListener("click", () => {
    state.simIndex = 0;
    saveState();
    renderSimulator();
  });
  document.querySelector("#resetProgressBtn").addEventListener("click", () => {
    state.completed = [];
    saveState();
    renderModules();
    renderProgress();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    if (hash && hash !== state.activeSection) setActiveSection(hash, false);
  });
}

function init() {
  renderNav();
  renderModules();
  renderProgress();
  renderToolChooser();
  renderAgentChooser();
  renderClaudeFoundations();
  renderAnatomyLessons();
  renderAnatomyScenario();
  renderVSCodeLessons();
  renderVSCodeScenario();
  renderGitHubLessons();
  renderGitHubConcepts();
  renderGitHubScenario();
  renderGitHubChecklist();
  renderClaudeLessons();
  renderClaudeScenario();
  renderClaudeCommands();
  renderDeployDecision();
  renderDeployGuide();
  renderDeployReference();
  renderMicrosoftLessons();
  renderMicrosoftFlipGrid();
  renderMicrosoftAccordions();
  renderMicrosoftBlueprint();
  renderSimulator();
  renderAgents();
  renderSetup();
  renderRecipes();
  renderGlossary();
  renderQuiz();
  wireEvents();
  setActiveSection(state.activeSection, false);
}

init();
