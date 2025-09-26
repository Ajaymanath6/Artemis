import {
  AppHeaderComponent
} from "./chunk-UQQHCV5Z.js";
import {
  RouterOutlet
} from "./chunk-DDDO6NM3.js";
import "./chunk-NB6NNANN.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-Z6WLR7UX.js";

// src/app/layouts/dashboard-layout/dashboard-layout.component.ts
var DashboardLayoutComponent = class _DashboardLayoutComponent {
  static \u0275fac = function DashboardLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardLayoutComponent, selectors: [["app-dashboard-layout"]], decls: 4, vars: 1, consts: [[1, "min-h-screen", "bg-fill"], [3, "showUserProfile"], [1, "flex-1"]], template: function DashboardLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header", 1);
      \u0275\u0275elementStart(2, "main", 2);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("showUserProfile", true);
    }
  }, dependencies: [CommonModule, RouterOutlet, AppHeaderComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-layout", standalone: true, imports: [CommonModule, RouterOutlet, AppHeaderComponent], template: '<!-- Dashboard Layout -->\n<div class="min-h-screen bg-fill">\n  <!-- App Header with User Profile -->\n  <app-header [showUserProfile]="true"></app-header>\n\n  <!-- Main Content -->\n  <main class="flex-1">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n', styles: ["/* src/app/layouts/dashboard-layout/dashboard-layout.component.css */\n:host {\n  display: block;\n  min-height: 100vh;\n}\nmain {\n  min-height: calc(100vh - 64px);\n}\n/*# sourceMappingURL=dashboard-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardLayoutComponent, { className: "DashboardLayoutComponent" });
})();
export {
  DashboardLayoutComponent
};
//# sourceMappingURL=chunk-UHD7QILI.js.map
