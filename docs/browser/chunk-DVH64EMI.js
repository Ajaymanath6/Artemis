import {
  Router,
  RouterModule
} from "./chunk-IVA26WHO.js";
import {
  PhosphorIconComponent
} from "./chunk-PSIVKUHD.js";
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
  ɵɵtext
} from "./chunk-T43XKO7X.js";

// src/app/layouts/app-header/app-header.component.ts
function AppHeaderComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AppHeaderComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCollapseClick());
    });
    \u0275\u0275element(1, "app-phosphor-icon", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 20);
  }
}
function AppHeaderComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29)(6, "p", 30);
    \u0275\u0275text(7, "New case update available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 31);
    \u0275\u0275text(9, "2 minutes ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "p", 30);
    \u0275\u0275text(12, "Document uploaded successfully");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 31);
    \u0275\u0275text(14, "1 hour ago");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 32)(16, "p", 30);
    \u0275\u0275text(17, "Project deadline reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 31);
    \u0275\u0275text(19, "3 hours ago");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 33)(21, "button", 34);
    \u0275\u0275text(22, "View all notifications");
    \u0275\u0275elementEnd()()();
  }
}
function AppHeaderComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "a", 37);
    \u0275\u0275element(3, "app-phosphor-icon", 38);
    \u0275\u0275text(4, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 37);
    \u0275\u0275element(6, "app-phosphor-icon", 39);
    \u0275\u0275text(7, " Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "hr", 40);
    \u0275\u0275elementStart(9, "button", 41);
    \u0275\u0275listener("click", function AppHeaderComponent_div_8_div_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSignOut());
    });
    \u0275\u0275element(10, "app-phosphor-icon", 42);
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
function AppHeaderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 12)(2, "button", 13);
    \u0275\u0275listener("click", function AppHeaderComponent_div_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleNotifications());
    });
    \u0275\u0275element(3, "app-phosphor-icon", 14);
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AppHeaderComponent_div_8_div_6_Template, 23, 0, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "button", 17);
    \u0275\u0275listener("click", function AppHeaderComponent_div_8_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleUserMenu());
    });
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275element(10, "app-phosphor-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20)(12, "p", 21);
    \u0275\u0275text(13, "Legal User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275text(15, "user@unicourt.com");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "app-phosphor-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AppHeaderComponent_div_8_div_17_Template, 12, 3, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("size", 20);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isNotificationsOpen);
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(6);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isUserMenuOpen);
  }
}
function AppHeaderComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function AppHeaderComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onHelpClick());
    });
    \u0275\u0275element(1, "app-phosphor-icon", 44);
    \u0275\u0275elementStart(2, "span", 45);
    \u0275\u0275text(3, "Need Help?");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function AppHeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function AppHeaderComponent_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
  collapseToggle = new EventEmitter();
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppHeaderComponent, selectors: [["app-header"]], inputs: { showUserProfile: "showUserProfile", showCollapseButton: "showCollapseButton" }, outputs: { collapseToggle: "collapseToggle" }, decls: 11, vars: 8, consts: [[1, "bg-white", "sticky", "top-0", "z-50"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "items-center", "justify-between", "h-16"], [1, "flex", "items-center", "space-x-4"], ["class", "p-2 rounded-lg hover:bg-fill transition-colors lg:hidden", 3, "click", 4, "ngIf"], [1, "flex", "items-center"], ["src", "assets/images/logo1.svg", "alt", "UniCourt Logo", 1, "h-8", "w-auto"], ["class", "flex items-center space-x-4", 4, "ngIf"], ["class", "flex items-center space-x-2 px-4 py-2 border border-stroke-strong rounded-lg text-text-strong hover:bg-fill focus:outline-none transition-colors", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-40", 3, "click", 4, "ngIf"], [1, "p-2", "rounded-lg", "hover:bg-fill", "transition-colors", "lg:hidden", 3, "click"], ["name", "list", "weight", "bold", "color", "currentColor", 3, "size"], [1, "relative"], [1, "p-2", "rounded-lg", "hover:bg-fill", "transition-colors", "relative", 3, "click"], ["name", "bell", "weight", "regular", "color", "currentColor", 3, "size"], [1, "absolute", "-top-1", "-right-1", "h-4", "w-4", "bg-red-500", "text-white", "text-xs", "rounded-full", "flex", "items-center", "justify-center"], ["class", "absolute right-0 mt-2 w-80 bg-white rounded-lg border border-stroke-weak z-50", 4, "ngIf"], [1, "flex", "items-center", "space-x-3", "p-2", "rounded-lg", "hover:bg-fill", "transition-colors", 3, "click"], [1, "w-8", "h-8", "bg-brand", "rounded-full", "flex", "items-center", "justify-center"], ["name", "user", "weight", "bold", "color", "white", 3, "size"], [1, "hidden", "md:block", "text-left"], [1, "text-sm", "font-medium", "text-text-strong"], [1, "text-xs", "text-text-weak"], ["name", "caret-down", "weight", "bold", "color", "currentColor", 3, "size"], ["class", "absolute right-0 mt-2 w-48 bg-white rounded-lg border border-stroke-weak z-50", 4, "ngIf"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "rounded-lg", "border", "border-stroke-weak", "z-50"], [1, "p-4", "border-b", "border-stroke-weak"], [1, "text-sm", "font-semibold", "text-text-strong"], [1, "max-h-64", "overflow-y-auto"], [1, "p-3", "hover:bg-fill", "cursor-pointer", "border-b", "border-stroke-weak"], [1, "text-sm", "text-text-strong"], [1, "text-xs", "text-text-weak", "mt-1"], [1, "p-3", "hover:bg-fill", "cursor-pointer"], [1, "p-3", "border-t", "border-stroke-weak"], [1, "text-sm", "text-brand", "hover:text-blue-text-strong"], [1, "absolute", "right-0", "mt-2", "w-48", "bg-white", "rounded-lg", "border", "border-stroke-weak", "z-50"], [1, "py-2"], ["href", "#", 1, "flex", "items-center", "px-4", "py-2", "text-sm", "text-text-strong", "hover:bg-fill"], ["name", "user", "weight", "regular", "color", "currentColor", "className", "mr-3", 3, "size"], ["name", "gear", "weight", "regular", "color", "currentColor", "className", "mr-3", 3, "size"], [1, "my-2", "border-stroke-weak"], [1, "w-full", "flex", "items-center", "px-4", "py-2", "text-sm", "text-text-strong", "hover:bg-fill", 3, "click"], ["name", "sign-out", "weight", "regular", "color", "currentColor", "className", "mr-3", 3, "size"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "border", "border-stroke-strong", "rounded-lg", "text-text-strong", "hover:bg-fill", "focus:outline-none", "transition-colors", 3, "click"], ["name", "question", "weight", "bold", "color", "currentColor", 3, "size"], [1, "text-sm", "font-medium"], [1, "fixed", "inset-0", "z-40", 3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, AppHeaderComponent_button_4_Template, 2, 1, "button", 4);
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275element(6, "img", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275template(8, AppHeaderComponent_div_8_Template, 18, 5, "div", 7)(9, AppHeaderComponent_button_9_Template, 4, 1, "button", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, AppHeaderComponent_div_10_Template, 1, 0, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("border-b", ctx.showUserProfile)("border-stroke-weak", ctx.showUserProfile);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showCollapseButton);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.showUserProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.showUserProfile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isUserMenuOpen || ctx.isNotificationsOpen);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, PhosphorIconComponent], styles: ["\n\nheader[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\nheader[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.dropdown-enter[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.dropdown-enter-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 150ms ease-out, transform 150ms ease-out;\n}\n.router-link-active[_ngcontent-%COMP%] {\n  color: var(--brand-color);\n  border-bottom-color: var(--brand-color);\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.max-h-96[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.h-8[_ngcontent-%COMP%] {\n  height: 2rem;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\nbutton[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\ndiv[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=app-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [CommonModule, RouterModule, PhosphorIconComponent], template: '<!-- App Header - Top Navigation Bar -->\n<header class="bg-white sticky top-0 z-50" \n        [class.border-b]="showUserProfile"\n        [class.border-stroke-weak]="showUserProfile">\n  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n    <div class="flex items-center justify-between h-16">\n      \n      <!-- Left Section: Logo + Brand + Collapse Button -->\n      <div class="flex items-center space-x-4">\n        <!-- Sidebar Collapse Button (when enabled) -->\n        <button\n          *ngIf="showCollapseButton"\n          (click)="onCollapseClick()"\n          class="p-2 rounded-lg hover:bg-fill transition-colors lg:hidden">\n          <app-phosphor-icon\n            name="list"\n            [size]="20"\n            weight="bold"\n            color="currentColor">\n          </app-phosphor-icon>\n        </button>\n\n        <!-- Logo -->\n        <div class="flex items-center">\n          <img src="assets/images/logo1.svg"\n               alt="UniCourt Logo"\n               class="h-8 w-auto" />\n        </div>\n      </div>\n\n      <!-- Right Section: User Profile + Notifications OR Help Button -->\n      <div class="flex items-center space-x-4">\n        \n        <!-- User Profile Variant -->\n        <div *ngIf="showUserProfile" class="flex items-center space-x-4">\n          \n          <!-- Notifications -->\n          <div class="relative">\n            <button\n              (click)="toggleNotifications()"\n              class="p-2 rounded-lg hover:bg-fill transition-colors relative">\n              <app-phosphor-icon\n                name="bell"\n                [size]="20"\n                weight="regular"\n                color="currentColor">\n              </app-phosphor-icon>\n              <!-- Notification Badge -->\n              <span class="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>\n            </button>\n\n            <!-- Notifications Dropdown -->\n            <div *ngIf="isNotificationsOpen" \n                 class="absolute right-0 mt-2 w-80 bg-white rounded-lg border border-stroke-weak z-50">\n              <div class="p-4 border-b border-stroke-weak">\n                <h3 class="text-sm font-semibold text-text-strong">Notifications</h3>\n              </div>\n              <div class="max-h-64 overflow-y-auto">\n                <div class="p-3 hover:bg-fill cursor-pointer border-b border-stroke-weak">\n                  <p class="text-sm text-text-strong">New case update available</p>\n                  <p class="text-xs text-text-weak mt-1">2 minutes ago</p>\n                </div>\n                <div class="p-3 hover:bg-fill cursor-pointer border-b border-stroke-weak">\n                  <p class="text-sm text-text-strong">Document uploaded successfully</p>\n                  <p class="text-xs text-text-weak mt-1">1 hour ago</p>\n                </div>\n                <div class="p-3 hover:bg-fill cursor-pointer">\n                  <p class="text-sm text-text-strong">Project deadline reminder</p>\n                  <p class="text-xs text-text-weak mt-1">3 hours ago</p>\n                </div>\n              </div>\n              <div class="p-3 border-t border-stroke-weak">\n                <button class="text-sm text-brand hover:text-blue-text-strong">View all notifications</button>\n              </div>\n            </div>\n          </div>\n\n          <!-- User Profile -->\n          <div class="relative">\n            <button\n              (click)="toggleUserMenu()"\n              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-fill transition-colors">\n              <div class="w-8 h-8 bg-brand rounded-full flex items-center justify-center">\n                <app-phosphor-icon\n                  name="user"\n                  [size]="16"\n                  weight="bold"\n                  color="white">\n                </app-phosphor-icon>\n              </div>\n              <div class="hidden md:block text-left">\n                <p class="text-sm font-medium text-text-strong">Legal User</p>\n                <p class="text-xs text-text-weak">user&#64;unicourt.com</p>\n              </div>\n              <app-phosphor-icon\n                name="caret-down"\n                [size]="16"\n                weight="bold"\n                color="currentColor">\n              </app-phosphor-icon>\n            </button>\n\n            <!-- User Menu Dropdown -->\n            <div *ngIf="isUserMenuOpen" \n                 class="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-stroke-weak z-50">\n              <div class="py-2">\n                <a href="#" class="flex items-center px-4 py-2 text-sm text-text-strong hover:bg-fill">\n                  <app-phosphor-icon name="user" [size]="16" weight="regular" color="currentColor" className="mr-3"></app-phosphor-icon>\n                  Profile\n                </a>\n                <a href="#" class="flex items-center px-4 py-2 text-sm text-text-strong hover:bg-fill">\n                  <app-phosphor-icon name="gear" [size]="16" weight="regular" color="currentColor" className="mr-3"></app-phosphor-icon>\n                  Settings\n                </a>\n                <hr class="my-2 border-stroke-weak">\n                <button (click)="onSignOut()" class="w-full flex items-center px-4 py-2 text-sm text-text-strong hover:bg-fill">\n                  <app-phosphor-icon name="sign-out" [size]="16" weight="regular" color="currentColor" className="mr-3"></app-phosphor-icon>\n                  Sign Out\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Help Button (default variant) -->\n        <button\n          *ngIf="!showUserProfile"\n          (click)="onHelpClick()"\n          class="flex items-center space-x-2 px-4 py-2 border border-stroke-strong rounded-lg text-text-strong hover:bg-fill focus:outline-none transition-colors">\n          <app-phosphor-icon\n            name="question"\n            [size]="16"\n            weight="bold"\n            color="currentColor">\n          </app-phosphor-icon>\n          <span class="text-sm font-medium">Need Help?</span>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- Overlay to close dropdowns -->\n  <div *ngIf="isUserMenuOpen || isNotificationsOpen" \n       (click)="closeMenus()"\n       class="fixed inset-0 z-40"></div>\n</header>\n\n', styles: ["/* src/app/layouts/app-header/app-header.component.css */\nheader {\n  box-shadow: none !important;\n}\nheader:hover {\n  box-shadow: none !important;\n}\n.z-50 {\n  z-index: 50;\n}\n.dropdown-enter {\n  opacity: 0;\n  transform: translateY(-10px);\n}\n.dropdown-enter-active {\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 150ms ease-out, transform 150ms ease-out;\n}\n.router-link-active {\n  color: var(--brand-color);\n  border-bottom-color: var(--brand-color);\n}\n.max-h-96::-webkit-scrollbar {\n  width: 4px;\n}\n.max-h-96::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.max-h-96::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.max-h-96::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n.h-8 {\n  height: 2rem;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\nbutton {\n  box-shadow: none !important;\n}\nbutton:hover {\n  box-shadow: none !important;\n}\nbutton:focus {\n  box-shadow: none !important;\n}\ndiv:hover {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=app-header.component.css.map */\n"] }]
  }], () => [{ type: Router }], { showUserProfile: [{
    type: Input
  }], showCollapseButton: [{
    type: Input
  }], collapseToggle: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppHeaderComponent, { className: "AppHeaderComponent", filePath: "src/app/layouts/app-header/app-header.component.ts", lineNumber: 13 });
})();

export {
  AppHeaderComponent
};
//# sourceMappingURL=chunk-DVH64EMI.js.map
