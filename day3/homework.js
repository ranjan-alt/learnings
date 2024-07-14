// URL PARAMS 
types --- 
// 1--// filtering and pagination 
GET /api/products
GET /api/products?category=electronics
GET /api/products?min_price=100&max_price=500&page=2&limit=10

// 2--//nested resource
GET /api/users/123/orders
GET /api/users/123/orders/456

// 3--//complex quey params
GET /api/products/search?q=laptop
// ilter products by category and sort by price descending:
GET /api/products/search?category=electronics&sort=-price

// 4-- //Matrix params
GET /api/matrix;param1=value1;param2=value2

//5-- //Versioning
GET /api/v1/products


