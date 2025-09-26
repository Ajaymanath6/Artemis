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
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EQUADVRM.js";
import {
  ANIMATION_MODULE_TYPE,
  CommonModule,
  Component,
  DOCUMENT,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  Output,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  __spreadValues,
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-Z6WLR7UX.js";

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
function SearchBarComponent_div_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function SearchBarComponent_div_1_button_5_Template_button_click_0_listener() {
      const type_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSearchType(type_r2));
    });
    \u0275\u0275element(1, "i");
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r2.selectedSearchType.id === type_r2.id ? "bg-gray-light text-gray-700" : "text-gray-700 hover:bg-gray-100");
    \u0275\u0275advance();
    \u0275\u0275classMap("ri-" + type_r2.icon + " text-base");
    \u0275\u0275styleProp("color", "#374151");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r2.label);
  }
}
function SearchBarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "h2", 26);
    \u0275\u0275text(3, "Search For:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275template(5, SearchBarComponent_div_1_button_5_Template, 4, 7, "button", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.searchTypes);
  }
}
function SearchBarComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
}
function SearchBarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "span", 34);
    \u0275\u0275listener("click", function SearchBarComponent_div_2_Template_span_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandSearchBar());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275template(6, SearchBarComponent_div_2_div_6_Template, 1, 0, "div", 36);
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function SearchBarComponent_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandSearchBar());
    });
    \u0275\u0275element(8, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 37);
    \u0275\u0275listener("click", function SearchBarComponent_div_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275element(10, "i", 39);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.searchQuery || "Search...");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isSearching);
  }
}
function SearchBarComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "div", 60);
    \u0275\u0275listener("click", function SearchBarComponent_div_3_div_12_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectProOption("natural"));
    });
    \u0275\u0275elementStart(2, "div", 52)(3, "div", 61);
    \u0275\u0275element(4, "i", 62);
    \u0275\u0275elementStart(5, "div", 63)(6, "h4", 64);
    \u0275\u0275text(7, "Natural Language");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 65);
    \u0275\u0275text(9, "Standard natural language processing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 66);
    \u0275\u0275element(11, "input", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 60);
    \u0275\u0275listener("click", function SearchBarComponent_div_3_div_12_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectProOption("advanced"));
    });
    \u0275\u0275elementStart(13, "div", 52)(14, "div", 61);
    \u0275\u0275element(15, "i", 68);
    \u0275\u0275elementStart(16, "div", 63)(17, "h4", 64);
    \u0275\u0275text(18, "Advanced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 65);
    \u0275\u0275text(20, "Advanced AI features and capabilities");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 66);
    \u0275\u0275element(22, "input", 69);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r2.selectedProOption === "natural");
    \u0275\u0275advance(11);
    \u0275\u0275property("checked", ctx_r2.selectedProOption === "advanced");
  }
}
function SearchBarComponent_div_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function SearchBarComponent_div_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.collapseSearchBar());
    });
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3, "Collapse");
    \u0275\u0275elementEnd()();
  }
}
function SearchBarComponent_div_3_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.activeFilterCount, " ");
  }
}
function SearchBarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44)(4, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_3_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function SearchBarComponent_div_3_Template_input_keyup_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyPress($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 46)(6, "div", 41)(7, "button", 47);
    \u0275\u0275listener("click", function SearchBarComponent_div_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleProDropdown());
    });
    \u0275\u0275element(8, "i", 48);
    \u0275\u0275elementStart(9, "span", 49);
    \u0275\u0275text(10, "Natural Language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "i", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SearchBarComponent_div_3_div_12_Template, 23, 2, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 52);
    \u0275\u0275template(14, SearchBarComponent_div_3_button_14_Template, 4, 0, "button", 53);
    \u0275\u0275elementStart(15, "button", 54);
    \u0275\u0275listener("click", function SearchBarComponent_div_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFilterPanel());
    });
    \u0275\u0275element(16, "i", 55);
    \u0275\u0275elementStart(17, "span", 49);
    \u0275\u0275text(18, "Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SearchBarComponent_div_3_span_19_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 57);
    \u0275\u0275listener("click", function SearchBarComponent_div_3_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch());
    });
    \u0275\u0275element(21, "i", 58);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.isProDropdownOpen);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.showCollapseButton);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.activeFilterCount > 0);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r2.searchQuery && ctx_r2.searchQuery.trim().length > 0 ? "#146B85" : "rgba(20, 120, 133, 0.5)");
    \u0275\u0275property("disabled", !ctx_r2.searchQuery || ctx_r2.searchQuery.trim().length === 0);
  }
}
function SearchBarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_23_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.caseFilters.caseName, $event) || (ctx_r2.caseFilters.caseName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_23_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.caseFilters.caseNumber, $event) || (ctx_r2.caseFilters.caseNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_23_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_23_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.caseFilters.filingDateFrom, $event) || (ctx_r2.caseFilters.filingDateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_23_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_23_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.caseFilters.filingDateTo, $event) || (ctx_r2.caseFilters.filingDateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_23_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_23_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.caseFilters.docketText, $event) || (ctx_r2.caseFilters.docketText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_23_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_23_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.caseFilters.docketDate, $event) || (ctx_r2.caseFilters.docketDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_23_Template_input_input_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.caseFilters.caseName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.caseFilters.caseNumber);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.caseFilters.filingDateFrom);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.caseFilters.filingDateTo);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.caseFilters.docketText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.caseFilters.docketDate);
  }
}
function SearchBarComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_29_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.judgeFilters.judgeName, $event) || (ctx_r2.judgeFilters.judgeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_29_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_29_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.judgeFilters.judgeAddress, $event) || (ctx_r2.judgeFilters.judgeAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_29_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_29_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.judgeFilters.judgeEmail, $event) || (ctx_r2.judgeFilters.judgeEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_29_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.judgeFilters.judgeName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.judgeFilters.judgeAddress);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.judgeFilters.judgeEmail);
  }
}
function SearchBarComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_35_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.attorneyFilters.attorneyName, $event) || (ctx_r2.attorneyFilters.attorneyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_35_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_35_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.attorneyFilters.barNumber, $event) || (ctx_r2.attorneyFilters.barNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_35_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_35_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.attorneyFilters.attorneyEmail, $event) || (ctx_r2.attorneyFilters.attorneyEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_35_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_35_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.attorneyFilters.attorneyAddress, $event) || (ctx_r2.attorneyFilters.attorneyAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_35_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.attorneyFilters.attorneyName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.attorneyFilters.barNumber);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.attorneyFilters.attorneyEmail);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.attorneyFilters.attorneyAddress);
  }
}
function SearchBarComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_41_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.partyFilters.partyName, $event) || (ctx_r2.partyFilters.partyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_41_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_41_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.partyFilters.partyAddress, $event) || (ctx_r2.partyFilters.partyAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_41_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_41_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.partyFilters.partyRoleGroup, $event) || (ctx_r2.partyFilters.partyRoleGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SearchBarComponent_div_41_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementStart(5, "option", 91);
    \u0275\u0275text(6, "Select a rolegroup...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 92);
    \u0275\u0275text(8, "Plaintiff");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 93);
    \u0275\u0275text(10, "Defendant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 94);
    \u0275\u0275text(12, "Witness");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_41_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.partyFilters.partyEmail, $event) || (ctx_r2.partyFilters.partyEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_41_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_41_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.partyFilters.partyRole, $event) || (ctx_r2.partyFilters.partyRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SearchBarComponent_div_41_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementStart(15, "option", 91);
    \u0275\u0275text(16, "Select a role...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 96);
    \u0275\u0275text(18, "Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 97);
    \u0275\u0275text(20, "Co-Counsel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 98);
    \u0275\u0275text(22, "Local Counsel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.partyFilters.partyName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.partyFilters.partyAddress);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.partyFilters.partyRoleGroup);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.partyFilters.partyEmail);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.partyFilters.partyRole);
  }
}
function SearchBarComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_47_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.documentFilters.documentName, $event) || (ctx_r2.documentFilters.documentName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_47_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_47_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.documentFilters.documentType, $event) || (ctx_r2.documentFilters.documentType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SearchBarComponent_div_47_Template_select_change_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementStart(4, "option", 91);
    \u0275\u0275text(5, "Select Document Type...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 100);
    \u0275\u0275text(7, "Motion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 101);
    \u0275\u0275text(9, "Brief");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 102);
    \u0275\u0275text(11, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 103);
    \u0275\u0275text(13, "Transcript");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_47_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.documentFilters.documentDate, $event) || (ctx_r2.documentFilters.documentDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SearchBarComponent_div_47_Template_input_input_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.documentFilters.documentName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.documentFilters.documentType);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.documentFilters.documentDate);
  }
}
function SearchBarComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 74)(2, "div")(3, "label", 105);
    \u0275\u0275text(4, "Court Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_53_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.otherFilters.court, $event) || (ctx_r2.otherFilters.court = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SearchBarComponent_div_53_Template_select_change_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementStart(6, "option", 91);
    \u0275\u0275text(7, "Select Court...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 106);
    \u0275\u0275text(9, "District Court");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 107);
    \u0275\u0275text(11, "Appellate Court");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 108);
    \u0275\u0275text(13, "Supreme Court");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div")(15, "label", 105);
    \u0275\u0275text(16, "Case Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_53_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.otherFilters.caseType, $event) || (ctx_r2.otherFilters.caseType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SearchBarComponent_div_53_Template_select_change_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementStart(18, "option", 91);
    \u0275\u0275text(19, "Select Case Type...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 109);
    \u0275\u0275text(21, "Civil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 110);
    \u0275\u0275text(23, "Criminal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 111);
    \u0275\u0275text(25, "Corporate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div")(27, "label", 105);
    \u0275\u0275text(28, "Case Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 90);
    \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_div_53_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.otherFilters.caseStatus, $event) || (ctx_r2.otherFilters.caseStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function SearchBarComponent_div_53_Template_select_change_29_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateActiveFilterCount());
    });
    \u0275\u0275elementStart(30, "option", 91);
    \u0275\u0275text(31, "Select Status...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 112);
    \u0275\u0275text(33, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 113);
    \u0275\u0275text(35, "Closed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 114);
    \u0275\u0275text(37, "Pending");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.otherFilters.court);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.otherFilters.caseType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.otherFilters.caseStatus);
  }
}
var SearchBarComponent = class _SearchBarComponent {
  search = new EventEmitter();
  expand = new EventEmitter();
  // Emit when expanding search bar
  collapse = new EventEmitter();
  // Emit when collapsing search bar
  isCollapsed = false;
  // Allow parent to control collapsed state
  searchQuery = "";
  // Allow parent to set search query
  showCollapseButton = false;
  // Show collapse button when results are visible
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
  // Filter properties
  anywhereSearch = "";
  expandedSections = {
    case: false,
    judge: false,
    attorney: false,
    party: false,
    document: false,
    other: false
  };
  caseFilters = {
    caseName: "",
    caseNumber: "",
    filingDateFrom: "",
    filingDateTo: "",
    docketText: "",
    docketDate: ""
  };
  judgeFilters = {
    judgeName: "",
    judgeAddress: "",
    judgeEmail: ""
  };
  attorneyFilters = {
    attorneyName: "",
    barNumber: "",
    attorneyEmail: "",
    attorneyAddress: ""
  };
  partyFilters = {
    partyName: "",
    partyAddress: "",
    partyRoleGroup: "",
    partyEmail: "",
    partyRole: ""
  };
  documentFilters = {
    documentName: "",
    documentType: "",
    documentDate: ""
  };
  otherFilters = {
    court: "",
    caseType: "",
    caseStatus: ""
  };
  // Store original filter values for cancel functionality
  originalFilters = {};
  // Filter counter for badge
  activeFilterCount = 0;
  // Search state management
  isSearching = false;
  // Use computed property to check collapsed state
  get isSearchCollapsed() {
    return this.isCollapsed;
  }
  onSearch() {
    if (this.searchQuery && this.searchQuery.trim().length > 0) {
      this.isSearching = true;
      this.search.emit(this.searchQuery);
      setTimeout(() => {
        this.isSearching = false;
      }, 2e3);
    }
  }
  onKeyPress(event) {
    if (event.key === "Enter") {
      this.onSearch();
    }
  }
  clearSearch() {
    this.searchQuery = "";
    this.isSearching = false;
    this.search.emit("");
  }
  expandSearchBar() {
    this.isSearching = false;
    this.expand.emit();
  }
  collapseSearchBar() {
    this.collapse.emit();
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
    if (!this.isFilterPanelOpen) {
      this.storeOriginalFilters();
      this.updateActiveFilterCount();
    }
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
  }
  closeFilterPanel() {
    this.isFilterPanelOpen = false;
  }
  toggleFilterSection(section) {
    this.expandedSections[section] = !this.expandedSections[section];
  }
  storeOriginalFilters() {
    this.originalFilters = {
      anywhereSearch: this.anywhereSearch,
      caseFilters: __spreadValues({}, this.caseFilters),
      judgeFilters: __spreadValues({}, this.judgeFilters),
      attorneyFilters: __spreadValues({}, this.attorneyFilters),
      partyFilters: __spreadValues({}, this.partyFilters),
      documentFilters: __spreadValues({}, this.documentFilters),
      otherFilters: __spreadValues({}, this.otherFilters)
    };
  }
  restoreOriginalFilters() {
    if (this.originalFilters) {
      this.anywhereSearch = this.originalFilters.anywhereSearch || "";
      this.caseFilters = __spreadValues({}, this.originalFilters.caseFilters);
      this.judgeFilters = __spreadValues({}, this.originalFilters.judgeFilters);
      this.attorneyFilters = __spreadValues({}, this.originalFilters.attorneyFilters);
      this.partyFilters = __spreadValues({}, this.originalFilters.partyFilters);
      this.documentFilters = __spreadValues({}, this.originalFilters.documentFilters);
      this.otherFilters = __spreadValues({}, this.originalFilters.otherFilters);
    }
  }
  clearAllFilters() {
    this.anywhereSearch = "";
    this.caseFilters = {
      caseName: "",
      caseNumber: "",
      filingDateFrom: "",
      filingDateTo: "",
      docketText: "",
      docketDate: ""
    };
    this.judgeFilters = {
      judgeName: "",
      judgeAddress: "",
      judgeEmail: ""
    };
    this.attorneyFilters = {
      attorneyName: "",
      barNumber: "",
      attorneyEmail: "",
      attorneyAddress: ""
    };
    this.partyFilters = {
      partyName: "",
      partyAddress: "",
      partyRoleGroup: "",
      partyEmail: "",
      partyRole: ""
    };
    this.documentFilters = {
      documentName: "",
      documentType: "",
      documentDate: ""
    };
    this.otherFilters = {
      court: "",
      caseType: "",
      caseStatus: ""
    };
    this.updateActiveFilterCount();
    console.log("All filters cleared");
  }
  updateActiveFilterCount() {
    let count = 0;
    if (this.anywhereSearch && this.anywhereSearch.trim())
      count++;
    Object.values(this.caseFilters).forEach((value) => {
      if (value && value.toString().trim())
        count++;
    });
    Object.values(this.judgeFilters).forEach((value) => {
      if (value && value.toString().trim())
        count++;
    });
    Object.values(this.attorneyFilters).forEach((value) => {
      if (value && value.toString().trim())
        count++;
    });
    Object.values(this.partyFilters).forEach((value) => {
      if (value && value.toString().trim())
        count++;
    });
    Object.values(this.documentFilters).forEach((value) => {
      if (value && value.toString().trim())
        count++;
    });
    Object.values(this.otherFilters).forEach((value) => {
      if (value && value.toString().trim())
        count++;
    });
    this.activeFilterCount = count;
  }
  resetFilters() {
    this.clearAllFilters();
    this.isFilterPanelOpen = false;
    console.log("All filters reset");
  }
  applyFilters() {
    this.updateActiveFilterCount();
    console.log("Applying advanced filters:", {
      anywhereSearch: this.anywhereSearch,
      caseFilters: this.caseFilters,
      judgeFilters: this.judgeFilters,
      attorneyFilters: this.attorneyFilters,
      partyFilters: this.partyFilters,
      documentFilters: this.documentFilters,
      otherFilters: this.otherFilters,
      activeFilterCount: this.activeFilterCount
    });
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
  }, inputs: { isCollapsed: "isCollapsed", searchQuery: "searchQuery", showCollapseButton: "showCollapseButton" }, outputs: { search: "search", expand: "expand", collapse: "collapse" }, decls: 60, vars: 36, consts: [[1, "w-full", "mx-auto"], ["class", "mb-6", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], ["class", "relative", 4, "ngIf"], [1, "fixed", "inset-0", "z-50", "overflow-hidden", "transition-opacity", "duration-300", 3, "ngClass"], [1, "absolute", "inset-0", "bg-gray-900", "bg-opacity-10", "transition-opacity", "duration-300", 3, "click", "ngClass"], [1, "absolute", "right-0", "top-0", "h-full", "w-90", "bg-white", "shadow-xl", "transition-transform", "duration-500", "ease-out", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "px-6", "py-4", "border-b", "border-gray-200"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", 3, "click"], [1, "ri-close-line", "text-xl", "text-gray-500"], [1, "flex-1", "overflow-y-auto", "p-6"], [1, "space-y-4"], [1, "bg-gray-50", "rounded-lg", "p-4"], [1, "text-sm", "font-medium", "text-gray-900", "mb-3"], ["type", "text", "placeholder", "Enter general search term...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], [1, "border", "border-gray-200", "rounded-lg"], [1, "w-full", "flex", "items-center", "justify-between", "px-4", "py-3", "text-left", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "text-sm", "font-medium", "text-gray-900"], ["class", "px-4 pb-4 border-t border-gray-200 bg-gray-50", 4, "ngIf"], [1, "px-6", "py-4", "border-t", "border-gray-200", "bg-white"], [1, "flex", "space-x-3"], [1, "flex-1", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "text-gray-700", "hover:bg-gray-50", "transition-colors", "font-medium", 3, "click"], [1, "flex-1", "px-4", "py-2", "bg-brand", "text-white", "rounded-lg", "hover:bg-opacity-90", "transition-colors", "font-medium", 3, "click"], [1, "mb-6"], [1, "flex", "items-center", "space-x-4"], [1, "text-sm", "font-bold", "text-gray-900", "uppercase", "whitespace-nowrap"], [1, "flex", "items-center", "space-x-2", "flex-wrap"], ["class", "flex items-center space-x-2 h-9 px-4 py-3 rounded-lg transition-colors", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2", "h-9", "px-4", "py-3", "rounded-lg", "transition-colors", 3, "click"], [1, "font-medium", "text-sm"], [1, "mb-4"], [1, "bg-white", "border", "border-stroke-weak", "rounded-lg", "px-3", "py-2"], [1, "flex", "items-center", "justify-between"], [1, "text-gray-700", "cursor-pointer", "text-sm", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["class", "animate-spin rounded-full h-4 w-4 border-b-2 border-brand", 4, "ngIf"], [1, "text-gray-500", "hover:bg-gray-100", "rounded", "p-1", "transition-colors", 3, "click"], [1, "ri-arrow-go-back-fill", "text-base"], [1, "ri-close-line", "text-base"], [1, "animate-spin", "rounded-full", "h-4", "w-4", "border-b-2", "border-brand"], [1, "relative"], [1, "bg-white", "border", "border-stroke-weak", "rounded-lg"], [1, "flex", "items-center", "px-4", "py-4"], [1, "flex-1", "relative"], ["type", "text", "placeholder", "Ask the researcher", 1, "w-full", "pr-4", "py-2", "bg-transparent", "focus:outline-none", "placeholder-opacity-30", "text-lg", "border-none", 3, "ngModelChange", "keyup", "ngModel"], [1, "flex", "items-center", "justify-between", "px-4", "pb-4", "relative"], [1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", "px-3", "py-2", "rounded-lg", "hover:bg-gray-50", 2, "outline", "none", "border", "#00000000", 3, "click"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#146B85"], [1, "underline", "text-sm", "font-medium"], [1, "ri-arrow-down-s-line", 2, "color", "#353D59", "font-size", "14px"], ["class", "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", 4, "ngIf"], [1, "flex", "items-center", "space-x-3"], ["class", "flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0 px-3 py-2 rounded-lg hover:bg-gray-50", "style", "outline: none; border: #00000000;", "title", "Collapse search bar", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", "px-3", "py-2", "rounded-lg", "hover:bg-gray-50", "relative", 2, "outline", "none", "border", "#00000000", 3, "click"], [1, "ri-filter-line", "text-lg", 2, "color", "#146B85"], ["class", "absolute -top-1 -right-1 bg-brand text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center", 4, "ngIf"], [1, "w-9", "h-9", "rounded-lg", "transition-colors", "flex", "items-center", "justify-center", "ml-3", 3, "click", "disabled"], [1, "ri-arrow-right-long-line", "text-white", "text-lg"], [1, "absolute", "top-full", "left-0", "mt-2", "w-80", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-lg", "z-50"], [1, "px-4", "py-3", "hover:bg-gray-50", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "space-x-3", "flex-1"], [1, "ri-sparkling-fill", "text-lg", 2, "color", "#69718C"], [1, "flex-1"], [1, "text-sm", "font-medium", "text-text-strong"], [1, "text-xs", "text-text-weak"], [1, "flex", "items-center"], ["type", "radio", "name", "proOption", "value", "natural", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"], [1, "ri-flow-chart", "text-lg", 2, "color", "#69718C"], ["type", "radio", "name", "proOption", "value", "advanced", 1, "w-4", "h-4", "text-brand", "focus:ring-brand", "border-gray-300", 3, "checked"], ["title", "Collapse search bar", 1, "flex", "items-center", "space-x-2", "text-text-strong", "hover:text-brand", "transition-colors", "border-0", "px-3", "py-2", "rounded-lg", "hover:bg-gray-50", 2, "outline", "none", "border", "#00000000", 3, "click"], [1, "ri-subtract-line", "text-lg", 2, "color", "#146B85"], [1, "absolute", "-top-1", "-right-1", "bg-brand", "text-white", "text-xs", "font-bold", "rounded-full", "h-5", "w-5", "flex", "items-center", "justify-center"], [1, "px-4", "pb-4", "border-t", "border-gray-200", "bg-gray-50"], [1, "space-y-3", "pt-3"], ["type", "text", "placeholder", "Case Name...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Case Number...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "date", "placeholder", "Filing Date From...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "date", "placeholder", "Filing Date To...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Docket Text...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "date", "placeholder", "Docket Date...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Judge Name...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Judge Address...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "email", "placeholder", "Judge Email...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Attorney Name...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Bar Number...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "email", "placeholder", "Attorney Email...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Attorney Address...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Party Name...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "placeholder", "Party Address...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], [1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "change", "ngModel"], ["value", ""], ["value", "plaintiff"], ["value", "defendant"], ["value", "witness"], ["type", "email", "placeholder", "Party Email...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["value", "lead"], ["value", "co-counsel"], ["value", "local-counsel"], ["type", "text", "placeholder", "Document Name...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], ["value", "motion"], ["value", "brief"], ["value", "order"], ["value", "transcript"], ["type", "date", "placeholder", "Document Date...", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-brand", 3, "ngModelChange", "input", "ngModel"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-1"], ["value", "district"], ["value", "appellate"], ["value", "supreme"], ["value", "civil"], ["value", "criminal"], ["value", "corporate"], ["value", "active"], ["value", "closed"], ["value", "pending"]], template: function SearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, SearchBarComponent_div_1_Template, 6, 1, "div", 1)(2, SearchBarComponent_div_2_Template, 11, 2, "div", 2)(3, SearchBarComponent_div_3_Template, 22, 7, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
      \u0275\u0275listener("click", function SearchBarComponent_Template_div_click_5_listener() {
        return ctx.closeFilterPanel();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h2", 8);
      \u0275\u0275text(9, "Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_10_listener() {
        return ctx.closeFilterPanel();
      });
      \u0275\u0275element(11, "i", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h3", 14);
      \u0275\u0275text(16, '"Anywhere" Keyword Search');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_17_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.anywhereSearch, $event) || (ctx.anywhereSearch = $event);
        return $event;
      });
      \u0275\u0275listener("input", function SearchBarComponent_Template_input_input_17_listener() {
        return ctx.updateActiveFilterCount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 16)(19, "button", 17);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_19_listener() {
        return ctx.toggleFilterSection("case");
      });
      \u0275\u0275elementStart(20, "span", 18);
      \u0275\u0275text(21, "Case Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, SearchBarComponent_div_23_Template, 8, 6, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 16)(25, "button", 17);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_25_listener() {
        return ctx.toggleFilterSection("judge");
      });
      \u0275\u0275elementStart(26, "span", 18);
      \u0275\u0275text(27, "Judge Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, SearchBarComponent_div_29_Template, 5, 3, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 16)(31, "button", 17);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_31_listener() {
        return ctx.toggleFilterSection("attorney");
      });
      \u0275\u0275elementStart(32, "span", 18);
      \u0275\u0275text(33, "Attorney Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, SearchBarComponent_div_35_Template, 6, 4, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 16)(37, "button", 17);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_37_listener() {
        return ctx.toggleFilterSection("party");
      });
      \u0275\u0275elementStart(38, "span", 18);
      \u0275\u0275text(39, "Party Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(41, SearchBarComponent_div_41_Template, 23, 5, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 16)(43, "button", 17);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_43_listener() {
        return ctx.toggleFilterSection("document");
      });
      \u0275\u0275elementStart(44, "span", 18);
      \u0275\u0275text(45, "Document Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, SearchBarComponent_div_47_Template, 15, 3, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 16)(49, "button", 17);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_49_listener() {
        return ctx.toggleFilterSection("other");
      });
      \u0275\u0275elementStart(50, "span", 18);
      \u0275\u0275text(51, "Other Filters");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275template(53, SearchBarComponent_div_53_Template, 38, 3, "div", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 20)(55, "div", 21)(56, "button", 22);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_56_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275text(57, " Reset ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 23);
      \u0275\u0275listener("click", function SearchBarComponent_Template_button_click_58_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSearchCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSearchCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isSearchCollapsed);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(27, _c0, ctx.isFilterPanelOpen, !ctx.isFilterPanelOpen));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(30, _c1, ctx.isFilterPanelOpen, !ctx.isFilterPanelOpen));
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(33, _c2, ctx.isFilterPanelOpen, !ctx.isFilterPanelOpen))("@slideIn", ctx.isFilterPanelOpen ? "in" : "out");
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.anywhereSearch);
      \u0275\u0275advance(5);
      \u0275\u0275classMap("ri-arrow-" + (ctx.expandedSections.case ? "up" : "down") + "-s-line text-lg text-gray-500");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedSections.case);
      \u0275\u0275advance(5);
      \u0275\u0275classMap("ri-arrow-" + (ctx.expandedSections.judge ? "up" : "down") + "-s-line text-lg text-gray-500");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedSections.judge);
      \u0275\u0275advance(5);
      \u0275\u0275classMap("ri-arrow-" + (ctx.expandedSections.attorney ? "up" : "down") + "-s-line text-lg text-gray-500");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedSections.attorney);
      \u0275\u0275advance(5);
      \u0275\u0275classMap("ri-arrow-" + (ctx.expandedSections.party ? "up" : "down") + "-s-line text-lg text-gray-500");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedSections.party);
      \u0275\u0275advance(5);
      \u0275\u0275classMap("ri-arrow-" + (ctx.expandedSections.document ? "up" : "down") + "-s-line text-lg text-gray-500");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedSections.document);
      \u0275\u0275advance(5);
      \u0275\u0275classMap("ri-arrow-" + (ctx.expandedSections.other ? "up" : "down") + "-s-line text-lg text-gray-500");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expandedSections.other);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" Apply ", ctx.activeFilterCount > 0 ? "(" + ctx.activeFilterCount + ")" : "", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: [`

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
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
  ring: none !important;
}
.hover\\:bg-blue-600[_ngcontent-%COMP%]:hover {
  background-color: #0F5F66;
}
.text-brand[_ngcontent-%COMP%] {
  color: #146B85;
}
.hover\\:text-brand[_ngcontent-%COMP%]:hover {
  color: #146B85;
}
.bg-brand[_ngcontent-%COMP%] {
  background-color: #146B85;
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
  accent-color: #146B85;
}
.cursor-not-allowed[_ngcontent-%COMP%] {
  cursor: not-allowed;
}
.whitespace-nowrap[_ngcontent-%COMP%] {
  white-space: nowrap;
}
.flex-wrap[_ngcontent-%COMP%] {
  flex-wrap: wrap;
}
.px-3[_ngcontent-%COMP%] {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-2[_ngcontent-%COMP%] {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.mb-4[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.h-4[_ngcontent-%COMP%] {
  height: 1rem;
}
.w-4[_ngcontent-%COMP%] {
  width: 1rem;
}
.text-base[_ngcontent-%COMP%] {
  font-size: 1rem;
  line-height: 1.5rem;
}
.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
}
.rounded[_ngcontent-%COMP%] {
  border-radius: 0.25rem;
}
.p-1[_ngcontent-%COMP%] {
  padding: 0.25rem;
}
.transition-colors[_ngcontent-%COMP%] {
  transition-property:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.ri-sparkling-fill[_ngcontent-%COMP%], 
.ri-user-line[_ngcontent-%COMP%], 
.ri-vip-crown-line[_ngcontent-%COMP%], 
.ri-folder-open-line[_ngcontent-%COMP%], 
.ri-building-line[_ngcontent-%COMP%], 
.ri-scales-line[_ngcontent-%COMP%], 
.ri-team-line[_ngcontent-%COMP%], 
.ri-arrow-left-s-line[_ngcontent-%COMP%], 
.ri-arrow-right-s-line[_ngcontent-%COMP%], 
.ri-arrow-up-s-line[_ngcontent-%COMP%], 
.ri-arrow-down-s-line[_ngcontent-%COMP%], 
.ri-close-line[_ngcontent-%COMP%], 
.ri-arrow-go-back-fill[_ngcontent-%COMP%] {
  font-size: 1.125rem;
}
.text-sm[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-base[_ngcontent-%COMP%] {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.space-x-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-left: 1rem;
}
.h-9[_ngcontent-%COMP%] {
  height: 2.25rem;
}
.px-4[_ngcontent-%COMP%] {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-3[_ngcontent-%COMP%] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.mb-6[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.mb-4[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.font-bold[_ngcontent-%COMP%] {
  font-weight: 700;
}
.font-medium[_ngcontent-%COMP%] {
  font-weight: 500;
}
.uppercase[_ngcontent-%COMP%] {
  text-transform: uppercase;
}
.text-gray-900[_ngcontent-%COMP%] {
  color: #111827;
}
.text-gray-700[_ngcontent-%COMP%] {
  color: #374151;
}
.bg-gray-light[_ngcontent-%COMP%] {
  background-color: #e9eaec;
}
.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
}
.rounded-lg[_ngcontent-%COMP%] {
  border-radius: 0.5rem;
}
.transition-transform[_ngcontent-%COMP%] {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
}
.transition-opacity[_ngcontent-%COMP%] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.duration-300[_ngcontent-%COMP%] {
  transition-duration: 300ms;
}
.duration-500[_ngcontent-%COMP%] {
  transition-duration: 500ms;
}
.ease-out[_ngcontent-%COMP%] {
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}
.translate-x-0[_ngcontent-%COMP%] {
  transform: translateX(0);
}
.translate-x-full[_ngcontent-%COMP%] {
  transform: translateX(100%);
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
.h-full[_ngcontent-%COMP%] {
  height: 100%;
}
.w-80[_ngcontent-%COMP%] {
  width: 20rem;
}
.w-90[_ngcontent-%COMP%] {
  width: 22.5rem;
}
.bg-gray-900[_ngcontent-%COMP%] {
  background-color: #111827;
}
.bg-opacity-10[_ngcontent-%COMP%] {
  background-color: rgba(17, 24, 39, 0.1);
}
.bg-white[_ngcontent-%COMP%] {
  background-color: #ffffff;
}
.shadow-xl[_ngcontent-%COMP%] {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.transform[_ngcontent-%COMP%] {
  transform: var(--tw-transform);
}
.opacity-0[_ngcontent-%COMP%] {
  opacity: 0;
}
.opacity-100[_ngcontent-%COMP%] {
  opacity: 1;
}
.pointer-events-none[_ngcontent-%COMP%] {
  pointer-events: none;
}
.pointer-events-auto[_ngcontent-%COMP%] {
  pointer-events: auto;
}
.space-y-4[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
.space-y-3[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {
  margin-top: 0.75rem;
}
.pt-3[_ngcontent-%COMP%] {
  padding-top: 0.75rem;
}
.pb-4[_ngcontent-%COMP%] {
  padding-bottom: 1rem;
}
.text-left[_ngcontent-%COMP%] {
  text-align: left;
}
.bg-gray-50[_ngcontent-%COMP%] {
  background-color: #f9fafb;
}
.bg-opacity-90[_ngcontent-%COMP%] {
  background-color: rgba(var(--bg-brand-rgb), 0.9);
}
.text-gray-500[_ngcontent-%COMP%] {
  color: #6b7280;
}
.block[_ngcontent-%COMP%] {
  display: block;
}
.mb-1[_ngcontent-%COMP%] {
  margin-bottom: 0.25rem;
}
.focus\\:ring-brand[_ngcontent-%COMP%]:focus {
  box-shadow: 0 0 0 2px rgba(20, 107, 133, 0.2);
}
.animate-spin[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_spin 1s linear infinite;
}
@keyframes _ngcontent-%COMP%_spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.border-brand[_ngcontent-%COMP%] {
  border-color: #146B85;
}
.border-b-2[_ngcontent-%COMP%] {
  border-bottom-width: 2px;
}
.relative[_ngcontent-%COMP%] {
  position: relative;
}
.-top-1[_ngcontent-%COMP%] {
  top: -0.25rem;
}
.-right-1[_ngcontent-%COMP%] {
  right: -0.25rem;
}
.h-5[_ngcontent-%COMP%] {
  height: 1.25rem;
}
.w-5[_ngcontent-%COMP%] {
  width: 1.25rem;
}
.text-xs[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold[_ngcontent-%COMP%] {
  font-weight: 700;
}
.rounded-full[_ngcontent-%COMP%] {
  border-radius: 9999px;
}
select[_ngcontent-%COMP%] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
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
  .w-90[_ngcontent-%COMP%] {
    width: 90vw;
    max-width: 22.5rem;
  }
}
@media (min-width: 1024px) and (max-width: 1440px) {
  .w-90[_ngcontent-%COMP%] {
    width: 26rem;
    max-height: calc(100vh - 2rem);
  }
  .overflow-y-auto[_ngcontent-%COMP%] {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }
  .overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar {
    width: 8px;
  }
  .overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }
  .overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  .overflow-y-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
}
/*# sourceMappingURL=search-bar.component.css.map */`], data: { animation: [
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
<div class="w-full mx-auto">
  
  <!-- Search Type Selection - Only show when not collapsed -->
  <div class="mb-6" *ngIf="!isSearchCollapsed">
    <div class="flex items-center space-x-4">
      <h2 class="text-sm font-bold text-gray-900 uppercase whitespace-nowrap">Search For:</h2>
      <div class="flex items-center space-x-2 flex-wrap">
        <button
          *ngFor="let type of searchTypes"
          (click)="selectSearchType(type)"
          class="flex items-center space-x-2 h-9 px-4 py-3 rounded-lg transition-colors"
          [class]="selectedSearchType.id === type.id ? 
            'bg-gray-light text-gray-700' : 
            'text-gray-700 hover:bg-gray-100'">
          <i [class]="'ri-' + type.icon + ' text-base'" 
             [style.color]="'#374151'"></i>
          <span class="font-medium text-sm">{{ type.label }}</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Collapsed Search Bar -->
  <div *ngIf="isSearchCollapsed" class="mb-4">
    <div class="bg-white border border-stroke-weak rounded-lg px-3 py-2">
      <div class="flex items-center justify-between">
        <span class="text-gray-700 cursor-pointer text-sm" (click)="expandSearchBar()">{{ searchQuery || 'Search...' }}</span>
        <div class="flex items-center space-x-2">
          <div *ngIf="isSearching" class="animate-spin rounded-full h-4 w-4 border-b-2 border-brand"></div>
          <button (click)="expandSearchBar()" class="text-gray-500 hover:bg-gray-100 rounded p-1 transition-colors">
            <i class="ri-arrow-go-back-fill text-base"></i>
          </button>
          <button (click)="clearSearch()" class="text-gray-500 hover:bg-gray-100 rounded p-1 transition-colors">
            <i class="ri-close-line text-base"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Search Container - Only show when not collapsed -->
  <div class="relative" *ngIf="!isSearchCollapsed">
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
            <i class="ri-sparkling-fill text-lg" style="color: #146B85;"></i>
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
          <!-- Collapse Button (only show when results are visible) -->
          <button 
            *ngIf="showCollapseButton"
            (click)="collapseSearchBar()"
            class="flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0 px-3 py-2 rounded-lg hover:bg-gray-50" 
            style="outline: none; border: #00000000;"
            title="Collapse search bar">
            <i class="ri-subtract-line text-lg" style="color: #146B85;"></i>
            <span class="underline text-sm font-medium">Collapse</span>
          </button>

          <!-- Filter Section -->
          <button 
            (click)="toggleFilterPanel()"
            class="flex items-center space-x-2 text-text-strong hover:text-brand transition-colors border-0 px-3 py-2 rounded-lg hover:bg-gray-50 relative" 
            style="outline: none; border: #00000000;">
            <i class="ri-filter-line text-lg" style="color: #146B85;"></i>
            <span class="underline text-sm font-medium">Filter</span>
            <span 
              *ngIf="activeFilterCount > 0"
              class="absolute -top-1 -right-1 bg-brand text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {{ activeFilterCount }}
            </span>
          </button>

          <!-- Search Button -->
          <button 
            [disabled]="!searchQuery || searchQuery.trim().length === 0"
            (click)="onSearch()"
            class="w-9 h-9 rounded-lg transition-colors flex items-center justify-center ml-3"
            [style.background-color]="searchQuery && searchQuery.trim().length > 0 ? '#146B85' : 'rgba(20, 120, 133, 0.5)'">
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
      class="absolute right-0 top-0 h-full w-90 bg-white shadow-xl transition-transform duration-500 ease-out"
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
      
      <!-- Panel Content - Filter Categories -->
      <div class="flex-1 overflow-y-auto p-6">
        <div class="space-y-4">
          
              <!-- Anywhere Keyword Search - Always Open -->
              <div class="bg-gray-50 rounded-lg p-4">
                <h3 class="text-sm font-medium text-gray-900 mb-3">"Anywhere" Keyword Search</h3>
                <input 
                  type="text" 
                  [(ngModel)]="anywhereSearch"
                  (input)="updateActiveFilterCount()"
                  placeholder="Enter general search term..."
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              </div>

          <!-- Case Filters -->
          <div class="border border-gray-200 rounded-lg">
            <button 
              (click)="toggleFilterSection('case')"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm font-medium text-gray-900">Case Filters</span>
              <i [class]="'ri-arrow-' + (expandedSections.case ? 'up' : 'down') + '-s-line text-lg text-gray-500'"></i>
            </button>
            <div *ngIf="expandedSections.case" class="px-4 pb-4 border-t border-gray-200 bg-gray-50">
              <div class="space-y-3 pt-3">
                <input type="text" [(ngModel)]="caseFilters.caseName" (input)="updateActiveFilterCount()" placeholder="Case Name..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="text" [(ngModel)]="caseFilters.caseNumber" (input)="updateActiveFilterCount()" placeholder="Case Number..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="date" [(ngModel)]="caseFilters.filingDateFrom" (input)="updateActiveFilterCount()" placeholder="Filing Date From..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="date" [(ngModel)]="caseFilters.filingDateTo" (input)="updateActiveFilterCount()" placeholder="Filing Date To..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="text" [(ngModel)]="caseFilters.docketText" (input)="updateActiveFilterCount()" placeholder="Docket Text..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="date" [(ngModel)]="caseFilters.docketDate" (input)="updateActiveFilterCount()" placeholder="Docket Date..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              </div>
            </div>
          </div>

          <!-- Judge Filters -->
          <div class="border border-gray-200 rounded-lg">
            <button 
              (click)="toggleFilterSection('judge')"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm font-medium text-gray-900">Judge Filters</span>
              <i [class]="'ri-arrow-' + (expandedSections.judge ? 'up' : 'down') + '-s-line text-lg text-gray-500'"></i>
            </button>
            <div *ngIf="expandedSections.judge" class="px-4 pb-4 border-t border-gray-200 bg-gray-50">
              <div class="space-y-3 pt-3">
                <input type="text" [(ngModel)]="judgeFilters.judgeName" (input)="updateActiveFilterCount()" placeholder="Judge Name..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="text" [(ngModel)]="judgeFilters.judgeAddress" (input)="updateActiveFilterCount()" placeholder="Judge Address..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="email" [(ngModel)]="judgeFilters.judgeEmail" (input)="updateActiveFilterCount()" placeholder="Judge Email..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              </div>
            </div>
          </div>

          <!-- Attorney Filters -->
          <div class="border border-gray-200 rounded-lg">
            <button 
              (click)="toggleFilterSection('attorney')"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm font-medium text-gray-900">Attorney Filters</span>
              <i [class]="'ri-arrow-' + (expandedSections.attorney ? 'up' : 'down') + '-s-line text-lg text-gray-500'"></i>
            </button>
            <div *ngIf="expandedSections.attorney" class="px-4 pb-4 border-t border-gray-200 bg-gray-50">
              <div class="space-y-3 pt-3">
                <input type="text" [(ngModel)]="attorneyFilters.attorneyName" (input)="updateActiveFilterCount()" placeholder="Attorney Name..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="text" [(ngModel)]="attorneyFilters.barNumber" (input)="updateActiveFilterCount()" placeholder="Bar Number..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="email" [(ngModel)]="attorneyFilters.attorneyEmail" (input)="updateActiveFilterCount()" placeholder="Attorney Email..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="text" [(ngModel)]="attorneyFilters.attorneyAddress" (input)="updateActiveFilterCount()" placeholder="Attorney Address..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              </div>
            </div>
          </div>

          <!-- Party Filters -->
          <div class="border border-gray-200 rounded-lg">
            <button 
              (click)="toggleFilterSection('party')"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm font-medium text-gray-900">Party Filters</span>
              <i [class]="'ri-arrow-' + (expandedSections.party ? 'up' : 'down') + '-s-line text-lg text-gray-500'"></i>
            </button>
            <div *ngIf="expandedSections.party" class="px-4 pb-4 border-t border-gray-200 bg-gray-50">
              <div class="space-y-3 pt-3">
                <input type="text" [(ngModel)]="partyFilters.partyName" (input)="updateActiveFilterCount()" placeholder="Party Name..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <input type="text" [(ngModel)]="partyFilters.partyAddress" (input)="updateActiveFilterCount()" placeholder="Party Address..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <select [(ngModel)]="partyFilters.partyRoleGroup" (change)="updateActiveFilterCount()" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                  <option value="">Select a rolegroup...</option>
                  <option value="plaintiff">Plaintiff</option>
                  <option value="defendant">Defendant</option>
                  <option value="witness">Witness</option>
                </select>
                <input type="email" [(ngModel)]="partyFilters.partyEmail" (input)="updateActiveFilterCount()" placeholder="Party Email..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <select [(ngModel)]="partyFilters.partyRole" (change)="updateActiveFilterCount()" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                  <option value="">Select a role...</option>
                  <option value="lead">Lead</option>
                  <option value="co-counsel">Co-Counsel</option>
                  <option value="local-counsel">Local Counsel</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Document Filters -->
          <div class="border border-gray-200 rounded-lg">
            <button 
              (click)="toggleFilterSection('document')"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm font-medium text-gray-900">Document Filters</span>
              <i [class]="'ri-arrow-' + (expandedSections.document ? 'up' : 'down') + '-s-line text-lg text-gray-500'"></i>
            </button>
            <div *ngIf="expandedSections.document" class="px-4 pb-4 border-t border-gray-200 bg-gray-50">
              <div class="space-y-3 pt-3">
                <input type="text" [(ngModel)]="documentFilters.documentName" (input)="updateActiveFilterCount()" placeholder="Document Name..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                <select [(ngModel)]="documentFilters.documentType" (change)="updateActiveFilterCount()" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                  <option value="">Select Document Type...</option>
                  <option value="motion">Motion</option>
                  <option value="brief">Brief</option>
                  <option value="order">Order</option>
                  <option value="transcript">Transcript</option>
                </select>
                <input type="date" [(ngModel)]="documentFilters.documentDate" (input)="updateActiveFilterCount()" placeholder="Document Date..." 
                       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
              </div>
            </div>
          </div>

          <!-- Other Filters -->
          <div class="border border-gray-200 rounded-lg">
            <button 
              (click)="toggleFilterSection('other')"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors">
              <span class="text-sm font-medium text-gray-900">Other Filters</span>
              <i [class]="'ri-arrow-' + (expandedSections.other ? 'up' : 'down') + '-s-line text-lg text-gray-500'"></i>
            </button>
            <div *ngIf="expandedSections.other" class="px-4 pb-4 border-t border-gray-200 bg-gray-50">
              <div class="space-y-3 pt-3">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Court Filters</label>
                  <select [(ngModel)]="otherFilters.court" (change)="updateActiveFilterCount()" 
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                    <option value="">Select Court...</option>
                    <option value="district">District Court</option>
                    <option value="appellate">Appellate Court</option>
                    <option value="supreme">Supreme Court</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Case Type</label>
                  <select [(ngModel)]="otherFilters.caseType" (change)="updateActiveFilterCount()" 
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                    <option value="">Select Case Type...</option>
                    <option value="civil">Civil</option>
                    <option value="criminal">Criminal</option>
                    <option value="corporate">Corporate</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Case Status</label>
                  <select [(ngModel)]="otherFilters.caseStatus" (change)="updateActiveFilterCount()" 
                          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand">
                    <option value="">Select Status...</option>
                    <option value="active">Active</option>
                    <option value="closed">Closed</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Panel Footer - Action Buttons -->
      <div class="px-6 py-4 border-t border-gray-200 bg-white">
        <div class="flex space-x-3">
          <button 
            (click)="resetFilters()"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
            Reset
          </button>
          <button 
            (click)="applyFilters()"
            class="flex-1 px-4 py-2 bg-brand text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium">
            Apply {{ activeFilterCount > 0 ? '(' + activeFilterCount + ')' : '' }}
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
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
  ring: none !important;
}
.hover\\:bg-blue-600:hover {
  background-color: #0F5F66;
}
.text-brand {
  color: #146B85;
}
.hover\\:text-brand:hover {
  color: #146B85;
}
.bg-brand {
  background-color: #146B85;
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
  accent-color: #146B85;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.flex-wrap {
  flex-wrap: wrap;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.h-4 {
  height: 1rem;
}
.w-4 {
  width: 1rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.hover\\:bg-gray-100:hover {
  background-color: #f3f4f6;
}
.rounded {
  border-radius: 0.25rem;
}
.p-1 {
  padding: 0.25rem;
}
.transition-colors {
  transition-property:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.ri-sparkling-fill,
.ri-user-line,
.ri-vip-crown-line,
.ri-folder-open-line,
.ri-building-line,
.ri-scales-line,
.ri-team-line,
.ri-arrow-left-s-line,
.ri-arrow-right-s-line,
.ri-arrow-up-s-line,
.ri-arrow-down-s-line,
.ri-close-line,
.ri-arrow-go-back-fill {
  font-size: 1.125rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.space-x-4 > * + * {
  margin-left: 1rem;
}
.h-9 {
  height: 2.25rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.uppercase {
  text-transform: uppercase;
}
.text-gray-900 {
  color: #111827;
}
.text-gray-700 {
  color: #374151;
}
.bg-gray-light {
  background-color: #e9eaec;
}
.hover\\:bg-gray-100:hover {
  background-color: #f3f4f6;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-out {
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
}
.translate-x-0 {
  transform: translateX(0);
}
.translate-x-full {
  transform: translateX(100%);
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
.h-full {
  height: 100%;
}
.w-80 {
  width: 20rem;
}
.w-90 {
  width: 22.5rem;
}
.bg-gray-900 {
  background-color: #111827;
}
.bg-opacity-10 {
  background-color: rgba(17, 24, 39, 0.1);
}
.bg-white {
  background-color: #ffffff;
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.transform {
  transform: var(--tw-transform);
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.space-y-4 > * + * {
  margin-top: 1rem;
}
.space-y-3 > * + * {
  margin-top: 0.75rem;
}
.pt-3 {
  padding-top: 0.75rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.text-left {
  text-align: left;
}
.bg-gray-50 {
  background-color: #f9fafb;
}
.bg-opacity-90 {
  background-color: rgba(var(--bg-brand-rgb), 0.9);
}
.text-gray-500 {
  color: #6b7280;
}
.block {
  display: block;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.focus\\:ring-brand:focus {
  box-shadow: 0 0 0 2px rgba(20, 107, 133, 0.2);
}
.animate-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.border-brand {
  border-color: #146B85;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.relative {
  position: relative;
}
.-top-1 {
  top: -0.25rem;
}
.-right-1 {
  right: -0.25rem;
}
.h-5 {
  height: 1.25rem;
}
.w-5 {
  width: 1.25rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.rounded-full {
  border-radius: 9999px;
}
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
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
  .w-90 {
    width: 90vw;
    max-width: 22.5rem;
  }
}
@media (min-width: 1024px) and (max-width: 1440px) {
  .w-90 {
    width: 26rem;
    max-height: calc(100vh - 2rem);
  }
  .overflow-y-auto {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 #f1f5f9;
  }
  .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
}
/*# sourceMappingURL=search-bar.component.css.map */
`] }]
  }], null, { search: [{
    type: Output
  }], expand: [{
    type: Output
  }], collapse: [{
    type: Output
  }], isCollapsed: [{
    type: Input
  }], searchQuery: [{
    type: Input
  }], showCollapseButton: [{
    type: Input
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src/app/components/ui/search-bar/search-bar.component.ts", lineNumber: 86 });
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
//# sourceMappingURL=chunk-UXEM3NMO.js.map
