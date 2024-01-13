import { ActionType } from './action';

function toggleThreadVote(vote, payload) {
  return vote.includes(payload.userId)
    ? vote.filter((id) => id !== payload.userId)
    : vote.concat(payload.userId);
}

function toggleLikeCommentVote(comments, payload) {
  return comments.map((comment) => {
    if (comment.id === payload.commentId) {
      return {
        ...comment,
        upVotesBy: comment.upVotesBy.includes(payload.userId)
          ? comment.upVotesBy.filter((id) => id !== payload.userId)
          : comment.upVotesBy.concat([payload.userId]),
      };
    }
    return comment;
  });
}

function toggleDislikeCommentVote(comments, payload) {
  return comments.map((comment) => {
    if (comment.id === payload.commentId) {
      return {
        ...comment,
        downVotesBy: comment.downVotesBy.includes(payload.userId)
          ? comment.downVotesBy.filter((id) => id !== payload.userId)
          : comment.downVotesBy.concat([payload.userId]),
      };
    }
    return comment;
  });
}

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: toggleThreadVote(threadDetail.upVotesBy, action.payload),
      };
    case ActionType.TOGGLE_DISLIKE_DETAIL:
      return {
        ...threadDetail,
        downVotesBy: toggleThreadVote(threadDetail.downVotesBy, action.payload),
      };
    case ActionType.TOGGLE_LIKE_COMMENT:
      return {
        ...threadDetail,
        comments: toggleLikeCommentVote(threadDetail.comments, action.payload),
      };
    case ActionType.TOGGLE_DISLIKE_COMMENT:
      return {
        ...threadDetail,
        comments: toggleDislikeCommentVote(threadDetail.comments, action.payload),
      };
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comments],
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
