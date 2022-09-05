window.onload = () => {
    const newClientCheckbox = document.getElementsByClassName(
      "new-client-checkbox"
    )[0];
    const clientSelect = document.getElementsByClassName(
      "select-client"
    )[0];
    const newClientNameInput = document.getElementsByClassName(
      "input-name"
    )[0];
    const newClientEmailInput = document.getElementsByClassName(
      "input-email"
    )[0];
    const newClientTaxNumberInput = document.getElementsByClassName(
      "input-tax-number"
    )[0];
    
    if (newClientCheckbox && clientSelect && newClientNameInput && newClientEmailInput && newClientTaxNumberInput) {
      const onChangeNewClientCheckBox = (ev) => {
          clientSelect.value = "";
          newClientNameInput.value = "";
          newClientEmailInput.value = "";
          newClientTaxNumberInput.value = "";
        };
      
        newClientCheckbox.addEventListener('change', onChangeNewClientCheckBox);
    }
  };
  