const LandingPage = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 mt-[20%] md:mt-[7%] lg:mt-[4%]">
      <header className="bg-green-600 text-white p-6">
        <h1 className="text-4xl font-bold">Project Features Overview</h1>
        <p className="mt-2 text-lg dark:text-slate-200">
          A summary of the implemented features and those planned for future
          updates.
        </p>
      </header>

      <main className="container mx-auto p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">
            Implemented Features
          </h2>
          <ul className="space-y-4 dark:text-slate-200">
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">Code Analyzers and Linters</h3>
              <p>
                Integrated ESLint for TypeScript error checking, Stylelint for
                styling consistency, and TailwindCSS for design conformity.
              </p>
            </li>
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">Caching with React Query</h3>
              <p>
                Implemented React Query for caching, ensuring fast data fetching
                without unnecessary re-fetching.
              </p>
            </li>
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">Light and Dark Theme</h3>
              <p>
                Enabled light and dark mode for better user personalization and
                experience.
              </p>
            </li>
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">Protected Routes</h3>
              <p>Added protected routes using react-router-dom</p>
            </li>
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">SEO Optimization</h3>
              <p>
                Basic SEO optimizations to enhance visibility and search engine
                rankings.
              </p>
            </li>
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">Authentication</h3>
              <p>
                Integrated one-click authentication using Passport.js and Google
                OAuth2 for seamless and secure login.
              </p>
            </li>
            <li className="p-4 border-l-4 border-green-400">
              <h3 className="font-medium">Data Storage</h3>
              <p>
                Used MongoDB and Prisma ORM for efficient data storage and
                querying.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-12 dark:text-slate-200">
          <h2 className="text-3xl font-semibold text-green-400 mb-4">
            Planned Features (Not Implemented)
          </h2>
          <ul className="space-y-4">
            <li className="p-4 border-l-4 border-slate-500">
              <h3 className="font-medium">Internationalization (i18n)</h3>
              <p>
                Support for multiple languages, date formats, and currencies for
                a global user base.
              </p>
            </li>
            <li className="p-4 border-l-4 border-slate-500">
              <h3 className="font-medium">Progressive Web App (PWA) Support</h3>
              <p>
                Would allow the website to function offline and load faster,
                improving performance in low-network conditions.
              </p>
            </li>
            <li className="p-4 border-l-4 border-slate-500">
              <h3 className="font-medium">gRPC Support</h3>
              <p>
                Efficient duplex communication for real-time applications,
                offering better performance than traditional REST APIs.
              </p>
            </li>
            <li className="p-4 border-l-4 border-slate-500">
              <h3 className="font-medium">GraphQL API</h3>
              <p>
                Would provide more flexible data querying and improve
                performance over traditional REST APIs.
              </p>
            </li>
            <li className="p-4 border-l-4 border-slate-500">
              <h3 className="font-medium">Analytics</h3>
              <p>
                Tracking user behavior to provide insights for future
                improvements.
              </p>
            </li>
            <li className="p-4 border-l-4 border-slate-500">
              <h3 className="font-medium">Skeleton Screens</h3>
              <p>
                Improve perceived load time on slow internet connections by
                showing placeholders while content loads.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
