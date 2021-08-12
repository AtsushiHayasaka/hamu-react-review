import React from 'react';

const OperationLog = ({ operationLog }) => {
  const { description, operatedAt } = operationLog;
  return (
    <>
      <tr>
        <td>{description}</td>
        <td>{operatedAt}</td>
      </tr>
    </>
  );
};

export default OperationLog;
