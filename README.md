# unMonastery.org website #

The website is built on the [Bootstrap](http://getbootstrap.com) skeleton for [DocPad](https://github.com/bevry/docpad), a simple and flexible HTML, CSS, and Javascript static site compiler for popular user interface components and interactions.

### Cloning the Site

1. [Install DocPad](https://github.com/bevry/docpad)

1. Clone the project and run the server

	```
	mkdir unmonastery.org  
	cd unmonastery.org  
	git clone https://github.com/unmonastery/unmonastery.org  
	docpad install eco  
	docpad run  
	```

1. [Open http://localhost:9778/](http://localhost:9778/)

1. To make changes to the site, work from the `src` directory. The page template files are in the `layouts` directory, the pages' content is in the `render` directory, and the blocks of text are individual Markdown files in the `partials` directory.

### Editing the site content

Contributors can edit content by being added them as collaborators ([Settings > Collaborators](https://github.com/unmonastery/unmonastery.org/settings/collaboration)) on the repository. Please contact [@keikreutler](https://github.com/keikreutler) if you would like access to edit the content.

You can then edit the Markdown partials at [prose.io/#unmonastery/unmonastery.org](prose.io/#unmonastery/unmonastery.org).

     #### Tips for editing using Prose

     Authenticate on Github before making any changes to files using the green button on the bottom right corner of the screen.


### License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a>

Unless stated otherwise, all content is licensed under the <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a> and code licensed under the [MIT License](http://creativecommons.org/licenses/MIT/), © unMonastery LBG

