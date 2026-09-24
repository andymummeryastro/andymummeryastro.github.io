# Publishing your site on GitHub Pages

This gets your site live at a free URL like `https://yourusername.github.io`.
No coding, no payment. Takes about 15 minutes the first time.

---

## Step 1 — Make a GitHub account
Go to <https://github.com> and sign up if you don't already have an account.
Pick a username you're happy with — it becomes part of your site's web address.

## Step 2 — Create the repository
1. Click the **+** in the top-right → **New repository**.
2. Name it **exactly** `yourusername.github.io` (replace `yourusername`
   with your actual GitHub username). This special name is what makes it a
   personal site.
3. Set it to **Public**. Leave the other options unchecked.
4. Click **Create repository**.

## Step 3 — Upload the website files
On the new empty repository page:
1. Click **uploading an existing file** (in the "Quick setup" area), or go to
   **Add file → Upload files**.
2. Drag in **all the contents** of this site folder — the `.html` files, the
   `assets` folder, and the `cv` folder. (Upload the *contents*, not the
   folder itself, so `index.html` ends up at the top level.)
3. Scroll down, click **Commit changes**.

## Step 4 — Turn on Pages
1. In the repository, go to **Settings** (top menu) → **Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to **Deploy from a branch**.
3. Set the branch to **main** and the folder to **/ (root)**, then **Save**.
4. Wait 1–2 minutes. Refresh the page — a green banner will show your live URL:
   `https://yourusername.github.io`

Done. That URL is your website. Share it on applications.

---

## Editing the site later
Two easy ways:

**In the browser (simplest):** open any file in your repo on github.com, click
the pencil ✏️ icon, edit the text, then **Commit changes**. Your live site
updates within a minute.

**On your computer:** use GitHub Desktop (<https://desktop.github.com>) — a
free app that lets you edit the files locally and click "Push" to publish.
No command line needed.

Everything marked `[Placeholder]` or `REPLACE_ME` in the files is meant to be
swapped for your real content. To replace your CV, upload your PDF as
`cv/cv.pdf` (same name), overwriting the placeholder.

## Changing your photo
The sidebar photo is `assets/photo.jpg`. To swap it, overwrite that file with
another **square** JPEG (600×600 is plenty) — the pages already point at it.
Photos straight from an iPhone are `.HEIC`, which most browsers cannot show,
so convert first. On a Mac, in Terminal:
```
sips -s format jpeg new-photo.HEIC --out assets/photo.jpg
```

## A custom domain (optional, later)
If you buy a domain like `andymummery.com` (~$12/year from Namecheap,
Cloudflare, etc.), you can point it at this site: add the domain under
**Settings → Pages → Custom domain**, then set the DNS records GitHub shows
you at your registrar. GitHub gives you free HTTPS automatically. This is a
nice upgrade but not needed to launch.

## Changing the look
All styling lives in `assets/style.css`. The color and font settings are at
the very top of that file (the `:root { ... }` block) — change those values
to restyle the whole site at once.
