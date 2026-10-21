# Apdigi Activations

A responsive, four-page website for Apdigi Activations, built with plain HTML, CSS and JavaScript.

## Run locally

Open `index.html` in a browser, or open the project in VS Code and use the Live Server extension if it is already installed. No package installation or build step is required.

## Deploy on Render

This repository includes a `render.yaml` Blueprint for a Render Static Site. Push the project to a Git provider, then in Render choose **New > Blueprint** and connect the repository containing `render.yaml`. Render will publish the repository root; no build command or dependencies are needed.

Alternatively, create a Static Site in the Render Dashboard and set the publish directory to `.` with the build command left blank. The site is multi-page, so use the `.html` page URLs for Home, About, Services, and Contact.

## Pages

- Home: `index.html`
- About Us: `about.html`
- Services: `services.html`
- Contact: `contact.html`

## Enquiry form

The contact form validates the entered details in the browser but does not send or store them. Before accepting live enquiries, connect the form to a backend or a reputable email form service and update the notice on the contact page to match the configured behavior.

## Images and fonts

Campaign photography is loaded from Unsplash and the site uses Google Fonts. These assets require an internet connection. Replace or self-host them if the production site needs to operate without third-party requests.

The Contact page's Google Maps embed also requires an internet connection. The enquiry form remains front-end only and must be connected to a backend or email service before it can receive submissions.