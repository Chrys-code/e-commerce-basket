# e-commerce-basket
Implementation of e-commerce-basket (PLAIN JS)

This project is about to create an e-commerce site.
Used a JSON file as *database

Key elements:
- Fetch data from JSON (readTextFile)
- Create new RequestedItem Objects
- Write html in front store for each item
- Onclick  -> write into basket html -> push products.array (into app memory)
- Trash button in basket -> For each trashBtn -> **setAttributes("value" = `${product.id}`), onclick ->
paren.el display none, **get target.value via event capturing -> find object by ID ((x) => x.id) === product.id) and remove from app memory


*database: 
- JSON file mime tiype is overridden. The usage if the products.JSON file this case is very similar to an API request as all the file is read on event
This way I could get a simulated only-read database.

**get target.value via event capturing*
- This way I was able to pass Object ID outside of the scope and solve to find the right object in the app memory based on matching IDs


Limits:
- Using JSON with an API request method limits the oppotrunity to using modules as most of the functions are instantly nested under the data request
- This JSON *database can not be compared to a MySQL database
- Solved only via plain JS which limits the usability while the missing PHP and Database could greatly widen the features
- Adding an item more than once is fine but upon delete the chosen item will remove only the first item of the matchig ID
- Still under development -> next up: quantity and checkout
         
