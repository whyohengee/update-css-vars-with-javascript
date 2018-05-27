So the product of this exercise was a simple image editor. You have an image with some sliders, and the sliders allow you to change a few things about the image, like the type of filter, spacing around the image, and text colors.

I've really appreciated using variables with Sass/SCSS for a while, but now [CSS variables are part of the CSS spec](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).

What's cool about CSS variables is that unlike SCSS/Sass variables, which are compiled and loaded, CSS variables can be updated with JavaScript. I guess you do this with `element.style.PROPERTY` with JS if you were using Sass vars anyway.

But with this method, when you update a single var with JS, it will update across the page. Neat~o~

This demo places the CSS vars on the `:root` element, but you can scope them to lower elements.

Here are links for:

[My blog post](http://yongclee.com/update-css-vars-with-js/)

[Codepen](https://codepen.io/whyohengee/pen/Pexjqe)

[Github Pages](https://whyohengee.github.io/update-css-vars-with-javascript/)