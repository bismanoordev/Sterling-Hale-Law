import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Phone } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./Layout-D5zgrwEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/results-0SIowrV8.js
var import_jsx_runtime = require_jsx_runtime();
var stats = [
	{
		n: "$50M+",
		l: "Recovered for clients"
	},
	{
		n: "1,000+",
		l: "Cases handled"
	},
	{
		n: "98%",
		l: "Client satisfaction"
	},
	{
		n: "15+",
		l: "Years of experience"
	}
];
var cases = [
	{
		category: "Personal Injury",
		amount: "$4.2M",
		desc: "Catastrophic injury settlement for a construction worker injured on-site due to employer negligence."
	},
	{
		category: "Medical Malpractice",
		amount: "$2.8M",
		desc: "Verdict for a family whose loved one suffered permanent harm due to a surgical error."
	},
	{
		category: "Business Litigation",
		amount: "$1.5M",
		desc: "Breach of contract recovery for a mid-size business after a major vendor failed to perform."
	},
	{
		category: "Auto Accident",
		amount: "$875K",
		desc: "Settlement for a client who suffered spinal injuries in a multi-vehicle collision."
	},
	{
		category: "Wrongful Termination",
		amount: "$620K",
		desc: "Recovery for an employee wrongfully dismissed after 12 years of service."
	},
	{
		category: "Premises Liability",
		amount: "$540K",
		desc: "Settlement for a client injured due to unsafe property conditions at a commercial establishment."
	}
];
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid lg:grid-cols-12 gap-12 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						children: "Our Track Record"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
						children: [
							"Results that",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-[var(--color-gold)] not-italic",
								children: "speak for themselves."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lg:col-span-5 text-lg text-[var(--color-cream)]/75 leading-relaxed",
					children: "For over 15 years, we've fought to get our clients the outcomes they deserve. Numbers don't tell the full story — but they're a start."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-white text-[var(--color-navy-deep)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid grid-cols-2 lg:grid-cols-4 gap-8",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t-2 border-[var(--color-navy-deep)]/20 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl md:text-6xl text-[var(--color-gold)] mb-2",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-[var(--color-navy-deep)]/60",
						children: s.l
					})]
				}, s.l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							children: "Notable Cases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-5xl text-[var(--color-navy-deep)] leading-tight",
							children: "Real cases. Real outcomes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: "Past results do not guarantee future outcomes. Every case is unique. These examples reflect the dedication and effort we bring to every client we serve."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border rounded-lg p-8 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]",
								children: c.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl text-[var(--color-navy-deep)]",
								children: c.amount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: c.desc
							})
						]
					}, c.amount))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-[var(--color-navy-deep)] text-[var(--color-cream)] text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl mb-4",
						children: "Your case could be next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-cream)]/75 mb-8",
						children: "Free consultation — no fees unless we win."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "btn-gold",
							children: "Request a Free Consultation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:5551234567",
							className: "btn-outline-light",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), " (555) 123-4567"]
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Results as component };
