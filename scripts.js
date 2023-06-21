function init() {
    const missionStatus = document.getElementById("flightStatus");
    const display = document.getElementById("flightDisplay");
    const rocketBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
        let height = 0;
        shuttleHeight.innerHTML = height;
    const takeoffbutton = document.getElementById("takeoff");
    const landingbutton = document.getElementById("landing");
    const missionAbortbutton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("left");
    const leftButton = document.getElementById("right");
    const rocketImage = document.getElementById("rocket");

    const handleIncrement = () => {
       height =+ 10000;
       shuttleHeight.innerHTML = height;
    };

    const handleDecrement = () => {
        height =- 10000;
        shuttleHeight.innerHTML = height;
    }

    takeoffbutton.addEventListener("click", () => {
        let takeOffResponse = window.confirm("Confirm that the shuttle is ready for takeoff.");
            if (takeOffResponse) {
                takeoffbutton.addEventListener("click", () => {
                    missionStatus.innerHTML ="Shuttle in flight.";
                });
                takeoffbutton.addEventListener("click", () => {
                    rocketBackground.style.backgroundColor = 'blue';
                });
                takeoffbutton.addEventListener("click", handleIncrement);
            } else {
                console.log("Takeoff procedure canceled.");
            };

    });

    landingbutton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
    });

    landingbutton.addEventListener("click", () => {
        rocketBackground.style.backgroundColor = "green";
    });

    landingbutton.addEventListener("click", () => {
        shuttleHeight.innerHTML = "0";
    });

    landingbutton.addEventListener("click", () => {
        missionStatus.innerHTML = "The shuttle has landed.";
    });

    missionAbortbutton.addEventListener("click", () => {
        let abortResponse = window.confirm("Confirm that you want to abort the mission.");
            if (abortResponse) {
                missionAbortbutton.addEventListener("click", () => {
                    missionStatus.innerHTML = "MIssion aborted."
           });
                missionAbortbutton.addEventListener("click", () => {
                    rocketBackground.style.backgroundColor = 'green';
                });
                missionAbortbutton.addEventListener("click", () => {
                    shuttleHeight.innerHTML = "0";
                })
        } else {
            console.log("Abort mission procedure canceled.");
        };
    });

    upButton.addEventListener("click", (handleIncrement) => {
        rocketImage.style.top + 10 + 'px';
    });

    downButton.addEventListener("click", (handleDecrement) => {
        rocketImage.style.top + 10 + 'px';
    });

    leftButton.addEventListener("click", () => {
        rocketImage.style.left + -10 + 'px';
    });

    rightButton.addEventListener("click", () => {
        rocketImage.style.left + 10 + 'px';
    });

};


window.addEventListener("load", init);