export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const response = await fetch(
      'https://api.easybroker.com/v1/properties?page=1&per_page=18&show_full_content=true',
      { headers: { 'X-Authorization': 'q11wbo0ajv5lydpzckms8sp8fae0mf', 'Accept': 'application/json' } }
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
