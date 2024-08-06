Issue Description:

When clicking on a heading element, extra span tags wrap the content of the heading.
The more you click on the heading element, the more span tags are added.

Reproduction Steps:

1. Run the dev server: ```npm run dev```
2. Visit: http://localhost:5173/
3. Drop a heading in to the editor.
4. Click on the heading element.
5. Click outside the element.
6. Notice that the "last changed value" has spans added.
7. Repeat steps 4 and 5 - notice additional nested spans are added every time.

A Few Notes: 

1. This issue only seems to happen on Firefox and Safari (tested on a Mac), not Chrome.
2. The "design:updated" event appears to fire when a heading is initially clicked on - this doesn't appear to be the case for other elements.  
