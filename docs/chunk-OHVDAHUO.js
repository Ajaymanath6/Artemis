import {
  SearchBarComponent
} from "./chunk-XGQBLBHU.js";
import "./chunk-53JHYZBU.js";
import "./chunk-EQUADVRM.js";
import {
  SideNavComponent
} from "./chunk-POO7ABQP.js";
import {
  AppHeaderComponent
} from "./chunk-UQQHCV5Z.js";
import {
  Router
} from "./chunk-DDDO6NM3.js";
import "./chunk-NB6NNANN.js";
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-Z6WLR7UX.js";

// src/app/layouts/cases-layout/cases-layout.component.ts
var _c0 = ["*"];
var CasesLayoutComponent = class _CasesLayoutComponent {
  viewMode = "grid";
  viewModeChange = new EventEmitter();
  onToggleViewMode(mode) {
    this.viewModeChange.emit(mode);
  }
  static \u0275fac = function CasesLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasesLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesLayoutComponent, selectors: [["app-cases-layout"]], inputs: { viewMode: "viewMode" }, outputs: { viewModeChange: "viewModeChange" }, ngContentSelectors: _c0, decls: 16, vars: 4, consts: [[1, "flex-1", "overflow-y-auto", "bg-cases-page"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "pb-8"], [1, "flex", "items-center", "justify-between", "border-b", "border-gray-200", "pb-4", "mb-4"], [1, "flex", "items-center", "space-x-2"], [1, "text-gray-700", "font-semibold"], [1, "flex", "items-center", "bg-white", "rounded-lg", "border", "border-gray-200", "overflow-hidden"], [1, "px-3", "py-2", "flex", "items-center", "space-x-2", "transition-colors", 3, "click"], [1, "ri-layout-grid-line", "text-base"], [1, "text-sm", "font-medium"], [1, "px-3", "py-2", "flex", "items-center", "space-x-2", "transition-colors", "border-l", "border-gray-200", 3, "click"], [1, "ri-layout-row-line", "text-base"]], template: function CasesLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "Results");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "button", 6);
      \u0275\u0275listener("click", function CasesLayoutComponent_Template_button_click_7_listener() {
        return ctx.onToggleViewMode("grid");
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Grid");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function CasesLayoutComponent_Template_button_click_11_listener() {
        return ctx.onToggleViewMode("table");
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14, "Table");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275projection(15);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classMap(ctx.viewMode === "grid" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500 hover:text-gray-700");
      \u0275\u0275advance(4);
      \u0275\u0275classMap(ctx.viewMode === "table" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500 hover:text-gray-700");
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  flex: 1 1 0%;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.overflow-y-auto[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n.bg-cases-page[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n.max-w-7xl[_ngcontent-%COMP%] {\n  max-width: 80rem;\n}\n.mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-8[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.pb-8[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n@media (min-width: 640px) {\n  .sm\\:px-6[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:px-8[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n[_nghost-%COMP%] {\n  scroll-behavior: smooth;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pb-4[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.hover\\\\[_ngcontent-%COMP%]:text-gray-700:hover {\n  color: #374151;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n/*# sourceMappingURL=cases-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasesLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-cases-layout", standalone: true, imports: [CommonModule], template: `<!-- Cases Layout - Scrollable Results Container -->
<div class="flex-1 overflow-y-auto bg-cases-page">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
    
    <!-- Results Controls -->
    <div class="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
      <!-- Results Text -->
      <div class="flex items-center space-x-2">
        <span class="text-gray-700 font-semibold">Results</span>
      </div>
      
      <!-- View Toggle Buttons -->
      <div class="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
        <button 
          (click)="onToggleViewMode('grid')"
          class="px-3 py-2 flex items-center space-x-2 transition-colors"
          [class]="viewMode === 'grid' ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-500 hover:text-gray-700'">
          <i class="ri-layout-grid-line text-base"></i>
          <span class="text-sm font-medium">Grid</span>
        </button>
        <button 
          (click)="onToggleViewMode('table')"
          class="px-3 py-2 flex items-center space-x-2 transition-colors border-l border-gray-200"
          [class]="viewMode === 'table' ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-500 hover:text-gray-700'">
          <i class="ri-layout-row-line text-base"></i>
          <span class="text-sm font-medium">Table</span>
        </button>
      </div>
    </div>
    
    <!-- Content will be projected here -->
    <ng-content></ng-content>
  </div>
</div>
`, styles: ["/* src/app/layouts/cases-layout/cases-layout.component.css */\n:host {\n  display: block;\n  flex: 1 1 0%;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.bg-cases-page {\n  background-color: #F8F8F8;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.pb-8 {\n  padding-bottom: 2rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n@media (min-width: 640px) {\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n:host {\n  scroll-behavior: smooth;\n}\n.flex {\n  display: flex;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.hover\\\\:text-gray-700:hover {\n  color: #374151;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n/*# sourceMappingURL=cases-layout.component.css.map */\n"] }]
  }], null, { viewMode: [{
    type: Input
  }], viewModeChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesLayoutComponent, { className: "CasesLayoutComponent" });
})();

// src/app/components/ui/cases-header/cases-header.component.ts
var CasesHeaderComponent = class _CasesHeaderComponent {
  // Header inputs
  isSidebarCollapsed = false;
  projectName = "";
  currentSearchQuery = "";
  hasSearched = false;
  // Track if user has searched
  showCollapseButton = false;
  // Show collapse button when results are visible
  // Header outputs
  sidebarToggle = new EventEmitter();
  projectClick = new EventEmitter();
  searchQueryClick = new EventEmitter();
  // Search outputs
  search = new EventEmitter();
  expandSearch = new EventEmitter();
  collapseSearch = new EventEmitter();
  onSidebarToggle() {
    this.sidebarToggle.emit();
  }
  onProjectClick() {
    this.projectClick.emit();
  }
  onSearchQueryClick() {
    this.searchQueryClick.emit();
  }
  onSearch(query) {
    this.search.emit(query);
  }
  onExpandSearch() {
    this.expandSearch.emit();
  }
  onCollapseSearch() {
    this.collapseSearch.emit();
  }
  static \u0275fac = function CasesHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasesHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesHeaderComponent, selectors: [["app-cases-header"]], inputs: { isSidebarCollapsed: "isSidebarCollapsed", projectName: "projectName", currentSearchQuery: "currentSearchQuery", hasSearched: "hasSearched", showCollapseButton: "showCollapseButton" }, outputs: { sidebarToggle: "sidebarToggle", projectClick: "projectClick", searchQueryClick: "searchQueryClick", search: "search", expandSearch: "expandSearch", collapseSearch: "collapseSearch" }, decls: 6, vars: 17, consts: [[1, "sticky-header"], [3, "collapseToggle", "projectClick", "searchQueryClick", "showUserProfile", "showCollapseButton", "projectName", "searchQuery"], [1, "bg-cases-page", "border-b", "border-gray-200"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [3, "search", "expand", "collapse", "isCollapsed", "searchQuery", "showCollapseButton"]], template: function CasesHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-header", 1);
      \u0275\u0275listener("collapseToggle", function CasesHeaderComponent_Template_app_header_collapseToggle_1_listener() {
        return ctx.onSidebarToggle();
      })("projectClick", function CasesHeaderComponent_Template_app_header_projectClick_1_listener() {
        return ctx.onProjectClick();
      })("searchQueryClick", function CasesHeaderComponent_Template_app_header_searchQueryClick_1_listener() {
        return ctx.onSearchQueryClick();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div")(5, "app-search-bar", 4);
      \u0275\u0275listener("search", function CasesHeaderComponent_Template_app_search_bar_search_5_listener($event) {
        return ctx.onSearch($event);
      })("expand", function CasesHeaderComponent_Template_app_search_bar_expand_5_listener() {
        return ctx.onExpandSearch();
      })("collapse", function CasesHeaderComponent_Template_app_search_bar_collapse_5_listener() {
        return ctx.onCollapseSearch();
      });
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("sidebar-collapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("showUserProfile", true)("showCollapseButton", ctx.isSidebarCollapsed)("projectName", ctx.projectName)("searchQuery", ctx.currentSearchQuery);
      \u0275\u0275advance();
      \u0275\u0275classProp("py-4", !ctx.hasSearched)("py-2", ctx.hasSearched);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("mb-4", !ctx.hasSearched)("mb-2", ctx.hasSearched);
      \u0275\u0275advance();
      \u0275\u0275property("isCollapsed", ctx.hasSearched)("searchQuery", ctx.currentSearchQuery)("showCollapseButton", ctx.showCollapseButton);
    }
  }, dependencies: [CommonModule, AppHeaderComponent, SearchBarComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.sticky-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 206px;\n  right: 0;\n  z-index: 100;\n  background-color: white;\n  transition: left 0.3s ease;\n}\n.sticky-header.sidebar-collapsed[_ngcontent-%COMP%] {\n  left: 4rem;\n}\n.bg-cases-page[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.space-x-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.whitespace-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.max-w-7xl[_ngcontent-%COMP%] {\n  max-width: 80rem;\n}\n.mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #146B85;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n@media (min-width: 640px) {\n  .sm\\:px-6[_ngcontent-%COMP%] {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:px-8[_ngcontent-%COMP%] {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n/*# sourceMappingURL=cases-header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasesHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-cases-header", standalone: true, imports: [CommonModule, AppHeaderComponent, SearchBarComponent], template: '<!-- Combined Header and Search Bar Component -->\n<div class="sticky-header"\n     [class.sidebar-collapsed]="isSidebarCollapsed">\n  <!-- App Header -->\n  <app-header \n    [showUserProfile]="true"\n    [showCollapseButton]="isSidebarCollapsed"\n    [projectName]="projectName"\n    [searchQuery]="currentSearchQuery"\n    (collapseToggle)="onSidebarToggle()"\n    (projectClick)="onProjectClick()"\n    (searchQueryClick)="onSearchQueryClick()">\n  </app-header>\n\n  <!-- Search Bar Section -->\n  <div class="bg-cases-page border-b border-gray-200" \n       [class.py-4]="!hasSearched" \n       [class.py-2]="hasSearched">\n    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n      <!-- Search Input -->\n      <div [class.mb-4]="!hasSearched" [class.mb-2]="hasSearched">\n        <app-search-bar \n          [isCollapsed]="hasSearched"\n          [searchQuery]="currentSearchQuery"\n          [showCollapseButton]="showCollapseButton"\n          (search)="onSearch($event)"\n          (expand)="onExpandSearch()"\n          (collapse)="onCollapseSearch()">\n        </app-search-bar>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/components/ui/cases-header/cases-header.component.css */\n:host {\n  display: block;\n}\n.sticky-header {\n  position: fixed;\n  top: 0;\n  left: 206px;\n  right: 0;\n  z-index: 100;\n  background-color: white;\n  transition: left 0.3s ease;\n}\n.sticky-header.sidebar-collapsed {\n  left: 4rem;\n}\n.bg-cases-page {\n  background-color: #F8F8F8;\n}\n.flex {\n  display: flex;\n}\n.items-center {\n  align-items: center;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.space-x-4 > * + * {\n  margin-left: 1rem;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.bg-brand {\n  background-color: #146B85;\n}\n.text-white {\n  color: #ffffff;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-gray-200:hover {\n  background-color: #e5e7eb;\n}\n@media (min-width: 640px) {\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n/*# sourceMappingURL=cases-header.component.css.map */\n"] }]
  }], null, { isSidebarCollapsed: [{
    type: Input
  }], projectName: [{
    type: Input
  }], currentSearchQuery: [{
    type: Input
  }], hasSearched: [{
    type: Input
  }], showCollapseButton: [{
    type: Input
  }], sidebarToggle: [{
    type: Output
  }], projectClick: [{
    type: Output
  }], searchQueryClick: [{
    type: Output
  }], search: [{
    type: Output
  }], expandSearch: [{
    type: Output
  }], collapseSearch: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesHeaderComponent, { className: "CasesHeaderComponent" });
})();

// src/app/pages/cases/cases.component.ts
function CasesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 10);
    \u0275\u0275text(5, "Start Your Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7, " Enter your search terms above to find cases, attorneys, law firms, judges, or parties. ");
    \u0275\u0275elementEnd()()();
  }
}
function CasesComponent_app_cases_layout_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "div", 18)(3, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275element(5, "div", 21)(6, "div", 22)(7, "div", 23)(8, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 24)(10, "div", 25);
    \u0275\u0275element(11, "div", 26)(12, "div", 27)(13, "div", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275element(15, "div", 26)(16, "div", 29)(17, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 25);
    \u0275\u0275element(19, "div", 26)(20, "div", 31)(21, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25);
    \u0275\u0275element(23, "div", 26)(24, "div", 31)(25, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 25);
    \u0275\u0275element(27, "div", 26)(28, "div", 33)(29, "div", 32);
    \u0275\u0275elementEnd()()();
  }
}
function CasesComponent_app_cases_layout_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, CasesComponent_app_cases_layout_5_div_1_div_1_Template, 30, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletonCards);
  }
}
function CasesComponent_app_cases_layout_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 17);
    \u0275\u0275element(3, "i", 36);
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("CIV537691"));
    });
    \u0275\u0275text(5, " AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "div", 25);
    \u0275\u0275element(8, "i", 39);
    \u0275\u0275elementStart(9, "span", 40);
    \u0275\u0275text(10, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 41);
    \u0275\u0275text(12, "CIV537691");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275element(14, "i", 42);
    \u0275\u0275elementStart(15, "span", 40);
    \u0275\u0275text(16, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 41);
    \u0275\u0275text(18, "California Superior Courts - San Mateo County Superior Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 25);
    \u0275\u0275element(20, "i", 43);
    \u0275\u0275elementStart(21, "span", 40);
    \u0275\u0275text(22, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 41);
    \u0275\u0275text(24, "8 March 2016");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 25);
    \u0275\u0275element(26, "i", 44);
    \u0275\u0275elementStart(27, "span", 40);
    \u0275\u0275text(28, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 41);
    \u0275\u0275text(30, "Civil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 25);
    \u0275\u0275element(32, "i", 45);
    \u0275\u0275elementStart(33, "span", 40);
    \u0275\u0275text(34, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 41);
    \u0275\u0275text(36, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 46)(38, "span", 47);
    \u0275\u0275element(39, "i", 48);
    \u0275\u0275text(40, "JUDGE ");
    \u0275\u0275elementStart(41, "div", 49)(42, "div", 50);
    \u0275\u0275element(43, "i", 51);
    \u0275\u0275elementStart(44, "div", 52);
    \u0275\u0275text(45, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 53);
    \u0275\u0275text(47, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "span", 47);
    \u0275\u0275element(49, "i", 54);
    \u0275\u0275text(50, "STATUS ");
    \u0275\u0275elementStart(51, "div", 49)(52, "div", 50);
    \u0275\u0275element(53, "i", 55);
    \u0275\u0275elementStart(54, "div", 52);
    \u0275\u0275text(55, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 53);
    \u0275\u0275text(57, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "span", 47);
    \u0275\u0275element(59, "i", 56);
    \u0275\u0275text(60, "TYPE ");
    \u0275\u0275elementStart(61, "div", 49)(62, "div", 50);
    \u0275\u0275element(63, "i", 57);
    \u0275\u0275elementStart(64, "div", 52);
    \u0275\u0275text(65, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 53);
    \u0275\u0275text(67, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "span", 47);
    \u0275\u0275element(69, "i", 58);
    \u0275\u0275text(70, "COURT ");
    \u0275\u0275elementStart(71, "div", 49)(72, "div", 50);
    \u0275\u0275element(73, "i", 59);
    \u0275\u0275elementStart(74, "div", 52);
    \u0275\u0275text(75, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 53);
    \u0275\u0275text(77, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 60)(79, "div", 61);
    \u0275\u0275element(80, "i", 62);
    \u0275\u0275elementStart(81, "span", 63);
    \u0275\u0275text(82, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 64)(84, "div", 65);
    \u0275\u0275element(85, "i", 66);
    \u0275\u0275elementStart(86, "span", 63);
    \u0275\u0275text(87, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "button", 67);
    \u0275\u0275element(89, "i", 68);
    \u0275\u0275elementStart(90, "div", 69);
    \u0275\u0275text(91, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "button", 70);
    \u0275\u0275element(93, "i", 71);
    \u0275\u0275elementStart(94, "div", 72);
    \u0275\u0275text(95, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(96, "div", 35)(97, "div", 17);
    \u0275\u0275element(98, "i", 36);
    \u0275\u0275elementStart(99, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_99_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("COM892345"));
    });
    \u0275\u0275text(100, " JOHNSON MANUFACTURING INC VS STATE OF NEW YORK ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 38)(102, "div", 25);
    \u0275\u0275element(103, "i", 39);
    \u0275\u0275elementStart(104, "span", 40);
    \u0275\u0275text(105, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span", 41);
    \u0275\u0275text(107, "COM892345");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 25);
    \u0275\u0275element(109, "i", 42);
    \u0275\u0275elementStart(110, "span", 40);
    \u0275\u0275text(111, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 41);
    \u0275\u0275text(113, "New York State Supreme Court - Commercial Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 25);
    \u0275\u0275element(115, "i", 43);
    \u0275\u0275elementStart(116, "span", 40);
    \u0275\u0275text(117, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "span", 41);
    \u0275\u0275text(119, "15 January 2017");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 25);
    \u0275\u0275element(121, "i", 44);
    \u0275\u0275elementStart(122, "span", 40);
    \u0275\u0275text(123, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "span", 41);
    \u0275\u0275text(125, "Commercial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(126, "div", 25);
    \u0275\u0275element(127, "i", 45);
    \u0275\u0275elementStart(128, "span", 40);
    \u0275\u0275text(129, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "span", 41);
    \u0275\u0275text(131, "In Progress");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "div", 46)(133, "span", 73);
    \u0275\u0275element(134, "i", 48);
    \u0275\u0275text(135, "JUDGE ");
    \u0275\u0275elementStart(136, "div", 74)(137, "div", 50);
    \u0275\u0275element(138, "i", 51);
    \u0275\u0275elementStart(139, "div", 52);
    \u0275\u0275text(140, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 53);
    \u0275\u0275text(142, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "span", 73);
    \u0275\u0275element(144, "i", 54);
    \u0275\u0275text(145, "STATUS ");
    \u0275\u0275elementStart(146, "div", 74)(147, "div", 50);
    \u0275\u0275element(148, "i", 55);
    \u0275\u0275elementStart(149, "div", 52);
    \u0275\u0275text(150, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "div", 53);
    \u0275\u0275text(152, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(153, "span", 73);
    \u0275\u0275element(154, "i", 56);
    \u0275\u0275text(155, "TYPE ");
    \u0275\u0275elementStart(156, "div", 74)(157, "div", 50);
    \u0275\u0275element(158, "i", 57);
    \u0275\u0275elementStart(159, "div", 52);
    \u0275\u0275text(160, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 53);
    \u0275\u0275text(162, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "span", 73);
    \u0275\u0275element(164, "i", 58);
    \u0275\u0275text(165, "COURT ");
    \u0275\u0275elementStart(166, "div", 74)(167, "div", 50);
    \u0275\u0275element(168, "i", 59);
    \u0275\u0275elementStart(169, "div", 52);
    \u0275\u0275text(170, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 53);
    \u0275\u0275text(172, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(173, "div", 60)(174, "div", 61);
    \u0275\u0275element(175, "i", 62);
    \u0275\u0275elementStart(176, "span", 63);
    \u0275\u0275text(177, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "div", 64)(179, "div", 65);
    \u0275\u0275element(180, "i", 66);
    \u0275\u0275elementStart(181, "span", 63);
    \u0275\u0275text(182, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(183, "button", 67);
    \u0275\u0275element(184, "i", 68);
    \u0275\u0275elementStart(185, "div", 69);
    \u0275\u0275text(186, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "button", 70);
    \u0275\u0275element(188, "i", 71);
    \u0275\u0275elementStart(189, "div", 72);
    \u0275\u0275text(190, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(191, "div", 35)(192, "div", 17);
    \u0275\u0275element(193, "i", 36);
    \u0275\u0275elementStart(194, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_194_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("ADM778912"));
    });
    \u0275\u0275text(195, " WILSON ESTATES LLC VS CITY PLANNING COMMISSION ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 38)(197, "div", 25);
    \u0275\u0275element(198, "i", 39);
    \u0275\u0275elementStart(199, "span", 40);
    \u0275\u0275text(200, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "span", 41);
    \u0275\u0275text(202, "ADM778912");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(203, "div", 25);
    \u0275\u0275element(204, "i", 42);
    \u0275\u0275elementStart(205, "span", 40);
    \u0275\u0275text(206, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "span", 41);
    \u0275\u0275text(208, "Administrative Court - Planning Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(209, "div", 25);
    \u0275\u0275element(210, "i", 43);
    \u0275\u0275elementStart(211, "span", 40);
    \u0275\u0275text(212, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "span", 41);
    \u0275\u0275text(214, "22 September 2018");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(215, "div", 25);
    \u0275\u0275element(216, "i", 44);
    \u0275\u0275elementStart(217, "span", 40);
    \u0275\u0275text(218, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "span", 41);
    \u0275\u0275text(220, "Administrative");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(221, "div", 25);
    \u0275\u0275element(222, "i", 45);
    \u0275\u0275elementStart(223, "span", 40);
    \u0275\u0275text(224, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "span", 41);
    \u0275\u0275text(226, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(227, "div", 46)(228, "span", 47);
    \u0275\u0275element(229, "i", 48);
    \u0275\u0275text(230, "JUDGE ");
    \u0275\u0275elementStart(231, "div", 49)(232, "div", 50);
    \u0275\u0275element(233, "i", 51);
    \u0275\u0275elementStart(234, "div", 52);
    \u0275\u0275text(235, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(236, "div", 53);
    \u0275\u0275text(237, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(238, "span", 47);
    \u0275\u0275element(239, "i", 54);
    \u0275\u0275text(240, "STATUS ");
    \u0275\u0275elementStart(241, "div", 49)(242, "div", 50);
    \u0275\u0275element(243, "i", 55);
    \u0275\u0275elementStart(244, "div", 52);
    \u0275\u0275text(245, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(246, "div", 53);
    \u0275\u0275text(247, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(248, "span", 47);
    \u0275\u0275element(249, "i", 56);
    \u0275\u0275text(250, "TYPE ");
    \u0275\u0275elementStart(251, "div", 49)(252, "div", 50);
    \u0275\u0275element(253, "i", 57);
    \u0275\u0275elementStart(254, "div", 52);
    \u0275\u0275text(255, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(256, "div", 53);
    \u0275\u0275text(257, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(258, "span", 47);
    \u0275\u0275element(259, "i", 58);
    \u0275\u0275text(260, "COURT ");
    \u0275\u0275elementStart(261, "div", 49)(262, "div", 50);
    \u0275\u0275element(263, "i", 59);
    \u0275\u0275elementStart(264, "div", 52);
    \u0275\u0275text(265, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(266, "div", 53);
    \u0275\u0275text(267, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(268, "div", 60)(269, "div", 61);
    \u0275\u0275element(270, "i", 62);
    \u0275\u0275elementStart(271, "span", 63);
    \u0275\u0275text(272, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(273, "div", 64)(274, "div", 65);
    \u0275\u0275element(275, "i", 66);
    \u0275\u0275elementStart(276, "span", 63);
    \u0275\u0275text(277, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(278, "button", 67);
    \u0275\u0275element(279, "i", 68);
    \u0275\u0275elementStart(280, "div", 69);
    \u0275\u0275text(281, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(282, "button", 70);
    \u0275\u0275element(283, "i", 71);
    \u0275\u0275elementStart(284, "div", 72);
    \u0275\u0275text(285, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(286, "div", 35)(287, "div", 17);
    \u0275\u0275element(288, "i", 36);
    \u0275\u0275elementStart(289, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_289_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("PRB445621"));
    });
    \u0275\u0275text(290, " MARTINEZ FAMILY TRUST VS THOMPSON HOLDINGS ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(291, "div", 38)(292, "div", 25);
    \u0275\u0275element(293, "i", 39);
    \u0275\u0275elementStart(294, "span", 40);
    \u0275\u0275text(295, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(296, "span", 41);
    \u0275\u0275text(297, "PRB445621");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(298, "div", 25);
    \u0275\u0275element(299, "i", 42);
    \u0275\u0275elementStart(300, "span", 40);
    \u0275\u0275text(301, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "span", 41);
    \u0275\u0275text(303, "Probate Court - Estate Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(304, "div", 25);
    \u0275\u0275element(305, "i", 43);
    \u0275\u0275elementStart(306, "span", 40);
    \u0275\u0275text(307, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(308, "span", 41);
    \u0275\u0275text(309, "7 March 2019");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(310, "div", 25);
    \u0275\u0275element(311, "i", 44);
    \u0275\u0275elementStart(312, "span", 40);
    \u0275\u0275text(313, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(314, "span", 41);
    \u0275\u0275text(315, "Probate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(316, "div", 25);
    \u0275\u0275element(317, "i", 45);
    \u0275\u0275elementStart(318, "span", 40);
    \u0275\u0275text(319, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(320, "span", 41);
    \u0275\u0275text(321, "Pending");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(322, "div", 46)(323, "span", 75);
    \u0275\u0275element(324, "i", 48);
    \u0275\u0275text(325, "JUDGE ");
    \u0275\u0275elementStart(326, "div", 76)(327, "div", 50);
    \u0275\u0275element(328, "i", 51);
    \u0275\u0275elementStart(329, "div", 52);
    \u0275\u0275text(330, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(331, "div", 53);
    \u0275\u0275text(332, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(333, "span", 75);
    \u0275\u0275element(334, "i", 54);
    \u0275\u0275text(335, "STATUS ");
    \u0275\u0275elementStart(336, "div", 76)(337, "div", 50);
    \u0275\u0275element(338, "i", 55);
    \u0275\u0275elementStart(339, "div", 52);
    \u0275\u0275text(340, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(341, "div", 53);
    \u0275\u0275text(342, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(343, "span", 75);
    \u0275\u0275element(344, "i", 56);
    \u0275\u0275text(345, "TYPE ");
    \u0275\u0275elementStart(346, "div", 76)(347, "div", 50);
    \u0275\u0275element(348, "i", 57);
    \u0275\u0275elementStart(349, "div", 52);
    \u0275\u0275text(350, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(351, "div", 53);
    \u0275\u0275text(352, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(353, "span", 75);
    \u0275\u0275element(354, "i", 58);
    \u0275\u0275text(355, "COURT ");
    \u0275\u0275elementStart(356, "div", 76)(357, "div", 50);
    \u0275\u0275element(358, "i", 59);
    \u0275\u0275elementStart(359, "div", 52);
    \u0275\u0275text(360, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(361, "div", 53);
    \u0275\u0275text(362, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(363, "div", 60)(364, "div", 61);
    \u0275\u0275element(365, "i", 62);
    \u0275\u0275elementStart(366, "span", 63);
    \u0275\u0275text(367, "4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(368, "div", 64)(369, "div", 65);
    \u0275\u0275element(370, "i", 66);
    \u0275\u0275elementStart(371, "span", 63);
    \u0275\u0275text(372, "4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(373, "button", 67);
    \u0275\u0275element(374, "i", 68);
    \u0275\u0275elementStart(375, "div", 69);
    \u0275\u0275text(376, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(377, "button", 70);
    \u0275\u0275element(378, "i", 71);
    \u0275\u0275elementStart(379, "div", 72);
    \u0275\u0275text(380, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(381, "div", 35)(382, "div", 17);
    \u0275\u0275element(383, "i", 36);
    \u0275\u0275elementStart(384, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_384_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("LAB334128"));
    });
    \u0275\u0275text(385, " RODRIGUEZ CONSTRUCTION VS UNION WORKERS LOCAL 247 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(386, "div", 38)(387, "div", 25);
    \u0275\u0275element(388, "i", 39);
    \u0275\u0275elementStart(389, "span", 40);
    \u0275\u0275text(390, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(391, "span", 41);
    \u0275\u0275text(392, "LAB334128");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(393, "div", 25);
    \u0275\u0275element(394, "i", 42);
    \u0275\u0275elementStart(395, "span", 40);
    \u0275\u0275text(396, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(397, "span", 41);
    \u0275\u0275text(398, "Labor Relations Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(399, "div", 25);
    \u0275\u0275element(400, "i", 43);
    \u0275\u0275elementStart(401, "span", 40);
    \u0275\u0275text(402, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(403, "span", 41);
    \u0275\u0275text(404, "14 November 2020");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(405, "div", 25);
    \u0275\u0275element(406, "i", 44);
    \u0275\u0275elementStart(407, "span", 40);
    \u0275\u0275text(408, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(409, "span", 41);
    \u0275\u0275text(410, "Labor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(411, "div", 25);
    \u0275\u0275element(412, "i", 45);
    \u0275\u0275elementStart(413, "span", 40);
    \u0275\u0275text(414, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(415, "span", 41);
    \u0275\u0275text(416, "Arbitration");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(417, "div", 46)(418, "span", 77);
    \u0275\u0275element(419, "i", 48);
    \u0275\u0275text(420, "JUDGE ");
    \u0275\u0275elementStart(421, "div", 78)(422, "div", 50);
    \u0275\u0275element(423, "i", 51);
    \u0275\u0275elementStart(424, "div", 52);
    \u0275\u0275text(425, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(426, "div", 53);
    \u0275\u0275text(427, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(428, "span", 77);
    \u0275\u0275element(429, "i", 54);
    \u0275\u0275text(430, "STATUS ");
    \u0275\u0275elementStart(431, "div", 78)(432, "div", 50);
    \u0275\u0275element(433, "i", 55);
    \u0275\u0275elementStart(434, "div", 52);
    \u0275\u0275text(435, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(436, "div", 53);
    \u0275\u0275text(437, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(438, "span", 77);
    \u0275\u0275element(439, "i", 56);
    \u0275\u0275text(440, "TYPE ");
    \u0275\u0275elementStart(441, "div", 78)(442, "div", 50);
    \u0275\u0275element(443, "i", 57);
    \u0275\u0275elementStart(444, "div", 52);
    \u0275\u0275text(445, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(446, "div", 53);
    \u0275\u0275text(447, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(448, "span", 77);
    \u0275\u0275element(449, "i", 58);
    \u0275\u0275text(450, "COURT ");
    \u0275\u0275elementStart(451, "div", 78)(452, "div", 50);
    \u0275\u0275element(453, "i", 59);
    \u0275\u0275elementStart(454, "div", 52);
    \u0275\u0275text(455, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(456, "div", 53);
    \u0275\u0275text(457, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(458, "div", 60)(459, "div", 61);
    \u0275\u0275element(460, "i", 62);
    \u0275\u0275elementStart(461, "span", 63);
    \u0275\u0275text(462, "5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(463, "div", 64)(464, "div", 65);
    \u0275\u0275element(465, "i", 66);
    \u0275\u0275elementStart(466, "span", 63);
    \u0275\u0275text(467, "5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(468, "button", 67);
    \u0275\u0275element(469, "i", 68);
    \u0275\u0275elementStart(470, "div", 69);
    \u0275\u0275text(471, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(472, "button", 70);
    \u0275\u0275element(473, "i", 71);
    \u0275\u0275elementStart(474, "div", 72);
    \u0275\u0275text(475, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(476, "div", 35)(477, "div", 17);
    \u0275\u0275element(478, "i", 36);
    \u0275\u0275elementStart(479, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_479_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("COM567891"));
    });
    \u0275\u0275text(480, " ANDERSON MEDICAL GROUP VS HEALTH INSURANCE CORP ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(481, "div", 38)(482, "div", 25);
    \u0275\u0275element(483, "i", 39);
    \u0275\u0275elementStart(484, "span", 40);
    \u0275\u0275text(485, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(486, "span", 41);
    \u0275\u0275text(487, "COM567891");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(488, "div", 25);
    \u0275\u0275element(489, "i", 42);
    \u0275\u0275elementStart(490, "span", 40);
    \u0275\u0275text(491, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(492, "span", 41);
    \u0275\u0275text(493, "Commercial Court - Healthcare Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(494, "div", 25);
    \u0275\u0275element(495, "i", 43);
    \u0275\u0275elementStart(496, "span", 40);
    \u0275\u0275text(497, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(498, "span", 41);
    \u0275\u0275text(499, "3 June 2021");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(500, "div", 25);
    \u0275\u0275element(501, "i", 44);
    \u0275\u0275elementStart(502, "span", 40);
    \u0275\u0275text(503, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(504, "span", 41);
    \u0275\u0275text(505, "Commercial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(506, "div", 25);
    \u0275\u0275element(507, "i", 45);
    \u0275\u0275elementStart(508, "span", 40);
    \u0275\u0275text(509, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(510, "span", 41);
    \u0275\u0275text(511, "Settlement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(512, "div", 46)(513, "span", 79);
    \u0275\u0275element(514, "i", 48);
    \u0275\u0275text(515, "JUDGE ");
    \u0275\u0275elementStart(516, "div", 80)(517, "div", 50);
    \u0275\u0275element(518, "i", 51);
    \u0275\u0275elementStart(519, "div", 52);
    \u0275\u0275text(520, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(521, "div", 53);
    \u0275\u0275text(522, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(523, "span", 79);
    \u0275\u0275element(524, "i", 54);
    \u0275\u0275text(525, "STATUS ");
    \u0275\u0275elementStart(526, "div", 80)(527, "div", 50);
    \u0275\u0275element(528, "i", 55);
    \u0275\u0275elementStart(529, "div", 52);
    \u0275\u0275text(530, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(531, "div", 53);
    \u0275\u0275text(532, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(533, "span", 79);
    \u0275\u0275element(534, "i", 56);
    \u0275\u0275text(535, "TYPE ");
    \u0275\u0275elementStart(536, "div", 80)(537, "div", 50);
    \u0275\u0275element(538, "i", 57);
    \u0275\u0275elementStart(539, "div", 52);
    \u0275\u0275text(540, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(541, "div", 53);
    \u0275\u0275text(542, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(543, "span", 79);
    \u0275\u0275element(544, "i", 58);
    \u0275\u0275text(545, "COURT ");
    \u0275\u0275elementStart(546, "div", 80)(547, "div", 50);
    \u0275\u0275element(548, "i", 59);
    \u0275\u0275elementStart(549, "div", 52);
    \u0275\u0275text(550, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(551, "div", 53);
    \u0275\u0275text(552, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(553, "div", 60)(554, "div", 61);
    \u0275\u0275element(555, "i", 62);
    \u0275\u0275elementStart(556, "span", 63);
    \u0275\u0275text(557, "6");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(558, "div", 64)(559, "div", 65);
    \u0275\u0275element(560, "i", 66);
    \u0275\u0275elementStart(561, "span", 63);
    \u0275\u0275text(562, "6");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(563, "button", 67);
    \u0275\u0275element(564, "i", 68);
    \u0275\u0275elementStart(565, "div", 69);
    \u0275\u0275text(566, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(567, "button", 70);
    \u0275\u0275element(568, "i", 71);
    \u0275\u0275elementStart(569, "div", 72);
    \u0275\u0275text(570, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(571, "div", 35)(572, "div", 17);
    \u0275\u0275element(573, "i", 36);
    \u0275\u0275elementStart(574, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_574_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("IP223467"));
    });
    \u0275\u0275text(575, " TECH INNOVATIONS INC VS PATENT OFFICE ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(576, "div", 38)(577, "div", 25);
    \u0275\u0275element(578, "i", 39);
    \u0275\u0275elementStart(579, "span", 40);
    \u0275\u0275text(580, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(581, "span", 41);
    \u0275\u0275text(582, "IP223467");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(583, "div", 25);
    \u0275\u0275element(584, "i", 42);
    \u0275\u0275elementStart(585, "span", 40);
    \u0275\u0275text(586, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(587, "span", 41);
    \u0275\u0275text(588, "Federal Circuit Court - IP Division");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(589, "div", 25);
    \u0275\u0275element(590, "i", 43);
    \u0275\u0275elementStart(591, "span", 40);
    \u0275\u0275text(592, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(593, "span", 41);
    \u0275\u0275text(594, "18 August 2022");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(595, "div", 25);
    \u0275\u0275element(596, "i", 44);
    \u0275\u0275elementStart(597, "span", 40);
    \u0275\u0275text(598, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(599, "span", 41);
    \u0275\u0275text(600, "Intellectual Property");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(601, "div", 25);
    \u0275\u0275element(602, "i", 45);
    \u0275\u0275elementStart(603, "span", 40);
    \u0275\u0275text(604, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(605, "span", 41);
    \u0275\u0275text(606, "Appeal Filed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(607, "div", 46)(608, "span", 81);
    \u0275\u0275element(609, "i", 48);
    \u0275\u0275text(610, "JUDGE ");
    \u0275\u0275elementStart(611, "div", 82)(612, "div", 50);
    \u0275\u0275element(613, "i", 51);
    \u0275\u0275elementStart(614, "div", 52);
    \u0275\u0275text(615, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(616, "div", 53);
    \u0275\u0275text(617, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(618, "span", 81);
    \u0275\u0275element(619, "i", 54);
    \u0275\u0275text(620, "STATUS ");
    \u0275\u0275elementStart(621, "div", 82)(622, "div", 50);
    \u0275\u0275element(623, "i", 55);
    \u0275\u0275elementStart(624, "div", 52);
    \u0275\u0275text(625, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(626, "div", 53);
    \u0275\u0275text(627, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(628, "span", 81);
    \u0275\u0275element(629, "i", 56);
    \u0275\u0275text(630, "TYPE ");
    \u0275\u0275elementStart(631, "div", 82)(632, "div", 50);
    \u0275\u0275element(633, "i", 57);
    \u0275\u0275elementStart(634, "div", 52);
    \u0275\u0275text(635, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(636, "div", 53);
    \u0275\u0275text(637, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(638, "span", 81);
    \u0275\u0275element(639, "i", 58);
    \u0275\u0275text(640, "COURT ");
    \u0275\u0275elementStart(641, "div", 82)(642, "div", 50);
    \u0275\u0275element(643, "i", 59);
    \u0275\u0275elementStart(644, "div", 52);
    \u0275\u0275text(645, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(646, "div", 53);
    \u0275\u0275text(647, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(648, "div", 60)(649, "div", 61);
    \u0275\u0275element(650, "i", 62);
    \u0275\u0275elementStart(651, "span", 63);
    \u0275\u0275text(652, "7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(653, "div", 64)(654, "div", 65);
    \u0275\u0275element(655, "i", 66);
    \u0275\u0275elementStart(656, "span", 63);
    \u0275\u0275text(657, "7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(658, "button", 67);
    \u0275\u0275element(659, "i", 68);
    \u0275\u0275elementStart(660, "div", 69);
    \u0275\u0275text(661, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(662, "button", 70);
    \u0275\u0275element(663, "i", 71);
    \u0275\u0275elementStart(664, "div", 72);
    \u0275\u0275text(665, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(666, "div", 35)(667, "div", 17);
    \u0275\u0275element(668, "i", 36);
    \u0275\u0275elementStart(669, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_669_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("ENV445123"));
    });
    \u0275\u0275text(670, " ENVIRONMENTAL PROTECTION AGENCY VS CHEMICAL CORP ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(671, "div", 38)(672, "div", 25);
    \u0275\u0275element(673, "i", 39);
    \u0275\u0275elementStart(674, "span", 40);
    \u0275\u0275text(675, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(676, "span", 41);
    \u0275\u0275text(677, "ENV445123");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(678, "div", 25);
    \u0275\u0275element(679, "i", 42);
    \u0275\u0275elementStart(680, "span", 40);
    \u0275\u0275text(681, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(682, "span", 41);
    \u0275\u0275text(683, "Environmental Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(684, "div", 25);
    \u0275\u0275element(685, "i", 43);
    \u0275\u0275elementStart(686, "span", 40);
    \u0275\u0275text(687, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(688, "span", 41);
    \u0275\u0275text(689, "29 April 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(690, "div", 25);
    \u0275\u0275element(691, "i", 44);
    \u0275\u0275elementStart(692, "span", 40);
    \u0275\u0275text(693, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(694, "span", 41);
    \u0275\u0275text(695, "Environmental");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(696, "div", 25);
    \u0275\u0275element(697, "i", 45);
    \u0275\u0275elementStart(698, "span", 40);
    \u0275\u0275text(699, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(700, "span", 41);
    \u0275\u0275text(701, "Investigation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(702, "div", 46)(703, "span", 83);
    \u0275\u0275element(704, "i", 48);
    \u0275\u0275text(705, "JUDGE ");
    \u0275\u0275elementStart(706, "div", 84)(707, "div", 50);
    \u0275\u0275element(708, "i", 51);
    \u0275\u0275elementStart(709, "div", 52);
    \u0275\u0275text(710, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(711, "div", 53);
    \u0275\u0275text(712, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(713, "span", 83);
    \u0275\u0275element(714, "i", 54);
    \u0275\u0275text(715, "STATUS ");
    \u0275\u0275elementStart(716, "div", 84)(717, "div", 50);
    \u0275\u0275element(718, "i", 55);
    \u0275\u0275elementStart(719, "div", 52);
    \u0275\u0275text(720, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(721, "div", 53);
    \u0275\u0275text(722, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(723, "span", 83);
    \u0275\u0275element(724, "i", 56);
    \u0275\u0275text(725, "TYPE ");
    \u0275\u0275elementStart(726, "div", 84)(727, "div", 50);
    \u0275\u0275element(728, "i", 57);
    \u0275\u0275elementStart(729, "div", 52);
    \u0275\u0275text(730, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(731, "div", 53);
    \u0275\u0275text(732, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(733, "span", 83);
    \u0275\u0275element(734, "i", 58);
    \u0275\u0275text(735, "COURT ");
    \u0275\u0275elementStart(736, "div", 84)(737, "div", 50);
    \u0275\u0275element(738, "i", 59);
    \u0275\u0275elementStart(739, "div", 52);
    \u0275\u0275text(740, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(741, "div", 53);
    \u0275\u0275text(742, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(743, "div", 60)(744, "div", 61);
    \u0275\u0275element(745, "i", 62);
    \u0275\u0275elementStart(746, "span", 63);
    \u0275\u0275text(747, "8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(748, "div", 64)(749, "div", 65);
    \u0275\u0275element(750, "i", 66);
    \u0275\u0275elementStart(751, "span", 63);
    \u0275\u0275text(752, "8");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(753, "button", 67);
    \u0275\u0275element(754, "i", 68);
    \u0275\u0275elementStart(755, "div", 69);
    \u0275\u0275text(756, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(757, "button", 70);
    \u0275\u0275element(758, "i", 71);
    \u0275\u0275elementStart(759, "div", 72);
    \u0275\u0275text(760, " Add Tag ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(761, "div", 35)(762, "div", 17);
    \u0275\u0275element(763, "i", 36);
    \u0275\u0275elementStart(764, "h3", 37);
    \u0275\u0275listener("click", function CasesComponent_app_cases_layout_5_div_2_Template_h3_click_764_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCaseClick("FIN778934"));
    });
    \u0275\u0275text(765, " GLOBAL FINANCE BANK VS MORTGAGE HOLDERS UNION ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(766, "div", 38)(767, "div", 25);
    \u0275\u0275element(768, "i", 39);
    \u0275\u0275elementStart(769, "span", 40);
    \u0275\u0275text(770, "CASE ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(771, "span", 41);
    \u0275\u0275text(772, "FIN778934");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(773, "div", 25);
    \u0275\u0275element(774, "i", 42);
    \u0275\u0275elementStart(775, "span", 40);
    \u0275\u0275text(776, "COURT:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(777, "span", 41);
    \u0275\u0275text(778, "Financial Services Court");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(779, "div", 25);
    \u0275\u0275element(780, "i", 43);
    \u0275\u0275elementStart(781, "span", 40);
    \u0275\u0275text(782, "DATE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(783, "span", 41);
    \u0275\u0275text(784, "12 December 2023");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(785, "div", 25);
    \u0275\u0275element(786, "i", 44);
    \u0275\u0275elementStart(787, "span", 40);
    \u0275\u0275text(788, "TYPE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(789, "span", 41);
    \u0275\u0275text(790, "Financial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(791, "div", 25);
    \u0275\u0275element(792, "i", 45);
    \u0275\u0275elementStart(793, "span", 40);
    \u0275\u0275text(794, "STATUS:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(795, "span", 41);
    \u0275\u0275text(796, "Class Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(797, "div", 46)(798, "span", 85);
    \u0275\u0275element(799, "i", 48);
    \u0275\u0275text(800, "JUDGE ");
    \u0275\u0275elementStart(801, "div", 86)(802, "div", 50);
    \u0275\u0275element(803, "i", 51);
    \u0275\u0275elementStart(804, "div", 52);
    \u0275\u0275text(805, "JUDGE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(806, "div", 53);
    \u0275\u0275text(807, "Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(808, "span", 85);
    \u0275\u0275element(809, "i", 54);
    \u0275\u0275text(810, "STATUS ");
    \u0275\u0275elementStart(811, "div", 86)(812, "div", 50);
    \u0275\u0275element(813, "i", 55);
    \u0275\u0275elementStart(814, "div", 52);
    \u0275\u0275text(815, "STATUS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(816, "div", 53);
    \u0275\u0275text(817, "Current procedural status indicating the stage and progress of the legal case within the court system.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(818, "span", 85);
    \u0275\u0275element(819, "i", 56);
    \u0275\u0275text(820, "TYPE ");
    \u0275\u0275elementStart(821, "div", 86)(822, "div", 50);
    \u0275\u0275element(823, "i", 57);
    \u0275\u0275elementStart(824, "div", 52);
    \u0275\u0275text(825, "TYPE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(826, "div", 53);
    \u0275\u0275text(827, "Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(828, "span", 85);
    \u0275\u0275element(829, "i", 58);
    \u0275\u0275text(830, "COURT ");
    \u0275\u0275elementStart(831, "div", 86)(832, "div", 50);
    \u0275\u0275element(833, "i", 59);
    \u0275\u0275elementStart(834, "div", 52);
    \u0275\u0275text(835, "COURT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(836, "div", 53);
    \u0275\u0275text(837, "Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(838, "div", 60)(839, "div", 87);
    \u0275\u0275element(840, "i", 62);
    \u0275\u0275elementStart(841, "span", 63);
    \u0275\u0275text(842, "10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(843, "div", 64)(844, "div", 88);
    \u0275\u0275element(845, "i", 66);
    \u0275\u0275elementStart(846, "span", 63);
    \u0275\u0275text(847, "10");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(848, "button", 67);
    \u0275\u0275element(849, "i", 68);
    \u0275\u0275elementStart(850, "div", 69);
    \u0275\u0275text(851, " Set Tracker ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(852, "button", 70);
    \u0275\u0275element(853, "i", 71);
    \u0275\u0275elementStart(854, "div", 72);
    \u0275\u0275text(855, " Add Tag ");
    \u0275\u0275elementEnd()()()()()();
  }
}
function CasesComponent_app_cases_layout_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-cases-layout", 12);
    \u0275\u0275listener("viewModeChange", function CasesComponent_app_cases_layout_5_Template_app_cases_layout_viewModeChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleViewMode($event));
    });
    \u0275\u0275template(1, CasesComponent_app_cases_layout_5_div_1_Template, 2, 1, "div", 13)(2, CasesComponent_app_cases_layout_5_div_2_Template, 856, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("viewMode", ctx_r1.viewMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSearching);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSearching && ctx_r1.showResults);
  }
}
var CasesComponent = class _CasesComponent {
  router;
  isSearching = false;
  hasSearched = false;
  isSearchBarExpanded = false;
  // New property to track search bar expansion
  skeletonCards = Array(10).fill(0);
  // Create array for 10 skeleton cards
  isSidebarCollapsed = false;
  projectName = "NY Judgment Tracking";
  // Default project name
  currentSearchQuery = "";
  viewMode = "grid";
  showResults = false;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
  }
  onSearch(query) {
    console.log("Searching cases for:", query);
    this.currentSearchQuery = query;
    this.isSearching = true;
    this.hasSearched = true;
    this.showResults = false;
    this.isSearchBarExpanded = false;
    setTimeout(() => {
      this.isSearching = false;
      this.showResults = true;
    }, 1500);
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
  onExpandSearch() {
    this.isSearchBarExpanded = true;
    console.log("Search expanded - maintaining results visible");
  }
  onCollapseSearch() {
    this.isSearchBarExpanded = false;
    console.log("Search collapsed to compact version");
  }
  onCaseClick(caseId) {
    this.router.navigate(["/case", caseId]);
  }
  static \u0275fac = function CasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasesComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesComponent, selectors: [["app-cases"]], decls: 6, vars: 16, consts: [[1, "min-h-screen"], [3, "itemClick", "sidebarToggle", "isCollapsed"], [3, "sidebarToggle", "projectClick", "searchQueryClick", "search", "expandSearch", "collapseSearch", "isSidebarCollapsed", "projectName", "currentSearchQuery", "hasSearched", "showCollapseButton"], [1, "flex", "flex-col", "min-h-screen", "bg-cases-page"], ["class", "flex-1 bg-cases-page flex items-center justify-center min-h-empty-state", 4, "ngIf"], [3, "viewMode", "viewModeChange", 4, "ngIf"], [1, "flex-1", "bg-cases-page", "flex", "items-center", "justify-center", "min-h-empty-state"], [1, "text-center"], [1, "mx-auto", "flex", "items-center", "justify-center", "h-24", "w-24", "rounded-full", "bg-gray-100", "mb-6"], [1, "ri-search-line", "text-2xl", "text-gray-400"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-gray-500", "mb-8", "max-w-sm", "mx-auto"], [3, "viewModeChange", "viewMode"], [4, "ngIf"], ["id", "results-section", 4, "ngIf"], ["class", "rounded-lg border-t border-b border-gray-200 p-6 bg-zinc-200 animate-pulse transition-all", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "border-t", "border-b", "border-gray-200", "p-6", "bg-zinc-200", "animate-pulse", "transition-all"], [1, "flex", "items-start", "space-x-1", "case-card-title"], [1, "w-5", "h-5", "bg-gray-300", "rounded", "mr-1", "mt-1"], [1, "h-6", "bg-gray-300", "rounded", "w-2/3"], [1, "flex", "flex-wrap", "gap-4", "mb-4"], [1, "h-6", "bg-gray-200", "rounded-full", "w-16"], [1, "h-6", "bg-gray-200", "rounded-full", "w-20"], [1, "h-6", "bg-gray-200", "rounded-full", "w-18"], [1, "flex", "flex-wrap", "gap-6", "text-sm"], [1, "flex", "items-center", "space-x-2"], [1, "w-4", "h-4", "bg-gray-300", "rounded"], [1, "h-4", "bg-gray-300", "rounded", "w-16"], [1, "h-4", "bg-gray-300", "rounded", "w-20"], [1, "h-4", "bg-gray-300", "rounded", "w-12"], [1, "h-4", "bg-gray-300", "rounded", "w-32"], [1, "h-4", "bg-gray-300", "rounded", "w-10"], [1, "h-4", "bg-gray-300", "rounded", "w-24"], [1, "h-4", "bg-gray-300", "rounded", "w-14"], ["id", "results-section"], [1, "rounded-lg", "border-t", "border-b", "border-gray-200", "case-card", "bg-zinc-200", "hover:bg-white", "transition-all", "min-h-fit", "overflow-visible", "relative", "group"], [1, "ri-scales-3-line", "text-xl", "text-brand", "flex-shrink-0"], [1, "text-base", "font-semibold", "text-brand", "leading-tight", "hover:underline", "cursor-pointer", 3, "click"], [1, "flex", "flex-wrap", "gap-6", "text-sm", "text-gray-700", "case-card-details"], [1, "ri-hashtag", "text-gray-400"], [1, "font-bold", "text-xs", "uppercase", "tracking-wide", "text-gray-500"], [1, "font-medium"], [1, "ri-government-line", "text-gray-400"], [1, "ri-calendar-line", "text-gray-400"], [1, "ri-file-list-line", "text-gray-400"], [1, "ri-time-line", "text-gray-400"], [1, "flex", "flex-wrap", "gap-4", "case-card-badges"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge"], [1, "ri-scales-3-line", "text-sm", "mr-2"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "flex", "items-center", "mb-3"], [1, "ri-scales-3-line", "text-base", "mr-2", "text-gray-600"], [1, "font-semibold", "uppercase", "text-sm"], [1, "text-gray-600", "leading-relaxed", "text-sm"], [1, "ri-check-line", "text-sm", "mr-2"], [1, "ri-check-line", "text-base", "mr-2", "text-gray-600"], [1, "ri-file-text-line", "text-sm", "mr-2"], [1, "ri-file-text-line", "text-base", "mr-2", "text-gray-600"], [1, "ri-government-line", "text-sm", "mr-2"], [1, "ri-government-line", "text-base", "mr-2", "text-gray-600"], [1, "absolute", "bottom-2", "right-2"], [1, "group-hover:hidden", "flex", "items-center", "bg-gray-50", "border", "border-gray-200", "rounded-md", "px-2", "py-1", "shadow-sm", "default-file-badge"], [1, "ri-file-text-fill", "text-gray-600", "text-xs", "mr-1"], [1, "text-xs", "text-gray-700", "font-medium"], [1, "hidden", "group-hover:flex", "items-center", "space-x-1"], [1, "flex", "items-center", "bg-white", "border", "border-gray-300", "rounded-md", "px-2", "py-1", "shadow-sm", "expanded-file-badge"], [1, "ri-file-text-fill", "text-gray-600", "text-sm", "mr-1"], [1, "flex", "items-center", "justify-center", "w-8", "h-7", "bg-white", "border", "border-gray-300", "rounded-md", "shadow-sm", "hover:bg-gray-50", "transition-colors", "relative", "group/tracker"], [1, "ri-time-line", "text-gray-600", "text-lg"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-2", "py-1", "bg-gray-800", "text-white", "text-xs", "rounded", "opacity-0", "group-hover/tracker:opacity-100", "transition-opacity", "duration-200", "pointer-events-none", "whitespace-nowrap"], [1, "flex", "items-center", "justify-center", "w-8", "h-7", "bg-white", "border", "border-gray-300", "rounded-md", "shadow-sm", "hover:bg-gray-50", "transition-colors", "relative", "group/tag"], [1, "ri-price-tag-3-line", "text-gray-600", "text-lg"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-2", "py-1", "bg-gray-800", "text-white", "text-xs", "rounded", "opacity-0", "group-hover/tag:opacity-100", "transition-opacity", "duration-200", "pointer-events-none", "whitespace-nowrap"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge2"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge2:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge4"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge4:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge5"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge5:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge6"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge6:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge7"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge7:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge8"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge8:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "inline-flex", "items-center", "px-3", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-gray-200", "text-gray-700", "cursor-pointer", "relative", "group/badge9"], [1, "absolute", "bottom-full", "left-1/2", "transform", "-translate-x-1/2", "mb-2", "px-6", "py-4", "bg-white", "text-gray-800", "rounded-lg", "shadow-lg", "border", "border-gray-200", "opacity-0", "group-hover/badge9:opacity-100", "transition-opacity", "duration-300", "pointer-events-none", "z-50", "min-h-32", "w-80"], [1, "group-hover:hidden", "flex", "items-center", "bg-gray-50", "border", "border-gray-200", "rounded-md", "px-2", "py-1", "shadow-sm", "default-file-badge-wide"], [1, "flex", "items-center", "bg-white", "border", "border-gray-300", "rounded-md", "px-2", "py-1", "shadow-sm", "expanded-file-badge-wide"]], template: function CasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "app-side-nav", 1);
      \u0275\u0275listener("itemClick", function CasesComponent_Template_app_side_nav_itemClick_1_listener($event) {
        return ctx.onNavItemClick($event);
      })("sidebarToggle", function CasesComponent_Template_app_side_nav_sidebarToggle_1_listener() {
        return ctx.onSidebarToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-cases-header", 2);
      \u0275\u0275listener("sidebarToggle", function CasesComponent_Template_app_cases_header_sidebarToggle_2_listener() {
        return ctx.onSidebarToggle();
      })("projectClick", function CasesComponent_Template_app_cases_header_projectClick_2_listener() {
        return ctx.onProjectClick();
      })("searchQueryClick", function CasesComponent_Template_app_cases_header_searchQueryClick_2_listener() {
        return ctx.onSearchQueryClick();
      })("search", function CasesComponent_Template_app_cases_header_search_2_listener($event) {
        return ctx.onSearch($event);
      })("expandSearch", function CasesComponent_Template_app_cases_header_expandSearch_2_listener() {
        return ctx.onExpandSearch();
      })("collapseSearch", function CasesComponent_Template_app_cases_header_collapseSearch_2_listener() {
        return ctx.onCollapseSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275template(4, CasesComponent_div_4_Template, 8, 0, "div", 4)(5, CasesComponent_app_cases_layout_5_Template, 3, 3, "app-cases-layout", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("isCollapsed", ctx.isSidebarCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("isSidebarCollapsed", ctx.isSidebarCollapsed)("projectName", ctx.projectName)("currentSearchQuery", ctx.currentSearchQuery)("hasSearched", ctx.hasSearched && !ctx.isSearchBarExpanded)("showCollapseButton", ctx.showResults && ctx.hasSearched && ctx.isSearchBarExpanded);
      \u0275\u0275advance();
      \u0275\u0275classProp("ml-sidebar", !ctx.isSidebarCollapsed)("ml-16", ctx.isSidebarCollapsed)("pt-header-height", !ctx.isSearchBarExpanded)("pt-header-height-expanded", ctx.isSearchBarExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hasSearched && !ctx.isSearchBarExpanded);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasSearched);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, CasesLayoutComponent, CasesHeaderComponent, SideNavComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.bg-cases-page[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n.animate-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.w-18[_ngcontent-%COMP%] {\n  width: 4.5rem;\n}\n.w-16[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n.w-20[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n.w-10[_ngcontent-%COMP%] {\n  width: 2.5rem;\n}\n.w-12[_ngcontent-%COMP%] {\n  width: 3rem;\n}\n.w-14[_ngcontent-%COMP%] {\n  width: 3.5rem;\n}\n.w-24[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.w-32[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n.w-2\\/3[_ngcontent-%COMP%] {\n  width: 66.666667%;\n}\n.w-3\\/4[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.w-1\\/3[_ngcontent-%COMP%] {\n  width: 33.333333%;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n}\n.bg-gray-300[_ngcontent-%COMP%] {\n  background-color: #d1d5db;\n}\n.min-h-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.h-screen[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.min-h-\\__ph-0__[_ngcontent-%COMP%] {\n  min-height: 60vh;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1 1 0%;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.max-w-2xl[_ngcontent-%COMP%] {\n  max-width: 42rem;\n}\n.max-w-md[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.ml-4[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #146B85;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.transition-colors[_ngcontent-%COMP%] {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.h-24[_ngcontent-%COMP%] {\n  height: 6rem;\n}\n.w-24[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.text-2xl[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.py-16[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.mb-8[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.space-x-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.max-w-sm[_ngcontent-%COMP%] {\n  max-width: 24rem;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md[_ngcontent-%COMP%] {\n  max-width: 28rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.p-8[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.py-12[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.ml-sidebar[_ngcontent-%COMP%] {\n  margin-left: 206px;\n}\n.ml-16[_ngcontent-%COMP%] {\n  margin-left: 4rem;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.left-0[_ngcontent-%COMP%] {\n  left: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.z-40[_ngcontent-%COMP%] {\n  z-index: 40;\n}\n.h-52[_ngcontent-%COMP%] {\n  height: 13rem;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #146B85;\n}\n.bg-brand-light[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-brand-lighter[_ngcontent-%COMP%] {\n  background-color: rgba(20, 107, 133, 0.15);\n}\n.grid-cols-1[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.gap-3[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.bg-blue-100[_ngcontent-%COMP%] {\n  background-color: #dbeafe;\n}\n.text-blue-800[_ngcontent-%COMP%] {\n  color: #1e40af;\n}\n.bg-purple-100[_ngcontent-%COMP%] {\n  background-color: #f3e8ff;\n}\n.text-purple-800[_ngcontent-%COMP%] {\n  color: #6b21a8;\n}\n.bg-green-100[_ngcontent-%COMP%] {\n  background-color: #dcfce7;\n}\n.text-green-800[_ngcontent-%COMP%] {\n  color: #166534;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.text-gray-400[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.hover\\:shadow-md[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:bg-gray-200[_ngcontent-%COMP%]:hover {\n  background-color: #e5e7eb;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.mr-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.pt-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.px-2\\.5[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5[_ngcontent-%COMP%] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n.border-b[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.border-gray-100[_ngcontent-%COMP%] {\n  border-color: #f3f4f6;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.pb-6[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n}\n.px-8[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.space-y-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-y-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.gap-6[_ngcontent-%COMP%] {\n  gap: 1.5rem;\n}\n.leading-tight[_ngcontent-%COMP%] {\n  line-height: 1.25;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.items-start[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.flex-col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.bg-opacity-80[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.hover\\:bg-opacity-80[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.transition-all[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:bg-white[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  background-color: #e5e7eb;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.gap-4[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.py-4[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.group[_ngcontent-%COMP%]:hover   .group-hover\\:opacity-100[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.bottom-full[_ngcontent-%COMP%] {\n  bottom: 100%;\n}\n.left-1\\/2[_ngcontent-%COMP%] {\n  left: 50%;\n}\n.transform[_ngcontent-%COMP%] {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2[_ngcontent-%COMP%] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.px-3[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.bg-gray-800[_ngcontent-%COMP%] {\n  background-color: #1f2937;\n}\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.border-gray-200[_ngcontent-%COMP%] {\n  border-color: #e5e7eb;\n}\n.min-h-24[_ngcontent-%COMP%] {\n  min-height: 6rem;\n}\n.w-64[_ngcontent-%COMP%] {\n  width: 16rem;\n}\n.text-gray-600[_ngcontent-%COMP%] {\n  color: #4b5563;\n}\n.leading-relaxed[_ngcontent-%COMP%] {\n  line-height: 1.625;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.group-hover\\:opacity-100[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.transition-opacity[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300[_ngcontent-%COMP%] {\n  transition-duration: 300ms;\n}\n.pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.whitespace-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-gray-300[_ngcontent-%COMP%] {\n  color: #d1d5db;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.group[_ngcontent-%COMP%] {\n}\n.bg-zinc-200[_ngcontent-%COMP%] {\n  background-color: rgba(252, 253, 254, 0.85);\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.text-gray-500[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.min-h-fit[_ngcontent-%COMP%] {\n  min-height: fit-content;\n}\n.overflow-visible[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.hover\\:underline[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.text-base[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.pt-header-height[_ngcontent-%COMP%] {\n  padding-top: 12rem;\n}\n.pt-header-height-expanded[_ngcontent-%COMP%] {\n  padding-top: 20.1875rem;\n}\n.min-h-empty-state[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 12rem);\n}\n.min-h-empty-state-expanded[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 18rem);\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.justify-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.file-actions-badge[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 24px;\n}\n.default-file-badge[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 24px;\n  background-color: rgba(249, 250, 251, 0.9);\n}\n.expanded-file-badge[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 28px;\n}\n.default-file-badge-wide[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 24px;\n  background-color: rgba(249, 250, 251, 0.9);\n}\n.expanded-file-badge-wide[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 28px;\n}\n.ri-time-line[_ngcontent-%COMP%], \n.ri-price-tag-3-line[_ngcontent-%COMP%], \n.ri-file-text-fill[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.group\\/tracker[_ngcontent-%COMP%]:hover   .group-hover\\/tracker\\:opacity-100[_ngcontent-%COMP%], \n.group\\/tag[_ngcontent-%COMP%]:hover   .group-hover\\/tag\\:opacity-100[_ngcontent-%COMP%] {\n  z-index: 60;\n}\n.group\\/badge[_ngcontent-%COMP%], \n.group\\/tracker[_ngcontent-%COMP%], \n.group\\/tag[_ngcontent-%COMP%] {\n  position: relative;\n}\n.case-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.case-card-content[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.case-card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n  line-height: 1.25;\n}\n.case-card-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  line-height: 1.25 !important;\n}\n.case-card-title[_ngcontent-%COMP%]   .leading-tight[_ngcontent-%COMP%] {\n  line-height: 1.25 !important;\n}\n.case-card-details[_ngcontent-%COMP%] {\n  margin-bottom: 1.125rem !important;\n  margin-top: 0 !important;\n}\n.case-card-badges[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n.space-x-1[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=cases.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasesComponent, [{
    type: Component,
    args: [{ selector: "app-cases", standalone: true, imports: [CommonModule, CasesLayoutComponent, CasesHeaderComponent, SideNavComponent], template: `<!-- Cases Page with Layout -->
<div class="min-h-screen">
  
  <!-- Side Navigation - Fixed Full Height -->
  <app-side-nav
    [isCollapsed]="isSidebarCollapsed"
    (itemClick)="onNavItemClick($event)"
    (sidebarToggle)="onSidebarToggle()">
  </app-side-nav>
  
  <!-- Fixed Header Component -->
  <app-cases-header
    [isSidebarCollapsed]="isSidebarCollapsed"
    [projectName]="projectName"
    [currentSearchQuery]="currentSearchQuery"
    [hasSearched]="hasSearched && !isSearchBarExpanded"
    [showCollapseButton]="showResults && hasSearched && isSearchBarExpanded"
    (sidebarToggle)="onSidebarToggle()"
    (projectClick)="onProjectClick()"
    (searchQueryClick)="onSearchQueryClick()"
    (search)="onSearch($event)"
    (expandSearch)="onExpandSearch()"
    (collapseSearch)="onCollapseSearch()">
  </app-cases-header>
  
  <!-- Main Content Area -->
  <div class="flex flex-col min-h-screen bg-cases-page" 
           [class.ml-sidebar]="!isSidebarCollapsed" 
           [class.ml-16]="isSidebarCollapsed"
           [class.pt-header-height]="!isSearchBarExpanded"
           [class.pt-header-height-expanded]="isSearchBarExpanded">
  

    <!-- Empty State (when no search performed) -->
    <div *ngIf="!hasSearched && !isSearchBarExpanded" class="flex-1 bg-cases-page flex items-center justify-center min-h-empty-state">
      <div class="text-center">
        <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
          <i class="ri-search-line text-2xl text-gray-400"></i>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Start Your Search</h3>
        <p class="text-gray-500 mb-8 max-w-sm mx-auto">
          Enter your search terms above to find cases, attorneys, law firms, judges, or parties.
        </p>
          </div>
        </div>

    <!-- Results Section (scrollable) -->
    <app-cases-layout 
      *ngIf="hasSearched"
      [viewMode]="viewMode"
      (viewModeChange)="toggleViewMode($event)">
        <!-- Cases Content Area -->
          
          <!-- Skeleton Loader Cards (while loading) -->
          <div *ngIf="isSearching">
              <div *ngFor="let card of skeletonCards" 
                   class="rounded-lg border-t border-b border-gray-200 p-6 bg-zinc-200 animate-pulse transition-all">
              
              <!-- Case Title Row -->
              <div class="flex items-start space-x-1 case-card-title">
                <div class="w-5 h-5 bg-gray-300 rounded mr-1 mt-1"></div>
                <div class="h-6 bg-gray-300 rounded w-2/3"></div>
              </div>
              
              <!-- Badges Row -->
              <div class="flex flex-wrap gap-4 mb-4">
                <div class="h-6 bg-gray-200 rounded-full w-16"></div>
                <div class="h-6 bg-gray-200 rounded-full w-20"></div>
                <div class="h-6 bg-gray-200 rounded-full w-18"></div>
                <div class="h-6 bg-gray-200 rounded-full w-20"></div>
              </div>
              
              <!-- Data Row -->
              <div class="flex flex-wrap gap-6 text-sm">
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-gray-300 rounded"></div>
                  <div class="h-4 bg-gray-300 rounded w-16"></div>
                  <div class="h-4 bg-gray-300 rounded w-20"></div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-gray-300 rounded"></div>
                  <div class="h-4 bg-gray-300 rounded w-12"></div>
                  <div class="h-4 bg-gray-300 rounded w-32"></div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-gray-300 rounded"></div>
                  <div class="h-4 bg-gray-300 rounded w-10"></div>
                  <div class="h-4 bg-gray-300 rounded w-24"></div>
              </div>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-gray-300 rounded"></div>
                  <div class="h-4 bg-gray-300 rounded w-10"></div>
                  <div class="h-4 bg-gray-300 rounded w-16"></div>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-gray-300 rounded"></div>
                  <div class="h-4 bg-gray-300 rounded w-14"></div>
                  <div class="h-4 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
              
            </div>
          </div>

          <!-- Actual Results Cards (after loading) -->
          <div *ngIf="!isSearching && showResults" id="results-section">
            
            <!-- Result Card 1 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('CIV537691')">
                  AMBER LAUREL BAPTISTE VS MICHAEL LEWIS GOGUEN
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">CIV537691</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">California Superior Courts - San Mateo County Superior Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">8 March 2016</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Civil</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Active</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">2</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">2</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 2 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('COM892345')">
                  JOHNSON MANUFACTURING INC VS STATE OF NEW YORK
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">COM892345</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">New York State Supreme Court - Commercial Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">15 January 2017</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Commercial</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">In Progress</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge2">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge2:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge2">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge2:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge2">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge2:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge2">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge2:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">2</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">2</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 3 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('ADM778912')">
                  WILSON ESTATES LLC VS CITY PLANNING COMMISSION
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">ADM778912</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Administrative Court - Planning Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">22 September 2018</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Administrative</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Closed</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">3</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">3</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('PRB445621')">
                  MARTINEZ FAMILY TRUST VS THOMPSON HOLDINGS
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">PRB445621</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Probate Court - Estate Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">7 March 2019</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Probate</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Pending</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge4">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge4:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge4">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge4:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge4">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge4:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge4">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge4:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">4</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">4</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 5 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('LAB334128')">
                  RODRIGUEZ CONSTRUCTION VS UNION WORKERS LOCAL 247
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">LAB334128</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Labor Relations Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">14 November 2020</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Labor</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Arbitration</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge5">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge5:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge5">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge5:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge5">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge5:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge5">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge5:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">5</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">5</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 6 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('COM567891')">
                  ANDERSON MEDICAL GROUP VS HEALTH INSURANCE CORP
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">COM567891</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Commercial Court - Healthcare Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">3 June 2021</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Commercial</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Settlement</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge6">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge6:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge6">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge6:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge6">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge6:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge6">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge6:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">6</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">6</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 7 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('IP223467')">
                  TECH INNOVATIONS INC VS PATENT OFFICE
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">IP223467</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Federal Circuit Court - IP Division</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">18 August 2022</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Intellectual Property</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Appeal Filed</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge7">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge7:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge7">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge7:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge7">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge7:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge7">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge7:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">7</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">7</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 8 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('ENV445123')">
                  ENVIRONMENTAL PROTECTION AGENCY VS CHEMICAL CORP
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">ENV445123</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Environmental Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">29 April 2023</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Environmental</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Investigation</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge8">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge8:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge8">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge8:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge8">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge8:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge8">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge8:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">8</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">8</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Result Card 9 -->
            <div class="rounded-lg border-t border-b border-gray-200 case-card bg-zinc-200 hover:bg-white transition-all min-h-fit overflow-visible relative group">
              <div class="flex items-start space-x-1 case-card-title">
                <i class="ri-scales-3-line text-xl text-brand flex-shrink-0"></i>
                <h3 class="text-base font-semibold text-brand leading-tight hover:underline cursor-pointer"
                    (click)="onCaseClick('FIN778934')">
                  GLOBAL FINANCE BANK VS MORTGAGE HOLDERS UNION
                </h3>
              </div>
              <div class="flex flex-wrap gap-6 text-sm text-gray-700 case-card-details">
                <div class="flex items-center space-x-2"><i class="ri-hashtag text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">CASE ID:</span><span class="font-medium">FIN778934</span></div>
                <div class="flex items-center space-x-2"><i class="ri-government-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">COURT:</span><span class="font-medium">Financial Services Court</span></div>
                <div class="flex items-center space-x-2"><i class="ri-calendar-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">DATE:</span><span class="font-medium">12 December 2023</span></div>
                <div class="flex items-center space-x-2"><i class="ri-file-list-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">TYPE:</span><span class="font-medium">Financial</span></div>
                <div class="flex items-center space-x-2"><i class="ri-time-line text-gray-400"></i><span class="font-bold text-xs uppercase tracking-wide text-gray-500">STATUS:</span><span class="font-medium">Class Action</span></div>
              </div>
              <div class="flex flex-wrap gap-4 case-card-badges">
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge9">
                  <i class="ri-scales-3-line text-sm mr-2"></i>JUDGE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge9:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-scales-3-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">JUDGE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Presiding judge responsible for overseeing this legal case and making judicial decisions throughout the proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge9">
                  <i class="ri-check-line text-sm mr-2"></i>STATUS
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge9:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-check-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">STATUS</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Current procedural status indicating the stage and progress of the legal case within the court system.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge9">
                  <i class="ri-file-text-line text-sm mr-2"></i>TYPE
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge9:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-file-text-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">TYPE</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Legal classification determining the nature of the dispute, such as civil, criminal, or administrative proceedings.</div>
                  </div>
                </span>
                <span class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 cursor-pointer relative group/badge9">
                  <i class="ri-government-line text-sm mr-2"></i>COURT
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover/badge9:opacity-100 transition-opacity duration-300 pointer-events-none z-50 min-h-32 w-80">
                    <div class="flex items-center mb-3"><i class="ri-government-line text-base mr-2 text-gray-600"></i><div class="font-semibold uppercase text-sm">COURT</div></div>
                    <div class="text-gray-600 leading-relaxed text-sm">Judicial authority and jurisdiction level where the case is being heard, determining applicable rules and procedures.</div>
                  </div>
                </span>
              </div>
              
              <!-- File Actions Badge -->
              <div class="absolute bottom-2 right-2">
                <!-- Default Badge (not on hover) - Wide for double digits -->
                <div class="group-hover:hidden flex items-center bg-gray-50 border border-gray-200 rounded-md px-2 py-1 shadow-sm default-file-badge-wide">
                  <i class="ri-file-text-fill text-gray-600 text-xs mr-1"></i>
                  <span class="text-xs text-gray-700 font-medium">10</span>
                </div>
                
                <!-- Expanded Badge (on hover) -->
                <div class="hidden group-hover:flex items-center space-x-1">
                  <!-- File Count Badge - Wide for double digits -->
                  <div class="flex items-center bg-white border border-gray-300 rounded-md px-2 py-1 shadow-sm expanded-file-badge-wide">
                    <i class="ri-file-text-fill text-gray-600 text-sm mr-1"></i>
                    <span class="text-xs text-gray-700 font-medium">10</span>
                  </div>
                  
                  <!-- Set Tracker Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tracker">
                    <i class="ri-time-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tracker:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Set Tracker
                    </div>
                  </button>
                  
                  <!-- Add Tag Button -->
                  <button class="flex items-center justify-center w-8 h-7 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors relative group/tag">
                    <i class="ri-price-tag-3-line text-gray-600 text-lg"></i>
                    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Add Tag
                    </div>
                  </button>
                </div>
              </div>
            </div>
            
          </div>

    </app-cases-layout>
    
  </div>
</div>

`, styles: ["/* src/app/pages/cases/cases.component.css */\n:host {\n  display: block;\n}\n.bg-cases-page {\n  background-color: #F8F8F8;\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n.space-y-4 > * + * {\n  margin-top: 1rem;\n}\n.space-y-2 > * + * {\n  margin-top: 0.5rem;\n}\n.w-18 {\n  width: 4.5rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-14 {\n  width: 3.5rem;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-2\\/3 {\n  width: 66.666667%;\n}\n.w-3\\/4 {\n  width: 75%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.bg-gray-200 {\n  background-color: #e5e7eb;\n}\n.bg-gray-300 {\n  background-color: #d1d5db;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.h-screen {\n  height: 100vh;\n}\n.min-h-\\[60vh\\] {\n  min-height: 60vh;\n}\n.flex {\n  display: flex;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.text-center {\n  text-align: center;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.bg-brand {\n  background-color: #146B85;\n}\n.text-white {\n  color: #ffffff;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.hover\\:bg-gray-200:hover {\n  background-color: #e5e7eb;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.h-24 {\n  height: 6rem;\n}\n.w-24 {\n  width: 6rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.space-x-4 > * + * {\n  margin-left: 1rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-medium {\n  font-weight: 500;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.bg-white {\n  background-color: white;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-stroke-weak {\n  border-color: #e5e7eb;\n}\n.p-8 {\n  padding: 2rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.ml-sidebar {\n  margin-left: 206px;\n}\n.ml-16 {\n  margin-left: 4rem;\n}\n.fixed {\n  position: fixed;\n}\n.left-0 {\n  left: 0;\n}\n.top-0 {\n  top: 0;\n}\n.z-40 {\n  z-index: 40;\n}\n.h-52 {\n  height: 13rem;\n}\n.text-brand {\n  color: #146B85;\n}\n.bg-brand-light {\n  background-color: rgba(20, 107, 133, 0.1);\n}\n.bg-brand-lighter {\n  background-color: rgba(20, 107, 133, 0.15);\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.bg-blue-100 {\n  background-color: #dbeafe;\n}\n.text-blue-800 {\n  color: #1e40af;\n}\n.bg-purple-100 {\n  background-color: #f3e8ff;\n}\n.text-purple-800 {\n  color: #6b21a8;\n}\n.bg-green-100 {\n  background-color: #dcfce7;\n}\n.text-green-800 {\n  color: #166534;\n}\n.bg-gray-100 {\n  background-color: #f3f4f6;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.text-gray-400 {\n  color: #9ca3af;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.hover\\:shadow-md:hover {\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.hover\\:bg-gray-200:hover {\n  background-color: #e5e7eb;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.space-y-2 > * + * {\n  margin-top: 0.5rem;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-gray-100 {\n  border-color: #f3f4f6;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.space-y-1 > * + * {\n  margin-top: 0.25rem;\n}\n.space-y-2 > * + * {\n  margin-top: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.items-start {\n  align-items: flex-start;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.flex-col {\n  flex-direction: column;\n}\n.bg-opacity-80 {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.hover\\:bg-opacity-80:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.hover\\:bg-white:hover {\n  background-color: white;\n}\n.bg-gray-200 {\n  background-color: #e5e7eb;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.relative {\n  position: relative;\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n.absolute {\n  position: absolute;\n}\n.bottom-full {\n  bottom: 100%;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.transform {\n  transform: var(--tw-transform);\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.bg-gray-800 {\n  background-color: #1f2937;\n}\n.text-white {\n  color: #ffffff;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.text-gray-800 {\n  color: #1f2937;\n}\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.border {\n  border-width: 1px;\n}\n.border-gray-200 {\n  border-color: #e5e7eb;\n}\n.min-h-24 {\n  min-height: 6rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.text-gray-600 {\n  color: #4b5563;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.group-hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.z-50 {\n  z-index: 50;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-gray-300 {\n  color: #d1d5db;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.group {\n}\n.bg-zinc-200 {\n  background-color: rgba(252, 253, 254, 0.85);\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-gray-500 {\n  color: #6b7280;\n}\n.font-medium {\n  font-weight: 500;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.min-h-fit {\n  min-height: fit-content;\n}\n.overflow-visible {\n  overflow: visible;\n}\n.hover\\:underline:hover {\n  text-decoration: underline;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.pt-header-height {\n  padding-top: 12rem;\n}\n.pt-header-height-expanded {\n  padding-top: 20.1875rem;\n}\n.min-h-empty-state {\n  min-height: calc(100vh - 12rem);\n}\n.min-h-empty-state-expanded {\n  min-height: calc(100vh - 18rem);\n}\n.flex {\n  display: flex;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.file-actions-badge {\n  width: 42px;\n  height: 24px;\n}\n.default-file-badge {\n  width: 42px;\n  height: 24px;\n  background-color: rgba(249, 250, 251, 0.9);\n}\n.expanded-file-badge {\n  width: 50px;\n  height: 28px;\n}\n.default-file-badge-wide {\n  width: 50px;\n  height: 24px;\n  background-color: rgba(249, 250, 251, 0.9);\n}\n.expanded-file-badge-wide {\n  width: 58px;\n  height: 28px;\n}\n.ri-time-line,\n.ri-price-tag-3-line,\n.ri-file-text-fill {\n  font-size: 1.125rem;\n}\n.group\\/tracker:hover .group-hover\\/tracker\\:opacity-100,\n.group\\/tag:hover .group-hover\\/tag\\:opacity-100 {\n  z-index: 60;\n}\n.group\\/badge,\n.group\\/tracker,\n.group\\/tag {\n  position: relative;\n}\n.case-card {\n  padding: 1.5rem;\n}\n.case-card-content {\n  margin-bottom: 1rem;\n}\n.case-card-title {\n  margin-bottom: 0.25rem !important;\n  line-height: 1.25;\n}\n.case-card-title h3 {\n  margin: 0 !important;\n  line-height: 1.25 !important;\n}\n.case-card-title .leading-tight {\n  line-height: 1.25 !important;\n}\n.case-card-details {\n  margin-bottom: 1.125rem !important;\n  margin-top: 0 !important;\n}\n.case-card-badges {\n  margin-top: 0 !important;\n}\n.space-x-1 > * + * {\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=cases.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesComponent, { className: "CasesComponent" });
})();
export {
  CasesComponent
};
//# sourceMappingURL=chunk-OHVDAHUO.js.map
