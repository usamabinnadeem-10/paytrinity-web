import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-[#020410] text-white px-6 py-24">
      <h1 className="text-7xl font-bold tracking-tight text-white mb-4">
        404
      </h1>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-white text-[#020410] px-6 py-3 text-sm font-bold shadow-sm hover:bg-gray-100 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      >
        Back to Home
      </Link>
    </main>
  );
}
