

# Blazor

## Grundlæggende om Blazor  

Blazor blev frigivet i første version i 2018 (2 år siden) - først i en server version og efterfølgende i en WASM og en PWA version. Der er ligeledes planer om en Hybrid version (Electron) og en Native (iOS/Android)

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

https://github.com/devcronberg/BlazorFinans