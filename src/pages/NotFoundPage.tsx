import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="page-hero compact">
      <h1>Page not found</h1>
      <p>The route does not exist in this standalone implementation.</p>
      <Link className="btn" to="/">
        Back Home
      </Link>
    </section>
  );
}

