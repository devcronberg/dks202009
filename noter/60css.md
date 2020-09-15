

# CSS

## Grundlæggende om CSS

- Cascading Style Sheet
- Bruges til at styre hvordan browseren skal vise html/xml
  - HTML = Indhold
  - CSS = Design
  - JavaScript/Web Assembly = Dynamik

> Bemærk at der findes opgaver til de enkelte emner på https://github.com/devcronberg/undervisning-css-opgaver.

## Historik og versioner

Se [http://ithistorie.cronberg.dk](http://ithistorie.cronberg.dk?maerker=html,css,http,det_vi_husker)

- Fra og med 2012 frigives i moduler
   - standarder og i process
    - https://www.w3.org/Style/CSS/current-work

## Syntaks

![](http://cdn.cronberg.dk/kurser/css/syntaks.png)

## Knyt til HTML

- ekstern
- head
- inline
- @import

![](http://cdn.cronberg.dk/kurser/css/placering.png)

## Selectors

Mange ressourcer på nettet - men [denne](https://www.w3schools.com/cssref/css_selectors.asp) er meget god.

### Element-selector

```css
div {
  /* egenskaber */
}

/* OR */
div.class1,
div.class2
{
  /* egenskaber */
}

/* AND (mellemrum har stor betydning i css) */
div.class1.class2
{
  /* egenskaber */
}
```
### Element i element i element i ...

```css
/* alle p under div */
div p {
  /* egenskaber */
}

/* alle a under p under div */
div p a {
  /* egenskaber */
}

/* alle p direkte under div */
div > p {
  /* egenskaber */
}
```

### Id (#)

```css
/* find element med id */
#div1 {
  /* egenskaber */
}

/* eller - hvis det er en div */
div#div1 {
  /* egenskaber */
}

/* eller måske det link som hedder link1 under en div */
div a#link1 {
  /* egenskaber */
}
```

### class (.)

```css
/* find elementer med class */
.myClass {
  /* egenskaber */
}

/* eller - hvis det er en div */
div.myClass {
  /* egenskaber */
}

/* eller måske det link med klassen myClass under en div */
div a.myClass {
  /* egenskaber */
}
```
### Find alt med \*

```css
* {
  /* egenskaber */
}

div * {
  /* egenskaber */
}
```

### Attribute ([])

```css
/* billeder med en alt-attribute */
img[alt] {
  /* egenskaber */
}

/* links med en target-attribute */
a[target] {
  /* egenskaber */
}

/* links med en target-attribute='_blank' */
a[target="_blank"] {
  /* egenskaber */
}

/* billeder hvor alt indholder et ord */
img[alt*="vand"] {
  /* egenskaber */
}
```

### Pseudo Class (:)

```css
/* unvisited link */
a:link {
  /* egenskaber */
}

/* visited link */
a:visited {
  /* egenskaber */
}

/* mouse over link */
a:hover {
  /* egenskaber */
}

/* selected link */
a:active {
  /* egenskaber */
}

div:hover {
  /* egenskaber */
}

/* første i under p */
p i:first-child {
  /* egenskaber */
}

/* alle i under første p */
p:first-child i {
  /* egenskaber */
}

/* 2. li under ul */
ul li:ntn-child(2) {
  /* egenskaber */
}

/* hver anden li under ul */
ul li:ntn-child(even) {
  /* egenskaber */
}
```

### Pseudo Elements (::)

```css
p::first-line {
  /* egenskaber */
}

p::first-letter {
  /* egenskaber */
}
```

### Betydning af mellemrum

Hvad er forskellen på disse to:

```css
div p .fed {
  /* egenskaber */
}

div p.fed {
  /* egenskaber */
}
```

## Nedarvning

De fleste elementer arver fra "mor"
  - dog ikke input, textarea mv



```html
<div id="div1">
    <span id="span1">Test</span>
</div>
```




```css

div#div1 {
    /* alt under div bliver rødt */
    color: red;
}

```


Brug evt inherit



```html
<ul id="ul1">
    <li>
        item 1
    </li>
    <li>
        item 2
    </li>
    <li>
        item 3
    </li>
    <li>
        item 4
    </li>
</ul>
```




```css

ul#ul1 li {
    /* alle li'er bliver røde */
    color: red;
}

ul#ul1 li:nth-child(even) {
    /* hver anden bliver blå */
    color: blue;
}

ul#ul1 li:nth-child(4) {
    /* det sidste element bliver rødt */
    color: inherit;
}

```


## Specificity

Hvis et element findes af flere selectorer beregner browseren hvilken der vinder:

  - Antal af id
  - Antal af klasser, attributter, pseudo klasser
  - Antal elementer og pseudo elementer

dog har inline/rækkefølge præsedens

 

```html
<div id="d1">
    <span id="s1" class="c1">
        Test
    </span>
</div>
```




```css

/* 2 id, 2 elementer =  202 */

div#d1 span#s1 {
    /* VINDER */
    color: green;
}

/* 2 elementer =  002 */

div span {
    color: red;
}

/* 1 klasse, 2 elementer =  012 */

div span.c1 {
    color: blue;
}

/* 1 klasse, 1 id, 2 elementer =  112 */

div#d1 span.c1 {
    color: pink;
}

```


Brig Visual Studio Code's popup i CSS filer til at se resultat af beregning.


## Fonte

- Interne fonte
  - Arial, Sans-Serif, Times New Roman, Courier New etc.
- Eksterne fonte

  - WOFF-format, True Type-format
  - [Google fonts](http://www.google.com/fonts)

- font-family
- @font-face



```css

div#fonts p:nth-child(1) {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@font-face {
    font-family: 'Shadows Into Light';
    font-style: normal;
    font-weight: 400;
    src: local('Shadows Into Light'), local('ShadowsIntoLight'), url(https://fonts.gstatic.com/s/shadowsintolight/v7/UqyNK9UOIntux_czAvDQx_ZcHqZXBNQzdcD5.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

div#fonts p:nth-child(2) {
    font-family: 'Shadows Into Light', sans-serif;
}

```


### Size

- px
  - pixel
- em
  - relativt til mor
- rem
  - relativ til rod



```css

div#fonts p:nth-child(3) {
    font-size: 26px;
}

div#fonts p:nth-child(4) {
    font-size: 2em;
}

div#fonts p:nth-child(5) {
    font-size: 3rem;
}

```


### Style

- font-style
  - italic
- font-weight
  - bold
- font-variant
  - small-caps
- text-transform
  - lowercase
  - uppercase
- text-decoration
  - underline
- text-shadow
  - h-shadow, v-shadow, blur, color
- text-align
  - left, center, right
- vertical-align
  - top
  - middle
  - bottom
- letter-spacing
  - px
- word-spacing
- line-height



```css

div#fonts p:nth-child(6) {
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    text-shadow: 4px 4px 4px red;
}

```


## Colums



```css

div#col {
    width: 500px;
    columns: 4;
    column-gap: 20px;
}

```


## Box model

- margin
- border
- padding
- width/height
- border-radius
  - hjørner
- box-shadow (can i use...)
  - h-shadow v-shadow blur color

![](http://cdn.cronberg.dk/kurser/css/boxmodel.gif)

[billede ref](http://goo.gl/37bGzw)

- brug F12 tool



```css

div#box {
    width: 100px;
    height: 100px;
    background-color: yellow;
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px black;
}

```


## Display og visibility

- display
  - skjul/vis element (tilføjer/fjerner element i rendering)
- visibility
  - skjul/vis element (viser/skjuler blot)



```css

div#display {
    /* display: none; */
    visibility: hidden;
}

```


## Position

- static
- relative
  - relativ til den oprindelige position
- absolute
  - realtiv til mor
- fixed
- sticky

###  Placering

- top/bottom
- left/right
- z-index



```css

div#pos {
    position: relative;
    left: 20px;
    top: 20px;
    z-index: -1;
}

```


### Float

- Placering af element
  - venstre
  - højre

```html
<!-- https://developer.mozilla.org/en-US/docs/Web/CSS/float -->
<section>
  <div class="left">1</div>
  <div class="right">2</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat.
    Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue.
  </p>
</section>
```

```css
section {
    border: 1px solid blue;
}

section div {
    margin: 5px;
    width: 50px;
    height: 50px;
}

section .left {
    float: left;
    background: pink;
}

section .right {
    float: right;
    background: cyan;
}
```

eller

```html
<div id="container">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat.
    Praesent non magna ac massa aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus congue.
  </p>
  <p>
    <img src="https://picsum.photos/200" alt="Random" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
    scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu,
    lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
    velit.
  </p>
</div>
```

```css
#container {
  width: 600px;
}
#container img {
  float: right;
  margin-left: 10px;
}
```
## Flexbox

- Effektiv layout model
  - plads mellem elementer
  - sortering
  - flow
  - justering
- [Can i use](https://caniuse.com/#feat=flexbox)

### Simpel flexbox

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Flex</title>
    <style>
      .box div {
        width: 50px;
        height: 50px;
        margin: 10px;
        background-color: antiquewhite;
      }

      .box {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: row;
        /* flex-direction: row-reverse; */
        /* flex-direction: column; */
        /* flex-direction: column-reverse;  */
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>
</html>

```
### Holy Grale

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Holy Grale</title>
    <style>
      body {
        display: flex;
        flex-direction: column;
        min-height: 100px;
        text-align: center;
      }

      body .header {
        width: 100%;
        height: 60px;
        background: pink;
      }
      body .holygrail-body {
        flex: 1 0 auto;
        display: flex;
      }
      body .holygrail-body .content {
        flex: 1 0 auto;
        background: lightgreen;
      }
      body .holygrail-body .nav {
        width: 100px;
        list-style: none;
        text-align: left;
        order: -1;
        background: yellow;
        margin: 0;
      }
      body .holygrail-body .aside {
        width: 100px;
        background: orange;
      }
      body .footer {
        width: 100%;
        height: 60px;
        background: cyan;
      }
    </style>
  </head>
  <body>
    <header class="header">Header</header>
    <div class="holygrail-body">
      <div class="content">Content</div>
      <ul class="nav">
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
      <div class="aside">Aside</div>
    </div>
    <footer class="footer">Footer</footer>
  </body>
</html>

<!-- ref https://codepen.io/takeradi/pen/MyYqKX -->

```

## Media typer

Forskellige typer = forskellige css opmærkninger

  - print
  - projector
  - tv



```html
<div id="mtype">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
</div>
```




```css

div#mtype {
    color: red;
}

@media print {
    div#mtype {
        color: black;
    }
}

```


## Media queries

Forskellige størrelse/opløsning = forskellige css opmærkninger (responsive design)

  - width
  - height
  - opløsning



```html
<div id="qtype">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ad maiores nesciunt
    voluptatibus facere reiciendis. Beatae repellendus, sint provident iusto distinctio cumque
    voluptatibus deleniti cupiditate eveniet nobis iure eos!
</div>
```




```css

div#qtype {
    color: black;
}

@media only screen and (min-width: 400px) {
    div#qtype {
        color: red;
    }
}

@media only screen and (min-width: 800px) {
    div#qtype {
        color: blue;
    }
}

@media only screen and (min-width: 1000px) {
    div#qtype {
        color: green;
    }
}

```


Se [University of Vermont](https://www.uvm.edu/) som har et flot responsive design.

## Transforms

- scale
- rotate
- translate
- skew



```html
<div id="transf">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ad maiores nesciunt
    voluptatibus facere reiciendis. Beatae repellendus, sint provident iusto distinctio cumque
    voluptatibus deleniti cupiditate eveniet nobis iure eos!
</div>
```




```css

div#transf {
    width: 400px;
    transform: rotate(-5deg);
}

```


## Transitions

![](http://cdn.cronberg.dk/kurser/css/transitions.png)

[billed ref](http://goo.gl/DmTDy)



```html
<div id="trans">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ad maiores nesciunt
    voluptatibus facere reiciendis. Beatae repellendus, sint provident iusto distinctio cumque
    voluptatibus deleniti cupiditate eveniet nobis iure eos!
</div>
```




```css

div#trans {
    width: 400px;
    background-color: yellow;
    transition-duration: 2s;
}

div#trans:hover {
    background-color: red;
}

```


## KeyFrame Animation

- Egen animation



```html
<div id="kf">
    Lorem ipsum
</div>
```




```css

div#kf {
    width: 100px;
    height: 100px;
    position: relative;
    animation: boxani 5s;
}

@keyframes boxani {
    0% {
        background: green;
        left: 0px;
        top: 0px;
    }
    25% {
        background: blue;
        left: 150px;
        top: 0px;
    }
    50% {
        background: red;
        left: 150px;
        top: 150px;
    }
    75% {
        background: yellow;
        left: 0px;
        top: 150px;
    }
    100% {
        background: green;
        left: 0px;
        top: 0px;
    }
}

```


## CSS funktioner

I nyere browsere kan diverse CSS funktioner benyttes.

### var

Variabler:

```css
:root {
  --main-bg-color: coral;
  --main-txt-color: blue;
  --main-padding: 15px;
}

h1 {
  color: var(--main-txt-color);
}

div {
  color: var(--main-txt-color);
  background-color: var(--main-bg-color);
  padding: var(--main-padding);
}
```
### calc

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Banner</title>
    <style>
      .banner {
        position: absolute;
        left: 90px;
        width: calc(100% - 180px);
        border: solid black 1px;
        background-color: thistle;
        text-align: center;
    </style>
  </head>
  <body>
    <div class="banner">Banner!</div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Form</title>
    <style>
      input {
        padding: 2px;
        display: block;
        width: calc(100% - 1em);
      }

      #formbox {
        width: calc(100% / 6);
        border: 1px solid black;
        padding: 4px;
      }
    </style>
  </head>
  <body>
    <form>
      <div id="formbox">
        <label>Text 1:</label>
        <input type="text" />
        <label>Text 2:</label>
        <input type="text" />
      </div>
    </form>
  </body>
</html>
```
### Attr

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Attr demo</title>
    <style>
      a::after {
        content: "[" attr(href) "]";
      }
    </style>
  </head>
  <body>
    <a href="https://www.google.dk"></a>
  </body>
</html>
```

## CSS Frameworks

Mange applikationer benytter et CSS framework ifbm med design for at have et godt udgangspunkt

  - [Bootstrap](https://getbootstrap.com/)
  - [Semantic UI](https://semantic-ui.com/)
  - mange flere....

## Værktøj til vedligeholdelse af store CSS filer

CSS er som udgangspunkt ikke et programmeringssprog, men det er [SASS](https://sass-lang.com/) og [LESS](http://lesscss.org/).
