# Snapr website

The single-page product site for Snapr. It is plain HTML, CSS, and a few lines of JavaScript.
There is no build step and no package manager. Snapr itself lives in a separate repository: <https://github.com/LukoOG/Snapr>.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page. All content lives here. |
| `styles.css` | All styling, including the dark color scheme and responsive rules. |
| `script.js` | Copy buttons for the install commands. The page works without it. |
| `favicon.svg` | Browser tab icon. |
| `og.png` | Social-sharing preview image (1200 × 630). |
| `og.svg` | Source for `og.png`. |

## Preview locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Keeping it accurate

The page states facts about Snapr that must stay true:

- The **terminal demo** is real output from Snapr 0.1.0 on a generated sample folder. If the CLI's
  output changes, re-run the commands and paste the new output.
- The **snapshot strip** in the hero and the numbers in its caption (19 pieces referenced, 10 stored)
  come from that same session and must match the `snapr verify` output shown in the demo.
- The **install steps**, **command table**, and **limitations** are adapted from `README.md` and
  `docs/architecture.md` in the Snapr repository.
- The **version number** (0.1.0) appears in the hero, the features heading, the demo introduction,
  the limitations heading, and the footer.

## Regenerating the preview image

On macOS:

```bash
sips -s format png og.svg --out og.png
```

## Deploying

Any static host works: upload the contents of this folder.

Before publishing, edit `index.html` and replace the relative `og:image` value with the image's
full URL (for example `https://<your-domain>/og.png`), and add `og:url` and a canonical link with
the site's address. Social networks need absolute URLs for preview images.
