import { useParams, useNavigate } from 'react-router-dom';
import { PostForm } from '@/components/post/PostForm';
import { Layout } from '@/components/layout/Layout';
import { usePosts } from '@/hooks/usePosts';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function EditPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPost, updatePost } = usePosts();

  if (!id) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold text-destructive">Invalid Post</h1>
          <Button onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
        </div>
      </Layout>
    );
  }

  const post = getPost(id);

  if (!post) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold text-muted-foreground">Post not found</h1>
          <p className="text-muted-foreground mt-2">The post you're trying to edit doesn't exist.</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (formData: any) => {
    updatePost(id, formData);
  };

  return (
    <Layout>
      <PostForm
        title={`Edit "${post.title}"`}
        submitLabel="Update Post"
        onSubmit={handleSubmit}
        initialData={{
          title: post.title,
          author: post.author,
          content: post.content,
          tags: post.tags.join(', '),
        }}
      />
    </Layout>
  );
}