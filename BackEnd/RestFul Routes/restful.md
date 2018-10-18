<h1>Restfull Routes</h1>

Rest is a pattern to define our routes.It's a way of mapping HTTP and CRUD(Create, Read, Update, Destroy)

<table>
    <tr>
        <th>Name</th>
        <th>url</th>
        <th>verb</th>
        <th>desc</th>
    </tr>
    <tr>
        <td>Index</td>
        <td>/recipes</td>
        <td>GET</td>
        <td>Display a list of all recipes</td>
    </tr>
    <tr>
        <td>New</td>
        <td>/recipes/new</td>
        <td>GET</td>
        <td>Display a form to make a new recipe</td>
    </tr>
    <tr>
        <td>Create</td>
        <td>/recipes/new</td>
        <td>Post</td>
        <td>Add new recipe to database</td>
    </tr>
    <tr>
        <td>Show</td>
        <td>/recipes/:id</td>
        <td>Get</td>
        <td>Get info about recipe</td>
    </tr>
    <tr>
        <td>Edit</td>
        <td>/recipes/:id/edit</td>
        <td>Get</td>
        <td>Show edit form for one recipe/td>
    </tr>
     <tr>
        <td>Update</td>
        <td>/recipes/:id</td>
        <td>PUT</td>
        <td>Update a recipe then redirect somewhere/td>
    </tr>
    <tr>
        <td>Destroy</td>
        <td>/recipes/:id</td>
        <td>Delete</td>
        <td>Delete a recipe then redirect somewhere/td>
    </tr>
