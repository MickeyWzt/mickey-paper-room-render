const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'release-manifest.json'), 'utf8'));
for (const entry of manifest) {
  const bytes = fs.readFileSync(path.join(__dirname, 'site', entry.file));
  const hash = crypto.createHash('sha256').update(bytes).digest('hex');
  if (hash !== entry.sha256 || bytes.length !== entry.bytes) throw new Error(`Release mismatch: ${entry.file}`);
}
console.log(`Verified ${manifest.length} static release files.`);
