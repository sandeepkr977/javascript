setTimeout(function() {
    fetch("students.json", {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(function(res) {
            return res.json();
        })
        .catch(function(err) { postMessage(err) })
        .then(function(result) { postMessage(result) });
}, 5000);