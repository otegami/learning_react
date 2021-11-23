export const timesTwo = (number) => number * 2

export const order = (items) => {
  const total = items.reduce((price, item) => price + item.price, 0)
  return { orderItems: items, total }
}
