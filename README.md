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

## Adding a speaker (about 5 minutes)

**Before the talk** (as soon as you have a flyer):
1. Upload the flyer image to `assets/events/` (on GitHub: open the folder → **Add file → Upload files**).
2. Open `data/site-data.js`, copy the Boeing event block, and paste it as a new item in `EVENTS`.
3. Change the date, time, location, title, speaker name/org, summary, `rsvp` link, and `flyer` path.
4. Commit. The talk shows up as **Upcoming** with an RSVP button, and in the "Next up" box at the top of the page.

**After the talk:**
1. Export the speaker's slides to PDF (PowerPoint: File → Save As → PDF), get their OK, and upload it to `slides/`.
2. Upload a photo or two from the event to `assets/events/`.
3. On that same event, fill in:
   - `summary`: one or two sentences about the talk
   - `takeaways`: 3 to 5 bullet points
   - `slides`: `"slides/your-file.pdf"`
   - `photos`: `[{ src: "assets/events/your-photo.jpg", caption: "..." }]`
4. Commit. It moves to **Past** automatically and gets an in-page slide viewer.

Tip: paste the speaker's slides into Claude and ask it to write the `summary` and `takeaways` in this format.

## Previewing locally
Just open `index.html` in a browser.

## Hosting
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
