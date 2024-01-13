import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_DETAIL: 'TOGGLE_LIKE_DETAIL',
  TOGGLE_DISLIKE_DETAIL: 'TOGGLE_DISLIKE_DETAIL',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_DISLIKE_COMMENT: 'TOGGLE_DISLIKE_COMMENT',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveThreadDetail(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleLikeDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDislikeDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DISLIKE_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleLikeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDislikeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadById(threadId);
      dispatch(receiveThreadDetail(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleLikeDetailActionCreator() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const isLiked = threadDetail.upVotesBy.includes(authUser.id);
    dispatch(showLoading());
    dispatch(toggleLikeDetailActionCreator(authUser.id));

    try {
      if (isLiked) {
        await api.neutralizeThreadVote(threadDetail.id);
      } else {
        await api.upVoteThread(threadDetail.id);
      }
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeDetailActionCreator(authUser.id));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDislikeDetailActionCreator() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const isDisliked = threadDetail.downVotesBy.includes(authUser.id);
    dispatch(showLoading());
    dispatch(toggleDislikeDetailActionCreator(authUser.id));

    try {
      if (isDisliked) {
        await api.neutralizeThreadVote(threadDetail.id);
      } else {
        await api.downVoteThread(threadDetail.id);
      }
    } catch (error) {
      dispatch(toggleDislikeDetailActionCreator(authUser.id));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleLikeCommentActionCreator(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const isLiked = threadDetail.comments
      .find((comment) => comment.id === commentId).upVotesBy.includes(authUser.id);
    dispatch(showLoading());
    dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      if (isLiked) {
        await api.neutralizeCommentVote({ commentId, threadId: threadDetail.id });
      } else {
        await api.upVoteComment({ commentId, threadId: threadDetail.id });
      }
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeCommentActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDislikeCommentActionCreator(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    const isDisliked = threadDetail.comments
      .find((comment) => comment.id === commentId).downVotesBy.includes(authUser.id);
    dispatch(showLoading());
    dispatch(toggleDislikeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      if (isDisliked) {
        await api.neutralizeCommentVote({ commentId, threadId: threadDetail.id });
      } else {
        await api.downVoteComment({ commentId, threadId: threadDetail.id });
      }
    } catch (error) {
      alert(error.message);
      dispatch(toggleDislikeCommentActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncAddCommentActionCreator(content) {
  return async (dispatch, getState) => {
    const { threadDetail } = getState();
    dispatch(showLoading());

    try {
      const comment = await api.addComment({ threadId: threadDetail.id, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetail,
  clearThreadDetailActionCreator,
  toggleLikeDetailActionCreator,
  toggleDislikeDetailActionCreator,
  addCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleLikeDetailActionCreator,
  asyncToggleDislikeDetailActionCreator,
  asyncToggleLikeCommentActionCreator,
  asyncToggleDislikeCommentActionCreator,
  asyncAddCommentActionCreator,
};
