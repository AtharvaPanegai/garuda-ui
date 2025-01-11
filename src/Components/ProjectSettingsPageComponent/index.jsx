"use client"

import { Card, CardContent, CardHeader } from "../../Components/ui/card"
import { Input } from "../../Components/ui/input"
import { Label } from "../../Components/ui/label"
import { Button } from "../../Components/ui/button"
import { Switch } from "../../Components/ui/switch"
import { Copy, RefreshCw } from 'lucide-react'
import { useToast } from "../../hooks/use-toast"

export default function ProjectSettings() {
  const { toast } = useToast()
  
  const copyApiKey = () => {
    navigator.clipboard.writeText("sk_test_4eC39HqLyjWDarjtT1zdp7dc")
    toast({
      title: "API key copied to clipboard"
    })
  }

  return (
    <div className="min-h-screen bg-black p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-purple-500">Project Settings</h1>
      
      <Card className="bg-black border border-purple-500/20">
        <CardHeader className="flex flex-row items-center gap-2 text-purple-500">
          <h2 className="text-lg font-medium">Project Details</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input
              id="name"
              defaultValue="Project Alpha"
              className="bg-black border-purple-500/20 focus-visible:ring-purple-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              defaultValue="Main project for API monitoring"
              className="bg-black border-purple-500/20 focus-visible:ring-purple-500"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>API Key</Label>
              <div className="flex gap-2">
                <Input
                  readOnly
                  value="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
                  className="font-mono bg-black border-purple-500/20"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyApiKey}
                  className="shrink-0 border-purple-500/20 hover:bg-purple-500 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button
              variant="outline"
              className="border-purple-500/20 hover:bg-purple-500 hover:text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate API Key
            </Button>
          </div>

          <div className="space-y-4">
            <Label>Notifications</Label>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="incidents" className="cursor-pointer">Incident Alerts</Label>
                <Switch 
                  id="incidents" 
                  defaultChecked 
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="performance" className="cursor-pointer">Performance Alerts</Label>
                <Switch 
                  id="performance" 
                  defaultChecked 
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="updates" className="cursor-pointer">System Updates</Label>
                <Switch 
                  id="updates" 
                  defaultChecked 
                  className="data-[state=checked]:bg-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label>On-Call Contact</Label>
            <div className="space-y-2">
              <Input
                placeholder="Name"
                defaultValue="John Doe"
                className="bg-black border-purple-500/20 focus-visible:ring-purple-500"
              />
              <Input
                type="email"
                placeholder="Email"
                defaultValue="john.doe@example.com"
                className="bg-black border-purple-500/20 focus-visible:ring-purple-500"
              />
              <Input
                placeholder="Phone"
                defaultValue="+1 (555) 000-0000"
                className="bg-black border-purple-500/20 focus-visible:ring-purple-500"
              />
            </div>
          </div>

          <Button className="w-full bg-purple-500 hover:bg-purple-600">
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

