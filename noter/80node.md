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

Hent

https://github.com/devcronberg/nodedemo

og læs readme