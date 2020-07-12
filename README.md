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
- TotalPrice calculated from LocalStorage


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
         
![e-store](https://user-images.githubusercontent.com/55841911/87069043-74047000-c20e-11ea-899e-d3ca8a0844bb.png)
![e-store-generated-front](https://user-images.githubusercontent.com/55841911/87069051-75359d00-c20e-11ea-8830-c5f736edc159.png)
![e-store-basket](https://user-images.githubusercontent.com/55841911/87069055-7666ca00-c20e-11ea-950f-cee10d34eebe.png)
 If LocalStorage contains items it will be displayed in totalprice.
![price](https://user-images.githubusercontent.com/55841911/87251792-9c8aa500-c46e-11ea-9d86-a8744e1fff77.png)
![price2](https://user-images.githubusercontent.com/55841911/87251793-9dbbd200-c46e-11ea-9f61-02644fe6fbce.png)
