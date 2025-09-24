import {
  animate,
  sequence,
  state,
  style,
  transition,
  trigger
} from "./chunk-53JHYZBU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-EU5GNIRH.js";
import {
  ANIMATION_MODULE_TYPE,
  CommonModule,
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-B65Y4WCA.js";

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationBuilder = class _AnimationBuilder {
  static \u0275fac = function AnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationBuilder,
    factory: () => (() => inject(BrowserAnimationBuilder))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  animationModuleType = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _nextAnimationId = 0;
  _renderer;
  constructor(rootRenderer, doc) {
    super();
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation2) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static \u0275fac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserAnimationBuilder,
    factory: _BrowserAnimationBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  _id;
  _renderer;
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  id;
  element;
  _renderer;
  parentPlayer = null;
  _started = false;
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
  totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}

// src/app/components/ui/search-bar/search-bar.component.ts
var _c0 = (a0, a1) => ({ "opacity-100 pointer-events-auto": a0, "opacity-0 pointer-events-none": a1 });
var _c1 = (a0, a1) => ({ "opacity-100": a0, "opacity-0": a1 });
var _c2 = (a0, a1) => ({ "translate-x-0": a0, "translate-x-full": a1 });
function SearchBarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function SearchBarComponent_button_5_Template_button_click_0_listener() {
      const type_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSearchType(type_r2));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.selectedSearchType.id === type_r2.id ? "bg-brand text-white border-brand" : "text-gray-700 hover:bg-gray-50 border-gray-300");
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + type_r2.icon + " text-lg");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r2.label);
  }
}
function SearchBarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43);
    \u0275\u0275listener("click", function SearchBarComponent_div_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProOption("natural"));
    });
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 44);
    \u0275\u0275element(4, "i", 45);
    \u0275\u0275elementStart(5, "div", 46)(6, "h4", 47);
    \u0275\u0275text(7, "Natural Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 48);
    \u0275\u0275text(9, "Standard natural language processing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 32);
    \u0275\u0275element(11, "input", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 43);
    \u0275\u0275listener("click", function SearchBarComponent_div_18_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProOption("advanced"));
    });
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 44);
    \u0275\u0275element(15, "i", 50);
    \u0275\u0275elementStart(16, "div", 46)(17, "h4", 47);
    \u0275\u0275text(18, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 48);
    \u0275\u0275text(20, "Advanced AI features and capabilities");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 32);
    \u0275\u0275element(22, "input", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r2.selectedProOption === "natural");
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r2.selectedProOption === "advanced");
  }
}
var SearchBarComponent = class _SearchBarComponent {
  search = new EventEmitter();
  searchQuery = "";
  isProDropdownOpen = false;
  selectedProOption = "natural";
  isFilterPanelOpen = false;
  searchTypes = [
    { id: "cases", label: "Cases", icon: "folder-open-line" },
    { id: "attorneys", label: "Attorneys", icon: "user-line" },
    { id: "law-firms", label: "Law Firms", icon: "building-line" },
    { id: "judges", label: "Judges", icon: "scales-line" },
    { id: "parties", label: "Parties", icon: "team-line" }
  ];
  selectedSearchType = this.searchTypes[0];
  // Default to Cases
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
  selectSearchType(type) {
    this.selectedSearchType = type;
    console.log("Selected search type:", type);
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
  }, outputs: { search: "search" }, decls: 76, vars: 19, consts: [[1, "w-4/5", "mx-auto"], [1, "mb-6"], [1, "text-xl", "font-bold", "text-gray-900", "mb-4", "uppercase"], [1, "flex", "items-center", "space-x-6"], ["class", "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors border", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "relative"], [1, "bg-white", "border", "border-stroke-weak", "rounded-lg"], [1, "flex", "items-center", "px-4", "py-4"], [1, "flex-1", "relative"], ["type", "text", "placeholder", "Ask the researcher", 1, "w-full", "pr-4", "py-2", "bg-transparent", "focus:outline-none", "placeholder-opacity-30", "text-lg", "border-none", 3, "ngModelChange", "keyup", "ngModel"], [1, "flex", "items-center", "justify-between", "px-4", "pb-4", "relative"], [1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", "px-3", "py-2", "rounded-lg", "hover:bg-gray-50", 2, "outline", "none", "border", "#00000000", 3, "click"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#147885"], [1, "underline", "text-sm", "font-medium"], [1, "ri-arrow-down-s-line", 2, "color", "#353D59", "font-size", "14px"], ["class", "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", 4, "ngIf"], [1, "flex", "items-center", "space-x-3"], [1, "ri-filter-line", "text-lg", 2, "color", "#147885"], [1, "w-9", "h-9", "rounded-lg", "transition-colors", "flex", "items-center", "justify-center", "ml-3", 3, "click", "disabled"], [1, "ri-arrow-right-long-line", "text-white", "text-lg"], [1, "fixed", "inset-0", "z-50", "overflow-hidden", "transition-opacity", "duration-300", 3, "ngClass"], [1, "absolute", "inset-0", "bg-gray-900", "bg-opacity-10", "transition-opacity", "duration-300", 3, "click", "ngClass"], [1, "absolute", "right-0", "top-0", "h-full", "w-80", "bg-white", "shadow-xl", "transition-transform", "duration-500", "ease-out", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-gray-200"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "click"], [1, "ri-close-line", "text-xl", "text-gray-500"], [1, "p-6"], [1, "space-y-6"], [1, "text-sm", "font-medium", "text-gray-900", "mb-3"], [1, "space-y-2"], ["type", "date", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand"], [1, "flex", "items-center"], ["type", "checkbox", 1, "rounded", "border-gray-300", "text-brand", "focus:ring-brand"], [1, "ml-2", "text-sm", "text-gray-700"], [1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand"], [1, "absolute", "bottom-0", "left-0", "right-0", "px-6", "py-4", "border-t", "border-gray-200", "bg-white"], [1, "flex", "space-x-3"], [1, "flex-1", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex-1", "px-4", "py-2", "bg-brand", "text-white", "rounded-lg", "hover:bg-teal-700", "transition-colors", 3, "click"], [1, "flex", "items-center", "space-x-2", "px-4", "py-2", "rounded-lg", "transition-colors", "border", 3, "click"], [1, "font-medium"], [1, "absolute", "top-full", "left-0", "mt-2", "w-80", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "z-50"], [1, "px-4", "py-3", "hover:bg-gray-50", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "space-x-3", "flex-1"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#69718C"], [1, "flex-1"], [1, "text-sm", "font-medium", "text-text-strong"], [1, "text-xs", "text-text-weak"], ["type", "radio", "name", "proOption", "value", "natural", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"], [1, "ri-flow-chart", "text-lg", 2, "color", "#69718C"], ["type", "radio", "name", "proOption", "value", "advanced", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"]], template: function SearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3, "Search For");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3);
      \u0275\u0275template(5, SearchBarComponent_button_5_Template, 4, 5, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup", function SearchBarComponent_Template_input_keyup_10_listener($event) {
        return ctx.onKeyPress($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 5)(13, "button", 11);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_13_listener() {
        return ctx.toggleProDropdown();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementStart(15, "span", 13);
      \u0275\u0275text(16, "Natural Language");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, SearchBarComponent_div_18_Template, 23, 2, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 16)(20, "button", 11);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_20_listener() {
        return ctx.toggleFilterPanel();
      });
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275elementStart(22, "span", 13);
      \u0275\u0275text(23, "Filter");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_24_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275element(25, "i", 19);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 20)(27, "div", 21);
      \u0275\u0275listener("click", function SearchBarComponent_Template_div_click_27_listener() {
        return ctx.closeFilterPanel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 22)(29, "div", 23)(30, "h2", 24);
      \u0275\u0275text(31, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 25);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_32_listener() {
        return ctx.closeFilterPanel();
      });
      \u0275\u0275element(33, "i", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 27)(35, "div", 28)(36, "div")(37, "h3", 29);
      \u0275\u0275text(38, "Date Range");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 30);
      \u0275\u0275element(40, "input", 31)(41, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div")(43, "h3", 29);
      \u0275\u0275text(44, "Case Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 30)(46, "label", 32);
      \u0275\u0275element(47, "input", 33);
      \u0275\u0275elementStart(48, "span", 34);
      \u0275\u0275text(49, "Civil");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "label", 32);
      \u0275\u0275element(51, "input", 33);
      \u0275\u0275elementStart(52, "span", 34);
      \u0275\u0275text(53, "Criminal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "label", 32);
      \u0275\u0275element(55, "input", 33);
      \u0275\u0275elementStart(56, "span", 34);
      \u0275\u0275text(57, "Corporate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div")(59, "h3", 29);
      \u0275\u0275text(60, "Jurisdiction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "select", 35)(62, "option");
      \u0275\u0275text(63, "All Jurisdictions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option");
      \u0275\u0275text(65, "Federal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option");
      \u0275\u0275text(67, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option");
      \u0275\u0275text(69, "Local");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(70, "div", 36)(71, "div", 37)(72, "button", 38);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_72_listener() {
        return ctx.clearFilters();
      });
      \u0275\u0275text(73, " Clear All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 39);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_74_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275text(75, " Apply Filters ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.searchTypes);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.isProDropdownOpen);
      \u0275\u0275advance(6);
      \u0275\u0275styleProp("background-color", ctx.searchQuery && ctx.searchQuery.trim().length > 0 ? "#147885" : "rgba(20, 120, 133, 0.5)");
      \u0275\u0275property("disabled", !ctx.searchQuery || ctx.searchQuery.trim().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c0, ctx.isFilterPanelOpen, !ctx.isFilterPanelOpen));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c1, ctx.isFilterPanelOpen, !ctx.isFilterPanelOpen));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(16, _c2, ctx.isFilterPanelOpen, !ctx.isFilterPanelOpen))("@slideIn", ctx.isFilterPanelOpen ? "in" : "out");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.w-4\\/5[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.focus-within\\:ring-2[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.1);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none !important;\n  border: none !important;\n  ring: none !important;\n}\n.hover\\:bg-blue-600[_ngcontent-%COMP%]:hover {\n  background-color: #0F5F66;\n}\n.text-brand[_ngcontent-%COMP%] {\n  color: #147885;\n}\n.hover\\:text-brand[_ngcontent-%COMP%]:hover {\n  color: #147885;\n}\n.bg-brand[_ngcontent-%COMP%] {\n  background-color: #147885;\n}\n.rounded-r-lg[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.border-l[_ngcontent-%COMP%] {\n  border-left-width: 1px;\n}\n.border-stroke-weak[_ngcontent-%COMP%] {\n  border-color: #ADB4CC;\n}\n.border-t[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n.border-none[_ngcontent-%COMP%] {\n  border: none;\n}\n.underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.space-x-2[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.space-x-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n.ri-filter-line[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.border-0[_ngcontent-%COMP%] {\n  border: none !important;\n  outline: none !important;\n}\n.border-0[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n}\n.z-50[_ngcontent-%COMP%] {\n  z-index: 50;\n}\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  accent-color: #147885;\n}\n.cursor-not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.ri-sparkling-fill[_ngcontent-%COMP%], \n.ri-user-line[_ngcontent-%COMP%], \n.ri-vip-crown-line[_ngcontent-%COMP%], \n.ri-folder-open-line[_ngcontent-%COMP%], \n.ri-building-line[_ngcontent-%COMP%], \n.ri-scales-line[_ngcontent-%COMP%], \n.ri-team-line[_ngcontent-%COMP%], \n.ri-arrow-left-s-line[_ngcontent-%COMP%], \n.ri-arrow-right-s-line[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.space-x-6[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.font-medium[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.text-gray-900[_ngcontent-%COMP%] {\n  color: #111827;\n}\n.text-gray-700[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.border-brand[_ngcontent-%COMP%] {\n  border-color: #147885;\n}\n.border-gray-300[_ngcontent-%COMP%] {\n  border-color: #d1d5db;\n}\n.hover\\:bg-gray-50[_ngcontent-%COMP%]:hover {\n  background-color: #f9fafb;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.transition-transform[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 400ms;\n}\n.transition-opacity[_ngcontent-%COMP%] {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.duration-300[_ngcontent-%COMP%] {\n  transition-duration: 300ms;\n}\n.duration-500[_ngcontent-%COMP%] {\n  transition-duration: 500ms;\n}\n.ease-out[_ngcontent-%COMP%] {\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.translate-x-0[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.translate-x-full[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.inset-0[_ngcontent-%COMP%] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.right-0[_ngcontent-%COMP%] {\n  right: 0;\n}\n.top-0[_ngcontent-%COMP%] {\n  top: 0;\n}\n.h-full[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.w-80[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.bg-gray-900[_ngcontent-%COMP%] {\n  background-color: #111827;\n}\n.bg-opacity-10[_ngcontent-%COMP%] {\n  background-color: rgba(17, 24, 39, 0.1);\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.shadow-xl[_ngcontent-%COMP%] {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.transform[_ngcontent-%COMP%] {\n  transform: var(--tw-transform);\n}\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.opacity-100[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.pointer-events-auto[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n@media (max-width: 768px) {\n  .w-4\\/5[_ngcontent-%COMP%] {\n    width: 95%;\n    padding: 0 1rem;\n  }\n  .flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .border-l[_ngcontent-%COMP%] {\n    border-left: none;\n    border-top: 1px solid;\n  }\n  .rounded-r-lg[_ngcontent-%COMP%] {\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=search-bar.component.css.map */"], data: { animation: [
    trigger("slideIn", [
      state("out", style({
        transform: "translateX(100%)"
      })),
      state("in", style({
        transform: "translateX(0)"
      })),
      transition("out => in", [
        animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)")
      ]),
      transition("in => out", [
        animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)")
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarComponent, [{
    type: Component,
    args: [{ selector: "app-search-bar", standalone: true, imports: [CommonModule, FormsModule], animations: [
      trigger("slideIn", [
        state("out", style({
          transform: "translateX(100%)"
        })),
        state("in", style({
          transform: "translateX(0)"
        })),
        transition("out => in", [
          animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)")
        ]),
        transition("in => out", [
          animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)")
        ])
      ])
    ], template: `<!-- Search Bar Component -->
<div class="w-4/5 mx-auto">
  
  <!-- Search Type Selection -->
  <div class="mb-6">
    <h2 class="text-xl font-bold text-gray-900 mb-4 uppercase">Search For</h2>
    <div class="flex items-center space-x-6">
      <button
        *ngFor="let type of searchTypes"
        (click)="selectSearchType(type)"
        class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors border"
        [class]="selectedSearchType.id === type.id ? 
          'bg-brand text-white border-brand' : 
          'text-gray-700 hover:bg-gray-50 border-gray-300'">
        <i [class]="'ri-' + type.icon + ' text-lg'"></i>
        <span class="font-medium">{{ type.label }}</span>
      </button>
    </div>
  </div>

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

  <!-- Filter Side Panel - full overlay -->
  <div 
    class="fixed inset-0 z-50 overflow-hidden transition-opacity duration-300"
    [ngClass]="{
      'opacity-100 pointer-events-auto': isFilterPanelOpen,
      'opacity-0 pointer-events-none': !isFilterPanelOpen
    }">
    
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-gray-900 bg-opacity-10 transition-opacity duration-300"
      [ngClass]="{
        'opacity-100': isFilterPanelOpen,
        'opacity-0': !isFilterPanelOpen
      }"
      (click)="closeFilterPanel()">
    </div>
    
    <!-- Side Panel -->
    <div 
      class="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform duration-500 ease-out"
      [ngClass]="{
        'translate-x-0': isFilterPanelOpen,
        'translate-x-full': !isFilterPanelOpen
      }"
      [@slideIn]="isFilterPanelOpen ? 'in' : 'out'">
      
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
`, styles: ["/* src/app/components/ui/search-bar/search-bar.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.focus-within\\:ring-2:focus-within {\n  box-shadow: 0 0 0 2px rgba(20, 120, 133, 0.1);\n}\ninput:focus {\n  outline: none !important;\n  box-shadow: none !important;\n  border: none !important;\n  ring: none !important;\n}\n.hover\\:bg-blue-600:hover {\n  background-color: #0F5F66;\n}\n.text-brand {\n  color: #147885;\n}\n.hover\\:text-brand:hover {\n  color: #147885;\n}\n.bg-brand {\n  background-color: #147885;\n}\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-stroke-weak {\n  border-color: #ADB4CC;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-none {\n  border: none;\n}\n.underline {\n  text-decoration: underline;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > * + * {\n  margin-left: 0.5rem;\n}\n.space-x-3 > * + * {\n  margin-left: 0.75rem;\n}\n.ri-filter-line {\n  font-size: 1.125rem;\n}\n.border-0 {\n  border: none !important;\n  outline: none !important;\n}\n.border-0:focus {\n  outline: none !important;\n  border: none !important;\n}\n.z-50 {\n  z-index: 50;\n}\n.shadow-lg {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\ninput[type=radio] {\n  accent-color: #147885;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.ri-sparkling-fill,\n.ri-user-line,\n.ri-vip-crown-line,\n.ri-folder-open-line,\n.ri-building-line,\n.ri-scales-line,\n.ri-team-line,\n.ri-arrow-left-s-line,\n.ri-arrow-right-s-line {\n  font-size: 1.125rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.space-x-6 > * + * {\n  margin-left: 1.5rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.text-gray-900 {\n  color: #111827;\n}\n.text-gray-700 {\n  color: #374151;\n}\n.border-brand {\n  border-color: #147885;\n}\n.border-gray-300 {\n  border-color: #d1d5db;\n}\n.hover\\:bg-gray-50:hover {\n  background-color: #f9fafb;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 400ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.translate-x-0 {\n  transform: translateX(0);\n}\n.translate-x-full {\n  transform: translateX(100%);\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.inset-0 {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.right-0 {\n  right: 0;\n}\n.top-0 {\n  top: 0;\n}\n.h-full {\n  height: 100%;\n}\n.w-80 {\n  width: 20rem;\n}\n.bg-gray-900 {\n  background-color: #111827;\n}\n.bg-opacity-10 {\n  background-color: rgba(17, 24, 39, 0.1);\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.shadow-xl {\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n}\n.transform {\n  transform: var(--tw-transform);\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n@media (max-width: 768px) {\n  .w-4\\/5 {\n    width: 95%;\n    padding: 0 1rem;\n  }\n  .flex {\n    flex-direction: column;\n  }\n  .border-l {\n    border-left: none;\n    border-top: 1px solid;\n  }\n  .rounded-r-lg {\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=search-bar.component.css.map */\n"] }]
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src/app/components/ui/search-bar/search-bar.component.ts", lineNumber: 35 });
})();

export {
  SearchBarComponent
};
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.15
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-IN3Q27K6.js.map
