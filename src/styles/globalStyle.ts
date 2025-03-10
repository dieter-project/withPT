import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable.css");

  :root {
    /* Colors */
    --primary: #6c69ff;
    --purple50: #f4f4fb;
    --purple75: #eeeeff;
    --purple100: #e7e7ff;
    --purple200: #bbbaff;
    --yellow: #ffe926;
    --coral: #ff5e5e;
    --mint: #33dfd5;
    --gray: #8a8a8a;
    --white: #ffffff;
    --black: #222222;
    --tab: #4d4ba9;
    --carbohydrate: #342eb8;
    --protein: #ae9aff;
    --fat: #7bcefc;

    --block-orange: #fc8e0d;
    --block-red: #ff5e5e;
    --block-green: #05af68;
    --border-gray300: #eaeaea;
    --border-gray400: #cccccc;

    --font-secondary: #7d7bb7;
    --font-gray700: #444444;
    --font-gray500: #a2a2a5;
    --font-gray400: #b1b0bb;
    --font-gray600: #646464;
    --border-gray: #eaeaea;
    --border-darkgray: #cccccc;
    --border-lightgray: #a4a4a4;
    --border-gray2: #444;

    /* Font */
    --font: Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, sans-serif;

    --font-xxs: 10px;
    --font-xs: 12px;
    --font-s: 14px;
    --font-m: 16px;
    --font-l: 18px;
    --font-xl: 20px;
    --font-xxl: 22px;
    --font-xxxl: 24px;

    --font-semibold: 600;
    --font-medium: 500;
    --font-regular: 400;
    
    --z-index-modal: 500;
    --z-index-overlay: 999;

  }

  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    color: var(--black);
    font-family: var(--font);
    line-height: 1.5;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem;
  }

  li {
    list-style: none;
  }

  .icon-base {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      transition: fill 0.2s ease;
    }
  }
`;
