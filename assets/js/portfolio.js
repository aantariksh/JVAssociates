const portfolioData = [
    {
      "client": "Mr. Mayur Khandelwal",
      "location": "Faizpur",
      "area": "6000 sq.ft",
      "architect": "Ar. Varun Kotecha",
      "specialFeatures": [
        "3m Cantilever Balcony",
        "Slab Spanning 4m x 5m"
      ]
    },
    {
      "client": "Mr. Tushar Rajput",
      "location": "Jalgaon",
      "area": "7000 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "3.2m Balcony Which is Hanging from 5.5M Simply Supported Beam",
        "All Spanning Above 5m",
        "Elevation Boxing as per planning"
      ]
    },
    {
      "client": "Mr. Sachin Khadke",
      "location": "Jalgaon",
      "area": "3000 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "Floating Columns",
        "Elevation Treatment as per plan",
        "Extra Loading for Plantation on Roof"
      ]
    },
    {
      "client": "Mr. Abhishek Patil",
      "location": "Pachora",
      "area": "2500 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "Elevation Treatment as per plan",
        "Extra Loading for Plantation on Roof",
        "5.6m Span Beam having heavy loading like Sunk, Plantation, etc., designed in 450 mm Depth to suffice Arch. Requirement"
      ]
    },
    {
      "client": "Mr. Suresh Patil",
      "location": "Jalgaon",
      "area": "3000 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "Sloping Roof",
        "Elevation Treatment"
      ]
    },
    {
      "client": "Row Houses",
      "location": "Jalgaon",
      "area": "3000 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "Economical Design",
        "Elevation Treatment"
      ]
    },
    {
      "client": "Mr. Nishikant Patil",
      "location": "Jalgaon",
      "area": "3500 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "2.5m Cantilever Balcony"
      ]
    },
    {
      "client": "Mr. Dinkar Patil",
      "location": "Jalgaon",
      "area": "2000 sq.ft",
      "architect": "Ar. Mohit Metkar",
      "specialFeatures": [
        "3m Cantilever Balcony",
        "Elevation Treatment"
      ]
    },
    {
      "client": "Surendra Apartment",
      "location": "Bhusawal",
      "area": "15000 sq.ft",
      "architect": "Ar. Varun Kotecha",
      "specialFeatures": [
        "G+5 Residential Apartment",
        "Parking Space for 20 cars",
        "Proposed PT Beams for Large Spans"
      ]
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
