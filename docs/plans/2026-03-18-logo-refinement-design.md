# 2026-03-18 Logo Styling Refinement Design

## Objective
To make the Rugania Game Park logo more prominent and balanced in the landing page's header by adjusting its white container to be "thinner" (less vertical padding) and "wider" (more horizontal padding).

## Components to Modify
- `src/components/Navbar.tsx`

## Design Specifications (Approach 1: Balanced Refinement)
1.  **Logo Size:**
    - Increase the `<img>` height from `h-20 lg:h-28` to `h-24 lg:h-36`.
2.  **Container Shape:**
    - Reduce vertical padding from `pt-10 pb-6` to `pt-8 pb-4`.
    - Increase horizontal padding from `px-8` to `px-14`.
    - Maintain `rounded-b-[40px]` corner radius.
3.  **Visual Impact:**
    - This creates a sleeker, badge-like appearance that emphasizes the logo without obscuring too much of the background content.
4.  **Transitions:**
    - Keep existing smooth transition and hover state (`hover:pt-12`).

## Verification Plan
1.  Verify the logo is noticeably larger on desktop and mobile.
2.  Ensure the container looks proportionally wider.
3.  Confirm no layout breakage in the header navigation.
