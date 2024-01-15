import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../utils/api';
import { asyncPopulateThreads } from '../action';
import { receiveThreadsActionCreator } from '../../threads/action';
import { receiveUsersActionCreator } from '../../users/action';

const fakeThreadResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUserReponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getUsers = api.getUsers;
    api._getThreads = api.getThreads;
  });

  afterEach(() => {
    api.getUsers = api._getUsers;
    api.getThreads = api._getThreads;

    delete api._getUsers;
    delete api._getThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getUsers = () => Promise.resolve(fakeUserReponse);
    api.getThreads = () => Promise.resolve(fakeThreadResponse);

    const dispatch = vi.fn();

    await asyncPopulateThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUserReponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getUsers = () => Promise.reject(fakeErrorResponse);
    api.getThreads = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncPopulateThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
