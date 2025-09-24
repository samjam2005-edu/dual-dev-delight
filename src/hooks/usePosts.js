import { useLocalStorage } from './useLocalStorage';
import { seedPosts } from '@/utils/seedData';
import { toast } from '@/hooks/use-toast';

export function usePosts() {
  const [posts, setPosts] = useLocalStorage('posts', seedPosts);

  const createPost = (postData) => {
    const newPost = {
      id: crypto.randomUUID(),
      title: postData.title,
      author: postData.author,
      content: postData.content,
      excerpt: postData.content.substring(0, 150) + '...',
      tags: postData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setPosts(currentPosts => [newPost, ...currentPosts]);
    toast({
      title: "Success!",
      description: "Post created successfully.",
    });
    return newPost;
  };

  const updatePost = (id, postData) => {
    setPosts(currentPosts =>
      currentPosts.map(post =>
        post.id === id
          ? {
              ...post,
              title: postData.title,
              author: postData.author,
              content: postData.content,
              excerpt: postData.content.substring(0, 150) + '...',
              tags: postData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
              updatedAt: new Date().toISOString(),
            }
          : post
      )
    );
    toast({
      title: "Success!",
      description: "Post updated successfully.",
    });
  };

  const deletePost = (id) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== id));
    toast({
      title: "Success!",
      description: "Post deleted successfully.",
    });
  };

  const getPost = (id) => {
    return posts.find(post => post.id === id);
  };

  const searchPosts = (query, author) => {
    return posts.filter(post => {
      const matchesQuery = query === '' || 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
      
      const matchesAuthor = !author || post.author.toLowerCase().includes(author.toLowerCase());
      
      return matchesQuery && matchesAuthor;
    });
  };

  return {
    posts,
    createPost,
    updatePost,
    deletePost,
    getPost,
    searchPosts,
  };
}