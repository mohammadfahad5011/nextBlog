---
to: src/components/<%= h.changeCase.lower(name) %>/<%= h.changeCase.pascalCase(name) %>.scss
---

/* NOTE Component uses TailwindCSS for styling. See: https://tailwindcss.com/
  * Please use tailwindcss classes for stylinf whenever possible.
  * If you're adding styling that isn't supported in tailwind and 
  * you need to add custom styles, please add them below.
*/

.<%= h.changeCase.pascalCase(name) %> {
}