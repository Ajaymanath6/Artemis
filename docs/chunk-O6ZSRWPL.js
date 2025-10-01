import {
  SideNavComponent
} from "./chunk-POO7ABQP.js";
import {
  AppHeaderComponent
} from "./chunk-UQQHCV5Z.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-DDDO6NM3.js";
import "./chunk-NB6NNANN.js";
import {
  CommonModule,
  Component,
  Input,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-Z6WLR7UX.js";

// src/app/layouts/summary-layout/summary-layout.component.ts
var SummaryLayoutComponent = class _SummaryLayoutComponent {
  caseDetails;
  static \u0275fac = function SummaryLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SummaryLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SummaryLayoutComponent, selectors: [["app-summary-layout"]], inputs: { caseDetails: "caseDetails" }, decls: 7, vars: 1, consts: [[1, "summary-content-wrapper"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "p-6", "mx-auto", "max-w-4xl", "shadow-sm"], [1, "text-center"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-4"], [1, "text-gray-600"]], template: function SummaryLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Summary content for ", (ctx.caseDetails == null ? null : ctx.caseDetails.title) || "this case", " will be displayed here.");
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n.grid-cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n@media (min-width: 1024px) {\n  .lg\\:col-span-2[_ngcontent-%COMP%] {\n    grid-column: span 2 / span 2;\n  }\n  .lg\\:col-span-1[_ngcontent-%COMP%] {\n    grid-column: span 1 / span 1;\n  }\n  .lg\\:grid-cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.gap-6[_ngcontent-%COMP%] {\n  gap: 1.5rem;\n}\n.gap-8[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.space-x-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-y-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.space-y-6[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.bg-brand-light[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.w-3[_ngcontent-%COMP%] {\n  width: 0.75rem;\n}\n.w-10[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.w-12[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.h-3[_ngcontent-%COMP%] {\n  height: 0.75rem;\n}\n.h-10[_ngcontent-%COMP%] {\n  height: 2.5rem;\n}\n.h-12[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n.w-0\\.5[_ngcontent-%COMP%] {\n  width: 0.125rem;\n}\n.h-6[_ngcontent-%COMP%] {\n  height: 1.5rem;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.left-1\\/2[_ngcontent-%COMP%] {\n  left: 50%;\n}\n.top-3[_ngcontent-%COMP%] {\n  top: 0.75rem;\n}\n.top-24[_ngcontent-%COMP%] {\n  top: 6rem;\n}\n.transform[_ngcontent-%COMP%] {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2[_ngcontent-%COMP%] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.ml-13[_ngcontent-%COMP%] {\n  margin-left: 3.25rem;\n}\n.px-2\\.5[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5[_ngcontent-%COMP%] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.p-6[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n@media (max-width: 1024px) {\n  .sticky[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n.summary-content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: 2rem;\n  isolation: isolate;\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n}\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.max-w-4xl[_ngcontent-%COMP%] {\n  max-width: 56rem;\n}\n.mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=summary-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SummaryLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-summary-layout", standalone: true, imports: [CommonModule], template: `<!-- Summary Layout Content -->
<div class="summary-content-wrapper">
  <div class="bg-white rounded-xl border border-gray-200 p-6 mx-auto max-w-4xl shadow-sm">
    <div class="text-center">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">Summary</h2>
      <p class="text-gray-600">Summary content for {{ caseDetails?.title || 'this case' }} will be displayed here.</p>
    </div>
  </div>
</div>
`, styles: ["/* src/app/layouts/summary-layout/summary-layout.component.css */\n:host {\n  display: block;\n}\n.grid {\n  display: grid;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n@media (min-width: 1024px) {\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .lg\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.flex {\n  display: flex;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.items-center {\n  align-items: center;\n}\n.items-start {\n  align-items: flex-start;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.space-x-4 > * + * {\n  margin-left: 1rem;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-y-3 > * + * {\n  margin-top: 0.75rem;\n}\n.space-y-4 > * + * {\n  margin-top: 1rem;\n}\n.space-y-6 > * + * {\n  margin-top: 1.5rem;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.bg-brand-light {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-gray-200 {\n  background-color: #e5e7eb;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-brand {\n  color: #146B85;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.border {\n  border-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.w-0\\.5 {\n  width: 0.125rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.relative {\n  position: relative;\n}\n.absolute {\n  position: absolute;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.top-3 {\n  top: 0.75rem;\n}\n.top-24 {\n  top: 6rem;\n}\n.transform {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.sticky {\n  position: sticky;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.ml-13 {\n  margin-left: 3.25rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n@media (max-width: 1024px) {\n  .sticky {\n    position: relative;\n  }\n}\n.summary-content-wrapper {\n  position: relative;\n  z-index: 1;\n  margin-top: 2rem;\n  isolation: isolate;\n}\n:host {\n  display: block;\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n}\n.shadow-sm {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=summary-layout.component.css.map */\n"] }]
  }], null, { caseDetails: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SummaryLayoutComponent, { className: "SummaryLayoutComponent" });
})();

// src/app/pages/case-detail/case-detail.component.ts
function CaseDetailComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function CaseDetailComponent_button_33_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setActiveTab(tab_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.activeTab === tab_r2.id ? "border-brand text-brand" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function CaseDetailComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-summary-layout", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("caseDetails", ctx_r2.caseDetails);
  }
}
function CaseDetailComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Docket Entries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Docket entries content will be displayed here.");
    \u0275\u0275elementEnd()();
  }
}
function CaseDetailComponent_div_37_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    \u0275\u0275element(4, "i", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "p", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 37);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 38);
    \u0275\u0275listener("click", function CaseDetailComponent_div_37_div_4_Template_button_click_10_listener() {
      const doc_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadDocument(doc_r5));
    });
    \u0275\u0275element(11, "i", 39);
    \u0275\u0275text(12, " Download ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(doc_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", doc_r5.date, " \u2022 ", doc_r5.size, " \u2022 ", doc_r5.pages, " pages");
  }
}
function CaseDetailComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275template(4, CaseDetailComponent_div_37_div_4_Template, 13, 4, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.caseDetails.documents);
  }
}
function CaseDetailComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Parties & Attorneys");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Parties and attorneys information will be displayed here.");
    \u0275\u0275elementEnd()();
  }
}
function CaseDetailComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Judges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Judge information will be displayed here.");
    \u0275\u0275elementEnd()();
  }
}
function CaseDetailComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Related Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Related cases will be displayed here.");
    \u0275\u0275elementEnd()();
  }
}
function CaseDetailComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Docket History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Docket history will be displayed here.");
    \u0275\u0275elementEnd()();
  }
}
function CaseDetailComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h2", 27);
    \u0275\u0275text(2, "Similar Cases");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4, "Similar cases will be displayed here.");
    \u0275\u0275elementEnd()();
  }
}
var CaseDetailComponent = class _CaseDetailComponent {
  route;
  router;
  caseId = null;
  // Header and sidebar properties
  isSidebarCollapsed = false;
  projectName = "NY Judgment Tracking";
  currentSearchQuery = "";
  // Tab management
  activeTab = "summary";
  tabs = [
    { id: "summary", label: "Summary" },
    { id: "docket-entries", label: "Docket Entries" },
    { id: "documents", label: "Documents" },
    { id: "parties-attorneys", label: "Parties/Attorneys" },
    { id: "judges", label: "Judges" },
    { id: "related-cases", label: "Related Cases" },
    { id: "docket-history", label: "Docket History" },
    { id: "similar-cases", label: "Similar Cases" }
  ];
  // Dummy case data
  caseDetails = {
    title: "JOHNSON MANUFACTURING INC VS STATE OF NEW YORK",
    caseId: "COM892345",
    court: "New York State Supreme Court - Commercial Division",
    date: "15 January 2017",
    type: "Commercial",
    status: "In Progress",
    judge: "Hon. Sarah Mitchell",
    attorneys: [
      {
        name: "Robert Chen, Esq.",
        firm: "Chen & Associates LLP",
        role: "Plaintiff Attorney",
        phone: "(555) 123-4567",
        email: "r.chen@chenlaw.com"
      },
      {
        name: "Maria Rodriguez, Esq.",
        firm: "State Attorney General Office",
        role: "Defense Attorney",
        phone: "(555) 987-6543",
        email: "m.rodriguez@nyag.gov"
      }
    ],
    timeline: [
      {
        date: "15 January 2017",
        event: "Case Filed",
        description: "Initial complaint filed against State of New York"
      },
      {
        date: "28 February 2017",
        event: "Motion to Dismiss Filed",
        description: "Defendant filed motion to dismiss for lack of jurisdiction"
      },
      {
        date: "15 March 2017",
        event: "Motion Denied",
        description: "Court denied defendant's motion to dismiss"
      },
      {
        date: "10 April 2017",
        event: "Discovery Phase Begins",
        description: "Court ordered discovery phase to commence"
      },
      {
        date: "22 September 2017",
        event: "Expert Witnesses Deposed",
        description: "Expert witness depositions completed"
      },
      {
        date: "05 December 2017",
        event: "Settlement Conference Scheduled",
        description: "Court scheduled mandatory settlement conference"
      }
    ],
    documents: [
      {
        name: "Initial Complaint",
        date: "15 January 2017",
        type: "PDF",
        size: "2.4 MB",
        pages: 45
      },
      {
        name: "Motion to Dismiss",
        date: "28 February 2017",
        type: "PDF",
        size: "1.8 MB",
        pages: 23
      },
      {
        name: "Court Order - Discovery",
        date: "10 April 2017",
        type: "PDF",
        size: "0.8 MB",
        pages: 8
      },
      {
        name: "Expert Witness Report - Economics",
        date: "15 August 2017",
        type: "PDF",
        size: "5.2 MB",
        pages: 89
      },
      {
        name: "Deposition Transcript - CEO",
        date: "22 September 2017",
        type: "PDF",
        size: "12.1 MB",
        pages: 234
      }
    ],
    summary: "Johnson Manufacturing Inc. filed a lawsuit against the State of New York challenging new environmental regulations that the company claims unfairly target manufacturing businesses. The case involves complex issues of regulatory law, constitutional commerce clause arguments, and significant economic impact assessments. The plaintiff argues that the new regulations violate interstate commerce protections and exceed the state's regulatory authority.",
    amount: "$2,450,000",
    tags: ["Commercial", "Environmental Law", "Regulatory Dispute", "Manufacturing"]
  };
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.caseId = this.route.snapshot.paramMap.get("id");
    console.log("Case Detail Page - Case ID:", this.caseId);
    this.currentSearchQuery = this.caseDetails.title;
    console.log("Case Detail Page initialized successfully");
  }
  goBack() {
    this.router.navigate(["/cases"]);
  }
  downloadDocument(document) {
    console.log("Downloading document:", document.name);
  }
  shareCase() {
    console.log("Sharing case:", this.caseDetails.title);
  }
  addToWatchlist() {
    console.log("Adding case to watchlist:", this.caseDetails.title);
  }
  // Header interaction methods
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onProjectClick() {
    console.log("Project clicked");
  }
  onSearchQueryClick() {
    console.log("Search query clicked on case detail page - staying on current page");
  }
  onSearch(query) {
    console.log("Search:", query);
  }
  onExpandSearch() {
    console.log("Expand search");
  }
  onCollapseSearch() {
    console.log("Collapse search");
  }
  // Tab management
  setActiveTab(tabId) {
    this.activeTab = tabId;
    console.log("Active tab set to:", tabId);
  }
  // Action methods
  refreshCase() {
    console.log("Refreshing case data for:", this.caseDetails.title);
  }
  setTracker() {
    console.log("Setting tracker for case:", this.caseDetails.title);
  }
  static \u0275fac = function CaseDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseDetailComponent, selectors: [["app-case-detail"]], decls: 43, vars: 20, consts: [[1, "case-detail-container"], [3, "sidebarToggle", "isCollapsed"], [1, "main-content-container"], [1, "header-container"], [3, "collapseToggle", "projectClick", "searchQueryClick", "showUserProfile", "showCollapseButton", "projectName", "searchQuery"], [1, "case-meta-section"], [1, "case-meta-content"], [1, "back-arrow-container"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "text-gray-700", "hover:bg-gray-100", "rounded-md", "transition-colors", 3, "click"], [1, "ri-arrow-left-line", "text-lg"], [1, "case-info-column"], [1, "case-title"], [1, "case-meta-info"], [1, "mx-2"], [1, "action-buttons"], [1, "action-button", 3, "click"], [1, "ri-refresh-line", "text-lg", "mr-2"], [1, "ri-time-line", "text-lg", "mr-2"], [1, "tab-navigation"], [1, "-mb-px", "flex", "space-x-8"], ["class", "py-2 px-1 border-b-2 font-medium text-sm transition-colors", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "summary-container"], [4, "ngIf"], ["class", "tab-content", 4, "ngIf"], [1, "py-2", "px-1", "border-b-2", "font-medium", "text-sm", "transition-colors", 3, "click"], [3, "caseDetails"], [1, "tab-content"], [1, "text-xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-gray-600"], [1, "space-y-4"], ["class", "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "p-4", "border", "border-gray-200", "rounded-lg", "hover:bg-gray-50", "transition-colors"], [1, "flex", "items-center", "space-x-4"], [1, "flex-shrink-0"], [1, "w-10", "h-10", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "ri-file-pdf-line", "text-red-600"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-xs", "text-gray-500"], [1, "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "bg-white", "border", "border-gray-300", "rounded-md", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "ri-download-line", "text-lg", "mr-2"]], template: function CaseDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-side-nav", 1);
      \u0275\u0275listener("sidebarToggle", function CaseDetailComponent_Template_app_side_nav_sidebarToggle_1_listener() {
        return ctx.onSidebarToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "app-header", 4);
      \u0275\u0275listener("collapseToggle", function CaseDetailComponent_Template_app_header_collapseToggle_4_listener() {
        return ctx.onSidebarToggle();
      })("projectClick", function CaseDetailComponent_Template_app_header_projectClick_4_listener() {
        return ctx.onProjectClick();
      })("searchQueryClick", function CaseDetailComponent_Template_app_header_searchQueryClick_4_listener() {
        return ctx.onSearchQueryClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "button", 8);
      \u0275\u0275listener("click", function CaseDetailComponent_Template_button_click_8_listener() {
        return ctx.goBack();
      });
      \u0275\u0275element(9, "i", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 10)(11, "h1", 11);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 12)(14, "span");
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 13);
      \u0275\u0275text(17, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275text(21, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
      \u0275\u0275listener("click", function CaseDetailComponent_Template_button_click_25_listener() {
        return ctx.refreshCase();
      });
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 15);
      \u0275\u0275listener("click", function CaseDetailComponent_Template_button_click_28_listener() {
        return ctx.setTracker();
      });
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275text(30, " Set Tracker ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "nav", 19);
      \u0275\u0275template(33, CaseDetailComponent_button_33_Template, 2, 3, "button", 20);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 21);
      \u0275\u0275template(35, CaseDetailComponent_div_35_Template, 2, 1, "div", 22)(36, CaseDetailComponent_div_36_Template, 5, 0, "div", 23)(37, CaseDetailComponent_div_37_Template, 5, 1, "div", 23)(38, CaseDetailComponent_div_38_Template, 5, 0, "div", 23)(39, CaseDetailComponent_div_39_Template, 5, 0, "div", 23)(40, CaseDetailComponent_div_40_Template, 5, 0, "div", 23)(41, CaseDetailComponent_div_41_Template, 5, 0, "div", 23)(42, CaseDetailComponent_div_42_Template, 5, 0, "div", 23);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isCollapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-collapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("showUserProfile", true)("showCollapseButton", ctx.isSidebarCollapsed)("projectName", ctx.projectName)("searchQuery", ctx.currentSearchQuery);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.caseDetails.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Filed ", ctx.caseDetails.date, "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.caseDetails.court);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.caseDetails.judge);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.activeTab === "summary");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "docket-entries");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "documents");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "parties-attorneys");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "judges");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "related-cases");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "docket-history");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "similar-cases");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SideNavComponent, SummaryLayoutComponent, AppHeaderComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.case-detail-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n}\n.main-content-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 206px;\n  transition: margin-left 0.3s ease;\n}\n.main-content-container.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n}\n.header-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background-color: white;\n  border-bottom: 1px solid #e5e7eb;\n}\n.case-meta-section[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #e5e7eb;\n}\n.case-meta-content[_ngcontent-%COMP%] {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 1rem 1rem;\n}\n@media (min-width: 640px) {\n  .case-meta-content[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .case-meta-content[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n.back-arrow-container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.case-info-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.case-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: #146B85;\n  line-height: 1.25;\n  margin: 0;\n}\n.case-meta-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #4b5563;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 36px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  transition: background-color 0.15s;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.tab-navigation[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e5e7eb;\n}\n.summary-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  background-color: #f8f8f8;\n  padding: 2rem 1rem;\n}\n@media (min-width: 640px) {\n  .summary-container[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .summary-container[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n.tab-content[_ngcontent-%COMP%] {\n  max-width: 80rem;\n  margin: 0 auto;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.border-brand[_ngcontent-%COMP%] {\n  border-color: #146B85;\n}\n.mx-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.space-x-8[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.space-x-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.bg-red-100[_ngcontent-%COMP%] {\n  background-color: #fecaca;\n}\n.text-red-600[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.w-10[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.h-10[_ngcontent-%COMP%] {\n  height: 2.5rem;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-gray-300[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.rounded-md[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.bg-cases-page[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n.min-h-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.top-24[_ngcontent-%COMP%] {\n  top: 6rem;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.max-w-7xl[_ngcontent-%COMP%] {\n  max-width: 80rem;\n}\n.mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.p-6[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n@media (min-width: 640px) {\n  .sm\\:px-6[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:px-8[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n.grid-cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n@media (min-width: 1024px) {\n  .lg\\:col-span-2[_ngcontent-%COMP%] {\n    grid-column: span 2 / span 2;\n  }\n  .lg\\:col-span-1[_ngcontent-%COMP%] {\n    grid-column: span 1 / span 1;\n  }\n  .lg\\:grid-cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-3[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.gap-6[_ngcontent-%COMP%] {\n  gap: 1.5rem;\n}\n.gap-8[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.space-x-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-y-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.space-y-6[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.bg-gray-50[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.bg-blue-100[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n}\n.bg-red-100[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n}\n.bg-brand-light[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-blue-800[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.text-red-600[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.border-gray-300[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n}\n.rounded-md[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.w-3[_ngcontent-%COMP%] {\n  width: 0.75rem;\n}\n.w-10[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.w-12[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.h-3[_ngcontent-%COMP%] {\n  height: 0.75rem;\n}\n.h-6[_ngcontent-%COMP%] {\n  height: 1.5rem;\n}\n.h-10[_ngcontent-%COMP%] {\n  height: 2.5rem;\n}\n.h-12[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n.w-0\\.5[_ngcontent-%COMP%] {\n  width: 0.125rem;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.left-1\\/2[_ngcontent-%COMP%] {\n  left: 50%;\n}\n.top-3[_ngcontent-%COMP%] {\n  top: 0.75rem;\n}\n.transform[_ngcontent-%COMP%] {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2[_ngcontent-%COMP%] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.mr-3[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n.ml-13[_ngcontent-%COMP%] {\n  margin-left: 3.25rem;\n}\n.px-2\\.5[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-0\\.5[_ngcontent-%COMP%] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-3[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.timeline-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #e5e7eb;\n}\n.document-item[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.attorney-info[_ngcontent-%COMP%] {\n  padding-left: 3.25rem;\n}\n.action-button[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.action-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-dot[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(20, 107, 133, 0.2);\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n  opacity: 0;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  50% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(1.5);\n  }\n}\n@media (max-width: 1024px) {\n  .sticky[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n.card-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.card-shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\napp-summary-layout[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n}\n.tab-content-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n}\n/*# sourceMappingURL=case-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseDetailComponent, [{
    type: Component,
    args: [{ selector: "app-case-detail", standalone: true, imports: [CommonModule, SideNavComponent, SummaryLayoutComponent, AppHeaderComponent], template: `<!-- Case Detail Page - Main Container -->
<div class="case-detail-container">
  
  <!-- Left Side: Side Navigation Bar -->
  <app-side-nav
    [isCollapsed]="isSidebarCollapsed"
    (sidebarToggle)="onSidebarToggle()">
  </app-side-nav>
  
  <!-- Right Side: Main Content Container -->
  <div class="main-content-container" [class.sidebar-collapsed]="isSidebarCollapsed">
    
    <!-- Top Part: App Header Component Container -->
    <div class="header-container">
      <!-- App Header -->
      <app-header 
        [showUserProfile]="true"
        [showCollapseButton]="isSidebarCollapsed"
        [projectName]="projectName"
        [searchQuery]="currentSearchQuery"
        (collapseToggle)="onSidebarToggle()"
        (projectClick)="onProjectClick()"
        (searchQueryClick)="onSearchQueryClick()">
      </app-header>
      
      <!-- Case Meta Section -->
      <div class="case-meta-section">
        <div class="case-meta-content">
          <!-- Back Arrow (Separate) -->
          <div class="back-arrow-container">
            <button 
              (click)="goBack()" 
              class="flex items-center justify-center w-8 h-8 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
              <i class="ri-arrow-left-line text-lg"></i>
            </button>
          </div>

          <!-- Case Information Column -->
          <div class="case-info-column">
            <!-- Case Title (28px font) -->
            <h1 class="case-title">{{ caseDetails.title }}</h1>

            <!-- Case Meta Information -->
            <div class="case-meta-info">
              <span>Filed {{ caseDetails.date }}</span>
              <span class="mx-2">\xB7</span>
              <span>{{ caseDetails.court }}</span>
              <span class="mx-2">\xB7</span>
              <span>{{ caseDetails.judge }}</span>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
              <button 
                (click)="refreshCase()"
                class="action-button">
                <i class="ri-refresh-line text-lg mr-2"></i>
                Refresh
              </button>
              <button 
                (click)="setTracker()"
                class="action-button">
                <i class="ri-time-line text-lg mr-2"></i>
                Set Tracker
              </button>
            </div>
          </div>

          <!-- Tab Navigation -->
          <div class="tab-navigation">
            <nav class="-mb-px flex space-x-8">
              <button
                *ngFor="let tab of tabs"
                (click)="setActiveTab(tab.id)"
                class="py-2 px-1 border-b-2 font-medium text-sm transition-colors"
                [class]="activeTab === tab.id 
                  ? 'border-brand text-brand' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'">
                {{ tab.label }}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Part: Summary Layout Component -->
    <div class="summary-container">
      
      <!-- Summary Tab Content -->
      <div *ngIf="activeTab === 'summary'">
        <app-summary-layout [caseDetails]="caseDetails"></app-summary-layout>
      </div>

      <!-- Other Tab Contents (Placeholder) -->
      <div *ngIf="activeTab === 'docket-entries'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Docket Entries</h2>
        <p class="text-gray-600">Docket entries content will be displayed here.</p>
      </div>

      <div *ngIf="activeTab === 'documents'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Documents</h2>
        <div class="space-y-4">
          <div *ngFor="let doc of caseDetails.documents" 
               class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <i class="ri-file-pdf-line text-red-600"></i>
                </div>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                <p class="text-xs text-gray-500">{{ doc.date }} \u2022 {{ doc.size }} \u2022 {{ doc.pages }} pages</p>
              </div>
            </div>
            <button 
              (click)="downloadDocument(doc)"
              class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <i class="ri-download-line text-lg mr-2"></i>
              Download
            </button>
          </div>
        </div>
      </div>

      <div *ngIf="activeTab === 'parties-attorneys'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Parties & Attorneys</h2>
        <p class="text-gray-600">Parties and attorneys information will be displayed here.</p>
      </div>

      <div *ngIf="activeTab === 'judges'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Judges</h2>
        <p class="text-gray-600">Judge information will be displayed here.</p>
      </div>

      <div *ngIf="activeTab === 'related-cases'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Related Cases</h2>
        <p class="text-gray-600">Related cases will be displayed here.</p>
      </div>

      <div *ngIf="activeTab === 'docket-history'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Docket History</h2>
        <p class="text-gray-600">Docket history will be displayed here.</p>
      </div>

      <div *ngIf="activeTab === 'similar-cases'" class="tab-content">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Similar Cases</h2>
        <p class="text-gray-600">Similar cases will be displayed here.</p>
      </div>

    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/case-detail/case-detail.component.css */\n:host {\n  display: block;\n  height: 100vh;\n}\n.case-detail-container {\n  display: flex;\n  height: 100vh;\n  width: 100%;\n}\n.main-content-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 206px;\n  transition: margin-left 0.3s ease;\n}\n.main-content-container.sidebar-collapsed {\n  margin-left: 4rem;\n}\n.header-container {\n  flex-shrink: 0;\n  background-color: white;\n  border-bottom: 1px solid #e5e7eb;\n}\n.case-meta-section {\n  background-color: white;\n  border-bottom: 1px solid #e5e7eb;\n}\n.case-meta-content {\n  max-width: 80rem;\n  margin: 0 auto;\n  padding: 1rem 1rem;\n}\n@media (min-width: 640px) {\n  .case-meta-content {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .case-meta-content {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n.back-arrow-container {\n  margin-bottom: 1rem;\n}\n.case-info-column {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.case-title {\n  font-size: 28px;\n  font-weight: 600;\n  color: #146B85;\n  line-height: 1.25;\n  margin: 0;\n}\n.case-meta-info {\n  display: flex;\n  align-items: center;\n  font-size: 0.875rem;\n  color: #4b5563;\n}\n.action-buttons {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.action-button {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 36px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  background-color: white;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  transition: background-color 0.15s;\n}\n.action-button:hover {\n  background-color: #f9fafb;\n}\n.tab-navigation {\n  border-bottom: 1px solid #e5e7eb;\n}\n.summary-container {\n  flex: 1;\n  overflow-y: auto;\n  background-color: #f8f8f8;\n  padding: 2rem 1rem;\n}\n@media (min-width: 640px) {\n  .summary-container {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .summary-container {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n.tab-content {\n  max-width: 80rem;\n  margin: 0 auto;\n  background-color: white;\n  border-radius: 0.75rem;\n  border: 1px solid #e5e7eb;\n  padding: 1.5rem;\n}\n.text-brand {\n  color: #146B85;\n}\n.border-brand {\n  border-color: #146B85;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.space-x-8 > * + * {\n  margin-left: 2rem;\n}\n.space-y-4 > * + * {\n  margin-top: 1rem;\n}\n.space-x-4 > * + * {\n  margin-left: 1rem;\n}\n.flex {\n  display: flex;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.bg-red-100 {\n  background-color: #fecaca;\n}\n.text-red-600 {\n  color: #dc2626;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-gray-300 {\n  border-color: #d1d5db;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.bg-white {\n  background-color: white;\n}\n.bg-cases-page {\n  background-color: #F8F8F8;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.sticky {\n  position: sticky;\n}\n.top-0 {\n  top: 0;\n}\n.top-24 {\n  top: 6rem;\n}\n.z-40 {\n  z-index: 40;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n@media (min-width: 640px) {\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n.grid {\n  display: grid;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n@media (min-width: 1024px) {\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .lg\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.flex {\n  display: flex;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.items-center {\n  align-items: center;\n}\n.items-start {\n  align-items: flex-start;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.space-x-4 > * + * {\n  margin-left: 1rem;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-y-3 > * + * {\n  margin-top: 0.75rem;\n}\n.space-y-4 > * + * {\n  margin-top: 1rem;\n}\n.space-y-6 > * + * {\n  margin-top: 1.5rem;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.bg-gray-50 {\n  background-color: #f9fafb;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.bg-blue-100 {\n  background-color: #dbeafe;\n}\n.bg-red-100 {\n  background-color: #fee2e2;\n}\n.bg-brand-light {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-blue-800 {\n  color: #1e40af;\n}\n.text-red-600 {\n  color: #dc2626;\n}\n.text-brand {\n  color: #146B85;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.border {\n  border-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.border-gray-300 {\n  border-color: #d1d5db;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-full {\n  width: 100%;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.w-0\\.5 {\n  width: 0.125rem;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.relative {\n  position: relative;\n}\n.absolute {\n  position: absolute;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.top-3 {\n  top: 0.75rem;\n}\n.transform {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.ml-13 {\n  margin-left: 3.25rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\n.hover\\:bg-gray-100:hover {\n  background-color: #f3f4f6;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.timeline-connector {\n  width: 2px;\n  background-color: #e5e7eb;\n}\n.document-item:hover {\n  background-color: #f9fafb;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.attorney-info {\n  padding-left: 3.25rem;\n}\n.action-button {\n  transition: all 0.2s ease;\n}\n.action-button:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.timeline-dot {\n  position: relative;\n}\n.timeline-dot::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(20, 107, 133, 0.2);\n  transform: translate(-50%, -50%);\n  animation: pulse 2s infinite;\n  opacity: 0;\n}\n@keyframes pulse {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.8);\n  }\n  50% {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(1.5);\n  }\n}\n@media (max-width: 1024px) {\n  .sticky {\n    position: relative;\n  }\n}\n.card-shadow {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.card-shadow:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\napp-summary-layout {\n  display: block;\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n}\n.tab-content-container {\n  position: relative;\n  z-index: 1;\n  isolation: isolate;\n}\n/*# sourceMappingURL=case-detail.component.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseDetailComponent, { className: "CaseDetailComponent" });
})();
export {
  CaseDetailComponent
};
//# sourceMappingURL=chunk-O6ZSRWPL.js.map
