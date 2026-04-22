# Kasitech Studio (Sanity)

Branded Sanity Studio for managing the Kasitech product catalog.

## One-time setup

```bash
cd studio
npm install
npx sanity login    # sign in with the same account that owns the project
```

## Run locally

```bash
npm run dev
# open http://localhost:3333
```

## Deploy to kasitech.sanity.studio

```bash
npm run deploy
# When prompted for a hostname, enter:  kasitech
```

After deploy, the studio will be live at:
**https://kasitech.sanity.studio**

## Invite your client

1. Open https://www.sanity.io/manage/project/fplh08ii
2. Members → Invite member → enter email → role: **Editor**
3. Send them the studio URL above.

## Project info

- Project ID: `fplh08ii`
- Dataset: `production`
- Schema: `Product` (Category, Title, Slug, Description, Price, Rating, Image)
