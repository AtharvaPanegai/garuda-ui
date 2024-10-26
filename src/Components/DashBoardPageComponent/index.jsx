/** @format */

import { Button } from "../ui/button";
import ComposedChartWithAxisLabels from "../UIComponents/ComposedChartWithAxisLabels";
import HyperSidebar from "../UIComponents/HyperSidebar";
import TwoSimplePieChart from "../UIComponents/TwoSimplePieChart";
import composedChartData from "../../sample/composedChart.sampleData.json";
import DashboardCardComponent from "../UtilityComponents/DashboardCardComponent";

const DashBoardPageComponent = () => {
  return (
    <div className='flex'>
      {" "}
      {/* Flexbox layout and full screen height */}
      {/* Sidebar */}
      <div className='w-1/5 fixed'>
        {" "}
        {/* Sidebar takes 1/5th of the width */}
        <HyperSidebar />
      </div>
      <div className='radar-dark-blur-bg overflow-y-auto w-4/5 ml-[20%]'>
        <h2 className='radar-white-text '> Hi Customer !</h2>
        <div className='flex flex-row mt-5'>
          <DashboardCardComponent
            headlineText={"Radar Added"}
            mainContentText={"366 Days Ago"}
            badgeText={"Up & Running"}
          />
          <DashboardCardComponent
            headlineText={"Total Apis"}
            mainContentText={"408"}
            badgeText={"Up & Running"}
          />
          <DashboardCardComponent
            headlineText={"Incidents Reported"}
            mainContentText={"11"}
            badgeText={"On Radar"}
          />
          <DashboardCardComponent
            headlineText={"OnCall Person"}
            mainContentText={"Atharva Panegai"}
            badgeText={"Alerting Via Email, SMS & Call"}
          />
        </div>
        <div className='pt-2 pb-2'>
          <div className='flex flex-col gap-4 rounded-lg border border-gray-100 p-6 bg-white/30 backdrop-blur-md shadow-lg dark:border-gray-800 dark:bg-black/40 dark:backdrop-blur-sm dark:shadow-xl'>
            <h2 className='text-gray-900 dark:text-white font-semibold text-3xl'>
              API Hits
              <br />
              <span className='text-base text-gray-500'>
                Total number of API hits across all projects and APIs
              </span>
            </h2>
            <ComposedChartWithAxisLabels
              chartData={composedChartData.graphData}
            />
          </div>
        </div>
      <div>

        <div className='flex flex-col w-1/2 gap-4 rounded-lg border border-gray-100 p-6 bg-white/30 backdrop-blur-md shadow-lg dark:border-gray-800 dark:bg-black/40 dark:backdrop-blur-sm dark:shadow-xl'>
        <h2 className='text-gray-900 dark:text-white font-semibold text-3xl'>
              Status Codes
              <br />
              <span className='text-base text-gray-500'>
                Overall StatusCodes Received for these APIs
              </span>
            </h2>
          <TwoSimplePieChart />
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashBoardPageComponent;
