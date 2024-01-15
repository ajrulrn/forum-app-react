import { describe, expect, it } from 'vitest';
import threadDetailReducer from '../reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null;
    const action = { type: 'UNKNOWN' };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    const initialState = null;
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should clear the threadDetail when given by CLEAR_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = { type: 'CLEAR_THREAD_DETAIL' };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual(null);
  });

  it('should return the threadDetail with the toggled like thread when given by TOGGLE_LIKE_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'TOGGLE_LIKE_DETAIL',
      payload: {
        userId: 'users-1',
      },
    };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
    });

    const nextState2 = threadDetailReducer(nextState, action);

    expect(nextState2).toEqual(initialState);
  });

  it('should return the threadDetail with the toggled dislike thread when given by TOGGLE_DISLIKE_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'TOGGLE_DISLIKE_DETAIL',
      payload: {
        userId: 'users-1',
      },
    };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId],
    });

    const nextState2 = threadDetailReducer(nextState, action);

    expect(nextState2).toEqual(initialState);
  });

  it('should return the threadDetail with the toggled like comment when given by TOGGLE_LIKE_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'TOGGLE_LIKE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: [action.payload.userId],
          };
        }
        return comment;
      }),
    });

    const nextState2 = threadDetailReducer(nextState, action);

    expect(nextState2).toEqual(initialState);
  });

  it('should return the threadDetail with the toggled dislike comment when given by TOGGLE_DISLIKE_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'TOGGLE_DISLIKE_COMMENT',
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };
    const nextState = threadDetailReducer(initialState, action);

    expect(nextState).toEqual({
      ...initialState,
      comments: initialState.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: [action.payload.userId],
          };
        }
        return comment;
      }),
    });

    const nextState2 = threadDetailReducer(nextState, action);

    expect(nextState2).toEqual(initialState);
  });
});
