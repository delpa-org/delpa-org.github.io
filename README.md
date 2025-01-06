# Delpa Website

This website, located at https://delpa.org, is built using
[Docusaurus](https://docusaurus.io/), a modern static website generator.

## Install Dependencies

```console
$ npm install
```

## Local Development

```console
$ npm run dev
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

## Special Notes

The files `static/snapshot_versions.json` and
`static/snapshot_versions.json.sha256` are deliberated set to wrong values. They
will be overridden to correct values during deployment.
