
// Simple sharable component
const Hero = () => {
  return (
    <div>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="withtext">
        With <a href="https://www.typescriptlang.org/">Typescript</a> and{" "}
        <a href="https://github.com/graphile/postgraphile">Postgraphile!</a>
      </div>

      <p className="description">
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <style jsx>{`
        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .withtext {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </div>
  );
};

export default Hero;
