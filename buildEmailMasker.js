function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const first = username[0];
  const last = username[username.length - 1];

  const stars = "*".repeat(username.length - 2);

  return first + stars + last + domain;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));
