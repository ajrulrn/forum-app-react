import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoArrowLeft } from 'react-icons/go';
import CommentsList from '../components/CommentsList';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import {
  asyncAddCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleDislikeCommentActionCreator,
  asyncToggleDislikeDetailActionCreator,
  asyncToggleLikeCommentActionCreator,
  asyncToggleLikeDetailActionCreator,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();

  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onToggleLikeThread = (threadId) => {
    dispatch(asyncToggleLikeDetailActionCreator(threadId));
  };

  const onToggleDislikeThread = (threadId) => {
    dispatch(asyncToggleDislikeDetailActionCreator(threadId));
  };

  const onToggleLikeComment = (commentId) => {
    dispatch(asyncToggleLikeCommentActionCreator(commentId));
  };

  const onToggleDislikeComment = (commentId) => {
    dispatch(asyncToggleDislikeCommentActionCreator(commentId));
  };

  const onReply = (content) => {
    dispatch(asyncAddCommentActionCreator(content));
  };

  if (!threadDetail) {
    return null;
  }

  const commentList = threadDetail.comments.map((comment) => ({
    ...comment,
    authUser: authUser ? authUser.id : null,
  }));

  return (
    <section className="detail-page">
      <Link to="/" className="button-back">
        <div>
          <GoArrowLeft /> View Threads
        </div>
      </Link>
      <ThreadDetail
        {...threadDetail}
        toggleLike={onToggleLikeThread}
        toggleDislike={onToggleDislikeThread}
        authUser={authUser ? authUser.id : null}
      />
      <h3 className="comment-title">Komentar ({threadDetail.comments.length})</h3>
      {
        authUser
          ? (
            <CommentInput reply={onReply} />
          ) : (
            <small className="login-alert">
              <Link to="/login">Login</Link> untuk membuat komentar
            </small>
          )
      }
      <CommentsList
        comments={commentList}
        toggleLike={onToggleLikeComment}
        toggleDislike={onToggleDislikeComment}
      />
    </section>
  );
}

export default DetailPage;
