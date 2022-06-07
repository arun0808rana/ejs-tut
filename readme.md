# EJS

## Express settings

Express can identify views automatically put inside a directory by the name 'views'. If you want to change the views directory name you have to use the

```javascript
app.set("views", "my_custom_dir");
// where my_custom_dir can be your custom dir
```

## Passing vars to views

Express uses render method to render views as well pass value to the views from index.js.

```javascript
//  Render method takes a 2nd arg as a js obj which can contain multiple variables which you want to pass to the views
//  However the views also need to except this variable.
//  For example :
//  <title><%= mytitle %></title>
res.render("index", { mytitle: "Home", blogs: ["ar", "foo"] });
```

## Partials

Ejs uses something called partials for rendering a code chunk in a different code chunk.

```html
<!DOCTYPE html>
<html lang="en">
  <!-- The below is an ejs file consisting of only html code for head tag -->
  <%- include('./partials/head.ejs') %>

  <body>
    <!-- The below is an ejs file consisting of only html code for navbar or nav tag -->
    <%- include('./partials/nav.ejs') %> About
  </body>
</html>
```

Make sure to make a nested folder _**partials**_.
This will contain your partials.
This is a neat technique to implement the DRY principle.

### Note:-

You can send status codes along with rendering views.

```javascript
res.status(404).render("404");
```
