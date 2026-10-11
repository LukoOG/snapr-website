// Copy buttons for the install commands. The page works without this file.
document.querySelectorAll(".copy").forEach(function (button) {
  if (!navigator.clipboard) return;
  button.hidden = false;
  button.addEventListener("click", function () {
    navigator.clipboard.writeText(button.dataset.copy).then(function () {
      var label = button.textContent;
      button.textContent = "Copied";
      button.classList.add("done");
      setTimeout(function () {
        button.textContent = label;
        button.classList.remove("done");
      }, 1600);
    });
  });
});
