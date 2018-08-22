const px = str => Number.isFinite(str) ? `${str}px` : str

export const injectVars = obj =>
  obj
    ? Object.entries(obj).reduce(
      (out, [key, value]) => ({
        ...out,
        [`--${key}`]: px(value)
      }),
      {}
    )
    : {}
