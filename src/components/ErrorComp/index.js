import React from 'react';

const ErrorComp = (props) => {
  const { errorMessage } = props;
  return (
    <div className="error-comp">
      {errorMessage ? errorMessage : 'No Data Found'}
    </div>
  );
};

export default ErrorComp;
