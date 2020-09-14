- [Grundlæggende webudvikling](#grundlæggende-webudvikling)
  - [Indhold](#indhold)
  - [Om kurset](#om-kurset)
    - [Generelle informationer](#generelle-informationer)
  - [Om Michell](#om-michell)
    - [Bogen om C](#bogen-om-c)
- [Historien bag internettet og diverse teknologier](#historien-bag-internettet-og-diverse-teknologier)
- [Hvad er en web applikation](#hvad-er-en-web-applikation)
- [HTML](#html)
  - [W3C](#w3c)
  - [Opmærkninger](#opmærkninger)
  - [Struktur](#struktur)
    - [Doctype](#doctype)
    - [Header](#header)
    - [Body](#body)
    - [Eksempel på en simpel struktur](#eksempel-på-en-simpel-struktur)
  - [Indbygget CSS](#indbygget-css)
  - [Opmærkninger](#opmærkninger-1)
    - [Kommentarer](#kommentarer)
    - [Header](#header-1)
    - [Paragraph](#paragraph)
    - [HTML Encoding](#html-encoding)
    - [Div](#div)
    - [Span](#span)
    - [Formatering (i HTML)](#formatering-i-html)
    - [Linjeskift og linje](#linjeskift-og-linje)
    - [Semantik](#semantik)
    - [Links](#links)
    - [Billeder](#billeder)
    - [Lister](#lister)
    - [Tabeller](#tabeller)
    - [Media](#media)
    - [Forms](#forms)
    - [Including af css](#including-af-css)
    - [Including af script](#including-af-script)
- [CSS](#css)
  - [Grundlæggende om CSS](#grundlæggende-om-css)
  - [Historik og versioner](#historik-og-versioner)
  - [Syntaks](#syntaks)
  - [Knyt til HTML](#knyt-til-html)
  - [Selectors](#selectors)
    - [Element-selector](#element-selector)
    - [Element i element i element i ...](#element-i-element-i-element-i-)
    - [Id (#)](#id-)
    - [class (.)](#class-)
    - [Find alt med \*](#find-alt-med-)
    - [Attribute ([])](#attribute-)
    - [Pseudo Class (:)](#pseudo-class-)
    - [Pseudo Elements (::)](#pseudo-elements-)
    - [Betydning af mellemrum](#betydning-af-mellemrum)
  - [Nedarvning](#nedarvning)
  - [Specificity](#specificity)
  - [Fonte](#fonte)
    - [Size](#size)
    - [Style](#style)
  - [Colums](#colums)
  - [Box model](#box-model)
  - [Display og visibility](#display-og-visibility)
  - [Position](#position)
    - [Placering](#placering)
    - [Float](#float)
  - [Flexbox](#flexbox)
    - [Simpel flexbox](#simpel-flexbox)
    - [Holy Grale](#holy-grale)
  - [Media typer](#media-typer)
  - [Media queries](#media-queries)
  - [Transforms](#transforms)
  - [Transitions](#transitions)
  - [KeyFrame Animation](#keyframe-animation)
  - [CSS funktioner](#css-funktioner)
    - [var](#var)
    - [calc](#calc)
    - [Attr](#attr)
  - [CSS Frameworks](#css-frameworks)
  - [Værktøj til vedligeholdelse af store CSS filer](#værktøj-til-vedligeholdelse-af-store-css-filer)
- [JavaScript](#javascript)
  - [Indhold](#indhold-1)
  - [Om JavaScript](#om-javascript)
    - [Selve sproget er...](#selve-sproget-er)
      - [Objektorienteret baseret på prototyper](#objektorienteret-baseret-på-prototyper)
      - [Dynamisk](#dynamisk)
      - [Typefrit](#typefrit)
      - [Funktionsorienteret](#funktionsorienteret)
    - [Sproget bruges overalt](#sproget-bruges-overalt)
  - [Historie](#historie)
    - [ECMA](#ecma)
  - [Moderne JavaScript udvikling er ikke bare lige...](#moderne-javascript-udvikling-er-ikke-bare-lige)
  - [Udviklingmiljø og process](#udviklingmiljø-og-process)
  - [Syntaks](#syntaks-1)
  - [Variabler](#variabler)
    - [Typefrit](#typefrit-1)
    - [Erklæring](#erklæring)
    - [Interne typer](#interne-typer)
    - [Operatorer](#operatorer)
    - [Number-typen](#number-typen)
      - [Diverse](#diverse)
      - [Operatorer](#operatorer-1)
    - [Boolean-typen](#boolean-typen)
      - [Operatorer](#operatorer-2)
    - [String-typen](#string-typen)
      - [Template string](#template-string)
    - [Date](#date)
  - [Flow](#flow)
    - [if](#if)
    - [switch](#switch)
    - [for](#for)
    - [while](#while)
  - [Array](#array)
    - [Andre samlinger](#andre-samlinger)
  - [RegEx](#regex)
  - [Funktioner](#funktioner)
    - [Argumenter](#argumenter)
    - [Intet krav om argumenter](#intet-krav-om-argumenter)
    - [Referencer til funktioner](#referencer-til-funktioner)
    - [Arrow function](#arrow-function)
    - [Immediate function (IIFE)](#immediate-function-iife)
    - [Generators](#generators)
  - [ASync](#async)
  - [Errorhandling](#errorhandling)
    - [Error-objektet](#error-objektet)
    - [Brug throw til at smide fejl](#brug-throw-til-at-smide-fejl)
    - [Fejl bobler op](#fejl-bobler-op)
    - [Log](#log)
    - [Test](#test)
  - [Objekter](#objekter)
    - [Firkantet parentes-notation](#firkantet-parentes-notation)
    - [Punktum-notation](#punktum-notation)
    - [Tuborgklamme-notation](#tuborgklamme-notation)
    - [Kombiering af notationer](#kombiering-af-notationer)
    - [Tilføj og fjern egenskaber](#tilføj-og-fjern-egenskaber)
    - [Gennemløb af nøgler](#gennemløb-af-nøgler)
    - [Array af objekter](#array-af-objekter)
    - [JSON](#json)
  - [Class](#class)
    - [constructor og metoder](#constructor-og-metoder)
    - [Statiske metoder](#statiske-metoder)
    - [Egenskaber](#egenskaber)
    - [Nedarvning](#nedarvning-1)
  - [Moduler](#moduler)
    - [ES6 moduler](#es6-moduler)
- [NodeJS](#nodejs)
  - [EventLoop](#eventloop)
  - [Indbyggede APIer](#indbyggede-apier)
  - [Brug af node](#brug-af-node)
  - [NPM](#npm)
  - [En Node-applikation](#en-node-applikation)
  - [Start en node-applikation (uden git)](#start-en-node-applikation-uden-git)
  - [Start en node-applikation (med git)](#start-en-node-applikation-med-git)
  - [Eksempel på en simpel node-applikation](#eksempel-på-en-simpel-node-applikation)
    - [Skab en browser applikation med brug af jQuery](#skab-en-browser-applikation-med-brug-af-jquery)
- [ASP.NET Core MVC](#aspnet-core-mvc)
  - [Udviklingsmiljø](#udviklingsmiljø)
  - [C# forudsætninger](#c-forudsætninger)
  - [MVC modellen (simplificeret)](#mvc-modellen-simplificeret)
    - [En simpel MVC template](#en-simpel-mvc-template)
    - [Eksempel på en simpel MVC app](#eksempel-på-en-simpel-mvc-app)
  - [Razor Pages](#razor-pages)
  - [Model-lag](#model-lag)
    - [POCO](#poco)
    - [DataAnnotations](#dataannotations)
    - [Brugerflade](#brugerflade)
    - [Validering](#validering)
    - [Entity Framework](#entity-framework)
    - [Repository-pattern](#repository-pattern)
  - [Controller-lag](#controller-lag)
    - [Action metoder](#action-metoder)
    - [Result-objekter](#result-objekter)
    - [ViewResult](#viewresult)
    - [Model binding](#model-binding)
    - [Demo af modelbinding](#demo-af-modelbinding)
    - [Action filtre](#action-filtre)
  - [Rute](#rute)
    - [Forskellige måder at styre rute definition](#forskellige-måder-at-styre-rute-definition)
    - [Konventionel ruteopsætning](#konventionel-ruteopsætning)
    - [Attribute routing](#attribute-routing)
  - [View-lag](#view-lag)
    - [Views](#views)
  - [Razor](#razor)
    - [Fra controller til view](#fra-controller-til-view)
    - [Hjælpemetoder](#hjælpemetoder)
    - [Taghelpers](#taghelpers)
    - [Egne taghelpers](#egne-taghelpers)
    - [Partial](#partial)
    - [View Components](#view-components)
    - [Layout](#layout)
    - [DI til views](#di-til-views)
  - [Configuration](#configuration)
- [Blazor](#blazor)
  - [Grundlæggende om Blazor](#grundlæggende-om-blazor)
    - [JavaScript](#javascript-1)
    - [WebAssembly](#webassembly)
    - [Blazor WASM](#blazor-wasm)
  - [Blazor vs JS-SPA](#blazor-vs-js-spa)
  - [Server vs WASM](#server-vs-wasm)
  - [Forudsætning for Blazor](#forudsætning-for-blazor)
    - [Web](#web)
    - [Værktøj](#værktøj)
    - [C#](#c)
  - [Prøv Blazor](#prøv-blazor)
    - [Blazor server](#blazor-server)
    - [Blazor WASM](#blazor-wasm-1)
  - [Blazor intro](#blazor-intro)
  - [Komponentbaseret](#komponentbaseret)
  - [Rutebaserede komponenter](#rutebaserede-komponenter)
    - [Definition](#definition)
  - [Nestede komponenter](#nestede-komponenter)
  - [Indbyggede komponenter](#indbyggede-komponenter)
    - [Databinding](#databinding)
  - [Event handling](#event-handling)
    - [Keyboard](#keyboard)
    - [Fokus](#fokus)
  - [Dependency Injection](#dependency-injection)
  - [Overordnet eksempel - BlazorFinans](#overordnet-eksempel---blazorfinans)
# Grundlæggende webudvikling

(c) Michell Cronberg - noter sidst rettet d. 7. september 2020<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Now', arguments:'D;da' } -->.

## Indhold

- Grundlæggende forståelse for standarder
  - HTML, CSS, JS, TS, WASM
- Grundlæggende forståelse for C# i MVC
  - Lambda, anonyme typer, asymc, reflection mv
- ASP.NET Core MVC
- Overordnet viden om SPA (hvad er...)
  - Frameworks

## Om kurset <!-- { templatetype:'timing', tid: 15, opgave: 0 } -->

- Start/slut
- Praktiske ting
  - Pauser
  - Toiletter
  - Rygning
- Materiale


### Generelle informationer

Generelle links og yderligere info til dette og andre af mine kurser kan findes på https://github.com/devcronberg/kursus.

## Om Michell <!-- { templatetype:'timing', tid: 0, opgave: 0 } -->

- Michell Cronberg
- Instruktør, forfatter, konsulent
- Underviser primært på Teknologisk Institut
  - https://www.teknologisk.dk/kurser/michell-cronberg/42240
- Telefon 40103242
- Mail: michell@cronberg.dk
- LinkedIn: https://goo.gl/iVjaqF
- Konsulent: http://www.mikrokonsulenterne.dk
- T-Shirt: http://tshirt.cronberg.dk
- Side med generelle links om programmering
  - https://github.com/devcronberg/kursus/#kursus

![](https://cdn.cronberg.dk/kurser/alle/michell.jpg)

### Bogen om C#

Der er udgivet en ny version af "Bogen om C\#" dækkende version 8 (2020). 

<img src="https://cdn.cronberg.dk/kurser/div/csbog.jpg" width="300">

Se http://www.bogenomcsharp.dk for yderligere oplysninger.<!-- { templatetype:'header', templateappversion:'1', defaultfolder:'C:\\git-undervisning\\mcronberg\\undervisning-webhistorie\\noter' } -->

# Historien bag internettet og diverse teknologier

Du kan altid se historik, navne, browsere, versioner mv på http://ithistorie.cronberg.dk, og den korte version er

- Vi har kommunikereret over "nettet" siden 1965 (55<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'1965' } --> år siden)
- TCP/IP er fra 1975 (45<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'1975' } --> år siden)
- Internettet blev født 1/1-83 ved at slå flere eksisterende net sammen (37<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'1983' } --> år siden)
- Tim Berners-Lee stiftede W3C i 1994 efter nogle år på CERN hvor HTML, HTTP, URI mv blev skabt (26<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'1994' } --> år siden)
- Brendan Eich skaber Mocha/LiveScript/JavaScript i 1995 (25<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'1995' } --> år siden)
- Første version af Netscape, Opera og Internet Explorer kom i 1994/95 (25<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'1995' } --> år siden)
- Safari er fra 2003 (17<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2003' } --> år siden)
- Firefox er fra 2004 (16<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2004' } --> år siden)
- jQuery bliver født i 2006 (14<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2006' } --> år siden)
- Første version af Chrome er fra 2008 (12<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2008' } --> år siden)
- NodeJS er fra 2009  (11<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2009' } --> år siden)
- AngularJS er fra 2010 (10<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2010' } --> år siden)
- TypeScript er fra 2012 (8<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2012' } --> år siden)
- React er fra 2013 (7<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2013' } --> år siden)

Se flere navne og links på https://github.com/devcronberg/kursus/#navne.

<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/440px-Sir_Tim_Berners-Lee_%28cropped%29.jpg' height='300' />

Billede er fra WikiPedia

<!-- { templatetype:'header', templateappversion:'1', defaultfolder:'C:\\git-undervisning\\mcronberg\\undervisning-webapp\\noter' } -->

# Hvad er en web applikation

En web applikation har udviklet fra en 

- traditionel client/server applikation uden javascript til en 
  - ASP.NET
  - PHP
  - JSP
- ren client applikation med JS/WASM, der kommunikerer med et API.
  - SPA
    - Angular, React, Vue, Blazor

![](http://cdn.cronberg.dk/kurser/webapp/webdev.png)

Applikationen har været igennem en længere evolution (Flash, Java Applets, Silverlight mv), men er nu endt med HTML, CSS og ES/WASM. Dog begynder teknologier relateret til web assembly at dukke op.

![](http://cdn.cronberg.dk/kurser/webapp/webapp.png?1)

Klienterne har ligeledes udviklet sig fra udelukkende til at være en browser til nu også at kunne afvikles på 

- [Desktop](https://electronjs.org/)
- [Mobile](https://cordova.apache.org/) 

Du kan finde et eksempel på en "simple as possible" webapplikation på https://github.com/devcronberg/sap-webapp. Se også links til de forskellige standarder på de [generelle links / webudvikling](https://github.com/devcronberg/kursus/#web-udvikling). Samme sted finde du en masse links relateret til [web udvikling](https://github.com/devcronberg/kursus/#web-udvikling).


<!-- { templatetype:'header', templateappversion:'1', defaultfolder:'C:\\git-undervisning\\mcronberg\\undervisning-html\\Noter' } -->

# HTML

> Bemærk at der findes opgaver til de enkelte emner på https://github.com/devcronberg/undervisning-html-opgaver.

- HyperText Markup Language
- Opmærkningssprog som repræsenterer **data/indhold** i en web app, og ikke design (CSS)

  - tekst
  - links
  - billeder
  - mv

## [W3C](https://www.w3.org/)

- Betydning
- Standarder
  - WD Working Draft
  - CR Candidate Recommendation
  - PR Proposed Recommendation
  - REC W3C Recommendation
  - [Nuværende status](https://www.w3.org/standards/techs/html#w3c_all)
- Validering

## Opmærkninger

HTML er et opmærkningssprog

- åben - data - luk
- åben/luk
- attributter
- opmærkninger i opmærkninger
- whitespace mv er underordnet

```html
<!-- Forskellige typer af opmærkninger -->
<h1>Overskrift</h1>
<hr />

<!-- Opmærkninger i opmærkninger i opmærkninger ... -->

<section>
  <div>
    <p>tekst</p>
    <div>
      <p>
        tekst
        <span>tekst</span>
      </p>
    </div>
  </div>
</section>

<!-- Attributter -->
<div id="minDiv">tekst</div>
<p id="id1" class="class1 class2" style="color: red">tekst</p>
<img src="billeder/billede1.png" alt="Mit billede" />
```

## Struktur

Et HTML dokument har en fast struktur

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ... -->
  </head>
  <body>
    <!-- ... -->
  </body>
</html>
```

### Doctype

Beskriver hvilken version af HTML browseren kan forvente.

Tidligere var den mere specifik

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

I dag er den mere generel

```html
<!DOCTYPE html>
```

### Header

Beskriver type metadata

- meta
- css
- javascript
- Bør lige være bevidst om hvilken elementer der skal med (og i hvilken rækkefølge)
  - [Se forskellige skabeloner (HTML og CSS) - især HTML5 Boilerplate](https://github.com/devcronberg/kursus/blob/master/README.md#skabeloner)

### Body

Består af opmærkninger (igen - husk det repræsenterer data!!)

### Eksempel på en simpel struktur

```html
<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Min side</title>
  </head>

  <body></body>
</html>
```

## Indbygget CSS

- Useragent stylesheet
- Typer af elementer (CSS)
  - Inline
    - Bold (b), Italic (i), image (img), grouping (span)
  - Block
    - Paragraph (p), grouping (div), heading (h1, h2), article, section, header, footer

## Opmærkninger

### Kommentarer

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'komm start', RemoveSpace:4 } -->

```html
<!-- Kommentar... -->

<!--

    Flere kommentarer

-->

```


### Header

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'header start', RemoveSpace:4 } -->

```html
<h1>Overskrift 1</h1>
<h2>Overskrift 2</h2>
<h3>Overskrift 3</h3>
<h4>Overskrift 4</h4>
<h5>Overskrift 5</h5>
```


### Paragraph

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'p start', RemoveSpace:4 } -->

```html
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dignissimos,
    aut cupiditate quos, alias maxime reiciendis ipsa esse, eveniet repellendus
    rerum numquam sed consequuntur. Repellendus inventore beatae accusamus eveniet maiores.</p>
```


### HTML Encoding

| Kode      | Forklaring                                                                           |
| --------- | ------------------------------------------------------------------------------------ |
| \&nbsp;   | mellemrum                                                                            |
| \&amp;    | &                                                                                    |
| \&lt;     | <                                                                                    |
| \&gt;     | >                                                                                    |
| \&quot;   | "                                                                                    |
| \&apos;   | '                                                                                    |
| \&shy;    | Opdeling af lange ord (se også [css](https://www.w3.org/TR/css-text-3/#hyphenation)) |
| \&oslash; | ø                                                                                    |
| \&Oslash; | Ø                                                                                    |
| \&aring;  | å                                                                                    |
| \&Aring;  | Å                                                                                    |
| \&aelig;  | æ                                                                                    |
| \&AElig;  | Æ                                                                                    |

[Se også](https://ascii.cl/htmlcodes.htm)

### Div

- Grupperingstag (block som udgangspunkt)

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'div start', RemoveSpace:4 } -->

```html
<div></div>
<div>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
    <div>Quia quas ad sunt odit? Cupiditate omnis quod dolores quas sint.</div>
    <div>Voluptates ipsam eos totam laudantium cumque repudiandae.</div>
</div>
<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <img src="https://picsum.photos/100" alt="picsum" />
</div>
```


### Span

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'span start', RemoveSpace:4 } -->

```html
<p>Voluptates ipsam eos <span>totam laudantium</span> cumque repudiandae.</p>

<span>cumque</span>
<span>cumque</span>
<span>cumque</span>
<span>cumque</span>
```


### Formatering (i HTML)

- Der findes b, i, og u opmærkninger men overvej at bruge CSS

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'format start', RemoveSpace:4 } -->

```html
<p>Voluptates <b>ipsam</b> eos <u>totam laudantium</u> cumque <i>repudiandae</i>.</p>

<!-- Brug hellere css -->
<p>Voluptates <span class="fed">ipsam</span>
    eos <span class="unders">totam laudantium</span>
    cumque <span class="italic">repudiandae</span>.</p>
```


### Linjeskift og linje

- Der findes br, og hr opmærkninger men brug CSS

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'brhr start', RemoveSpace:4 } -->

```html

<p>lorem <br />ipsum</p>

<p>Lorem</p>
<hr />
<p>Ipsum</p>

```


### Semantik

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'sem start', RemoveSpace:4 } -->

```html
<header></header>
<footer></footer>
<section></section>
<article></article>
<aside></aside>
<nav></nav>

<header>
    <section></section>
    <section></section>
</header>

<section>
    <article></article>
    <article></article>
    <section>
        <article></article>
    </section>
</section>
```


### Links

- Inline links
- Eksterne link

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'links start', RemoveSpace:4 } -->

```html

<p>Quia <a href="http://www.google.dk">quas ad</a> sunt odit?</p>
<p>Quia <a href="side2.html">quas ad</a> sunt odit?</p>

<p>Quia <a href="#mitId">quas ad</a> sunt odit?</p>
<h2 id="mitId">Overskrift</h2>

<p>Quia <a href="http://www.google.dk" target="_blank">quas ad</a> sunt odit?</p>

```


### Billeder

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'billeder start', RemoveSpace:4 } -->

```html

<img src="https://picsum.photos/100" alt="Billede" />
<img src="/Billeder/lorem.png" alt="Billede" />

<!-- brug hellere css -->
<img src="https://picsum.photos" height="200" alt="Billede" />

<a href="side2.html">
    <img src="https://picsum.photos" alt="Billede" />
</a>

```


### Lister

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'lister start', RemoveSpace:4 } -->

```html
<ol>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
</ol>

<ul>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
</ul>

<ol>
    <li>element 1</li>
    <li>
        <ul>
            <li>element 1a</li>
            <li>element 1b</li>
            <li>element 1c</li>
        </ul>
    </li>
    <li>element 3</li>
</ol>
```


### Tabeller

Table-opmærkningen er fortsat brugt i HTML, men overvej at benytte CSS Grid eller lignende.

- table
  - tr = rækker
  - th/td = overskriftscelle/celle
  - medtag helst
    - thead
    - tbody

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'tabel start', RemoveSpace:4 } -->

```html
<table>
    <tr>
        <td>celle</td>
        <td>celle</td>
        <td>celle</td>
    </tr>
    <tr>
        <td>celle</td>
        <td>celle</td>
        <td>celle</td>
    </tr>
</table>

<!-- Lidt mere komplet tabel -->
<table>
    <thead>
        <tr>
            <th>Ov 1</th>
            <th>Ov 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Celle 1</td>
            <td>Celle 2</td>
        </tr>
        <tr>
            <td>Celle 1</td>
            <td>Celle 2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Foot 1</td>
            <td>Foot 2</td>
        </tr>
    </tfoot>
</table>
```


### Media

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'media start', RemoveSpace:4 } -->

```html
<video src="http://media.w3.org/2010/05/bunny/movie.mp4" controls autoplay></video>

<video width="320" height="240" controls>
    <source src="http://media.w3.org/2010/05/bunny/movie.mp4" type="video/mp4">
    <source src="http://media.w3.org/2010/05/bunny/movie.ogg" type="video/ogg">
    Video spiller ikke lige i denne browser
</video>

<audio controls="" preload="none" controls>
    <source src="https://html5tutorial.info/media/vincent.mp3" type="audio/mpeg">
    <source src="https://html5tutorial.info/media/vincent.ogg" type="audio/ogg">
    Ingen support for audio
</audio>

```


### Forms

Opbygning af formularer

- tekstbokse
- lister
- knapper
- mv

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'forms start', RemoveSpace:4 } -->

```html

<!-- kontroller er typisk placeret i en form med en submit knap -->
<form method="POST" action="http://fdemo2.cronberg.dk/posttome.cshtml">

    Navn <input type="text" name="navn" />
    Alder <input type="text" name="alder" />
    Aktiv <input type="checkbox" name="aktiv" />
    Mand <input type="radio" name="køn" value="mand" />
    Kvinde <input type="radio" name="køn" value="kvinde" />
    Send <input type="submit" value="Send data" />

</form>

<!-- 
    men man kan bruge kontroller som man vil og benytte javascript 
    til at sende data    
-->

<input type="text" />
<input type="number" />
<input type="color" />
<input type="date" />
<input type="datetime" />
<input type="email" />
<input type="month" />
<input type="search" />
<input type="tel" />
<input type="time" />
<input type="url" />
<input type="week" />
<input type="range" />


<select>
    <option>Element 1</option>
    <option>Element 2</option>
    <option>Element 3</option>
</select>
```


### Including af css

- typisk altid i header

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'inccss start' } -->

```html

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>min side</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.css">
    <link rel="stylesheet" href="style.css">
</head>

```


### Including af script

- typisk altid i bunden (over /body)

<!-- { templatetype:'embed', EmbedFromFile:'eksempler\\html2.html', UseDefaultFolder: 'true', SurroundType:'HTML', StartToken:'incscr start' } -->

```html

    <script src="/script/app/app.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.js"></script>

</body>
```

<!-- { templatetype:'header', templateappversion:'1', defaultfolder:'C:\\git-undervisning\\mcronberg\\undervisning-css\\eksempler' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index.html', SurroundType:'HTML', StartToken:'ex1htmlstart' } -->

```html
<div id="div1">
    <span id="span1">Test</span>
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style1.css', SurroundType:'CSS', StartToken:'ex1cssstart' } -->

```css

div#div1 {
    /* alt under div bliver rødt */
    color: red;
}

```


Brug evt inherit

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index.html', SurroundType:'HTML', StartToken:'ex2htmlstart' } -->

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


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style1.css', SurroundType:'CSS', StartToken:'ex2cssstart' } -->

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

 <!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index.html', SurroundType:'HTML', StartToken:'ex3htmlstart' } -->

```html
<div id="d1">
    <span id="s1" class="c1">
        Test
    </span>
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style1.css', SurroundType:'CSS', StartToken:'ex3cssstart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'font1start' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'font2start' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'font3start' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'colstart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'boxstart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'visstart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style2.css', SurroundType:'CSS', StartToken:'posstart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index3.html', SurroundType:'HTML', StartToken:'mtypehtmlstart' } -->

```html
<div id="mtype">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style3.css', SurroundType:'CSS', StartToken:'mtypestart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index3.html', SurroundType:'HTML', StartToken:'qtypehtmlstart' } -->

```html
<div id="qtype">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ad maiores nesciunt
    voluptatibus facere reiciendis. Beatae repellendus, sint provident iusto distinctio cumque
    voluptatibus deleniti cupiditate eveniet nobis iure eos!
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style3.css', SurroundType:'CSS', StartToken:'qtypestart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index3.html', SurroundType:'HTML', StartToken:'transfhtmlstart' } -->

```html
<div id="transf">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ad maiores nesciunt
    voluptatibus facere reiciendis. Beatae repellendus, sint provident iusto distinctio cumque
    voluptatibus deleniti cupiditate eveniet nobis iure eos!
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style3.css', SurroundType:'CSS', StartToken:'transfstart' } -->

```css

div#transf {
    width: 400px;
    transform: rotate(-5deg);
}

```


## Transitions

![](http://cdn.cronberg.dk/kurser/css/transitions.png)

[billed ref](http://goo.gl/DmTDy)

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index3.html', SurroundType:'HTML', StartToken:'transhtmlstart' } -->

```html
<div id="trans">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga ad maiores nesciunt
    voluptatibus facere reiciendis. Beatae repellendus, sint provident iusto distinctio cumque
    voluptatibus deleniti cupiditate eveniet nobis iure eos!
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style3.css', SurroundType:'CSS', StartToken:'transstart' } -->

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

<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:4, EmbedFromFile:'index3.html', SurroundType:'HTML', StartToken:'keyframehtmlstart' } -->

```html
<div id="kf">
    Lorem ipsum
</div>
```


<!-- { templatetype:'embed', UseDefaultFolder: 'true', RemoveSpace:0, EmbedFromFile:'style3.css', SurroundType:'CSS', StartToken:'keyframestart' } -->

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
# JavaScript

Dette er materialet til JS kursus. Opgaver kan findes på https://github.com/devcronberg/undervisning-js-opgaver.

## Indhold

- [JavaScript](#javascript)
  - [Indhold](#indhold)
  - [Om JavaScript](#om-javascript)
    - [Selve sproget er...](#selve-sproget-er)
      - [Objektorienteret baseret på prototyper](#objektorienteret-baseret-på-prototyper)
      - [Dynamisk](#dynamisk)
      - [Typefrit](#typefrit)
      - [Funktionsorienteret](#funktionsorienteret)
    - [Sproget bruges overalt](#sproget-bruges-overalt)
  - [Historie](#historie)
    - [ECMA](#ecma)
  - [Moderne JavaScript udvikling er ikke bare lige...](#moderne-javascript-udvikling-er-ikke-bare-lige)
  - [Udviklingmiljø og process](#udviklingmiljø-og-process)
  - [Syntaks](#syntaks)
  - [Variabler](#variabler)
    - [Typefrit](#typefrit-1)
    - [Erklæring](#erklæring)
    - [Interne typer](#interne-typer)
    - [Operatorer](#operatorer)
    - [Number-typen](#number-typen)
      - [Diverse](#diverse)
      - [Operatorer](#operatorer-1)
    - [Boolean-typen](#boolean-typen)
      - [Operatorer](#operatorer-2)
    - [String-typen](#string-typen)
      - [Template string](#template-string)
    - [Date](#date)
  - [Flow](#flow)
    - [if](#if)
    - [switch](#switch)
    - [for](#for)
    - [while](#while)
  - [Array](#array)
    - [Andre samlinger](#andre-samlinger)
  - [RegEx](#regex)
  - [Funktioner](#funktioner)
    - [Argumenter](#argumenter)
    - [Intet krav om argumenter](#intet-krav-om-argumenter)
    - [Referencer til funktioner](#referencer-til-funktioner)
    - [Arrow function](#arrow-function)
    - [Immediate function (IIFE)](#immediate-function-iife)
    - [Generators](#generators)
  - [ASync](#async)
  - [Errorhandling](#errorhandling)
    - [Error-objektet](#error-objektet)
    - [Brug throw til at smide fejl](#brug-throw-til-at-smide-fejl)
    - [Fejl bobler op](#fejl-bobler-op)
    - [Log](#log)
    - [Test](#test)
  - [Objekter](#objekter)
    - [Firkantet parentes-notation](#firkantet-parentes-notation)
    - [Punktum-notation](#punktum-notation)
    - [Tuborgklamme-notation](#tuborgklamme-notation)
    - [Kombiering af notationer](#kombiering-af-notationer)
    - [Tilføj og fjern egenskaber](#tilføj-og-fjern-egenskaber)
    - [Gennemløb af nøgler](#gennemløb-af-nøgler)
    - [Array af objekter](#array-af-objekter)
    - [JSON](#json)
  - [Class](#class)
    - [constructor og metoder](#constructor-og-metoder)
    - [Statiske metoder](#statiske-metoder)
    - [Egenskaber](#egenskaber)
    - [Nedarvning](#nedarvning)
  - [Moduler](#moduler)
    - [ES6 moduler](#es6-moduler)

## Om JavaScript

Mest populære programmeringssprog

- Populært
  - [developer survey](https://insights.stackoverflow.com/survey/2019#technology)
- Effektivt
- "Simpelt"
- Behæftet med forskellige fejl

Tidligere fortolket

- nu kompileret
  - af bla [V8](https://v8.dev/)

### Selve sproget er...

#### Objektorienteret baseret på prototyper

```javascript

// Gammel syntaks
var PersonGl = (function() {
  function Person(navn) {
    this.navn = navn;
  }
  Person.prototype.skriv = function() {
    console.log(`Jeg hedder ${this.navn}`);
  };
  return Person;
})();
var p1 = new PersonGl("Mathias");
p1.skriv();

// Ny syntaks
class PersonNy {
  constructor(navn, alder) {
    this._navn = navn;
  }
  skriv() {
    console.log(`Jeg hedder ${this._navn}`);
  }
  get navn() {
    return _navn;
  }
  set navn(value) {
    this._navn = value;
  }
}
let p2 = new PersonNy("Mathias", 10);
p2.skriv();
```

#### Dynamisk

```javascript
let a = {};
a.navn = "a";
console.log(a); // { navn: "a" }
delete a.navn;
console.log(a); // { }

let b = new Function("a", "b", "return a+b;");
```

#### Typefrit

```javascript
let a = 1;
console.log(typeof a);
a = "1";
console.log(typeof a);
```

#### Funktionsorienteret

```javascript
function findFunktion() {
  if (new Date().getMilliseconds() % 2 == 0) {
    return function(a, b) {
      return a + b;
    };
  } else {
    return function(a, b) {
      return a - b;
    };
  }
}

let f = findFunktion();
console.log(f(4, 4));
```

### Sproget bruges overalt

- Browsere
  - WASM Interop
- Server/desktop
  - [node.js](https://electronjs.org/)
- App- og automatiseringskerner
  - Google Apps
  - Microsoft 365
  - mv
- Desktop
  - [Electron](https://electronjs.org/)
- Mobile
  - [Cordova](https://cordova.apache.org/)
  - [React Native](http://www.reactnative.com/)
- Hardware / IoT
  - [Esprurino](https://www.espruino.com/)

## Historie

Skabt af Brendan Eich i 1995 for Netscape

- Først kaldt Mocha, LiveScript

Sproget er inspireret af

- C
  - syntaks
- Scheme/Lisp
  - funktionsorienteret
- Self/Smalltalk
  - objektorienteret

### ECMA

Sproget er standardiseret af ECMA første gang i 1997 - og kaldes derfor typisk ES (EcmaScript). Se [ITHistorie](http://ithistorie.cronberg.dk/?maerker=js,det_vi_husker&sortering=stigende)

## Moderne JavaScript udvikling er ikke bare lige...

- Transpiler
  - TypeScript, Babel
- Linters
  - ESLint
- Libraries
  - [jQuery](http://jquery.com/), [underscore.js](https://underscorejs.org/), [backbone.js](https://backbonejs.org/), [moment.js](https://momentjs.com/), [string.js](https://github.com/jprichardson/string.js)
- Frameworks
  - [React](https://reactjs.org/), [Angular](https://angular.io/), [Ember](https://emberjs.com/), [Vue](https://vuejs.org/)
- Testing
  - Unit test, integration test, continuing integration, UI test
- Module loaders / deployment / workflow
  - Webpack, Broserify, native modules

[How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)

## Udviklingmiljø og process

- Editor
  - [VS Code](https://code.visualstudio.com/)
  - Plugins
    - ESLint / TSLint
    - Chrome debugger
    - Live Server
    - Prettier
    - Auto Rename Tag
    - CSS Formatter
    - HTMLHint
    - HtmlTagWrap
    - Paste JSON as Code
- Package Manager
  - [NPM](https://nodejs.org/en/)
- WebServer
  - Typisk nodejs
    - [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) til VS Code
- Automatisering
  - [NPM Scripts](https://nodejs.org/en/)
- Bundling og minificering
  - [Webpack](https://webpack.js.org/) 
  - [Parcel](https://parceljs.org/)
- Lintning
  - [ESLint](https://eslint.org/)
  - [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Syntaks

- C syntaks
- Instruktion
  - Semicolon (ikke nødvendigt)
- Block
  - {}
- Kommentarer
  - //
  - /\* \*/
- Upper/Lower case
- Brug af (bla) punktumnotationen ved brug af objekter

```javascript
let obj = {};
obj.navn = "Mikkel";
obj.alder = 17;
obj.Alder = 16; // ikke det samme som obj.alder

// Checker alder
if (obj.alder < 17) {
  console.log(`${obj.navn} må ikke køre bil`);
} else {
  console.log(`${obj.navn} må gerne køre bil`);
}
```

## Variabler

### Typefrit

- men internt er der typer
  - string
  - number
  - bool
  - object
  - null
  - undefinded
- værdibaserede
- immutable

### Erklæring

- Brug altid scrict mode (ES5)
  - "use strict";
    - Alt skal erklæres
    - Har ligeledes anden betydning
      - slå flere ting fra eksempelvis
        - eval()
        - delete

Dette er ok

```javascript
a = 1;
```

Dette er ikke ok

```javascript
"use strict";

a = 1;  // mangler var/let
```

Uden brug af moduler er det normalt pakket ind i en IIFE

```javascript
(function() {
  "use strict";

  
})();
```

Erklæring med

- var
- let (ES6)
  - scope
- men husk "use strict"!

```javascript
console.log(i); // undefinded
// console.log(j); // ikke defineret
console.log(k); // undefinded
// console.log(l); // ikke defineret

var i = 1;
let j = 2;

if (true) {
  var k = 3;
  let l = 4;
}

console.log(i); // 1
console.log(j); // 2
console.log(k); // 3
// console.log(l); // ikke defineret

const m = 1;
// m = 2;  // fejl

if (true) {
  const n = 4;
  console.log(n);
}

// console.log(n); // ikke defineret

if (true) {
  let o = 5;
  function test() {
    console.log(o); // 5 - closure
  }
  test();
}
```

### Interne typer

Primitive interne datatyper

- Number
  - Numre
  - Se BigInt senere
- Boolean
  - true/false (+ truthy and falsy)
- String
  - Tekster
- undefined
  - bla erklærede variabler som endnu ikke har fundet en værdi
- null
  - null værdi kan benyttes som du ønsker
- object
  - datatype
- symbol
  - meget "intern" type som blandt bruges hvor man ønsker unikke navne 
    - "private" egenskaber i klasser

Ved typecheck brug evt

- typeof
- typeof()
- instanceof

```javascript
let i = 1;
console.log(typeof i); // number
console.log(typeof i); // number

i = true;
console.log(typeof i); // boolean

i = "";
console.log(typeof i); // string

i = {};
console.log(typeof i); // object

i = new Date();
console.log(typeof i); // object
console.log(i instanceof Date); // true
```

### Operatorer

Kendt fra de fleste andre "c" sprog

```javascript
let i = 0;
console.log(i);
i += 4;
console.log(i);
i -= 2;
console.log(i);
i *= 2;
console.log(i);
i /= 2;
console.log(i);
i %= 2;
console.log(i);

/*
0
4
2
4
2
0
*/
```

### Number-typen

- 64 bit floating point tal
- benytter . som literal (100.23)
- et for stort tal bliver til Infinity og en fejl i beregning kan blive til NaN (not a number)
- brug evt
  - toFixed()
  - toString()
  - toLocaleString()
    - kan være forskel på node/browser implementation
- Der findes en BigInt-type men den er ikke [supporteret overalt](https://caniuse.com/#search=bigint)

```javascript
let a = Math.pow(11, 308);
console.log(a); // infinity
let b = 0 / 0;
console.log(b); // nan
let c = 2342.23342234;
console.log(c);
console.log(c.toFixed(2));
console.log(c.toString());
console.log(c.toLocaleString("da-DK"));
console.log(
  c.toLocaleString("da-DK", {
    maximumFractionDigits: 2
  })
);
```

#### Diverse

- Math-objektet indeholder matematik funktioner
- parseInt og ParseFloat kan bruges til typekonvertering

#### Operatorer

- \+
- \-
- \*
- \/
- \%
- \++
- \--

### Boolean-typen

- Hvem var [George Boole](https://en.wikipedia.org/wiki/George_Boole)? ;)
- Kan være true eller false
  - men false, 0, "", null og undefined evalueres også til false
  - alt andet evalueres til true
  - "truthy and falsy values"
- Brug eventuelt !! operatoren

```javascript
let a;
// true / false
a = true; // a = true
b = false; // a = false

// "falsy"
a = !!""; // a = false
a = !!0; // a = false
a = !!null; // a = false
a = !!undefined; // a = false

a = !!"x"; // a = true
a = !!1; // a = true
a = !!2; // a = true

// eksempler
a = "";
if (a) {
  console.log("afvikles ikke fordi a evalueres til false");
}

a = 1;
if (a) {
  console.log("afvikles fordi a evalueres til true");
}
```

#### Operatorer

Brug altid === eller !== ved sammenligning

- == og != laver evt typekonvering og sammenligner
- === og !== checker først på typen

```javascript
let a = 1;
let b = "1";

if (a == b) console.log("øøøh - 1 == '1' ???");
if (a === b) console.log("nej - 1 er forskellig fra '1'");
```

Andre operatorer

- \<
- \>
- \>=
- \<=
- \!
- \&&
- \||


### String-typen

- Indeholder unicode
- Benyt " eller '
- Sammenlæg med +
- Sammenlign med === eller !==
- Escape karakterer
  - \\b (backspace)
  - \\f (formfeed)
  - \\n (newline)
  - \\r (carrige return)
  - \\t (tab)
  - \\"
  - \\'
  - \\\
  - \\uNNNN (unicode)
- String-typen indeholder naturligvis en del metoder men mange benytter diverse biblioteker
  - [Voca](https://vocajs.com/)

```javascript
let txt = "Marx Brothers";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
console.log(txt.split(" "));
console.log(txt.substring(0, 4));
console.log(txt.slice(0, -5));
console.log(txt.charAt(5));
// Pas på ES version - brug evt polyfill
console.log(txt.startsWith("Ma"));
console.log(txt.endsWith("rs"));
console.log(txt.includes("BRO"));
console.log(txt.repeat(2));
/*
13
MARX BROTHERS
marx brothers
[ 'Marx', 'Brothers' ]
Marx
Marx Bro
B
true
true
false
Marx BrothersMarx Brothers
*/
```

#### Template string

- Nem og effektv måde at danne strenge
- Benyt `..` og \${}

```javascript
let navn = "Mathias";
let beløb = 100;
console.log(navn + " har kr " + beløb);
console.log(navn + " har kr " + beløb + " og næste måned kr " + beløb * 2);
console.log(`${navn} har kr ${beløb}`);
console.log(`${navn} har kr ${beløb} og næste måned kr ${beløb * 2}`);

console.log();
console.log(
  personHTML({
    navn: "Mikkel",
    sport: ["Fodbold", "Fitness"],
    job: "Tømre"
  })
);

function personHTML({ navn, sport, job }) {
  return `<article class="person">
    <h3>${navn}</h3>
    <div>
        <div>Hobbies:</div>
        <ul>
            ${sport.map(sport => `<li>${sport}</li>`).join(" ")}
        </ul>
    </div>
    <p>Current job: ${job}</p>
 </article>`;
}

/*
Mathias har kr 100
Mathias har kr 100 og næste måned kr 200
Mathias har kr 100
Mathias har kr 100 og næste måned kr 200

<article class="person">
    <h3>Mikkel</h3>
    <div>
        <div>Hobbies:</div>
        <ul>
            <li>Fodbold</li> <li>Fitness</li>
        </ul>
    </div>
    <p>Current job: Tømre</p>
 </article>
*/
```

### Date

- Brug Date-typen til dato/tid men de fleste benytter biblioteker som eksempelvis [moment.js](https://momentjs.com/) eller lign.
  - Bemærk at måneder er 0 baseret
- Opret med new

```javascript
let d = new Date(); // nu
console.log(d.toLocaleString());
d = new Date("2019-5-14 9:10");
console.log(d.toLocaleString());
d = new Date(2019, 4, 14, 9, 10);
console.log(d.toLocaleString());

console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());

d = new Date(2019, 12, 24);
// d = 24/1-2020!!!

```

## Flow

### if

```javascript
if (true) {
}

if (true && true) {
}

if ((true && true) || true) {
}

// husk - truthy/falsy
if (!null) {
}

if (!undefined) {
}

if (!0) {
}

if (!"") {
}

// husk ===
let i = 10;
if (i === 10) {
}

if (true) {
} else {
}
```

### switch

```javascript
let y = 1;
var output = "Output: ";
switch (y) {
  case 0:
    output += "0 ";
  case 1:
    output += "1 ";
  case 2:
    output += "2 ";
  case 3:
    output += "3 ";
  case 4:
    output += "4 ";
    break;
  case 5:
    output += "5";
    break;
  default:
    console.log("Kun 1-5");
}
console.log(output); // output: 1 2 3 4
```

### for

```javascript
let s = "";
for (let i = 0; i < 10; i++) {
  s += i + " ";
}
console.log(s); // 0 1 2 3 4 5 6 7 8 9

s = "";
for (let i = 0; i < 10; i += 2) {
  s += i + " ";
}
console.log(s); // 0 2 4 6 8

s = "";
for (let i = 10; i > 0; i--) {
  s += i + " ";
}
console.log(s); // 10 9 8 7 6 5 4 3 2 1

s = "";
for (let i = 0; i < 10; i++) {
  if (i == 4) continue;
  if (i == 7) break;
  s += i + " ";
}
console.log(s); // 0 1 2 3 5 6
```

### while

```javascript
let s = "";
let i = 0;
do {
  i++;
  s += `${i} `;
} while (i < 5);
console.log(s); // 1 2 3 4 5

s = "";
i = 0;
while (i < 5) {
  i++;
  s += `${i} `;
}
console.log(s); // 1 2 3 4 5

s = "";
i = 0;
while (i < 5) {
  i++;
  s += `${i} `;
  if (i == 3) break;
}
console.log(s); // 1 2 3
```

## Array

- Er egentlig en hash-tabel men man bruger typisk numre som nøgler
- Kan initialieres med new Array eller literals []
- Kan håndtere mange dimensioner
- En masse medlemmer - de vigtige:
  - lenght
  - push
  - pop

```javascript
let a = new Array();
a[0] = 1;
a[1] = 2;
// eller let a = [1, 2];
console.log(a.length); // 2 (sidste index + 1)

a.push(3);
console.log(a.join(" ")); // 1 2 3

let b = a.pop();
console.log(b); // 3
console.log(a.join(" ")); // 1 2
```

- Brug af de mere avancerede metoder er en super god måde at lære funktionsorienteret kode

```javascript
let a = [5, 1, 6, 7, 2, 13, 8];

// Find første
let b = a.find(function(v, i, a) {
  return v > 5;
});
// eller
b = a.find(v => v > 5);
console.log(b); // 6

// Filtrer og returner nyt array
let c = a.filter(v => v < 5);
console.log(c.join(" ")); // 1 2 3

// Manipuler hvert element og returner nyt array
let d = a.map(v => v * 2);
console.log(d.join(" ")); // 10 2 12 14 4 26 16

// Findes element
let e = a.includes(2);
console.log(e); // true

// iterer
a.forEach((v, i) => console.log(i + ": " + v)); // 0: 5, 1: 1, 2: 6 ...

let f = Array.from("mikkel");
console.log(f.join(" ")); // m i k k e l

// sorter
let g = a.slice(0); // kopi
g.sort();
console.log(g.join(" ")); // 1 13 2 5 6 7 8 (hmmm...)

g.sort((a, b) => a - b); // måske bedre med a > b ? 1 : a < b ? -1 : 0
console.log(g.join(" ")); // 1 2 5 6 7 8 13
```

Mange benytter [underscore.js](https://underscorejs.org/)

### Andre samlinger

Der findes nyere array-typer (ES2015-)

- Float32Array
- Float64Array
- Int8Array
- Int16Array
- Int32Array
- UInt16Array
- UInt32Array

Som alternativ til arrays kan du bruge Set (unikke værdier):

```javascript
const set1 = new Set([1, 2, 3, 4, 5]);
set1.add(7);
console.log(set1.size);
console.log(set1.has(2));
console.log(set1.has(6));
set1.clear();
```

eller [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) (nøgle/værdi - som Object men langt flere muligheder)

```javascript
const m = new Map();
m.set("a", 10);
m.set("b", 20);
console.log(m.size); // 2
console.log(m.get("b")); // 20
```

## RegEx

- Brug af regular expresion er indbygget
- literals er /

```javascript
let r = new RegExp("^\\d+$");
console.log(r.test("1")); // true
console.log(r.test("a")); // false

let r2 = /^\d+$/;
console.log(r2.test("1")); // true
console.log(r2.test("a")); // false
```


## Funktioner

- Forskellige måder at definere en funktion
  - Frit valg (bare pas på hoisting)

```javascript
function add1(a, b) {
  return a + b;
}

let add2 = function(a, b) {
  return a + b;
};

let add3 = new Function("a", "b", "return a+b;");

// "lang" lambda
let add4 = (a, b) => {
  return a + b;
};

// "kort" lambda
let add5 = (a, b) => a + b;

console.log(add1(1, 1)); // 2
console.log(add2(1, 1)); // 2
console.log(add3(1, 1)); // 2
console.log(add4(1, 1)); // 2
console.log(add5(1, 1)); // 2
```

### Argumenter

- Primitive typer kopierer værdier (by value)
- Objekter kopierer referencer (be reference)

```javascript
function f1(a) {
  a = 200;
}
let b = 100;
console.log(b); // 100
f1(b);
console.log(b); // 100

function f2(dato) {
  dato.setFullYear(2000);
}
let d = new Date();
console.log(d.toLocaleDateString()); // aktuel dato
f2(d);
console.log(d.toLocaleDateString()); // aktuel dato men år = 2000
```

### Intet krav om argumenter

- En funktion er i virkeligheden et objekt (Function) med forskellige medlemmer
  - arguments

```javascript
function f1(a, b, c) {}
// helt ok
f1();
f1(1);
f1(1, 2);
f1(1, 2, 3);
f1(1, 2, 3, 4);
f1(1, 2, 3, 4, 5);
```

- Brug arguments

```javascript
function f1(a, b, c) {
  // arguments er egentlig et object - lav det om til et array
  let ar = Array.from(arguments);
  console.log(ar.join(" "));
  // men kan også bare bruge det som et object (arguments[0], arguments[1] mv)
}
f1();
f1(1); // 1
f1(1, 2); // 1 2
f1(1, 2, 3); // 1 2 3
f1(1, 2, 3, 4); // 1 2 3 4
f1(1, 2, 3, 4, 5); // 1 2 3 4 5
```

### Referencer til funktioner

JS er funktionsorienteret på et typesvagt niveau hvilket giver en masse muligheder (både + og -).

```javascript
let f1 = (a, b) => a + b;
// kald
let r1 = f1(1, 1);
// reference
let r2 = f1;
let r3 = r2(1, 1);
console.log(r1); // 2
console.log(r2); // function f1
console.log(r3); // 2
```

Især de mange array funktioner er gode til at øve sig på funktionsorienteret kode.

```javascript
let a = [1, 5, 7, 10, 3, 8];
let s1 = function(a, b) {
  return a - b;
};
// ta' en kopi af array og sorter
let a1 = a.slice(0).sort(s1); // 1 3 5 7 8 10

// ta' en kopi af array og sorter
let a2 = a.slice(0).sort(function(a, b) {
  return a - b;
}); // 1 3 5 7 8 10

// ta' en kopi af array og sorter
let a3 = a.slice(0).sort((a, b) => a - b); // 1 3 5 7 8 10
```

```javascript
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let f = () => {
  let r = Math.floor(Math.random() * 10 + 1); // "tilfældigt" tal mellem 1-10
  if (r < 5) return add;
  else return sub;
};
console.log(f()(3, 2)); // 5 eller 1
```

Man kan naturligvis også returnere referencer fra metoder.

```javascript
let f = () => {
  let r = Math.floor(Math.random() * 10 + 1); // "tilfældigt" tal mellem 1-10
  if (r < 5) return (a, b) => a + b;
  else return (a, b) => a - b;
};
console.log(f()(3, 2)); // 5 eller 1
```

### Arrow function

- Brug af => operator
- [Alonzo Church](https://en.wikipedia.org/wiki/Alonzo_Church) - lambda calculus

Regler:

- argumenter skal angives i parantes med mindre der kun er en
- hvis der kun er en operation behøves der ikke tuborgklammer eller return
- bedre håndtering af "this"

```javascript
let o1 = new Object();
o1.f1 = function() {
  console.log(this); // function
  let f2 = function() {
    console.log(this); // global/undefinded
  };
  f2();
};
o1.f1();
```

```javascript
let o1 = new Object();
o1.f1 = () => {
  console.log(this); // object
  let f2 = () => {
    console.log(this); // object
  };
  f2();
};
o1.f1();
```

### Immediate function (IIFE)

- Funktion der afvikler sig selv

```javascript
let f1 = (() => {
  console.log("f1"); // f1
})();

let f2 = (function() {
  console.log("f2"); // f2
})();

let f3 = (function(a) {
  console.log("f3 med " + a); // f3 med 1
})(1);

let f4 = (async function() {
  let response = await fetch(
    "https://dawa.aws.dk/kommuner/"
  );
  let json = await response.json();
  console.log(json); // kommuner i DK
})();
```

### Generators

- Speciel funktion som afventer videre afvikling
  - benyttet i iterators og callbacks

```javascript
function loop1() {
  let a = [];
  let i = 0;
  while (i < 2) {
    i++;
    console.log("*");
    a.push(i);
  }
  return a;
}

function* loop2() {
  let i = 0;
  while (i < 2) {
    i++;
    console.log("*");
    yield i;
  }
}

for (const item of loop1()) {
  console.log(item);
} // * * 1 2

for (const item of loop2()) {
  console.log(item);
} // * 1 * 2

let r = loop2();
console.log(r.next()); // { value: 1, done: false }
console.log(r.next()); // { value: 2, done: false }
console.log(r.next()); // { value: undefined, done: true }
```

```javascript
function* foo() {
  yield 'a';
  yield 'b';
  yield 'c';
}

for (const val of foo()) {
  console.log(val);
}
// a
// b
// c

const [...values] = foo();
console.log(values); // ['a','b','c']
```


## ASync

Asynkron kode i JavaScript er typisk kodet med callback-funktioner:

```javascript
const setTimeoutPromise = ms => new Promise(resolve => setTimeout(resolve, ms));

console.log("start");
setTimeoutPromise(2000).then(function() {
  console.log("slut");
});
```

Fra ES2017 er async/await dog en del af syntaksen, og det gør koden noget mere logisk og "synkron-agtig". await (som skal placeres i en async funktion) afventer at promise-objektet er afviklet. Yderligere er fejlhåndtering simplificeret til simpel try/catch.

```javascript
const setTimeoutPromise = ms => new Promise(resolve => setTimeout(resolve, ms));

async function test() {
  console.log("start");
  let t = await setTimeoutPromise(2000);
  console.log("slut");
}

test();
```

Flere promise-objekter kan eventuelt await'es med all

```javascript
const setTimeoutPromise = ms => new Promise(resolve => setTimeout(resolve, ms));

async function test() {
  console.log("start");
  const t1 = setTimeoutPromise(2000);
  const t2 = setTimeoutPromise(2000);
  await Promise.all([t1, t2]);
  console.log("slut");
}

test();
```


## Errorhandling

- Brug try/catch/finally
- Men check for undefined og NaN
  - void = undefined
  - undefined + 1 = NaN

```javascript
let o = {}; // new Object();
o.toString(); // ok

/* 
  o.tostring(); // TypeError: o.tostring is not a function
*/

try {
  o.tostring();
} catch (error) {
  console.log(error.message); // o.tostring is not a function
} finally {
  console.log("kører under alle omstændigheder"); // kører under alle omstændigheder
}
```

### Error-objektet

- [Forskellige implementationer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) men prøv
  - message
  - name
  - stack
- Brug log.trace

```javascript
try {
  o.tostring();
} catch (error) {
  console.log(error.message); // o.tostring is not a function
  console.log(error.name); // TypeError
  console.log(error.stack); // Stack trace
}
```

### Brug throw til at smide fejl

```javascript
function add(a, b) {
  if (arguments.length !== 2) {
    throw new Error("Forkerte argumenter");
  }
}
try {
  add(1, 2); //ok
  add(1); // fejl
} catch (error) {
  console.log(error.message); // Forkerte argumenter
}
```

### Fejl bobler op

```javascript
function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  throw new Error("Fejl");
}

try {
  f1();
} catch (error) {
  console.log(error.message);
}
```

### Log

- Brug et godt log-framework
  - [Papertrail](https://papertrailapp.com/)
  - [trackjs](https://trackjs.com/)
  - Eller det gode gamle imagehack

```javascript
function log(app, tekst) {
  let i = new Image();
  i.src = `https://log.cronberg.dk?app=${app}&tekst=${tekst}`;
}
```

### Test

Forskellige test frameworks, tools og runners

- [Jasmine](https://jasmine.github.io/)
- [Mocha](https://mochajs.org/)
- [PhantomJS](http://phantomjs.org/)
- [Karma](http://karma-runner.github.io/)
- [Protractor](http://www.protractortest.org/)
- [Selenium](http://www.seleniumhq.org/)
- [Puppeteer](https://developers.google.com/web/tools/puppeteer/) - headless Chrome
- [Appveyor](https://www.appveyor.com) - Continuous Integration solution for Windows and Linux

## Objekter

- Objekter er i virkeligheden blot en hashtabel med unikke nøgler og tilhørende værdier
- Der er flere måder at skabe objekterne på

  - Firkantet parentes-notation
  - Punktum-notation
  - Tuborgklamme-notation

- Objekter skabes som udgangspunkt med
  - new Object()
  - {}
- De består allerede af metoder som toString() grundet sin prototype

```javascript
let o1 = new Object();
console.log(o1["toString"]()); // object Object
console.log(o1.toString()); // object Object

let o2 = {};
console.log(o2["toString"]()); // object Object
console.log(o2.toString()); // object Object
```

### Firkantet parentes-notation

```javascript
let p1 = {};
p1["navn"] = "Mathias";
p1["fødselsår"] = 2006;
p1["estimeretAlder"] = function() {
  return new Date().getFullYear() - this["fødselsår"];
};
p1["toString"] = function() {
  console.log(
    `Jeg hedder ${this["navn"]} og er ${this["estimeretAlder"]()} gammel`
  );
};
p1["toString"](); // Jeg hedder Mathias og er 13 gammel
```

### Punktum-notation

```javascript
let p2 = {};
p2.navn = "Mikkel";
p2.fødselsår = 2003;
p2.estimeretAlder = function() {
  return new Date().getFullYear() - this.fødselsår;
};
p2.toString = function() {
  console.log(`Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`);
};
p2.toString(); // Jeg hedder Mikkel og er 16 gammel
```

### Tuborgklamme-notation

```javascript
let p3 = {
  navn: "Michell",
  fødselsår: 1966,
  estimeretAlder: function() {
    return new Date().getFullYear() - this.fødselsår;
  },
  toString: function() {
    console.log(
      `Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`
    );
  }
};
p3.toString(); // Jeg hedder Michell og er 53 gammel
```

### Kombiering af notationer

```javascript
let p4 = {};
p4["navn"] = "Lene";
p4.fødselsår = 1964;
p4["estimeretAlder"] = function() {
  return new Date().getFullYear() - this.fødselsår;
};
p4.toString = function() {
  console.log(
    `Jeg hedder ${this.navn} og er ${this["estimeretAlder"]()} gammel`
  );
};
p4.toString(); // Jeg hedder Lene og er 55 gammel
```

### Tilføj og fjern egenskaber

```javascript
let p5 = {
  navn: "Villads",
  fødselsår: 2017,
  estimeretAlder: function() {
    return new Date().getFullYear() - this.fødselsår;
  },
  toString: function() {
    console.log(
      `Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`
    );
  }
};
p5.toString(); // Jeg hedder Villads og er 2 gammel

p5.årTil18 = function() {
  return 18 - this.fødselsår;
};
delete p5.navn;
p5.toString(); // Jeg hedder undefined og er 2 gammel
```

### Gennemløb af nøgler

```javascript
let p6 = {
  navn: "Villads",
  fødselsår: 2017,
  estimeretAlder: function() {
    return new Date().getFullYear() - this.fødselsår;
  },
  toString: function() {
    console.log(
      `Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`
    );
  }
};
p6.toString(); // Jeg hedder Villads og er 2 gammel

for (const key in p6) {
  console.log(key + " = " + typeof p6[key]);
}
/*
navn = string
fødselsår = number
estimeretAlder = function
toString = function
*/

for (const key in p6) {
  console.log(`${key}: ${p6[key]}`);
}

/*
navn: Villads
fødselsår: 2017
estimeretAlder: function () {
    return new Date().getFullYear() - this.fødselsår;
  }
toString: function () {
    console.log(`Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`);
  }
*/

for (const key in p6) {
  if (typeof p6[key] === "function") {
    p6[key]();
  } else {
    console.log(`${key}: ${p6[key]}`);
  }
}
/*
navn: Villads
fødselsår: 2017
Jeg hedder Villads og er 2 gammel
*/
```

### Array af objekter

```javascript
let toString = function() {
  console.log(`Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`);
};
let estimeretAlder = function() {
  return new Date().getFullYear() - this.fødselsår;
};
let personer = [
  {
    navn: "Michell",
    fødselsår: 1966,
    estimeretAlder: estimeretAlder,
    toString: toString
  },
  {
    navn: "Lene",
    fødselsår: 1964,
    estimeretAlder: estimeretAlder,
    toString: toString
  }
];
personer.push({
  navn: "Mikkel",
  fødselsår: 2003,
  estimeretAlder: estimeretAlder,
  toString: toString
});

let m = {};
m.navn = "Mathias";
m.fødselsår = 2006;
m.estimeretAlder = estimeretAlder;
m.toString = toString;
personer.push(m);

console.log(personer.length); // 4
for (var i = 0; i < personer.length; i++) {
  personer[i].toString();
}
/*
Jeg hedder Michell og er 53 gammel
Jeg hedder Lene og er 55 gammel
Jeg hedder Mikkel og er 16 gammel
Jeg hedder Mathias og er 13 gammel
*/

for (const person of personer) {
  person.toString();
}
/*
Jeg hedder Michell og er 53 gammel
Jeg hedder Lene og er 55 gammel
Jeg hedder Mikkel og er 16 gammel
Jeg hedder Mathias og er 13 gammel
*/
```

### JSON

- Brug JSON objektet til at serialisere (stringify) et objekt til en streng, og deserialisere (parse) fra en string til et objekt.

```javascript
let toString = function() {
  console.log(`Jeg hedder ${this.navn} og er ${this.estimeretAlder()} gammel`);
};
let estimeretAlder = function() {
  return new Date().getFullYear() - this.fødselsår;
};
let personer = [
  {
    navn: "Michell",
    fødselsår: 1966,
    estimeretAlder: estimeretAlder,
    toString: toString
  },
  {
    navn: "Lene",
    fødselsår: 1964,
    estimeretAlder: estimeretAlder,
    toString: toString
  }
];
let json = JSON.stringify(personer);
console.log(json);
// [{"navn":"Michell","fødselsår":1966},{"navn":"Lene","fødselsår":1964}]

let personer2 = JSON.parse(json);
console.log(personer2); // objekt
console.log(personer2.length); // 2
```

## Class

- En klasse i JS er egentlig ikke en klasse men i virkeligheden en "constructor function".
  - Javascript er prototype orienteret fsva OOP
- Pas på ECMA version!!

```javascript
class Person {}
let p = new Person();
```

er egentlig

```javascript
let Person = (function() {
  function Person() {}
  return Person;
})();
let p = new Person();
```

Typisk vil man benytte en transpiler som TypeScript, men for en god ordens skyld er syntaksen således:

### constructor og metoder

```javascript
class Person {
  constructor(navn, alder) {
    this._navn = navn;
    this._alder = alder;
  }
  print() {
    console.log(`Jeg hedder ${this._navn} og er ${this._alder} gammel`);
  }
}
let p = new Person("Mikkel", 16);
p.print(); // Jeg hedder Mikkel og er 16 gammel
```

### Statiske metoder

```javascript
class Person {
  constructor(navn, alder) {
    this._navn = navn;
    this._alder = alder;
  }
  print() {
    console.log(`Jeg hedder ${this._navn} og er ${this._alder} gammel`);
  }

  static opretTilfældigPerson() {
    let tal = Math.floor(Math.random() * 25 + 1);
    return new Person(String.fromCharCode(tal + 65), tal);
  }
}
let p = Person.opretTilfældigPerson();
p.print();
```

### Egenskaber

```javascript
class Person {
  constructor(navn, alder) {
    this._navn = navn;
    this._alder = alder;
  }
  print() {
    console.log(`Jeg hedder ${this._navn} og er ${this._alder} gammel`);
  }
  get navn() {
    // sikkerhed, log, validering
    return _navn;
  }
  set navn(value) {
    // sikkerhed, log, validering
    this._navn = value;
  }
}
let p = new Person("Mat", 13);
p.print(); // Jeg hedder Mat og er 13 gammel
p.navn = "Mathias";
p.print(); // Jeg hedder Mathias og er 13 gammel
```

### Nedarvning

```javascript
class Person {
  constructor(navn, alder) {
    this._navn = navn;
    this._alder = alder;
  }
  print() {
    console.log(`Jeg hedder ${this._navn} og er ${this._alder} gammel`);
  }
}

class Elev extends Person {
  constructor(navn, alder, elevId) {
    super(navn, alder);
    this._elevId = elevId;
  }
  print() {
    console.log(
      `Jeg hedder ${this._navn} og er ${this._alder} gammel med elevid ${this._elevId}`
    );
  }
}

let e = new Elev("Villads", 2, "xyz"); // Jeg hedder Villads og er 2 gammel med elevid xyz
e.print();
```

## Moduler

I det oprindelige ECMA Script kan man udelukkende indkapsle data og funktionalitet i funktioner, og det kan gøre en større kodebase meget kompleks at udvikle. Derfor har man søgt efter muligheder for at modulalisere ES, og flere mønstre/formater/standarder er blevet skabt.

- Closure og funktioner i "ren" ES
- CommonJS
- AMD (Asynchronous Module Definition)
- UMD (Universal Module Definition)

De sidste tre kræver en transpiler som WebPack, Browserify eller Parcel for at virke i en browser, og Node har valgt at benytte CommonJS som standard.

[Inden for de sidste par år](https://caniuse.com/#feat=es6-module) er ES6 moduler blevet en mulighed i alle browsere og Node så det er sikkert kan vej moduler i fremtiden vil blive udviklet.

### ES6 moduler

I ES6 er en .js fil et modul der som helt af sig selv er en container hvor alt er privat, og hvis man ønsker at andre skal have adgang til data og funktionalitet skal det eksporteres. Det kan ske på flere måder.

> Bemærk: Følgende eksempler afvikles gennem Node, som benytter .mjs filer til at definere moduler. Kan også kræve (indtil 2020), at Node afvikles med et flag (--experimental-modules)

```javascript
export const a = [1, 2, 3, 4];

export function b() {
  return true;
}

export class C {}
```

eller 
 
 ```javascript
const a = [1, 2, 3, 4];

function b() {
  return true;
}

class C {}

export { a, b, C };
```

Disse kan så importeres i et andet modul

```javascript
import { a, b, C } from "./person.mjs";

console.log(a);
console.log(b());

let c = new C();
```

eller

```javascript
import * as Utils from "./person.mjs";

console.log(Utils.a);
console.log(Utils.b());

let c = new Utils.C();
```

Der findes ligeledes "default" export som ikke kræver et decideret navngivet import:

```javascript
const a = [1, 2, 3, 4];

export default { a };
```

```javascript
import Utils from "./person.mjs";

console.log(Utils);
```

# NodeJS

JavaScript runtime bygget på Googles V8 motor, der giver mulighed for at afvikle JavaScript filer på både server og desktop - på de fleste platforme.

NodeJS er skabt af [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) i 2009. Se [ithistorie.cronberg.dk](http://ithistorie.cronberg.dk/?maerker=node,js) for at få et overblik.

https://nodejs.org/

## EventLoop

Node benytter et indbygget eventloop der asynkront kalder eksterne ressourcer (IO, DB, HTTP mv)

<img src='https://miro.medium.com/max/1829/1*fBOm10njasRdooZsSHXkGw.png' height='600' />

[ref](https://miro.medium.com/max/1829)

Node (og JS) er enkelttrådet men afvikler IO/HTTP mv asynkront ved at lade operativsystemet foretage kald.

## Indbyggede APIer

Node har et hav af indbyggede APier som giver mulighed for at benytte

- console
- kryptering
- http, dns, tcp mv
- moduler
- fil systemet
- operativsystemet
- streams
- timers

og meget mere.

## Brug af node

Flere store virksomheder benytter node til at skabe serverside webapplikationer med voldsomt mange brugere

  - Paypal
  - Netflix
  - Uber
  - LinkedIn
  - mv

og mange benytter node scripts som en del af udviklingsprocessen til alle typer af applikationer

  - kompilering/transpilering
  - linting
  - minificering
  - tranformering af billeder
  - kopi/backup
  - deployment
  - kryptering
  - komprimering
  - mv

Argumenterne for at benytte Node er mange

  - Javascript
  - Hastighed
  - Async / non blocking
  - Mange muligheder for at skabe apps (serverside/clientside)
  - NPM med et hav af pakker (+50.000)
  - Meget udbredt

## NPM

Der findes et hav af 3. parts pakker som kan kombineres på alle måde

https://www.npmjs.com/

Pakker som

  - Express (kæmpe framework til at skabe serverside web apps)
  - Async (hjælp til async kode)
  - Request (hjælp til http)
  - Browserify / WebPack (hjælp til modul baseret udvikling og meget mere)
  - Grunt (task runner)
  - Socket.io (socket kommunikation)
  - Commander (console)
  - Mocha (test)
  - UnderscoreJS (arrays mv)
  - Passport (authentication)
  - NodeMailer (mail)
  - React / Angular / Vue (SPA apps)
  - Karma (test)
  - MySql/Mongo (DB)
  - LESS (kompilering CSS)
  - JSHint/TSHint (linter)

NPM er en del af NodeJS installationen.

## En Node-applikation

Består typisk af en mappe med følgende filer

- package.json
  - fil med info om applikationen, source control, hvilke pakker der benyttes samt eventuelle scripts
- .gitignore (eller anden source control ignore file)
  - de filer som ignoreres af source control
- jslint.json eller tslint.json
  - konfiguration af lintere
- jsconfig.json, tsconfig.json eller lign.
  - opsætning til kompiler/transpiler

## Start en node-applikation (uden git)

I en tom mappe (typisk med navngivet efter applikationen

```
npm init 
```

og besvar diverse spørgsmål.

## Start en node-applikation (med git)

I en tom mappe (typisk med navngivet efter applikationen)

```
git init
npm init 
```

og besvar diverse spørgsmål.

Hent tekst fra https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore og gem som .gitignore i mappen

## Eksempel på en simpel node-applikation

Denne applikation benytter axios til at hente json over HTTP og underscore til at hjælpe med lidt array manipulation. 

```
npm install axios --save
npm install underscore --save
```

Bemærk, at package.json nu ser sålede ud:

```json
{
  "name": "nodetest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.0",    
    "underscore": "^1.9.1"
  }
}

```

Skab filen kommuner.js

```javascript
const _ = require("underscore");
const axios = require("axios").default;

exports.hentKommuner = function() {
  return new Promise(async function(resolve, reject) {
    try {
      let response = await axios.get("https://dawa.aws.dk/kommuner/");
      let kommuner = response.data;
      // skab et array af objekter med navn og kode (skærer resten fra)
      let navne = _.map(kommuner, o => ({
        navn: o.navn,
        kode: o.kode
      }));
      resolve(navne);
    } catch (error) {
      reject(error);
    }
  });
};
```

Skab filen app.js

```javascript
const modul = require("./kommuner.js");

(async function() {
  const kommuner = await modul.hentKommuner();
  kommuner.forEach(v => console.log(`${v.kode}: ${v.navn}`));
})();
```

Prøv applikation fra kommandoprompt

```
node app.js
```

Nu skulle alle kommuner gerne blive vist.

Ret package.json således, at der oprettes et script

```json
{
  "name": "nodetest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.0",    
    "underscore": "^1.9.1"
  }
}
```

og kør script fra konsol med 

```
npm start
```

### Skab en browser applikation med brug af jQuery

Den nemmeste måde at skabe HTML er at benytte jQuery. Samtidigt skal vi bruge pakken regenerator-runtime, som er en pakke for at kunne benytte async/awit i flere runtime miljøer og module loadere (se senere). Sidstnævnte gemmes som devDependencies (bruges kun i udvikling).

```
npm install jquery --save
npm install regenerator-runtime --save-dev
```
Opret et html-dokument

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Kommuner i DK</title>
  </head>
  <body>
    <h1>Kommuner i DK</h1>
    <ul id="lst" />
    <script src="index.js"></script>
  </body>
</html>
```

Dan filen index.js:

```javascript
// nødvendig for at kunne håndtere promise i Parcel
const regeneratorRuntime = require("regenerator-runtime");
const $ = require("jquery");
const modul = require("./kommuner.js");

(async function() {
  const kommuner = await modul.hentKommuner();
  const ul = $("#lst");
  kommuner.forEach(v => {
    let li = $("<li/>").html(`${v.kode}: ${v.navn}`);
    ul.append(li);
  });
})();
```

Node forstår require til import at moduler, men det gør browsere ikke (vi kan dog "snart" skifte til ES6 moduler og benytte import/export). Derfor er du nødt til at benytte en module-loader (WebPack, Browserify, Parcel mv). Parcel er den nemmeste - prøv

```
npm install parcel-bundler --save-dev
```

Tilføj nu et par script til package.json

```json
{
  "name": "nodetest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app.js",
    "dev": "parcel dev index.html",
    "build": "parcel build index.html"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.19.0",    
    "underscore": "^1.9.1"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4",
    "regenerator-runtime": "^0.13.3"
  }
}
```

Og prøv fra konsol nu at skrive

```
node run dev
```

Nu burde HTML-siden kunne ses gennem http://localhost:1234.

prøv også 

```
node run build
```

og check dist-mappen.

# ASP.NET Core MVC

## Udviklingsmiljø

- Visual Studio
- Visual Studio Code

## C# forudsætninger

- MVC core er "moderne" og benytter derfor C# 8.+
  - ? operator
    - [obj]?.ToString()
  - ?? operator
    - [obj]?.ToString() ?? ""
  - Auto properties og initialisering
  - String templates
  - Initialisering
  - navngivne argumenter
  - Extensionsmethods
  - Lambda  
  - metoder i metoder 
  - anonyme typer
  - Task / async/await
  - Attributter

- Arkitektur
  - Dependency Injection

## MVC modellen (simplificeret)

![](https://cdn.cronberg.dk/kurser/aspnetcore/mvc.png)

### En simpel MVC template

- Convention/Navngivning
  - [navn]Controller
  - MVC leder i konkrete mapper

- Grundlæggende mappestruktur
  - Controllers
  - Model
  - Views
    - Shared
	- [Mapper]
  - wwwroot
    - [styles]
	- [script]
	- [vendor]

- Initialisering
  - Startup
  - Program 
    - console
    - indbygget web server

- Templates
  - Templates i VS
    - ASP.NET Core Web App
  - Templates fra dotnet.exe new 

| Navn                                         | Beskrivelse |
| -------------------------------------------- | ----------- |
| ASP.NET Core Empty                           | web         |
| ASP.NET Core Web App (Model-View-Controller) | mvc         |
| ASP.NET Core Web App                         | razor       |
| ASP.NET Core with Angular                    | angular     |
| ASP.NET Core with React.js                   | react       |
| ASP.NET Core with React.js and Redux         | reactredux  |

- Brug eksempelvis 
  - "dotnet new web -n mywebapp" 
  - "dotnet run"

- Tilføj MVC templates fra https://github.com/devcronberg/MCronberg.DotNetTemplate

### Eksempel på en simpel MVC app

- Ret startup.cs til at håndtere MVC
  - ConfigureServices
    - services.AddControllersWithViews();
  - Configure
    - if (env.IsDevelopment())
      - app.UseDeveloperExceptionPage();
    - app.UseHttpsRedirection();
    - app.UseStaticFiles();
    - app.UseRouting();
    -  app.UseEndpoints(endpoints => endpoints.MapControllers());
- Tilføj evt NuGet
  - Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation
  - services.AddControllersWithViews().AddRazorRuntimeCompilation();
- Tilføj mapper
  - /wwwroot
  - /views
    - /shared
  - /controllers
  - /models
- Tilføj html fil under /wwwroot
  - virker det?
- Tilføj controller
  - appcontroller.cs
  - tilføj route over Index()
    - [Route("~/")]
- Tilføj view
  - virker det?
- Tilføj en Dato-klasse til Models 
  - Metoden HentDag() som returnerer en ugedag - hvis det er lørdag/søndag returneres mandag
- Ret Index i controller til at sende dag videre til view
  - ViewBag.Dag = ...
  - Ret View
    - @ViewBag.Dag
    - Virker det
- Tilføj nuget-pakke MCronberg.CSCourseHelper.Standard
- Ret Index i controller til at hente personer
  - MCronberg.PersonRepositoryRandom r = new MCronberg.PersonRepositoryRandom();
  - return View(r.GetPeople());
- Ret view så det har en model
  - @model List<MCronberg.Person>
- en header
- en div
  - en sub div for hvert navn
- Tilføj lidt css
  - hent semantic-ui med client-side library (libman)
  - træk css til view
  - tilføj class="ui header" til header
  - tilføj class="ui selection animated list" til div
  - tilføj class="item" til subdiv
  - tilføj /styles under wwwroot
    - tilføj app.css
      - body { margin: 50px; }
      - .list { width: 200px; }
      - .valgt { background-color: yellow; }
  - træk app.css til view
    - virker margin?
- Tilføj lidt javascript
  - hent jquery med libman
  - tilføj /scripts til wwwroot
  - tilføj app.js
  - tilføj
    - $(".item").click(function () { $(this).css("background-color", "yellow"); })
  - træk app.js til view
    - virker click på item?
- Tilføj taghelper
  - tilføj @addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers til view
  - tilføj asp-append-version="true" til alle css og script tags
- Brug DI
  - Tilføj til ConfigureServices i startup.cs
    - services.AddScoped<MCronberg.IPersonRepository, MCronberg.PersonRepositoryRandom>();
  - Tilføj til appcontroller.cs
    - private MCronberg.IPersonRepository rep;
    - tilføj constructor(MCronberg.IPersonRepository r)
      - rep = r;
    - ret index metode så den benytter rep
  - Tilføj Dato-klasse til ConfigureServices i startup.cs
    - services.AddSingleton(typeof(Dag));
    - tilføj til constructor og som felt
    - brug objektet i stedet for at kalde model direkte
      - virker det?
    - tilret view med 
      - @inject WebApplication2.models.Dag dag
      - prøv at benytte dag i view
        - virker det

## Razor Pages 
- Blot til orientering
  - "MVC light"
  - [Intro](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-2.1&tabs=visual-studio)

## Model-lag

![](https://cdn.cronberg.dk/kurser/aspnetcore/mvc.png)

### POCO
- En model i MVC er i realiteten blot POCO klasser
- Objekter af klasser har typisk til formål
  - at transportere data mellem lag
  - at binde data fra http kald
    - post/get ind i en controller
    - json (mv) ud af en controller
  - template for oplysninger til brug for brugerflade og validering
  - ligge til grund for autogenereret kode
  - ligge til grund for dynamisk view generering
- Et modellag kan være meget simpelt
  - Forretningslogik
  - Validering
  - ViewModels
- Et modellag kan være meget komplekst
  - Datalag
  - Respository
  - Afkoblet
    - SoC / DI
  
- Simpel POCO

```csharp
using System;

namespace MCronberg.Models
{
    public class Person
    {
        public int PersonId { get; set; }
        public string Navn { get; set; }
        public bool Aktiv { get; set; }
        public int Højde { get; set; }
        public DateTime Fødselsdato { get; set; }
    }
}

```


- Simpel ViewModel

```csharp
namespace MCronberg.Models
{
    public class BrugerViewModel
    {
        public string Brugernavn { get; set; }
        public string Password { get; set; }
        public bool HuskLogin { get; set; }
    }
}

```
- Nogle gange er der behov for at konvertere en (stor) type til en (lille) type
  - [Automapper](http://automapper.org)
  - [Brug i ASP.NET Core 2.x](https://stackoverflow.com/a/53455699)

- Kunne være ORM
  - EF 
    - SQLite: https://github.com/devcronberg/undervisning-db-sqlite
      - services.AddDbContext<SQLiteEF.PeopleContext>();
      - ved scaffolding - husk _viewstart.cshtml i /shared
        - @addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers


### DataAnnotations

- Der findes en del dataannotations relateret til validering, brugerflade, database mv

### Brugerflade
  - Display
    - Hvad skal oplyses om medlemmet
  - Displayformat
    - Eventuel formatering af data
  - DisplayType
    - Hvad er det for en type
      - CreditCard, Date, EmailAdress, ImageUrl
  - UIHint
    - UI Template

```csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace MCronberg.Models.Annotations
{
    public class Person
    {
        [Display(Name ="Det fulde navn")]
        public string Navn { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "ddMMyyyy")]
        public DateTime Fødselsdato { get; set; }

        [DataType(DataType.MultilineText)]
        public string Beskrivelse { get; set; }

    }
}

```

- Benytter taghelper til label, input mv
  - asp-for="Navn"

### Validering
  - Required
  - Range
  - StringLength
  - RegularExpression
  - Compare

```csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace MCronberg.Models.Validering
{
    public class Person
    {
        [Required]
        public string Navn { get; set; }

        [Range(10, 220, ErrorMessage = "Forkert højde")]
        public int Højde { get; set; }

        [StringLength(50, MinimumLength = 5)]
        public string Beskrivelse { get; set; }

    }
}

```
- benytter 
  - asp-for="..."
- Validering på klienten kræver 
  - jquery
  - jquery.validate
  - jquery.validate.unobtrusive

- Valdering på serveren kan ske med
  - ModelState.IsValid

### Entity Framework

- Oplagt data/modellag
- Kom nemt igang med [SQLite](https://github.com/devcronberg/undervisning-db-sqlite)
  - [DB Browser for SQLite](https://sqlitebrowser.org/)

### Repository-pattern

- Muligheden for, at en del af et objekts funktionalitet kommer fra et eksternt objekt - typisk i forbindelse med en constructor
- Dependency tree
  - et objekt kan være afhængig af et andet - som igen bliver brugt flere steder
- ConfigureServices i startup.cs kan bruges til at registrere services
  - Lifetime
    - AddScoped: per request
    - AddTransient: objekt oprettes hver gang
    - AddSingleton: kun et objekt i hele app
- Herefter kan services tilgås 
  - i controller og andre services
    - constructor
  - i view
    - @inject 

```csharp
services.AddScoped<IRepository, Repository>();
services.AddDbContext<Context>();
services.AddSingleton(typeof(Klasse));

services.AddTransient<IRepository>((i) =>
{                
    if (DateTime.Now.Millisecond % 2 == 0)
    {
        return new Repository1();
    }
    else
    {
        return new Repository2();
    }
});
```
## Controller-lag

![](https://cdn.cronberg.dk/kurser/aspnetcore/mvc.png)

### Action metoder

- en controller skal hedder [navn]Controller
- en controller arver fra Controller
- en controller bør ikke indeholde 
  - forretningslogik (data mv)
  - logik til vire generering
- en controller består af action metoder
  - returnerer en instans af IActionResult
    - Task<IActionResult>
  - baseklassen ActionResult er nedarvet til et hav af andre klasser
    - ViewResult 
    - RedirectResult
    - ContentResult
    - mv
- en controller stiller en masse hjælpemetoder til rådighed
  - View()
  - Redirect()
  - mv
- en controller (og dens metoder) kan have attributter
  - [NonController]
  - [AutoValidateAntiforgeryToken]
  - [RequireHttps]

- en controller er en alm. klasse der nemt kan testes

- en controller kan indeholde async action metoder
  - [Super god forklaring på hvorfor man (ikke) burde bruge det](https://stackoverflow.com/a/48023725)

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MCronberg.Controllers
{
    public class MinController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Index2()
        {
            // Gør noget async
            await Task.Run(() => { });

            return View();
        }        
    }
}
```


### Result-objekter
- ViewResult (View)
- JsonResult (Json)
- RedirectToActionResult (RedirectToAction)
- RedirectToRouteResult (RedirectToRoute)
- RedirectResult (Redirect)
- StatusCodeResult (StatusCode)
- UnauthorizedResult (Unauthorized)
- FileResult (File)
- ForbidResult (Forbid)
- NotFoundResult (NotFound)
- PartialViewResult (PartialView)
- UnauthorizedResult (Unauthorized)
- ContentResult (Content)
- EmptyResult

```csharp
using a300_controllers.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace a300_controllers.Controllers
{
    public class ResultDemoController : Controller
    {
        public IActionResult ViewDemo1()
        {
            return View();
        }

        public IActionResult ViewDemo2()
        {
            // bør ikke være her - skal komme fra model/respository/di
            Person p = new Person() { Alder = 15, Navn = "a" }; 

            return View(p);
        }

        public IActionResult JsonDemo()
        {
            // bør ikke være her - skal komme fra model/respository/di
            Person p = new Person() { Alder = 15, Navn = "a" };
            return Json(p);
        }

        public async Task<IActionResult> JsonDemoAsync()
        {
            Person p = await Task.Run<Person>(() => new Person() { Alder = 15, Navn = "a" });
            return Json(p);
        }
        
        public IActionResult StatusCodeDemo()
        {
            return StatusCode(500, "Fejl");
        }

        public IActionResult RedirectDemo1()
        {
            return Redirect("http://www.google.dk");
        }

        public IActionResult RedirectDemo2()
        {
            return RedirectToAction("ViewDemo");
        }

        public IActionResult RedirectDemo3()
        {
            return RedirectToAction("ViewDemo", "ResultDemoController");
        }

    }
}
```



### ViewResult

- Sikkert mest benyttede
- Oprettes nemmest ved at benytte View-(hjælpe)metoden

Egenskaber på Microsoft.AspNetCore.Mvc.ViewResult

| Navn        | Tilgang | Type                                                      |
| ----------- | ------- | --------------------------------------------------------- |
| ContentType | Get/Set | System.String                                             |
| Model       | Get     | System.Object                                             |
| StatusCode  | Get/Set | System.Nullable<System.Int32>                             |
| TempData    | Get/Set | Microsoft.AspNetCore.Mvc.ViewFeatures.ITempDataDictionary |
| ViewData    | Get/Set | Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary  |
| ViewEngine  | Get/Set | Microsoft.AspNetCore.Mvc.ViewEngines.IViewEngine          |
| ViewName    | Get/Set | System.String                                             |

- Send data til view som

- Model (evt. anonymt som ExpandoObject)


- ViewBag

```csharp
public IActionResult ViewbagDemo()
{
    ViewBag.navn = "a";
    ViewBag.alder = 10;
    return View();
}

```


- ViewData (gammel - glem den)
- TempData (brugt i redirects - saved until read)
- (Session)

### Model binding

- En action metode kan automatisk binde data til parametre til metoden. Binder til
  - Primitive værdier
  - Samlinger
  - Simple og komplekse objekter
    - Samlinger af samme

- Den indbyggende modelbinder binder data fra

  - Form
  - Route
  - Query String

- Forskellige attributter kan hjælpe

  - [BindRequired]
  - [Bind]
  - [BindNever]
  - [FromHeader], [FromQuery], [FromRoute], [FromForm]
  - [FromServices]
  - [FromBody]
  - [ModelBinder]

### Demo af modelbinding

- Forudsat at denne model er tilgængelig

```csharp
namespace a300_controllers.Models
{
    public class Person
    {
        public string Navn { get; set; }
        public int Alder { get; set; }
    }
}

```


- og denne HTML (som poster til de forskellige action metoder)

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Demo</title>
</head>
<body>
    <form action="/Bindingdemo/FrmDemo" method="post">
        <div>
            Navn: <input type="text" id="navn" name="navn" />
        </div>
        <div>
            Alder: <input type="text" id="alder" name="alder" />
        </div>
        <div>
            <input type="submit" id="submit" name="submit" value="send" />
        </div>
    </form>
</body>
</html>

```


- er dette et eksempel på model binding

```csharp
using a300_controllers.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace a300_controllers.Controllers
{
    public class BindingDemoController : Controller
    {          
        
        public IActionResult FrmDemo(IFormCollection frm)
        {
            return View();
        }
        
                
        public IActionResult ParameterDemo(string navn, int? alder)
        {
            return View();
        }

        
        public IActionResult ObjectDemo(Person p)
        {
            return View();
        }

        public async Task<IActionResult> ExplitcitDemo()
        {
            Person o = new Person();
            bool r = await TryUpdateModelAsync<Person>(o);
            return View();            
        }

        public IActionResult ValidateDemo(Person p)
        {
            if (ModelState.IsValid) {
                return Redirect("index");
            } else {
                return View();
            }            
        }
    }
}
```


- Bemærk Explit binding og brug af ModelState

- ModelBinding er ret avanceret og kan binde til 
  - Lister af primitive værdier
    - http://...?lst=test1&lst=test2&lst&test3
  - Lister af objekter
    - http://...?[0].navn=a&[0].alder=15&[1].navn=b&[1].alder=10

- Pas på med overposting

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace a300_controllers.Models
{
    public class Bruger
    {
        public string Brugernavn { get; set; }
        public string BrugerId { get; set; }
        public bool ErAdministrator { get; set; }
    }
}

```


- Bemærk Bind[]

```csharp
public IActionResult Index([Bind(include: "Brugernavn,BrugerId")] Bruger b)
{
    return View();
}

```


### Action filtre

- Genbrug logik ifbm med action metoder
- Forskellige typer
  - Authorization (kører før alt andet)
  - Action (før eller efter metode)
  - Result (før eller efter view)
  - Exception (efter en fejl)
  - Services (i forbindelse med di)
- Attributter
- Nem at skabe sine egne
- En del indbygget
  - HttpsRequired
  - HttpGet
  - HttpPost
  - ResponseCaching

```csharp
using Microsoft.AspNetCore.Mvc;

namespace a300_controllers.Controllers
{
    [RequireHttps]
    public class FiltreController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(int? værdi)
        {
            return View();
        }

        [ResponseCache(Duration = 20)]
        public IActionResult Index2()
        {
            return View();
        }

    }
}
```


- Kører på 
  - metode niveau
  - klasse niveau
  - globalt niveau (startup.cs)

```csharp
public void ConfigureServices(IServiceCollection services)
{

    services.AddMvc(options =>
    {
options.Filters.Add(new RequireHttpsAttribute());
    });

    AppSettings settings = new AppSettings();
    Configuration.Bind("Settings", settings);
    services.AddSingleton(settings);
}

```


- Nemt at skabe sine egne

```csharp
using Microsoft.AspNetCore.Mvc.Filters;

public class AddHeaderAttribute : ResultFilterAttribute
{
    private readonly string _name;
    private readonly string _value;

    public AddHeaderAttribute(string name, string value)
    {
        _name = name;
        _value = value;
    }

    public override void OnResultExecuting(ResultExecutingContext context)
    {
        context.HttpContext.Response.Headers.Add(
            _name, new string[] { _value });
        base.OnResultExecuting(context);
    }
}
```


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace a300_controllers.Controllers
{
    public class AttributeDemoController : Controller
    {
        [AddHeader("forfatter", "cronberg")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
```

## Rute

![](http://cdn.cronberg.dk/kurser/webapp/webdev.png)

### Forskellige måder at styre rute definition

- konventionel rute
  - opbygning af en rute tabel
  - traditionel (MVC1 =>)
  - baseret på konvention
  - simpel at skabe men kan være kompleks at vedligeholde
- rute baseret på attributter
  - angivelse af rute direkte på action metoder
  - kræver en del kode (attributter)
  - kan være lidt svær at overskue fordi definition er spredt i filer/klasser
  - meget simpelt og forståeligt
  - nok mest brugt

### Konventionel ruteopsætning

- Opsætning i startup.cs

```csharp
app.UseMvcWithDefaultRoute()
```
- som i virkeligheden svarer til

```csharp
app.UseMvc(routes =>
{
    routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
});
```

- Ønsker man ingen konventionel rute (attribute)

```csharp
app.UseMvc();
```

- I den default rute ({controller=Home}/{action=Index}/{id?}) er
  - Home = HomeController
  - Index = Index-metoden (Action metode)
  - Id? = parameter til modelbinding (optional)

- Der er frit valg fsva template - eksempelvis

```csharp
app.UseMvc(routes =>
{
    routes.MapRoute("default", "{action}", defaults: new { Controller="Home", Action = "Index" });
});
```

- hvor default er Home/Index med eksempelvis /Test vil ramme /Home/Test

- Kan også tilføje constrains

```csharp
app.UseMvc(routes =>
{
    routes.MapRoute(
        name: "default",
        template: "{action}/{id}",
        defaults: new { Controller = "Home", Action = "Index" },
        constraints: new { id = @"\d+" }
    );
});
```
- Her vil /Index/1 ramme home/index med id=1 men /Index/1a virker ikke (id != tal)

- Der findes også en "catch all"

```csharp
app.UseMvc(routes =>
{
    routes.MapRoute(
        name: "default",
        template: "{action}/{id}/{*q}",
        defaults: new { Controller = "Home", Action = "Index" },
        constraints: new { id = @"\d+" }
    );
});
```

- nu virker /Index/1/a/b/2 og q kan benyttes ved modelbindig

- Bemærk, at rækkefølge er vigtig!!

```csharp
app.UseMvc(routes =>
{

    routes.MapRoute(
        name: "r1",
        template: "{id?}",
        defaults: new { Controller = "Simple", Action = "Index" }
    );

    routes.MapRoute(
        name: "r2",
        template: "{controller}/{action}/{id?}",
        defaults: new { Controller = "Home", Action = "Index" }                    
    );
});
```

- Her rammer
  - /  = Simple/Index
  - /a = Simple/Index
  - /Home/Index = Home/Index

- men vendes de om 

```csharp
app.UseMvc(routes =>
{

    routes.MapRoute(
        name: "r2",
        template: "{controller}/{action}/{id?}",
        defaults: new { Controller = "Home", Action = "Index" }                    
    );

    routes.MapRoute(
        name: "r1",
        template: "{id?}",
        defaults: new { Controller = "Simple", Action = "Index" }
    );

});
```

- så rammer alt Home/Index

### Attribute routing

Rute styret gennem attributter - meget nemmere end standard rute. Sættes blot op gennem

```csharp
app.UseMvc();
```

Brug attributter over metoder

```csharp
[Route("~/")]       // rod 
public IActionResult Index() 
{
    return View();
}
```

Her en meget brugt rute - id er optional og bundet automatisk til id parameteren (bemærk - nullable)

```csharp
[Route("~/{id?}")]      
// eller bedre [HttpGet("~/{id?}")]      
public IActionResult Index(int? id) 
{
    return View();
}
```

Mange muligheder

```csharp
[HttpGet("~/")]
[HttpGet("~/{id?}")]
[HttpGet("salg/{aar}/{mdr}")]
[HttpGet("salg/{aar:int}/{mdr:int}")]
[HttpGet("[action]/{aar:int}/{mdr:int}")]
```

Se de mange constraints på 

https://devblogs.microsoft.com/aspnet/attribute-routing-in-asp-net-mvc-5/#route-constraints

```csharp
[HttpGet("[action]/{aar:range(2000,2020)}/{mdr:range(1,12)}")]
```

Attributter kan også placeres på controller-klassen.

## View-lag

![](http://cdn.cronberg.dk/kurser/webapp/webdev.png)

### Views

- Typisk returneres HTML men der kan jo også returneres
  - JSON
  - XML
  - Billede
  - Fil
  - Zip
  - Csv
  - mv
- Det kan jo genereres i controller men razor (@) kan også bruges

## Razor

- Andre view engines findes - men Razor er mest benyttet
- @ = c# kode
- Fra opmærkningsmode til kodemode til opmærkningsmode til....
  - Brug evt text-opmærkning
- Alt er encoded som default
	- @Html.Raw

```html
	
@* kommentar *@

@{

    // kode blok
    int i = 10;
    i++;

    string navn = "mikkel";
    int alder = 15;

    string[] liste = { "mikkel", "mathias", "lene" };
}

<div>@i</div>

<div>@navn  er @alder  år</div>

<ul>
    @foreach (var item in liste)
    {
        <li>@item</li>
    }
</ul>

@if (DateTime.Now.Millisecond % 2 == 0)
{
    <tect>Lige</tect>
}
else
{
    <tect>Ulige</tect>
}

@(DateTime.Now.Millisecond % 2 == 0 ? "Lige" : "Ulige")

@{

    string classname1 = null;
    string classname2 = "";
    string classname3 = "sort";
}

<span class="@classname1">1</span>   <!-- class er væk -->
<span class="@classname2">2</span>   <!-- class = "" -->
<span class="@classname3">3</span>   <!-- class = "sort" -->

@{
    bool o1 = true;
    bool o2 = false;
}

<input type="checkbox" checked="@o1" /> <!-- checked = checked -->
<input type="checkbox" checked="@o2" /> <!-- checked er væk-->

<!-- ~= root -->
<script src="~/Script/app.js"></script>

@functions{
    public string Time() {
        return DateTime.Now.ToLongTimeString();
    }
}

<div>@Time()</div>
```

### Fra controller til view
- ViewBag
- ViewData (gammel)
- brug af dynamic
	- Expando
- Typestærkt

### Hjælpemetoder
- @Html
- @Url

- System.Web.Mvc.HtmlHelper<TModel>
	- LinkExtensions (a-tag)
		- ActionLink
		- RouteLink
	- FormExtensions
		- @using(Html.BeginForm){}
	- LabelExtensions
	  - LabelFor		
	- DisplayExtensions
		- DisplayFor
		- DisplayTextFor
		- DisplayNameFor
	- EditorExtensions
		- EditorFor
		- EditorForModel
	- InputExtensions
		- CheckBoxFor
		- HiddenFor
		- PasswordFor
		- RadioButtonFor
		- TextBoxFor
	- SelectExtensions
		- DropDopListFor
		- EnumDropDownListFor
		- ListBoxFor
	- Validation
		- ValidationMessageFor
		- ValidationSummary

- System.Web.Mvc.UrlHelper
	- Action
	- RouteUrl

- Nemt at skabe sine egne

```csharp
public static class MyHelpers
{
    public static HtmlString SubmitButton(this IHtmlHelper html, string name, string text) {
        return new HtmlString($"<input type='submit' value='{text}' name='{name}' id='{name}' />");
    }
}
```

### Taghelpers

- Anchor 
	- a
- Cache
	- Cache af html
- Environment 
	- dev, staging, prod
	- Forskelige måder at sætte variabel
		- VS under egenskaber på projekt/debug
- Form 
	- Formular
- Image
	- Cache busting
- Input
	- input kontroller
- Label
	- label kontrol
- Partial
	- partial views
- Select
	- liste
- TextArea
	- TextArea
- Validation
  - valideringsmeddelelser

```html
<a asp-action="index" asp-controller="home">Test</a>

<cache expires-after="@TimeSpan.FromSeconds(5)">@DateTime.Now</cache>

<environment names="Development">
    <strong>Dev</strong>
</environment>

<environment names="Production">
    <strong>Prod</strong>
</environment>

<form asp-controller="Html" asp-action="Test" method="post">
    <!-- Input and Submit elements -->
</form>

<img src="~/billeder/billed.png" asp-append-version="true" alt="Alternate Text" />

<input asp-for="Navn" />
<label asp-for="Navn"></label>

<partial name="liste1" />
<partial name="liste2" model="new Liste() { Fra = 10, Til = 20 }" />

@{
    List<SelectListItem> lande = new List<SelectListItem>() {
    new SelectListItem() { Text = "Danmark", Value = "DK" },
    new SelectListItem() { Text = "Sverige", Value = "SE" },
    new SelectListItem() { Text = "Norge", Value = "NO" }
};


}

<select asp-for="Land" asp-items="lande"></select>

<textarea asp-for="Navn"></textarea>

<span asp-validation-for="Navn"></span>
<div asp-validation-summary="All"></div>
```

### Egne taghelpers

- Relativ simpel programmeringsmodeæ
	- husk @addTagHelper *, [ns]

```csharp
public class TidTagHelper : TagHelper
{
    public bool LangtFormat { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Attributes.Add("class", "minTid");
        if(LangtFormat)
            output.Content.SetContent(DateTime.Now.ToLongTimeString());
        else
            output.Content.SetContent(DateTime.Now.ToShortTimeString());
    }
}
```

```
<tid langt-format="false"></tid>
```

```csharp
public class PersonTagHelper : TagHelper
{
    public Person PersonModel { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "div";
        output.Content.SetHtmlContent(
            $@"{PersonModel.Navn} er {PersonModel.Højde} cm høj og bor i {PersonModel.Land}");
        output.TagMode = TagMode.StartTagAndEndTag;
    }
}
```

```
<person person-model='new Person() { Navn = "a", Højde=100, Land = "DK" }' />
```



### Partial

- partial views er typisk generering af simpel html - med eller uden model
- placeres typisk i /shared 
```html
<ul>
    @for (int i = 0; i < 10; i++)
    {
        <li>@i</li>
    }
</ul>
```

```html
@model Liste
<ul>
    @for (int i = Model.Fra; i < Model.Til + 1; i++)
    {
        <li>@i</li>
    }
</ul>
```

```html
<partial name="liste1" />
<partial name="liste2" model="new Liste() { Fra = 10, Til = 20 }" />
```

### View Components
- moderne "partial" view
  - menu
  - indkøbskurv
  - sidebar
  - lister af data
- består af et view og en klasse
  - egner sig bedre til kode end partial
- skal placeres i /Shared/Components/[Navn]/default.cshtml 
- kan benyttes gennem 
  - Component.InvokeAsync
  - taghelper (vc)
    - Husk @addTagHelper *, MyWebApp

```csharp
public class PersonerViewComponent : ViewComponent {

    public IViewComponentResult Invoke(int antal)
    {
        var p = new List<Person>();
        for (int i = 0; i < antal; i++)
        {
            p.Add(new Person() { PersonId = i + 1, Navn = ((char)(i + 65)).ToString() });
        }
        return View(p);
    }
}
```

```html
@model List<Person>

<h1>Personer</h1>
<ul>
    @foreach (var item in Model)
    {
        <li>@item.Navn</li>
    }
</ul>
```

```html
@await  Component.InvokeAsync("Personer", new { antal = 10})
<vc:personer antal="4"></vc:personer>
```

### Layout

![](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/layout/_static/page-layout.png?view=aspnetcore-2.1)


- Brug af "master page"
  - Layout
- i Layout 
  - @RenderBody()
  - @RenderSection()
- Tilføj side med reference til layout
  - Layout = "~/Views/Shared/layout.cshtml";
  - _ViewStart.cshtml
    - @Layout = "_Layout";

### DI til views

- Services kan evt benyttes direkte i views
  - bør kun benyttes med app/settings relaterede data
  - services.AddTransient<LandeService>();
  - @inject LandeService lande
  - brug lande.[metode] i views

## Configuration

Simpel configuration kan opnås med appsettings.json

```json
{
  "Logging": {
    "IncludeScopes": false,
    "LogLevel": {
      "Default": "Debug"
    }
  },
  "Settings": {
    "Setting1": 1,
    "Setting2": "Test1",
    "UnderSetting1": {
      "Setting1":  1
    }
  }
}
```

Den simple tilgang er typesvag

- inject IConfiguration i controller
- brug config[":key"]

```csharp
ViewBag.s1 = config["Settings:Setting1"];
ViewBag.s2 = config["Settings:UnderSetting1:Setting1"];

```

Den lidt mere avancerede er typestærk tilgang

```csharp
public class AppSettings
  {
      public int Setting1 { get; set; }
      public string Setting2 { get; set; }
      public AppSettingsDel Undersetting1 { get; set; } = new AppSettingsDel();
  }

  public class AppSettingsDel
  {
      public int Setting1 { get; set; }
  }
```

og bindes i startup

```csharp
AppSettings settings = new AppSettings();
Configuration.Bind("Settings", settings);
services.AddSingleton(settings);
```

settings er herefter injected i controllere og skaber typestærk tilgang til setting<!-- { templatetype:'header', templateappversion:'1', defaultfolder:'C:\\git-undervisning\\mcronberg\\undervisning-introblazor\\noter' } -->

# Blazor

## Grundlæggende om Blazor  <!-- { templatetype:'timing', tid: 15, opgave: 45 } -->

Blazor blev frigivet i første version i 2018 (2<!-- { templatetype:'function', namespace:'Cronberg.TemplateApp.Core', methodname: 'Years', arguments:'2018' } --> år siden) - først i en server version og efterfølgende i en WASM og en PWA version. Der er ligeledes planer om en Hybrid version (Electron) og en Native (iOS/Android)

![](https://cdn.cronberg.dk/kurser/blazor/blazorversioner.png)

Hverken Hybrid eller [Native](https://devblogs.microsoft.com/aspnet/hybrid-blazor-apps-in-mobile-blazor-bindings-july-update/) er endnu ikke frigivet, men de andre er en del af VS 2019 > v 16.6

Blazor er
- Et [SPA](https://en.wikipedia.org/wiki/Single-page_application) framework
  - Komponenter
  - Databinding
  - State
  - Route
  - JS Interop
- [Open source](https://github.com/dotnet/aspnetcore/tree/master/src/Components)
  - del af [.NET Foundation](https://dotnetfoundation.org/)


- Blazor Server
  - Del af ASP.NET Core 3 (Razor Pages)
  - Benytter [SignalR](https://dotnet.microsoft.com/apps/aspnet/signalr) (primært websockes - [demo](http://www.websocket.org/echo.html)) [se eksempel](https://github.com/devcronberg/SignalRDemo) som tunnel mellem server og klient
    - UI genereres på server og ændringer (diff) pushe's til klient via SignalR
    - UI opdateres via JavaScript
- Blazor WebAssembly (Blazor WASM)
  - Frigivet i 1. version i forår 2020
  - Benytter en WASM ([se eksempel](https://github.com/devcronberg/sap-webapp)) kompileret .NET runtime (baseret på Mono) i browseren
    - Runtime forstår .NET Assemblies og IL 
      - Det er ikke C# der afvikles i browseren men IL
    - Da WASM endnu ikke har adgang til DOM sker der en del JS interop kald
- Blazor [PWA](https://en.wikipedia.org/wiki/Progressive_web_application) ([demo](https://pwa.sprinkle.space/))
  - Addon til Blazor WASM
    - tilføjer bla manifest-filer mv

Dave Glick (https://daveaglick.com) har skrevet en god artikel om hvordan det hele er skruet sammen - læs [Blazor, Razor, WebAssembly, and Mono](https://daveaglick.com/posts/blazor-razor-webassembly-and-mono), men grundlæggende...

### JavaScript

Sådan fungerer JavaScript

- JS -> Parser / Tokens -> Compiler / AST -> ByteCode -> JIT

![](https://daveaglick.com/posts/images/js.png)

### WebAssembly

- ByteCode -> JIT

![](https://daveaglick.com/posts/images/webassembly.png)

### Blazor WASM

- C# -> IL -> Mono i WASM version -> JIT

![](https://daveaglick.com/posts/images/blazor.png)

Alle billeder er fra https://daveaglick.com/posts/blazor-razor-webassembly-and-mono

## Blazor vs JS-SPA 

| Blazor (Server/WASM)                | SPA (Angular, React, Vue, Ember)   |
| ----------------------------------- | ---------------------------------- |
| + C#                                | + Gammel teknologi                 |
| + .NET komponenter                  | + Modent produkt                   |
| + Tooling og debugging (?) (WASM!)  | + Masser af udviklere og eksempler |
| + MS produkt                        | + JS / TS                          |
| + Hastighed (WASM)                  | + Fuld tilgang til DOM mv          |
| + PWA, Elektron, Native             | - Hastighed                        |
| - Ny teknologi / umodent            | - Komplekst                        |
| - Tooling (?)                       | - JS / TS                          |
| - Svært at finde udviklere          |                                    |
| - Udfordringer ved DOM mv (interop) |                                    |
| - Komplekst                         |                                    |


## Server vs WASM

| Server                                | WASM                                         |
| ------------------------------------- | -------------------------------------------- |
| + adgang til alle server komponenter  | + "ægte" SPA                                 |
| + tooling og debugging                | + ingen server                               |
| + lille download til klient           | + ingen dependency til .NET                  |
| + bedre support for ældre browsere    | - app er begrænset til browserens muligheder |
| + kode er på server og ikke på klient | - kun nyere browesere                        |
| - netværkskommunikation               | - stor download (dog cache)                  |
| - ingen offline                       | - udfordringer med tooling og debugging      |
| - mulige problemer med scalering      | - mangler UI komponenter (JS Interop)        |
| - kræver en web server                |                                              |
| - mangler UI komponenter (JS Interop) |                                              |

Fsva load og scalering se https://devblogs.microsoft.com/aspnet/blazor-server-in-net-core-3-0-scenarios-and-performance
  - På en Azure Standard D1 (1 vCPU, 3.5 GB memory) = 5.000 samtidige brugere
  - På en Azure Standard D3 (4 vCPU, 14 GB memory) = 20.000 samtidige brugere

## Forudsætning for Blazor

### Web

- HTML
- CSS
- PWA
- (JavaScript)

### Værktøj

- Visual Studio 
- Visual Studio Code

### C# 

- Blazor benytter derfor C# 8.+
  - ? operator
    - [obj]?.ToString()
  - ?? operator
    - [obj]?.ToString() ?? ""
  - Auto properties og initialisering
  - String templates
  - Initialisering
  - navngivne argumenter
  - Extensionsmethods
  - Lambda  
  - metoder i metoder 
  - anonyme typer
  - Task / async/await
  - Attributter


## Prøv Blazor

Hent projekt skabeloner fra https://github.com/devcronberg/MCronberg.DotNetTemplate og kør dotnet_install.bat.

### Blazor server

Prøv at afvikle

```
blazorserver_start.bat
```

Det skaber en SAP (simple as possible) Blazor Server app. Prøv applikationen og bemærk websocket kommunikation i Network -> WS.

Bemærk herefter:

- /program.cs
  - Opstart
- /wwwroot
  - Statiske filer
- /app.razor
  - Opsætning af rute til selve app
- /pages/_Host.cshtml
  - SPA skabelon
  - Bemærk app-komponent
- /pages/index.razor
  - Komponent til ruten /

### Blazor WASM

Prøv at afvikle

```
blazorwasm_start.bat
```

Det skaber en SAP (simple as possible) Blazor WASM app. Prøv applikationen og bemærk download af CLI (cache)

Bemærk:

- /program.cs
  - Opstart
- /wwwroot
  - index.html 
    - SPA skabelon - bemærk app-komponent
- /app.razor
  - Opsætning af rute til selve app
- /pages/index.razor
  - Komponent til ruten /

-------

## Blazor intro

Blazor er et IL komponent baseret SPA framework
  - Komponentbaseret
    - Deles mellem forskellige app typer (samt NuGet)
    - .NET Standard 2.1
    - .razor filer
  - Hændelsesbaseret
  - Tilstand via DI eller JS local storage
  - JavaScript interop
    - Fra il til js
    - Fra js til il

## Komponentbaseret

En komponent (.razor) kan have kode i selve komponenten

```html
<hr />
<h3>Random 1</h3>
<div>@Tal</div>
<hr />
@code {
    public int Tal { get; private set; }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        this.Tal = new Random().Next(1, 1000);
    }
}
```
En komponent (.razor) kan have kode i en fil for sig selv


```csharp
using System;

namespace BlazorServerDemo.Components
{
    public partial class Random3
    {
        public int Tal { get; private set; }

        protected override void OnInitialized()
        {
            base.OnInitialized();
            this.Tal = new Random().Next(1, 1000);
        }

    }
}
```
Der er en del metoder der kan overskrives relateteret til komponentens livscyklus

- SetParametersAsync
- OnInitialized / OnInitializedAsync
- OnParametersSet / OnParametersSetAsync
- OnAfterRender / OnAfterRenderAsync

Der findes overordnet to typer af komponenter

- Rutebaserede komponenter
- Nestede komponenter

## Rutebaserede komponenter

Definering sker i App.razor

Uden master layout

```html
<Router AppAssembly="typeof(Startup).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="@routeData" />
    </Found>
    <NotFound>
        <p>Sorry, there's nothing at this address.</p>
    </NotFound>
</Router>
```
Med master layout

```html
<Router AppAssembly="typeof(Startup).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="@routeData" DefaultLayout="@typeof(MainLayout)" />
    </Found>
    <NotFound>
        <p>Sorry, there's nothing at this address.</p>
    </NotFound>
</Router>
```


### Definition

I toppen af en komponent kan ruten angives med 

```csharp
@page "/..."
```

og der kan evt angives parametre 

```csharp
@page "/.../{navn1}/{navn2}"
```

Parametre defineres i sidens egenskaber med attributter

```csharp
@page "/.../{text}"
```

```csharp
@code {

    [Parameter]
    public string Text { get; set; }

}
```

Rute kan dekoreres med constraint attributter som MVC 

```
@page "/Bruger/{Id:int}"
```

Se https://docs.microsoft.com/en-us/aspnet/core/blazor/fundamentals/routing?view=aspnetcore-3.1#route-constraints

## Nestede komponenter

En nested komponent er blot en razor fil uden rute definition

Her er en komponent embedded i forsiden:

```html
<h3>Test</h3>
```

```html
@page "/"
<Test1></Test1>
```

Eventuelle parametre kan skabes ved hjælp af egenskaber og tilhørede parametre

```html
<h3>Test</h3>
<p>@Tekst</p>

@code {

    [Parameter]
    public string Tekst { get; set; }

}
```

```html
<Test1 Tekst="aaa"></Test1>
```

"Børn" kan kommunikere med "mor" på flere måder

- via events

```html
<h3>Test</h3>

<button @onclick="@(() => OnClick.InvokeAsync("Fra barm til mor"))">Klik</button>

@code {

    [Parameter] public EventCallback<string> OnClick { get; set; }

}
```

```html
@page "/"

<Test1 OnClick="@((e)=>barnSiger=e)"></Test1>
<div>@barnSiger</div>

@code {
    string barnSiger;
}

```

- via DI 

```csharp
public class AppState
{
    public string Guid { get; private set; }

    public async Task SetGuid(string guid) {
        Guid = guid.ToString();
        OnChange?.Invoke();
    }

    public event Action OnChange;
}
```

```csharp
// startup
services.AddScoped<AppState>();

// Husk at Blazor Server forstår Scoped (connection) medens WASM kun ser singleton!
```

```html
@inject AppState appState

<h3>Test</h3>

<button @onclick="Klik">Klik</button>

@code {

    async Task Klik() {
        await appState.SetGuid(Guid.NewGuid().ToString());
        
    }
}
```

```html
@page "/"
@inject AppState appState

<Test1></Test1>
<div>@appState.Guid</div>

@code {

    protected override Task OnInitializedAsync()
    {
        appState.OnChange += Update;
        return base.OnInitializedAsync();
    }

    private async void Update()
    {                
        await InvokeAsync(() => StateHasChanged());
    }
}
```

## Indbyggede komponenter

Der findes flere indbyggede komponenter som kan mappes mod en model

- EditForm 
  - HandleValidSubmit

- InputText
- InputTextArea
- InputSelect<TValue>
- InputNumber<TValue>
- InputCheckbox
- InputDate<TValue>

- ValidationMessage<TValue>
- ValidationSummary

Komponenterne bindes mod en egenskab med @bind-Value, og skal placeres i en EditForm

```html
@page "/"
@using System.ComponentModel.DataAnnotations 

<EditForm Model="person" OnValidSubmit="Send">
    <DataAnnotationsValidator />

    <p>
        <label>
            Navn:
            <InputText @bind-Value="person.Navn" />
        </label>
    </p>
    <p>
        <label>
            Højde:
            <InputNumber @bind-Value="person.Højde" />
        </label>
    </p>

    <p>
        <label>
            Fødselsdato:
            <InputDate @bind-Value="person.Fødselsdato" />
        </label>
    </p>

    <button type="submit">Send</button>

    <ValidationSummary />

</EditForm>


    @code {

        Person person = new Person();
        

        public class Person {

            [Required(ErrorMessage = "Navn skal angives!")]
            public string Navn { get; set; }

            [Required(ErrorMessage = "Højde skal angives!")]
            [Range(50, 250, ErrorMessage = "Forkert højde")]
            public int? Højde { get; set; }

            public DateTime? Fødselsdato { get; set; }
        }

        private async Task Send()
        {
            // Gør noget med person
        }

    }
```

- https://docs.microsoft.com/en-us/aspnet/core/blazor/forms-validation?view=aspnetcore-3.1#built-in-forms-components
- https://jonhilton.net/why-use-blazor-edit-forms/


### Databinding

Simpel databinding sker ved hjælp af @ 

```html
<p>@value</p>
```
eller @bind

```html
<input @bind="value" />
```

Alternativt kan man vælge hvilken hændelse man ønsker (change er default)

```html
<input @bind="value" @bind:event="oninput" />
```

Her er det klassiske databinding eksempel:

```html
<input @bind="Tekst" @bind:event="onchange" type="text" />
<input @bind="Tekst" @bind:event="oninput" type="text" />

<hr />
<p>
    @Tekst?.ToUpper()
</p>

@code {

    public string Tekst { get; set; }


}
```

https://docs.microsoft.com/en-us/aspnet/core/blazor/components/data-binding?view=aspnetcore-3.1

## Event handling

Der findes en masse muligheder for event handling

- Clipboard
- Drag
- Input
- Mouse
- Focus 
- mv

Se https://docs.microsoft.com/en-us/aspnet/core/blazor/components/event-handling?view=aspnetcore-3.1#event-argument-types

### Keyboard

```html
<p>Tæller +'er</p>

<input @onkeypress="KeyHandler" />

<input @onkeypress="KeyHandler" @onkeypress:preventDefault />

<hr />

@Count
@code {
    public int Count { get; set; }
    void KeyHandler(KeyboardEventArgs e) {
        if (e.Key == "+")
        {
            Count++;
        }
    }


}
```

### Fokus

```html
<input type="text" value="" />
<input type="text" @onfocus="Fokus" value="@tekst" />

@code {
    string tekst;
    void Fokus(FocusEventArgs e) {
        tekst = Guid.NewGuid().ToString();
    }
}
```

## Dependency Injection

Ligesom MVC benytter Blazor DI

| Lifetime  | Beskrivelse                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| Scoped    | For Server er scoped baseret på en connection (session). WASM Scoped = Singleton |
| Singleton | Der oprettes udelukkende et objekt                                               |
| Transient | Nyt objekt hver gang                                                             |

Der findes nogle prædefinerede services

- HttpClient (kun WASM)
- IJSRuntime (JS interop)
- NavigationManager (URL og tilstand)

```csharp
// startup
services.AddSingleton<MCronberg.IPersonRepository>(i => new MCronberg.PersonRepositoryRandom());
```

```html
@inject MCronberg.IPersonRepository personRep

<h2>Personer</h2>
<ul>
    @foreach (var item in personRep.GetPeople(10))
    {
        <li>@item.Name</li>
    }
</ul>
```

## Overordnet eksempel - BlazorFinans

https://github.com/devcronberg/BlazorFinans
