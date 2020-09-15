

# Vue

Vue er et SPA framework som kan sammenlignes med Angular og React, men er noget mere simpelt at lære.

## Grundlæggende om Vue

Vue er skabt af Evan You (tidligere Google/Angular) i 2013, og nærmer sig sine konkurrenter i popularitet.

Se [http://ithistorie.cronberg.dk](http://ithistorie.cronberg.dk?maerker=vue,det_vi_husker) og [Stack Overflow Survey](https://insights.stackoverflow.com/survey/2020#technology-web-frameworks)

## Brug af Vue

Vue kan - i modsætning til andre SPA frameworks - benyttes på flere måder. Den simple måde er brug af et eller flere vue instance's og databinding direkte på en html-side/js-fil. Den mere avancerede måde kræver en bundler som vue-cli, parcel eller lign., og giver mulighed for at skabe en "rigtig" komponent- og rutebaseret SPA applikation. 


## Brug af Vue uden bundler

Nemmeste måde at komme i gang med Vue er direkte link til et CDN fra en HTML-side. Styring af data mv sker ved hjælp af en instans af Vue-klassen, som er bundet til et element. I sin helt simple form:

```js
var app = new Vue({
  el: "#...",
  data: {
    ...
  },
});
```

Her er et mere komplet eksempel:


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue demo</title>
  </head>
  <body>
    <h1>Simple demo af en Vue-instance</h1>
    <div id="app">
      <p>{{ data_text }}</p>
      <p>{{ computed_text }}</p>
      <p>{{ method_text() }}</p>
    </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    var app = new Vue({
      el: "#app",
      data: {
        // data (felter)
        data_text: "1",
      },
      computed: {
        // egenskab (mulighed for cache hvis data ikke er ændret og dermed bedre styring fra vue)
        computed_text: function () {
          return this.data_text + "2";
        },
      },
      methods: {
        // metoder
        method_text: function () {
          return this.computed_text + "3";
        },
      },
    });
  </script>
</html>

```


### Databinding

Databinding kan ske enten i "rå" form med {{ ... }} eller ved hjælp af direktiver som v-bind. Her er eksempler på brug af flere former for databinding:


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <h1>Simpel databinding</h1>
    <div id="app">{{ message }}</div>
    <h1>Brug af v-bind</h1>
    <div id="app-2">
      <span v-bind:title="message">
        Hover your mouse over me for a few seconds to see my dynamically bound title!
      </span>
    </div>
    <h1>Brug af v-if</h1>
    <div id="app-3">
      <span v-if="seen">Now you see me</span>
    </div>
    <h1>Brug af v-for</h1>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">{{ todo.text }}</li>
      </ol>
    </div>
    <h1>Brug af hændelser</h1>
    <div id="app-5">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message 1</button>
      <button @click="reverseMessage">Reverse Message 2</button>
    </div>
    <h1>Brug af v-model</h1>
    <div id="app-6">
      <p>{{ message }}</p>
      <input v-model="message" />
    </div>
    <h1>Simpel komponent</h1>
    <div id="app-7">
      <ol>
        <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
      </ol>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      var app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue!",
        },
      });

      var app2 = new Vue({
        el: "#app-2",
        data: {
          message: "You loaded this page on " + new Date().toLocaleString(),
        },
      });

      var app3 = new Vue({
        el: "#app-3",
        data: {
          seen: true,
        },
      });

      var app4 = new Vue({
        el: "#app-4",
        data: {
          todos: [
            { text: "Learn JavaScript" },
            { text: "Learn Vue" },
            { text: "Build something awesome" },
          ],
        },
      });

      var app5 = new Vue({
        el: "#app-5",
        data: {
          message: "Hello Vue.js!",
        },
        methods: {
          reverseMessage: function () {
            this.message = this.message.split("").reverse().join("");
          },
        },
      });

      var app6 = new Vue({
        el: "#app-6",
        data: {
          message: "Hello Vue!",
        },
      });

      Vue.component("todo-item", {
        props: ["todo"],
        template: "<li>{{ todo.text }}</li>",
      });

      var app7 = new Vue({
        el: "#app-7",
        data: {
          groceryList: [
            { id: 0, text: "Vegetables" },
            { id: 1, text: "Cheese" },
            { id: 2, text: "Whatever else humans are supposed to eat" },
          ],
        },
      });
    </script>
  </body>
</html>

```


## Brug af Vue med bundler

Vue er et komponentbaseret framework med de fordele ifbm indkapsling som det giver, men det kræver en bundler. Den nemmeste er [Parcel](https://parceljs.org/) som også giver en masse andre muligheder. 

Start et nyt project i en tom mappe med

```
npm init
npm install parcel --save-dev
```

Prøv nu følgende filer i roden

### index.html


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>

```


### index.js


```javascript
import Vue from "vue";
import App from "./App.vue";

new Vue({ render: (createElement) => createElement(App) }).$mount("#app");

```


### app.vue


```html
<template>
  <div>
    <div>Demo af terning</div>
    <hr />
    <terning></terning>
    <terning snyd="true"></terning>
    <terning snyd="true"></terning>
    <terning startVærdi="1"></terning>
    <terning startVærdi="5" snyd="true"></terning>
    <terning startVærdi="1" snyd="false"></terning>
  </div>
</template>

<script>
import Vue from "vue";
import Terning from "./terning.vue";

export default Vue.extend({
  components: {
    Terning: Terning,
  },
});
</script>

```


### terning.vue


```html
<template>
  <div>
    [ <span :class="{ sekser: erSekser }">{{ værdi }}</span> ] <button @click="ryst">Ryst</button>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      værdi: 1,
    };
  },
  computed: {
    erSekser: function() {
      return this.værdi == 6;
    },
  },

  props: ["startVærdi", "snyd"],
  created: function() {
    if (this.startVærdi === undefined) this.ryst();
    else this.værdi = this.startVærdi;
  },
  methods: {
    ryst: function() {
      if (this.snyd === undefined || this.snyd === false) {
        // mellem 1-6
        this.værdi = Math.floor(Math.random() * 6 + 1);
      } else {
        // mellem 5-6
        this.værdi = Math.floor(Math.random() * 2 + 5);
      }
    },
  },
});
</script>

<style scoped>
.sekser {
  background-color: green;
  color: white;
}
div {
  margin: 5px;
}
</style>

```


Tilret package.json med et script som eksempelvis dev

```json
{
  "name": "undervisning-vue",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel dev index.html "
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "vue": "^2.6.12",
  },
  "devDependencies": {
    "parcel": "^1.12.4",
  }
}
```

og prøv at afvikle applikationen med 

```
npm run dev
```