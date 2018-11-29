$(document).ready(function() {
	$('#githubModal').on('show.bs.modal', function (e) {
		var $element = $(this),
			url = 'https://api.github.com/users/{username}',
			title = 'Hi, my name is {name}',
			content = '' +
				'<div class="row">' +
					'<img src="{img}" class="col-sm-3">' +
					'<p class="col-sm-9" id="bio">{bio}</p>' +
					'</div>',
			bio = '' + 
				'At the moment I have {publicRepo} public repos' +
				'and {folowers} followers. /n' +
				'I joined Github on {dateJoin}';

		url = url.replace(/{username}/, $('#github-username').val());

		$.get(url, function(data) {
			console.log(data)
		});
	});
});

