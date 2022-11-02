function solve() {
    const infoText = document.querySelector('.info');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    let busStop = {
        next: 'depot',
    };

    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
            .then((response) => response.json())
            .then((data) => {
                busStop = Object.assign(data);
                infoText.textContent = `Next stop ${busStop.name}`;
            })
            .catch(() => {
                infoText.textContent = 'Error!';
            });
    }

    function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        infoText.textContent = `Arriving at ${busStop.name}`;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();