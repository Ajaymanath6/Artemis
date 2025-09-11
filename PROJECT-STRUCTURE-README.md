# Frontend-Prototype Project Structure

This document outlines the comprehensive structure for the Frontend-Prototype application, including component library, pages, and architectural patterns.

## 📁 Main Project Structure

```
Frontend-Prototype/
├── src/
│   ├── app/
│   │   ├── components/          # Shared UI Components
│   │   ├── pages/              # All Application Pages/Screens
│   │   ├── layouts/            # Page Layout Templates
│   │   └── data/               # JSON Data Files
│   └── ui-library/             # Reusable Component Library
└── design-system/              # Design tokens, colors, typography
```

## 🎨 UI Component Library (ui-library/)

### Button Components
```
uc-button-primary-large         # Main action buttons
uc-button-outline-medium        # Secondary buttons  
uc-button-subtle-large          # Tertiary buttons
uc-button-add-entity           # Add/create buttons
uc-button-search               # Search buttons
```

### Card Components
```
uc-card-case                   # Case information cards
uc-card-attorney               # Attorney profile cards
uc-card-judge                  # Judge information cards
uc-card-analytics              # Data/metrics cards
uc-card-project                # Project cards
uc-card-tracking-record        # Activity tracking cards
```

### Input Components
```
uc-input-search                # Search input fields
uc-input-search-v2            # Advanced search inputs
uc-dropdown-*                 # Various dropdown menus
uc-date-range-picker          # Date selection
```

### Navigation & Layout Components
```
uc-tabs-primary               # Tab navigation
uc-paginator-primary          # Page navigation
uc-divider-*                  # Section separators
uc-accordion-*                # Collapsible sections
```

### Data Display Components
```
uc-table-primary              # Data tables
uc-chart-donut                # Pie charts
uc-chart-line                 # Line graphs
uc-chart-horizontal-bar       # Bar charts
uc-chart-usa-map             # Geographic data visualization
```

### Overlay Components
```
uc-modal-*                    # Modal dialogs
uc-tooltip-*                  # Help tooltips
uc-dropdown-*                 # Contextual menus
```

## 📄 Application Pages Structure

### Authentication Pages
```
/login                        # User login page
/register                     # User registration page
/forgot-password              # Password reset page
```

### Dashboard & Home Pages
```
/dashboard                    # Main dashboard page
/projects                     # Projects overview page
/projects/create              # Create new project page
/projects/{id}/settings       # Project settings page
```

### Search Pages
```
/search                       # Main search page
/search/cases                 # Case search results page
/search/attorneys             # Attorney search results page
/search/judges                # Judge search results page
/search/law-firms             # Law firm search results page
/search/parties               # Party search results page
/search/documents             # Document search results page
```

## 🏗 Detailed Directory Structure

### Components Directory (`src/app/components/`)
```
components/
├── shared/                   # Globally shared components
├── forms/                   # Form-specific components  
├── navigation/              # Navigation components
├── data-display/            # Tables, charts, lists
└── feedback/                # Alerts, notifications, loading states
```

### Pages Directory (`src/app/pages/`)
```
pages/
├── auth/
│   ├── login/
│   ├── register/
│   └── forgot-password/
├── dashboard/
├── projects/
│   ├── list/
│   ├── create/
│   ├── detail/
│   └── settings/
└── search/
    ├── main/
    ├── cases/
    ├── attorneys/
    ├── judges/
    ├── law-firms/
    ├── parties/
    └── documents/
```

### Layouts Directory (`src/app/layouts/`)
```
layouts/
├── auth-layout/             # Layout for authentication pages
├── dashboard-layout/        # Layout for dashboard pages
├── search-layout/           # Layout for search pages
└── default-layout/          # Default application layout
```

### Data Directory (`src/app/data/`)
```
data/
├── mock/                    # Mock data for development
├── types/                   # TypeScript interfaces/types
├── services/                # Data service classes
└── constants/               # Application constants
```

### UI Library Directory (`src/ui-library/`)
```
ui-library/
├── buttons/
│   ├── uc-button-primary-large/
│   ├── uc-button-outline-medium/
│   ├── uc-button-subtle-large/
│   ├── uc-button-add-entity/
│   └── uc-button-search/
├── cards/
│   ├── uc-card-case/
│   ├── uc-card-attorney/
│   ├── uc-card-judge/
│   ├── uc-card-analytics/
│   ├── uc-card-project/
│   └── uc-card-tracking-record/
├── inputs/
│   ├── uc-input-search/
│   ├── uc-input-search-v2/
│   ├── uc-dropdown-variants/
│   └── uc-date-range-picker/
├── navigation/
│   ├── uc-tabs-primary/
│   ├── uc-paginator-primary/
│   ├── uc-divider-variants/
│   └── uc-accordion-variants/
├── data-display/
│   ├── uc-table-primary/
│   ├── uc-chart-donut/
│   ├── uc-chart-line/
│   ├── uc-chart-horizontal-bar/
│   └── uc-chart-usa-map/
└── overlays/
    ├── uc-modal-variants/
    ├── uc-tooltip-variants/
    └── uc-dropdown-contextual/
```

### Design System Directory (`design-system/`)
```
design-system/
├── tokens/
│   ├── colors.json          # Color palette definitions
│   ├── typography.json      # Font families, sizes, weights
│   ├── spacing.json         # Margin, padding values
│   └── breakpoints.json     # Responsive breakpoint values
├── foundations/
│   ├── grid-system/         # Layout grid specifications
│   ├── elevation/           # Shadow and depth systems
│   └── motion/              # Animation and transition specs
└── documentation/
    ├── component-guidelines.md
    ├── accessibility.md
    └── usage-examples.md
```

## 🔧 Component Naming Convention

### Prefix System
- `uc-` = UI Component (reusable library components)
- `page-` = Page-specific components
- `layout-` = Layout components

### Structure Pattern
```
[prefix]-[category]-[variant]-[size]
```

**Examples:**
- `uc-button-primary-large`
- `uc-card-case`
- `uc-input-search-v2`
- `page-dashboard-analytics`
- `layout-auth-container`

## 📋 Implementation Guidelines

### Component Development
1. Each UI component should be self-contained
2. Components should accept props for customization
3. Components should emit events for parent communication
4. Include comprehensive TypeScript types
5. Provide usage documentation

### Page Development
1. Pages should use layout components
2. Pages should compose UI library components
3. Pages should handle routing and navigation
4. Include loading and error states
5. Implement proper SEO meta tags

### Data Management
1. Use services for API communication
2. Implement proper error handling
3. Cache frequently accessed data
4. Use TypeScript interfaces for type safety
5. Mock data for development and testing

## 🎯 Key Features

### Legal Domain Focus
- **Case Management**: Comprehensive case tracking and analytics
- **Attorney Profiles**: Detailed attorney information and history
- **Judge Information**: Judicial history and case assignments
- **Law Firm Management**: Firm profiles and attorney associations
- **Document Management**: Legal document storage and search
- **Party Management**: Case party tracking and relationships

### Search Capabilities
- **Multi-entity search**: Cases, attorneys, judges, law firms, parties, documents
- **Advanced filtering**: Date ranges, jurisdictions, case types
- **Real-time results**: Instant search with autocomplete
- **Search history**: Previous search tracking
- **Saved searches**: Bookmark frequently used searches

### Analytics & Reporting
- **Visual dashboards**: Charts and graphs for data visualization
- **Performance metrics**: Success rates, timelines, outcomes
- **Geographic data**: USA map visualizations
- **Trend analysis**: Historical data patterns
- **Custom reports**: User-defined report generation

## 📱 Responsive Design

### Breakpoint Strategy
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

### Component Responsiveness
- All UI components should be mobile-first responsive
- Layout components should adapt to screen sizes
- Data tables should have horizontal scroll on mobile
- Charts should resize appropriately
- Navigation should collapse on mobile

## 🚀 Development Phases

### Phase 1: Foundation
- Set up project structure
- Implement design system
- Create basic UI components
- Set up routing and layouts

### Phase 2: Core Features
- Authentication system
- Dashboard implementation
- Search functionality
- Data management

### Phase 3: Advanced Features
- Analytics and reporting
- Advanced search filters
- Chart and map integrations
- Performance optimizations

### Phase 4: Polish & Testing
- Comprehensive testing
- Accessibility improvements
- Performance optimization
- Documentation completion

## 📋 Entity Detail Pages

### Attorney Pages
```
/attorney/{id}/summary        # Attorney overview
/attorney/{id}/cases          # Cases involving attorney
/attorney/{id}/analytics      # Attorney performance metrics
/attorney/{id}/judges         # Judges attorney appeared before
/attorney/{id}/law-firms      # Law firms attorney worked with
/attorney/{id}/parties        # Parties attorney represented
/attorney/{id}/attorneys      # Opposing attorneys
```

### Case Pages
```
/case/{id}/overview           # Case summary
/case/{id}/documents          # Case documents
/case/{id}/docket            # Docket entries
/case/{id}/parties           # Case parties
/case/{id}/attorneys         # Case attorneys
/case/{id}/timeline          # Case timeline
/case/{id}/similar           # Similar cases
```

### Judge Pages
```
/judge/{id}/summary          # Judge overview
/judge/{id}/cases            # Cases judge presided over
/judge/{id}/analytics        # Judge statistics
/judge/{id}/attorneys        # Attorneys appearing before judge
```

### Law Firm Pages
```
/law-firm/{id}/summary       # Law firm overview
/law-firm/{id}/cases         # Law firm cases
/law-firm/{id}/attorneys     # Law firm attorneys
/law-firm/{id}/analytics     # Law firm metrics
```

## 🔄 Tracking & Management

```
/tracking                    # Case tracking dashboard
/tracking/updates            # New case updates
/bookmarks                   # Saved items
/templates                   # Document templates
/templates/create            # Create new template
```

## ⚙️ Settings & Profile

```
/settings/profile            # User profile
/settings/account            # Account settings
/settings/notifications      # Notification preferences
/settings/integrations       # Third-party integrations
```

## 🏗️ Page Layouts (layouts/)

### Layout Templates
```
root-layout                  # Base app shell (header, nav)
search-layout               # Search page layout (filters, results)
attorney-layout             # Attorney detail pages layout
case-layout                 # Case detail pages layout  
judge-layout                # Judge detail pages layout
projects-layout             # Projects section layout
settings-layout             # Settings pages layout
tracking-layout             # Tracking pages layout
```

### Layout Components
```
app-header                  # Top navigation bar
app-sidebar                 # Side navigation menu
app-breadcrumb             # Page breadcrumbs
app-search-bar             # Global search
app-user-menu              # User profile dropdown
app-notifications          # Notification bell
```

## 📊 JSON Data Structure (data/)

### Data Files
```
attorneys.json              # Attorney profiles
cases.json                  # Case information
judges.json                 # Judge profiles
law-firms.json             # Law firm data
search-results.json        # Search result samples
analytics-data.json        # Charts and metrics data
user-preferences.json      # User settings
notifications.json         # User notifications
projects.json              # User projects
bookmarks.json             # Saved items
```

### Data Structure Examples

#### Case Data
```json
{
  "caseId": "case-123",
  "caseName": "Smith v. Johnson",
  "caseNumber": "2023-CV-1234",
  "courtSystem": "Superior Court",
  "filedDate": "2023-01-15",
  "caseStatus": "Active",
  "caseType": "Civil",
  "parties": [...],
  "attorneys": [...],
  "documents": [...]
}
```

#### Attorney Data
```json
{
  "attorneyId": "att-456",
  "name": "John Smith",
  "lawFirm": "Smith & Associates",
  "practiceAreas": ["Corporate Law", "Litigation"],
  "totalCases": 145,
  "winRate": 78.5,
  "recentCases": [...]
}
```

## 🔗 Component Relationships

### Attorney Analytics Page
```
attorney-analytics (PAGE)
├── attorney-layout (LAYOUT)
│   ├── app-header
│   ├── app-sidebar
│   └── main-content
│       ├── attorney-profile-sidebar (COMPONENT)
│       ├── attorney-filter-sidebar (COMPONENT)
│       ├── attorney-metric-cards (COMPONENT)
│       ├── metrics-by-state (COMPONENT)
│       ├── judgement-cases (COMPONENT)
│       └── opposing-law-firms-and-attorneys (COMPONENT)
```

### Search Results Page
```
search-results (PAGE)
├── search-layout (LAYOUT)
│   ├── app-header
│   ├── search-filters-sidebar (COMPONENT)
│   └── results-container
│       ├── uc-divider-switch-view (toggle list/card view)
│       ├── case-search-results (COMPONENT)
│       │   └── uc-card-case (multiple cards)
│       └── uc-paginator-primary
```

### Case Detail Page
```
case-detail (PAGE)
├── case-layout (LAYOUT)
│   ├── app-header
│   ├── case-navigation-tabs (COMPONENT)
│   └── case-content
│       ├── case-overview (COMPONENT)
│       ├── case-timeline (COMPONENT)
│       ├── case-documents (COMPONENT)
│       └── case-parties (COMPONENT)
```

## 🎨 Design System

### Colors (Tailwind Classes)
```css
/* Primary Colors */
primary-50 to primary-900     /* Blue tones */
secondary-50 to secondary-900 /* Green tones */
gray-50 to gray-900          /* Gray scale */

/* Semantic Colors */
red-50 to red-900            /* Error/danger */
yellow-50 to yellow-900      /* Warning */
purple-50 to purple-900      /* Info */
```

### Typography
```css
/* Headings */
text-3xl font-bold           /* Page titles */
text-xl font-semibold        /* Section headers */
text-lg font-medium          /* Card titles */

/* Body Text */
text-base                    /* Default text */
text-sm                      /* Secondary text */
text-xs                      /* Caption text */
```

### Spacing & Layout
```css
/* Containers */
w-[57.5rem] mx-auto         /* Main content width */
container                   /* Responsive container */

/* Cards & Components */
rounded-xl border-2         /* Card styling */
p-4, p-6, p-8              /* Padding options */
gap-4, gap-6               /* Spacing between items */
```

## 👨‍🎨 Designer Instructions

### For Each Page:
1. **Layout**: Choose appropriate layout template
2. **Components**: Combine reusable components
3. **Data**: Reference JSON structure for content
4. **Interactions**: Define hover, click, and navigation states

### For Each Component:
1. **Props**: What data does it need?
2. **States**: Default, loading, error, empty states
3. **Variants**: Different sizes or styles
4. **Responsive**: Mobile, tablet, desktop behavior

## 💡 Component Usage Examples

### Attorney Card
```html
<uc-card-attorney 
  name="John Smith"
  lawFirm="Smith & Associates"
  totalCases="145"
  winRate="78.5%"
/>
```

### Case List
```html
<div class="divide-y divide-gray-200">
  <uc-card-case 
    v-for="case in cases"
    caseName="Smith v. Johnson"
    caseNumber="2023-CV-1234"
    filedDate="Jan 15, 2023"
  />
</div>
```

### Search Layout Example
```html
<search-layout>
  <template #filters>
    <search-filters-sidebar />
  </template>
  
  <template #content>
    <uc-divider-switch-view />
    <case-search-results :cases="searchResults" />
    <uc-paginator-primary :totalPages="totalPages" />
  </template>
</search-layout>
```

### Attorney Detail Layout
```html
<attorney-layout>
  <template #sidebar>
    <attorney-profile-sidebar :attorney="attorneyData" />
    <attorney-filter-sidebar />
  </template>
  
  <template #content>
    <attorney-metric-cards :metrics="attorneyMetrics" />
    <metrics-by-state :stateData="stateMetrics" />
    <judgement-cases :cases="recentCases" />
  </template>
</attorney-layout>
```

## 🔧 Technical Implementation Notes

### Routing Structure
```typescript
const routes = [
  // Authentication
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  
  // Dashboard
  { path: '/dashboard', component: DashboardPage },
  
  // Entity Details
  { path: '/attorney/:id/summary', component: AttorneySummaryPage },
  { path: '/attorney/:id/cases', component: AttorneyCasesPage },
  { path: '/attorney/:id/analytics', component: AttorneyAnalyticsPage },
  
  { path: '/case/:id/overview', component: CaseOverviewPage },
  { path: '/case/:id/documents', component: CaseDocumentsPage },
  { path: '/case/:id/timeline', component: CaseTimelinePage },
  
  // Search
  { path: '/search', component: MainSearchPage },
  { path: '/search/cases', component: CaseSearchPage },
  { path: '/search/attorneys', component: AttorneySearchPage },
];
```

### State Management Structure
```typescript
// Store structure for application state
interface AppState {
  auth: AuthState;
  search: SearchState;
  entities: {
    attorneys: Attorney[];
    cases: Case[];
    judges: Judge[];
    lawFirms: LawFirm[];
  };
  ui: UIState;
  user: UserState;
}
```

### Component Props Interface Examples
```typescript
// Attorney Card Component
interface AttorneyCardProps {
  attorney: {
    id: string;
    name: string;
    lawFirm: string;
    totalCases: number;
    winRate: number;
    practiceAreas: string[];
  };
  variant?: 'default' | 'compact' | 'detailed';
  clickable?: boolean;
  showActions?: boolean;
}

// Case Card Component
interface CaseCardProps {
  case: {
    id: string;
    name: string;
    number: string;
    filedDate: string;
    status: 'Active' | 'Closed' | 'Pending';
    type: string;
  };
  showDetails?: boolean;
  onSelect?: (caseId: string) => void;
}
```

---

*This comprehensive structure provides a complete blueprint for building a sophisticated legal research and case management application with Angular 19, Flowbite, and Tailwind CSS.*
