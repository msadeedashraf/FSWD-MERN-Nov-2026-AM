# React Development Environment Setup in VS Code (Windows 11)

This guide sets up **Node.js, npm, Vite, and React** for a JavaScript-based React course.

## 1. Install Node.js and npm

Open **PowerShell or Windows Terminal** and run:

```powershell
winget install OpenJS.NodeJS.LTS
```

Node.js includes npm. Close and reopen the terminal (and VS Code, if open), then verify:

```powershell
node -v
npm -v
```

> Use a current Node.js LTS release compatible with the Vite version you install.

## 2. Install VS Code (if needed)

```powershell
winget install Microsoft.VisualStudioCode
```

Restart the terminal and check:

```powershell
code --version
```

## 3. Create a React project using Vite

Open the VS Code integrated terminal with **Ctrl + `** or use Windows Terminal.

```powershell
cd C:\
mkdir ReactProjects
cd ReactProjects
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
code .
```

If prompted during project creation, follow the prompts. The `react` template uses JavaScript and JSX.

## 4. Run the React development server

```powershell
npm run dev
```

Open the URL shown in the terminal, typically <http://localhost:5173/>. Leave the terminal running while developing. Press **Ctrl+C** to stop the server.

## 5. Install recommended VS Code extensions

```powershell
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.path-intellisense
```

## 6. Understand the project structure

```text
my-react-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Main React component |
| `src/main.jsx` | Application entry point |
| `src/App.css` | Component styling |
| `src/index.css` | Global styles |
| `package.json` | Dependencies and npm scripts |
| `vite.config.js` | Vite configuration |

## 7. Create your first React component

Replace `src/App.jsx` with:

```jsx
function App() {
  const studentName = "React Student";

  return (
    <div>
      <h1>Welcome to React!</h1>
      <h2>Hello, {studentName}</h2>
      <p>My first React application.</p>
      <button onClick={() => alert("Hello React!")}>Click Me</button>
    </div>
  );
}

export default App;
```

Save the file. Vite updates the browser automatically using Hot Module Replacement (HMR).

## 8. Essential npm commands

| Command | Purpose |
| --- | --- |
| `node -v` | Show Node.js version |
| `npm -v` | Show npm version |
| `npm install` | Install project dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm install axios` | Install Axios |
| `npm install react-router-dom` | Install React Router |
| `npm list --depth=0` | Show direct dependencies |
| `npm view npm version` | Show latest published npm version |

## 9. Optional: Add Bootstrap

```powershell
npm install bootstrap
```

Add these imports at the top of `src/main.jsx`:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

## 10. Troubleshooting

### `node` or `npm` is not recognized

Restart VS Code and your terminal after installation. Verify Node.js was installed and added to the PATH.

### PowerShell says `npm.ps1 cannot be loaded`

Use the `.cmd` executable:

```powershell
npm.cmd install
npm.cmd run dev
```

Or switch the VS Code terminal profile to **Command Prompt**. You do not need to weaken the PowerShell execution policy.

### Port 5173 is in use

```powershell
npm run dev -- --port 3000
```

## 11. Quick-start commands for students

Install Node.js once:

```powershell
winget install OpenJS.NodeJS.LTS
```

**Restart the terminal** and then run:

```powershell
node -v
npm -v
cd C:\
mkdir ReactProjects
cd ReactProjects
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
code .
npm run dev
```

> If `ReactProjects` already exists, skip `mkdir ReactProjects`. If `my-react-app` already exists, choose a different project name.

## Teaching notes

- **Node.js** runs JavaScript outside the browser and powers development tooling.
- **npm** installs and manages project packages.
- **Vite** provides the development server and production build tooling.
- **React** is the UI library used to build components.
- Start with JavaScript/JSX, then components, props, state, events, APIs, and routing before moving to Express and MongoDB.
