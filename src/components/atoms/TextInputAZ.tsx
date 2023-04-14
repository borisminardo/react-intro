const TextInputAZ = {
  validaTesto: function (
    value: string | number | readonly string[] | undefined,
    regex: { pattern: RegExp }
  ): string | number | readonly string[] | undefined {
    if (typeof value === "string") {
      if (value === "") return value;
      let controllo = value.match(regex.pattern) ? value : value.slice(0, -1);
      return controllo;
    } else {
      return value;
    }
  },
};

export default TextInputAZ;
