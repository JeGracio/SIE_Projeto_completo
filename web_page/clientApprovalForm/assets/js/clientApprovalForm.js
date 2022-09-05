window.onload = () => {
  const clientApprovalCheckbox = document.getElementsByClassName(
    "client-approval-checkbox"
  )[0];

  if (clientApprovalCheckbox && clientContinueCheckbox) {
    const onChangeClientApprovalCheckBox = (ev) => {
      if (ev.target.checked) {
        const clientContinueCheckbox = document.getElementsByClassName(
            "client-continue-checkbox"
          )[0];
        clientContinueCheckbox.checked = false;
      }
    };

    clientApprovalCheckbox.addEventListener(
      "change",
      onChangeClientApprovalCheckBox
    );
  }
};
