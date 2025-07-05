<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>四国グルメマップ</title>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  />
  <style> #map{height:100vh;} </style>
</head>
<body>
<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.3/papaparse.min.js"></script>
<script>
  const map = L.map('map').setView([33.9,133.9], 8);            // 四国中心
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap contributors'
  }).addTo(map);

  Papa.parse('shikoku_products_map.csv', {
    download:true, header:true,
    complete: ({data})=>{
      data.forEach(d=>{
        if(!d.Latitude) return;
        const m=L.marker([+d.Latitude,+d.Longitude]).addTo(map);
        m.bindPopup(`<strong>${d.Name}</strong>`);
      });
    }
  });
</script>
</body>
</html>
