# Uclan student's union shop

Uclan student's union shop is designed to be fully responsive

This site contains four pages named index.html, products.html, item.html, cart.html

## index.html
path : ./index.html

The home page of the site is index.html

index.html includes homepage information and two videos

First video: "html video element"

The second video is "youtube video" which uses iframe

The script.js file is loaded as the javascript code of this page
 The style.css file is loaded as the main styling file of this page in the head section

## products.html
path : ./products.html

The products page of the site is products.html
product categories and a list of all products are on this page

Each of the products displayed in the product list includes the product image, product name, product information and price, and the "buy" key that adds the product to the cart.


The script.js file is loaded as the javascript code of this page
The style.css file is loaded as the main styling file of this page in the head section

## item.html
path : ./item.html

The item page of the site is ./item.html
This page shows the product selected on the product page via the read more button

The product displayed on this page includes a large image, product name, product information and price, and a "buy" button that adds the product to the cart.

The product selected on the products page with the "readmore" key is added to the session storage and displayed on the item.html page

The script.js file is loaded as the javascript code of this page
The style.css file is loaded as the main styling file of this page in the head section

## cart.html

path : ./cart.html

The item page of the site is ./cart.html
The cart page contains a list of products that have been added to the cart by the user

Any product that is selected on the products page or item page with the "buy" button is added to local storage and the cart.html page in
"List of products added to the card" displays them


The script.js file is loaded as the javascript code of this page
The style.css file is loaded as the main styling file of this page in the head section

## script.js
path : scripts/script.js

script.js contains javascript code for various sections of the site, including:

* Function related to the key to open the list in pages with mobile size "mobile-menu"

* The section related to the display of all products in product.html

* The section for displaying products added to the card and displaying them in cart.html
(Clicking the "buy" button adds product information to localStorage and then displays it in the cart.html page.)

* The section for adding a product to the item.html page
(Clicking "readmore" on the products.html page will add product information to the sessionStorage and then display it on the item.html page.)


script.js is loaded in index.html, products.html, cart.html, script.js, styles.css files


# style.css
path : scripts/style.css

style.css describe how HTML elements are displayed on the screen

Styles related to different pages of the site are in style.css

Site styles are defined for different screen dimensions (mobile, tablet, computer) and the site is fully responsive
The main colors of the site are initially defined style.css file and are used in different parts of the site

style.css is loaded in index.html, products.html, cart.html, script.js, styles.css files

# Other site files
> images : ./images

> videos : ./video

