$(".ui.form").form({
  fields: {
    email: {
      identifier: "email",
      rules: [
        {
          type: "empty",
          prompt: "Please enter your email address",
        },
        {
          type: "regExp",
          value:
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
          prompt: "Please enter a valid email address",
        },
      ],
    },
    password: {
      identifier: "password",
      rules: [
        {
          type: "empty",
          prompt: "Please enter your password",
        },
        {
          type: "minLength[8]",
          prompt: "Your password must be at least {ruleValue} characters",
        },
      ],
    },
    Roll: {
      identifier: "Roll",
      rules: [
        {
          type: "exactLength[10]",
          prompt: "Please enter a valid Roll Number",
        },
      ],
    },
    phone: {
      identifier: "phone",
      rules: [
        {
          type: "exactLength[10]",
          prompt: "Please enter a valid Phone Number",
        },
      ],
    },
  },
});
