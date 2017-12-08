<h1>Multi-Column-Select</h1>
<p>This component has been updated and is not BC with the old plugin.</p>
<p>NO Longer Requires Jquery</p>

<p>Jquery Release</p>
<p>@see branch: https://github.com/djsmithme/Multi-Column-Select/tree/jquery<br>
<p>@see final release of this branch: https://github.com/djsmithme/Multi-Column-Select/releases/tag/1.0.0 </p>

<p>A Simple plugin that will hide the Select control and then display a multi column dropdown (css)</p>
<p>Uses the original form control so will work if JS is not enabled and the form can be processed as normal</p>

* Now works with Multiple Selects
* Added option to hide select
* Detects options selected on init.

<h2>Installation</h2>
Download the release from: (github)
https://github.com/djsmithme/Multi-Column-Select/releases/tag/b2.0.0

Or Install via npm:
```
npm multi-column-select --save
```

<h2>Usage</h2>
<h3>Web/Browser</h3>
Include the stylesheets and script.

```
    <link href="multi-column-select.css" rel="stylesheet">
    <script type="text/javascript" src="multiColumnSelect.min.js"></script>
```

Call the script

```
   var mcs = new multiColumnSelect({
      selector: '.mcs',
      container: 'mcs-container',
      init: false,
      hideSelect: false,
      onClick: function(index, value) {},
   });

   //use options.init: false to manually start the component.
   mcs.init();
   mcs.destroy();
```

<h3>Npm</h3>

<h4>CommonJS module require</h4>

```
let mutiColumnSelect = require('multi-column-select');
let Msc = new mutiColumnSelect.default(options);
Mcs.init(options);
```

<h4>ES2015 module import</h4>

```
import mutiColumnSelect from 'multi-column-select';
var Mcs = new mutiColumnSelect(options);
Mcs.init(options);
```

<h2>Set up</h2>

Wrap Select control in div/span with a class name.
```
<div class="mcs">
    <select...>
       <options...>
    </select>
</div>

//generated html
<div class="mcs-container">
    <a href="Audi" data-value="Audi" data-index="0">Audi</a>
    <a href="Bugatti" data-value="Bugatti" data-index="1">Bugatti</a>
    <a href="Chrysler" data-value="Chrysler" data-index="2">Chrysler</a>
    <a href="Daihatsu" data-value="Daihatsu" data-index="3">Daihatsu</a>
    <a href="Ford" data-value="Ford" data-index="4">Ford</a>
    <a href="GM" data-value="GM" data-index="5">General Motors</a>
    <a href="Honda" data-value="Honda" data-index="6">Honda</a>
    <a href="Infiniti" data-value="Infiniti" data-index="7">Infiniti</a>
</div>

```

<h2>License</h2>
<p>The MIT License (MIT)</p>
