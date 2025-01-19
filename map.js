const bridges = [
    {
      image: "images/benjaminFranklin.png",
      name: "Benjamin Franklin Bridge",
      coordinates: [39.9496, -75.1419],
      location: "Philadelphia, PA",
      year: "1926",
      bridgeType: "Suspension"
    },
    {
      image: "images/chestnutStreet.png",
      name: "Chestnut Street Bridge",
      coordinates: [39.9490, -75.1485],
      location: "Philadelphia, PA",
      year: "1906",
      bridgeType: "Arch"
    },
    {
      image: "images/gardenStreet.png",
      name: "Garden Street Bridge",
      coordinates: [39.9511, -75.1544],
      location: "Philadelphia, PA",
      year: "1910",
      bridgeType: "Arch"
    },
    {
      image: "images/girardAvenue.png",
      name: "Girard Avenue Bridge",
      coordinates: [39.9687, -75.1667],
      location: "Philadelphia, PA",
      year: "1915",
      bridgeType: "Arch"
    },
    {
      image: "images/JFKBoulevard.png",
      name: "JFK Boulevard Bridge",
      coordinates: [39.9519, -75.1650],
      location: "Philadelphia, PA",
      year: "1964",
      bridgeType: "Beam"
    },
    {
      image: "images/marketStreet.png",
      name: "Market Street Bridge",
      coordinates: [39.9515, -75.1481],
      location: "Philadelphia, PA",
      year: "1900",
      bridgeType: "Arch"
    },
    {
      image: "images/schuykillExpressway.png",
      name: "Schuylkill Expressway Bridge",
      coordinates: [39.9534, -75.2023],
      location: "Philadelphia, PA",
      year: "1960",
      bridgeType: "Beam"
    },
    {
      image: "images/southStreet.png",
      name: "South Street Bridge",
      coordinates: [39.9418, -75.1652],
      location: "Philadelphia, PA",
      year: "1901",
      bridgeType: "Arch"
    },
    {
      image: "images/vineStreet.png",
      name: "Vine Street Bridge",
      coordinates: [39.9605, -75.1679],
      location: "Philadelphia, PA",
      year: "1920",
      bridgeType: "Arch"
    },
    {
      image: "images/walnutStreet.png",
      name: "Walnut Street Bridge",
      coordinates: [39.9487, -75.1503],
      location: "Philadelphia, PA",
      year: "1908",
      bridgeType: "Arch"
    },
  ];
  
  const map = L.map("map").setView([39.9526, -75.1652], 12); 
  
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  bridges.forEach((bridge) => {
    const marker = L.marker(bridge.coordinates).addTo(map);
    const popupContent = `
      <div class="popup-card">
          <div class="popup-image" style="background-image: url(${bridge.image});"></div>
          <div class="popup-content">
              <h3>${bridge.name}</h3>
              <p><strong>Year built:</strong> ${bridge.year}</p>
              <p><strong>Bridge type:</strong> ${bridge.bridgeType}</p>
          </div>
      </div>
    `;
    marker.bindPopup(popupContent);
  });
  
