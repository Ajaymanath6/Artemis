import {
  SearchBarComponent
} from "./chunk-AKBHH5PF.js";
import "./chunk-PBPJDBEJ.js";
import {
  PhosphorIconComponent
} from "./chunk-PSIVKUHD.js";
import {
  CommonModule,
  Component,
  NgForOf,
  TitleCasePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-T43XKO7X.js";

// src/app/pages/dashboard/dashboard.component.ts
function DashboardComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function DashboardComponent_div_20_Template_div_click_0_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewProject(project_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 6)(3, "h3", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(project_r2.status === "active" ? "bg-green-100 text-green-800" : project_r2.status === "completed" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, project_r2.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", project_r2.caseCount, " cases");
  }
}
function DashboardComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function DashboardComponent_div_28_Template_div_click_0_listener() {
      const project_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewProject(project_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 6)(3, "h3", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "app-phosphor-icon", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21)(9, "div", 22)(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 24);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(project_r5.status === "active" ? "bg-green-100 text-green-800" : project_r5.status === "completed" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, project_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", project_r5.caseCount, " cases");
  }
}
var DashboardComponent = class _DashboardComponent {
  recentProjects = [];
  pinnedProjects = [];
  ngOnInit() {
    this.loadProjects();
  }
  loadProjects() {
    this.recentProjects = [
      {
        id: "1",
        name: "Smith vs Johnson Corporate Litigation",
        description: "Complex corporate litigation case involving intellectual property disputes.",
        status: "active",
        caseCount: 45
      },
      {
        id: "2",
        name: "Environmental Compliance Review",
        description: "Comprehensive review of environmental regulations and compliance.",
        status: "active",
        caseCount: 23
      },
      {
        id: "3",
        name: "Mergers & Acquisitions Due Diligence",
        description: "Legal due diligence for technology company acquisition.",
        status: "completed",
        caseCount: 67
      }
    ];
    this.pinnedProjects = [
      {
        id: "4",
        name: "Intellectual Property Portfolio Management",
        description: "Ongoing management and protection of patent portfolio.",
        status: "active",
        caseCount: 89
      },
      {
        id: "5",
        name: "Employment Law Compliance",
        description: "Regular compliance reviews and policy updates.",
        status: "active",
        caseCount: 34
      }
    ];
  }
  onSearch(query) {
    console.log("Searching for:", query);
  }
  onCreateProject() {
    console.log("Create new project clicked");
  }
  onViewProject(projectId) {
    console.log("View project:", projectId);
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 29, vars: 5, consts: [[1, "min-h-screen", "bg-fill"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], [1, "mb-8"], [1, "text-3xl", "font-bold", "text-text-strong", "mb-2"], [1, "text-text-weak"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "mb-8"], [1, "flex-1"], [3, "search"], [1, "px-6", "py-3", "bg-brand", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-text-strong", "focus:outline-none", "focus:ring-2", "focus:ring-focus-ring", "transition-colors", "flex", "items-center", "space-x-2", 3, "click"], ["name", "plus", "weight", "bold", 3, "size"], [1, "flex", "items-center", "space-x-3", "mb-6"], ["name", "clock", "weight", "bold", "color", "currentColor", "className", "text-text-strong", 3, "size"], [1, "text-xl", "font-semibold", "text-text-strong"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-xl border border-stroke-weak p-6 hover:shadow-lg transition-shadow cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "border-t", "border-stroke-weak", "my-8"], ["name", "pin", "weight", "bold", "color", "currentColor", "className", "text-text-strong", 3, "size"], [1, "bg-white", "rounded-xl", "border", "border-stroke-weak", "p-6", "hover:shadow-lg", "transition-shadow", "cursor-pointer", 3, "click"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "text-lg", "font-semibold", "text-text-strong", "mb-2", "line-clamp-2"], [1, "text-text-weak", "text-sm", "line-clamp-3"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "space-x-2"], [1, "px-2", "py-1", "text-xs", "font-medium", "rounded-full"], [1, "text-sm", "text-text-weak"], ["name", "pin", "weight", "bold", "color", "#147885", "className", "flex-shrink-0 ml-2", 3, "size"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      \u0275\u0275text(4, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6, "Welcome back! Here's an overview of your recent projects and activities.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "app-search-bar", 7);
      \u0275\u0275listener("search", function DashboardComponent_Template_app_search_bar_search_9_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 8);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_10_listener() {
        return ctx.onCreateProject();
      });
      \u0275\u0275element(11, "app-phosphor-icon", 9);
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Create New Project");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 2)(15, "div", 10);
      \u0275\u0275element(16, "app-phosphor-icon", 11);
      \u0275\u0275elementStart(17, "h2", 12);
      \u0275\u0275text(18, "Recent Projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13);
      \u0275\u0275template(20, DashboardComponent_div_20_Template, 14, 8, "div", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "div", 15);
      \u0275\u0275elementStart(22, "div", 2)(23, "div", 10);
      \u0275\u0275element(24, "app-phosphor-icon", 16);
      \u0275\u0275elementStart(25, "h2", 12);
      \u0275\u0275text(26, "Pinned Projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 13);
      \u0275\u0275template(28, DashboardComponent_div_28_Template, 15, 9, "div", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("size", 20);
      \u0275\u0275advance(5);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.recentProjects);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 24);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.pinnedProjects);
    }
  }, dependencies: [CommonModule, NgForOf, TitleCasePipe, SearchBarComponent, PhosphorIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.mb-8[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .grid-cols-1.md\\\\[_ngcontent-%COMP%]:grid-cols-2.lg\\\\:grid-cols-3 {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 768px) {\n  .grid-cols-1.md\\\\[_ngcontent-%COMP%]:grid-cols-2.lg\\\\:grid-cols-3 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .grid-cols-1.md\\\\[_ngcontent-%COMP%]:grid-cols-2.lg\\\\:grid-cols-3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.bg-brand[_ngcontent-%COMP%]:hover {\n  background-color: #2F55D9;\n}\n@media (max-width: 640px) {\n  .px-4.sm\\\\[_ngcontent-%COMP%]:px-6.lg\\\\:px-8 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .py-8[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, SearchBarComponent, PhosphorIconComponent], template: `<!-- Dashboard Page -->
<div class="min-h-screen bg-fill">
  <!-- Container -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Header Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-text-strong mb-2">Dashboard</h1>
      <p class="text-text-weak">Welcome back! Here's an overview of your recent projects and activities.</p>
    </div>

    <!-- Search and Create Section -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <!-- Search Bar -->
      <div class="flex-1">
        <app-search-bar (search)="onSearch($event)"></app-search-bar>
      </div>

      <!-- Create Project Button -->
      <button
        (click)="onCreateProject()"
        class="px-6 py-3 bg-brand text-white font-medium rounded-lg hover:bg-blue-text-strong focus:outline-none focus:ring-2 focus:ring-focus-ring transition-colors flex items-center space-x-2">
        <app-phosphor-icon
          name="plus"
          [size]="20"
          weight="bold">
        </app-phosphor-icon>
        <span>Create New Project</span>
      </button>
    </div>

    <!-- Recent Projects Section -->
    <div class="mb-8">
      <!-- Section Header -->
      <div class="flex items-center space-x-3 mb-6">
        <app-phosphor-icon
          name="clock"
          [size]="24"
          weight="bold"
          color="currentColor"
          className="text-text-strong">
        </app-phosphor-icon>
        <h2 class="text-xl font-semibold text-text-strong">Recent Projects</h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          *ngFor="let project of recentProjects"
          class="bg-white rounded-xl border border-stroke-weak p-6 hover:shadow-lg transition-shadow cursor-pointer"
          (click)="onViewProject(project.id)">
          
          <!-- Project Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-text-strong mb-2 line-clamp-2">{{ project.name }}</h3>
              <p class="text-text-weak text-sm line-clamp-3">{{ project.description }}</p>
            </div>
          </div>
          
          <!-- Project Stats -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span 
                class="px-2 py-1 text-xs font-medium rounded-full"
                [class]="project.status === 'active' ? 'bg-green-100 text-green-800' : 
                         project.status === 'completed' ? 'bg-blue-100 text-blue-800' : 
                         'bg-gray-100 text-gray-800'">
                {{ project.status | titlecase }}
              </span>
            </div>
            <span class="text-sm text-text-weak">{{ project.caseCount }} cases</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-stroke-weak my-8"></div>

    <!-- Pinned Projects Section -->
    <div class="mb-8">
      <!-- Section Header -->
      <div class="flex items-center space-x-3 mb-6">
        <app-phosphor-icon
          name="pin"
          [size]="24"
          weight="bold"
          color="currentColor"
          className="text-text-strong">
        </app-phosphor-icon>
        <h2 class="text-xl font-semibold text-text-strong">Pinned Projects</h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          *ngFor="let project of pinnedProjects"
          class="bg-white rounded-xl border border-stroke-weak p-6 hover:shadow-lg transition-shadow cursor-pointer"
          (click)="onViewProject(project.id)">
          
          <!-- Project Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-text-strong mb-2 line-clamp-2">{{ project.name }}</h3>
              <p class="text-text-weak text-sm line-clamp-3">{{ project.description }}</p>
            </div>
            <app-phosphor-icon
              name="pin"
              [size]="16"
              weight="bold"
              color="#147885"
              className="flex-shrink-0 ml-2">
            </app-phosphor-icon>
          </div>
          
          <!-- Project Stats -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span 
                class="px-2 py-1 text-xs font-medium rounded-full"
                [class]="project.status === 'active' ? 'bg-green-100 text-green-800' : 
                         project.status === 'completed' ? 'bg-blue-100 text-blue-800' : 
                         'bg-gray-100 text-gray-800'">
                {{ project.status | titlecase }}
              </span>
            </div>
            <span class="text-sm text-text-weak">{{ project.caseCount }} cases</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/pages/dashboard/dashboard.component.css */\n:host {\n  display: block;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .grid-cols-1.md\\\\:grid-cols-2.lg\\\\:grid-cols-3 {\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 768px) {\n  .grid-cols-1.md\\\\:grid-cols-2.lg\\\\:grid-cols-3 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 1024px) {\n  .grid-cols-1.md\\\\:grid-cols-2.lg\\\\:grid-cols-3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.bg-brand:hover {\n  background-color: #2F55D9;\n}\n@media (max-width: 640px) {\n  .px-4.sm\\\\:px-6.lg\\\\:px-8 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .py-8 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/dashboard/dashboard.component.ts", lineNumber: 21 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-KI2TYMAB.js.map
