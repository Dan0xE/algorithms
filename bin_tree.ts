let bin_tree: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]

console.log('Current Tree: ' + bin_tree)

//Invert the binary tree
function invert_tree(tree: number[]): number[] {
    let new_tree: number[] = []
    for (let i : number = 0; i < tree.length; i++) {
        new_tree.push(tree[tree.length - i - 1])
    }
    return new_tree
}

console.log('Inverted Tree: ' + invert_tree(bin_tree))


//linear search
function linear_search(tree: number[], value: number): number {
    for (let i : number = 0; i < tree.length; i++) {
        if (tree[i] == value) {
            return i
        }
    }
    return -1
}

console.log(linear_search(bin_tree, 1))

//binary search
function binary_search(tree: number[], value: number): number {
  let low: number = 0
  let high: number = tree.length - 1
  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2)
    if (tree[mid] == value) {
      return mid
    }
    if (tree[mid] < value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}
  
console.log(binary_search(bin_tree, 1))

//binary search recursive
function binary_search_recursive(tree: number[], value: number, low: number, high: number): number {
  if (low > high) {
    return -1
  }
  let mid: number = Math.floor((low + high) / 2)
  if (tree[mid] == value) {
    return mid
  }
  if (tree[mid] < value) {
    return binary_search_recursive(tree, value, mid + 1, high)
  } else {
    return binary_search_recursive(tree, value, low, mid - 1)
  }
}

console.log(binary_search_recursive(bin_tree, 1, 0, bin_tree.length - 1))

//binary search recursive with no low and high
function binary_search_recursive_no_low_high(tree: number[], value: number): number {
  let low: number = 0
  let high: number = tree.length - 1
  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2)
    if (tree[mid] == value) {
      return mid
    }
    if (tree[mid] < value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

console.log(binary_search_recursive_no_low_high(bin_tree, 1))

