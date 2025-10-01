import {
  Router,
  RouterModule
} from "./chunk-DDDO6NM3.js";
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
} from "./chunk-Z6WLR7UX.js";

// src/app/components/navigation/side-nav/side-nav.component.ts
function SideNavComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SideNavComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCollapse());
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementEnd();
  }
}
function SideNavComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "button", 23);
    \u0275\u0275listener("click", function SideNavComponent_div_7_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectLanguage("dart"));
    });
    \u0275\u0275element(2, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function SideNavComponent_div_7_div_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectLanguage("deep"));
    });
    \u0275\u0275element(4, "img", 26);
    \u0275\u0275elementEnd()();
  }
}
function SideNavComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 19);
    \u0275\u0275listener("click", function SideNavComponent_div_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLanguageDropdown());
    });
    \u0275\u0275element(2, "img", 20)(3, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SideNavComponent_div_7_div_4_Template, 5, 0, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getLanguageIcon(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-arrow-" + (ctx_r1.isLanguageDropdownOpen ? "up" : "down") + "-s-line text-base text-gray-400 absolute right-3");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLanguageDropdownOpen);
  }
}
function SideNavComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275listener("click", function SideNavComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleLanguageDropdown());
    });
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.getCollapsedLanguageIcon(), \u0275\u0275sanitizeUrl);
  }
}
function SideNavComponent_li_10_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("ri-arrow-" + (item_r7.isExpanded ? "down" : "right") + "-s-line text-base ml-auto flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r1.isActiveRoute(item_r7.route || "") ? "#146B85" : "#9CA3AF");
  }
}
function SideNavComponent_li_10_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "button", 36);
    \u0275\u0275listener("click", function SideNavComponent_li_10_ul_7_li_1_Template_button_click_1_listener() {
      const child_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onItemClick(child_r9));
    });
    \u0275\u0275element(2, "i");
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.isActiveRoute(child_r9.route || "") ? "bg-blue-fill text-brand font-medium" : "text-text-weak hover:bg-fill hover:text-text-strong");
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + child_r9.icon + " text-base flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r1.isActiveRoute(child_r9.route || "") ? "#146B85" : "#9CA3AF");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r9.label);
  }
}
function SideNavComponent_li_10_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 35);
    \u0275\u0275template(1, SideNavComponent_li_10_ul_7_li_1_Template, 5, 7, "li", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r7.children);
  }
}
function SideNavComponent_li_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
}
function SideNavComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "button", 30);
    \u0275\u0275listener("click", function SideNavComponent_li_10_Template_button_click_2_listener() {
      const item_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick(item_r7));
    });
    \u0275\u0275element(3, "i");
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SideNavComponent_li_10_i_6_Template, 1, 4, "i", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SideNavComponent_li_10_ul_7_Template, 2, 1, "ul", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SideNavComponent_li_10_div_8_Template, 1, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.isActiveRoute(item_r7.route || "") ? "bg-gray-light text-text-strong" : "text-text-strong hover:bg-fill hover:text-brand");
    \u0275\u0275classProp("justify-center", ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + item_r7.icon + " text-lg flex-shrink-0");
    \u0275\u0275styleProp("color", ctx_r1.isActiveRoute(item_r7.route || "") ? "#146B85" : "#9CA3AF");
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.children && !ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r7.children && item_r7.isExpanded && !ctx_r1.isCollapsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r10 === 0 && !ctx_r1.isCollapsed);
  }
}
var SideNavComponent = class _SideNavComponent {
  router;
  navItems = [];
  isCollapsed = false;
  itemClick = new EventEmitter();
  sidebarToggle = new EventEmitter();
  // Dropdown state for language selection
  isLanguageDropdownOpen = false;
  selectedLanguage = "dart";
  // Default to dart
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
  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }
  selectLanguage(language) {
    this.selectedLanguage = language;
    this.isLanguageDropdownOpen = false;
    console.log("Language selected:", language);
  }
  getLanguageIcon() {
    return this.selectedLanguage === "dart" ? "assets/images/dartfull.svg" : "assets/images/deep.svg";
  }
  getCollapsedLanguageIcon() {
    return this.selectedLanguage === "dart" ? "assets/images/dartsmall.svg" : "assets/images/deepsmall.svg";
  }
  static \u0275fac = function SideNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideNavComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideNavComponent, selectors: [["app-side-nav"]], inputs: { navItems: "navItems", isCollapsed: "isCollapsed" }, outputs: { itemClick: "itemClick", sidebarToggle: "sidebarToggle" }, decls: 20, vars: 21, consts: [[1, "bg-white", "border-r", "border-gray-200", "h-screen", "flex", "flex-col", "fixed", "left-0", "top-0", "z-40"], [1, "flex", "items-center", "justify-between", "px-4", "py-4", "border-b", "border-gray-200"], [1, "flex", "items-center"], ["alt", "UniCourt Logo", 1, "h-8", "w-auto", 3, "src"], ["class", "p-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto focus:outline-none", 3, "click", 4, "ngIf"], [1, "flex-1", "overflow-y-auto", "py-4"], [1, "relative", "mb-4"], [4, "ngIf"], ["class", "flex justify-center", 4, "ngIf"], [1, "space-y-2"], [4, "ngFor", "ngForOf"], [1, "p-4", "border-t", "border-gray-200"], [1, "flex", "items-center", "space-x-3", "px-3", "py-2"], [1, "text-lg"], [1, "flex-1", "text-left", "bg-transparent", "border-none", "focus:outline-none", "text-text-strong", "hover:text-brand", "transition-colors"], [1, "text-sm", "font-medium"], [1, "text-xs", "text-text-weak"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", "ml-auto", "focus:outline-none", 3, "click"], [1, "ri-layout-right-line", "text-lg", 2, "color", "#9CA3AF"], [1, "w-full", "flex", "items-center", "justify-center", "px-3", "py-2", "text-sm", "font-medium", "rounded-lg", "transition-colors", "group", "focus:outline-none", "hover:bg-fill", "relative", 3, "click"], ["alt", "Language", 1, "h-5", "w-16", "flex-shrink-0", "object-contain", 3, "src"], ["class", "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50", 4, "ngIf"], [1, "absolute", "top-full", "left-0", "right-0", "mt-1", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "z-50"], [1, "w-full", "flex", "items-center", "justify-center", "px-3", "py-3", "text-sm", "hover:bg-gray-50", "transition-colors", "focus:outline-none", "first:rounded-t-lg", 3, "click"], ["src", "assets/images/dartfull.svg", "alt", "Dart", 1, "h-5", "w-16", "object-contain"], [1, "w-full", "flex", "items-center", "justify-center", "px-3", "py-3", "text-sm", "hover:bg-gray-50", "transition-colors", "focus:outline-none", "last:rounded-b-lg", 3, "click"], ["src", "assets/images/deep.svg", "alt", "Deep", 1, "h-5", "w-16", "object-contain"], [1, "flex", "justify-center"], [1, "p-2", "rounded-lg", "transition-colors", "focus:outline-none", "hover:bg-fill", 3, "click"], ["alt", "Language", 1, "h-collapsed-logo", "object-contain", 3, "src"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "font-medium", "rounded-lg", "transition-colors", "group", "focus:outline-none", 3, "click"], [1, "ml-3", "truncate"], [3, "class", "color", 4, "ngIf"], ["class", "mt-2 ml-6 space-y-1", 4, "ngIf"], ["class", "border-b border-gray-200 my-4 mx-3", 4, "ngIf"], [1, "mt-2", "ml-6", "space-y-1"], [1, "w-full", "flex", "items-center", "px-3", "py-2", "text-sm", "rounded-lg", "transition-colors", "focus:outline-none", 3, "click"], [1, "border-b", "border-gray-200", "my-4", "mx-3"]], template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, SideNavComponent_button_4_Template, 2, 0, "button", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "div", 6);
      \u0275\u0275template(7, SideNavComponent_div_7_Template, 5, 4, "div", 7)(8, SideNavComponent_div_8_Template, 3, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "ul", 9);
      \u0275\u0275template(10, SideNavComponent_li_10_Template, 9, 14, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "span", 13);
      \u0275\u0275text(14, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 14)(16, "p", 15);
      \u0275\u0275text(17, "Upgrade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 16);
      \u0275\u0275text(19, "Unlock premium features");
      \u0275\u0275elementEnd()()()()();
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
      \u0275\u0275property("ngIf", !ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275classProp("px-3", !ctx.isCollapsed)("px-2", ctx.isCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.navItems);
      \u0275\u0275advance();
      \u0275\u0275classProp("hidden", ctx.isCollapsed);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\nnav[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar[_ngcontent-%COMP%] {\n  width: 206px;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.h-screen[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #146B85;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.bg-blue-fill[_ngcontent-%COMP%] {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill[_ngcontent-%COMP%]:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #146B85;\n}\n.hover\\:text-text-strong[_ngcontent-%COMP%]:hover {\n  color: #030B26;\n}\n.text-text-strong[_ngcontent-%COMP%] {\n  color: #030B26;\n}\n.text-text-weak[_ngcontent-%COMP%] {\n  color: #353D59;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.min-w-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nimg[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.w-8[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-folders-line[_ngcontent-%COMP%], \n.ri-folder-open-fill[_ngcontent-%COMP%], \n.ri-home-line[_ngcontent-%COMP%], \n.ri-search-line[_ngcontent-%COMP%], \n.ri-time-line[_ngcontent-%COMP%], \n.ri-bookmark-line[_ngcontent-%COMP%], \n.ri-edit-line[_ngcontent-%COMP%], \n.ri-arrow-down-s-line[_ngcontent-%COMP%], \n.ri-arrow-right-s-line[_ngcontent-%COMP%], \n.ri-arrow-up-s-line[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.language-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.language-dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 1.5rem;\n  width: auto;\n  object-fit: contain;\n}\n.h-5[_ngcontent-%COMP%] {\n  height: 1.25rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.object-contain[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n.h-collapsed-logo[_ngcontent-%COMP%] {\n  height: 1.125rem;\n  width: auto;\n}\n.h-4[_ngcontent-%COMP%] {\n  height: 1rem;\n}\n.w-10[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.first\\:rounded-t-lg[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.last\\:rounded-b-lg[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */"] });
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
    
    <!-- Language Selection Dropdown -->
    <div class="relative mb-4" [class.px-3]="!isCollapsed" [class.px-2]="isCollapsed">
      <!-- Expanded State - Full dropdown -->
      <div *ngIf="!isCollapsed">
        <button
          (click)="toggleLanguageDropdown()"
          class="w-full flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group focus:outline-none hover:bg-fill relative">
          <img [src]="getLanguageIcon()" alt="Language" class="h-5 w-16 flex-shrink-0 object-contain">
          <i [class]="'ri-arrow-' + (isLanguageDropdownOpen ? 'up' : 'down') + '-s-line text-base text-gray-400 absolute right-3'"></i>
        </button>
        
        <!-- Dropdown Menu -->
        <div *ngIf="isLanguageDropdownOpen" class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <button
            (click)="selectLanguage('dart')"
            class="w-full flex items-center justify-center px-3 py-3 text-sm hover:bg-gray-50 transition-colors focus:outline-none first:rounded-t-lg">
            <img src="assets/images/dartfull.svg" alt="Dart" class="h-5 w-16 object-contain">
          </button>
          <button
            (click)="selectLanguage('deep')"
            class="w-full flex items-center justify-center px-3 py-3 text-sm hover:bg-gray-50 transition-colors focus:outline-none last:rounded-b-lg">
            <img src="assets/images/deep.svg" alt="Deep" class="h-5 w-16 object-contain">
          </button>
        </div>
      </div>
      
      <!-- Collapsed State - Just logo -->
      <div *ngIf="isCollapsed" class="flex justify-center">
        <button
          (click)="toggleLanguageDropdown()"
          class="p-2 rounded-lg transition-colors focus:outline-none hover:bg-fill">
          <img [src]="getCollapsedLanguageIcon()" alt="Language" class="h-collapsed-logo object-contain">
        </button>
      </div>
    </div>

    <ul class="space-y-2" [class.px-3]="!isCollapsed" [class.px-2]="isCollapsed">
      <li *ngFor="let item of navItems; let i = index">

        <!-- Main Navigation Item -->
        <div>
          <button
            (click)="onItemClick(item)"
            class="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors group focus:outline-none"
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
                class="w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none"
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
        
        <!-- Divider after All Projects (first item) -->
        <div *ngIf="i === 0 && !isCollapsed" class="border-b border-gray-200 my-4 mx-3"></div>
      </li>
    </ul>
  </div>

  <!-- Navigation Footer - Hidden when collapsed -->
  <div class="p-4 border-t border-gray-200" [class.hidden]="isCollapsed">
    <div class="flex items-center space-x-3 px-3 py-2">
      <span class="text-lg">\u{1F680}</span>
      <button class="flex-1 text-left bg-transparent border-none focus:outline-none text-text-strong hover:text-brand transition-colors">
        <p class="text-sm font-medium">Upgrade</p>
        <p class="text-xs text-text-weak">Unlock premium features</p>
      </button>
    </div>
  </div>
</nav>`, styles: ["/* src/app/components/navigation/side-nav/side-nav.component.css */\n:host {\n  display: block;\n  height: 100%;\n}\nnav {\n  min-height: 100vh;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.w-sidebar {\n  width: 206px;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.fixed {\n  position: fixed;\n}\n.left-0 {\n  left: 0;\n}\n.top-0 {\n  top: 0;\n}\n.z-40 {\n  z-index: 40;\n}\n.justify-center {\n  justify-content: center;\n}\n.bg-brand {\n  background-color: #146B85;\n}\n.text-brand {\n  color: #146B85;\n}\n.bg-blue-fill {\n  background-color: rgba(47, 85, 217, 0.05);\n}\n.bg-gray-light {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-fill:hover {\n  background-color: #E6E8F2;\n}\n.hover\\:text-brand:hover {\n  color: #146B85;\n}\n.hover\\:text-text-strong:hover {\n  color: #030B26;\n}\n.text-text-strong {\n  color: #030B26;\n}\n.text-text-weak {\n  color: #353D59;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.overflow-y-auto::-webkit-scrollbar {\n  width: 4px;\n}\n.overflow-y-auto::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb {\n  background: #ADB4CC;\n  border-radius: 2px;\n}\n.overflow-y-auto::-webkit-scrollbar-thumb:hover {\n  background: #69718C;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.min-w-0 {\n  min-width: 0px;\n}\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\nbutton:focus {\n  outline: none;\n}\nimg {\n  object-fit: contain;\n}\n.w-8 {\n  width: 2rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.ri-folders-line,\n.ri-folder-open-fill,\n.ri-home-line,\n.ri-search-line,\n.ri-time-line,\n.ri-bookmark-line,\n.ri-edit-line,\n.ri-arrow-down-s-line,\n.ri-arrow-right-s-line,\n.ri-arrow-up-s-line {\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n}\n.hover\\:bg-gray-100:hover {\n  background-color: #f3f4f6;\n}\n.w-16 {\n  width: 4rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n.language-dropdown {\n  position: relative;\n}\n.language-dropdown img {\n  max-height: 1.5rem;\n  width: auto;\n  object-fit: contain;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.object-contain {\n  object-fit: contain;\n}\n.h-collapsed-logo {\n  height: 1.125rem;\n  width: auto;\n}\n.h-4 {\n  height: 1rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.z-50 {\n  z-index: 50;\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\n.first\\:rounded-t-lg:first-child {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.last\\:rounded-b-lg:last-child {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n@media (max-width: 768px) {\n  nav {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 40;\n    transform: translateX(-100%);\n  }\n  nav.mobile-open {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=side-nav.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideNavComponent, { className: "SideNavComponent" });
})();

export {
  SideNavComponent
};
//# sourceMappingURL=chunk-POO7ABQP.js.map
