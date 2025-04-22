
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Error handling for the root app
const renderApp = () => {
  try {
    const rootElement = document.getElementById("root");
    
    if (!rootElement) {
      console.error("Root element not found!");
      return;
    }
    
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Failed to render the application:", error);
    
    // Create fallback UI
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h1>Something went wrong</h1>
          <p>The application failed to load. Please try refreshing the page.</p>
        </div>
      `;
    }
  }
};

renderApp();
