import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <p className="mt-8 font-mono text-sm text-accent-to">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Lost in space.</h1>
      <p className="mt-3 text-muted">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/10 px-5 py-2 text-sm transition-colors hover:border-white/25 hover:bg-white/5"
      >
        Back to home
      </Link>
    </main>
  );
}
