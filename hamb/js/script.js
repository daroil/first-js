"use strict"
let menu = document.querySelector('.menu')
let bur = document.querySelector('.burger')

menu.addEventListener('click', function() {
	this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))
	bur.classList.toggle('hidden')
})