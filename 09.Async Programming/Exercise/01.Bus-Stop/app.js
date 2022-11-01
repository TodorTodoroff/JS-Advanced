async function getInfo() {
    const stopIndoElement = document.getElementById("stopId");
    const stopId = stopIndoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopNameElement = document.getElementById("stopName");
    const busList = document.getElementById("buses");

    busList.innerHTML = "";
    stopId.value = "";
    try {
        const response = await fetch(url); // return promise
        const data = await response.json(); // will provide the data when we receive the promise response

        stopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(([busNumber, timeArrive]) => {
            const li = document.createElement("li");
            li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`
            busList.appendChild(li);
        });
    } catch (error) {
        stopNameElement.textContent = "Error";
    }
}