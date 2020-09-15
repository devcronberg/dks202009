

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

settings er herefter injected i controllere og skaber typestærk tilgang til setting