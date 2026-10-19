# Shadcn UI Practice: Workspace Walkthrough

This guide describes the static workspace UI in this project, how it was assembled from a blank page, and how to explain the choices during a tutor walkthrough. The page is a visual practice project: its buttons and input are presentational and are not connected to search, chat, upload, or navigation behavior.

## 1. What shadcn/ui is

shadcn/ui is a way to add component source code to your project. It is not a black-box component package: the files under `components/ui/` belong to this project and can be read, styled, and changed. This project uses the shadcn `Button` component and a shadcn-style `Textarea` component. The rest of the interface is composed from React components and styled to match the reference.

The word “component” is used at two levels here:

- **UI primitives** are reusable controls such as `Button` and `Textarea`.
- **Feature components** combine primitives and layout markup into larger parts such as the sidebar or composer.

The brand mark is a small inline SVG, and the icons come from Lucide React. They are visual assets, not shadcn components.

## 2. Project structure

```text
app/
  globals.css             # Theme variables and the page's visual layout
  layout.tsx              # Root HTML document, global CSS, and metadata
  page.tsx                # Home route; renders the workspace
components/
  account-profile.tsx     # Bottom profile row in the sidebar
  brand-mark.tsx          # Inline rosette SVG used in two places
  chat-composer.tsx       # Center heading, input, controls, and helper text
  workspace-sidebar.tsx   # Brand, organization, navigation, recents, profile
  workspace-topbar.tsx    # Sidebar icon and upgrade button
  workspace.tsx           # Main page shell; brings the pieces together
  ui/
    button.tsx            # Local shadcn Button primitive
    textarea.tsx          # Local shadcn-style Textarea primitive
```

`app/page.tsx` is the route entry. It renders `Workspace`, which composes the sidebar, top bar, and center composer. The smaller components each have one visual responsibility, so they can be understood and adjusted separately.

## 3. How the interface was designed from scratch

The implementation started by reading the reference as a set of regions rather than trying to build the whole screen at once:

1. **Identify the page regions.** The reference has a fixed-width left sidebar, a narrow top bar, and a large main area.
2. **Set the visual foundation.** `app/globals.css` defines the dark background, muted text, mint accent, borders, spacing, and responsive breakpoints.
3. **Build the reusable controls.** Buttons use the local shadcn `Button`; the input uses a local `Textarea` wrapper. This keeps control styling in one place while allowing page-specific classes.
4. **Split the screen into components.** The sidebar, profile, top bar, composer, and brand mark each live in their own file under `components/`.
5. **Compose the page.** `Workspace` arranges the components and the CSS centers the composer in the available main area.
6. **Use static examples.** Navigation labels and recent searches are arrays of text used to render the screenshot-like list. No app behavior or backend was needed for this visual exercise.

This is a useful workflow for recreating a design: identify its structure, establish the visual system, create reusable controls, build the larger regions, then tune spacing and responsive behavior.

## 4. Component-by-component explanation

### `app/page.tsx`

This is the `/` route in the Next.js App Router. Its job is intentionally small: import and render `Workspace`.

```tsx
import { Workspace } from '@/components/workspace'

export default function HomePage() {
  return <Workspace />
}
```

### `components/workspace.tsx`

This is the page-level composition component. It lays out the sidebar beside the main panel, then places the top bar and centered content inside that panel. The `Button` around the help icon is a shadcn primitive with a custom class for its position.

### `components/workspace-sidebar.tsx`

This builds the left column. The organization name, navigation items, and recent search examples are static content. The `navigation.map(...)` and `recentChats.map(...)` calls repeat the same markup for each item, which avoids copy-pasting a button for every row. `Button` provides each row's shared button base; custom class names handle the screenshot-specific alignment and spacing.

The recent questions are sample UI content, such as “How many games has Arsenal won this season?” They do not run searches.

### `components/account-profile.tsx`

This is the fixed bottom section of the sidebar. It combines a circular initial, the name and email text, and a settings icon button. The profile content is static, so the component has no state or event handlers.

### `components/workspace-topbar.tsx`

This renders the small sidebar icon and the Upgrade button in the top bar. Both use the shared shadcn `Button` component with local styling classes. They are visual controls only in this practice UI.

### `components/chat-composer.tsx`

This owns the center area: the heading and brand mark, question textarea, upload/documents/help controls, send icon, disclaimer, and supporting copy. The input and buttons are intentionally not wired to a service. Their appearance is enough for the visual exercise.

### `components/brand-mark.tsx`

This returns a small inline SVG. It is reused next to the brand in the sidebar and next to the center heading. Keeping it in one component prevents the two marks from drifting apart.

### `components/ui/button.tsx` — shadcn `Button`

This local component is the project's reusable button primitive. It uses `class-variance-authority` to define variants such as `default`, `outline`, `secondary`, and `ghost`, plus sizes. `Button` accepts normal button props and a `className`, so a screen can select a base variant and still add local visual adjustments.

For example, the sidebar's “New chat” button uses `variant="outline"`, while quiet navigation rows use `variant="ghost"`. These are still the same primitive, with different visual variants.

### `components/ui/textarea.tsx` — shadcn-style `Textarea`

This local wrapper accepts the standard HTML `textarea` props and merges the base styles with a caller's `className` using `cn`. The composer adds its `composer` CSS rules to match the reference. This follows the shadcn approach of keeping component code in the project so it can be tailored to the design.

### `app/globals.css`

This stylesheet imports Tailwind and the shadcn theme styles, defines color tokens, and supplies the named layout classes used by the components. The visual details—sidebar width, main area centering, button spacing, colors, borders, and small-screen layout—are tuned here. Keeping global design decisions together makes the visual system easier to adjust consistently.

### `components.json`

This is the shadcn CLI configuration. It records the chosen style preset, CSS entry point, icon library, and import aliases. It helps the CLI add future components using the project's conventions.

## 5. How to explain it to a tutor

You can describe the project like this:

> “I recreated a dark workspace screen as a static UI practice page. I first divided the reference into a sidebar, top bar, and centered composer. Then I created small React components for each region and reused shadcn buttons for the different controls. I kept the UI primitives in the project so I can inspect and customize them. The page styling is in the global stylesheet, including responsive rules. The search list and controls are sample presentation only; I did not add application functionality.”

If asked why there are multiple files, explain that each file has one clear visual responsibility and can be edited independently. If asked how shadcn differs from a traditional component library, explain that the shadcn component source is copied into the project and owned by the project, so its markup and styles can be customized directly.

## 6. Short presentation checklist

- Start at `app/page.tsx` and show how it renders `Workspace`.
- Open `components/workspace.tsx` to show how the larger page pieces fit together.
- Show `workspace-sidebar.tsx` and point out how data arrays render repeated rows.
- Show `components/ui/button.tsx` and explain variants and customization.
- Show `components/ui/textarea.tsx` and explain the wrapper plus merged classes.
- Finish with `app/globals.css` to show the colors, spacing, and responsive styling.
- Clarify that the current buttons and text area are intentionally static.
