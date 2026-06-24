import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as CircleCheck, c as Phone, d as Mail, p as Clock, u as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./Layout-D5zgrwEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-9qNG1b0z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var areas = [
	"Personal Injury",
	"Family Law",
	"Business Law",
	"Estate Planning",
	"Criminal Defense",
	"Real Estate Law",
	"Other"
];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[var(--color-navy-deep)] text-[var(--color-cream)] pt-40 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-6",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
					children: ["Let's talk about ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-[var(--color-gold)] not-italic",
						children: "your case."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-[var(--color-cream)]/75 mt-6 max-w-2xl leading-relaxed",
					children: "Your first consultation is free and confidential. Reach out and we'll respond within 24 hours."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-secondary rounded-lg p-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-12 h-12 text-[var(--color-gold)] mx-auto mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-[var(--color-navy-deep)] mb-3",
							children: "Message received."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Thanks for reaching out. An attorney will get back to you within 24 hours."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-[var(--color-navy-deep)] mb-2",
								children: "How can we help?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "w-full h-12 px-4 rounded border border-input bg-white text-[var(--color-navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]",
								required: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a practice area"
								}), areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: a }, a))]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm font-medium text-[var(--color-navy-deep)] mb-2",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 6,
							required: true,
							placeholder: "Briefly tell us what's going on...",
							className: "w-full px-4 py-3 rounded border border-input bg-white text-[var(--color-navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] resize-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-gold w-full sm:w-auto",
							children: "Request My Free Consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Submitting this form does not create an attorney-client relationship."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-5 space-y-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[var(--color-navy-deep)] text-[var(--color-cream)] rounded-lg p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl mb-6",
						children: "Get in touch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: MapPin,
								label: "Office",
								value: "1200 Market Street, Suite 800"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: Phone,
								label: "Phone",
								value: "(555) 123-4567",
								href: "tel:5551234567"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: Mail,
								label: "Email",
								value: "contact@sterlinghale.com",
								href: "mailto:contact@sterlinghale.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								icon: Clock,
								label: "Hours",
								value: "Mon–Fri 9am–6pm"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "aspect-square bg-secondary rounded-lg overflow-hidden relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center text-muted-foreground text-sm",
						children: "Map placeholder"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,var(--color-gold)/15%,transparent_50%)]" })]
				})]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-sm font-medium text-[var(--color-navy-deep)] mb-2",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "w-full h-12 px-4 rounded border border-input bg-white text-[var(--color-navy-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
	})] });
}
function Info({ icon: Icon, label, value, href }) {
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[var(--color-cream)]/60 text-xs uppercase tracking-wider mb-0.5",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[var(--color-cream)]",
			children: value
		})] })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "hover:text-[var(--color-gold)]",
		children: body
	}) : body });
}
//#endregion
export { Contact as component };
