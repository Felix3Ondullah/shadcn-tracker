# Tutor Guide: Building the Static Legal Workspace with shadcn/ui

## Purpose

This is a visual practice page inspired by the supplied dark legal-assistant screenshot. The visible branding and sample questions make it feel like a Kenyan legal research workspace. It is intentionally static: the navigation, upload, send, upgrade, and search controls have no application behavior or backend connection.

This handout contains the explanation and a line-by-line annotated source appendix. These annotations are **only in this document**; the application source files remain free of teaching comments.

## What I built

The screen has three main visual regions: the left sidebar, the top bar, and the centered question composer. Separate React components represent these regions, with smaller components for the profile and brand mark. Each part can be understood and styled independently.

## How shadcn/ui was used

shadcn/ui adds component source code to this project. The files under `components/ui/` are local and editable rather than hidden behind a closed component package. This screen uses the local shadcn `Button` primitive and a local shadcn-style `Textarea` wrapper. Button variants such as `ghost`, `outline`, and `secondary` let one reusable control fit multiple visual roles. Lucide supplies icons, while custom CSS handles the screenshot-specific layout and appearance.

## Steps to explain the build to the tutor

1. **Read the reference:** identify the sidebar, top bar, and centered composer before coding.
2. **Set the conventions:** `components.json` records the shadcn preset, stylesheet, aliases, and icon set. The global stylesheet imports Tailwind and shadcn styles.
3. **Prepare reusable controls:** use the local `Button` for the different controls, and wrap a native textarea as a reusable `Textarea` component.
4. **Split the screen:** `WorkspaceSidebar`, `WorkspaceTopbar`, and `ChatComposer` represent the main regions. `AccountProfile` and `BrandMark` are smaller reusable pieces.
5. **Compose the route:** `app/page.tsx` renders `Workspace`; `Workspace` puts the sidebar beside the main panel.
6. **Match the visual design:** CSS variables establish colors; layout rules set widths and alignment; media queries adapt the layout to small screens.
7. **Keep it presentational:** recent Kenyan law questions and controls are sample content. No search, chat submission, upload handler, or navigation routing was added.

### Short tutor presentation

> “I divided the screenshot into the sidebar, top bar, and center composer. I built those as React components and reused shadcn Button variants for their controls. The component source is local, so it can be customized. I added a Textarea wrapper and used CSS variables and responsive rules to match the dark design. The legal questions and controls are sample UI only; I focused on the appearance rather than app functionality.”

## Annotated source appendix

Every source line is reproduced in order with a neighboring explanation. Blank lines are included and described. These are documentation annotations, not comments inserted into the source code.


### `app/page.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import { Workspace } from '@/components/workspace'` | Imports the component, type, icon, or helper used below. |
| 2 | `` | Blank separator for readability. |
| 3 | `export default function HomePage() {` | Exports the Next.js route or layout component. |
| 4 | `  return <Workspace />` | Returns the element or value produced by this component/function. |
| 5 | `}` | Closes the current function, object, style rule, or JSX element. |

### `app/layout.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import type { Metadata } from 'next'` | Imports the component, type, icon, or helper used below. |
| 2 | `import type { ReactNode } from 'react'` | Imports the component, type, icon, or helper used below. |
| 3 | `import './globals.css'` | Imports the component, type, icon, or helper used below. |
| 4 | `` | Blank separator for readability. |
| 5 | `export const metadata: Metadata = {` | Continues the expression or configuration opened by the surrounding lines. |
| 6 | `  title: 'UI Practice Workspace',` | Continues the expression or configuration opened by the surrounding lines. |
| 7 | `  description: 'A static shadcn/ui workspace practice interface.',` | Continues the expression or configuration opened by the surrounding lines. |
| 8 | `}` | Closes the current function, object, style rule, or JSX element. |
| 9 | `` | Blank separator for readability. |
| 10 | `export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {` | Exports the Next.js route or layout component. |
| 11 | `  return (` | Returns the element or value produced by this component/function. |
| 12 | `    <html lang="en" className="dark">` | Renders a semantic HTML/JSX element in the interface. |
| 13 | `      <body>{children}</body>` | Renders a semantic HTML/JSX element in the interface. |
| 14 | `    </html>` | Renders a semantic HTML/JSX element in the interface. |
| 15 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 16 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/workspace.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import { CircleHelp } from 'lucide-react'` | Imports the component, type, icon, or helper used below. |
| 2 | `import { Button } from '@/components/ui/button'` | Imports the component, type, icon, or helper used below. |
| 3 | `import { ChatComposer } from './chat-composer'` | Imports the component, type, icon, or helper used below. |
| 4 | `import { WorkspaceSidebar } from './workspace-sidebar'` | Imports the component, type, icon, or helper used below. |
| 5 | `import { WorkspaceTopbar } from './workspace-topbar'` | Imports the component, type, icon, or helper used below. |
| 6 | `` | Blank separator for readability. |
| 7 | `export function Workspace() {` | Declares and exports a reusable React component. |
| 8 | `  return (` | Returns the element or value produced by this component/function. |
| 9 | `    <div className="workspace-shell">` | Renders a semantic HTML/JSX element in the interface. |
| 10 | `      <WorkspaceSidebar />` | Renders a semantic HTML/JSX element in the interface. |
| 11 | `      <main className="main-panel">` | Renders a semantic HTML/JSX element in the interface. |
| 12 | `        <WorkspaceTopbar />` | Renders a semantic HTML/JSX element in the interface. |
| 13 | `        <section className="home-content">` | Renders a semantic HTML/JSX element in the interface. |
| 14 | `          <div className="center-panel"><ChatComposer /></div>` | Renders a semantic HTML/JSX element in the interface. |
| 15 | `          <Button variant="ghost" className="help-button" aria-label="Help"><CircleHelp size={17} /></Button>` | Renders a semantic HTML/JSX element in the interface. |
| 16 | `        </section>` | Renders a semantic HTML/JSX element in the interface. |
| 17 | `      </main>` | Renders a semantic HTML/JSX element in the interface. |
| 18 | `    </div>` | Renders a semantic HTML/JSX element in the interface. |
| 19 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 20 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/workspace-sidebar.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import {` | Imports the component, type, icon, or helper used below. |
| 2 | `  FileText,` | Continues the expression or configuration opened by the surrounding lines. |
| 3 | `  Home,` | Continues the expression or configuration opened by the surrounding lines. |
| 4 | `  Landmark,` | Continues the expression or configuration opened by the surrounding lines. |
| 5 | `  PenLine,` | Continues the expression or configuration opened by the surrounding lines. |
| 6 | `  Search,` | Continues the expression or configuration opened by the surrounding lines. |
| 7 | `  Star,` | Continues the expression or configuration opened by the surrounding lines. |
| 8 | `} from 'lucide-react'` | Closes the current function, object, style rule, or JSX element. |
| 9 | `import { Button } from '@/components/ui/button'` | Imports the component, type, icon, or helper used below. |
| 10 | `import { AccountProfile } from './account-profile'` | Imports the component, type, icon, or helper used below. |
| 11 | `import { BrandMark } from './brand-mark'` | Imports the component, type, icon, or helper used below. |
| 12 | `` | Blank separator for readability. |
| 13 | `const recentChats = [` | Creates a constant for content, metadata, or component configuration. |
| 14 | `  'What are my rights if I am arrested in Kenya?',` | Continues the expression or configuration opened by the surrounding lines. |
| 15 | `  'How is land ownership transferred in Kenya?',` | Continues the expression or configuration opened by the surrounding lines. |
| 16 | `  'What is the process for filing a succession case?',` | Continues the expression or configuration opened by the surrounding lines. |
| 17 | `  'Can a landlord evict a tenant without notice?',` | Continues the expression or configuration opened by the surrounding lines. |
| 18 | `  'Summarize the remedies for unfair dismissal',` | Continues the expression or configuration opened by the surrounding lines. |
| 19 | `  'What is the penalty for obtaining by false pretences?',` | Continues the expression or configuration opened by the surrounding lines. |
| 20 | `  'How do I file a small claims case in Kenya?',` | Continues the expression or configuration opened by the surrounding lines. |
| 21 | `  'Can the police search my house without a warrant?',` | Continues the expression or configuration opened by the surrounding lines. |
| 22 | `  'What does the Constitution say about bail?',` | Continues the expression or configuration opened by the surrounding lines. |
| 23 | `  'How can I challenge a chief’s decision on land?',` | Continues the expression or configuration opened by the surrounding lines. |
| 24 | `]` | Continues the expression or configuration opened by the surrounding lines. |
| 25 | `` | Blank separator for readability. |
| 26 | `const navigation = [` | Creates a constant for content, metadata, or component configuration. |
| 27 | `  { label: 'Home', icon: Home },` | Continues the expression or configuration opened by the surrounding lines. |
| 28 | `  { label: 'Featured', icon: Star },` | Continues the expression or configuration opened by the surrounding lines. |
| 29 | `  { label: 'Documents', icon: FileText },` | Continues the expression or configuration opened by the surrounding lines. |
| 30 | `  { label: 'Library', icon: Landmark },` | Continues the expression or configuration opened by the surrounding lines. |
| 31 | `  { label: 'Drafts', icon: PenLine },` | Continues the expression or configuration opened by the surrounding lines. |
| 32 | `]` | Continues the expression or configuration opened by the surrounding lines. |
| 33 | `` | Blank separator for readability. |
| 34 | `export function WorkspaceSidebar() {` | Declares and exports a reusable React component. |
| 35 | `  return (` | Returns the element or value produced by this component/function. |
| 36 | `    <aside className="sidebar">` | Renders a semantic HTML/JSX element in the interface. |
| 37 | `      <div className="sidebar-top">` | Renders a semantic HTML/JSX element in the interface. |
| 38 | `        <div className="brand-row" aria-label="Bafa workspace">` | Renders a semantic HTML/JSX element in the interface. |
| 39 | `          <span className="brand-mark"><BrandMark /></span>` | Renders a semantic HTML/JSX element in the interface. |
| 40 | `          <span className="brand-name">Bafa</span>` | Renders a semantic HTML/JSX element in the interface. |
| 41 | `        </div>` | Renders a semantic HTML/JSX element in the interface. |
| 42 | `        <div className="organization">Kamau associates</div>` | Renders a semantic HTML/JSX element in the interface. |
| 43 | `        <Button variant="outline" className="new-chat" type="button">` | Renders a semantic HTML/JSX element in the interface. |
| 44 | `          <PenLine size={15} /><span>New chat</span>` | Renders a semantic HTML/JSX element in the interface. |
| 45 | `        </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 46 | `        <nav className="primary-links" aria-label="Main navigation">` | Renders a semantic HTML/JSX element in the interface. |
| 47 | `          <Button variant="ghost" className="side-link search-link" type="button">` | Renders a semantic HTML/JSX element in the interface. |
| 48 | `            <Search size={17} /><span>Search chats</span>` | Renders a semantic HTML/JSX element in the interface. |
| 49 | `          </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 50 | `          {navigation.map(({ label, icon: Icon }) => (` | Continues the expression or configuration opened by the surrounding lines. |
| 51 | `            <Button variant="ghost" key={label} className="side-link" type="button">` | Renders a semantic HTML/JSX element in the interface. |
| 52 | `              <Icon size={17} strokeWidth={1.9} /><span>{label}</span>` | Renders a semantic HTML/JSX element in the interface. |
| 53 | `            </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 54 | `          ))}` | Continues the expression or configuration opened by the surrounding lines. |
| 55 | `        </nav>` | Renders a semantic HTML/JSX element in the interface. |
| 56 | `        <RecentChats />` | Renders a semantic HTML/JSX element in the interface. |
| 57 | `      </div>` | Renders a semantic HTML/JSX element in the interface. |
| 58 | `      <AccountProfile />` | Renders a semantic HTML/JSX element in the interface. |
| 59 | `    </aside>` | Renders a semantic HTML/JSX element in the interface. |
| 60 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 61 | `}` | Closes the current function, object, style rule, or JSX element. |
| 62 | `` | Blank separator for readability. |
| 63 | `function RecentChats() {` | Declares a helper component or function. |
| 64 | `  return (` | Returns the element or value produced by this component/function. |
| 65 | `    <section className="recent-list" aria-labelledby="recent-heading">` | Renders a semantic HTML/JSX element in the interface. |
| 66 | `      <h2 className="recent-title" id="recent-heading">Recents</h2>` | Renders a semantic HTML/JSX element in the interface. |
| 67 | `      {recentChats.map((chat, index) => (` | Continues the expression or configuration opened by the surrounding lines. |
| 68 | `        <Button variant="ghost" key={\`${chat}-${index}\`} className="recent-item" type="button">` | Renders a semantic HTML/JSX element in the interface. |
| 69 | `          {chat}` | Continues the expression or configuration opened by the surrounding lines. |
| 70 | `        </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 71 | `      ))}` | Continues the expression or configuration opened by the surrounding lines. |
| 72 | `    </section>` | Renders a semantic HTML/JSX element in the interface. |
| 73 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 74 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/workspace-topbar.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import { PanelLeft, Sparkles } from 'lucide-react'` | Imports the component, type, icon, or helper used below. |
| 2 | `import { Button } from '@/components/ui/button'` | Imports the component, type, icon, or helper used below. |
| 3 | `` | Blank separator for readability. |
| 4 | `export function WorkspaceTopbar() {` | Declares and exports a reusable React component. |
| 5 | `  return (` | Returns the element or value produced by this component/function. |
| 6 | `    <header className="topbar">` | Renders a semantic HTML/JSX element in the interface. |
| 7 | `      <Button variant="ghost" className="top-icon" aria-label="Sidebar">` | Renders a semantic HTML/JSX element in the interface. |
| 8 | `        <PanelLeft size={17} />` | Renders a semantic HTML/JSX element in the interface. |
| 9 | `      </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 10 | `      <Button className="upgrade-button" type="button">` | Renders a semantic HTML/JSX element in the interface. |
| 11 | `        <Sparkles size={16} /> Upgrade` | Renders a semantic HTML/JSX element in the interface. |
| 12 | `      </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 13 | `    </header>` | Renders a semantic HTML/JSX element in the interface. |
| 14 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 15 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/chat-composer.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import { ArrowUp, Paperclip, Sparkles, Upload } from 'lucide-react'` | Imports the component, type, icon, or helper used below. |
| 2 | `import { Button } from '@/components/ui/button'` | Imports the component, type, icon, or helper used below. |
| 3 | `import { Textarea } from '@/components/ui/textarea'` | Imports the component, type, icon, or helper used below. |
| 4 | `import { BrandMark } from './brand-mark'` | Imports the component, type, icon, or helper used below. |
| 5 | `` | Blank separator for readability. |
| 6 | `export function ChatComposer() {` | Declares and exports a reusable React component. |
| 7 | `  return (` | Returns the element or value produced by this component/function. |
| 8 | `    <>` | Renders a semantic HTML/JSX element in the interface. |
| 9 | `      <h1><span className="heading-mark"><BrandMark /></span>Where should we start?</h1>` | Renders a semantic HTML/JSX element in the interface. |
| 10 | `      <div className="composer">` | Renders a semantic HTML/JSX element in the interface. |
| 11 | `        <Textarea aria-label="Ask Bafa a question" placeholder="Ask Bafa a question..." />` | Renders a semantic HTML/JSX element in the interface. |
| 12 | `        <div className="composer-actions">` | Renders a semantic HTML/JSX element in the interface. |
| 13 | `          <div className="composer-tools">` | Renders a semantic HTML/JSX element in the interface. |
| 14 | `            <Button type="button" variant="ghost" className="tool-button" aria-label="Upload">` | Renders a semantic HTML/JSX element in the interface. |
| 15 | `              <Upload size={17} />` | Renders a semantic HTML/JSX element in the interface. |
| 16 | `            </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 17 | `            <Button type="button" variant="ghost" className="documents-button">` | Renders a semantic HTML/JSX element in the interface. |
| 18 | `              <Paperclip size={17} /> Documents` | Renders a semantic HTML/JSX element in the interface. |
| 19 | `            </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 20 | `            <Button type="button" variant="secondary" className="help-chip">` | Renders a semantic HTML/JSX element in the interface. |
| 21 | `              <Sparkles size={16} /> What can Bafa do?` | Renders a semantic HTML/JSX element in the interface. |
| 22 | `            </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 23 | `          </div>` | Renders a semantic HTML/JSX element in the interface. |
| 24 | `          <Button type="button" className="send-button" aria-label="Send question">` | Renders a semantic HTML/JSX element in the interface. |
| 25 | `            <ArrowUp size={21} />` | Renders a semantic HTML/JSX element in the interface. |
| 26 | `          </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 27 | `        </div>` | Renders a semantic HTML/JSX element in the interface. |
| 28 | `      </div>` | Renders a semantic HTML/JSX element in the interface. |
| 29 | `      <p className="disclaimer">Review cited sources before relying on an answer. Enter to send · Shift+Enter for a new line.</p>` | Renders a semantic HTML/JSX element in the interface. |
| 30 | `      <p className="suggestion-copy">` | Renders a semantic HTML/JSX element in the interface. |
| 31 | `        Choose documents and Bafa will suggest what to ask of them: answers with sources, summaries, tables of extracted details` | Continues the expression or configuration opened by the surrounding lines. |
| 32 | `        <br className="desktop-break" /> and chronologies.` | Renders a semantic HTML/JSX element in the interface. |
| 33 | `      </p>` | Renders a semantic HTML/JSX element in the interface. |
| 34 | `    </>` | Renders a semantic HTML/JSX element in the interface. |
| 35 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 36 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/account-profile.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import { Settings } from 'lucide-react'` | Imports the component, type, icon, or helper used below. |
| 2 | `import { Button } from '@/components/ui/button'` | Imports the component, type, icon, or helper used below. |
| 3 | `` | Blank separator for readability. |
| 4 | `export function AccountProfile() {` | Declares and exports a reusable React component. |
| 5 | `  return (` | Returns the element or value produced by this component/function. |
| 6 | `    <footer className="account-row">` | Renders a semantic HTML/JSX element in the interface. |
| 7 | `      <span className="account-avatar" role="img" aria-label="Felix Ondullah">F</span>` | Renders a semantic HTML/JSX element in the interface. |
| 8 | `      <span className="account-copy">` | Renders a semantic HTML/JSX element in the interface. |
| 9 | `        <strong>Felix Ondullah</strong>` | Renders a semantic HTML/JSX element in the interface. |
| 10 | `        <small>humluchetu@gmail.com</small>` | Renders a semantic HTML/JSX element in the interface. |
| 11 | `      </span>` | Renders a semantic HTML/JSX element in the interface. |
| 12 | `      <Button variant="ghost" className="settings-button" aria-label="Settings" title="Settings">` | Renders a semantic HTML/JSX element in the interface. |
| 13 | `        <Settings size={18} />` | Renders a semantic HTML/JSX element in the interface. |
| 14 | `      </Button>` | Renders a semantic HTML/JSX element in the interface. |
| 15 | `    </footer>` | Renders a semantic HTML/JSX element in the interface. |
| 16 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 17 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/brand-mark.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `export function BrandMark() {` | Declares and exports a reusable React component. |
| 2 | `  return (` | Returns the element or value produced by this component/function. |
| 3 | `    <svg className="brand-mark-svg" viewBox="0 0 32 32" fill="none" aria-hidden="true">` | Renders a semantic HTML/JSX element in the interface. |
| 4 | `      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />` | Renders a semantic HTML/JSX element in the interface. |
| 5 | `      <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 6 | `      <circle cx="16" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 7 | `      <circle cx="23.4" cy="8.6" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 8 | `      <circle cx="26.5" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 9 | `      <circle cx="23.4" cy="23.4" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 10 | `      <circle cx="16" cy="26.5" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 11 | `      <circle cx="8.6" cy="23.4" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 12 | `      <circle cx="5.5" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 13 | `      <circle cx="8.6" cy="8.6" r="2" stroke="currentColor" strokeWidth="1.5" />` | Renders a semantic HTML/JSX element in the interface. |
| 14 | `      <circle cx="16" cy="16" r="2" fill="currentColor" />` | Renders a semantic HTML/JSX element in the interface. |
| 15 | `    </svg>` | Renders a semantic HTML/JSX element in the interface. |
| 16 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 17 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components/ui/button.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import * as React from "react"` | Imports the component, type, icon, or helper used below. |
| 2 | `import { cva, type VariantProps } from "class-variance-authority"` | Imports the component, type, icon, or helper used below. |
| 3 | `import { cn } from "cn"` | Imports the component, type, icon, or helper used below. |
| 4 | `import { Slot } from "radix-ui"` | Imports the component, type, icon, or helper used below. |
| 5 | `` | Blank separator for readability. |
| 6 | `const buttonVariants = cva(` | Creates a constant for content, metadata, or component configuration. |
| 7 | `  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",` | Sets a configuration option for the project or shadcn CLI. |
| 8 | `  {` | Continues the expression or configuration opened by the surrounding lines. |
| 9 | `    variants: {` | Continues the expression or configuration opened by the surrounding lines. |
| 10 | `      variant: {` | Configures a reusable Button variant, size, or default. |
| 11 | `        default: "bg-primary text-primary-foreground hover:bg-primary/80",` | Sets a configuration option for the project or shadcn CLI. |
| 12 | `        outline:` | Continues the expression or configuration opened by the surrounding lines. |
| 13 | `          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",` | Sets a configuration option for the project or shadcn CLI. |
| 14 | `        secondary:` | Continues the expression or configuration opened by the surrounding lines. |
| 15 | `          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",` | Sets a configuration option for the project or shadcn CLI. |
| 16 | `        ghost:` | Continues the expression or configuration opened by the surrounding lines. |
| 17 | `          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",` | Sets a configuration option for the project or shadcn CLI. |
| 18 | `        destructive:` | Continues the expression or configuration opened by the surrounding lines. |
| 19 | `          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",` | Sets a configuration option for the project or shadcn CLI. |
| 20 | `        link: "text-primary underline-offset-4 hover:underline",` | Sets a configuration option for the project or shadcn CLI. |
| 21 | `      },` | Closes the current function, object, style rule, or JSX element. |
| 22 | `      size: {` | Configures a reusable Button variant, size, or default. |
| 23 | `        default:` | Continues the expression or configuration opened by the surrounding lines. |
| 24 | `          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",` | Sets a configuration option for the project or shadcn CLI. |
| 25 | `        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",` | Sets a configuration option for the project or shadcn CLI. |
| 26 | `        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",` | Sets a configuration option for the project or shadcn CLI. |
| 27 | `        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",` | Sets a configuration option for the project or shadcn CLI. |
| 28 | `        icon: "size-8",` | Sets a configuration option for the project or shadcn CLI. |
| 29 | `        "icon-xs":` | Sets a configuration option for the project or shadcn CLI. |
| 30 | `          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",` | Sets a configuration option for the project or shadcn CLI. |
| 31 | `        "icon-sm":` | Sets a configuration option for the project or shadcn CLI. |
| 32 | `          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",` | Sets a configuration option for the project or shadcn CLI. |
| 33 | `        "icon-lg": "size-9",` | Sets a configuration option for the project or shadcn CLI. |
| 34 | `      },` | Closes the current function, object, style rule, or JSX element. |
| 35 | `    },` | Closes the current function, object, style rule, or JSX element. |
| 36 | `    defaultVariants: {` | Configures a reusable Button variant, size, or default. |
| 37 | `      variant: "default",` | Configures a reusable Button variant, size, or default. |
| 38 | `      size: "default",` | Configures a reusable Button variant, size, or default. |
| 39 | `    },` | Closes the current function, object, style rule, or JSX element. |
| 40 | `  }` | Closes the current function, object, style rule, or JSX element. |
| 41 | `)` | Continues the expression or configuration opened by the surrounding lines. |
| 42 | `` | Blank separator for readability. |
| 43 | `function Button({` | Declares a helper component or function. |
| 44 | `  className,` | Continues the expression or configuration opened by the surrounding lines. |
| 45 | `  variant = "default",` | Continues the expression or configuration opened by the surrounding lines. |
| 46 | `  size = "default",` | Continues the expression or configuration opened by the surrounding lines. |
| 47 | `  asChild = false,` | Continues the expression or configuration opened by the surrounding lines. |
| 48 | `  ...props` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 49 | `}: React.ComponentProps<"button"> &` | Closes the current function, object, style rule, or JSX element. |
| 50 | `  VariantProps<typeof buttonVariants> & {` | Continues the expression or configuration opened by the surrounding lines. |
| 51 | `    asChild?: boolean` | Continues the expression or configuration opened by the surrounding lines. |
| 52 | `  }) {` | Closes the current function, object, style rule, or JSX element. |
| 53 | `  const Comp = asChild ? Slot.Root : "button"` | Creates a constant for content, metadata, or component configuration. |
| 54 | `` | Blank separator for readability. |
| 55 | `  return (` | Returns the element or value produced by this component/function. |
| 56 | `    <Comp` | Renders a semantic HTML/JSX element in the interface. |
| 57 | `      data-slot="button"` | Continues the expression or configuration opened by the surrounding lines. |
| 58 | `      data-variant={variant}` | Continues the expression or configuration opened by the surrounding lines. |
| 59 | `      data-size={size}` | Continues the expression or configuration opened by the surrounding lines. |
| 60 | `      className={cn(buttonVariants({ variant, size, className }))}` | Continues the expression or configuration opened by the surrounding lines. |
| 61 | `      {...props}` | Continues the expression or configuration opened by the surrounding lines. |
| 62 | `    />` | Continues the expression or configuration opened by the surrounding lines. |
| 63 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 64 | `}` | Closes the current function, object, style rule, or JSX element. |
| 65 | `` | Blank separator for readability. |
| 66 | `export { Button, buttonVariants }` | Continues the expression or configuration opened by the surrounding lines. |

### `components/ui/textarea.tsx`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `import * as React from 'react'` | Imports the component, type, icon, or helper used below. |
| 2 | `import { cn } from 'cn'` | Imports the component, type, icon, or helper used below. |
| 3 | `` | Blank separator for readability. |
| 4 | `function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {` | Declares a helper component or function. |
| 5 | `  return (` | Returns the element or value produced by this component/function. |
| 6 | `    <textarea` | Renders a semantic HTML/JSX element in the interface. |
| 7 | `      data-slot="textarea"` | Continues the expression or configuration opened by the surrounding lines. |
| 8 | `      className={cn(` | Continues the expression or configuration opened by the surrounding lines. |
| 9 | `        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',` | Continues the expression or configuration opened by the surrounding lines. |
| 10 | `        className,` | Continues the expression or configuration opened by the surrounding lines. |
| 11 | `      )}` | Continues the expression or configuration opened by the surrounding lines. |
| 12 | `      {...props}` | Continues the expression or configuration opened by the surrounding lines. |
| 13 | `    />` | Continues the expression or configuration opened by the surrounding lines. |
| 14 | `  )` | Continues the expression or configuration opened by the surrounding lines. |
| 15 | `}` | Closes the current function, object, style rule, or JSX element. |
| 16 | `` | Blank separator for readability. |
| 17 | `export { Textarea }` | Continues the expression or configuration opened by the surrounding lines. |

### `app/globals.css`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `@import "tailwindcss";` | Loads a stylesheet or design-system layer. |
| 2 | `@import "tw-animate-css";` | Loads a stylesheet or design-system layer. |
| 3 | `@import "shadcn/tailwind.css";` | Loads a stylesheet or design-system layer. |
| 4 | `` | Blank separator for readability. |
| 5 | `@custom-variant dark (&:is(.dark *));` | Defines the Tailwind dark-mode selector. |
| 6 | `` | Blank separator for readability. |
| 7 | `:root {` | Begins global defaults and reusable theme variables. |
| 8 | `  color-scheme: dark;` | Continues the expression or configuration opened by the surrounding lines. |
| 9 | `  font-family: Inter, ui-sans-serif, system-ui, sans-serif;` | Continues the expression or configuration opened by the surrounding lines. |
| 10 | `  color: #eeedeb;` | Continues the expression or configuration opened by the surrounding lines. |
| 11 | `  background: #191817;` | Continues the expression or configuration opened by the surrounding lines. |
| 12 | `  font-synthesis: none;` | Continues the expression or configuration opened by the surrounding lines. |
| 13 | `  text-rendering: optimizeLegibility;` | Continues the expression or configuration opened by the surrounding lines. |
| 14 | `  -webkit-font-smoothing: antialiased;` | Continues the expression or configuration opened by the surrounding lines. |
| 15 | `  --mint: #8fe5c7;` | Defines a reusable color, spacing, radius, or typography token. |
| 16 | `  --sidebar: #171716;` | Defines a reusable color, spacing, radius, or typography token. |
| 17 | `  --line: #2a2927;` | Defines a reusable color, spacing, radius, or typography token. |
| 18 | `  --muted: #92908d;` | Defines a reusable color, spacing, radius, or typography token. |
| 19 | `  --background: #191817;` | Defines a reusable color, spacing, radius, or typography token. |
| 20 | `  --foreground: #eeedeb;` | Defines a reusable color, spacing, radius, or typography token. |
| 21 | `  --card: #201f1d;` | Defines a reusable color, spacing, radius, or typography token. |
| 22 | `  --card-foreground: #eeedeb;` | Defines a reusable color, spacing, radius, or typography token. |
| 23 | `  --popover: #201f1d;` | Defines a reusable color, spacing, radius, or typography token. |
| 24 | `  --popover-foreground: #eeedeb;` | Defines a reusable color, spacing, radius, or typography token. |
| 25 | `  --primary: #eae9e7;` | Defines a reusable color, spacing, radius, or typography token. |
| 26 | `  --primary-foreground: #242321;` | Defines a reusable color, spacing, radius, or typography token. |
| 27 | `  --secondary: #16352b;` | Defines a reusable color, spacing, radius, or typography token. |
| 28 | `  --secondary-foreground: #8de2c3;` | Defines a reusable color, spacing, radius, or typography token. |
| 29 | `  --muted-foreground: #92908d;` | Defines a reusable color, spacing, radius, or typography token. |
| 30 | `  --accent: #252421;` | Defines a reusable color, spacing, radius, or typography token. |
| 31 | `  --accent-foreground: #eeedeb;` | Defines a reusable color, spacing, radius, or typography token. |
| 32 | `  --destructive: #f87171;` | Defines a reusable color, spacing, radius, or typography token. |
| 33 | `  --border: #373532;` | Defines a reusable color, spacing, radius, or typography token. |
| 34 | `  --input: #373532;` | Defines a reusable color, spacing, radius, or typography token. |
| 35 | `  --ring: #6c897e;` | Defines a reusable color, spacing, radius, or typography token. |
| 36 | `  --radius: .75rem;` | Defines a reusable color, spacing, radius, or typography token. |
| 37 | `}` | Closes the current function, object, style rule, or JSX element. |
| 38 | `` | Blank separator for readability. |
| 39 | `@theme inline {` | Maps CSS variables into Tailwind theme tokens. |
| 40 | `  --color-background: var(--background);` | Defines a reusable color, spacing, radius, or typography token. |
| 41 | `  --color-foreground: var(--foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 42 | `  --color-card: var(--card);` | Defines a reusable color, spacing, radius, or typography token. |
| 43 | `  --color-card-foreground: var(--card-foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 44 | `  --color-popover: var(--popover);` | Defines a reusable color, spacing, radius, or typography token. |
| 45 | `  --color-popover-foreground: var(--popover-foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 46 | `  --color-primary: var(--primary);` | Defines a reusable color, spacing, radius, or typography token. |
| 47 | `  --color-primary-foreground: var(--primary-foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 48 | `  --color-secondary: var(--secondary);` | Defines a reusable color, spacing, radius, or typography token. |
| 49 | `  --color-secondary-foreground: var(--secondary-foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 50 | `  --color-muted: var(--accent);` | Defines a reusable color, spacing, radius, or typography token. |
| 51 | `  --color-muted-foreground: var(--muted-foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 52 | `  --color-accent: var(--accent);` | Defines a reusable color, spacing, radius, or typography token. |
| 53 | `  --color-accent-foreground: var(--accent-foreground);` | Defines a reusable color, spacing, radius, or typography token. |
| 54 | `  --color-destructive: var(--destructive);` | Defines a reusable color, spacing, radius, or typography token. |
| 55 | `  --color-border: var(--border);` | Defines a reusable color, spacing, radius, or typography token. |
| 56 | `  --color-input: var(--input);` | Defines a reusable color, spacing, radius, or typography token. |
| 57 | `  --color-ring: var(--ring);` | Defines a reusable color, spacing, radius, or typography token. |
| 58 | `  --radius-sm: calc(var(--radius) * .6);` | Defines a reusable color, spacing, radius, or typography token. |
| 59 | `  --radius-md: calc(var(--radius) * .8);` | Defines a reusable color, spacing, radius, or typography token. |
| 60 | `  --radius-lg: var(--radius);` | Defines a reusable color, spacing, radius, or typography token. |
| 61 | `  --radius-xl: calc(var(--radius) * 1.4);` | Defines a reusable color, spacing, radius, or typography token. |
| 62 | `  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;` | Defines a reusable color, spacing, radius, or typography token. |
| 63 | `}` | Closes the current function, object, style rule, or JSX element. |
| 64 | `` | Blank separator for readability. |
| 65 | `* { box-sizing: border-box; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 66 | `body { margin: 0; min-width: 320px; min-height: 100vh; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 67 | `button, textarea, input { font: inherit; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 68 | `button { color: inherit; cursor: pointer; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 69 | `.workspace-shell { display: flex; min-height: 100vh; background: #191817; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 70 | `.sidebar { position: sticky; top: 0; display: flex; flex: 0 0 276px; flex-direction: column; width: 276px; height: 100dvh; background: var(--sidebar); border-right: 1px solid #2b2a28; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 71 | `.sidebar-top { display: flex; min-height: 0; flex: 1; flex-direction: column; padding: 18px 21px 10px 20px; overflow-y: auto; scrollbar-width: none; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 72 | `.sidebar-top::-webkit-scrollbar { display: none; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 73 | `.brand-row { display: flex; align-items: center; gap: 12px; width: max-content; padding: 5px 3px 0; border: 0; background: transparent; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 74 | `.brand-mark { display: grid; width: 34px; height: 34px; place-items: center; border-radius: 9px; background: #e9f4e7; color: #31483d; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 75 | `.brand-name { font-size: 20px; font-weight: 700; letter-spacing: -.04em; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 76 | `.brand-mark-svg { display: block; width: 23px; height: 23px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 77 | `.organization { display: flex; align-items: center; justify-content: space-between; width: 100%; margin: 17px 0 20px; padding: 0 4px; border: 0; background: transparent; color: #deddda; text-align: left; font-size: 14px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 78 | `.new-chat { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; height: 40px; margin-bottom: 20px; border: 1px solid #33322f; border-radius: 12px; background: #1b1a19; color: #e7e5e2; font-size: 14px; transition: background .16s ease; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 79 | `.new-chat:hover { background: #252421; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 80 | `.primary-links { display: grid; gap: 2px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 81 | `.side-link { display: flex; align-items: center; justify-content: flex-start; gap: 13px; height: 41px; width: 100%; padding: 0 7px; border: 0; border-radius: 8px; background: transparent; color: #deddda; text-align: left; font-size: 14px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 82 | `.side-link svg { flex: none; color: #c8c7c4; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 83 | `.side-link:hover, .recent-item:hover { background: #22211f; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 84 | `.search-link { margin-bottom: 3px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 85 | `.recent-list { display: grid; gap: 1px; margin-top: 19px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 86 | `.recent-title { padding: 0 8px 7px; color: #979591; font-size: 12px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 87 | `.recent-item { display: flex; justify-content: flex-start; width: 100%; height: 30px; overflow: hidden; padding: 0 8px; border: 0; border-radius: 6px; background: transparent; color: #d0cecb; text-align: left; text-overflow: ellipsis; white-space: nowrap; font-size: 12.5px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 88 | `.account-row { display: flex; flex: 0 0 73px; align-items: center; gap: 11px; height: 73px; padding: 0 17px 0 20px; border-top: 1px solid #292826; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 89 | `.account-avatar { display: grid; width: 31px; height: 31px; flex: none; place-items: center; border-radius: 50%; background: #8b18ad; color: #fff; font-size: 14px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 90 | `.account-copy { display: grid; min-width: 0; flex: 1; gap: 3px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 91 | `.account-copy strong { overflow: hidden; color: #e8e6e3; font-size: 14px; font-weight: 500; text-overflow: ellipsis; white-space: nowrap; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 92 | `.account-copy small { overflow: hidden; color: #918f8b; font-size: 11px; text-overflow: ellipsis; white-space: nowrap; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 93 | `.settings-button, .top-icon { display: grid; width: 31px; height: 31px; flex: none; place-items: center; border: 0; border-radius: 7px; background: transparent; color: #999792; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 94 | `.settings-button:hover, .top-icon:hover { background: #252421; color: #e9e7e4; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 95 | `.main-panel { display: flex; min-width: 0; min-height: 100dvh; flex: 1; flex-direction: column; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 96 | `.topbar { position: sticky; z-index: 2; top: 0; display: flex; height: 60px; flex: 0 0 60px; align-items: center; justify-content: space-between; padding: 0 26px; border-bottom: 1px solid #252422; background: rgba(25,24,23,.95); }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 97 | `.upgrade-button { display: flex; align-items: center; gap: 8px; height: 37px; padding: 0 15px; border: 1px solid #d2d0cc; border-radius: 11px; background: #eae9e7; color: #242321; font-size: 13px; font-weight: 600; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 98 | `.upgrade-button:hover { background: #fff; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 99 | `.home-content { position: relative; display: grid; min-height: calc(100dvh - 60px); flex: 1; place-items: center; padding: 32px 28px 80px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 100 | `.center-panel { width: min(100%, 784px); margin-top: 0; text-align: center; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 101 | `.center-panel h1 { display: flex; align-items: center; justify-content: center; gap: 16px; margin: 0 0 32px; color: #f0efed; font-size: clamp(26px, 2.1vw, 39px); font-weight: 600; letter-spacing: -.055em; line-height: 1.2; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 102 | `.heading-mark { display: inline-grid; place-items: center; color: var(--mint); }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 103 | `.heading-mark .brand-mark-svg { width: 30px; height: 30px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 104 | `.composer { width: 100%; min-height: 97px; padding: 13px 14px 10px 21px; border: 1px solid #373532; border-radius: 23px; background: #141312; box-shadow: 0 1px 2px #0004; text-align: left; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 105 | `.composer:focus-within { border-color: #4c5b54; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 106 | `.composer textarea { display: block; width: 100%; height: 34px; resize: none; padding: 1px 0; border: 0; outline: none; color: #eceae7; background: transparent; font-size: 15px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 107 | `.composer textarea::placeholder { color: #92908d; opacity: 1; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 108 | `.composer-actions, .composer-tools { display: flex; align-items: center; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 109 | `.composer-actions { justify-content: space-between; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 110 | `.composer-tools { gap: 8px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 111 | `.tool-button, .documents-button { display: inline-flex; height: 34px; align-items: center; justify-content: center; gap: 8px; padding: 0 8px; border: 0; border-radius: 8px; background: transparent; color: #e6e4e1; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 112 | `.tool-button:hover, .documents-button:hover { background: #252421; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 113 | `.help-chip { display: inline-flex; height: 34px; align-items: center; gap: 7px; margin-left: 2px; padding: 0 12px; border: 0; border-radius: 99px; background: #16352b; color: #8de2c3; font-size: 12px; font-weight: 600; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 114 | `.help-chip:hover { background: #1d4839; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 115 | `.send-button { display: grid; width: 37px; height: 37px; place-items: center; border: 0; border-radius: 50%; background: #78a997; color: #18221e; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 116 | `.send-button:hover { background: #a1e5cd; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 117 | `.disclaimer { margin: 10px 0 0; color: #85827e; font-size: 12px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 118 | `.suggestion-copy { margin: 38px 0 0; color: #96938f; font-size: 13px; line-height: 1.45; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 119 | `.help-button { position: fixed; right: 22px; bottom: 20px; display: grid; width: 34px; height: 34px; place-items: center; border: 0; border-radius: 50%; background: transparent; color: #888681; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 120 | `.help-button:hover { background: #252421; color: #e7e5e2; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 121 | `@media (max-width: 760px) {` | Begins responsive CSS for the specified screen width. |
| 122 | `  .sidebar { flex-basis: 66px; width: 66px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 123 | `  .sidebar-top { align-items: center; padding: 15px 9px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 124 | `  .brand-row { padding: 0; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 125 | `  .brand-mark { width: 36px; height: 36px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 126 | `  .brand-name, .organization, .new-chat, .side-link span, .recent-list, .account-copy, .settings-button { display: none; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 127 | `  .primary-links { margin-top: 18px; width: 100%; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 128 | `  .side-link { justify-content: center; padding: 0; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 129 | `  .account-row { justify-content: center; padding: 10px 0; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 130 | `  .topbar { height: 54px; padding: 0 14px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 131 | `  .upgrade-button { height: 34px; padding: 0 11px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 132 | `  .home-content { padding: 30px 17px 70px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 133 | `  .center-panel { margin-top: 0; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 134 | `  .center-panel h1 { gap: 10px; margin-bottom: 28px; font-size: clamp(24px, 6vw, 32px); }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 135 | `  .composer { padding-left: 15px; border-radius: 18px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 136 | `  .help-chip { padding: 0 9px; font-size: 11px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 137 | `  .disclaimer { padding: 0 10px; font-size: 10px; line-height: 1.5; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 138 | `  .suggestion-copy { margin-top: 30px; font-size: 12px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 139 | `  .desktop-break { display: none; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 140 | `}` | Closes the current function, object, style rule, or JSX element. |
| 141 | `@media (max-width: 430px) {` | Begins responsive CSS for the specified screen width. |
| 142 | `  .sidebar { flex-basis: 54px; width: 54px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 143 | `  .sidebar-top { padding-inline: 6px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 144 | `  .account-avatar { width: 29px; height: 29px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 145 | `  .tool-button { padding: 0 4px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 146 | `  .composer-tools { gap: 2px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 147 | `  .documents-button { gap: 5px; padding-inline: 6px; font-size: 12px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 148 | `  .help-chip { gap: 4px; padding-inline: 7px; font-size: 10px; }` | Defines a CSS selector and visual rules for the matching element or UI region. |
| 149 | `}` | Closes the current function, object, style rule, or JSX element. |

### `components.json`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `{` | Continues the expression or configuration opened by the surrounding lines. |
| 2 | `  "$schema": "https://ui.shadcn.com/schema.json",` | Sets a configuration option for the project or shadcn CLI. |
| 3 | `  "style": "radix-nova",` | Sets a configuration option for the project or shadcn CLI. |
| 4 | `  "rsc": true,` | Sets a configuration option for the project or shadcn CLI. |
| 5 | `  "tsx": true,` | Sets a configuration option for the project or shadcn CLI. |
| 6 | `  "tailwind": {` | Sets a configuration option for the project or shadcn CLI. |
| 7 | `    "config": "",` | Sets a configuration option for the project or shadcn CLI. |
| 8 | `    "css": "app/globals.css",` | Sets a configuration option for the project or shadcn CLI. |
| 9 | `    "baseColor": "neutral",` | Sets a configuration option for the project or shadcn CLI. |
| 10 | `    "cssVariables": true,` | Sets a configuration option for the project or shadcn CLI. |
| 11 | `    "prefix": ""` | Sets a configuration option for the project or shadcn CLI. |
| 12 | `  },` | Closes the current function, object, style rule, or JSX element. |
| 13 | `  "iconLibrary": "lucide",` | Sets a configuration option for the project or shadcn CLI. |
| 14 | `  "rtl": false,` | Sets a configuration option for the project or shadcn CLI. |
| 15 | `  "aliases": {` | Sets a configuration option for the project or shadcn CLI. |
| 16 | `    "components": "@/components",` | Sets a configuration option for the project or shadcn CLI. |
| 17 | `    "utils": "@/lib/utils",` | Sets a configuration option for the project or shadcn CLI. |
| 18 | `    "ui": "@/components/ui",` | Sets a configuration option for the project or shadcn CLI. |
| 19 | `    "lib": "@/lib",` | Sets a configuration option for the project or shadcn CLI. |
| 20 | `    "hooks": "@/hooks"` | Sets a configuration option for the project or shadcn CLI. |
| 21 | `  },` | Closes the current function, object, style rule, or JSX element. |
| 22 | `  "menuColor": "default",` | Sets a configuration option for the project or shadcn CLI. |
| 23 | `  "menuAccent": "subtle",` | Sets a configuration option for the project or shadcn CLI. |
| 24 | `  "registries": {}` | Sets a configuration option for the project or shadcn CLI. |
| 25 | `}` | Closes the current function, object, style rule, or JSX element. |

### `lib/utils.ts`

| Line | Source | Comment / explanation |
|---:|---|---|
| 1 | `export { cn } from "cn"` | Re-exports the class-name helper so UI components can use a consistent project import. |
