import { PostForm } from '@/components/post/PostForm';
import { Layout } from '@/components/layout/Layout';
import { usePosts } from '@/hooks/usePosts';

export default function CreatePost() {
  const { createPost } = usePosts();

  return (
    <Layout>
      <PostForm
        title="Create New Post"
        submitLabel="Create Post"
        onSubmit={createPost}
      />
    </Layout>
  );
}