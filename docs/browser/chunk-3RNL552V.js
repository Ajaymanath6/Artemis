import {
  Router,
  RouterModule
} from "./chunk-5EKLBSZZ.js";
import {
  PhosphorIconComponent
} from "./chunk-JUOZCKZE.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate1
} from "./chunk-63I3BEBX.js";

// src/app/layouts/app-header/app-header.component.ts
function AppHeaderComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AppHeaderComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCollapseClick());
    });
    \u0275\u0275element(1, "i", 10);
    \u0275\u0275elementEnd();
  }
}
function AppHeaderComponent_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function AppHeaderComponent_div_5_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onProjectClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.projectName, " ");
  }
}
function AppHeaderComponent_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, ":");
    \u0275\u0275elementEnd();
  }
}
function AppHeaderComponent_div_5_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function AppHeaderComponent_div_5_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSearchQueryClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.searchQuery, " ");
  }
}
function AppHeaderComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 16);
    \u0275\u0275text(2, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4, "Testing for NY grouping and extractions");
    \u0275\u0275elementEnd()();
  }
}
function AppHeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, AppHeaderComponent_div_5_button_1_Template, 2, 1, "button", 12)(2, AppHeaderComponent_div_5_span_2_Template, 2, 0, "span", 13)(3, AppHeaderComponent_div_5_button_3_Template, 2, 1, "button", 14)(4, AppHeaderComponent_div_5_div_4_Template, 5, 0, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.projectName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.projectName && ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.projectName && !ctx_r1.searchQuery);
  }
}
function AppHeaderComponent_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "a", 30);
    \u0275\u0275element(3, "app-phosphor-icon", 31);
    \u0275\u0275text(4, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 30);
    \u0275\u0275element(6, "app-phosphor-icon", 32);
    \u0275\u0275text(7, " Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "hr", 33);
    \u0275\u0275elementStart(9, "button", 34);
    \u0275\u0275listener("click", function AppHeaderComponent_div_7_div_11_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSignOut());
    });
    \u0275\u0275element(10, "app-phosphor-icon", 35);
    \u0275\u0275text(11, " Sign Out ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 16);
  }
}
function AppHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 19)(2, "button", 20);
    \u0275\u0275listener("click", function AppHeaderComponent_div_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserMenu());
    });
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275element(4, "app-phosphor-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "p", 24);
    \u0275\u0275text(7, "Ajay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 25);
    \u0275\u0275text(9, "ajaym@unicourt.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AppHeaderComponent_div_7_div_11_Template, 12, 3, "div", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isUserMenuOpen);
  }
}
function AppHeaderComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function AppHeaderComponent_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHelpClick());
    });
    \u0275\u0275element(1, "app-phosphor-icon", 37);
    \u0275\u0275elementStart(2, "span", 38);
    \u0275\u0275text(3, "Need Help?");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function AppHeaderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function AppHeaderComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenus());
    });
    \u0275\u0275elementEnd();
  }
}
var AppHeaderComponent = class _AppHeaderComponent {
  router;
  showUserProfile = false;
  // Show user profile and notifications
  showCollapseButton = false;
  // Show sidebar collapse button
  projectName = "";
  // Project name for hierarchical display
  searchQuery = "";
  // Search query for hierarchical display
  collapseToggle = new EventEmitter();
  projectClick = new EventEmitter();
  searchQueryClick = new EventEmitter();
  isUserMenuOpen = false;
  isNotificationsOpen = false;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
  }
  onHelpClick() {
    console.log("Help button clicked");
  }
  onCollapseClick() {
    this.collapseToggle.emit();
  }
  onProjectClick() {
    this.projectClick.emit();
    this.scrollToSearchBar();
    console.log("Project clicked:", this.projectName);
  }
  onSearchQueryClick() {
    this.searchQueryClick.emit();
    this.scrollToSearchBar();
    console.log("Search query clicked:", this.searchQuery);
  }
  scrollToSearchBar() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.isNotificationsOpen = false;
  }
  toggleNotifications() {
    this.isNotificationsOpen = !this.isNotificationsOpen;
    this.isUserMenuOpen = false;
  }
  closeMenus() {
    this.isUserMenuOpen = false;
    this.isNotificationsOpen = false;
  }
  onSignOut() {
    sessionStorage.clear();
    localStorage.clear();
    this.closeMenus();
    this.router.navigate(["/login"]).then(() => {
      console.log("Successfully navigated to login page");
    }).catch((error) => {
      console.error("Navigation to login failed:", error);
      window.location.href = "/Artemis/login";
    });
  }
  static \u0275fac = function AppHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppHeaderComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppHeaderComponent, selectors: [["app-header"]], inputs: { showUserProfile: "showUserProfile", showCollapseButton: "showCollapseButton", projectName: "projectName", searchQuery: "searchQuery" }, outputs: { collapseToggle: "collapseToggle", projectClick: "projectClick", searchQueryClick: "searchQueryClick" }, decls: 10, vars: 9, consts: [[1, "bg-white", "sticky", "top-0", "z-50"], [1, "px-8"], [1, "flex", "items-center", "justify-between", "h-16"], [1, "flex", "items-center", "space-x-4"], ["class", "p-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none", 3, "click", 4, "ngIf"], ["class", "flex items-center space-x-2", 4, "ngIf"], ["class", "flex items-center space-x-4", 4, "ngIf"], ["class", "flex items-center space-x-2 px-4 py-2 border border-stroke-strong rounded-lg text-text-strong hover:bg-fill focus:outline-none transition-colors", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-40", 3, "click", 4, "ngIf"], [1, "p-2", "rounded-lg", "hover:bg-gray-50", "transition-colors", "focus:outline-none", 3, "click"], [1, "ri-layout-left-line", "text-lg", 2, "color", "#9CA3AF"], [1, "flex", "items-center", "space-x-2"], ["class", "text-gray-600 hover:text-brand hover:bg-gray-50 px-2 py-1 rounded-md transition-colors focus:outline-none font-medium truncate", 3, "click", 4, "ngIf"], ["class", "text-gray-400 font-medium", 4, "ngIf"], ["class", "text-gray-900 hover:text-brand hover:bg-gray-50 px-2 py-1 rounded-md transition-colors focus:outline-none font-normal truncate", 3, "click", 4, "ngIf"], [1, "text-gray-600", "hover:text-brand", "hover:bg-gray-50", "px-2", "py-1", "rounded-md", "transition-colors", "focus:outline-none", "font-medium", "truncate", 3, "click"], [1, "text-gray-400", "font-medium"], [1, "text-gray-900", "hover:text-brand", "hover:bg-gray-50", "px-2", "py-1", "rounded-md", "transition-colors", "focus:outline-none", "font-normal", "truncate", 3, "click"], [1, "text-gray-500", "text-sm", "font-normal"], [1, "relative"], [1, "flex", "items-center", "space-x-3", "p-2", "rounded-lg", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "w-8", "h-8", "bg-brand", "rounded-full", "flex", "items-center", "justify-center"], ["name", "user", "weight", "bold", "color", "white", 3, "size"], [1, "hidden", "md:block", "text-left"], [1, "text-sm", "font-medium", "text-text-strong"], [1, "text-xs", "text-text-weak"], [1, "ri-arrow-down-s-line", "hidden", "md:block", 2, "color", "#353D59", "font-size", "14px"], ["class", "absolute right-0 mt-2 w-48 bg-white rounded-lg border border-stroke-weak z-50", 4, "ngIf"], [1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "rounded-lg", "border", "border-stroke-weak", "z-50"], [1, "py-2"], ["href", "#", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "text-text-strong", "hover:bg-fill"], ["name", "user", "weight", "regular", "color", "currentColor", "className", "mr-3", 3, "size"], ["name", "gear", "weight", "regular", "color", "currentColor", "className", "mr-3", 3, "size"], [1, "my-2", "border-stroke-weak"], [1, "w-full", "flex", "items-center", "px-4", "py-2", "text-sm", "text-text-strong", "hover:bg-fill", 3, "click"], ["name", "sign-out", "weight", "regular", "color", "currentColor", "className", "mr-3", 3, "size"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "border", "border-stroke-strong", "rounded-lg", "text-text-strong", "hover:bg-fill", "focus:outline-none", "transition-colors", 3, "click"], ["name", "question", "weight", "bold", "color", "currentColor", 3, "size"], [1, "text-sm", "font-medium"], [1, "fixed", "inset-0", "z-40", 3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, AppHeaderComponent_button_4_Template, 2, 0, "button", 4)(5, AppHeaderComponent_div_5_Template, 5, 4, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275template(7, AppHeaderComponent_div_7_Template, 12, 2, "div", 6)(8, AppHeaderComponent_button_8_Template, 4, 1, "button", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, AppHeaderComponent_div_9_Template, 1, 0, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-b", ctx.showUserProfile)("border-stroke-weak", ctx.showUserProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showCollapseButton);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showUserProfile && (ctx.projectName || ctx.searchQuery));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showUserProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showUserProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUserMenuOpen || ctx.isNotificationsOpen);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, PhosphorIconComponent], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\nheader[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.dropdown-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.dropdown-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 150ms ease-out, transform 150ms ease-out;\n}\n.router-link-active[_ngcontent-%COMP%] {\n  color: var(--brand-color);\n  border-bottom-color: var(--brand-color);\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\nbutton[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\ndiv[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.px-2[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.rounded-md[_ngcontent-%COMP%] {\n  border-radius: 0.375rem;\n}\n/*# sourceMappingURL=app-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule, PhosphorIconComponent], template: '<!-- App Header - Sticky Top Navigation Bar -->\n<header class="bg-white sticky top-0 z-50" \n        [class.border-b]="showUserProfile"\n        [class.border-stroke-weak]="showUserProfile">\n  <div class="px-8">\n    <div class="flex items-center justify-between h-16">\n      \n      <!-- Left Section: Collapse Button + Project Title + Search Query -->\n      <div class="flex items-center space-x-4">\n        <!-- Sidebar Collapse Button (when sidebar is collapsed) -->\n        <button\n          *ngIf="showCollapseButton"\n          (click)="onCollapseClick()"\n          class="p-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none">\n          <i class="ri-layout-left-line text-lg" style="color: #9CA3AF;"></i>\n        </button>\n\n        <!-- Project Title and Search Query -->\n        <div *ngIf="showUserProfile && (projectName || searchQuery)" class="flex items-center space-x-2">\n          <!-- Project Name (clickable) -->\n          <button \n            *ngIf="projectName"\n            (click)="onProjectClick()"\n            class="text-gray-600 hover:text-brand hover:bg-gray-50 px-2 py-1 rounded-md transition-colors focus:outline-none font-medium truncate">\n            {{ projectName }}\n          </button>\n          \n          <!-- Separator -->\n          <span *ngIf="projectName && searchQuery" class="text-gray-400 font-medium">:</span>\n          \n          <!-- Search Query (clickable) -->\n          <button \n            *ngIf="searchQuery"\n            (click)="onSearchQueryClick()"\n            class="text-gray-900 hover:text-brand hover:bg-gray-50 px-2 py-1 rounded-md transition-colors focus:outline-none font-normal truncate">\n            {{ searchQuery }}\n          </button>\n          \n          <!-- Subtitle -->\n          <div *ngIf="projectName && !searchQuery" class="flex items-center space-x-2">\n            <span class="text-gray-400 font-medium">:</span>\n            <span class="text-gray-500 text-sm font-normal">Testing for NY grouping and extractions</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Right Section: User Profile + Notifications OR Help Button -->\n      <div class="flex items-center space-x-4">\n        \n        <!-- User Profile Variant -->\n        <div *ngIf="showUserProfile" class="flex items-center space-x-4">\n          \n          \n\n          <!-- User Profile -->\n          <div class="relative">\n            <button\n              (click)="toggleUserMenu()"\n              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">\n              <div class="w-8 h-8 bg-brand rounded-full flex items-center justify-center">\n                <app-phosphor-icon\n                  name="user"\n                  [size]="16"\n                  weight="bold"\n                  color="white">\n                </app-phosphor-icon>\n              </div>\n              <div class="hidden md:block text-left">\n                <p class="text-sm font-medium text-text-strong">Ajay</p>\n                <p class="text-xs text-text-weak">ajaym&#64;unicourt.com</p>\n              </div>\n              <i class="ri-arrow-down-s-line hidden md:block" style="color: #353D59; font-size: 14px;"></i>\n            </button>\n\n            <!-- User Menu Dropdown -->\n            <div *ngIf="isUserMenuOpen" \n                 class="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-stroke-weak z-50">\n              <div class="py-2">\n                <a href="#" class="flex items-center px-4 py-2 text-sm text-text-strong hover:bg-fill">\n                  <app-phosphor-icon name="user" [size]="16" weight="regular" color="currentColor" className="mr-3"></app-phosphor-icon>\n                  Profile\n                </a>\n                <a href="#" class="flex items-center px-4 py-2 text-sm text-text-strong hover:bg-fill">\n                  <app-phosphor-icon name="gear" [size]="16" weight="regular" color="currentColor" className="mr-3"></app-phosphor-icon>\n                  Settings\n                </a>\n                <hr class="my-2 border-stroke-weak">\n                <button (click)="onSignOut()" class="w-full flex items-center px-4 py-2 text-sm text-text-strong hover:bg-fill">\n                  <app-phosphor-icon name="sign-out" [size]="16" weight="regular" color="currentColor" className="mr-3"></app-phosphor-icon>\n                  Sign Out\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Help Button (default variant) -->\n        <button\n          *ngIf="!showUserProfile"\n          (click)="onHelpClick()"\n          class="flex items-center space-x-2 px-4 py-2 border border-stroke-strong rounded-lg text-text-strong hover:bg-fill focus:outline-none transition-colors">\n          <app-phosphor-icon\n            name="question"\n            [size]="16"\n            weight="bold"\n            color="currentColor">\n          </app-phosphor-icon>\n          <span class="text-sm font-medium">Need Help?</span>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Overlay to close dropdowns -->\n  <div *ngIf="isUserMenuOpen || isNotificationsOpen" \n       (click)="closeMenus()"\n       class="fixed inset-0 z-40"></div>\n</header>\n\n', styles: ["/* src/app/layouts/app-header/app-header.component.css */\nheader {\n  box-shadow: none !important;\n}\nheader:hover {\n  box-shadow: none !important;\n}\n.z-50 {\n  z-index: 50;\n}\n.dropdown-enter {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.dropdown-enter-active {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 150ms ease-out, transform 150ms ease-out;\n}\n.router-link-active {\n  color: var(--brand-color);\n  border-bottom-color: var(--brand-color);\n}\n.max-h-96::-webkit-scrollbar {\n  width: 4px;\n}\n.max-h-96::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.max-h-96::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.max-h-96::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.h-8 {\n  height: 2rem;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\nbutton {\n  box-shadow: none !important;\n}\nbutton:hover {\n  box-shadow: none !important;\n}\nbutton:focus {\n  box-shadow: none !important;\n}\ndiv:hover {\n  box-shadow: none !important;\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n/*# sourceMappingURL=app-header.component.css.map */\n"] }]
  }], () => [{ type: Router }], { showUserProfile: [{
    type: Input
  }], showCollapseButton: [{
    type: Input
  }], projectName: [{
    type: Input
  }], searchQuery: [{
    type: Input
  }], collapseToggle: [{
    type: Output
  }], projectClick: [{
    type: Output
  }], searchQueryClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppHeaderComponent, { className: "AppHeaderComponent", filePath: "src/app/layouts/app-header/app-header.component.ts", lineNumber: 13 });
})();

export {
  AppHeaderComponent
};
//# sourceMappingURL=chunk-3RNL552V.js.map
