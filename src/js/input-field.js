window.addEventListener("load", function () {
  const mainDocField = getDomIdElement("doc-input");
  const mainDocLabel = getDomIdElement("doc-label");
  const secDocField = getDomIdElement("secdoc-input");
  const secDocLabel = getDomIdElement("secdoc-label");
  const birthdayField = getDomIdElement("birth-input");
  const phoneField = queryAll(".phone__field");

  // Change label of mainDocLabel and secDocLabel
  function mainDocLabelChange(docType) {
    switch (docType) {
      case "pessoa física":
        mainDocLabel.innerText = "CPF";
        secDocLabel.innerText = "RG";
        break;

      case "pessoa jurídica ":
        mainDocLabel.innerText = "CNPJ";
        secDocLabel.innerText = "IE";
        break;

      default:
        mainDocLabel.innerText = "CPF / CNPJ";
        secDocLabel.innerText = "IE / RG";
        break;
    }
  }

  //  Main doc input masking function
  function formatCnpjCpf(event, labelChanger) {
    const value = (action = undefined) => (event.target.value = action);
    const cnpjCpf = event.target.value.replace(/\D/g, "");

    // fazer um menor que 11 e maior que 13
    if (cnpjCpf.length === 0) {
      labelChanger();
      return value(cnpjCpf);
    }

    if (cnpjCpf.length === 11) {
      labelChanger("pessoa física");
      return value(
        cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
      );
    }

    labelChanger("pessoa jurídica");
    return value(
      cnpjCpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
    );
  }

  // Sec doc input masking function
  function formatRgIe(event) {
    const value = (action = undefined) => (event.target.value = action);
    const rgIe = event.target.value.replace(/\D/g, "");

    // fazer um menor que 11 e maior que 13

    if (rgIe.length === 9) {
      return value(
        rgIe.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4")
      );
    }

    return value(rgIe);
  }

  // Masking main doc input value
  mainDocField?.addEventListener("blur", (event) =>
    formatCnpjCpf(event, mainDocLabelChange)
  );

  // Masking sec doc input value
  secDocField?.addEventListener("blur", (event) => formatRgIe(event));

  // Masking birth date input value
  birthdayField?.addEventListener("blur", (event) => {
    return (event.target.value = event.target.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})(\d{4})$/, "$1/$2/$3"));
  });

  // Masking phone number input value
  phoneField?.forEach((element) =>
    element.addEventListener("blur", (event) => {
      const value = (action = undefined) => (event.target.value = action);
      const phone = event.target.value.replace(/\D/g, "");
      if (phone.length === 10) {
        return value(phone.replace(/(\d{2})(\d{4})(\d{4})$/, "($1) $2 - $3"));
      }
      return value(phone.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2 - $3"));
    })
  );

  // get CEP ==============================>
  const cepSearch = getDomIdElement("cep-input-search");
  const addressType = getDomIdElement("address-type");
  const street = getDomIdElement("address-street");
  const district = getDomIdElement("address-district");
  const state = getDomIdElement("address-state");
  const city = getDomIdElement("address-city");

  function getCep(event) {
    const searchValue = event.target.value.split("-").join("");
    const value = (action = undefined) => (event.target.value = action);

    if (searchValue) {
      let responseData;
      const url = `https://viacep.com.br/ws/${searchValue
        .split("-")
        .join()}/json/`;
      const getOptions = { method: "GET" };

      fetch(url, getOptions)
        .then((resp) => (responseData = resp.json()))
        .then((data) => {
          addressType.value = data.logradouro.split(" ")[0];
          street.value = data.logradouro;
          district.value = data.bairro;
          state.value = data.uf;
          city.value = data.localidade;
        })
        .catch((err) => console.log(err));
      return value(searchValue.replace(/(\d{5})(\d{3})/g, "$1-$2"));
    }

    addressType.value = "";
    street.value = "";
    district.value = "";
    state.value = "";
    city.value = "";
    return;
  }
  cepSearch?.addEventListener("blur", function (event) {
    getCep(event);
  });

  // end of get CEP ==============================>

  const togglePass = queryAll(".pass__icon");

  togglePass.forEach((element) =>
    element.addEventListener("click", (event) => {
      const inputElement =
        event.target.previousElementSibling.previousElementSibling;
      const toggleButton = event.target;

      if (inputElement && toggleButton) {
        if (inputElement.getAttribute("type") === "text") {
          inputElement.setAttribute("type", "password");
          toggleButton.classList.remove("ion-ios-eye");
          toggleButton.classList.add("ion-eye-disabled");
        } else {
          inputElement.setAttribute("type", "text");
          toggleButton.classList.remove("ion-eye-disabled");
          toggleButton.classList.add("ion-eye-disabled");

          setTimeout(() => {
            if (
              inputElement.getAttribute("type") === "text" &&
              document.activeElement !== inputElement
            ) {
              inputElement.setAttribute("type", "password");
              toggleButton.classList.remove("ion-ios-eye");
              toggleButton.classList.add("ion-eye-disabled");
            }
          }, 5000);
        }
      }
    })
  );
});
