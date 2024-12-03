let validation = new JustValidate("form");

validation
  .addField("#back", [
    {
      rule: "required",
      errorMessage: "Заполните поле",
    },
    {
      rule: "minLength",
      value: 6,
      errorMessage: "Минимум 6 символов",
    },
  ])
  .addField("#msg", [
    {
      rule: "required",
      errorMessage: "Заполните поле",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Минимум 10 символов",
    },
  ])
  .onSuccess(function () {
    alert("Письмо отправлено!");
  });
