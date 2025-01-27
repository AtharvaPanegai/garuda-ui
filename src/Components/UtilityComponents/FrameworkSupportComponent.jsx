import React from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Server, Zap, Clock, CheckCircle } from "lucide-react"

const frameworks = [
  { name: "Express.js", status: "supported", image: "https://logo.clearbit.com/expressjs.org" },
  { name: "Fastify", status: "coming-soon", image: "https://logo.clearbit.com/fastify.io" },
  { name: "Spring Boot", status: "coming-soon", image: "https://logo.clearbit.com/spring.io" },
  { name: "Ruby on Rails", status: "coming-soon", image: "https://logo.clearbit.com/rubyonrails.org/" },
  { name: "Django", status: "coming-soon", image: "https://logo.clearbit.com/djangoproject.com/" },
]

export function FrameworkSupport() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-purple-500 flex items-center justify-center gap-2 mb-2">
          <Server className="w-8 h-8" />
          Framework Support
        </h2>
        <p className="text-lg text-gray-400">Express.js support available now, with more frameworks coming soon!</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {frameworks.map((framework) => (
          <Card
            key={framework.name}
            className={`overflow-hidden transition-all duration-300 ${
              framework.status === "supported"
                ? "border-purple-500 shadow-md shadow-purple-500/20"
                : "hover:border-gray-700"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <img
                  src={framework.image || "/placeholder.svg"}
                  alt={`${framework.name} logo`}
                  className={`h-8 ${framework.status === "coming-soon" ? "opacity-50 grayscale" : ""}`}
                />
                {framework.status === "supported" ? (
                  <Badge variant="default" className="bg-purple-600 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    Supported
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{framework.name}</h3>
              <ul className="space-y-1 text-sm">
                <FeatureItem feature="API Monitoring" supported={framework.status === "supported"} />
                <FeatureItem feature="Real-time Alerts" supported={framework.status === "supported"} />
                <FeatureItem feature="Performance Metrics" supported={framework.status === "supported"} />
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function FeatureItem({ feature, supported }) {
  return (
    <li className={`flex items-center space-x-2 ${supported ? "text-gray-200" : "text-gray-500"}`}>
      <CheckCircle className={`w-4 h-4 ${supported ? "text-purple-500" : "text-gray-700"}`} />
      <span>{feature}</span>
    </li>
  )
}

