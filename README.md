# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: (https://github.com/jepng-etich-coder/Frontend-Mentor-Contact-form-solution)
- Live Site URL: (https://jepng-etich-coder.github.io/Frontend-Mentor-Contact-form-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsiveness

### What I learned

I learned a new concept of flex box that I was able to use to size my input fields

```css
.query-wrapper,
.form-username,
.form-email-address {
  flex-grow: 1;
}
```

I also learned a lot of JS concepts since this was my second time interacting with it. What I really able to understand was how to use the showError function:

```js
showError(targetElement, "message");
```

### Continued development

The areas I want to put more focus in are:

- Use of SCSS syntax and include more advanced styling techniques
- Improve on flexbox and grid
- Fully dive into learning JS

### Useful resources

- [Introduction To Responsive Web Design - HTML & CSS Tutorial](https://youtu.be/srvUrASNj0s?si=_RJOf-gft0lIrPdx) - This tutorial really helped me to understand the basics of responsive design and how to apply the em & rem units.
- [Chatgpt](https://chatgpt.com/) - For code explanation.

## Author

- Website - [jepng-etich-coder](https://github.com/jepng-etich-coder)
- Frontend Mentor - [@jepng-etich-coder](https://www.frontendmentor.io/profile/jepng-etich-coder)
- Linkedin - [Norah Jepngetich](https://www.linkedin.com/in/norah-jepng-etich-6b605b44/)
