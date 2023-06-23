document.addEventListener('DOMContentLoaded', (e) => {

	const _query = (__email = '') => {
		document.querySelector(".modal-notification").style.display = 'block';
		document.querySelector(".wrapper-flex").style.display = 'none';
		document.querySelector("._email").textContent = __email;
	}

	const _dismiss = () => {
		console.log(window.location);
		window.location.replace(window.location.pathname);
	}

	const _request = e.target.location.search;
	const _data = (_request).split('&');
	const _email = (_request !== null || !isEmptyOrSpaces(_request)) ? _data[0].substr(7).replace('%40', '@') : undefined;

	if(_email.length !== 0) {
		_query(_email);
	}

	document.querySelector("._dismissBtn").addEventListener('click', _dismiss);
});
