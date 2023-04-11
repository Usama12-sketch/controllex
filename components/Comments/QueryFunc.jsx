import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const queryClient = new useQueryClient();

// Fetch all Comments
export function useFetchComments() {
  return useQuery('Comments', async () => {
    const { data } = await axios.get(`${API_URL}/Comments`);
    return data;
  });
}

// Add a new comment
export function useAddComment() {
  const queryClient = useQueryClient();

  return useMutation(async (comment) => {
    const { data } = await axios.post(`${API_URL}/Comments`, comment);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('Comments');
    },
  });
}

// Update an existing comment
export function useUpdateComment() {
  const queryClient = useQueryClient();

  return useMutation(async (comment) => {
    const { data } = await axios.put(`${API_URL}/Comments/${comment.id}`, comment);
    return data;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('Comments');
    },
  });
}

// Delete an existing comment
export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation(async (id) => {
    await axios.delete(`${API_URL}/Comments/${id}`);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('Comments');
    },
  });
}
