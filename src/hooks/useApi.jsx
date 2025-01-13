/** @format */

import { _disableRadarOnApi, _enableRadarApi } from "@/api/RadarApi";
import { useState } from "react";

export const useApi = () => {
  const [loading, setLoading] = useState(false);

  const enableMonitoring = async (apiId) => {
    try {
      let resp = await _enableRadarApi(apiId);
      return resp;
    } catch (err) {
      console.error(`Error in enabling monitoring for this api`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const disableMonitoring = async (apiId) => {
    try {
      let resp = await _disableRadarOnApi(apiId);
      return resp;
    } catch (err) {
      console.error(`Failed to disable monitoring for this api`);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { enableMonitoring, disableMonitoring, loading };
};
