import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./Layout-D5zgrwEF.mjs";
import { t as PracticeAreaGrid } from "./PracticeAreas-D38AWMTf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practice-areas-BzomYuZo.js
var import_jsx_runtime = require_jsx_runtime();
var handles = [
	"Car & truck accidents",
	"Slip and fall injuries",
	"Medical malpractice",
	"Workplace injuries",
	"Wrongful death"
];
var whyUs = [
	"No fee unless we win your case",
	"Free, no-pressure consultation",
	"We deal with insurance companies, so you don't have to",
	"Personal attention from an experienced attorney"
];
function PracticeAreasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						children: "Practice Areas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
						children: ["One firm. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "text-[var(--color-gold)] not-italic",
							children: "Six core practices."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-[var(--color-cream)]/75 mt-6 max-w-2xl leading-relaxed",
						children: "Whatever you're facing, we likely have an attorney who's handled it before — and won."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticeAreaGrid, {})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-6",
								children: "Featured: Personal Injury"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight mb-6",
								children: "Personal injury attorneys who fight for full compensation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground leading-relaxed mb-6",
								children: "An injury can change everything — your health, your income, your peace of mind. If someone else's negligence caused your injury, you shouldn't have to pay the price. We help you recover the compensation you need to move forward."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-[var(--color-navy-deep)] mt-10 mb-4",
								children: "We handle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid sm:grid-cols-2 gap-3",
								children: handles.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-[var(--color-navy-deep)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0",
										strokeWidth: 2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
								}, h))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "lg:col-span-5 bg-[var(--color-navy-deep)] text-[var(--color-cream)] rounded-lg p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl mb-6",
								children: "Why choose us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-4",
								children: whyUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0",
										strokeWidth: 2
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--color-cream)]/85",
										children: w
									})]
								}, w))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-[var(--color-cream)]/70 text-sm leading-relaxed",
								children: "Injured and unsure what to do next? It costs nothing to find out where you stand."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "btn-gold mt-6 w-full",
								children: "Request a Free Consultation"
							})
						]
					})]
				})
			})
		})
	] });
}
//#endregion
export { PracticeAreasPage as component };
