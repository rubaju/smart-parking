// Dummy data for parking spaces
const parkingSpacesData = [
    { id: 1, name: "Space 1", status: "Available" },
    { id: 2, name: "Space 2", status: "Occupied" },
    { id: 3, name: "Space 3", status: "Available" },
    { id: 4, name: "Space 4", status: "Occupied" },
];

// Function to display available parking spaces
function displayParkingSpaces() {
    const parkingSpaces = document.getElementById("parkingSpaces");

    parkingSpacesData.forEach(space => {
        const spaceItem = document.createElement("div");
        spaceItem.classList.add("parking-space-item");
        spaceItem.innerHTML = `
            <h3>${space.name}</h3>
            <p>Status: ${space.status}</p>
        `;
        parkingSpaces.appendChild(spaceItem);
    });
}

document.addEventListener("DOMContentLoaded", displayParkingSpaces);
