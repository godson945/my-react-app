import fs from 'fs';
(async () => {
  try {
    const res = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Dr%C3%A4ger_Logo.svg/512px-Dr%C3%A4ger_Logo.svg.png', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) throw new Error('Failed: ' + res.status);
    const arrayBuffer = await res.arrayBuffer();
    fs.writeFileSync('src/assets/drager-logo.png', Buffer.from(arrayBuffer));
    console.log('Success');
  } catch (e) {
    console.error(e);
  }
})();
