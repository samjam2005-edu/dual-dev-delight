import { Link, useLocation } from 'react-router-dom';
import { PenTool, Home, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center">
        <Link to="/" className="flex items-center space-x-2">
          <PenTool className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">PostHub</span>
        </Link>
        
        <nav className="flex items-center space-x-6 ml-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/' 
                ? 'text-foreground' 
                : 'text-muted-foreground'
            }`}
          >
            <Home className="h-4 w-4 inline-block mr-1" />
            Posts
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button asChild variant="default" size="sm" className="shadow-glow">
            <Link to="/posts/new">
              <Plus className="h-4 w-4 mr-1" />
              New Post
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}