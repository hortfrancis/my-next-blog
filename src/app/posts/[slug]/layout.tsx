import Link from 'next/link';

export default function LayoutPostLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Link href="/">Back</Link>
        {children}
    </div>
  );
}