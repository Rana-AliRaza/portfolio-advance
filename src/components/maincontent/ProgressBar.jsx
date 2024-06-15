// Import React
// import React from 'react';
// Import the ProgressBar component from the 'progress-bar' library
import ProgressBar from 'progress-bar';

// Define the ProgressBarExample functional component
const ProgressBarr = () => {
  return (
    <div >
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Progress Bars Example</h1>

        <div className="mb-4">
          <p className="font-semibold">Progress 1 - 100%</p>
          <ProgressBar percentage={100} />
        </div>

        <div className="mb-4">
          <p className="font-semibold">Progress 2 - 90%</p>
          <ProgressBar percentage={90} />
        </div>

        <div className="mb-4">
          <p className="font-semibold">Progress 3 - 75%</p>
          <ProgressBar percentage={75} />
        </div>
      </div>
    </div>
  );
};

// Export the component as default
export default ProgressBarr;
