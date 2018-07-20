export const injectVars = obj =>
  obj
    ? Object.entries(obj).reduce(
      (out, [key, value]) => ({
        ...out,
        [`--${key}`]: value
      }),
      {}
    )
    : {}
