// Tabs: show the panel matching the clicked tab, scoped to its own tab group.
document.querySelectorAll("[data-tabs]").forEach((group) => {
  const buttons = group.querySelectorAll("[data-tab]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => {
        const selected = b === button;
        b.setAttribute("aria-selected", String(selected));
        group.querySelector(`#${b.dataset.tab}`).hidden = !selected;
      });
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
