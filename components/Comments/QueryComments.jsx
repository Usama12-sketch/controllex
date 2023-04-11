import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function Comments({ postId }) {
  const [comment, setComment] = useState('');

  const queryClient = useQueryClient();

  const { isLoading: isCommentsLoading, data: comments } = useQuery(['comments', postId], async () => {
    const { data } = await axios.get(`/api/Get/comments/${postId}`);
    return data;
  });

  const { mutate: addComment } = useMutation(async (comment) => {
    const { data } = await axios.post('/api/CUD/Comments', comment);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
      setComment('');
    }
  });

  const { mutate: updateComment } = useMutation(async ({ id, comment }) => {
    const { data } = await axios.put(`/api/comments/${id}`, { comment });
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
    }
  });

  const { mutate: deleteComment } = useMutation(async (id) => {
    const { data } = await axios.delete(`/api/CUD/Comments/${id}`);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ comment, postId });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Add comment</button>
      </form>
      {isCommentsLoading ? (
        <div>Loading comments...</div>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <div>{comment.comment}</div>
              <button onClick={() => updateComment({ id: comment.id, comment: 'Updated comment' })}>Update</button>
              <button onClick={() => deleteComment(comment.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
