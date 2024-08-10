document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("response-container").style.display = "block";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    // Generate random positions within the viewport for the "No" button
    const x = Math.random() * (window.innerWidth - this.clientWidth);
    const y = Math.random() * (window.innerHeight - this.clientHeight);

    // Move the "No" button to a new position
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
    this.style.position = "absolute";
});