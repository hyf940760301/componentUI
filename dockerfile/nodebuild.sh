#!/bin/sh

mkdir -p release

DEPLOY_ENV=integration npm run docs:integration
mv ./docs-dist ./release/integration

DEPLOY_ENV=staging npm run docs:build
mv ./docs-dist ./release/staging

DEPLOY_ENV=production npm run docs:build
mv ./docs-dist ./release/production
