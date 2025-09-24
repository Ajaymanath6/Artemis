import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-PBPJDBEJ.js";
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
var SearchBarComponent = class _SearchBarComponent {
  search = new EventEmitter();
  searchQuery = "";
  isProDropdownOpen = false;
  selectedProOption = "natural";
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
  // Close dropdown when clicking outside
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".relative")) {
      this.isProDropdownOpen = false;
    }
  }
  static \u0275fac = function SearchBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchBarComponent, selectors: [["app-search-bar"]], hostBindings: function SearchBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function SearchBarComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, outputs: { search: "search" }, decls: 21, vars: 5, consts: [[1, "w-4/5", "mx-auto"], [1, "relative"], [1, "bg-white", "border", "border-stroke-weak", "rounded-lg"], [1, "flex", "items-center", "px-4", "py-4"], [1, "flex-1", "relative"], ["type", "text", "placeholder", "Ask the researcher", 1, "w-full", "pr-4", "py-2", "bg-transparent", "focus:outline-none", "placeholder-opacity-30", "text-lg", "border-none", 3, "ngModelChange", "keyup", "ngModel"], [1, "flex", "items-center", "justify-between", "px-4", "pb-4", "relative"], [1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", 2, "outline", "none", "border", "#00000000", 3, "click"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#147885"], [1, "underline", "text-sm", "font-medium"], [1, "ri-arrow-down-s-line", 2, "color", "#353D59", "font-size", "14px"], ["class", "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", 4, "ngIf"], [1, "flex", "items-center", "space-x-3"], [1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", 2, "outline", "none", "border", "#00000000"], [1, "ri-filter-line", "text-lg", 2, "color", "#147885"], [1, "w-9", "h-9", "rounded-lg", "transition-colors", "flex", "items-center", "justify-center", 3, "click", "disabled"], [1, "ri-arrow-right-long-line", "text-white", "text-lg"], [1, "absolute", "top-full", "left-0", "mt-2", "w-80", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "z-50"], [1, "px-4", "py-3", "hover:bg-gray-50", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "space-x-3", "flex-1"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#69718C"], [1, "flex-1"], [1, "text-sm", "font-medium", "text-text-strong"], [1, "text-xs", "text-text-weak"], [1, "flex", "items-center"], ["type", "radio", "name", "proOption", "value", "natural", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"], [1, "ri-flow-chart", "text-lg", 2, "color", "#69718C"], ["type", "radio", "name", "proOption", "value", "advanced", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"]], template: function SearchBarComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(14, "div", 12)(15, "button", 13);
      \u0275\u0275element(16, "i", 14);
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "Filter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 15);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_19_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275element(20, "i", 16);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isProDropdownOpen);
      \u0275\u0275advance(6);
      \u0275\u0275styleProp("background-color", ctx.searchQuery && ctx.searchQuery.trim().length > 0 ? "#147885" : "rgba(20, 120, 133, 0.5)");
      \u0275\u0275property("disabled", !ctx.searchQuery || ctx.searchQuery.trim().length === 0);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.w-4\\/5[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.focus-within\\:ring-2[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.1);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.hover\\:bg-blue-600[_ngcontent-%COMP%]:hover {\n  background-color: #0F5F66;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #147885;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #147885;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #147885;\n}\n.rounded-r-lg[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n.border-none[_ngcontent-%COMP%] {\n  border: none;\n}\n.underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.ri-filter-line[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.border-0[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n}\n.border-0[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  accent-color: #147885;\n}\n.cursor-not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.ri-sparkling-fill[_ngcontent-%COMP%], \n.ri-user-line[_ngcontent-%COMP%], \n.ri-flow-chart[_ngcontent-%COMP%], \n.ri-arrow-down-s-line[_ngcontent-%COMP%], \n.ri-arrow-right-long-line[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.focus-within\\:ring-2[_ngcontent-%COMP%]:focus-within {\n  box-shadow: none;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n.placeholder-opacity-30[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.3;\n}\n.w-9[_ngcontent-%COMP%] {\n  width: 2.25rem;\n}\n.h-9[_ngcontent-%COMP%] {\n  height: 2.25rem;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n@media (max-width: 768px) {\n  .w-4\\/5[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 0 1rem;\n  }\n  .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .border-l[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid;\n  }\n  .rounded-r-lg[_ngcontent-%COMP%] {\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=search-bar.component.css.map */"] });
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
            class="flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0" 
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
          <button class="flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0" style="outline: none; border: #00000000;">
            <i class="ri-filter-line text-lg" style="color: #147885;"></i>
            <span class="underline text-sm font-medium">Filter</span>
          </button>

          <!-- Search Button -->
          <button 
            [disabled]="!searchQuery || searchQuery.trim().length === 0"
            (click)="onSearch()"
            class="w-9 h-9 rounded-lg transition-colors flex items-center justify-center"
            [style.background-color]="searchQuery && searchQuery.trim().length > 0 ? '#147885' : 'rgba(20, 120, 133, 0.5)'">
            <i class="ri-arrow-right-long-line text-white text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/components/ui/search-bar/search-bar.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.focus-within\\:ring-2:focus-within {\n  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.1);\n}\ninput:focus {\n  outline: none;\n}\n.hover\\:bg-blue-600:hover {\n  background-color: #0F5F66;\n}\n.text-brand {\n  color: #147885;\n}\n.hover\\:text-brand:hover {\n  color: #147885;\n}\n.bg-brand {\n  background-color: #147885;\n}\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-none {\n  border: none;\n}\n.underline {\n  text-decoration: underline;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.ri-filter-line {\n  font-size: 1.125rem;\n}\n.border-0 {\n  border: none !important;\n  outline: none !important;\n}\n.border-0:focus {\n  outline: none !important;\n  border: none !important;\n}\n.z-50 {\n  z-index: 50;\n}\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\ninput[type=radio] {\n  accent-color: #147885;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.ri-sparkling-fill,\n.ri-user-line,\n.ri-flow-chart,\n.ri-arrow-down-s-line,\n.ri-arrow-right-long-line {\n  font-size: 1.125rem;\n}\n.focus-within\\:ring-2:focus-within {\n  box-shadow: none;\n}\ninput:focus {\n  outline: none !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n.placeholder-opacity-30::placeholder {\n  opacity: 0.3;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n@media (max-width: 768px) {\n  .w-4\\/5 {\n    width: 95%;\n    padding: 0 1rem;\n  }\n  .flex {\n    flex-direction: column;\n  }\n  .border-l {\n    border-left: none;\n    border-top: 1px solid;\n  }\n  .rounded-r-lg {\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=search-bar.component.css.map */\n"] }]
  }], null, { search: [{
    type: Output
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src/app/components/ui/search-bar/search-bar.component.ts", lineNumber: 12 });
})();

export {
  SearchBarComponent
};
//# sourceMappingURL=chunk-AKBHH5PF.js.map
