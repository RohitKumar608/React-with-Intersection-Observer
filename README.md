## Installation

npm install

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `Description`

The Intersection Observer API is a Web platform API that allows for observing changes to how much of a target element’s area intersects with that of an ancestor element or the viewport. The need for such information has a lot of use cases, such as implementing lazy-loading and infinite scrolling etc.

The Intersection Observer API is used to observe when one element, called the target, intersects either the device viewport or a specified element called root.You can also pass the root as null.if the element isn't a descendant of a scrollable element, the viewport. To watch for intersection relative to the root element, specify null

Think of the browser's viewport and the target element as their own boxes. The target element is below the viewport. The element is somewhere lower part of the page. When the element overlaps with the viewport that time the image load.It will improve the React application performance. We are not going to load all the images at once because if user not going to see the products in our page.So its not required and it will create performance issue.

### Target Element.
This is the element whose intersection with an ancestor element (or the viewport) we want to observe.
### Intersection Root
The ancestor element or the viewport in which we will be measuring the target element's intersection against.
### Intersection Ratio. 
How much of the target element intersects with the intersection root. It is expressed as a value between 0 and 1, inclusive, where 0 means the two don't intersect at all and 1 means the target element completely intersects with the intersection root.
### Root Margin: 
We need no margin, so the margin offset, rootMargin, is specified as "0px".Its working like the same we are providing margin in CSS. We cam define the rootmargin like "10px 20px 30px 10px"



