import styles from "./tailwind.css";
import {
  Links,
  LinksFunction,
  LiveReload,
  MetaFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

export const meta: MetaFunction = () => {
  return { title: "My First Remix + Tailwind Project" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
