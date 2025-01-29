import React from "react"
import { useNavigate } from "react-router-dom"
import { BarChart2, FileText, Settings, LogOut, LightbulbIcon, Settings2Icon } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

function DashboardSidebar({ projects, onProjectSelect, onSignOut }) {
  const navigate = useNavigate()

  return (
    <div className="w-64 bg-black/50 backdrop-blur-sm p-4 border-r border-gray-800">
      <h1 className="text-2xl font-bold mb-8 text-[#9333EA]">Garuda</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
                >
                  <BarChart2 className="mr-2 h-4 w-4" />
                  Projects
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-sm border border-gray-800">
                {projects.map((project) => (
                  <DropdownMenuItem
                    key={project._id}
                    onSelect={() => onProjectSelect(project._id)}
                    className="text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
                  >
                    {project.projectName}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/invoices")}
              className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
            >
              <FileText className="mr-2 h-4 w-4" />
              Invoices
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/projectsettings")}
              className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
            >
              <Settings2Icon className="mr-2 h-4 w-4" />
              Project Settings
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/settings")}
              className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
            >
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/suggest")}
              className="w-full justify-start text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
            >
              <LightbulbIcon className="mr-2 h-4 w-4" />
              Suggest
            </Button>
          </li>
        </ul>
      </nav>
      <Button
        onClick={onSignOut}
        variant="ghost"
        className="w-full justify-start mt-auto text-white hover:text-[#9333EA] hover:bg-[#9333EA]/10"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </div>
  )
}

export default DashboardSidebar

