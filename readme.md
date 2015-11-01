TO RUN:

1) Clone repo, cd into directory, then type ./jake.sh to install dependencies
2) ./jake.sh karma => Fire up Karma server to run tests, copy URL given into an open browser tab
3) ./jake.sh run => Run the node server, which will be accessible at localhost://5000

*Must have Node and Git installed

Dev / Test Plan:

1) Make API call for all categories (AJAX / jQuery) - (Test response of function that makes this call)
2) Populate DOM nav menu with list of categories - (Test that the DOM is indeed updated)
3) When user clicks on name of category, list all products under that category (AJAX / jQuery) - (Test that the products are actually fetched)
4) When user clicks on product name, open a modal that shows detailed information about that product (Handlebars for modal content) - (Test that modal appears and has accurate content)

API Endpoints:

Top level: http://www.bestbuy.ca/api/v2/json/category/Departments

Product API:
Products for all categories: http://www.bestbuy.ca/api/v2/json/search?categoryid=departments
Product list for category: http://www.bestbuy.ca/api/v2/json/search?categoryid={catid} (e.g. 20001)
Product details: http://www.bestbuy.ca/api/v2/json/product/{sku} (e.g. 10071404)

TESTS:

Implemented:
- Loads all categories
- Loads all products

Not Yet Implemented:
- Shows proper products when category is clicked
- Shows proper product in modal when product is clicked
- Modal closes when overlay is clicked

FEATURES TO ADD:
- Pagination OR Infinite Scroll
- Styling
- Filters (AngularJS)

