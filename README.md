![Logo](docs/favicon.ico)

# Source Code for kaden.dev

# Deploying Changes
```bash
$ ./scripts/build.sh

git add -A
git commit -m "Deploying newly built site"
git push
```

## TODOs
- wrangle css into a single place
- project model for rapidly deploying new grid squares
- link handling via hashes for correct SPA behavior (shouldn't need the 404 redirect trick)
- separating projects from musings
- tagging projects and musings so they're findable without the whole list
- streamlined new project / musing creation flow