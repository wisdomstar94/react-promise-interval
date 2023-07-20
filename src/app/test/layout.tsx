import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-promise-interval test',
  description: 'react-promise-interval test',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
