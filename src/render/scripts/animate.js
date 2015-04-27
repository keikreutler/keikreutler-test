$("h3.animated").click(function() {
	$(this).css("cursor", "pointer");
	$(this).parent().find( "div.hide-desc" ).addClass("fadeInSoft");
});
