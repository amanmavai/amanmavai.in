```js
//1. add tailwindcss
$ yarn add -D concurrently tailwindcss
$ yarn add -D postcss-cli postcss autoprefixer postcss-import
$ yarn add @tailwindcss/typography
// generate tailwind.config.js and postcss.config.js
$ npx tailwindcss init -p

// generate tailwind-full.config.js
$ npx tailwindcss init tailwind-full.config.js --full

// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

// index.css
@import "tailwindcss/base";
@import "./custom-base-styles.css";

@import "tailwindcss/components";
@import "./custom-components.css";

@import "tailwindcss/utilities";
@import "./custom-utilities.css";

@import "./custom-theme-styles.css";



//2.
$ yarn add -D prettier

//3.setup clean command
$ yarn add -D rimraf

//4. add important libs
$ yarn add classnames tiny-invariant front-matter marked
$ yarn add -D @types/marked
```
