import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/slices/userSlice"
import { setAllProjects } from "../../redux/slices/projectSlice"
import { useDashboard } from "../../hooks/useDashboard"
import { useAuth } from "../../hooks/useAuth"
import { BetaLimitationsPopup } from "../UtilityComponents/BetaLimitationsPopup"
import DashboardSkeleton from "./skeleton"
import DashboardSidebar from "./DashBoardSidebar"
import DashboardContent from "./DashboardContent"

function DashboardPageComponent() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [dashboardData, setDashboardData] = useState(null)
  const [showBetaPopup, setShowBetaPopup] = useState(true)
  const [error, setError] = useState("")

  const { signOut } = useAuth()
  const { getDashBoardDataForProject, getProjects, loading } = useDashboard()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.user.userInfo)
  const allProjects = useSelector((state) => state.project.allprojects)

  useEffect(() => {
    if (currentUser && !allProjects) {
      fetchAllProjects()
    }
  }, [currentUser, allProjects])

  useEffect(() => {
    if (allProjects && allProjects.length > 0) {
      const firstProjectId = allProjects[0]._id
      fetchSingleProjectReport(firstProjectId)
    }
  }, [allProjects])

  const fetchAllProjects = async () => {
    setError(null)
    try {
      const fetchedProjects = await getProjects(currentUser._id)
      dispatch(setAllProjects({ projects: fetchedProjects }))
    } catch (err) {
      console.error("Failed to fetch Projects", err)
      setError("Failed to fetch Projects. Please try again later.")
    }
  }

  const fetchSingleProjectReport = async (projectId) => {
    try {
      const fetchedDashboardData = await getDashBoardDataForProject(projectId)
      setDashboardData(fetchedDashboardData)
      setSelectedProject(fetchedDashboardData.project)
    } catch (err) {
      console.error("Failed to fetch Project Report", err)
      setError("Failed to fetch Project Report. Please try again later.")
    }
  }

  const handleProjectSelect = (projectId) => {
    fetchSingleProjectReport(projectId)
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate("/signin")
      dispatch(logout())
      sessionStorage.clear()
    } catch (err) {
      console.error("Failed to Sign out", err)
      setError("Failed to Sign out. Please try again.")
    }
  }

  if (!allProjects || loading || !dashboardData) {
    return <DashboardSkeleton />
  }

  return (
    <div className="flex h-screen bg-black text-white">
      <DashboardSidebar projects={allProjects} onProjectSelect={handleProjectSelect} onSignOut={handleSignOut} />
      <DashboardContent selectedProject={selectedProject} dashboardData={dashboardData} />
      {showBetaPopup && <BetaLimitationsPopup onClose={() => setShowBetaPopup(false)} />}
    </div>
  )
}

export default DashboardPageComponent

