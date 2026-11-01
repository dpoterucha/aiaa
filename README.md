# AIAA at UW–Madison — chapter website

Plain HTML/CSS/JS, no build step. Hosted free on GitHub Pages.

## Updating the site (no coding needed)

Almost everything lives in **`data/site-data.js`**. On GitHub, open that file, click the pencil icon, edit, and click **Commit changes**. The live site updates within a minute or two.

| To change… | Edit this in `data/site-data.js` |
|---|---|
| Add an event | Copy the example block at the bottom of `EVENTS` |
| Post speaker slides | Upload the PDF to `slides/`, then set `slides: "slides/your-file.pdf"` on the event |
| Officers (new semester) | Edit the `OFFICERS` list |
| Officer photos | Upload a square photo to `assets/officers/`, set `photo: "assets/officers/name.jpg"` |
| Sponsors | Upload a logo to `assets/sponsors/`, add `{ name, logo, url }` to `SPONSORS` |
| Slack / form / contact links | `SITE.links` and `SITE.contacts` |

Events automatically sort into **Upcoming** and **Past** by date, and the hero card always shows the next one.

If the page goes blank after an edit, you're almost certainly missing a comma or a quote mark. Check the file you just changed.

## Previewing locally
Just open `index.html` in a browser.

## Hosting
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
