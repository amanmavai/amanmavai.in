import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, NavLink, useLocation } from "remix";
import type { LinksFunction, MetaFunction } from "remix";
import cn from "classnames";
import globalStylesUrl from "~/styles/index.css";
import MobileMenu, { links as mobileMenuLinks } from "./components/MobileMenu";

export let meta: MetaFunction = () => {
  return {
    title: "Aman Mavai – Developer, writer, creator.",
    description: `Front-end developer, JavaScript enthusiast.`,
  };
};

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }, ...mobileMenuLinks()];
};

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function NavItem({ to, text }: { to: string; text: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          isActive ? "font-semibold text-gray-800 dark:text-gray-200" : "font-normal text-gray-600 dark:text-gray-400",
          "p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
        )
      }
    >
      <span>{text}</span>
    </NavLink>
  );
}

function Header() {
  let location = useLocation();
  return (
    <>
      <MobileMenu key={location.pathname} />
      <nav className="hidden sm:block mt-5">
        <NavItem to="/" text="Home" />
        <NavItem to="/blog" text="Blog" />
      </nav>
    </>
  );
}

function Footer() {
  return (
    <p className="flex justify-center items-center text-sm font-hairline tracking-widest">
      Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aman
    </p>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app grid grid-cols-1 grid-rows-[auto,1fr,auto] sm:grid-cols-[20%,60%,20%] px-5 min-h-screen">
      <header className="remix-app__header sm:col-start-2 sm:col-end-3">
        <Header />
      </header>
      <div className="sm:col-start-2 sm:col-end-3 mt-10 px-3">{children}</div>
      <footer className="remix-app__footer sm:col-start-2 sm:col-end-3 h-12 mt-5">
        <Footer />
      </footer>
    </div>
  );
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>Hey, developer, you should replace this with what you want your users to see.</p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
      break;
    case 404:
      message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}
