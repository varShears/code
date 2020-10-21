function _count(root) {
  let count = 0
  if (!root.children.length) {
    return 1
  } else {
    root.children.forEach((e) => {
      count += _count(e)
    })
  }
  root.count = count
  return count
}

const root = {
  count: 0,
  children: [
    {
      count: 0,
      children: [],
    },
    {
      count: 0,
      children: [
        {
          count: 0,
          children: [],
        },
        {
          count: 0,
          children: [],
        },
      ],
    },
    {
      count: 0,
      children: [
        {
          count: 0,
          children: [
            {
              count: 0,
              children: [],
            },
          ],
        },
      ],
    },
  ],
}

_count(root)
console.log(root)
