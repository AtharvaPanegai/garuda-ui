import DashboardCardComponent from '../../Components/UtilityComponents/DashboardCardComponent'
import React from 'react'

const PlayGroundPage = () => {
  return (
    <div>
        <div className='flex flex-row radar-dark-slate-bg min-h-screen'>
        <DashboardCardComponent headlineText={"Total Apis Added"} mainContentText={"408"} badgeText={"Up & Running"} />
        <DashboardCardComponent headlineText={"Total Apis Added"} mainContentText={"408"} badgeText={"Up & Running"} />
        <DashboardCardComponent headlineText={"Total Apis Added"} mainContentText={"408"} badgeText={"Up & Running"} />
        </div>
    </div>
  )
}

export default PlayGroundPage