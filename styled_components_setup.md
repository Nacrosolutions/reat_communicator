
# Styled-Components + TypeScript Setup Guide (Step-by-Step)

## 1. Install styled-components
Install styled-components and its TypeScript definitions.

## 2. Create a theme file
Create a central theme object containing:
- Colors  
- Spacing  
- Font sizes  

This theme becomes the single source of truth for styling.

## 3. Create global CSS
Add a global stylesheet to define:
- Base font size (1rem = 10px)  
- Reset margins  
- Global background  
- Shared global styles  

## 4. Add ThemeProvider
Wrap the entire React application inside ThemeProvider so every component can access the theme values.

## 5. Configure TypeScript to recognize the theme
Create a styled.d.ts file to extend styled-components and allow TypeScript to know your theme shape.

## 6. Use auto-inferred theme typing
Configure TypeScript to automatically infer theme types from your theme object, eliminating duplicate interfaces and keeping the theme always in sync.

## 7. Fix ESLint warning
Disable the '@typescript-eslint/no-empty-object-type' rule for the styled.d.ts file since styled-components requires module augmentation.

## 8. Verify theme usage in components
Ensure styled components can access theme values with full IntelliSense and type safety.

## Final Outcome
- Fully configured styled-components setup  
- Typed and auto-inferred theme  
- No TypeScript errors  
- ESLint warnings resolved  
- Global design system established  
- Clean and scalable project structure
