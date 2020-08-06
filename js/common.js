

$(window).resize(function () {
	resizeWindow();
});

$('.navabar__menu').click(function () {
	$('.sidebar__navbar').toggleClass('active');
});

$('.sidebar__navbar.active span').click(function () {
	$('.sidebar__navbar').toggleClass('active');
});