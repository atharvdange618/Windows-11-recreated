let taskbar1 = document.getElementsByClassName("taskbar1")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar1.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom === "54px") {
        startmenu.style.bottom = "-655px";
    } else {
        startmenu.style.bottom = "54px";
    }
});

let taskbar,right = document.getElementsByClassName("right")[0];
let systemtray = document.getElementsByClassName("systemtray")[0];

right.addEventListener("click", () => {
    console.log("clicked");
    if (systemtray.style.bottom === "58px") {
        systemtray.style.bottom = "-655px";
    } else {
        systemtray.style.bottom = "58px";
    }
});

function toggleImageVisibility(elementId, imageSrc) {
    const element1 = document.querySelector(`#${elementId}`);
    const element2 = document.createElement("img");
    element2.src = imageSrc;
    element2.style.display = "none";
    element2.style.width = "60%";
    element2.style.margin = "60px 0";
    element2.style.left = "200px";
    element2.style.position = "absolute";
    document.body.appendChild(element2);

    let element2Visible = false;

    element1.addEventListener("click", function () {
        element2Visible = !element2Visible;
        console.log("clicked");
        if (element2Visible) {
            element2.style.display = "block";
        } else {
            element2.style.display = "none";
        }
    });
}

toggleImageVisibility("rb1", "recyclepage.png");
toggleImageVisibility("ex1", "Explorerpage.png");
toggleImageVisibility("ed1", "edgepage.png");
toggleImageVisibility("cr1", "chromepage.png");
toggleImageVisibility("tp1", "thispcpage.png");