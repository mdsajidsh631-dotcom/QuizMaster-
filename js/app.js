"use strict";

/*
 * Quiz Master
 * Main Application JavaScript
 * Step 1 - Basic Navigation
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Quiz Master started successfully.");
});

/* Login / Sign Up */

function openLogin() {
    window.location.href = "pages/login.html";
}

/* General Quiz */

function openQuiz() {
    window.location.href = "pages/quiz.html";
}

/* World Competition */

function openCompetition() {
    window.location.href = "pages/competition.html";
}

/* Leaderboard */

function openLeaderboard() {
    window.location.href = "pages/leaderboard.html";
}

/* Profile */

function openProfile() {
    window.location.href = "pages/profile.html";
}
