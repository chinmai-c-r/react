# CSS vs SCSS: Complete Comparison

## Key Differences

### 1. **Variables**

**CSS (Modern - CSS Custom Properties)**

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --spacing: 10px;
}

.grid {
  gap: var(--spacing);
  background: var(--primary-color);
}
```

**SCSS**

```scss
$primary-color: #667eea;
$secondary-color: #764ba2;
$spacing: 10px;

.grid {
  gap: $spacing;
  background: $primary-color;
}
```

**Difference:** SCSS uses `$` for variables, CSS uses `--` prefix. SCSS variables are compiled away, CSS variables are runtime-based.

---

### 2. **Nesting**

**CSS (No native nesting in older versions)**

```css
.grid {
  display: grid;
}

.grid .grid-item {
  background: blue;
}

.grid .grid-item:hover {
  transform: scale(1.05);
}
```

**SCSS (Native nesting)**

```scss
.grid {
  display: grid;

  .grid-item {
    background: blue;

    &:hover {
      transform: scale(1.05);
    }
  }
}
```

**Difference:** SCSS allows nested selectors, cleaner and more organized. CSS now has `@nest` (experimental).

---

### 3. **Mixins (Reusable Code Blocks)**

**CSS (No mixins)**

```css
.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  /* Repeated styles */
}
```

**SCSS (Mixins)**

```scss
@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
}

.grid-item {
  @include flexCenter;
}

.button {
  @include flexCenter;
  background: #667eea;
}
```

**Difference:** SCSS mixins reduce code duplication through reusable code blocks.

---

### 4. **Functions**

**CSS (CSS calc function only)**

```css
.grid {
  gap: calc(10px * 2);
}
```

**SCSS (Custom functions)**

```scss
@function multiply($value, $times) {
  @return $value * $times;
}

.grid {
  gap: multiply(10px, 2);
}
```

**Difference:** SCSS allows custom functions for complex calculations.

---

### 5. **Operations & Math**

**CSS (Limited - calc only)**

```css
.grid {
  width: calc(100% - 20px);
}
```

**SCSS (Full math support)**

```scss
$spacing: 10px;
$margin: 5px;

.grid {
  gap: $spacing + $margin; // 15px
  width: 100% - 20px;
  padding: $spacing * 2; // 20px
}
```

**Difference:** SCSS supports arithmetic operations directly.

---

### 6. **Extend/Inheritance**

**CSS (No direct inheritance)**

```css
.grid-item {
  display: flex;
  color: white;
  border-radius: 8px;
}

.grid-item-large {
  display: flex;
  color: white;
  border-radius: 8px;
  font-size: 24px;
}
```

**SCSS (%placeholder & @extend)**

```scss
%flexItem {
  display: flex;
  color: white;
  border-radius: 8px;
}

.grid-item {
  @extend %flexItem;
}

.grid-item-large {
  @extend %flexItem;
  font-size: 24px;
}
```

**Difference:** SCSS can extend classes to avoid repetition.

---

### 7. **Partials & Imports**

**CSS**

```css
@import url("variables.css");
@import url("grid.css");
@import url("buttons.css");

/* All files are imported as-is */
```

**SCSS**

```scss
@import "variables";
@import "grid";
@import "buttons";

/* Files are compiled into one CSS file */
```

**Difference:** SCSS partials compile into a single file, CSS imports are runtime network requests.

---

### 8. **Loops & Conditionals**

**CSS (Not possible)**

```css
/* CSS cannot loop or use conditionals */
```

**SCSS (Full programming logic)**

```scss
@for $i from 1 through 12 {
  .col-#{$i} {
    width: (100% / 12) * $i;
  }
}

// Generates:
// .col-1 { width: 8.333%; }
// .col-2 { width: 16.666%; }
// ... etc

@if $isDarkMode {
  body {
    background: #1a1a1a;
  }
} @else {
  body {
    background: white;
  }
}
```

**Difference:** SCSS supports loops and conditionals for dynamic styling.

---

## Feature Comparison Table

| Feature         | CSS                         | SCSS              |
| --------------- | --------------------------- | ----------------- |
| Variables       | Yes (CSS custom properties) | Yes ($variables)  |
| Nesting         | No (experimental)           | Yes               |
| Mixins          | No                          | Yes               |
| Functions       | Limited (calc)              | Yes               |
| Math Operations | calc() only                 | Full support      |
| Inheritance     | No                          | Yes (@extend)     |
| Partials        | No (network imports)        | Yes (compiled)    |
| Loops           | No                          | Yes (@for, @each) |
| Conditionals    | No                          | Yes (@if, @else)  |
| Compilation     | Not needed                  | Requires compiler |

---

## When to Use Each

### Use **CSS** when:

- You want no build process
- Browser compatibility is critical
- You prefer modern vanilla approach
- Variables/functions are enough

### Use **SCSS** when:

- You have complex stylesheets
- Need mixins, functions, and logic
- Using a build tool (Webpack, Vite, Next.js)
- Want to avoid code repetition
- Need file organization with partials

---

## In Your Next.js Project

Your Next.js app can use SCSS! Just:

1. Rename `styles.css` → `styles.scss`
2. Next.js auto-detects SCSS
3. Or install: `npm install -D sass`

Example file structure:

```
styles/
├── _variables.scss    // Partial (not compiled alone)
├── _mixins.scss       // Partial
├── _grid.scss         // Partial
└── index.scss         // Main (imports others)
```

---

## Compilation Example

**SCSS Input:**

```scss
$primary: #667eea;

.grid {
  display: grid;
  gap: 10px;

  .item {
    background: $primary;

    &:hover {
      opacity: 0.8;
    }
  }
}
```

**CSS Output (compiled):**

```css
.grid {
  display: grid;
  gap: 10px;
}

.grid .item {
  background: #667eea;
}

.grid .item:hover {
  opacity: 0.8;
}
```

The SCSS compiler processes all the advanced features and outputs standard CSS that browsers understand.
