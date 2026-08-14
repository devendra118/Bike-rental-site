# Error fixed

The old frontend-only form behavior has been removed.

The booking, contact, and homepage forms now:
- use POST
- include a hidden `form-name`
- use `data-netlify="true"`
- redirect to `/success.html`
- do not call `preventDefault()`

Important: Netlify Forms only receives submissions after the site is deployed to Netlify. Opening the HTML directly from your computer will not deliver a form submission.

After deploying:
1. Open the live website.
2. Submit the homepage Quick Booking form.
3. Go to Netlify → Forms.
4. Confirm the submission appears.
