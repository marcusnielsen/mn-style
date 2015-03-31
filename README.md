# mn-style

Insipred by SMACSS and BEM.

## Install

    npm install
    
## Run

### Locally

    gulp watch
    
### Firebase

Requires changes in `firebase.json`, an account and a workspace. 
    
    gulp build
    cd dist/
    firebase deploy
    
## Adding components

This can be a bit more automated if needed, but that will probably make it harder to maintain.

### CSS

* Create a file: `styles/components/xyz/styles.less`.
* Import `styles.less` into `components/styles.less`.

### Design guideline

* Copy the content of `client/objects/components/sty-buttons/` to `components/sty-xyz/`.
* Inside `xyz/index.js` change `var moduleName = 'styButtons';` to `'styXyz`.
* Change the `template.html` according to your need. 
* Inside `client/index.js` add the angular module dependency `require('./objects/components/sty-xyz').name,`.
* Inside `ui-views/all/template.html` add `<sty-xyz></sty-xyz>`.

## Misc notes

### States

Set with `data-ui-state="disabled"` attribute or the actual attribute `disabled`.

Every component has it's variables.less and tools.less that can reference outside tools and variables.
