import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

const OperationLogs = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog, index) => (
            <OperationLog key={index} operationLog={operationLog} />
          ))}
        </tbody>
      </table>
    </>
  );
};

// イベントを作成をクリック→ADD_OPERATION_LOGをdispatch description:イベントを作成しました
//イベントを削除をクリック→ADD_OPERATION_LOGをdispatch description: イベント(id=1)を削除しました
//イベントを削除をクリック→ADD_OPERATION_LOGをdispatch description: 全てのイベントを削除しました
//全ての操作ログを削除をクリック →window.confirm OK →　DELETE_ALL_OPERATION_LOGSをdispatch

export default OperationLogs;
