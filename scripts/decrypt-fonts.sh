#!/bin/sh
set -e

if [ -z "$FONT_KEY" ]; then
  echo "FONT_KEY not set, skipping font decryption"
  exit 0
fi

for f in src/fonts/*.enc; do
  out="${f%.enc}"
  if [ ! -f "$out" ]; then
    openssl aes-256-cbc -d -pbkdf2 -in "$f" -out "$out" -pass "pass:$FONT_KEY"
    echo "Decrypted $out"
  fi
done
