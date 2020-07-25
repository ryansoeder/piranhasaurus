# Website for Piranhasaurus #
### KY's best and only surf punk rockabilly band. ###
Live at: https://ryansoeder.github.io/piranhasaurus/<br><br><br>
**Code Louisville Optional Requirements:**
|Requirement | Execution|
|------------|----------|
|"Hamburger" Menu | &#8226; "NAVIGATION" section in **style.css**<br> &#8226; "NAV MENU BUTTON" section in **script.js**|
|Grid | &#8226; Defined in "GRID LAYOUT" section in **style.css**<br> &#8226; "MEDIA" section images are populated with implicit grid using "grid-template-columns: repeat(auto-fit...);" |
|Flexbox | "LISTEN," "SHOWS," "MEDIA," "MERCH" sections and "#menu-btn" layed out with flex (among many others)|
|Media Queries/Mobile First | Built mobile first, media queries found at the bottom of **style.css**|
|JavaScript Math Operation | In "STICKY NAV BAR ON LARGER WINDOWS" section of **script.js**, the if statement uses (windowYOffset >= windowHeight - menuHeight) as its condition to make the nav bar sticky at the top of the screen once the wondow has scrolled to that point|
|:nth-child | "SHOWS" section of **style.css** uses :nth-child to style and apply pseudo elements to list items in cards|
|Image Carousel | "MERCH" section uses glide.js as its image carousel mounted in <script> tags at the bottom of **index.html**, styled in the "MERCH" section of **style.css**, and lightbox functionality added at the bottom of **script.js**|
