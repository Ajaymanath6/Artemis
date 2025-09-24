import {
  AppHeaderComponent
} from "./chunk-3AXZEEBO.js";
import {
  Router,
  RouterModule
} from "./chunk-IVA26WHO.js";
import {
  SearchBarComponent
} from "./chunk-BI3V3TU4.js";
import "./chunk-E4BREK47.js";
import "./chunk-PSIVKUHD.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-T43XKO7X.js";

// src/app/components/navigation/side-nav/side-nav.component.ts
function SideNavComponent_li_3_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("ri-arrow-" + (item_r2.isExpanded ? "down" : "right") + "-s-line text-base ml-auto flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r2.isActiveRoute(item_r2.route || "") ? "#147885" : "#9CA3AF");
  }
}
function SideNavComponent_li_3_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 17);
    \u0275\u0275listener("click", function SideNavComponent_li_3_ul_7_li_1_Template_button_click_1_listener() {
      const child_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onItemClick(child_r5));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.isActiveRoute(child_r5.route || "") ? "bg-blue-fill text-brand font-medium" : "text-text-weak hover:bg-fill hover:text-text-strong");
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + child_r5.icon + " text-base flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r2.isActiveRoute(child_r5.route || "") ? "#147885" : "#9CA3AF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.label);
  }
}
function SideNavComponent_li_3_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 16);
    \u0275\u0275template(1, SideNavComponent_li_3_ul_7_li_1_Template, 5, 7, "li", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r2.children);
  }
}
function SideNavComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "button", 12);
    \u0275\u0275listener("click", function SideNavComponent_li_3_Template_button_click_2_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onItemClick(item_r2));
    });
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SideNavComponent_li_3_i_6_Template, 1, 4, "i", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SideNavComponent_li_3_ul_7_Template, 2, 1, "ul", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.isActiveRoute(item_r2.route || "") ? "bg-gray-light text-text-strong" : "text-text-strong hover:bg-fill hover:text-brand");
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + item_r2.icon + " text-lg flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r2.isActiveRoute(item_r2.route || "") ? "#147885" : "#9CA3AF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children && item_r2.isExpanded);
  }
}
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
        icon: "dashboard-line",
        route: "/dashboard"
      },
      {
        id: "cases",
        label: "Cases",
        icon: "folder-open-line",
        route: "/cases"
      },
      {
        id: "search",
        label: "Advanced Search",
        icon: "search-line",
        children: [
          { id: "search-cases", label: "Cases", icon: "folder-line", route: "/search/cases" },
          { id: "search-attorneys", label: "Attorneys", icon: "user-line", route: "/search/attorneys" },
          { id: "search-judges", label: "Judges", icon: "scales-line", route: "/search/judges" },
          { id: "search-law-firms", label: "Law Firms", icon: "building-line", route: "/search/law-firms" },
          { id: "search-documents", label: "Documents", icon: "file-text-line", route: "/search/documents" }
        ]
      },
      {
        id: "projects",
        label: "Projects",
        icon: "briefcase-line",
        route: "/projects"
      },
      {
        id: "bookmarks",
        label: "Saved Items",
        icon: "bookmark-line",
        route: "/bookmarks"
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: "line-chart-line",
        route: "/analytics"
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: "notification-line",
        route: "/notifications"
      },
      {
        id: "reports",
        label: "Reports",
        icon: "file-chart-line",
        route: "/reports"
      },
      {
        id: "settings",
        label: "Settings",
        icon: "settings-line",
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavComponent, selectors: [["app-side-nav"]], inputs: { navItems: "navItems" }, outputs: { itemClick: "itemClick" }, decls: 14, vars: 1, consts: [[1, "bg-white", "border-r", "border-stroke-weak", "h-full", "flex", "flex-col", "w-sidebar"], [1, "flex-1", "overflow-y-auto", "py-4"], [1, "space-y-1", "px-3"], [4, "ngFor", "ngForOf"], [1, "p-4", "border-t", "border-stroke-weak"], [1, "flex", "items-center"], [1, "flex", "items-center", "space-x-3"], [1, "w-8", "h-8", "bg-brand", "rounded-full", "flex", "items-center", "justify-center"], [1, "ri-user-line", "text-base", "text-white"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-text-strong", "truncate"], [1, "text-xs", "text-text-weak", "truncate"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "rounded-lg", "transition-colors", "group", 3, "click"], [1, "ml-3", "truncate"], [3, "class", "color", 4, "ngIf"], ["class", "mt-1 ml-6 space-y-1", 4, "ngIf"], [1, "mt-1", "ml-6", "space-y-1"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "rounded-lg", "transition-colors", 3, "click"]], template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "ul", 2);
      \u0275\u0275template(3, SideNavComponent_li_3_Template, 8, 9, "li", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "p", 10);
      \u0275\u0275text(11, "Legal User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 11);
      \u0275\u0275text(13, "user@unicourt.com");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.navItems);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar[_ngcontent-%COMP%] {\n  width: 206px;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #147885;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #147885;\n}\n.bg-blue-fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill[_ngcontent-%COMP%]:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #147885;\n}\n.hover\\:text-text-strong[_ngcontent-%COMP%]:hover {\n  color: #030B26;\n}\n.text-text-strong[_ngcontent-%COMP%] {\n  color: #030B26;\n}\n.text-text-weak[_ngcontent-%COMP%] {\n  color: #353D59;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #147885;\n  outline-offset: 2px;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.w-8[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-dashboard-line[_ngcontent-%COMP%], \n.ri-folder-open-line[_ngcontent-%COMP%], \n.ri-search-line[_ngcontent-%COMP%], \n.ri-folder-line[_ngcontent-%COMP%], \n.ri-user-line[_ngcontent-%COMP%], \n.ri-scales-line[_ngcontent-%COMP%], \n.ri-building-line[_ngcontent-%COMP%], \n.ri-file-text-line[_ngcontent-%COMP%], \n.ri-briefcase-line[_ngcontent-%COMP%], \n.ri-bookmark-line[_ngcontent-%COMP%], \n.ri-line-chart-line[_ngcontent-%COMP%], \n.ri-notification-line[_ngcontent-%COMP%], \n.ri-file-chart-line[_ngcontent-%COMP%], \n.ri-settings-line[_ngcontent-%COMP%], \n.ri-arrow-down-s-line[_ngcontent-%COMP%], \n.ri-arrow-right-s-line[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideNavComponent, [{
    type: Component,
    args: [{ selector: "app-side-nav", imports: [CommonModule, RouterModule], template: `<!-- Side Navigation Component -->
<nav class="bg-white border-r border-stroke-weak h-full flex flex-col w-sidebar">

  <!-- Navigation Items -->
  <div class="flex-1 overflow-y-auto py-4">
    <ul class="space-y-1 px-3">
      <li *ngFor="let item of navItems">

        <!-- Main Navigation Item -->
        <div>
          <button
            (click)="onItemClick(item)"
            class="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group"
            [class]="isActiveRoute(item.route || '') ?
              'bg-gray-light text-text-strong' :
              'text-text-strong hover:bg-fill hover:text-brand'">

            <!-- Icon -->
            <i 
              [class]="'ri-' + item.icon + ' text-lg flex-shrink-0'"
              [style.color]="isActiveRoute(item.route || '') ? '#147885' : '#9CA3AF'">
            </i>

            <!-- Label -->
            <span class="ml-3 truncate">{{ item.label }}</span>

            <!-- Expand/Collapse Arrow (for items with children) -->
            <i
              *ngIf="item.children"
              [class]="'ri-arrow-' + (item.isExpanded ? 'down' : 'right') + '-s-line text-base ml-auto flex-shrink-0'"
              [style.color]="isActiveRoute(item.route || '') ? '#147885' : '#9CA3AF'">
            </i>
          </button>

          <!-- Sub-navigation Items (when expanded) -->
          <ul *ngIf="item.children && item.isExpanded"
              class="mt-1 ml-6 space-y-1">
            <li *ngFor="let child of item.children">
              <button
                (click)="onItemClick(child)"
                class="w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
                [class]="isActiveRoute(child.route || '') ?
                  'bg-blue-fill text-brand font-medium' :
                  'text-text-weak hover:bg-fill hover:text-text-strong'">

                <i 
                  [class]="'ri-' + child.icon + ' text-base flex-shrink-0'"
                  [style.color]="isActiveRoute(child.route || '') ? '#147885' : '#9CA3AF'">
                </i>

                <span class="ml-3 truncate">{{ child.label }}</span>
              </button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <!-- Navigation Footer -->
  <div class="p-4 border-t border-stroke-weak">
    <div class="flex items-center">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
          <i class="ri-user-line text-base text-white"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-text-strong truncate">Legal User</p>
          <p class="text-xs text-text-weak truncate">user&#64;unicourt.com</p>
        </div>
      </div>
    </div>
  </div>
</nav>`, styles: ["/* src/app/components/navigation/side-nav/side-nav.component.css */\n:host {\n  display: block;\n  height: 100%;\n}\nnav {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar {\n  width: 206px;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.bg-brand {\n  background-color: #147885;\n}\n.text-brand {\n  color: #147885;\n}\n.bg-blue-fill {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand:hover {\n  color: #147885;\n}\n.hover\\:text-text-strong:hover {\n  color: #030B26;\n}\n.text-text-strong {\n  color: #030B26;\n}\n.text-text-weak {\n  color: #353D59;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.overflow-y-auto::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.min-w-0 {\n  min-width: 0px;\n}\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton:focus {\n  outline: 2px solid #147885;\n  outline-offset: 2px;\n}\nimg {\n  object-fit: contain;\n}\n.w-8 {\n  width: 2rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-dashboard-line,\n.ri-folder-open-line,\n.ri-search-line,\n.ri-folder-line,\n.ri-user-line,\n.ri-scales-line,\n.ri-building-line,\n.ri-file-text-line,\n.ri-briefcase-line,\n.ri-bookmark-line,\n.ri-line-chart-line,\n.ri-notification-line,\n.ri-file-chart-line,\n.ri-settings-line,\n.ri-arrow-down-s-line,\n.ri-arrow-right-s-line {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */\n"] }]
  }], () => [{ type: Router }], { navItems: [{
    type: Input
  }], itemClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavComponent, { className: "SideNavComponent", filePath: "src/app/components/navigation/side-nav/side-nav.component.ts", lineNumber: 20 });
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
//# sourceMappingURL=chunk-5LANQNIK.js.map
