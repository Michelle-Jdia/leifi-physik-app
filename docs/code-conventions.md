# Code conventions

Most of our code conventions are enforced using eslint and prettier.
For more details, take a look at the related configurations.

**All frontend code is organized in `src` folder.**

## Naming

- avoid abbreviations
- folders and files must have singular, `start-kamel-case` names
  - only exceptions are config files where a conventional name is required by the relative tool (ie. `.prettierrc`)
- component name must begin with "V" prefix (ie. `VHeader`)
- slot names and emitted events must be `kebab-case`
- function and method names must follow the format: `imperative verb + object [+ from|to|by + target]`:
  - `getUser()`
  - `addItemToCart()`
  - `sortCompaniesByName()`
  - `parseValueFromStringToNumber()`

## Data layer

- every controller method must start with `$` followed exclusively by any of the CRUD action verbs: `create`, `read`, `update` or `delete`:
  - `$createCollection()`
  - `$readCollection()`
  - `$updateCollection()`
  - `$deleteCollection()`

## Coding

- exports must be named (ie. `export const something = ...`)
  - default exports must be used only for Vue components
- use `const`, avoid `let`
- use early returns to avoid nested/complex/unreadable if statements
- separate methods by responsibility
  - a method that _performs something_ is called **action**
  - a method that _reacts to a change_ is called **handler**
    - handlers only handle
    - handlers are composed by actions
- handlers must begin with "on" prefix followed by the change name (ie. `onClick`, `onPropWatching`)
  - handlers may have a context indication in the name (ie. `onInputChange`)
- `v-for` keys must be designed to be unique given the scenario when a component is used twice in the same page

## Style

- use scss
- use scoped styles
- component root class should have the same name as the component. `SimpleCard.vue` would have a class `.simple-card`
- component use the helper `cn` function for the css class
- avoid using styles and rely on tailwind as much as possible
- `cn` is a combination of `tailwind-merge` and `CLSX`, which means it follows the same API CLSX does and you can do complex logic to add classes based on conditions
  
## Imports

To maintain readability as the codebase grows, we have a few rules for imports, in order of priority, from top to bottom:

- Types
- External / Libraries (ramda, tailwind, cn, etc)
- Internal libraries / helpers (vue, dataMap, etc)
- Data Layer functions ($readBranches, $useBranchesStorage, etc)
- Connection Layer functions (useBranches, useTopicsByBranch, etc)
- Presentation Layer from big/abstract to small/specific
  - Layout/Page (VHeader, VFooter, etc)
  - Organism/Molecule (VTopicBoxSlider, VArticleItemList, etc)
  - Atom (VButton, VInput, etc)