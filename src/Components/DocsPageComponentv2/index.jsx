import React from 'react';
import { Copy, CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from "../ui/button"
import { useToast } from "../../hooks/use-toast"

const CodeBlock = ({ children, language }) => {
  const { toast } = useToast()
  
  const copyCode = () => {
    navigator.clipboard.writeText(children);
    toast({
      title: "Code copied to clipboard",
      duration: 2000,
    })
  };

  return (
    <div className="relative">
      <pre className="bg-black/50 backdrop-blur-sm border border-[#3F3F46] rounded-lg p-4 overflow-x-auto">
        <code className="text-white font-mono text-sm">{children}</code>
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2 hover:bg-purple-500 hover:text-white"
        onClick={copyCode}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default function DocsPageComponentv2() {

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <a href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full" />
          <span className="ml-2 text-lg font-bold">Garuda</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="/" className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Home
          </a>
          <a href="/pricing" className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Pricing
          </a>
          <a href="/contact" className="text-sm font-medium hover:text-[#9333EA] transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <section className="w-full pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-black via-[#3B0764] to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Documentation
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]">
                    Get Started with Garuda
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl lg:text-2xl">
                  Learn how to integrate Garuda's API monitoring into your Express.js applications
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="space-y-12">
              {/* Installation */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-500">Installation</h2>
                <p className="text-zinc-400">
                  Install the api-radar package using npm:
                </p>
                <CodeBlock language="bash">
                  npm install api-radar
                </CodeBlock>
              </div>

              {/* Setup */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-500">Setup</h2>
                <p className="text-zinc-400">
                  Import and initialize api-radar in your Express.js application's main file (app.js, server.js, or index.js):
                </p>
                <CodeBlock language="javascript">
                  {`const express = require('express');
const { AddRadar } = require("api-radar");

const app = express();

// Your middleware and routes here

// Initialize api-radar
AddRadar(app, process.env.PROJECT_ID, process.env.GARUDA_API_KEY);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
                </CodeBlock>
              </div>

              {/* Configuration */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-500">Configuration</h2>
                <p className="text-zinc-400">
                  You'll need to set up your environment variables with your Garuda credentials:
                </p>
                <CodeBlock language="env">
                  {`PROJECT_ID=your_project_id
GARUDA_API_KEY=your_api_key`}
                </CodeBlock>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500 mt-0.5" />
                    <p>You can find your Project ID and API Key in your Garuda dashboard under Project Settings.</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-500">Features</h2>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                    <span>Automatically collects and logs API endpoints in your Express.js application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                    <span>Handles routes registered directly on the app and nested routes using routers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                    <span>Integrates with Garuda's backend services for comprehensive API health monitoring</span>
                  </li>
                </ul>
              </div>

              {/* Example Usage */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-500">Example Usage</h2>
                <p className="text-zinc-400">
                  Here's a complete example of how to set up api-radar in an Express.js application:
                </p>
                <CodeBlock language="javascript">
                  {`const express = require('express');
const { AddRadar } = require("api-radar");
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/users', (req, res) => {
  res.json({ message: 'Users endpoint' });
});

app.post('/api/data', (req, res) => {
  res.json({ message: 'Data received' });
});

// Initialize api-radar - make sure this comes after your routes
AddRadar(app, process.env.PROJECT_ID, process.env.GARUDA_API_KEY);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
                </CodeBlock>
              </div>

              {/* Next Steps */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-purple-500">Next Steps</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <a href="/dashboard" className="group">
                    <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-[#3F3F46] rounded-lg hover:border-purple-500/50 transition-colors">
                      <h3 className="text-xl font-bold text-purple-500 mb-2">View Your Dashboard</h3>
                      <p className="text-zinc-400">Monitor your API endpoints and view detailed analytics.</p>
                    </div>
                  </a>
                  <a href="/contact" className="group">
                    <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-[#3F3F46] rounded-lg hover:border-purple-500/50 transition-colors">
                      <h3 className="text-xl font-bold text-purple-500 mb-2">Get Support</h3>
                      <p className="text-zinc-400">Need help? Our support team is ready to assist you.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#3F3F46] py-6 md:py-8">
        <div className="container flex flex-col gap-4 px-4 md:px-6 md:flex-row md:items-center md:justify-between mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full" />
            <span className="text-sm">© 2024 Garuda. All rights reserved.</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a href="/privacy" className="text-sm hover:text-[#9333EA]">
              Privacy
            </a>
            <a href="/terms" className="text-sm hover:text-[#9333EA]">
              Terms
            </a>
            <a href="/contact" className="text-sm hover:text-[#9333EA]">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

