export function validateForm(payload) {
  let invalidFields = {};

  for (const key in payload) {
    if (Object.prototype.hasOwnProperty.call(payload, key)) {
      const value = payload[key];
      if (value === "" || value === "") {
        invalidFields = { ...invalidFields, [key]: true };
      }
    }
  }

  return invalidFields;
}
