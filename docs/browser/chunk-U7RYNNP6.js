import {
  AppHeaderComponent
} from "./chunk-TYKDBJTZ.js";
import {
  RouterModule
} from "./chunk-5EKLBSZZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-4DW7BALG.js";
import "./chunk-JUOZCKZE.js";
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
  ɵɵlistener,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-63I3BEBX.js";

// src/app/pages/auth/login/login.component.ts
var LoginComponent = class _LoginComponent {
  email = "";
  password = "";
  constructor() {
  }
  ngOnInit() {
  }
  onSocialLogin(provider) {
    console.log(`Login with ${provider} clicked`);
  }
  onLogin() {
    console.log("Login clicked:", { email: this.email, password: this.password });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 36, vars: 2, consts: [[1, "min-h-screen", "bg-blue-fill", "flex", "flex-col"], [1, "flex-1", "flex", "items-center", "justify-center", "px-4", "py-12"], [1, "w-full", "max-w-md"], [1, "text-center", "mb-8"], [1, "text-3xl", "font-bold", "text-text-strong", "mb-3"], [1, "text-text-weak", "text-lg"], [1, "bg-white", "rounded-2xl", "border", "border-stroke-weak", "p-8"], [1, "space-y-6", 3, "ngSubmit"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-text-strong", "mb-2"], ["type", "email", "id", "email", "name", "email", "placeholder", "Enter your email", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-stroke-weak", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", "focus:border-transparent", 3, "ngModelChange", "ngModel"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-text-strong", "mb-2"], ["type", "password", "id", "password", "name", "password", "placeholder", "Enter your password", "required", "", 1, "w-full", "px-4", "py-3", "border", "border-stroke-weak", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", "focus:border-transparent", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "w-full", "py-3", "px-4", "bg-brand", "text-white", "font-medium", "rounded-lg", "hover:bg-teal-700", "focus:outline-none", "focus:ring-2", "focus:ring-brand", "transition-colors"], [1, "mt-6"], [1, "text-center", "text-text-weak", "text-sm", "mb-4"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "button", 1, "flex", "items-center", "justify-center", "py-3", "px-4", "border", "border-stroke-weak", "rounded-lg", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-brand", "transition-colors", 3, "click"], [1, "text-sm", "font-medium"], [1, "text-center", "mt-6", "space-y-2"], [1, "text-sm", "text-text-weak"], ["href", "#", 1, "text-brand", "hover:text-teal-600"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "main", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "Log in or Sign up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, "Get better legal insights with comprehensive case research, attorney analytics & more.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 6)(10, "form", 7);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onLogin();
      });
      \u0275\u0275elementStart(11, "div")(12, "label", 8);
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div")(16, "label", 10);
      \u0275\u0275text(17, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275text(20, " Log in ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 13)(22, "div", 14);
      \u0275\u0275text(23, "or continue with");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "button", 16);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
        return ctx.onSocialLogin("google");
      });
      \u0275\u0275elementStart(26, "span", 17);
      \u0275\u0275text(27, "Google");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 16);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_28_listener() {
        return ctx.onSocialLogin("microsoft");
      });
      \u0275\u0275elementStart(29, "span", 17);
      \u0275\u0275text(30, "Microsoft");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(31, "div", 18)(32, "p", 19);
      \u0275\u0275text(33, " Have a question? ");
      \u0275\u0275elementStart(34, "a", 20);
      \u0275\u0275text(35, "Contact us");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
    }
  }, dependencies: [CommonModule, RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, AppHeaderComponent], styles: ["\n\n.min-h-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.w-16.h-16[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in-out;\n}\n.h-12[_ngcontent-%COMP%] {\n  height: 3rem;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n.bg-fill[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #E6E8F2 0%,\n      #F8F9FB 100%);\n}\n.bg-white[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.bg-white[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n@media (max-width: 640px) {\n  .p-8[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .rounded-2xl[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n*[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n*[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n*[_ngcontent-%COMP%] {\n  transition:\n    background-color 0.2s ease-in-out,\n    color 0.2s ease-in-out,\n    border-color 0.2s ease-in-out;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, RouterModule, FormsModule, AppHeaderComponent], template: `<!-- Login Page -->
<div class="min-h-screen bg-blue-fill flex flex-col">
  
  <!-- App Header (without border) -->
  <app-header></app-header>
  
  <!-- Main Content -->
  <main class="flex-1 flex items-center justify-center px-4 py-12">
    
    <div class="w-full max-w-md">
      
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-text-strong mb-3">Log in or Sign up</h1>
        <p class="text-text-weak text-lg">Get better legal insights with comprehensive case research, attorney analytics & more.</p>
      </div>

      <!-- Simple Login Form -->
      <div class="bg-white rounded-2xl border border-stroke-weak p-8">
        <form (ngSubmit)="onLogin()" class="space-y-6">
          
          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-text-strong mb-2">Email</label>
            <input
              type="email"
              id="email"
              [(ngModel)]="email"
              name="email"
              class="w-full px-4 py-3 border border-stroke-weak rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              placeholder="Enter your email"
              required>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-medium text-text-strong mb-2">Password</label>
            <input
              type="password"
              id="password"
              [(ngModel)]="password"
              name="password"
              class="w-full px-4 py-3 border border-stroke-weak rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              placeholder="Enter your password"
              required>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full py-3 px-4 bg-brand text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-brand transition-colors">
            Log in
          </button>

          <!-- Social Login Buttons -->
          <div class="mt-6">
            <div class="text-center text-text-weak text-sm mb-4">or continue with</div>
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                (click)="onSocialLogin('google')"
                class="flex items-center justify-center py-3 px-4 border border-stroke-weak rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand transition-colors">
                <span class="text-sm font-medium">Google</span>
              </button>
              <button
                type="button"
                (click)="onSocialLogin('microsoft')"
                class="flex items-center justify-center py-3 px-4 border border-stroke-weak rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand transition-colors">
                <span class="text-sm font-medium">Microsoft</span>
              </button>
            </div>
          </div>

        </form>
      </div>

      <!-- Additional Links -->
      <div class="text-center mt-6 space-y-2">
        <p class="text-sm text-text-weak">
          Have a question? 
          <a href="#" class="text-brand hover:text-teal-600">Contact us</a>
        </p>
      </div>

    </div>
  </main>
  
</div>`, styles: ["/* src/app/pages/auth/login/login.component.css */\n.min-h-screen {\n  min-height: 100vh;\n}\n.shadow-lg {\n  box-shadow: none !important;\n}\n.w-16.h-16:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in-out;\n}\n.h-12 {\n  height: 3rem;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n.bg-fill {\n  background:\n    linear-gradient(\n      135deg,\n      #E6E8F2 0%,\n      #F8F9FB 100%);\n}\n.bg-white {\n  box-shadow: none !important;\n}\n.bg-white:hover {\n  box-shadow: none !important;\n}\n@media (max-width: 640px) {\n  .p-8 {\n    padding: 1.5rem;\n  }\n  .rounded-2xl {\n    border-radius: 1rem;\n  }\n}\n* {\n  box-shadow: none !important;\n}\n*:hover {\n  box-shadow: none !important;\n}\n*:focus {\n  box-shadow: none !important;\n}\n* {\n  transition:\n    background-color 0.2s ease-in-out,\n    color 0.2s ease-in-out,\n    border-color 0.2s ease-in-out;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-U7RYNNP6.js.map
