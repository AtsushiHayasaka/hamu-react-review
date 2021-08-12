import React, { useContext, useState } from 'react';
import {
  DELETE_ALL_OPERATION_LOGS,
  ADD_OPERATION_LOG,
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    if (title === '' || body === '') {
      return;
    }
    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601(),
    });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    let result = window.confirm('全てのイベントを削除しても良いですか？');
    if (result !== true) {
      return;
    }

    dispatch({
      type: DELETE_ALL_EVENTS,
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: '全てのイベントを削除しました',
      operatedAt: timeCurrentIso8601(),
    });
  };

  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    let result = window.confirm('全てのイベントログを削除しても良いですか？');
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };

  const unCreatable = title === '' || body === '';

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            className="form-control"
            id="formEventBody"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </div>

        <button
          className="btn btn-primary"
          disabled={unCreatable}
          onClick={addEvent}
        >
          イベントを作成する
        </button>

        <button
          className="btn btn-danger"
          disabled={state.events.length === 0}
          onClick={deleteAllEvents}
        >
          全てのイベントを削除する
        </button>

        <button
          className="btn btn-danger"
          disabled={state.operationLogs.length === 0}
          onClick={deleteAllOperationLogs}
        >
          全てのイベントログを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
