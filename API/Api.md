REST
The browser creates a http reques for you. Along with the URI. The get only receives data, won't make any changes. The server receives the request. Send abck the response
State on the requests?

There is also the post method
REST Representational State Transfer

Guiding architectural constraints required for an API to be considered RESTfull

Client server archiqtecture - 1)
Statelessness - 1)
Layered System - 2) Spotify
Cacheability
Uniform Design
Code on Demand

Client makes request to server. The protocol is HTTP that is stateless. No mantain state you much send it with each and every request. And you do it by using headers 1)

The program sends a get request to a URI. Then the survey responds with data

Artist explorer  - Spotify

API (Application Programming Interface) - can be considered as a set of rules that are shared by a particular service. These rules determine in which format and with which command set your application can access the service, as well as what data this service can return in a response. API acts as a layer between your application and external service

REST API (Representational state transfer) is an API that uses HTTP requests for communication with web services and must comply with certain constraints. Full constraints list can be viewed at the link. Here are some of them:

Client-server architecture – the client is responsible for the user interface, and the server is responsible for the backend and data storage. Client and server are independent of each other, and each of them can be replaced separately.
Stateless – no data from the client is stored on the server-side. The session state is stored on the client-side.
Cacheable – clients can cache server responses to improve performance.

<https://en.wikipedia.org/wiki/Representational_state_transfer#Architectural_constraints>

CRUD and types of requests
CRUD is a programming concept denoting four basic actions (create, read, update, and delete) that can be performed on a data source. In a REST API, these actions correspond to Types of Requests or Request Methods:

POST: Create action. Adds new data to the server. Using this type of request, you can, for example, add a new ticket to your inventory.
GET: Read action. Retrieves information (like a list of items). This is the most common type of request. Using it, we can get the data we are interested in from those that the API is ready to share.
PUT: Update action. Changes existing information. For example, using this type of request, it would be possible to change the color or value of an existing product.
DELETE: Delete action. Deletes existing information.

Endpoints and CRUD
In order to work with REST APIs, it is important to understand the Endpoint concept. Usually, Endpoint is a specific address (for example, <https://hotels-to-stay.com/best-hotels-paris),> by referring to which (with certain request method) you get access to certain features/data (in our case – the list of best hotels in Paris). Commonly, the name (address) of the endpoint corresponds to the functionality it provides.

<https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b>
