import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DaO6DsOn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C0LkRpLR.css";
function reportError(error, context = {}) {
	if (typeof window === "undefined") return;
	console.error("[ErrorBoundary]", error, context);
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportError(error, { boundary: "root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sterling & Hale Law" },
			{
				name: "description",
				content: "Trusted attorneys fighting for individuals, families, and businesses since 2008."
			},
			{
				property: "og:site_name",
				content: "Sterling & Hale Law"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./testimonials-CfA3iGE1.mjs");
var Route$5 = createFileRoute("/testimonials")({
	head: () => ({
		meta: [
			{ title: "Testimonials — Sterling & Hale Law" },
			{
				name: "description",
				content: "Hear from the clients we've helped. Real stories from real people who trusted Sterling & Hale Law."
			},
			{
				property: "og:title",
				content: "Client Testimonials — Sterling & Hale Law"
			},
			{
				property: "og:url",
				content: "/testimonials"
			}
		],
		links: [{
			rel: "canonical",
			href: "/testimonials"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./results-0SIowrV8.mjs");
var Route$4 = createFileRoute("/results")({
	head: () => ({
		meta: [
			{ title: "Results — Sterling & Hale Law" },
			{
				name: "description",
				content: "Over $50M recovered for our clients. See the real results Sterling & Hale Law has achieved for individuals, families, and businesses."
			},
			{
				property: "og:title",
				content: "Results — Sterling & Hale Law"
			},
			{
				property: "og:url",
				content: "/results"
			}
		],
		links: [{
			rel: "canonical",
			href: "/results"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./practice-areas-BzomYuZo.mjs");
var Route$3 = createFileRoute("/practice-areas")({
	head: () => ({
		meta: [
			{ title: "Practice Areas — Sterling & Hale Law" },
			{
				name: "description",
				content: "Personal injury, family law, business, estate planning, criminal defense, and real estate. Find the right legal help for your situation."
			},
			{
				property: "og:title",
				content: "Practice Areas — Sterling & Hale Law"
			},
			{
				property: "og:description",
				content: "Six core practice areas. One trusted firm. Free consultation."
			},
			{
				property: "og:url",
				content: "/practice-areas"
			}
		],
		links: [{
			rel: "canonical",
			href: "/practice-areas"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-9qNG1b0z.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Sterling & Hale Law" },
			{
				name: "description",
				content: "Free, confidential consultation. Reach out to Sterling & Hale Law and we'll respond within 24 hours."
			},
			{
				property: "og:title",
				content: "Contact Sterling & Hale Law"
			},
			{
				property: "og:description",
				content: "Request your free consultation. We respond within 24 hours."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-DEEklwIq.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Sterling & Hale Law" },
			{
				name: "description",
				content: "Dedicated advocates with real results. Meet the team behind Sterling & Hale Law, serving clients since 2008."
			},
			{
				property: "og:title",
				content: "About Sterling & Hale Law"
			},
			{
				property: "og:description",
				content: "Honest advice, relentless advocacy, and genuine care for our clients since 2008."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Bvf8XpkM.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Sterling & Hale Law — Trusted Attorneys Fighting For You" },
			{
				name: "description",
				content: "Sterling & Hale Law helps individuals and businesses navigate their toughest legal challenges with clarity, compassion, and results. Free consultation."
			},
			{
				property: "og:title",
				content: "Sterling & Hale Law — Trusted Attorneys"
			},
			{
				property: "og:description",
				content: "Personal injury, family, business, and more. 15+ years experience. $50M+ recovered."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TestimonialsRoute = Route$5.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$6
});
var ResultsRoute = Route$4.update({
	id: "/results",
	path: "/results",
	getParentRoute: () => Route$6
});
var PracticeAreasRoute = Route$3.update({
	id: "/practice-areas",
	path: "/practice-areas",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	ContactRoute,
	PracticeAreasRoute,
	ResultsRoute,
	TestimonialsRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
