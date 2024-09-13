#!/bin/sh
set -e

DIR=$( cd "$( dirname "$0" )" && pwd )

cd $DIR/packages/astro
pnpm install
cd $DIR
pnpm build-astro
