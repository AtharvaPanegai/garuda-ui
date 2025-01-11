/** @format */

import { _getSingleProjectData } from "../api/dashboard";
import { _getAllProjectsOfCustomer } from "../api/project";
import { useState } from "react";

export const useDashboard = () => {
  const [loading, setLoading] = useState(false);

  const getProjects = async (customerId) => {
    try {
      let projects = await _getAllProjectsOfCustomer(customerId);
      return projects.data.projects;
    } catch (err) {
      console.log("Failed to Fetch projects", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getDashBoardDataForProject = async (projectId) => {
    try {
      let projectDetails = await _getSingleProjectData(projectId);
      return projectDetails.data.projectReport
    } catch (err) {
      console.log(`Failed to get dashboard data for project`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { getProjects, getDashBoardDataForProject, loading };
};
