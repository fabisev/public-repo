#!/bin/bash
# Script to verify artifact checksums

if [ $# -lt 2 ]; then
    echo "Usage: $0 <owner> <version>"
    echo "Example: $0 myusername 1.0.1"
    exit 1
fi

OWNER=$1
VERSION=$2
ARTIFACT="public-repo-${VERSION}.zip"
BASE_URL="https://github.com/${OWNER}/public-repo/releases/download/v${VERSION}"

echo "Downloading artifact and checksum..."
curl -L -o ${ARTIFACT} ${BASE_URL}/${ARTIFACT}
curl -L -o ${ARTIFACT}.sha256 ${BASE_URL}/${ARTIFACT}.sha256

echo "Verifying checksum..."
echo "$(cat ${ARTIFACT}.sha256) ${ARTIFACT}" | sha256sum --check

echo "Verification complete!"