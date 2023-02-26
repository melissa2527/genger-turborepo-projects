import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * NORMALIZE
 * ----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


  /*
  Document
  ========
  */

  /**
  Use a better box model (opinionated).
  */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /**
  Use a more readable tab size (opinionated).
  */

  :root {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  /**
  1. Correct the line height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /*
  Sections
  ========
  */

  /**
  Remove the margin in all browsers.
  */

  body {
    margin: 0;
  }

  /**
  Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
  */

  body {
    font-family: system-ui,
    -apple-system, /* Firefox supports this but not yet \`system-ui\` */ 'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji';
  }

  /*
  Grouping content
  ================
  */

  /**
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  */

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
  }

  /*
  Text-level semantics
  ====================
  */

  /**
  Add the correct text decoration in Chrome, Edge, and Safari.
  */

  abbr[title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /**
  Add the correct font weight in Edge and Safari.
  */

  b,
  strong {
    font-weight: bolder;
  }

  /**
  1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
  2. Correct the odd 'em' font sizing in all browsers.
  */

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace,
    SFMono-Regular,
    Consolas,
    'Liberation Mono',
    Menlo,
    monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
  Add the correct font size in all browsers.
  */

  small {
    font-size: 80%;
  }

  /**
  Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
  */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  Tabular data
  ============
  */

  /**
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  */

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
  }

  /*
  Forms
  =====
  */

  /**
  1. Change the font styles in all browsers.
  2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
  Remove the inheritance of text transform in Edge and Firefox.
  1. Remove the inheritance of text transform in Firefox.
  */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
  Correct the inability to style clickable types in iOS and Safari.
  */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  a[type='button'] {
    -webkit-appearance: unset !important;
  }

  /**
  Remove the inner border and padding in Firefox.
  */

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
  Restore the focus styles unset by the previous rule.
  */

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
  Remove the additional ':invalid' styles in Firefox.
  See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
  */

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /**
  Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
  */

  legend {
    padding: 0;
  }

  /**
  Add the correct vertical alignment in Chrome and Firefox.
  */

  progress {
    vertical-align: baseline;
  }

  /**
  Correct the cursor style of increment and decrement buttons in Safari.
  */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /**
  1. Correct the odd appearance in Chrome and Safari.
  2. Correct the outline style in Safari.
  */

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
  Remove the inner padding in Chrome and Safari on macOS.
  */

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Change font properties to 'inherit' in Safari.
  */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /*
  Interactive
  ===========
  */

  /*
  Add the correct display in Chrome and Safari.
  */

  summary {
    display: list-item;
  }

  /**
   * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
   * A thin layer on top of normalize.css that provides a starting point more
   * suitable for web applications.
   */

  /**
   * Removes the default spacing and border for appropriate elements.
   */

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
  }

  /**
   * Work around a Firefox/IE bug where the transparent \`button\` background
   * results in a loss of the default \`button\` focus styles.
   */

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /**
   * Tailwind custom reset styles
   */

  /**
   * 1. Use the user's configured \`sans\` font-family (with Tailwind's default
   *    sans-serif font stack as a fallback) as a sane default.
   * 2. Use Tailwind's default "normal" line-height so the user isn't forced
   *    to override it to ensure consistency even when using the default theme.
   */

  html {
    font-family: 'DM Sans', sans-serif;
    line-height: 1.5; /* 2 */
  }

  /**
   * Inherit font-family and line-height from \`html\` so users can set them as
   * a class directly on the \`html\` element.
   */

  body {
    font-family: inherit;
    line-height: inherit;
  }

  /**
   * 1. Prevent padding and border from affecting element width.
   *
   *    We used to set this in the html element and inherit from
   *    the parent element for everything else. This caused issues
   *    in shadow-dom-enhanced elements like <details> where the content
   *    is wrapped by a div with box-sizing set to \`content-box\`.
   *
   *    https://github.com/mozdevs/cssremedy/issues/4
   *
   *
   * 2. Allow adding a border to an element by just adding a border-width.
   *
   *    By default, the way the browser specifies that an element should have no
   *    border is by setting it's border-style to \`none\` in the user-agent
   *    stylesheet.
   *
   *    In order to easily add borders to elements by just setting the \`border-width\`
   *    property, we change the default border-style for all elements to \`solid\`, and
   *    use border-width to hide them instead. This way our \`border\` utilities only
   *    need to set the \`border-width\` property instead of the entire \`border\`
   *    shorthand, making our border utilities much more straightforward to compose.
   *
   *    https://github.com/tailwindcss/tailwindcss/pull/116
   */

  *,
  ::before,
  ::after {
    box-sizing: border-box; /* 1 */
    border-width: 0; /* 2 */
    border-style: solid; /* 2 */
    border-color: #e5e7eb; /* 2 */
  }

  /*
   * Ensure horizontal rules are visible by default
   */

  hr {
    border-top-width: 1px;
  }

  /**
   * Undo the \`border-style: none\` reset that Normalize applies to images so that
   * our \`border-{width}\` utilities have the expected effect.
   *
   * The Normalize reset is unnecessary for us since we default the border-width
   * to 0 on all elements.
   *
   * https://github.com/tailwindcss/tailwindcss/issues/362
   */

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /**
   * Reset links to optimize for opt-in styling instead of
   * opt-out.
   */

  a {
    color: inherit;
    text-decoration: inherit;
  }

  /**
   * Reset form element properties that are easy to forget to
   * style explicitly so you don't inadvertently introduce
   * styles that deviate from your design system. These styles
   * supplement a partial reset that is already applied by
   * normalize.css.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  /**
   * Use the configured 'mono' font family for elements that
   * are expected to be rendered with a monospace font, falling
   * back to the system monospace stack if there is no configured
   * 'mono' font family.
   */

  pre,
  code,
  kbd,
  samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  /**
   * Make replaced elements \`display: block\` by default as that's
   * the behavior you want almost all of the time. Inspired by
   * CSS Remedy, with \`svg\` added as well.
   *
   * https://github.com/mozdevs/cssremedy/issues/14
   */

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  /**
   * Constrain images and videos to the parent width and preserve
   * their intrinsic aspect ratio.
   *
   * https://github.com/mozdevs/cssremedy/issues/14
   */

  img,
  video {
    width: 100%;
    height: auto;
  }


/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------
 * GOLDFRONT STYLES
 * ----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
    /* Font Families */
    :root {
      --heading-font-family: 'Cormorant Garamond', Minion, Georgia, serif;
      --body-font-family: 'Mulish', 'Open Sans', sans-serif;
    }

    body {
      font-family: var(--body-font-family);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--heading-font-family);
    }



  /* Fluid Type Scale */
  :root {
  --step--1: clamp(0.87rem, calc(0.83rem + 0.16vw), 0.99rem);
  --step-0: clamp(1.00rem, calc(0.93rem + 0.33vw), 1.25rem);
  --step-1: clamp(1.15rem, calc(1.02rem + 0.57vw), 1.58rem);
  --step-2: clamp(1.32rem, calc(1.12rem + 0.88vw), 1.98rem);
  --step-3: clamp(1.52rem, calc(1.23rem + 1.31vw), 2.50rem);
  --step-4: clamp(1.75rem, calc(1.33rem + 1.87vw), 3.15rem);
  --step-5: clamp(2.01rem, calc(1.42rem + 2.61vw), 3.97rem);
  --step-6: clamp(2.31rem, calc(1.51rem + 3.59vw), 5.00rem);
}

  /* Fluid Space Palette */
  /* @link https://utopia.fyi/space/calculator?c=320,16,1.15,2560,28,1.38,5,2,1280&s=0.75|0.5|0.25,1.5|2|3|4|6, */
  /* How To Use: https://utopia.fyi/blog/painting-with-a-fluid-space-palette/ */

/* https://utopia.fyi/space/calculator/?c=320,14,1.15,2560,18.67,1.38,5,1,1280&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l */
:root {
  --fluid-min-width: 360;
  --fluid-max-width: 1560;

  --fluid-screen: 100vw;
  --fluid-bp: calc((var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) / (var(--fluid-max-width) - var(--fluid-min-width)));
}

/* @media screen and (min-width: 2560px) {
  :root {
    --fluid-screen: calc(var(--fluid-max-width) * 1px);
  }
} */

/* @link https://utopia.fyi/space/calculator?c=360,16,1.2,1560,32,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
/* https://utopia.fyi/space/calculator/?c=360,16,1.2,1560,32,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
:root {
  --space-3xs: clamp(0.25rem, calc(0.18rem + 0.33vw), 0.50rem);
  --space-2xs: clamp(0.50rem, calc(0.35rem + 0.67vw), 1.00rem);
  --space-xs: clamp(0.75rem, calc(0.53rem + 1.00vw), 1.50rem);
  --space-s: clamp(1.00rem, calc(0.70rem + 1.33vw), 2.00rem);
  --space-m: clamp(1.50rem, calc(1.05rem + 2.00vw), 3.00rem);
  --space-l: clamp(2.00rem, calc(1.40rem + 2.67vw), 4.00rem);
  --space-xl: clamp(3.00rem, calc(2.10rem + 4.00vw), 6.00rem);
  --space-2xl: clamp(4.00rem, calc(2.80rem + 5.33vw), 8.00rem);
  --space-3xl: clamp(6.00rem, calc(4.20rem + 8.00vw), 12.00rem);

  /* One-up pairs */
  --space-3xs-2xs: clamp(0.25rem, calc(0.03rem + 1.00vw), 1.00rem);
  --space-2xs-xs: clamp(0.50rem, calc(0.20rem + 1.33vw), 1.50rem);
  --space-xs-s: clamp(0.75rem, calc(0.38rem + 1.67vw), 2.00rem);
  --space-s-m: clamp(1.00rem, calc(0.40rem + 2.67vw), 3.00rem);
  --space-m-l: clamp(1.50rem, calc(0.75rem + 3.33vw), 4.00rem);
  --space-l-xl: clamp(2.00rem, calc(0.80rem + 5.33vw), 6.00rem);
  --space-xl-2xl: clamp(3.00rem, calc(1.50rem + 6.67vw), 8.00rem);
  --space-2xl-3xl: clamp(4.00rem, calc(1.60rem + 10.67vw), 12.00rem);

  /* Custom pairs */
  --space-s-l: clamp(1.00rem, calc(0.10rem + 4.00vw), 4.00rem);
}
  `;

export { GlobalStyle };