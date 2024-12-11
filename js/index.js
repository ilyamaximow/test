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
  .onSuccess(async function () {
    let data = {
      msg: document.getElementById("msg").value,
      back: document.getElementById("back").value,
    };

    console.log(data);

    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    console.log(response);

    let result = await response.text();
    alert(result);
  });
