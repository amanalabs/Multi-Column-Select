<h1>Multi-Column-Select</h1>
[![Code Climate](https://codeclimate.com/repos/54ff00b2695680505900054a/badges/df72ceaf9494c4af73ca/gpa.svg)](https://codeclimate.com/repos/54ff00b2695680505900054a/feed)
[![Codacy Badge](https://www.codacy.com/project/badge/5f56effdd83b494ca6698216704d1d88)](https://www.codacy.com/public/dansmith/Multi-Column-Select)

![alt tag](http://www.djsmith.me/PLUGS/mcs/mcs.jpg)

<h1>Multi-Column-Select</h1>

<p>This component has been updated and is not BC with the old plugin.</p>
<p>NO Longer Requires Jquery</p>

<p>Jquery Release</p>
<p>@see branch: https://github.com/djsmithme/Multi-Column-Select/tree/jquery<br>
<p>@see final release of this branch: https://github.com/djsmithme/Multi-Column-Select/releases/tag/1.0.0 </p>

<p>A Simple plugin (3Kb) that will hide the Select control and then display a multi column dropdown (css)</p>
<p>Uses the original form control so will work if JS is not enabled and the form can be processed as normal</p>

<p>Currently does not work with multiple selects</p>


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
   var mcs = new multiColumnSelect(options);
   mcs.init();
```

<h3>Npm</h3>

<h4>CommonJS module require</h4>
let mutiColumnSelect = require('multi-column-select');
let Msc = new mutiColumnSelect.default(options);
Mcs.init(options);

<h4>ES2015 module import</h4>
import mutiColumnSelect from 'multi-column-select';
var Mcs = new mutiColumnSelect(options);
Mcs.init(options);



<ul>
    <li> Fixed issue with multiple selects </li>
    <li> Added Destroy method </li>
    <li> Remove clear class </li>
    <li> Removed/renamed some plugin settings</li>
</ul>

<h2>Set up your HTML</h2>
```
 <div class="mcs">
     <select name="car" required>
         <option value="Audi">Audi</option>
         <option value="Bugatti" selected>Bugatti</option>
         <option value="Chrysler">Chrysler</option>
         <option value="Daihatsu">Daihatsu</option>
         <option value="Ford">Ford</option>
         <option value="GM">General Motors</option>
         <option value="Honda">Honda</option>
         <option value="Infiniti">Infiniti</option>
     </select>
 </div>
```

<h2>CSS</h2>

This is the HTML that the plugin produces (classed/ID's can be changed in the options):

```
<div class="mcs-container">
	<a id="mcs-1" data="Audi" class="mcs-item active">Audi</a>
	<a id="mcs-2" data="Bugatti" class="mcs-item">Bugatti</a>
	<a id="mcs-3" data="Chrysler" class="mcs-item active">Chrysler</a>
	<a id="mcs-4" data="Daihatsu" class="mcs-item">Daihatsu</a>
	<a id="mcs-5" data="Ford" class="mcs-item">Ford</a>
	<a id="mcs-6" data="GM" class="mcs-item active">General Motors</a>
	<a id="mcs-7" data="Honda" class="mcs-item">Honda</a>
	<a id="mcs-8" data="Infiniti" class="mcs-item">Infiniti</a>
</div>

```
So feel free to style it however you like. 

The only styles to worry about are :

```
.msc-container{} //container
.mcs-container a{} //option replacements.
```

<h2>License</h2>
<p>The MIT License (MIT)</p>
