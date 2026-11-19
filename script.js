/* The Forge — alexpendell.com
   Small enhancements only. The page works without JavaScript. */

(function () {
  'use strict';

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Email list form: submit in place so visitors stay on the page.
  // Without JS the form still posts normally and Netlify shows its own thank-you page.
  var form = document.getElementById('notes-form');
  var status = document.getElementById('notes-status');
  if (!form || !status || !window.fetch) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var button = form.querySelector('button[type="submit"]');
    var body = new URLSearchParams(new FormData(form)).toString();

    button.disabled = true;
    status.classList.remove('is-error');
    status.textContent = 'Sending…';

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Form post failed: ' + response.status);
        form.reset();
        status.textContent = 'You’re on the list. Talk soon.';
      })
      .catch(function () {
        status.classList.add('is-error');
        status.textContent = 'That didn’t go through. Try again in a minute.';
      })
      .then(function () {
        button.disabled = false;
      });
  });
})();
