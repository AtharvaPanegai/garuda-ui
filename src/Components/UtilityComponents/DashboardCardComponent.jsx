/** @format */

import React from "react";

const DashboardCardComponent = ({ headlineText, mainContentText, badgeText }) => {
  return (
    <div className="w-1/4 m-2">
      <article
        className="flex flex-col gap-4 rounded-lg border border-gray-100 
          p-6 bg-white/30 backdrop-blur-md shadow-lg dark:border-gray-800 dark:bg-black/40
          dark:backdrop-blur-sm dark:shadow-xl"
      >
        {badgeText && (
          <div className="inline-flex gap-2 self-end rounded bg-green-100/80 p-1 text-green-600 dark:bg-green-700 dark:text-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <span className="text-xs font-medium"> {badgeText} </span>
          </div>
        )}

        <div>
          <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
            {headlineText}
          </strong>

          <p>
            <span className="text-2xl font-medium text-gray-900 dark:text-white">
              {mainContentText}
            </span>
          </p>
        </div>
      </article>
    </div>
  );
};

export default DashboardCardComponent;
