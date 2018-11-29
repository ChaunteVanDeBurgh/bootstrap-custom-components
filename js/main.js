$(document).ready(function() {
	$('#githubModal').on('show.bs.modal', function (e) {
		var $element = $(this),
			url = 'https://api.github.com/users/{username}';

		url = url.replace(/{username}/, $('#github-username').val());

		$.get(url, function(data) {
			console.log(data)
		});
	});
});

