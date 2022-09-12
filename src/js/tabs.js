window.addEventListener("load", function () {
  const tabLink = queryAll(".tablinks");
  const tabcontent = queryAll(".tabcontent");

  tabLink.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.currentTarget.classList.contains("tab__active__link")) {
        return;
      }
      tabLink.forEach((element) =>
        element.classList.remove("tab__active__link")
      );
      tabcontent.forEach((element) =>
        element.classList.remove("tab__active__content")
      );

      const oqueoarturcurtefazer = event.target.attributes.arturlambesaco.value;

      getDomIdElement(oqueoarturcurtefazer).classList.add(
        "tab__active__content"
      );
      event.currentTarget.classList.add("tab__active__link");
    });
  });
});
