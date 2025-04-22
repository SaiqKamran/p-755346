
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error boundary for the entire app
const container = document.getElementById("root");

if (!container) {
  console.error("Failed to find the root element");
} else {
  try {
    const root = createRoot(container);
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render the app:", error);
    container.innerHTML = '<div style="color: white; padding: 20px;">Something went wrong. Please refresh the page.</div>';
  }
}
