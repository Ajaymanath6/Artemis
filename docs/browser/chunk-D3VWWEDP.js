import {
  AppHeaderComponent
} from "./chunk-DVH64EMI.js";
import {
  Router,
  RouterModule
} from "./chunk-IVA26WHO.js";
import {
  SearchBarComponent
} from "./chunk-NX7YKP7S.js";
import "./chunk-PBPJDBEJ.js";
import {
  PhosphorIconComponent
} from "./chunk-PSIVKUHD.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty
} from "./chunk-T43XKO7X.js";

// src/app/components/navigation/side-nav/side-nav.component.ts
var SideNavComponent = class _SideNavComponent {
  router;
  navItems = [];
  itemClick = new EventEmitter();
  constructor(router) {
    this.router = router;
    this.navItems = [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "squares-four",
        route: "/dashboard"
      },
      {
        id: "cases",
        label: "Cases",
        icon: "folder-open",
        route: "/cases"
      },
      {
        id: "search",
        label: "Search",
        icon: "magnifying-glass",
        children: [
          { id: "search-cases", label: "Cases", icon: "folder-open", route: "/search/cases" },
          { id: "search-attorneys", label: "Attorneys", icon: "user-circle", route: "/search/attorneys" },
          { id: "search-judges", label: "Judges", icon: "scales", route: "/search/judges" },
          { id: "search-law-firms", label: "Law Firms", icon: "buildings", route: "/search/law-firms" },
          { id: "search-documents", label: "Documents", icon: "file-text", route: "/search/documents" }
        ]
      },
      {
        id: "projects",
        label: "Projects",
        icon: "briefcase",
        route: "/projects"
      },
      {
        id: "bookmarks",
        label: "Bookmarks",
        icon: "bookmark-simple",
        route: "/bookmarks"
      },
      {
        id: "tracking",
        label: "Tracking",
        icon: "chart-line-up",
        route: "/tracking"
      },
      {
        id: "templates",
        label: "Templates",
        icon: "file-doc",
        route: "/templates"
      },
      {
        id: "settings",
        label: "Settings",
        icon: "gear-six",
        route: "/settings"
      }
    ];
  }
  // Removed collapse functionality
  onItemClick(item) {
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    } else if (item.route) {
      this.router.navigate([item.route]);
    }
    this.itemClick.emit(item);
  }
  isActiveRoute(route) {
    return this.router.url === route;
  }
  static \u0275fac = function SideNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideNavComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavComponent, selectors: [["app-side-nav"]], inputs: { navItems: "navItems" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 0, consts: [[1, "bg-white", "border-r", "h-full", "flex", "flex-col", "w-sidebar"]], template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "nav", 0);
    }
  }, dependencies: [CommonModule, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar[_ngcontent-%COMP%] {\n  width: 206px;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #147885;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #147885;\n}\n.bg-blue-fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill[_ngcontent-%COMP%]:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #147885;\n}\n.hover\\:text-text-strong[_ngcontent-%COMP%]:hover {\n  color: #030B26;\n}\n.text-text-strong[_ngcontent-%COMP%] {\n  color: #030B26;\n}\n.text-text-weak[_ngcontent-%COMP%] {\n  color: #353D59;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #147885;\n  outline-offset: 2px;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.w-8[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideNavComponent, [{
    type: Component,
    args: [{ selector: "app-side-nav", imports: [CommonModule, RouterModule, PhosphorIconComponent], template: '<!-- Side Navigation Component -->\n<nav class="bg-white border-r  h-full flex flex-col w-sidebar">\n\n  <!-- Navigation Items -->\n  \n\n  <!-- Navigation Footer -->\n  \n</nav>', styles: ["/* src/app/components/navigation/side-nav/side-nav.component.css */\n:host {\n  display: block;\n  height: 100%;\n}\nnav {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar {\n  width: 206px;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.bg-brand {\n  background-color: #147885;\n}\n.text-brand {\n  color: #147885;\n}\n.bg-blue-fill {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand:hover {\n  color: #147885;\n}\n.hover\\:text-text-strong:hover {\n  color: #030B26;\n}\n.text-text-strong {\n  color: #030B26;\n}\n.text-text-weak {\n  color: #353D59;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.overflow-y-auto::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.min-w-0 {\n  min-width: 0px;\n}\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton:focus {\n  outline: 2px solid #147885;\n  outline-offset: 2px;\n}\nimg {\n  object-fit: contain;\n}\n.w-8 {\n  width: 2rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */\n"] }]
  }], () => [{ type: Router }], { navItems: [{
    type: Input
  }], itemClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavComponent, { className: "SideNavComponent", filePath: "src/app/components/navigation/side-nav/side-nav.component.ts", lineNumber: 21 });
})();

// src/app/pages/cases/cases.component.ts
var CasesComponent = class _CasesComponent {
  constructor() {
  }
  ngOnInit() {
  }
  onSearch(query) {
    console.log("Searching cases for:", query);
  }
  onNavItemClick(item) {
    console.log("Navigation item clicked:", item);
  }
  static \u0275fac = function CasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesComponent, selectors: [["app-cases"]], decls: 9, vars: 2, consts: [[1, "min-h-screen", "bg-fill"], [3, "showUserProfile", "showCollapseButton"], [1, "flex", "h-[calc(100vh-4rem)]"], [3, "itemClick"], [1, "flex-1", "overflow-y-auto"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [3, "search"]], template: function CasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "app-side-nav", 3);
      \u0275\u0275listener("itemClick", function CasesComponent_Template_app_side_nav_itemClick_3_listener($event) {
        return ctx.onNavItemClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "main", 4)(5, "div", 5);
      \u0275\u0275element(6, "div", 6);
      \u0275\u0275elementStart(7, "div", 6)(8, "app-search-bar", 7);
      \u0275\u0275listener("search", function CasesComponent_Template_app_search_bar_search_8_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("showUserProfile", true)("showCollapseButton", false);
    }
  }, dependencies: [CommonModule, SearchBarComponent, AppHeaderComponent, SideNavComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.h-\\__ph-0__[_ngcontent-%COMP%] {\n  height: calc(100vh - 4rem);\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.overflow-y-auto[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.p-8[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.py-12[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=cases.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasesComponent, [{
    type: Component,
    args: [{ selector: "app-cases", standalone: true, imports: [CommonModule, SearchBarComponent, AppHeaderComponent, SideNavComponent], template: '<!-- Cases Page with Layout -->\n<div class="min-h-screen bg-fill">\n  \n  <!-- App Header with User Profile -->\n  <app-header \n    [showUserProfile]="true"\n    [showCollapseButton]="false">\n  </app-header>\n  \n  <!-- Main Layout Container -->\n  <div class="flex h-[calc(100vh-4rem)]">\n    \n    <!-- Side Navigation -->\n    <app-side-nav\n      (itemClick)="onNavItemClick($event)">\n    </app-side-nav>\n    \n    <!-- Main Content Area -->\n    <main class="flex-1 overflow-y-auto">\n      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">\n\n        <!-- Header Section -->\n        <div class="mb-8">\n          <!-- <h1 class="text-3xl font-bold text-text-strong mb-2">Cases</h1>\n          <p class="text-text-weak">Search and manage legal cases in your project.</p> -->\n        </div>\n\n        <!-- Search Section -->\n        <div class="mb-8">\n          <app-search-bar (search)="onSearch($event)"></app-search-bar>\n        </div>\n\n        <!-- Cases Content Area -->\n        \n\n      </div>\n    </main>\n    \n  </div>\n</div>\n', styles: ["/* src/app/pages/cases/cases.component.css */\n:host {\n  display: block;\n}\n.h-\\[calc\\(100vh-4rem\\)\\] {\n  height: calc(100vh - 4rem);\n}\n.flex {\n  display: flex;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.bg-white {\n  background-color: white;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-stroke-weak {\n  border-color: #e5e7eb;\n}\n.p-8 {\n  padding: 2rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=cases.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesComponent, { className: "CasesComponent", filePath: "src/app/pages/cases/cases.component.ts", lineNumber: 14 });
})();
export {
  CasesComponent
};
//# sourceMappingURL=chunk-D3VWWEDP.js.map
