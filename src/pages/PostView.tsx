import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Edit, Trash2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import { usePosts } from '@/hooks/usePosts';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

export default function PostView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPost, deletePost } = usePosts();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  if (!id) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold text-destructive">Post not found</h1>
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
          <p className="text-muted-foreground mt-2">The post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
        </div>
      </Layout>
    );
  }

  const handleDelete = () => {
    deletePost(post.id);
    navigate('/');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-8">
      {/* Navigation */}
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Posts
      </Button>

      {/* Post Content */}
      <article>
        {/* Header */}
        <Card className="gradient-card border-0 mb-8">
          <CardHeader className="pb-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-card-foreground leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-medium">{post.author}</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Published {formatDate(post.createdAt)}</span>
                </div>
                
                {post.createdAt !== post.updatedAt && (
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Updated {formatDate(post.updatedAt)}</span>
                  </div>
                )}
              </div>

              {post.tags.length > 0 && (
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Content */}
        <Card className="gradient-card border-0 mb-8">
          <CardContent className="pt-8">
            <div className="prose prose-lg max-w-none text-card-foreground">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle markdown-style headers
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-4 first:mt-0">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mt-8 mb-6 first:mt-0">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-6 first:mt-0">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                
                // Handle code blocks
                if (paragraph.startsWith('```')) {
                  const lines = paragraph.split('\n');
                  const language = lines[0].replace('```', '');
                  const code = lines.slice(1, -1).join('\n');
                  
                  return (
                    <div key={index} className="my-6">
                      <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-muted-foreground font-mono whitespace-pre">
                          {code}
                        </code>
                      </div>
                    </div>
                  );
                }
                
                // Handle bullet points
                if (paragraph.includes('\n- ')) {
                  const items = paragraph.split('\n- ').filter(item => item.trim());
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-card-foreground">
                          {item.replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p key={index} className="mb-6 last:mb-0 text-card-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card className="gradient-card border-0">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Share this post or take action
              </div>
              
              <div className="flex items-center space-x-3">
                <Button asChild variant="default">
                  <Link to={`/posts/${post.id}/edit`}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Post
                  </Link>
                </Button>
                
                <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Post</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete "{post.title}"? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDelete}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive-hover"
                      >
                        Delete Post
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </article>
      </div>
    </Layout>
  );
}