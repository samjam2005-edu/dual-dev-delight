import { Header } from './Header';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}