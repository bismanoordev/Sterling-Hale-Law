import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Scroll, f as HeartPulse, g as House, h as ArrowUpRight, i as Shield, m as Briefcase, n as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PracticeAreas-D38AWMTf.js
var import_jsx_runtime = require_jsx_runtime();
var PRACTICE_AREAS = [
	{
		slug: "personal-injury",
		title: "Personal Injury",
		icon: HeartPulse,
		desc: "Injured because of someone else's negligence? We help you recover the compensation you deserve."
	},
	{
		slug: "family-law",
		title: "Family Law",
		icon: Users,
		desc: "Divorce, custody, and family matters handled with care and discretion."
	},
	{
		slug: "business-law",
		title: "Business Law",
		icon: Briefcase,
		desc: "Protect and grow your business with trusted legal guidance."
	},
	{
		slug: "estate-planning",
		title: "Estate Planning",
		icon: Scroll,
		desc: "Secure your family's future with wills, trusts, and clear planning."
	},
	{
		slug: "criminal-defense",
		title: "Criminal Defense",
		icon: Shield,
		desc: "Facing charges? We protect your rights at every step."
	},
	{
		slug: "real-estate",
		title: "Real Estate Law",
		icon: House,
		desc: "Smooth, secure property transactions and dispute resolution."
	}
];
function PracticeAreaGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
		children: PRACTICE_AREAS.map(({ slug, title, icon: Icon, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/practice-areas",
			className: "group relative bg-white border border-border rounded-lg p-8 transition-all hover:border-[var(--color-gold)] hover:shadow-[0_20px_50px_-20px] hover:shadow-[var(--color-navy)]/25 hover:-translate-y-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-12 h-12 rounded flex items-center justify-center bg-[var(--color-navy)]/5 text-[var(--color-navy)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-navy-deep)] transition-colors mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "w-6 h-6",
						strokeWidth: 1.5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl text-[var(--color-navy-deep)] mb-3",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground leading-relaxed mb-6",
					children: desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-navy)] group-hover:text-[var(--color-gold)]",
					children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})
			]
		}, slug))
	});
}
//#endregion
export { PracticeAreaGrid as t };
