function maxDeep(root) {
  if (!root) {
    return 0
  }

  Math.max(maxDeep(root.left) + 1, maxDeep(root.right) + 1)
}
