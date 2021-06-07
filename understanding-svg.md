# SVG

## Understanding Path:
* The `path` element in SVG is the drawing element that can draw anything.
* The path element takes a single attribute `d` that stands for data and describes what it draws and stores the path data.
* `d` attribute holds information such as:
    - Where the drawing starts
    - What direction it moves
    - What shape it follows
    - Where the drawing ends. 
* The `d` attribute use letters that are commands to do something like:
    - M – Moving to the point
    - L – Drawing line
    - C – Drawing a curve
    - Q – Bézier curve
    - Z – Closing the path
* The numbers used with commands are values. These numbers can be separated by commas or spaces.
* There is an UPPERCASE and a lowercase version of the command. The UPPERCASE version is the absolute version and the lowercase is the relative version.
For e.g. `M 100 100` means abolute position or exact coordinates whereas `m 100 100` means move the Pen 100 down and 100 right from your current position.
* Example:
```
<svg class="icon  icon--plus" viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
</svg>
```
* The `C` command takes three points. The first two points define the location of two bezier curve handles. The last of the three points is the end of the curve.
* You can set path data right in CSS:
```
<svg viewBox="0 0 10 10">
  <path d="M2,5 C2,8 8,8 8,5" />
</svg>

<!-- CSS Examples -->

svg:hover path {
  transition: d 0.2s;
  d: path("M2,5 C2,2 8,2 8,5");
}

.svg-1:hover path {
  d: "M8,2 L2,8";
}
.svg-2:hover path {
  d: "M2,2 L5,8 L8,2";
}
```
* To color shapes dynamically:
```js
// Define an array of colors
const colors = ['#f5a147','#51cad8','#112b39'];
// Select the SVG paths
var blobs = document.querySelectorAll("path");

// Randomly apply colors to the SVG fill property
blobs.forEach(blob =&gt; {
  blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});
```

## References:
* https://css-tricks.com/svg-path-syntax-illustrated-guide/


