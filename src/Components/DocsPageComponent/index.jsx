import React, { useState } from 'react';
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ChevronRight, Copy, Menu, Search } from 'lucide-react';
const navigation = {
  "Getting Started": [
    { title: "Installation", href: "/docs/installation" },
    { title: "Quick Start", href: "/docs/quick-start" },
    { title: "API Key Setup", href: "/docs/api-key-setup" },
    { title: "Configuration", href: "/docs/configuration" },
  ],
  "Core Concepts": [
    { title: "Endpoints Monitoring", href: "/docs/endpoints-monitoring" },
    { title: "Real-time Alerts", href: "/docs/real-time-alerts" },
    { title: "Performance Metrics", href: "/docs/performance-metrics" },
    { title: "Custom Integrations", href: "/docs/custom-integrations" },
  ],
  "Advanced Usage": [
    { title: "Webhook Setup", href: "/docs/webhook-setup" },
    { title: "CI/CD Integration", href: "/docs/ci-cd-integration" },
    { title: "Custom Dashboards", href: "/docs/custom-dashboards" },
    { title: "API Rate Limiting", href: "/docs/api-rate-limiting" },
  ],
};

const DarkDocsLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div 
        className={`fixed inset-y-0 z-50 flex w-72 flex-col border-r border-gray-800 bg-black transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        <div className="sticky top-0 z-10 border-b border-gray-800 bg-black p-4">
          <div className="flex items-center gap-2 rounded-lg border border-gray-800 px-3 py-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Quick search..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-700 bg-gray-900 px-1.5 font-mono text-xs text-gray-400">
              Ctrl K
            </kbd>
          </div>
        </div>
        <ScrollArea className="flex-1 py-4">
          {Object.entries(navigation).map(([category, items]) => (
            <div key={category} className="mb-8 px-4">
              <h4 className="mb-2 text-sm font-semibold text-gray-400">{category}</h4>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? "ml-72" : "ml-0"}`}>
        <header className="sticky top-0 z-40 border-b border-gray-800 bg-black">
          <div className="flex h-16 items-center gap-4 px-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
            <div className="flex flex-1 items-center justify-between">
              <nav className="flex items-center space-x-6">
                <a href="/" className="text-sm font-medium text-white">
                  Docs
                </a>
                <a href="/components" className="text-sm font-medium text-gray-400 hover:text-white">
                  Components
                </a>
                <a href="/blog" className="text-sm font-medium text-gray-400 hover:text-white">
                  Blog
                </a>
                <a href="/showcase" className="text-sm font-medium text-gray-400 hover:text-white">
                  Showcase
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search documentation</span>
                </Button>
              </div>
            </div>
          </div>
        </header>
        
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="mb-4 text-sm text-[#5B63D3]">
            Installation
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">
            Get started with APIRadar
          </h1>
          <p className="mb-8 text-lg text-gray-400">
            API Garuda works by scanning all of your API endpoints, monitoring their health, and providing real-time alerts for any issues.
          </p>
          
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-4 text-white">Installation</h2>
            <Tabs defaultValue="cli" className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b border-gray-800 bg-transparent p-0">
                <TabsTrigger
                  value="cli"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 font-medium text-gray-400 hover:text-white data-[state=active]:border-[#5B63D3] data-[state=active]:text-[#5B63D3]"
                >
                  API Garuda CLI
                </TabsTrigger>
                <TabsTrigger
                  value="sdk"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 font-medium text-gray-400 hover:text-white data-[state=active]:border-[#5B63D3] data-[state=active]:text-[#5B63D3]"
                >
                  Using SDK
                </TabsTrigger>
                <TabsTrigger
                  value="docker"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 font-medium text-gray-400 hover:text-white data-[state=active]:border-[#5B63D3] data-[state=active]:text-[#5B63D3]"
                >
                  Docker
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cli" className="mt-6">
                <div className="rounded-lg bg-gray-900 p-4">
                  <div className="flex items-center justify-between px-4 py-2 text-white">
                    <span>Terminal</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 px-4 font-mono text-sm text-white">
                    <p>npm install -D apiradar</p>
                    <p>npx apiradar init</p>
                  </div>
                </div>
                <div className="mt-8 rounded-lg border border-gray-800 p-4">
                  <h3 className="font-medium text-white">Configure your endpoints</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Add the paths to all of your API endpoints in your <code className="rounded bg-gray-800 px-1 py-0.5 text-[#5B63D3]">apiradar.config.js</code> file.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="sdk" className="mt-6">
                <div className="rounded-lg bg-gray-900 p-4">
                  <div className="flex items-center justify-between px-4 py-2 text-white">
                    <span>JavaScript</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 px-4 font-mono text-sm text-white">
                    <p>import APIRadar from 'apiradar';</p>
                    <p>const radar = new APIRadar('YOUR_API_KEY');</p>
                    <p>radar.monitor('/api/endpoint');</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="docker" className="mt-6">
                <div className="rounded-lg bg-gray-900 p-4">
                  <div className="flex items-center justify-between px-4 py-2 text-white">
                    <span>Docker</span>
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy code</span>
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 px-4 font-mono text-sm text-white">
                    <p>docker pull apiradar/monitor</p>
                    <p>docker run -e API_KEY=YOUR_API_KEY apiradar/monitor</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Next Steps</h2>
              <ul className="space-y-3">
                {[
                  { title: "Configure your first endpoint", href: "/docs/configure-endpoint" },
                  { title: "Set up alerts", href: "/docs/setup-alerts" },
                  { title: "Integrate with your CI/CD pipeline", href: "/docs/ci-cd-integration" },
                  { title: "Customize your dashboard", href: "/docs/customize-dashboard" },
                ].map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="group flex items-center text-[#5B63D3] hover:text-[#7C82E2]"
                    >
                      {item.title}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkDocsLayout;