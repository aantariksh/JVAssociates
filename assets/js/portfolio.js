const portfolioData = [
  {
    "client": "Tukaram Pande",
    "location": "Muktainagar",
    "area": "420.00 sqm (Ground + First)",
    "architect": "Ar. Suraj Potdar",
    "specialFeatures": [
      "All Spanning Above 4m.",
      "Elevation Boxing as per planning"
    ]
  },
  {
    "client": "Manpur Bungalow",
    "location": "Chattisgarh",
    "area": "700.00 sqm (Ground + First + Second)",
    "architect": "Ar. Rishabh Chordiya",
    "specialFeatures": [
      "3.2 M Cantilever Slab",
      "All Spanning Above 5m.",
      "Elevation Boxing as per planning",
      "3m Drop Pardi Hanging From 2.5m Cantilever Beam"
    ]
  },
  {
    "client": "Patne House",
    "location": "Solapur",
    "area": "220.00 sqm (Ground + First)",
    "architect": "Ar. Dattaprasad Pandit",
    "specialFeatures": [
      "All Spanning Above 4m.",
      "Elevation Boxing as per planning"
    ]
  },
  {
    "client": "Mr. Anil Bungalow",
    "location": "Bhosari, Pune",
    "area": "400.00 sqm (Ground + Three)",
    "architect": "Ar. Shubham Chajjed",
    "specialFeatures": [
      "No intermediate columns, providing an end-to-end clear span of 7.5 m.",
      "Elevation Boxing as per planning"
    ]
  },
  {
    "client": "Surendra Apartment",
    "location": "Bhusawal",
    "area": "1200.00 sqm (G+5 Residential Apartment)",
    "architect": "Ar. Varun Kotecha",
    "specialFeatures": [
      "G+5 Residential Apartment",
      "Parking Space for 6 cars Proposed",
      "PT Beams for Large Spans"
    ]
  },
  {
    "client": "Vakratund Apartment",
    "location": "Muktainagar",
    "area": "1400.00 sqm (G+5 Residential Apartment)",
    "architect": "Ar. Mohit Metkar",
    "specialFeatures": [
      "G+5 Residential Apartment",
      "Parking Space for 6 cars Proposed",
      "RCC Beam have been proposed for the floating columns, without any PT Beam"
    ]
  },
  {
    "client": "Vaibhav Patil",
    "location": "Jalgaon",
    "area": "5000.00 sqm (P+7 Residential Apartment)",
    "architect": "Ar. Anand Mukund",
    "specialFeatures": [
      "P+7 Residential Apartment",
      "Parking Space for 26 cars Proposed",
      "PT Beams for Large Spans"
    ]
  },
  {
    "client": "Proposed Rajarshi Chhatrapati Shahu Maharaj Statue",
    "location": "Kalamandir, Dhule",
    "area": "N/A",
    "architect": "N/A",
    "specialFeatures": []
  },
  {
    "client": "Proposed Temple",
    "location": "Jalgaon",
    "area": "N/A",
    "architect": "Ar. Mohit Metkar",
    "specialFeatures": []
  }
]
  
// Function to populate modal with portfolio details
function loadPortfolioDetails(index) {
    const project = portfolioData[index];
    
    // Populate modal fields
    document.getElementById('clientName').textContent = project.client;
    document.getElementById('location').textContent = project.location;
    document.getElementById('area').textContent = project.area;
    document.getElementById('architect').textContent = project.architect;

    // Populate special features
    const featuresList = document.getElementById('specialFeatures');
    featuresList.innerHTML = ''; // Clear previous list
    project.specialFeatures.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Optionally, you can dynamically update the image
    document.getElementById('projectImage').src = `assets/img/portfolio/${index}.jpeg`;
}

// Add event listeners to buttons
document.querySelectorAll('[id^="p-"]').forEach(button => {
    button.addEventListener('click', (e) => {
        const index = e.target.id.split('-')[1]; // Extract index from button ID
        loadPortfolioDetails(index);
    });
});
