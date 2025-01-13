/** @format */

const AllApisPageComponent = ({allApis}) => {
  return (
    <div>
      <div className='space-y-4'>
        {allApis.map((api, index) => (
          <div
            key={index}
            className='flex items-center justify-between p-4 rounded-lg bg-black/30'>
            <div>
              <div className='font-medium text-white'>{api.endpoint}</div>
              <div className='text-sm text-gray-400'>
                {api.incidents} incidents • {api.responseTime} avg response
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div
                className={`text-sm ${
                  api.status === "critical"
                    ? "text-red-500"
                    : api.status === "warning"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}>
                {api.uptime} uptime
              </div>
              <Switch />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApisPageComponent;
