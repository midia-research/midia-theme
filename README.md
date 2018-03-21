#Midia frontend theme

Sass and Javascript for the Midia frontend theme.

##Installation

```sh
$ npm install --save "git+ssh://git@github.com:3ev/midia-theme.git#master"
```

##Sass

###Dependencies

The theme expects you to have setup [Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
to be available at `bootstrap`, as it uses `@include 'bootstrap';` in its base
file.

###Importing

Add

```
node_modules/midia-theme/sass
```

to your Sass load paths using your preferred build system. You can then just:

```scss
@import 'midia';
```

in your Sass file, which will import both Bootstrap and the theme Sass.

###Variables

You'll need to override the following variables to correctly set paths to
assets:

```scss
// Path to custom theme icons (located at 'img/icons' in the theme by default)
$md-icon-path: '../img/icons';

// Path to Bootstrap fonts (located in the Bootstrap Sass NPM module by default)
$icon-font-path: '../fonts/bootstrap/';
```

You can override `$main-content-wrap-margin` too, which by default is `140px`.

##JS

###Dependencies

jQuery is a required a dependency of the theme JS. It should be accessible using
`require('jquery')`.

###Requiring

The JS runs using Browserify. To use it, simply:

```js
var midiaTheme = require('midia-theme')

midiaTheme()
```

###Headroom.js

The theme uses [Headroom.js](http://wicky.nillia.ms/headroom.js/). You may
need to include some browser polyfills, depending on your desired level of
support. See 'Browser Support' in the [Headroom.js documenation](http://wicky.nillia.ms/headroom.js/)
for the list of required browser APIs and the polyfills you'll need.

##Images

Theme images are located at `img/`. If it makes sense with your build process,
you can copy the images out of that directory into your public directory when
building. If not, you can just manually copy the images from that folder and
commit them into version control; however, you must make sure you update them
when you update the theme version.
