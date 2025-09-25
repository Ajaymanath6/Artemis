import {
  Router
} from "./chunk-5EKLBSZZ.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-63I3BEBX.js";

// src/app/pages/loading/loading.component.ts
var LoadingComponent = class _LoadingComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    setTimeout(() => {
      const nextRoute = sessionStorage.getItem("nextRoute");
      if (nextRoute) {
        sessionStorage.removeItem("nextRoute");
        this.router.navigate([nextRoute]);
      } else {
        this.router.navigate(["/dashboard"]);
      }
    }, 3e3);
  }
  static \u0275fac = function LoadingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingComponent, selectors: [["app-loading"]], decls: 17, vars: 0, consts: [[1, "min-h-screen", "bg-white", "flex", "flex-col", "items-center", "justify-center"], [1, "text-center"], [1, "mb-8"], ["src", "assets/images/logo1.svg", "alt", "UniCourt Logo", 1, "h-24", "w-auto", "animate-pulse"], [1, "mb-4"], [1, "text-2xl", "font-bold", "text-text-strong", "mb-2"], [1, "text-text-weak"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "flex", "space-x-1"], [1, "w-2", "h-2", "bg-brand", "rounded-full", "animate-bounce"], [1, "w-2", "h-2", "bg-brand", "rounded-full", "animate-bounce", 2, "animation-delay", "0.1s"], [1, "w-2", "h-2", "bg-brand", "rounded-full", "animate-bounce", 2, "animation-delay", "0.2s"], [1, "mt-6", "text-sm", "text-text-weak"]], template: function LoadingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6, "Welcome to UniCourt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Setting up your workspace...");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275element(11, "div", 9)(12, "div", 10)(13, "div", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 12)(15, "p");
      \u0275\u0275text(16, "Please wait while we prepare your dashboard");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.animate-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.animate-bounce[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bounce 1.4s infinite ease-in-out both;\n}\n.animate-bounce[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.animate-bounce[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n.animate-bounce[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0s;\n}\n.h-24[_ngcontent-%COMP%] {\n  height: 6rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n@media (max-width: 640px) {\n  .h-24[_ngcontent-%COMP%] {\n    height: 4rem;\n  }\n  .text-2xl[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .text-sm[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n.min-h-screen[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n}\n/*# sourceMappingURL=loading.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingComponent, [{
    type: Component,
    args: [{ selector: "app-loading", standalone: true, imports: [CommonModule], template: '<!-- Loading Animation Page -->\n<div class="min-h-screen bg-white flex flex-col items-center justify-center">\n  <!-- Main Content Container -->\n  <div class="text-center">\n\n    <!-- Pulsing Logo Animation -->\n    <div class="mb-8">\n      <img\n        src="assets/images/logo1.svg"\n        alt="UniCourt Logo"\n        class="h-24 w-auto animate-pulse"\n      />\n    </div>\n\n    <!-- Loading Text -->\n    <div class="mb-4">\n      <h1 class="text-2xl font-bold text-text-strong mb-2">Welcome to UniCourt</h1>\n      <p class="text-text-weak">Setting up your workspace...</p>\n    </div>\n\n    <!-- Loading Indicator -->\n    <div class="flex items-center justify-center space-x-2">\n      <div class="flex space-x-1">\n        <div class="w-2 h-2 bg-brand rounded-full animate-bounce"></div>\n        <div class="w-2 h-2 bg-brand rounded-full animate-bounce" style="animation-delay: 0.1s"></div>\n        <div class="w-2 h-2 bg-brand rounded-full animate-bounce" style="animation-delay: 0.2s"></div>\n      </div>\n    </div>\n\n    <!-- Loading Message -->\n    <div class="mt-6 text-sm text-text-weak">\n      <p>Please wait while we prepare your dashboard</p>\n    </div>\n\n  </div>\n</div>\n', styles: ["/* src/app/pages/loading/loading.component.css */\n:host {\n  display: block;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes bounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.animate-bounce {\n  animation: bounce 1.4s infinite ease-in-out both;\n}\n.animate-bounce:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.animate-bounce:nth-child(2) {\n  animation-delay: -0.16s;\n}\n.animate-bounce:nth-child(3) {\n  animation-delay: 0s;\n}\n.h-24 {\n  height: 6rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n@media (max-width: 640px) {\n  .h-24 {\n    height: 4rem;\n  }\n  .text-2xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n.min-h-screen {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fafc 100%);\n}\n/*# sourceMappingURL=loading.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingComponent, { className: "LoadingComponent", filePath: "src/app/pages/loading/loading.component.ts", lineNumber: 12 });
})();
export {
  LoadingComponent
};
//# sourceMappingURL=chunk-YGD45OFD.js.map
