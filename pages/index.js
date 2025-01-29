import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to DestinAI</h1>
      <p>Discover your dream career with AI-powered guidance.</p>
      <Link href="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}
