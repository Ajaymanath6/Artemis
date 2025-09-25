import {
  AppHeaderComponent
} from "./chunk-TYKDBJTZ.js";
import {
  Router,
  RouterModule
} from "./chunk-5EKLBSZZ.js";
import {
  SearchBarComponent
} from "./chunk-TOIY43RW.js";
import "./chunk-53JHYZBU.js";
import "./chunk-4DW7BALG.js";
import "./chunk-JUOZCKZE.js";
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-63I3BEBX.js";

// src/app/components/navigation/side-nav/side-nav.component.ts
function SideNavComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function SideNavComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCollapse());
    });
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementEnd();
  }
}
function SideNavComponent_li_7_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("ri-arrow-" + (item_r4.isExpanded ? "down" : "right") + "-s-line text-base ml-auto flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r1.isActiveRoute(item_r4.route || "") ? "#146B85" : "#9CA3AF");
  }
}
function SideNavComponent_li_7_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 22);
    \u0275\u0275listener("click", function SideNavComponent_li_7_ul_7_li_1_Template_button_click_1_listener() {
      const child_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onItemClick(child_r6));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.isActiveRoute(child_r6.route || "") ? "bg-blue-fill text-brand font-medium" : "text-text-weak hover:bg-fill hover:text-text-strong");
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + child_r6.icon + " text-base flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r1.isActiveRoute(child_r6.route || "") ? "#146B85" : "#9CA3AF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r6.label);
  }
}
function SideNavComponent_li_7_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 21);
    \u0275\u0275template(1, SideNavComponent_li_7_ul_7_li_1_Template, 5, 7, "li", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r4.children);
  }
}
function SideNavComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "button", 17);
    \u0275\u0275listener("click", function SideNavComponent_li_7_Template_button_click_2_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick(item_r4));
    });
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SideNavComponent_li_7_i_6_Template, 1, 4, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SideNavComponent_li_7_ul_7_Template, 2, 1, "ul", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.isActiveRoute(item_r4.route || "") ? "bg-gray-light text-text-strong" : "text-text-strong hover:bg-fill hover:text-brand");
    \u0275\u0275classProp("px-3", !ctx_r1.isCollapsed)("py-2", !ctx_r1.isCollapsed)("px-2", ctx_r1.isCollapsed)("py-2", ctx_r1.isCollapsed)("justify-center", ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + item_r4.icon + " text-lg flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r1.isActiveRoute(item_r4.route || "") ? "#146B85" : "#9CA3AF");
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.children && !ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r4.children && item_r4.isExpanded && !ctx_r1.isCollapsed);
  }
}
var SideNavComponent = class _SideNavComponent {
  router;
  navItems = [];
  isCollapsed = false;
  itemClick = new EventEmitter();
  sidebarToggle = new EventEmitter();
  constructor(router) {
    this.router = router;
    this.navItems = [
      {
        id: "project",
        label: "NY Judgment Tracking",
        icon: "folder-open-fill",
        children: [
          { id: "project-overview", label: "Project Overview", icon: "eye-line", route: "/project/overview" },
          { id: "project-settings", label: "Project Settings", icon: "settings-3-line", route: "/project/settings" },
          { id: "project-members", label: "Team Members", icon: "team-line", route: "/project/members" }
        ]
      },
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
  toggleCollapse() {
    this.sidebarToggle.emit();
    if (this.isCollapsed) {
      this.navItems.forEach((item) => {
        if (item.children) {
          item.isExpanded = false;
        }
      });
    }
  }
  onItemClick(item) {
    if (item.children && !this.isCollapsed) {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavComponent, selectors: [["app-side-nav"]], inputs: { navItems: "navItems", isCollapsed: "isCollapsed" }, outputs: { itemClick: "itemClick", sidebarToggle: "sidebarToggle" }, decls: 18, vars: 15, consts: [[1, "bg-white", "border-r", "border-gray-200", "h-screen", "flex", "flex-col", "fixed", "left-0", "top-0", "z-40"], [1, "flex", "items-center", "justify-between", "px-4", "py-4", "border-b", "border-gray-200"], [1, "flex", "items-center"], ["alt", "UniCourt Logo", 1, "h-8", "w-auto", 3, "src"], ["class", "p-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto focus:outline-none", 3, "click", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "py-4"], [1, "space-y-1"], [4, "ngFor", "ngForOf"], [1, "p-4", "border-t", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-8", "h-8", "bg-brand", "rounded-full", "flex", "items-center", "justify-center"], [1, "ri-user-line", "text-base", "text-white"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-text-strong", "truncate"], [1, "text-xs", "text-text-weak", "truncate"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", "ml-auto", "focus:outline-none", 3, "click"], [1, "ri-layout-right-line", "text-lg", 2, "color", "#9CA3AF"], [1, "w-full", "flex", "items-center", "text-sm", "font-medium", "rounded-lg", "transition-colors", "group", 3, "click"], [1, "ml-3", "truncate"], [3, "class", "color", 4, "ngIf"], ["class", "mt-1 ml-6 space-y-1", 4, "ngIf"], [1, "mt-1", "ml-6", "space-y-1"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "rounded-lg", "transition-colors", 3, "click"]], template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, SideNavComponent_button_4_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "ul", 6);
      \u0275\u0275template(7, SideNavComponent_li_7_Template, 8, 21, "li", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 8)(9, "div", 2)(10, "div", 9)(11, "div", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 12)(14, "p", 13);
      \u0275\u0275text(15, "Legal User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 14);
      \u0275\u0275text(17, "user@unicourt.com");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("w-sidebar", !ctx.isCollapsed)("w-16", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("justify-center", ctx.isCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.isCollapsed ? "assets/images/logo2.svg" : "assets/images/logo1.svg", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("px-3", !ctx.isCollapsed)("px-1", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.isCollapsed);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar[_ngcontent-%COMP%] {\n  width: 206px;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.h-screen[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #146B85;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.bg-blue-fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill[_ngcontent-%COMP%]:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #146B85;\n}\n.hover\\:text-text-strong[_ngcontent-%COMP%]:hover {\n  color: #030B26;\n}\n.text-text-strong[_ngcontent-%COMP%] {\n  color: #030B26;\n}\n.text-text-weak[_ngcontent-%COMP%] {\n  color: #353D59;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #146B85;\n  outline-offset: 2px;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.w-8[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-dashboard-line[_ngcontent-%COMP%], \n.ri-folder-open-line[_ngcontent-%COMP%], \n.ri-search-line[_ngcontent-%COMP%], \n.ri-folder-line[_ngcontent-%COMP%], \n.ri-user-line[_ngcontent-%COMP%], \n.ri-scales-line[_ngcontent-%COMP%], \n.ri-building-line[_ngcontent-%COMP%], \n.ri-file-text-line[_ngcontent-%COMP%], \n.ri-briefcase-line[_ngcontent-%COMP%], \n.ri-bookmark-line[_ngcontent-%COMP%], \n.ri-line-chart-line[_ngcontent-%COMP%], \n.ri-notification-line[_ngcontent-%COMP%], \n.ri-file-chart-line[_ngcontent-%COMP%], \n.ri-settings-line[_ngcontent-%COMP%], \n.ri-arrow-down-s-line[_ngcontent-%COMP%], \n.ri-arrow-right-s-line[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SideNavComponent, [{
    type: Component,
    args: [{ selector: "app-side-nav", standalone: true, imports: [CommonModule, RouterModule], template: `<!-- Side Navigation Component -->
<nav class="bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-40" 
     [class.w-sidebar]="!isCollapsed" 
     [class.w-16]="isCollapsed">

  <!-- Header with Logo and Collapse Button -->
  <div class="flex items-center justify-between px-4 py-4 border-b border-gray-200" [class.justify-center]="isCollapsed">
    <!-- Logo -->
    <div class="flex items-center">
      <img [src]="isCollapsed ? 'assets/images/logo2.svg' : 'assets/images/logo1.svg'"
           alt="UniCourt Logo"
           class="h-8 w-auto" 
           style="" />
    </div>
    
    <!-- Collapse/Expand Button - Hidden when collapsed -->
    <button
      *ngIf="!isCollapsed"
      (click)="toggleCollapse()"
      class="p-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto focus:outline-none">
      <i 
        class="ri-layout-right-line text-lg"
        style="color: #9CA3AF;">
      </i>
    </button>
  </div>

  <!-- Navigation Items -->
  <div class="flex-1 overflow-y-auto py-4">
    <ul class="space-y-1" [class.px-3]="!isCollapsed" [class.px-1]="isCollapsed">
      <li *ngFor="let item of navItems">

        <!-- Main Navigation Item -->
        <div>
          <button
            (click)="onItemClick(item)"
            class="w-full flex items-center text-sm font-medium rounded-lg transition-colors group"
            [class]="isActiveRoute(item.route || '') ?
              'bg-gray-light text-text-strong' :
              'text-text-strong hover:bg-fill hover:text-brand'"
            [class.px-3]="!isCollapsed"
            [class.py-2]="!isCollapsed"
            [class.px-2]="isCollapsed"
            [class.py-2]="isCollapsed"
            [class.justify-center]="isCollapsed">

            <!-- Icon -->
            <i 
              [class]="'ri-' + item.icon + ' text-lg flex-shrink-0'"
              [style.color]="isActiveRoute(item.route || '') ? '#146B85' : '#9CA3AF'">
            </i>

            <!-- Label (hidden when collapsed) -->
            <span class="ml-3 truncate" [class.hidden]="isCollapsed">{{ item.label }}</span>

            <!-- Expand/Collapse Arrow (for items with children, hidden when collapsed) -->
            <i
              *ngIf="item.children && !isCollapsed"
              [class]="'ri-arrow-' + (item.isExpanded ? 'down' : 'right') + '-s-line text-base ml-auto flex-shrink-0'"
              [style.color]="isActiveRoute(item.route || '') ? '#146B85' : '#9CA3AF'">
            </i>
          </button>

          <!-- Sub-navigation Items (when expanded and not collapsed) -->
          <ul *ngIf="item.children && item.isExpanded && !isCollapsed"
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
                  [style.color]="isActiveRoute(child.route || '') ? '#146B85' : '#9CA3AF'">
                </i>

                <span class="ml-3 truncate">{{ child.label }}</span>
              </button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  <!-- Navigation Footer - Hidden when collapsed -->
  <div class="p-4 border-t border-gray-200" [class.hidden]="isCollapsed">
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
</nav>`, styles: ["/* src/app/components/navigation/side-nav/side-nav.component.css */\n:host {\n  display: block;\n  height: 100%;\n}\nnav {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar {\n  width: 206px;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.fixed {\n  position: fixed;\n}\n.left-0 {\n  left: 0;\n}\n.top-0 {\n  top: 0;\n}\n.z-40 {\n  z-index: 40;\n}\n.justify-center {\n  justify-content: center;\n}\n.bg-brand {\n  background-color: #146B85;\n}\n.text-brand {\n  color: #146B85;\n}\n.bg-blue-fill {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand:hover {\n  color: #146B85;\n}\n.hover\\:text-text-strong:hover {\n  color: #030B26;\n}\n.text-text-strong {\n  color: #030B26;\n}\n.text-text-weak {\n  color: #353D59;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.overflow-y-auto::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.min-w-0 {\n  min-width: 0px;\n}\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton:focus {\n  outline: 2px solid #146B85;\n  outline-offset: 2px;\n}\nimg {\n  object-fit: contain;\n}\n.w-8 {\n  width: 2rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-dashboard-line,\n.ri-folder-open-line,\n.ri-search-line,\n.ri-folder-line,\n.ri-user-line,\n.ri-scales-line,\n.ri-building-line,\n.ri-file-text-line,\n.ri-briefcase-line,\n.ri-bookmark-line,\n.ri-line-chart-line,\n.ri-notification-line,\n.ri-file-chart-line,\n.ri-settings-line,\n.ri-arrow-down-s-line,\n.ri-arrow-right-s-line {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.hover\\:bg-gray-100:hover {\n  background-color: #f3f4f6;\n}\n.w-16 {\n  width: 4rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */\n"] }]
  }], () => [{ type: Router }], { navItems: [{
    type: Input
  }], isCollapsed: [{
    type: Input
  }], itemClick: [{
    type: Output
  }], sidebarToggle: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavComponent, { className: "SideNavComponent", filePath: "src/app/components/navigation/side-nav/side-nav.component.ts", lineNumber: 21 });
})();

// src/app/pages/cases/cases.component.ts
function CasesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 13)(4, "span", 14);
    \u0275\u0275text(5, "Results");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "button", 16);
    \u0275\u0275listener("click", function CasesComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewMode("grid"));
    });
    \u0275\u0275element(8, "i", 17);
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "Grid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 19);
    \u0275\u0275listener("click", function CasesComponent_div_9_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewMode("table"));
    });
    \u0275\u0275element(12, "i", 20);
    \u0275\u0275elementStart(13, "span", 18);
    \u0275\u0275text(14, "Table");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275classMap(ctx_r1.viewMode === "grid" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500 hover:text-gray-700");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.viewMode === "table" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500 hover:text-gray-700");
  }
}
function CasesComponent_div_10_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25);
    \u0275\u0275element(2, "div", 26)(3, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275element(5, "div", 29)(6, "div", 30)(7, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32)(9, "div", 13);
    \u0275\u0275element(10, "div", 33)(11, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275element(13, "div", 35)(14, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32)(16, "div", 13);
    \u0275\u0275element(17, "div", 37)(18, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 13);
    \u0275\u0275element(20, "div", 39)(21, "div", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 41);
    \u0275\u0275element(23, "div", 42)(24, "div", 43)(25, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275element(27, "div", 45)(28, "div", 43)(29, "div", 46);
    \u0275\u0275elementEnd()();
  }
}
function CasesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, CasesComponent_div_10_div_1_div_1_Template, 30, 0, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletonCards);
  }
}
function CasesComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 47)(2, "h3", 48);
    \u0275\u0275text(3, " AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "div", 49)(6, "span", 50);
    \u0275\u0275text(7, "Case Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 51);
    \u0275\u0275text(9, " This is a Civil case (CIV537691) filed in the California Superior Courts - San Mateo County Superior Court, with a Judgment Entered. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 52)(11, "span", 53);
    \u0275\u0275element(12, "i", 54);
    \u0275\u0275text(13, " Civil Case ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 55);
    \u0275\u0275element(15, "i", 56);
    \u0275\u0275text(16, " Superior Court ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 57);
    \u0275\u0275element(18, "i", 58);
    \u0275\u0275text(19, " Judgment Entered ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 59);
    \u0275\u0275element(21, "i", 60);
    \u0275\u0275text(22, " Status: Open ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 61)(24, "div", 62)(25, "div", 63);
    \u0275\u0275element(26, "i", 64);
    \u0275\u0275elementStart(27, "span", 65);
    \u0275\u0275text(28, "Filing Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 66);
    \u0275\u0275text(30, "8 March 2016");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 63);
    \u0275\u0275element(32, "i", 67);
    \u0275\u0275elementStart(33, "span", 65);
    \u0275\u0275text(34, "Case ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 66);
    \u0275\u0275text(36, "CIV537691");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 62)(38, "div", 63);
    \u0275\u0275element(39, "i", 68);
    \u0275\u0275elementStart(40, "span", 65);
    \u0275\u0275text(41, "Judge:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 66);
    \u0275\u0275text(43, "Buchwald, Gerald J");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 63);
    \u0275\u0275element(45, "i", 69);
    \u0275\u0275elementStart(46, "span", 65);
    \u0275\u0275text(47, "Court:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 66);
    \u0275\u0275text(49, "San Mateo County Superior Court");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 70)(51, "button", 71);
    \u0275\u0275element(52, "i", 72);
    \u0275\u0275text(53, " View Case Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 73);
    \u0275\u0275element(55, "i", 74);
    \u0275\u0275text(56, " Track Case ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 73);
    \u0275\u0275element(58, "i", 75);
    \u0275\u0275text(59, " Add to Project ");
    \u0275\u0275elementEnd()()()();
  }
}
function CasesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CasesComponent_div_10_div_1_Template, 2, 1, "div", 21)(2, CasesComponent_div_10_div_2_Template, 60, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSearching);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSearching && ctx_r1.showResults);
  }
}
var CasesComponent = class _CasesComponent {
  isSearching = false;
  hasSearched = false;
  skeletonCards = Array(10).fill(0);
  // Create array for 10 skeleton cards
  isSidebarCollapsed = false;
  projectName = "NY Judgment Tracking";
  // Default project name
  currentSearchQuery = "";
  viewMode = "grid";
  showResults = false;
  constructor() {
  }
  ngOnInit() {
  }
  onSearch(query) {
    console.log("Searching cases for:", query);
    this.currentSearchQuery = query;
    this.isSearching = true;
    this.hasSearched = true;
    this.showResults = false;
    setTimeout(() => {
      this.isSearching = false;
      this.showResults = true;
    }, 3e3);
  }
  onNavItemClick(item) {
    console.log("Navigation item clicked:", item);
  }
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onProjectClick() {
    console.log("Project clicked:", this.projectName);
  }
  onSearchQueryClick() {
    console.log("Search query clicked:", this.currentSearchQuery);
  }
  toggleViewMode(mode) {
    this.viewMode = mode;
    console.log("View mode changed to:", mode);
  }
  static \u0275fac = function CasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesComponent, selectors: [["app-cases"]], decls: 11, vars: 11, consts: [[1, "min-h-screen"], [3, "itemClick", "sidebarToggle", "isCollapsed"], [1, "flex", "flex-col", "bg-cases-page", "min-h-screen"], [3, "collapseToggle", "projectClick", "searchQueryClick", "showUserProfile", "showCollapseButton", "projectName", "searchQuery"], [1, "flex-1", "overflow-y-auto"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [3, "search"], ["class", "mb-6", 4, "ngIf"], [4, "ngIf"], [1, "mb-6"], [1, "border-t", "border-gray-200", "mb-6"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-2"], [1, "text-gray-900", "font-semibold"], [1, "flex", "items-center", "bg-white", "rounded-lg", "border", "border-gray-200", "overflow-hidden"], [1, "px-3", "py-2", "flex", "items-center", "space-x-2", "transition-colors", 3, "click"], [1, "ri-layout-grid-line", "text-base"], [1, "text-sm", "font-medium"], [1, "px-3", "py-2", "flex", "items-center", "space-x-2", "transition-colors", "border-l", "border-gray-200", 3, "click"], [1, "ri-layout-row-line", "text-base"], ["class", "space-y-4", 4, "ngIf"], [1, "space-y-4"], ["class", "bg-white rounded-lg border border-gray-200 p-6 animate-pulse", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "border", "border-gray-200", "p-6", "animate-pulse"], [1, "flex", "items-center", "mb-4"], [1, "w-6", "h-6", "bg-gray-300", "rounded-full", "mr-3"], [1, "h-6", "bg-gray-300", "rounded", "w-1\\/3"], [1, "flex", "items-center", "space-x-2", "mb-3"], [1, "h-6", "bg-gray-200", "rounded-full", "px-3", "py-1", "w-16"], [1, "h-6", "bg-gray-200", "rounded-full", "px-3", "py-1", "w-20"], [1, "h-6", "bg-gray-200", "rounded-full", "px-3", "py-1", "w-24"], [1, "flex", "items-center", "space-x-4", "mb-3"], [1, "h-5", "bg-gray-200", "rounded-full", "w-12"], [1, "h-5", "bg-gray-300", "rounded", "w-24"], [1, "h-5", "bg-gray-200", "rounded-full", "w-16"], [1, "h-5", "bg-gray-300", "rounded", "w-32"], [1, "h-5", "bg-gray-200", "rounded-full", "w-14"], [1, "h-5", "bg-gray-300", "rounded", "w-28"], [1, "h-5", "bg-gray-200", "rounded-full", "w-18"], [1, "h-5", "bg-gray-300", "rounded", "w-36"], [1, "mb-2"], [1, "h-5", "bg-gray-200", "rounded-full", "w-20", "mb-2"], [1, "h-4", "bg-gray-300", "rounded", "w-full"], [1, "h-4", "bg-gray-300", "rounded", "w-3\\/4", "mt-1"], [1, "h-5", "bg-gray-200", "rounded-full", "w-24", "mb-2"], [1, "h-4", "bg-gray-300", "rounded", "w-2\\/3", "mt-1"], [1, "bg-white", "rounded-lg", "border", "border-gray-200", "p-6", "hover:shadow-md", "transition-shadow"], [1, "text-xl", "font-semibold", "text-gray-900", "mb-4"], [1, "flex", "items-start", "space-x-2", "mb-2"], [1, "text-xs", "font-bold", "text-gray-500", "uppercase", "tracking-wide"], [1, "text-gray-700", "text-sm", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-2", "mb-6"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-blue-100", "text-blue-800"], [1, "ri-list-check", "text-xs", "mr-1"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-purple-100", "text-purple-800"], [1, "ri-government-line", "text-xs", "mr-1"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-green-100", "text-green-800"], [1, "ri-time-line", "text-xs", "mr-1"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-gray-100", "text-gray-800"], [1, "ri-checkbox-circle-line", "text-xs", "mr-1"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "mb-6"], [1, "space-y-2"], [1, "flex", "items-center", "text-sm"], [1, "ri-calendar-line", "text-gray-400", "text-base", "mr-2", "flex-shrink-0"], [1, "text-gray-500"], [1, "text-gray-900", "ml-2", "font-medium"], [1, "ri-hashtag", "text-gray-400", "text-base", "mr-2", "flex-shrink-0"], [1, "ri-scales-3-line", "text-gray-400", "text-base", "mr-2", "flex-shrink-0"], [1, "ri-map-pin-line", "text-gray-400", "text-base", "mr-2", "flex-shrink-0"], [1, "flex", "flex-wrap", "gap-3", "pt-4", "border-t", "border-gray-100"], [1, "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "text-brand", "bg-brand-light", "hover:bg-brand-lighter", "rounded-lg", "transition-colors"], [1, "ri-folder-open-line", "text-base", "mr-2"], [1, "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "text-gray-600", "bg-gray-100", "hover:bg-gray-200", "rounded-lg", "transition-colors"], [1, "ri-bookmark-line", "text-base", "mr-2"], [1, "ri-folder-add-line", "text-base", "mr-2"]], template: function CasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-side-nav", 1);
      \u0275\u0275listener("itemClick", function CasesComponent_Template_app_side_nav_itemClick_1_listener($event) {
        return ctx.onNavItemClick($event);
      })("sidebarToggle", function CasesComponent_Template_app_side_nav_sidebarToggle_1_listener() {
        return ctx.onSidebarToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "app-header", 3);
      \u0275\u0275listener("collapseToggle", function CasesComponent_Template_app_header_collapseToggle_3_listener() {
        return ctx.onSidebarToggle();
      })("projectClick", function CasesComponent_Template_app_header_projectClick_3_listener() {
        return ctx.onProjectClick();
      })("searchQueryClick", function CasesComponent_Template_app_header_searchQueryClick_3_listener() {
        return ctx.onSearchQueryClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "main", 4)(5, "div", 5);
      \u0275\u0275element(6, "div", 6);
      \u0275\u0275elementStart(7, "div", 6)(8, "app-search-bar", 7);
      \u0275\u0275listener("search", function CasesComponent_Template_app_search_bar_search_8_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, CasesComponent_div_9_Template, 15, 4, "div", 8)(10, CasesComponent_div_10_Template, 3, 2, "div", 9);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isCollapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("ml-sidebar", !ctx.isSidebarCollapsed)("ml-16", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("showUserProfile", true)("showCollapseButton", ctx.isSidebarCollapsed)("projectName", ctx.projectName)("searchQuery", ctx.currentSearchQuery);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.hasSearched);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasSearched);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, SearchBarComponent, AppHeaderComponent, SideNavComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.bg-cases-page[_ngcontent-%COMP%] {\n  background-color: #f8f8f7;\n}\n.animate-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.w-18[_ngcontent-%COMP%] {\n  width: 4.5rem;\n}\n.w-2\\/3[_ngcontent-%COMP%] {\n  width: 66.666667%;\n}\n.w-3\\/4[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.w-1\\/3[_ngcontent-%COMP%] {\n  width: 33.333333%;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n}\n.bg-gray-300[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}\n.min-h-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.overflow-y-auto[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.p-8[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.py-12[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.ml-sidebar[_ngcontent-%COMP%] {\n  margin-left: 206px;\n}\n.ml-16[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.bg-brand-light[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-brand-lighter[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.15);\n}\n.grid-cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.gap-3[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.bg-blue-100[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n}\n.text-blue-800[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.bg-purple-100[_ngcontent-%COMP%] {\n  background-color: #f3e8ff;\n}\n.text-purple-800[_ngcontent-%COMP%] {\n  color: #6b21a8;\n}\n.bg-green-100[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n}\n.text-green-800[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.text-gray-400[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.hover\\:shadow-md[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.mr-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.px-2\\.5[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5[_ngcontent-%COMP%] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.border-gray-100[_ngcontent-%COMP%] {\n  border-color: #f3f4f6;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=cases.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasesComponent, [{
    type: Component,
    args: [{ selector: "app-cases", standalone: true, imports: [CommonModule, SearchBarComponent, AppHeaderComponent, SideNavComponent], template: `<!-- Cases Page with Layout -->
<div class="min-h-screen">
  
  <!-- Side Navigation - Fixed Full Height -->
  <app-side-nav
    [isCollapsed]="isSidebarCollapsed"
    (itemClick)="onNavItemClick($event)"
    (sidebarToggle)="onSidebarToggle()">
  </app-side-nav>
  
  <!-- Main Content Area with Header -->
  <div class="flex flex-col bg-cases-page min-h-screen" 
       [class.ml-sidebar]="!isSidebarCollapsed" 
       [class.ml-16]="isSidebarCollapsed">
    
    <!-- App Header with User Profile -->
    <app-header 
      [showUserProfile]="true"
      [showCollapseButton]="isSidebarCollapsed"
      [projectName]="projectName"
      [searchQuery]="currentSearchQuery"
      (collapseToggle)="onSidebarToggle()"
      (projectClick)="onProjectClick()"
      (searchQueryClick)="onSearchQueryClick()">
    </app-header>
    
    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- Header Section -->
        <div class="mb-8">
          <!-- <h1 class="text-3xl font-bold text-text-strong mb-2">Cases</h1>
          <p class="text-text-weak">Search and manage legal cases in your project.</p> -->
        </div>

        <!-- Search Section -->
        <div class="mb-8">
          <app-search-bar (search)="onSearch($event)"></app-search-bar>
        </div>

        <!-- Results Controls -->
        <div *ngIf="hasSearched" class="mb-6">
          <!-- Divider Line -->
          <div class="border-t border-gray-200 mb-6"></div>
          
          <!-- Controls Row -->
          <div class="flex items-center justify-between">
            <!-- Results Text -->
            <div class="flex items-center space-x-2">
              <span class="text-gray-900 font-semibold">Results</span>
            </div>
            
            <!-- View Toggle Buttons -->
            <div class="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button 
                (click)="toggleViewMode('grid')"
                class="px-3 py-2 flex items-center space-x-2 transition-colors"
                [class]="viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-500 hover:text-gray-700'">
                <i class="ri-layout-grid-line text-base"></i>
                <span class="text-sm font-medium">Grid</span>
              </button>
              <button 
                (click)="toggleViewMode('table')"
                class="px-3 py-2 flex items-center space-x-2 transition-colors border-l border-gray-200"
                [class]="viewMode === 'table' ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-500 hover:text-gray-700'">
                <i class="ri-layout-row-line text-base"></i>
                <span class="text-sm font-medium">Table</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Cases Content Area -->
        <div *ngIf="hasSearched">
          
          <!-- Skeleton Loader Cards (while loading) -->
          <div *ngIf="isSearching" class="space-y-4">
            <div *ngFor="let card of skeletonCards" 
                 class="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
              
              <!-- Heading with Left Icon -->
              <div class="flex items-center mb-4">
                <div class="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
                <div class="h-6 bg-gray-300 rounded w-1\\/3"></div>
              </div>
              
              <!-- First Row: Badges -->
              <div class="flex items-center space-x-2 mb-3">
                <div class="h-6 bg-gray-200 rounded-full px-3 py-1 w-16"></div>
                <div class="h-6 bg-gray-200 rounded-full px-3 py-1 w-20"></div>
                <div class="h-6 bg-gray-200 rounded-full px-3 py-1 w-24"></div>
              </div>
              
              <!-- Second Row: Badges with Content Same Line -->
              <div class="flex items-center space-x-4 mb-3">
                <div class="flex items-center space-x-2">
                  <div class="h-5 bg-gray-200 rounded-full w-12"></div>
                  <div class="h-5 bg-gray-300 rounded w-24"></div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="h-5 bg-gray-200 rounded-full w-16"></div>
                  <div class="h-5 bg-gray-300 rounded w-32"></div>
                </div>
              </div>
              
              <!-- Third Row: Another Badges with Content Same Line -->
              <div class="flex items-center space-x-4 mb-3">
                <div class="flex items-center space-x-2">
                  <div class="h-5 bg-gray-200 rounded-full w-14"></div>
                  <div class="h-5 bg-gray-300 rounded w-28"></div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="h-5 bg-gray-200 rounded-full w-18"></div>
                  <div class="h-5 bg-gray-300 rounded w-36"></div>
                </div>
              </div>
              
              <!-- Fourth Row: Badge Content Below -->
              <div class="mb-2">
                <div class="h-5 bg-gray-200 rounded-full w-20 mb-2"></div>
                <div class="h-4 bg-gray-300 rounded w-full"></div>
                <div class="h-4 bg-gray-300 rounded w-3\\/4 mt-1"></div>
              </div>
              
              <!-- Fifth Row: Badge Content Below -->
              <div>
                <div class="h-5 bg-gray-200 rounded-full w-24 mb-2"></div>
                <div class="h-4 bg-gray-300 rounded w-full"></div>
                <div class="h-4 bg-gray-300 rounded w-2\\/3 mt-1"></div>
              </div>
              
            </div>
          </div>

          <!-- Actual Results Cards (after loading) -->
          <div *ngIf="!isSearching && showResults" class="space-y-4">
            <!-- First Result Card -->
            <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
              
              <!-- Main Title/Headline -->
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN
              </h3>
              
              <!-- Case Summary Section -->
              <div class="mb-6">
                <div class="flex items-start space-x-2 mb-2">
                  <span class="text-xs font-bold text-gray-500 uppercase tracking-wide">Case Summary</span>
                </div>
                <p class="text-gray-700 text-sm leading-relaxed">
                  This is a Civil case (CIV537691) filed in the California Superior Courts - San Mateo County Superior Court, with a Judgment Entered.
                </p>
              </div>
              
              <!-- Contextual Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <i class="ri-list-check text-xs mr-1"></i>
                  Civil Case
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  <i class="ri-government-line text-xs mr-1"></i>
                  Superior Court
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <i class="ri-time-line text-xs mr-1"></i>
                  Judgment Entered
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  <i class="ri-checkbox-circle-line text-xs mr-1"></i>
                  Status: Open
                </span>
              </div>
              
              <!-- Metadata Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="space-y-2">
                  <div class="flex items-center text-sm">
                    <i class="ri-calendar-line text-gray-400 text-base mr-2 flex-shrink-0"></i>
                    <span class="text-gray-500">Filing Date:</span>
                    <span class="text-gray-900 ml-2 font-medium">8 March 2016</span>
                  </div>
                  <div class="flex items-center text-sm">
                    <i class="ri-hashtag text-gray-400 text-base mr-2 flex-shrink-0"></i>
                    <span class="text-gray-500">Case ID:</span>
                    <span class="text-gray-900 ml-2 font-medium">CIV537691</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center text-sm">
                    <i class="ri-scales-3-line text-gray-400 text-base mr-2 flex-shrink-0"></i>
                    <span class="text-gray-500">Judge:</span>
                    <span class="text-gray-900 ml-2 font-medium">Buchwald, Gerald J</span>
                  </div>
                  <div class="flex items-center text-sm">
                    <i class="ri-map-pin-line text-gray-400 text-base mr-2 flex-shrink-0"></i>
                    <span class="text-gray-500">Court:</span>
                    <span class="text-gray-900 ml-2 font-medium">San Mateo County Superior Court</span>
                  </div>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                <button class="flex items-center px-3 py-2 text-sm font-medium text-brand bg-brand-light hover:bg-brand-lighter rounded-lg transition-colors">
                  <i class="ri-folder-open-line text-base mr-2"></i>
                  View Case Details
                </button>
                <button class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <i class="ri-bookmark-line text-base mr-2"></i>
                  Track Case
                </button>
                <button class="flex items-center px-3 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <i class="ri-folder-add-line text-base mr-2"></i>
                  Add to Project
                </button>
              </div>
              
            </div>
            
            <!-- Additional result cards would go here -->
          </div>
        </div>

      </div>
    </main>
    
  </div>
</div>
`, styles: ["/* src/app/pages/cases/cases.component.css */\n:host {\n  display: block;\n}\n.bg-cases-page {\n  background-color: #f8f8f7;\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.space-y-4 > * + * {\n  margin-top: 1rem;\n}\n.w-18 {\n  width: 4.5rem;\n}\n.w-2\\/3 {\n  width: 66.666667%;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.bg-gray-200 {\n  background-color: #e5e7eb;\n}\n.bg-gray-300 {\n  background-color: #d1d5db;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.bg-white {\n  background-color: white;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-stroke-weak {\n  border-color: #e5e7eb;\n}\n.p-8 {\n  padding: 2rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.ml-sidebar {\n  margin-left: 206px;\n}\n.ml-16 {\n  margin-left: 4rem;\n}\n.fixed {\n  position: fixed;\n}\n.left-0 {\n  left: 0;\n}\n.top-0 {\n  top: 0;\n}\n.z-40 {\n  z-index: 40;\n}\n.text-brand {\n  color: #146B85;\n}\n.bg-brand-light {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-brand-lighter {\n  background-color: rgba(20, 107, 133, 0.15);\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.bg-blue-100 {\n  background-color: #dbeafe;\n}\n.text-blue-800 {\n  color: #1e40af;\n}\n.bg-purple-100 {\n  background-color: #f3e8ff;\n}\n.text-purple-800 {\n  color: #6b21a8;\n}\n.bg-green-100 {\n  background-color: #dcfce7;\n}\n.text-green-800 {\n  color: #166534;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.text-gray-400 {\n  color: #9ca3af;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.hover\\:shadow-md:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:bg-gray-200:hover {\n  background-color: #e5e7eb;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.space-y-2 > * + * {\n  margin-top: 0.5rem;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-gray-100 {\n  border-color: #f3f4f6;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=cases.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesComponent, { className: "CasesComponent", filePath: "src/app/pages/cases/cases.component.ts", lineNumber: 14 });
})();
export {
  CasesComponent
};
//# sourceMappingURL=chunk-UA2AFQM7.js.map
