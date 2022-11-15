const URL = 'http://localhost:3240/';

async function httpGetPlanets() {
    // TODO: Once API is ready.
    // Load planets and return as JSON.
    const res = await fetch(`${URL}planets`);
    return await res.json();
}

async function httpGetLaunches() {
    // TODO: Once API is ready.
    // Load launches, sort by flight number, and return as JSON.
    const res = await fetch(`${URL}launches`);
    const fetchedLaunches = await res.json();
    return await fetchedLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber;
    });
}

async function httpSubmitLaunch(launch) {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
    try {
        return await fetch(`${URL}launches`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(launch),
        });
    } catch (error) {
        return { ok: false };
    }
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
