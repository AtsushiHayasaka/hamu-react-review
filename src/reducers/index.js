import React from 'react';

// 流れ
// タイトル入力
// ボディ入力
// ボタン(addEvent)押下→dispatch
// stateがイベント一覧へ
// action =  {
//   type: 'CREATE_EVENT',
//   title,
//   id,
//   body,
//   events = [...state, {id, title, body}]
// }

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state;
    case 'DELETE_ALL_EVENTS':
      return [];
    default:
      return state;
  }
};

export default events;
