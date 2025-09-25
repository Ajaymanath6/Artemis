import {
  AppHeaderComponent
} from "./chunk-3RNL552V.js";
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
    \u0275\u0275classProp("justify-center", ctx_r1.isCollapsed);
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
        id: "all-projects",
        label: "All Projects",
        icon: "folders-line",
        route: "/dashboard"
      },
      {
        id: "project",
        label: "NY Judgment Tracking",
        icon: "folder-open-fill",
        isExpanded: true,
        children: [
          { id: "project-home", label: "Project Home", icon: "home-line", route: "/cases" },
          { id: "project-search", label: "Search", icon: "search-line", route: "/project/search" },
          { id: "project-tracking", label: "Tracking", icon: "time-line", route: "/tracking" },
          { id: "project-bookmarks", label: "Bookmarks", icon: "bookmark-line", route: "/bookmarks" },
          { id: "project-manage", label: "Manage Project", icon: "edit-line", route: "/project/manage" }
        ]
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavComponent, selectors: [["app-side-nav"]], inputs: { navItems: "navItems", isCollapsed: "isCollapsed" }, outputs: { itemClick: "itemClick", sidebarToggle: "sidebarToggle" }, decls: 18, vars: 15, consts: [[1, "bg-white", "border-r", "border-gray-200", "h-screen", "flex", "flex-col", "fixed", "left-0", "top-0", "z-40"], [1, "flex", "items-center", "justify-between", "px-4", "py-4", "border-b", "border-gray-200"], [1, "flex", "items-center"], ["alt", "UniCourt Logo", 1, "h-8", "w-auto", 3, "src"], ["class", "p-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto focus:outline-none", 3, "click", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "py-4"], [1, "space-y-2"], [4, "ngFor", "ngForOf"], [1, "p-4", "border-t", "border-gray-200"], [1, "flex", "items-center", "space-x-3"], [1, "w-8", "h-8", "bg-brand", "rounded-full", "flex", "items-center", "justify-center"], [1, "ri-user-line", "text-base", "text-white"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "text-text-strong", "truncate"], [1, "text-xs", "text-text-weak", "truncate"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", "ml-auto", "focus:outline-none", 3, "click"], [1, "ri-layout-right-line", "text-lg", 2, "color", "#9CA3AF"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "rounded-lg", "transition-colors", "group", 3, "click"], [1, "ml-3", "truncate"], [3, "class", "color", 4, "ngIf"], ["class", "mt-2 ml-6 space-y-1", 4, "ngIf"], [1, "mt-2", "ml-6", "space-y-1"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "rounded-lg", "transition-colors", 3, "click"]], template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, SideNavComponent_button_4_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "ul", 6);
      \u0275\u0275template(7, SideNavComponent_li_7_Template, 8, 13, "li", 7);
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
      \u0275\u0275classProp("px-3", !ctx.isCollapsed)("px-2", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.isCollapsed);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar[_ngcontent-%COMP%] {\n  width: 206px;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.h-screen[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #146B85;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.bg-blue-fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill[_ngcontent-%COMP%]:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #146B85;\n}\n.hover\\:text-text-strong[_ngcontent-%COMP%]:hover {\n  color: #030B26;\n}\n.text-text-strong[_ngcontent-%COMP%] {\n  color: #030B26;\n}\n.text-text-weak[_ngcontent-%COMP%] {\n  color: #353D59;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #146B85;\n  outline-offset: 2px;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.w-8[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-folders-line[_ngcontent-%COMP%], \n.ri-folder-open-fill[_ngcontent-%COMP%], \n.ri-home-line[_ngcontent-%COMP%], \n.ri-search-line[_ngcontent-%COMP%], \n.ri-time-line[_ngcontent-%COMP%], \n.ri-bookmark-line[_ngcontent-%COMP%], \n.ri-edit-line[_ngcontent-%COMP%], \n.ri-arrow-down-s-line[_ngcontent-%COMP%], \n.ri-arrow-right-s-line[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */"] });
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
    <ul class="space-y-2" [class.px-3]="!isCollapsed" [class.px-2]="isCollapsed">
      <li *ngFor="let item of navItems">

        <!-- Main Navigation Item -->
        <div>
          <button
            (click)="onItemClick(item)"
            class="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group"
            [class]="isActiveRoute(item.route || '') ?
              'bg-gray-light text-text-strong' :
              'text-text-strong hover:bg-fill hover:text-brand'"
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
              class="mt-2 ml-6 space-y-1">
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
</nav>`, styles: ["/* src/app/components/navigation/side-nav/side-nav.component.css */\n:host {\n  display: block;\n  height: 100%;\n}\nnav {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar {\n  width: 206px;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.fixed {\n  position: fixed;\n}\n.left-0 {\n  left: 0;\n}\n.top-0 {\n  top: 0;\n}\n.z-40 {\n  z-index: 40;\n}\n.justify-center {\n  justify-content: center;\n}\n.bg-brand {\n  background-color: #146B85;\n}\n.text-brand {\n  color: #146B85;\n}\n.bg-blue-fill {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand:hover {\n  color: #146B85;\n}\n.hover\\:text-text-strong:hover {\n  color: #030B26;\n}\n.text-text-strong {\n  color: #030B26;\n}\n.text-text-weak {\n  color: #353D59;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.overflow-y-auto::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.min-w-0 {\n  min-width: 0px;\n}\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton:focus {\n  outline: 2px solid #146B85;\n  outline-offset: 2px;\n}\nimg {\n  object-fit: contain;\n}\n.w-8 {\n  width: 2rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-folders-line,\n.ri-folder-open-fill,\n.ri-home-line,\n.ri-search-line,\n.ri-time-line,\n.ri-bookmark-line,\n.ri-edit-line,\n.ri-arrow-down-s-line,\n.ri-arrow-right-s-line {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.hover\\:bg-gray-100:hover {\n  background-color: #f3f4f6;\n}\n.w-16 {\n  width: 4rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */\n"] }]
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
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5, "Results");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "button", 14);
    \u0275\u0275listener("click", function CasesComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewMode("grid"));
    });
    \u0275\u0275element(8, "i", 15);
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10, "Grid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 17);
    \u0275\u0275listener("click", function CasesComponent_div_9_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewMode("table"));
    });
    \u0275\u0275element(12, "i", 18);
    \u0275\u0275elementStart(13, "span", 16);
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
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275element(2, "div", 25)(3, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275element(5, "div", 28)(6, "div", 29)(7, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31)(9, "div", 11);
    \u0275\u0275element(10, "div", 32)(11, "div", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 11);
    \u0275\u0275element(13, "div", 34)(14, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 31)(16, "div", 11);
    \u0275\u0275element(17, "div", 36)(18, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275element(20, "div", 38)(21, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 40);
    \u0275\u0275element(23, "div", 41)(24, "div", 42)(25, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div");
    \u0275\u0275element(27, "div", 44)(28, "div", 42)(29, "div", 45);
    \u0275\u0275elementEnd()();
  }
}
function CasesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, CasesComponent_div_10_div_1_div_1_Template, 30, 0, "div", 22);
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
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275element(3, "i", 49);
    \u0275\u0275elementStart(4, "h3", 50);
    \u0275\u0275text(5, " AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "span", 52);
    \u0275\u0275element(8, "i", 53);
    \u0275\u0275text(9, "Judge ");
    \u0275\u0275elementStart(10, "div", 54)(11, "div", 55);
    \u0275\u0275element(12, "i", 56);
    \u0275\u0275elementStart(13, "div", 57);
    \u0275\u0275text(14, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 58);
    \u0275\u0275text(16, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "span", 52);
    \u0275\u0275element(18, "i", 59);
    \u0275\u0275text(19, "Status ");
    \u0275\u0275elementStart(20, "div", 54)(21, "div", 55);
    \u0275\u0275element(22, "i", 60);
    \u0275\u0275elementStart(23, "div", 57);
    \u0275\u0275text(24, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 58);
    \u0275\u0275text(26, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "span", 52);
    \u0275\u0275element(28, "i", 61);
    \u0275\u0275text(29, "Type ");
    \u0275\u0275elementStart(30, "div", 54)(31, "div", 55);
    \u0275\u0275element(32, "i", 62);
    \u0275\u0275elementStart(33, "div", 57);
    \u0275\u0275text(34, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 58);
    \u0275\u0275text(36, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "span", 52);
    \u0275\u0275element(38, "i", 63);
    \u0275\u0275text(39, "Court ");
    \u0275\u0275elementStart(40, "div", 54)(41, "div", 55);
    \u0275\u0275element(42, "i", 64);
    \u0275\u0275elementStart(43, "div", 57);
    \u0275\u0275text(44, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 58);
    \u0275\u0275text(46, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 65)(48, "div", 11);
    \u0275\u0275element(49, "i", 66);
    \u0275\u0275elementStart(50, "span", 67);
    \u0275\u0275text(51, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 68);
    \u0275\u0275text(53, "CIV537691");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 11);
    \u0275\u0275element(55, "i", 69);
    \u0275\u0275elementStart(56, "span", 67);
    \u0275\u0275text(57, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 68);
    \u0275\u0275text(59, "California Superior Courts - San Mateo County Superior Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 11);
    \u0275\u0275element(61, "i", 70);
    \u0275\u0275elementStart(62, "span", 67);
    \u0275\u0275text(63, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 68);
    \u0275\u0275text(65, "8 March 2016");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 11);
    \u0275\u0275element(67, "i", 71);
    \u0275\u0275elementStart(68, "span", 67);
    \u0275\u0275text(69, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 68);
    \u0275\u0275text(71, "Civil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 11);
    \u0275\u0275element(73, "i", 72);
    \u0275\u0275elementStart(74, "span", 67);
    \u0275\u0275text(75, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 68);
    \u0275\u0275text(77, "Judgment Entered");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 47)(79, "div", 48);
    \u0275\u0275element(80, "i", 49);
    \u0275\u0275elementStart(81, "h3", 50);
    \u0275\u0275text(82, " JOHNSON MANUFACTURING INC VS STATE OF NEW YORK ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 51)(84, "span", 52);
    \u0275\u0275element(85, "i", 53);
    \u0275\u0275text(86, "Judge ");
    \u0275\u0275elementStart(87, "div", 54)(88, "div", 55);
    \u0275\u0275element(89, "i", 56);
    \u0275\u0275elementStart(90, "div", 57);
    \u0275\u0275text(91, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 58);
    \u0275\u0275text(93, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "span", 52);
    \u0275\u0275element(95, "i", 59);
    \u0275\u0275text(96, "Status ");
    \u0275\u0275elementStart(97, "div", 54)(98, "div", 55);
    \u0275\u0275element(99, "i", 60);
    \u0275\u0275elementStart(100, "div", 57);
    \u0275\u0275text(101, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 58);
    \u0275\u0275text(103, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(104, "span", 52);
    \u0275\u0275element(105, "i", 61);
    \u0275\u0275text(106, "Type ");
    \u0275\u0275elementStart(107, "div", 54)(108, "div", 55);
    \u0275\u0275element(109, "i", 62);
    \u0275\u0275elementStart(110, "div", 57);
    \u0275\u0275text(111, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 58);
    \u0275\u0275text(113, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "span", 52);
    \u0275\u0275element(115, "i", 63);
    \u0275\u0275text(116, "Court ");
    \u0275\u0275elementStart(117, "div", 54)(118, "div", 55);
    \u0275\u0275element(119, "i", 64);
    \u0275\u0275elementStart(120, "div", 57);
    \u0275\u0275text(121, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 58);
    \u0275\u0275text(123, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(124, "div", 65)(125, "div", 11);
    \u0275\u0275element(126, "i", 66);
    \u0275\u0275elementStart(127, "span", 67);
    \u0275\u0275text(128, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "span", 68);
    \u0275\u0275text(130, "COM892345");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 11);
    \u0275\u0275element(132, "i", 69);
    \u0275\u0275elementStart(133, "span", 67);
    \u0275\u0275text(134, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "span", 68);
    \u0275\u0275text(136, "New York State Supreme Court - Commercial Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 11);
    \u0275\u0275element(138, "i", 70);
    \u0275\u0275elementStart(139, "span", 67);
    \u0275\u0275text(140, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "span", 68);
    \u0275\u0275text(142, "15 January 2017");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 11);
    \u0275\u0275element(144, "i", 71);
    \u0275\u0275elementStart(145, "span", 67);
    \u0275\u0275text(146, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "span", 68);
    \u0275\u0275text(148, "Commercial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(149, "div", 11);
    \u0275\u0275element(150, "i", 72);
    \u0275\u0275elementStart(151, "span", 67);
    \u0275\u0275text(152, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "span", 68);
    \u0275\u0275text(154, "In Progress");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(155, "div", 47)(156, "div", 48);
    \u0275\u0275element(157, "i", 49);
    \u0275\u0275elementStart(158, "h3", 50);
    \u0275\u0275text(159, "WILSON ESTATES LLC VS CITY PLANNING COMMISSION");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "div", 51)(161, "span", 73);
    \u0275\u0275text(162, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "span", 73);
    \u0275\u0275text(164, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "span", 73);
    \u0275\u0275text(166, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "span", 73);
    \u0275\u0275text(168, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div", 65)(170, "div", 11);
    \u0275\u0275element(171, "i", 66);
    \u0275\u0275elementStart(172, "span", 67);
    \u0275\u0275text(173, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "span", 68);
    \u0275\u0275text(175, "ADM778912");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div", 11);
    \u0275\u0275element(177, "i", 69);
    \u0275\u0275elementStart(178, "span", 67);
    \u0275\u0275text(179, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "span", 68);
    \u0275\u0275text(181, "Administrative Court - Planning Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "div", 11);
    \u0275\u0275element(183, "i", 70);
    \u0275\u0275elementStart(184, "span", 67);
    \u0275\u0275text(185, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "span", 68);
    \u0275\u0275text(187, "22 September 2018");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "div", 11);
    \u0275\u0275element(189, "i", 71);
    \u0275\u0275elementStart(190, "span", 67);
    \u0275\u0275text(191, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "span", 68);
    \u0275\u0275text(193, "Administrative");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(194, "div", 11);
    \u0275\u0275element(195, "i", 72);
    \u0275\u0275elementStart(196, "span", 67);
    \u0275\u0275text(197, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "span", 68);
    \u0275\u0275text(199, "Closed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(200, "div", 47)(201, "div", 48);
    \u0275\u0275element(202, "i", 49);
    \u0275\u0275elementStart(203, "h3", 50);
    \u0275\u0275text(204, "MARTINEZ FAMILY TRUST VS THOMPSON HOLDINGS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(205, "div", 51)(206, "span", 73);
    \u0275\u0275text(207, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "span", 73);
    \u0275\u0275text(209, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "span", 73);
    \u0275\u0275text(211, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "span", 73);
    \u0275\u0275text(213, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(214, "div", 65)(215, "div", 11);
    \u0275\u0275element(216, "i", 66);
    \u0275\u0275elementStart(217, "span", 67);
    \u0275\u0275text(218, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "span", 68);
    \u0275\u0275text(220, "PRB445621");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "div", 11);
    \u0275\u0275element(222, "i", 69);
    \u0275\u0275elementStart(223, "span", 67);
    \u0275\u0275text(224, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "span", 68);
    \u0275\u0275text(226, "Probate Court - Estate Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(227, "div", 11);
    \u0275\u0275element(228, "i", 70);
    \u0275\u0275elementStart(229, "span", 67);
    \u0275\u0275text(230, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "span", 68);
    \u0275\u0275text(232, "7 March 2019");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(233, "div", 11);
    \u0275\u0275element(234, "i", 71);
    \u0275\u0275elementStart(235, "span", 67);
    \u0275\u0275text(236, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "span", 68);
    \u0275\u0275text(238, "Probate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "div", 11);
    \u0275\u0275element(240, "i", 72);
    \u0275\u0275elementStart(241, "span", 67);
    \u0275\u0275text(242, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "span", 68);
    \u0275\u0275text(244, "Pending");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(245, "div", 47)(246, "div", 48);
    \u0275\u0275element(247, "i", 49);
    \u0275\u0275elementStart(248, "h3", 50);
    \u0275\u0275text(249, "RODRIGUEZ CONSTRUCTION VS UNION WORKERS LOCAL 247");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(250, "div", 51)(251, "span", 73);
    \u0275\u0275text(252, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "span", 73);
    \u0275\u0275text(254, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "span", 73);
    \u0275\u0275text(256, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "span", 73);
    \u0275\u0275text(258, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "div", 65)(260, "div", 11);
    \u0275\u0275element(261, "i", 66);
    \u0275\u0275elementStart(262, "span", 67);
    \u0275\u0275text(263, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "span", 68);
    \u0275\u0275text(265, "LAB334128");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(266, "div", 11);
    \u0275\u0275element(267, "i", 69);
    \u0275\u0275elementStart(268, "span", 67);
    \u0275\u0275text(269, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(270, "span", 68);
    \u0275\u0275text(271, "Labor Relations Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(272, "div", 11);
    \u0275\u0275element(273, "i", 70);
    \u0275\u0275elementStart(274, "span", 67);
    \u0275\u0275text(275, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(276, "span", 68);
    \u0275\u0275text(277, "14 November 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(278, "div", 11);
    \u0275\u0275element(279, "i", 71);
    \u0275\u0275elementStart(280, "span", 67);
    \u0275\u0275text(281, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(282, "span", 68);
    \u0275\u0275text(283, "Labor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(284, "div", 11);
    \u0275\u0275element(285, "i", 72);
    \u0275\u0275elementStart(286, "span", 67);
    \u0275\u0275text(287, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(288, "span", 68);
    \u0275\u0275text(289, "Arbitration");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(290, "div", 47)(291, "div", 48);
    \u0275\u0275element(292, "i", 49);
    \u0275\u0275elementStart(293, "h3", 50);
    \u0275\u0275text(294, "ANDERSON MEDICAL GROUP VS HEALTH INSURANCE CORP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(295, "div", 51)(296, "span", 73);
    \u0275\u0275text(297, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "span", 73);
    \u0275\u0275text(299, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "span", 73);
    \u0275\u0275text(301, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "span", 73);
    \u0275\u0275text(303, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(304, "div", 65)(305, "div", 11);
    \u0275\u0275element(306, "i", 66);
    \u0275\u0275elementStart(307, "span", 67);
    \u0275\u0275text(308, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(309, "span", 68);
    \u0275\u0275text(310, "COM567891");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(311, "div", 11);
    \u0275\u0275element(312, "i", 69);
    \u0275\u0275elementStart(313, "span", 67);
    \u0275\u0275text(314, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "span", 68);
    \u0275\u0275text(316, "Commercial Court - Healthcare Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(317, "div", 11);
    \u0275\u0275element(318, "i", 70);
    \u0275\u0275elementStart(319, "span", 67);
    \u0275\u0275text(320, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(321, "span", 68);
    \u0275\u0275text(322, "3 June 2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(323, "div", 11);
    \u0275\u0275element(324, "i", 71);
    \u0275\u0275elementStart(325, "span", 67);
    \u0275\u0275text(326, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(327, "span", 68);
    \u0275\u0275text(328, "Commercial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(329, "div", 11);
    \u0275\u0275element(330, "i", 72);
    \u0275\u0275elementStart(331, "span", 67);
    \u0275\u0275text(332, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "span", 68);
    \u0275\u0275text(334, "Settlement");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(335, "div", 47)(336, "div", 48);
    \u0275\u0275element(337, "i", 49);
    \u0275\u0275elementStart(338, "h3", 50);
    \u0275\u0275text(339, "TECH INNOVATIONS INC VS PATENT OFFICE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(340, "div", 51)(341, "span", 73);
    \u0275\u0275text(342, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(343, "span", 73);
    \u0275\u0275text(344, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(345, "span", 73);
    \u0275\u0275text(346, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(347, "span", 73);
    \u0275\u0275text(348, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(349, "div", 65)(350, "div", 11);
    \u0275\u0275element(351, "i", 66);
    \u0275\u0275elementStart(352, "span", 67);
    \u0275\u0275text(353, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(354, "span", 68);
    \u0275\u0275text(355, "IP223467");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(356, "div", 11);
    \u0275\u0275element(357, "i", 69);
    \u0275\u0275elementStart(358, "span", 67);
    \u0275\u0275text(359, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(360, "span", 68);
    \u0275\u0275text(361, "Federal Circuit Court - IP Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(362, "div", 11);
    \u0275\u0275element(363, "i", 70);
    \u0275\u0275elementStart(364, "span", 67);
    \u0275\u0275text(365, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(366, "span", 68);
    \u0275\u0275text(367, "18 August 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(368, "div", 11);
    \u0275\u0275element(369, "i", 71);
    \u0275\u0275elementStart(370, "span", 67);
    \u0275\u0275text(371, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(372, "span", 68);
    \u0275\u0275text(373, "Intellectual Property");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(374, "div", 11);
    \u0275\u0275element(375, "i", 72);
    \u0275\u0275elementStart(376, "span", 67);
    \u0275\u0275text(377, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(378, "span", 68);
    \u0275\u0275text(379, "Appeal Filed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(380, "div", 47)(381, "div", 48);
    \u0275\u0275element(382, "i", 49);
    \u0275\u0275elementStart(383, "h3", 50);
    \u0275\u0275text(384, "ENVIRONMENTAL PROTECTION AGENCY VS CHEMICAL CORP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(385, "div", 51)(386, "span", 73);
    \u0275\u0275text(387, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(388, "span", 73);
    \u0275\u0275text(389, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(390, "span", 73);
    \u0275\u0275text(391, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(392, "span", 73);
    \u0275\u0275text(393, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(394, "div", 65)(395, "div", 11);
    \u0275\u0275element(396, "i", 66);
    \u0275\u0275elementStart(397, "span", 67);
    \u0275\u0275text(398, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(399, "span", 68);
    \u0275\u0275text(400, "ENV445123");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(401, "div", 11);
    \u0275\u0275element(402, "i", 69);
    \u0275\u0275elementStart(403, "span", 67);
    \u0275\u0275text(404, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(405, "span", 68);
    \u0275\u0275text(406, "Environmental Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(407, "div", 11);
    \u0275\u0275element(408, "i", 70);
    \u0275\u0275elementStart(409, "span", 67);
    \u0275\u0275text(410, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(411, "span", 68);
    \u0275\u0275text(412, "29 April 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(413, "div", 11);
    \u0275\u0275element(414, "i", 71);
    \u0275\u0275elementStart(415, "span", 67);
    \u0275\u0275text(416, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(417, "span", 68);
    \u0275\u0275text(418, "Environmental");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(419, "div", 11);
    \u0275\u0275element(420, "i", 72);
    \u0275\u0275elementStart(421, "span", 67);
    \u0275\u0275text(422, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(423, "span", 68);
    \u0275\u0275text(424, "Investigation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(425, "div", 47)(426, "div", 48);
    \u0275\u0275element(427, "i", 49);
    \u0275\u0275elementStart(428, "h3", 50);
    \u0275\u0275text(429, "GLOBAL FINANCE BANK VS MORTGAGE HOLDERS UNION");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(430, "div", 51)(431, "span", 73);
    \u0275\u0275text(432, "Judge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(433, "span", 73);
    \u0275\u0275text(434, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "span", 73);
    \u0275\u0275text(436, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(437, "span", 73);
    \u0275\u0275text(438, "Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(439, "div", 65)(440, "div", 11);
    \u0275\u0275element(441, "i", 66);
    \u0275\u0275elementStart(442, "span", 67);
    \u0275\u0275text(443, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(444, "span", 68);
    \u0275\u0275text(445, "FIN778934");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(446, "div", 11);
    \u0275\u0275element(447, "i", 69);
    \u0275\u0275elementStart(448, "span", 67);
    \u0275\u0275text(449, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(450, "span", 68);
    \u0275\u0275text(451, "Financial Services Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(452, "div", 11);
    \u0275\u0275element(453, "i", 70);
    \u0275\u0275elementStart(454, "span", 67);
    \u0275\u0275text(455, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(456, "span", 68);
    \u0275\u0275text(457, "12 December 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(458, "div", 11);
    \u0275\u0275element(459, "i", 71);
    \u0275\u0275elementStart(460, "span", 67);
    \u0275\u0275text(461, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(462, "span", 68);
    \u0275\u0275text(463, "Financial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(464, "div", 11);
    \u0275\u0275element(465, "i", 72);
    \u0275\u0275elementStart(466, "span", 67);
    \u0275\u0275text(467, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(468, "span", 68);
    \u0275\u0275text(469, "Class Action");
    \u0275\u0275elementEnd()()()()();
  }
}
function CasesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CasesComponent_div_10_div_1_Template, 2, 1, "div", 19)(2, CasesComponent_div_10_div_2_Template, 470, 0, "div", 20);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesComponent, selectors: [["app-cases"]], decls: 11, vars: 11, consts: [[1, "min-h-screen"], [3, "itemClick", "sidebarToggle", "isCollapsed"], [1, "flex", "flex-col", "bg-cases-page", "min-h-screen"], [3, "collapseToggle", "projectClick", "searchQueryClick", "showUserProfile", "showCollapseButton", "projectName", "searchQuery"], [1, "flex-1", "overflow-y-auto"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [3, "search"], [4, "ngIf"], [1, "border-t", "border-gray-200"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-200", "py-2.5"], [1, "flex", "items-center", "space-x-2"], [1, "text-gray-700", "font-semibold"], [1, "flex", "items-center", "bg-white", "rounded-lg", "border", "border-gray-200", "overflow-hidden"], [1, "px-3", "py-2", "flex", "items-center", "space-x-2", "transition-colors", 3, "click"], [1, "ri-layout-grid-line", "text-base"], [1, "text-sm", "font-medium"], [1, "px-3", "py-2", "flex", "items-center", "space-x-2", "transition-colors", "border-l", "border-gray-200", 3, "click"], [1, "ri-layout-row-line", "text-base"], ["class", "space-y-4 mt-4", 4, "ngIf"], ["class", "space-y-4 mt-4", "id", "results-section", 4, "ngIf"], [1, "space-y-4", "mt-4"], ["class", "rounded-lg border border-gray-200 p-6 animate-pulse hover:bg-white hover:bg-opacity-80 transition-all", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "border", "border-gray-200", "p-6", "animate-pulse", "hover:bg-white", "hover:bg-opacity-80", "transition-all"], [1, "flex", "items-center", "mb-4"], [1, "w-6", "h-6", "bg-gray-300", "rounded-full", "mr-3"], [1, "h-6", "bg-gray-300", "rounded", "w-1\\/3"], [1, "flex", "items-center", "space-x-2", "mb-3"], [1, "h-6", "bg-gray-200", "rounded-full", "px-3", "py-1", "w-16"], [1, "h-6", "bg-gray-200", "rounded-full", "px-3", "py-1", "w-20"], [1, "h-6", "bg-gray-200", "rounded-full", "px-3", "py-1", "w-24"], [1, "flex", "items-center", "space-x-4", "mb-3"], [1, "h-5", "bg-gray-200", "rounded-full", "w-12"], [1, "h-5", "bg-gray-300", "rounded", "w-24"], [1, "h-5", "bg-gray-200", "rounded-full", "w-16"], [1, "h-5", "bg-gray-300", "rounded", "w-32"], [1, "h-5", "bg-gray-200", "rounded-full", "w-14"], [1, "h-5", "bg-gray-300", "rounded", "w-28"], [1, "h-5", "bg-gray-200", "rounded-full", "w-18"], [1, "h-5", "bg-gray-300", "rounded", "w-36"], [1, "mb-2"], [1, "h-5", "bg-gray-200", "rounded-full", "w-20", "mb-2"], [1, "h-4", "bg-gray-300", "rounded", "w-full"], [1, "h-4", "bg-gray-300", "rounded", "w-3\\/4", "mt-1"], [1, "h-5", "bg-gray-200", "rounded-full", "w-24", "mb-2"], [1, "h-4", "bg-gray-300", "rounded", "w-2\\/3", "mt-1"], ["id", "results-section", 1, "space-y-4", "mt-4"], [1, "rounded-lg", "border", "border-gray-200", "p-6", "hover:bg-white", "hover:bg-opacity-80", "transition-all", "min-h-fit", "overflow-visible", "relative"], [1, "flex", "items-start", "space-x-3", "mb-4"], [1, "ri-scales-3-line", "text-xl", "text-brand", "flex-shrink-0", "mt-1"], [1, "text-base", "font-semibold", "text-brand", "leading-tight", "hover:underline", "cursor-pointer"], [1, "flex", "flex-wrap", "gap-4", "mb-4"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group"], [1, "ri-scales-3-line", "text-sm", "mr-2"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-4", "py-3", "bg-white", "text-gray-800", "text-xs", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-24", "w-64"], [1, "flex", "items-center", "mb-2"], [1, "ri-scales-3-line", "text-sm", "mr-2", "text-gray-600"], [1, "font-semibold", "uppercase"], [1, "text-gray-600", "leading-relaxed"], [1, "ri-check-line", "text-sm", "mr-2"], [1, "ri-check-line", "text-sm", "mr-2", "text-gray-600"], [1, "ri-file-text-line", "text-sm", "mr-2"], [1, "ri-file-text-line", "text-sm", "mr-2", "text-gray-600"], [1, "ri-government-line", "text-sm", "mr-2"], [1, "ri-government-line", "text-sm", "mr-2", "text-gray-600"], [1, "flex", "flex-wrap", "gap-6", "text-sm", "text-gray-700"], [1, "ri-hashtag", "text-gray-400"], [1, "font-bold", "text-xs", "uppercase", "tracking-wide", "text-gray-500"], [1, "font-medium"], [1, "ri-government-line", "text-gray-400"], [1, "ri-calendar-line", "text-gray-400"], [1, "ri-file-list-line", "text-gray-400"], [1, "ri-time-line", "text-gray-400"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700"]], template: function CasesComponent_Template(rf, ctx) {
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
      \u0275\u0275template(9, CasesComponent_div_9_Template, 15, 4, "div", 8)(10, CasesComponent_div_10_Template, 3, 2, "div", 8);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, SearchBarComponent, AppHeaderComponent, SideNavComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.bg-cases-page[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n.animate-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.w-18[_ngcontent-%COMP%] {\n  width: 4.5rem;\n}\n.w-2\\/3[_ngcontent-%COMP%] {\n  width: 66.666667%;\n}\n.w-3\\/4[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.w-1\\/3[_ngcontent-%COMP%] {\n  width: 33.333333%;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n}\n.bg-gray-300[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}\n.min-h-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.overflow-y-auto[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.p-8[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.py-12[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.ml-sidebar[_ngcontent-%COMP%] {\n  margin-left: 206px;\n}\n.ml-16[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.h-52[_ngcontent-%COMP%] {\n  height: 13rem;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.bg-brand-light[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-brand-lighter[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.15);\n}\n.grid-cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.gap-3[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.bg-blue-100[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n}\n.text-blue-800[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.bg-purple-100[_ngcontent-%COMP%] {\n  background-color: #f3e8ff;\n}\n.text-purple-800[_ngcontent-%COMP%] {\n  color: #6b21a8;\n}\n.bg-green-100[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n}\n.text-green-800[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.text-gray-400[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.hover\\:shadow-md[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.mr-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.px-2\\.5[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5[_ngcontent-%COMP%] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.border-gray-100[_ngcontent-%COMP%] {\n  border-color: #f3f4f6;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.pb-6[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n.px-8[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.gap-6[_ngcontent-%COMP%] {\n  gap: 1.5rem;\n}\n.leading-tight[_ngcontent-%COMP%] {\n  line-height: 1.25;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.bg-opacity-80[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.hover\\:bg-opacity-80[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:bg-white[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.py-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.group[_ngcontent-%COMP%]:hover   .group-hover\\:opacity-100[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.bottom-full[_ngcontent-%COMP%] {\n  bottom: 100%;\n}\n.left-1\\/2[_ngcontent-%COMP%] {\n  left: 50%;\n}\n.transform[_ngcontent-%COMP%] {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2[_ngcontent-%COMP%] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.bg-gray-800[_ngcontent-%COMP%] {\n  background-color: #1f2937;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.min-h-24[_ngcontent-%COMP%] {\n  min-height: 6rem;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.group-hover\\:opacity-100[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.transition-opacity[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300[_ngcontent-%COMP%] {\n  transition-duration: 300ms;\n}\n.pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.whitespace-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-gray-300[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.group[_ngcontent-%COMP%] {\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.min-h-fit[_ngcontent-%COMP%] {\n  min-height: fit-content;\n}\n.overflow-visible[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.hover\\:underline[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=cases.component.css.map */"] });
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
        <div *ngIf="hasSearched">
          <!-- Divider Line -->
          <div class="border-t border-gray-200 "></div>
          
          <!-- Controls Row -->
          <div class="flex items-center justify-between border-b border-gray-200 py-2.5">
            <!-- Results Text -->
            <div class="flex items-center space-x-2">
              <span class="text-gray-700 font-semibold">Results</span>
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
          <div *ngIf="isSearching" class="space-y-4 mt-4">
              <div *ngFor="let card of skeletonCards" 
                   class="rounded-lg border border-gray-200 p-6 animate-pulse hover:bg-white hover:bg-opacity-80 transition-all">
              
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
          <div *ngIf="!isSearching && showResults" class="space-y-4 mt-4" id="results-section">
            
            <!-- Result Card 1 -->
            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">
                  AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN
                </h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-scales-3-line text-sm mr-2"></i>Judge
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-scales-3-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-check-line text-sm mr-2"></i>Status
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-check-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-file-text-line text-sm mr-2"></i>Type
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-file-text-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-government-line text-sm mr-2"></i>Court
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-government-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">CIV537691</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">California Superior Courts - San Mateo County Superior Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">8 March 2016</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Civil</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Judgment Entered</span></div>
              </div>
            </div>

            <!-- Result Card 2 -->
            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">
                  JOHNSON MANUFACTURING INC VS STATE OF NEW YORK
                </h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-scales-3-line text-sm mr-2"></i>Judge
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-scales-3-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-check-line text-sm mr-2"></i>Status
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-check-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-file-text-line text-sm mr-2"></i>Type
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-file-text-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group">
                  <i class="ri-government-line text-sm mr-2"></i>Court
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-white text-gray-800 text-xs rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-24 w-64">
                    <div class="flex items-center mb-2"><i class="ri-government-line text-sm mr-2 text-gray-600"></i><div class="font-semibold uppercase">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">COM892345</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">New York State Supreme Court - Commercial Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">15 January 2017</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Commercial</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">In Progress</span></div>
              </div>
            </div>

            <!-- Result Cards 3-10 (simplified for brevity) -->
            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">WILSON ESTATES LLC VS CITY PLANNING COMMISSION</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">ADM778912</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Administrative Court - Planning Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">22 September 2018</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Administrative</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Closed</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">MARTINEZ FAMILY TRUST VS THOMPSON HOLDINGS</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">PRB445621</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Probate Court - Estate Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">7 March 2019</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Probate</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Pending</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">RODRIGUEZ CONSTRUCTION VS UNION WORKERS LOCAL 247</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">LAB334128</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Labor Relations Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">14 November 2020</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Labor</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Arbitration</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">ANDERSON MEDICAL GROUP VS HEALTH INSURANCE CORP</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">COM567891</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Commercial Court - Healthcare Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">3 June 2021</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Commercial</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Settlement</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">TECH INNOVATIONS INC VS PATENT OFFICE</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">IP223467</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Federal Circuit Court - IP Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">18 August 2022</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Intellectual Property</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Appeal Filed</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">ENVIRONMENTAL PROTECTION AGENCY VS CHEMICAL CORP</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">ENV445123</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Environmental Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">29 April 2023</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Environmental</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Investigation</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 p-6 hover:bg-white hover:bg-opacity-80 transition-all min-h-fit overflow-visible relative">
              <div class="flex items-start space-x-3 mb-4">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0 mt-1"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer">GLOBAL FINANCE BANK VS MORTGAGE HOLDERS UNION</h3>
              </div>
              <div class="flex flex-wrap gap-4 mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Judge</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Status</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Type</span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700">Court</span>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">FIN778934</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Financial Services Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">12 December 2023</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Financial</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Class Action</span></div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </main>
    
  </div>
</div>
`, styles: ["/* src/app/pages/cases/cases.component.css */\n:host {\n  display: block;\n}\n.bg-cases-page {\n  background-color: #F8F8F8;\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.space-y-4 > * + * {\n  margin-top: 1rem;\n}\n.w-18 {\n  width: 4.5rem;\n}\n.w-2\\/3 {\n  width: 66.666667%;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.bg-gray-200 {\n  background-color: #e5e7eb;\n}\n.bg-gray-300 {\n  background-color: #d1d5db;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.bg-white {\n  background-color: white;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-stroke-weak {\n  border-color: #e5e7eb;\n}\n.p-8 {\n  padding: 2rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.ml-sidebar {\n  margin-left: 206px;\n}\n.ml-16 {\n  margin-left: 4rem;\n}\n.fixed {\n  position: fixed;\n}\n.left-0 {\n  left: 0;\n}\n.top-0 {\n  top: 0;\n}\n.z-40 {\n  z-index: 40;\n}\n.h-52 {\n  height: 13rem;\n}\n.text-brand {\n  color: #146B85;\n}\n.bg-brand-light {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-brand-lighter {\n  background-color: rgba(20, 107, 133, 0.15);\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.bg-blue-100 {\n  background-color: #dbeafe;\n}\n.text-blue-800 {\n  color: #1e40af;\n}\n.bg-purple-100 {\n  background-color: #f3e8ff;\n}\n.text-purple-800 {\n  color: #6b21a8;\n}\n.bg-green-100 {\n  background-color: #dcfce7;\n}\n.text-green-800 {\n  color: #166534;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.text-gray-400 {\n  color: #9ca3af;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.hover\\:shadow-md:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:bg-gray-200:hover {\n  background-color: #e5e7eb;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.space-y-2 > * + * {\n  margin-top: 0.5rem;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-gray-100 {\n  border-color: #f3f4f6;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-y-2 > * + * {\n  margin-top: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.items-start {\n  align-items: flex-start;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.flex-col {\n  flex-direction: column;\n}\n.bg-opacity-80 {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.hover\\:bg-opacity-80:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:bg-white:hover {\n  background-color: white;\n}\n.bg-gray-200 {\n  background-color: #e5e7eb;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.relative {\n  position: relative;\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n.absolute {\n  position: absolute;\n}\n.bottom-full {\n  bottom: 100%;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.transform {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.bg-gray-800 {\n  background-color: #1f2937;\n}\n.text-white {\n  color: #ffffff;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.border {\n  border-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.min-h-24 {\n  min-height: 6rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.group-hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.z-50 {\n  z-index: 50;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-gray-300 {\n  color: #d1d5db;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.group {\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.font-medium {\n  font-weight: 500;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.min-h-fit {\n  min-height: fit-content;\n}\n.overflow-visible {\n  overflow: visible;\n}\n.hover\\:underline:hover {\n  text-decoration: underline;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n/*# sourceMappingURL=cases.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesComponent, { className: "CasesComponent", filePath: "src/app/pages/cases/cases.component.ts", lineNumber: 14 });
})();
export {
  CasesComponent
};
//# sourceMappingURL=chunk-UD2OCA6P.js.map
