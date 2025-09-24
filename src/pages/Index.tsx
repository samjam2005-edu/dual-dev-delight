import { Header } from '@/components/layout/Header';
import PostList from './PostList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        <PostList />
      </main>
    </div>
  );
};

export default Index;
