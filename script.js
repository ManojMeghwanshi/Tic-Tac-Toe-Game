let playgamebtn = document.getElementById("playbtn");
    let homebtn = document.getElementById("home");

    playgamebtn.addEventListener("click", () => {
        window.location.href = 'game/index.html';
    });
    homebtn.addEventListener("click", () => {
        window.location.href = 'index.html';
        alert("Home Button redirect on this existing page");
    });

    