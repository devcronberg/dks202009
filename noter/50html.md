

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



```html
<!-- Kommentar... -->

<!--

    Flere kommentarer

-->

```


### Header



```html
<h1>Overskrift 1</h1>
<h2>Overskrift 2</h2>
<h3>Overskrift 3</h3>
<h4>Overskrift 4</h4>
<h5>Overskrift 5</h5>
```


### Paragraph



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



```html
<p>Voluptates ipsam eos <span>totam laudantium</span> cumque repudiandae.</p>

<span>cumque</span>
<span>cumque</span>
<span>cumque</span>
<span>cumque</span>
```


### Formatering (i HTML)

- Der findes b, i, og u opmærkninger men overvej at bruge CSS



```html
<p>Voluptates <b>ipsam</b> eos <u>totam laudantium</u> cumque <i>repudiandae</i>.</p>

<!-- Brug hellere css -->
<p>Voluptates <span class="fed">ipsam</span>
    eos <span class="unders">totam laudantium</span>
    cumque <span class="italic">repudiandae</span>.</p>
```


### Linjeskift og linje

- Der findes br, og hr opmærkninger men brug CSS



```html

<p>lorem <br />ipsum</p>

<p>Lorem</p>
<hr />
<p>Ipsum</p>

```


### Semantik



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



```html

<p>Quia <a href="http://www.google.dk">quas ad</a> sunt odit?</p>
<p>Quia <a href="side2.html">quas ad</a> sunt odit?</p>

<p>Quia <a href="#mitId">quas ad</a> sunt odit?</p>
<h2 id="mitId">Overskrift</h2>

<p>Quia <a href="http://www.google.dk" target="_blank">quas ad</a> sunt odit?</p>

```


### Billeder



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



```html

    <script src="/script/app/app.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.js"></script>

</body>
```

