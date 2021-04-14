"use strict";
let thisSite = window.location.host;

// Check the current URL
if (thisSite === "discordapp.com" || thisSite === "discord.com") {
  addWebsite("discord");
} else if (thisSite === "www.youtube.com") {
  addWebsite("youtube");
} else if (thisSite === "github.com") {
  addWebsite("github");
}

function addWebsite(name) {
  let a = chrome.extension.getURL(`css/${name}.css`),
    link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.id = "Nord Web Themes";
  link.href = a;

  document.head.appendChild(link);
}

