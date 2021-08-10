import React, { useState, useReducer, useEffect } from 'react';
import Event from './Event';
import reducer from '../reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const initialEvents = [];
  const [state, dispatch] = useReducer(reducer, initialEvents);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    console.log({ state });
  }, [state]);

  const addEvent = (e) => {
    e.preventDefault();
    if (title === '' || body === '') {
      return;
    }
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    dispatch({
      type: 'DELETE_ALL_EVENTS',
    });
  };

  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button className="btn btn-danger" onClick={deleteAllEvents}>
          全てのイベントを削除する
        </button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
