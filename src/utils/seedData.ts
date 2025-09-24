import { Post } from '@/types/post';

export const seedPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React Development',
    author: 'Sarah Johnson',
    content: `React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamental concepts that make React so powerful for modern web development.

## What Makes React Special

React's component-based architecture allows developers to build encapsulated components that manage their own state. This approach leads to more predictable and maintainable code.

### Key Benefits:
- **Reusable Components**: Write once, use everywhere
- **Virtual DOM**: Efficient rendering and updates  
- **Strong Ecosystem**: Rich library support and tooling
- **Active Community**: Continuous improvements and support

## Getting Started

The easiest way to start with React is using Create React App or modern tools like Vite:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

This will set up a new React project with all the necessary build tools and configurations.`,
    excerpt: 'A comprehensive guide to getting started with React development, covering fundamental concepts and best practices.',
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for Better UI Design',
    author: 'Alex Chen',
    content: `CSS has evolved tremendously over the past few years. Modern CSS features like Grid, Flexbox, and custom properties have made it easier than ever to create beautiful, responsive designs.

## CSS Grid vs Flexbox

Understanding when to use CSS Grid vs Flexbox is crucial for modern web development:

### CSS Grid
- Two-dimensional layouts
- Perfect for page layouts
- Explicit grid definitions

### Flexbox  
- One-dimensional layouts
- Great for components
- Flexible item distribution

## Advanced Techniques

### Custom Properties (CSS Variables)
\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

### Container Queries
The future of responsive design is here with container queries, allowing components to adapt based on their container size rather than viewport size.`,
    excerpt: 'Explore modern CSS techniques including Grid, Flexbox, custom properties, and container queries for better UI design.',
    tags: ['CSS', 'Design', 'UI/UX', 'Frontend'],
    createdAt: '2024-01-14T09:30:00Z',
    updatedAt: '2024-01-14T09:30:00Z',
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for Large Applications',
    author: 'Michael Rodriguez',
    content: `TypeScript brings static typing to JavaScript, making it easier to build and maintain large applications. Here are essential best practices for TypeScript development.

## Type Safety Fundamentals

### Strict Configuration
Always enable strict mode in your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

### Interface vs Type Aliases
- Use interfaces for object shapes that might be extended
- Use type aliases for unions, primitives, and computed types

## Advanced Patterns

### Generic Constraints
\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

### Mapped Types
Mapped types allow you to create new types based on existing ones:

\`\`\`typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
}
\`\`\`

These patterns help create more flexible and reusable code while maintaining type safety.`,
    excerpt: 'Essential TypeScript best practices and advanced patterns for building maintainable large-scale applications.',
    tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Development'],
    createdAt: '2024-01-13T14:20:00Z',
    updatedAt: '2024-01-13T14:20:00Z',
  },
  {
    id: '4',
    title: 'Building Accessible Web Applications',
    author: 'Emma Wilson',
    content: `Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. Let's explore key principles and practical implementation strategies.

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility:

### Four Main Principles:
1. **Perceivable**: Information must be presentable in ways users can perceive
2. **Operable**: Interface components must be operable by all users
3. **Understandable**: Information and UI operation must be understandable
4. **Robust**: Content must be robust enough for various assistive technologies

## Practical Implementation

### Semantic HTML
Use semantic HTML elements to provide meaning and structure:

\`\`\`html
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>
\`\`\`

### ARIA Labels and Roles
When semantic HTML isn't enough, ARIA attributes provide additional context:

\`\`\`html
<button 
  aria-label="Close dialog" 
  aria-expanded="false"
  onclick="closeDialog()"
>
  ×
</button>
\`\`\`

### Keyboard Navigation
Ensure all interactive elements are keyboard accessible with proper focus management.`,
    excerpt: 'Learn how to build accessible web applications following WCAG guidelines with practical implementation examples.',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design', 'Web Standards'],
    createdAt: '2024-01-12T11:45:00Z',
    updatedAt: '2024-01-12T11:45:00Z',
  },
  {
    id: '5',
    title: 'Performance Optimization Strategies for React Apps',
    author: 'David Kim',
    content: `Performance is crucial for user experience. This guide covers essential optimization techniques for React applications.

## Core Optimization Techniques

### React.memo and useMemo
Prevent unnecessary re-renders with React.memo:

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering logic */}</div>;
});
\`\`\`

Use useMemo for expensive calculations:

\`\`\`jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);
\`\`\`

### Code Splitting
Split your code into chunks for better loading performance:

\`\`\`jsx
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Bundle Optimization

### Tree Shaking
Ensure unused code is eliminated during build:
- Use ES6 modules
- Import only what you need
- Configure webpack properly

### Image Optimization
- Use appropriate formats (WebP, AVIF)
- Implement lazy loading
- Provide responsive images with srcset

These optimizations can significantly improve your application's performance and user experience.`,
    excerpt: 'Comprehensive guide to optimizing React application performance with practical techniques and best practices.',
    tags: ['React', 'Performance', 'Optimization', 'Web Development'],
    createdAt: '2024-01-11T16:15:00Z',
    updatedAt: '2024-01-11T16:15:00Z',
  },
  {
    id: '6',
    title: 'State Management Patterns in Modern React',
    author: 'Lisa Zhang',
    content: `State management is one of the most important aspects of React development. Let's explore different patterns and when to use each approach.

## Built-in State Solutions

### useState and useReducer
For local component state, useState is perfect:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

For complex state logic, useReducer provides more control:

\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

### Context API
For sharing state across components without prop drilling:

\`\`\`jsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

## External State Management

### When to Use External Libraries
Consider external state management when you have:
- Complex state logic spread across many components
- Need for time-travel debugging
- Server state synchronization requirements
- Optimistic updates

### Popular Solutions
- **Zustand**: Lightweight and flexible
- **Redux Toolkit**: Powerful with great DevTools
- **Jotai**: Atomic state management
- **TanStack Query**: Server state specialization

The key is choosing the right tool for your specific needs rather than over-engineering your solution.`,
    excerpt: 'Explore different state management patterns in React, from built-in hooks to external libraries and when to use each.',
    tags: ['React', 'State Management', 'Architecture', 'Patterns'],
    createdAt: '2024-01-10T13:30:00Z',
    updatedAt: '2024-01-10T13:30:00Z',
  },
  {
    id: '7',
    title: 'Modern Testing Strategies for Frontend Applications',
    author: 'James Park',
    content: `Testing is essential for maintaining code quality and preventing regressions. Let's explore modern testing strategies for frontend applications.

## Testing Pyramid

### Unit Tests (70%)
Test individual functions and components in isolation:

\`\`\`jsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
\`\`\`

### Integration Tests (20%)
Test how components work together:

\`\`\`jsx
test('form submission', async () => {
  render(<ContactForm />);
  
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'John Doe' }
  });
  
  fireEvent.click(screen.getByText(/submit/i));
  
  await waitFor(() => {
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
});
\`\`\`

### End-to-End Tests (10%)
Test complete user workflows:

\`\`\`javascript
// Cypress example
cy.visit('/login');
cy.get('[data-testid=email]').type('user@example.com');
cy.get('[data-testid=password]').type('password');
cy.get('[data-testid=submit]').click();
cy.url().should('include', '/dashboard');
\`\`\`

## Best Practices

- Write tests that reflect user behavior
- Use Testing Library's user-centric queries
- Mock external dependencies appropriately
- Maintain test isolation and independence

Good testing practices lead to more reliable applications and faster development cycles.`,
    excerpt: 'Comprehensive guide to modern frontend testing strategies, from unit tests to end-to-end testing approaches.',
    tags: ['Testing', 'Quality Assurance', 'Development', 'Best Practices'],
    createdAt: '2024-01-09T10:20:00Z',
    updatedAt: '2024-01-09T10:20:00Z',
  },
  {
    id: '8',
    title: 'API Integration Patterns with React Query',
    author: 'Maria Garcia',
    content: `React Query (now TanStack Query) revolutionizes how we handle server state in React applications. Let's explore effective patterns for API integration.

## Why React Query?

Traditional state management often treats server state the same as client state, but they have different characteristics:

### Server State Characteristics:
- Persisted remotely in a location you don't control
- Requires asynchronous APIs for fetching and updating
- Implies shared ownership (can be changed by others)
- Can become "stale" in applications

## Basic Usage

### Fetching Data
\`\`\`jsx
import { useQuery } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Mutations
\`\`\`jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

function CreatePost() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });

  return (
    <button onClick={() => mutation.mutate(newPost)}>
      Create Post
    </button>
  );
}
\`\`\`

## Advanced Patterns

### Optimistic Updates
Update the UI immediately while the request is in flight for better user experience.

### Background Refetching
Keep data fresh by refetching in the background when the user refocuses the window.

React Query handles caching, synchronization, and error handling automatically, making API integration much simpler.`,
    excerpt: 'Master API integration in React applications using React Query patterns for efficient server state management.',
    tags: ['React Query', 'API', 'Data Fetching', 'State Management'],
    createdAt: '2024-01-08T15:45:00Z',
    updatedAt: '2024-01-08T15:45:00Z',
  },
  {
    id: '9',
    title: 'Design Systems: Building Scalable UI Components',
    author: 'Robert Johnson',
    content: `Design systems provide a unified language for teams to build consistent, scalable user interfaces. Let's explore how to create and maintain effective design systems.

## Foundation Elements

### Design Tokens
Design tokens are the atomic elements of a design system:

\`\`\`css
:root {
  /* Colors */
  --color-primary-50: #f0f9ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Spacing */
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
}
\`\`\`

### Component Architecture
Build components with consistent APIs and clear responsibilities:

\`\`\`jsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

## Implementation Strategy

### Documentation
- Component playground with live examples
- Usage guidelines and best practices
- Do's and don'ts with visual examples

### Governance
- Regular design system reviews
- Component contribution guidelines
- Breaking change policies

### Tooling
- Automated visual regression testing
- Design token synchronization
- Component library publishing

A well-implemented design system reduces development time, improves consistency, and creates better user experiences across all products.`,
    excerpt: 'Learn how to build and maintain scalable design systems with consistent UI components and design tokens.',
    tags: ['Design Systems', 'UI Components', 'Design Tokens', 'Scalability'],
    createdAt: '2024-01-07T12:00:00Z',
    updatedAt: '2024-01-07T12:00:00Z',
  },
  {
    id: '10',
    title: 'Security Best Practices for Modern Web Applications',
    author: 'Jennifer Lee',
    content: `Web application security is more critical than ever. Let's explore essential security practices for modern web development.

## Common Vulnerabilities

### Cross-Site Scripting (XSS)
Prevent XSS attacks by properly sanitizing user input:

\`\`\`jsx
// Bad - vulnerable to XSS
function UserComment({ comment }) {
  return <div dangerouslySetInnerHTML={{ __html: comment }} />;
}

// Good - React automatically escapes content
function UserComment({ comment }) {
  return <div>{comment}</div>;
}
\`\`\`

### Cross-Site Request Forgery (CSRF)
Protect against CSRF with proper token validation:

\`\`\`javascript
// Include CSRF token in forms
<form>
  <input type="hidden" name="_token" value={csrfToken} />
  {/* form fields */}
</form>
\`\`\`

## Authentication & Authorization

### Secure Authentication
- Use HTTPS everywhere
- Implement proper session management
- Use strong password policies
- Consider multi-factor authentication

### JWT Best Practices
\`\`\`javascript
// Store JWT securely
const token = localStorage.getItem('token'); // Avoid this
const token = httpOnlyCookie; // Prefer this

// Validate JWT on server
function validateToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}
\`\`\`

## Content Security Policy

Implement CSP headers to prevent various attacks:

\`\`\`
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
\`\`\`

Security should be built into every layer of your application, not added as an afterthought.`,
    excerpt: 'Essential security best practices for modern web applications, covering XSS, CSRF, authentication, and more.',
    tags: ['Security', 'Web Security', 'Authentication', 'Best Practices'],
    createdAt: '2024-01-06T09:15:00Z',
    updatedAt: '2024-01-06T09:15:00Z',
  }
];