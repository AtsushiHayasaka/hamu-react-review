import React, { useState } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions';

const EventForm = ({ state, dispatch }) => {
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

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを削除しても良いですか？');
    if (result !== true) {
      return;
    }

    dispatch({
      type: DELETE_ALL_EVENTS,
    });
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
          disabled={state.length === 0}
          onClick={deleteAllEvents}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
