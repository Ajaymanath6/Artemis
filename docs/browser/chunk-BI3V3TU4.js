import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-E4BREK47.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  HostListener,
  NgIf,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-T43XKO7X.js";

// src/app/components/ui/search-bar/search-bar.component.ts
function SearchBarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275listener("click", function SearchBarComponent_div_13_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectProOption("natural"));
    });
    \u0275\u0275elementStart(2, "div", 12)(3, "div", 19);
    \u0275\u0275element(4, "i", 20);
    \u0275\u0275elementStart(5, "div", 21)(6, "h4", 22);
    \u0275\u0275text(7, "Natural Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 23);
    \u0275\u0275text(9, "Standard natural language processing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275element(11, "input", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275listener("click", function SearchBarComponent_div_13_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectProOption("advanced"));
    });
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 19);
    \u0275\u0275element(15, "i", 26);
    \u0275\u0275elementStart(16, "div", 21)(17, "h4", 22);
    \u0275\u0275text(18, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 23);
    \u0275\u0275text(20, "Advanced AI features and capabilities");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 24);
    \u0275\u0275element(22, "input", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r1.selectedProOption === "natural");
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r1.selectedProOption === "advanced");
  }
}
function SearchBarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275listener("click", function SearchBarComponent_div_21_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFilterPanel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31)(4, "h2", 32);
    \u0275\u0275text(5, "Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function SearchBarComponent_div_21_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFilterPanel());
    });
    \u0275\u0275element(7, "i", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 35)(9, "div", 36)(10, "div")(11, "h3", 37);
    \u0275\u0275text(12, "Date Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38);
    \u0275\u0275element(14, "input", 39)(15, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "h3", 37);
    \u0275\u0275text(18, "Case Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 38)(20, "label", 24);
    \u0275\u0275element(21, "input", 40);
    \u0275\u0275elementStart(22, "span", 41);
    \u0275\u0275text(23, "Civil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 24);
    \u0275\u0275element(25, "input", 40);
    \u0275\u0275elementStart(26, "span", 41);
    \u0275\u0275text(27, "Criminal");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "label", 24);
    \u0275\u0275element(29, "input", 40);
    \u0275\u0275elementStart(30, "span", 41);
    \u0275\u0275text(31, "Corporate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div")(33, "h3", 37);
    \u0275\u0275text(34, "Jurisdiction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 42)(36, "option");
    \u0275\u0275text(37, "All Jurisdictions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option");
    \u0275\u0275text(39, "Federal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option");
    \u0275\u0275text(41, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option");
    \u0275\u0275text(43, "Local");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "div", 43)(45, "div", 44)(46, "button", 45);
    \u0275\u0275listener("click", function SearchBarComponent_div_21_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(47, " Clear All ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 46);
    \u0275\u0275listener("click", function SearchBarComponent_div_21_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(49, " Apply Filters ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("translate-x-0", ctx_r1.isFilterPanelOpen)("translate-x-full", !ctx_r1.isFilterPanelOpen);
  }
}
var SearchBarComponent = class _SearchBarComponent {
  search = new EventEmitter();
  searchQuery = "";
  isProDropdownOpen = false;
  selectedProOption = "natural";
  isFilterPanelOpen = false;
  onSearch() {
    if (this.searchQuery && this.searchQuery.trim().length > 0) {
      this.search.emit(this.searchQuery);
    }
  }
  onKeyPress(event) {
    if (event.key === "Enter") {
      this.onSearch();
    }
  }
  clearSearch() {
    this.searchQuery = "";
    this.search.emit("");
  }
  toggleProDropdown() {
    this.isProDropdownOpen = !this.isProDropdownOpen;
  }
  selectProOption(option) {
    this.selectedProOption = option;
    this.isProDropdownOpen = false;
    console.log("Pro option selected:", option);
  }
  toggleFilterPanel() {
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
  }
  closeFilterPanel() {
    this.isFilterPanelOpen = false;
  }
  clearFilters() {
    console.log("Clearing all filters");
  }
  applyFilters() {
    console.log("Applying filters");
    this.isFilterPanelOpen = false;
  }
  // Close dropdown when clicking outside
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".relative")) {
      this.isProDropdownOpen = false;
    }
  }
  // Close filter panel on escape key
  onEscapeKey(event) {
    if (this.isFilterPanelOpen) {
      this.closeFilterPanel();
    }
  }
  static \u0275fac = function SearchBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchBarComponent, selectors: [["app-search-bar"]], hostBindings: function SearchBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SearchBarComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument)("keydown.escape", function SearchBarComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKey($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, outputs: { search: "search" }, decls: 22, vars: 6, consts: [[1, "w-4/5", "mx-auto"], [1, "relative"], [1, "bg-white", "border", "border-stroke-weak", "rounded-lg"], [1, "flex", "items-center", "px-4", "py-4"], [1, "flex-1", "relative"], ["type", "text", "placeholder", "Ask the researcher", 1, "w-full", "pr-4", "py-2", "bg-transparent", "focus:outline-none", "placeholder-opacity-30", "text-lg", "border-none", 3, "ngModelChange", "keyup", "ngModel"], [1, "flex", "items-center", "justify-between", "px-4", "pb-4", "relative"], [1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", "px-3", "py-2", "rounded-lg", "hover:bg-gray-50", 2, "outline", "none", "border", "#00000000", 3, "click"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#147885"], [1, "underline", "text-sm", "font-medium"], [1, "ri-arrow-down-s-line", 2, "color", "#353D59", "font-size", "14px"], ["class", "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", 4, "ngIf"], [1, "flex", "items-center", "space-x-3"], [1, "ri-filter-line", "text-lg", 2, "color", "#147885"], [1, "w-9", "h-9", "rounded-lg", "transition-colors", "flex", "items-center", "justify-center", "ml-3", 3, "click", "disabled"], [1, "ri-arrow-right-long-line", "text-white", "text-lg"], ["class", "fixed inset-0 z-50 overflow-hidden", "style", "left: 206px; top: 64px;", 4, "ngIf"], [1, "absolute", "top-full", "left-0", "mt-2", "w-80", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "z-50"], [1, "px-4", "py-3", "hover:bg-gray-50", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "space-x-3", "flex-1"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#69718C"], [1, "flex-1"], [1, "text-sm", "font-medium", "text-text-strong"], [1, "text-xs", "text-text-weak"], [1, "flex", "items-center"], ["type", "radio", "name", "proOption", "value", "natural", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"], [1, "ri-flow-chart", "text-lg", 2, "color", "#69718C"], ["type", "radio", "name", "proOption", "value", "advanced", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"], [1, "fixed", "inset-0", "z-50", "overflow-hidden", 2, "left", "206px", "top", "64px"], [1, "absolute", "inset-0", "bg-gray-900", "bg-opacity-10", "transition-opacity", 3, "click"], [1, "absolute", "right-0", "top-0", "h-full", "w-80", "bg-white", "shadow-xl", "transform", "transition-all", "duration-300", "ease-in-out"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-gray-200"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "click"], [1, "ri-close-line", "text-xl", "text-gray-500"], [1, "p-6"], [1, "space-y-6"], [1, "text-sm", "font-medium", "text-gray-900", "mb-3"], [1, "space-y-2"], ["type", "date", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand"], ["type", "checkbox", 1, "rounded", "border-gray-300", "text-brand", "focus:ring-brand"], [1, "ml-2", "text-sm", "text-gray-700"], [1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand"], [1, "absolute", "bottom-0", "left-0", "right-0", "px-6", "py-4", "border-t", "border-gray-200", "bg-white"], [1, "flex", "space-x-3"], [1, "flex-1", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex-1", "px-4", "py-2", "bg-brand", "text-white", "rounded-lg", "hover:bg-teal-700", "transition-colors", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup", function SearchBarComponent_Template_input_keyup_5_listener($event) {
        return ctx.onKeyPress($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 1)(8, "button", 7);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_8_listener() {
        return ctx.toggleProDropdown();
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "Natural Language");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, SearchBarComponent_div_13_Template, 23, 2, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 12)(15, "button", 7);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_15_listener() {
        return ctx.toggleFilterPanel();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "Filter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_19_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(21, SearchBarComponent_div_21_Template, 50, 4, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isProDropdownOpen);
      \u0275\u0275advance(6);
      \u0275\u0275styleProp("background-color", ctx.searchQuery && ctx.searchQuery.trim().length > 0 ? "#147885" : "rgba(20, 120, 133, 0.5)");
      \u0275\u0275property("disabled", !ctx.searchQuery || ctx.searchQuery.trim().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isFilterPanelOpen);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel], styles: [`

[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.w-4\\/5[_ngcontent-%COMP%] {
  width: 80%;
}
.focus-within\\:ring-2[_ngcontent-%COMP%]:focus-within {
  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.1);
}
input[_ngcontent-%COMP%]:focus {
  outline: none;
}
.hover\\:bg-blue-600[_ngcontent-%COMP%]:hover {
  background-color: #0F5F66;
}
.text-brand[_ngcontent-%COMP%] {
  color: #147885;
}
.hover\\:text-brand[_ngcontent-%COMP%]:hover {
  color: #147885;
}
.bg-brand[_ngcontent-%COMP%] {
  background-color: #147885;
}
.rounded-r-lg[_ngcontent-%COMP%] {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.border-l[_ngcontent-%COMP%] {
  border-left-width: 1px;
}
.border-stroke-weak[_ngcontent-%COMP%] {
  border-color: #ADB4CC;
}
.border-t[_ngcontent-%COMP%] {
  border-top-width: 1px;
}
.border-none[_ngcontent-%COMP%] {
  border: none;
}
.underline[_ngcontent-%COMP%] {
  text-decoration: underline;
}
.justify-between[_ngcontent-%COMP%] {
  justify-content: space-between;
}
.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-left: 0.5rem;
}
.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-left: 0.75rem;
}
.ri-filter-line[_ngcontent-%COMP%] {
  font-size: 1.125rem;
}
.border-0[_ngcontent-%COMP%] {
  border: none !important;
  outline: none !important;
}
.border-0[_ngcontent-%COMP%]:focus {
  outline: none !important;
  border: none !important;
}
.z-50[_ngcontent-%COMP%] {
  z-index: 50;
}
.shadow-lg[_ngcontent-%COMP%] {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
}
input[type=radio][_ngcontent-%COMP%] {
  accent-color: #147885;
}
.cursor-not-allowed[_ngcontent-%COMP%] {
  cursor: not-allowed;
}
.ri-sparkling-fill[_ngcontent-%COMP%], 
.ri-user-line[_ngcontent-%COMP%], 
.ri-flow-chart[_ngcontent-%COMP%], 
.ri-arrow-down-s-line[_ngcontent-%COMP%], 
.ri-arrow-right-long-line[_ngcontent-%COMP%], 
.ri-close-line[_ngcontent-%COMP%] {
  font-size: 1.125rem;
}
.focus-within\\:ring-2[_ngcontent-%COMP%]:focus-within {
  box-shadow: none;
}
input[_ngcontent-%COMP%]:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
.placeholder-opacity-30[_ngcontent-%COMP%]::placeholder {
  opacity: 0.3;
}
.w-9[_ngcontent-%COMP%] {
  width: 2.25rem;
}
.h-9[_ngcontent-%COMP%] {
  height: 2.25rem;
}
.border-gray-200[_ngcontent-%COMP%] {
  border-color: #e5e7eb;
}
.text-lg[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {
  background-color: #f9fafb;
}
.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
}
.hover\\:bg-teal-700[_ngcontent-%COMP%]:hover {
  background-color: #0f766e;
}
.bg-opacity-50[_ngcontent-%COMP%] {
  background-opacity: 0.5;
}
.bg-opacity-10[_ngcontent-%COMP%] {
  background-opacity: 0.1;
}
.shadow-xl[_ngcontent-%COMP%] {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.transform[_ngcontent-%COMP%] {
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transition-all[_ngcontent-%COMP%] {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform[_ngcontent-%COMP%] {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity[_ngcontent-%COMP%] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300[_ngcontent-%COMP%] {
  transition-duration: 300ms;
}
.ease-in-out[_ngcontent-%COMP%] {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.translate-x-0[_ngcontent-%COMP%] {
  --tw-translate-x: 0px;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-full[_ngcontent-%COMP%] {
  --tw-translate-x: 100%;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.fixed[_ngcontent-%COMP%] {
  position: fixed;
}
.absolute[_ngcontent-%COMP%] {
  position: absolute;
}
.inset-0[_ngcontent-%COMP%] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.right-0[_ngcontent-%COMP%] {
  right: 0;
}
.top-0[_ngcontent-%COMP%] {
  top: 0;
}
.bottom-0[_ngcontent-%COMP%] {
  bottom: 0;
}
.left-0[_ngcontent-%COMP%] {
  left: 0;
}
.w-80[_ngcontent-%COMP%] {
  width: 20rem;
}
.h-full[_ngcontent-%COMP%] {
  height: 100%;
}
.ml-3[_ngcontent-%COMP%] {
  margin-left: 0.75rem;
}
.space-y-6[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-top: 1.5rem;
}
.space-y-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
}
.mb-3[_ngcontent-%COMP%] {
  margin-bottom: 0.75rem;
}
.text-gray-900[_ngcontent-%COMP%] {
  color: fffff;
}
.text-gray-700[_ngcontent-%COMP%] {
  color: #374151;
}
.text-gray-500[_ngcontent-%COMP%] {
  color: #6b7280;
}
.border-gray-200[_ngcontent-%COMP%] {
  border-color: #e5e7eb;
}
.border-gray-300[_ngcontent-%COMP%] {
  border-color: #d1d5db;
}
.bg-black[_ngcontent-%COMP%] {
  background-color: #000000;
}
.bg-gray-900[_ngcontent-%COMP%] {
  background-color: fffff;
}
.focus\\:ring-brand[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.2);
}
input[type=checkbox][_ngcontent-%COMP%] {
  accent-color: #147885;
}
select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.text-lg[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
@media (max-width: 768px) {
  .w-4\\/5[_ngcontent-%COMP%] {
    width: 95%;
    padding: 0 1rem;
  }
  .flex[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .border-l[_ngcontent-%COMP%] {
    border-left: none;
    border-top: 1px solid;
  }
  .rounded-r-lg[_ngcontent-%COMP%] {
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;
  }
}
/*# sourceMappingURL=search-bar.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarComponent, [{
    type: Component,
    args: [{ selector: "app-search-bar", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- Search Bar Component -->
<div class="w-4/5 mx-auto">
  <!-- Main Search Container -->
  <div class="relative">
    <!-- Search Input Area -->
    <div class="bg-white border border-stroke-weak rounded-lg">
      
      <!-- Top Section - Search Input -->
      <div class="flex items-center px-4 py-4">
        <div class="flex-1 relative">
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (keyup)="onKeyPress($event)"
            placeholder="Ask the researcher"
            class="w-full pr-4 py-2 bg-transparent focus:outline-none placeholder-opacity-30 text-lg border-none"
          />
        </div>
      </div>

      <!-- Pro and Filter Section - Same Line -->
      <div class="flex items-center justify-between px-4 pb-4 relative">
        <!-- Pro Section -->
        <div class="relative">
          <button 
            (click)="toggleProDropdown()"
            class="flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0 px-3 py-2 rounded-lg hover:bg-gray-50" 
            style="outline: none; border: #00000000;">
            <i class="ri-sparkling-fill text-lg" style="color: #147885;"></i>
            <span class="underline text-sm font-medium">Natural Language</span>
            <i class="ri-arrow-down-s-line" style="color: #353D59; font-size: 14px;"></i>
          </button>

          <!-- Pro Dropdown -->
          <div 
            *ngIf="isProDropdownOpen"
            class="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            
            <!-- Option 1 -->
            <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer" (click)="selectProOption('natural')">
              <div class="flex items-center space-x-3">
                <div class="flex items-center space-x-3 flex-1">
                  <i class="ri-sparkling-fill text-lg" style="color: #69718C;"></i>
                  <div class="flex-1">
                    <h4 class="text-sm font-medium text-text-strong">Natural Language</h4>
                    <p class="text-xs text-text-weak">Standard natural language processing</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <input 
                    type="radio" 
                    name="proOption" 
                    value="natural"
                    [checked]="selectedProOption === 'natural'"
                    class="w-4 h-4 text-brand focus:ring-brand border-gray-300">
                </div>
              </div>
            </div>

            <!-- Option 2 -->
            <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer" (click)="selectProOption('advanced')">
              <div class="flex items-center space-x-3">
                <div class="flex items-center space-x-3 flex-1">
                  <i class="ri-flow-chart text-lg" style="color: #69718C;"></i>
                  <div class="flex-1">
                    <h4 class="text-sm font-medium text-text-strong">Advanced</h4>
                    <p class="text-xs text-text-weak">Advanced AI features and capabilities</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <input 
                    type="radio" 
                    name="proOption" 
                    value="advanced"
                    [checked]="selectedProOption === 'advanced'"
                    class="w-4 h-4 text-brand focus:ring-brand border-gray-300">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter and Search Section -->
        <div class="flex items-center space-x-3">
          <!-- Filter Section -->
          <button 
            (click)="toggleFilterPanel()"
            class="flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0 px-3 py-2 rounded-lg hover:bg-gray-50" 
            style="outline: none; border: #00000000;">
            <i class="ri-filter-line text-lg" style="color: #147885;"></i>
            <span class="underline text-sm font-medium">Filter</span>
          </button>

          <!-- Search Button -->
          <button 
            [disabled]="!searchQuery || searchQuery.trim().length === 0"
            (click)="onSearch()"
            class="w-9 h-9 rounded-lg transition-colors flex items-center justify-center ml-3"
            [style.background-color]="searchQuery && searchQuery.trim().length > 0 ? '#147885' : 'rgba(20, 120, 133, 0.5)'">
            <i class="ri-arrow-right-long-line text-white text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Side Panel - positioned relative to parent container -->
  <div 
    *ngIf="isFilterPanelOpen"
    class="fixed inset-0 z-50 overflow-hidden"
    style="left: 206px; top: 64px;">
    
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-gray-900 bg-opacity-10 transition-opacity"
      (click)="closeFilterPanel()">
    </div>
    
    <!-- Side Panel -->
    <div class="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-all duration-300 ease-in-out"
         [class.translate-x-0]="isFilterPanelOpen"
         [class.translate-x-full]="!isFilterPanelOpen">
      
      <!-- Panel Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Filters</h2>
        <button 
          (click)="closeFilterPanel()"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <i class="ri-close-line text-xl text-gray-500"></i>
        </button>
      </div>
      
      <!-- Panel Content -->
      <div class="p-6">
        <div class="space-y-6">
          
          <!-- Date Range Filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Date Range</h3>
            <div class="space-y-2">
              <input 
                type="date" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              <input 
                type="date" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
            </div>
          </div>
          
          <!-- Case Type Filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Case Type</h3>
            <div class="space-y-2">
              <label class="flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-brand focus:ring-brand">
                <span class="ml-2 text-sm text-gray-700">Civil</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-brand focus:ring-brand">
                <span class="ml-2 text-sm text-gray-700">Criminal</span>
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="rounded border-gray-300 text-brand focus:ring-brand">
                <span class="ml-2 text-sm text-gray-700">Corporate</span>
              </label>
            </div>
          </div>
          
          <!-- Jurisdiction Filter -->
          <div>
            <h3 class="text-sm font-medium text-gray-900 mb-3">Jurisdiction</h3>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              <option>All Jurisdictions</option>
              <option>Federal</option>
              <option>State</option>
              <option>Local</option>
            </select>
          </div>
          
        </div>
      </div>
      
      <!-- Panel Footer -->
      <div class="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-gray-200 bg-white">
        <div class="flex space-x-3">
          <button 
            (click)="clearFilters()"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Clear All
          </button>
          <button 
            (click)="applyFilters()"
            class="flex-1 px-4 py-2 bg-brand text-white rounded-lg hover:bg-teal-700 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
      
    </div>
  </div>
</div>
`, styles: [`/* src/app/components/ui/search-bar/search-bar.component.css */
:host {
  display: block;
  width: 100%;
}
.w-4\\/5 {
  width: 80%;
}
.focus-within\\:ring-2:focus-within {
  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.1);
}
input:focus {
  outline: none;
}
.hover\\:bg-blue-600:hover {
  background-color: #0F5F66;
}
.text-brand {
  color: #147885;
}
.hover\\:text-brand:hover {
  color: #147885;
}
.bg-brand {
  background-color: #147885;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.border-l {
  border-left-width: 1px;
}
.border-stroke-weak {
  border-color: #ADB4CC;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border: none;
}
.underline {
  text-decoration: underline;
}
.justify-between {
  justify-content: space-between;
}
.space-x-2 > * + * {
  margin-left: 0.5rem;
}
.space-x-3 > * + * {
  margin-left: 0.75rem;
}
.ri-filter-line {
  font-size: 1.125rem;
}
.border-0 {
  border: none !important;
  outline: none !important;
}
.border-0:focus {
  outline: none !important;
  border: none !important;
}
.z-50 {
  z-index: 50;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.hover\\:bg-gray-50:hover {
  background-color: #f9fafb;
}
input[type=radio] {
  accent-color: #147885;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.ri-sparkling-fill,
.ri-user-line,
.ri-flow-chart,
.ri-arrow-down-s-line,
.ri-arrow-right-long-line,
.ri-close-line {
  font-size: 1.125rem;
}
.focus-within\\:ring-2:focus-within {
  box-shadow: none;
}
input:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
.placeholder-opacity-30::placeholder {
  opacity: 0.3;
}
.w-9 {
  width: 2.25rem;
}
.h-9 {
  height: 2.25rem;
}
.border-gray-200 {
  border-color: #e5e7eb;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.hover\\:bg-gray-50:hover {
  background-color: #f9fafb;
}
.hover\\:bg-gray-100:hover {
  background-color: #f3f4f6;
}
.hover\\:bg-teal-700:hover {
  background-color: #0f766e;
}
.bg-opacity-50 {
  background-opacity: 0.5;
}
.bg-opacity-10 {
  background-opacity: 0.1;
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.transform {
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-full {
  --tw-translate-x: 100%;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.right-0 {
  right: 0;
}
.top-0 {
  top: 0;
}
.bottom-0 {
  bottom: 0;
}
.left-0 {
  left: 0;
}
.w-80 {
  width: 20rem;
}
.h-full {
  height: 100%;
}
.ml-3 {
  margin-left: 0.75rem;
}
.space-y-6 > * + * {
  margin-top: 1.5rem;
}
.space-y-3 > * + * {
  margin-top: 0.75rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.text-gray-900 {
  color: fffff;
}
.text-gray-700 {
  color: #374151;
}
.text-gray-500 {
  color: #6b7280;
}
.border-gray-200 {
  border-color: #e5e7eb;
}
.border-gray-300 {
  border-color: #d1d5db;
}
.bg-black {
  background-color: #000000;
}
.bg-gray-900 {
  background-color: fffff;
}
.focus\\:ring-brand:focus {
  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.2);
}
input[type=checkbox] {
  accent-color: #147885;
}
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
@media (max-width: 768px) {
  .w-4\\/5 {
    width: 95%;
    padding: 0 1rem;
  }
  .flex {
    flex-direction: column;
  }
  .border-l {
    border-left: none;
    border-top: 1px solid;
  }
  .rounded-r-lg {
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;
  }
}
/*# sourceMappingURL=search-bar.component.css.map */
`] }]
  }], null, { search: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src/app/components/ui/search-bar/search-bar.component.ts", lineNumber: 12 });
})();

export {
  SearchBarComponent
};
//# sourceMappingURL=chunk-BI3V3TU4.js.map
