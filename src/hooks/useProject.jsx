/** @format */

import {
  _addOnCallPersonForProject,
  _createApiKeyForProject,
  _createProject,
} from "../api/project";
import { useState } from "react";

export const useProject = () => {
  const [loading, setLoading] = useState(false);

  const createProject = async (projectObject) => {
    try {
      let projectCreationResponse = await _createProject(projectObject);
      return projectCreationResponse.project;
    } catch (err) {
      console.error(
        `Unable to create project... please try again after sometime`
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const createapikey = async (apikeyCreationObject) => {
    try {
      let apiKeyRepoonse = await _createApiKeyForProject(apikeyCreationObject);
      return apiKeyRepoonse.apiKey;
    } catch (error) {
      console.error(
        `Unable to create api key for this project try again after sometime`
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const addOnCallPerson = async (oncallPersonObject) => {
    try {
      let oncallPersonResp = await _addOnCallPersonForProject(
        oncallPersonObject
      );
      return true;
    } catch (error) {
      console.error(`Unable to add oncall person for this project`);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { createProject, createapikey, addOnCallPerson, loading };
};
