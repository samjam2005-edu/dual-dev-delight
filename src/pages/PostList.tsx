import { useState } from 'react';
import { Search, Filter, BookOpen, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PostCard } from '@/components/post/PostCard';
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

export default function PostList() {
  const { posts, deletePost, searchPosts } = usePosts();
  const [searchQuery, setSearchQuery] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');
  const [deleteId, setDeleteId] = useState<string>('');
  
  const filteredPosts = searchPosts(searchQuery, authorFilter);
  const authors = Array.from(new Set(posts.map(post => post.author)));

  const handleDelete = (id: string) => {
    deletePost(id);
    setDeleteId('');
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
          Post Management Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover, create, and manage your blog posts in one beautiful interface.
        </p>
        
        <div className="flex items-center justify-center gap-8 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span>{posts.length} Posts</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-accent" />
            <span>{authors.length} Authors</span>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts by title, content, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 focus-ring"
            />
          </div>
          
          <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <select
              value={authorFilter}
              onChange={(e) => setAuthorFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <option value="">All Authors</option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(searchQuery || authorFilter) && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
            </span>
            {(searchQuery || authorFilter) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setAuthorFilter('');
                }}
                className="h-auto p-0 text-primary hover:text-primary-hover"
              >
                Clear filters
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post} 
              onDelete={(id) => setDeleteId(id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            {searchQuery || authorFilter ? 'No posts found' : 'No posts yet'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {searchQuery || authorFilter 
              ? 'Try adjusting your search criteria'
              : 'Create your first post to get started'
            }
          </p>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId('')}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleDelete(deleteId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive-hover"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}