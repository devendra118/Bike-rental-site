# Hari Rental Services — Proper Rebuild

## What I changed
This rebuild starts from the ORIGINAL `Bike-rental-site.github.io` repository, not the previous redesign.

### Preserved from the original project
- Original image assets
- Hari/HariRental branding direction
- Haridwar bike & scooty rental positioning
- Hourly / daily / multi-day / weekly rental concepts
- Guided tours
- Maintenance & repair
- Original contact details found in the source comments

### Fixed
- Empty logo area
- Dead `href="#"` buttons
- Duplicate navigation
- Inconsistent page styling
- Placeholder Lorem Ipsum
- Wrong FlightMantra/Kolkata contact block
- Missing image usage on the homepage
- Weak bike cards
- Broken/unused PHP include comments
- Mixed Bootstrap + custom CSS dependency
- Mobile navigation behavior
- No useful booking/enquiry interaction

## Interactive features
- Responsive navigation
- Bike detail pages using URL parameters
- Enquiry modal
- Frontend form validation
- Gallery hover labels
- Gallery lightbox
- Active navigation states
- Working internal page links
- Mobile layout

## Important
The original source contains conflicting terminology: the home/title/assets focus on motorcycle/scooty rental, while parts of the About page describe mountain bikes. This rebuild follows the stronger motorcycle/scooty direction because it matches the project title, images and home page, while preserving the original rental-package/service ideas.

The source also contains placeholder contact information on the About page and a separate incorrect FlightMantra/Kolkata block on Contact. The rebuild uses the Haridwar phone/email details found in the original commented Home section, but they should be confirmed before public deployment.

Forms are frontend-only. Connect them to Netlify Forms, Formspree, EmailJS, or a backend if you want real submissions.


## Form delivery — FIXED
The enquiry forms now use **Netlify Forms** instead of showing a fake frontend-only success message.

When this site is deployed to Netlify:
- `contact-enquiry` receives Contact page submissions.
- `booking-enquiry` receives Book / Enquire submissions.
- Successful submissions redirect to `success.html`.
- Netlify shows submissions in the site's Forms dashboard and can be configured for email notifications.

Important: Netlify Forms only processes these forms after the site is deployed on Netlify. Opening the HTML file directly from your computer cannot deliver a real form submission.


## Logo update
The old logo asset was a JPG with a photographic wood background, so it was not truly transparent and looked out of place in the dark navigation bar. It has been replaced with a transparent PNG logo and a compact HARI / RENTAL wordmark in the header.
