// ข้อ 4: ให้เขียนภาษาโปรแกรมอะไรก็ได้หรือ Pseudocode หาผลรวมของตัวเลขใน Tree นี้
//
//            D
//          /   \
//         2     3
//        /    /   \
//       4    5     F
//           / \   / \
//          ()  7  9  10

// สร้าง Tree Node
class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

// สร้าง Tree ตามโจทย์
const tree = new TreeNode("D", [
  new TreeNode(2, [new TreeNode(4)]),
  new TreeNode(3, [
    new TreeNode(5, [new TreeNode(null), new TreeNode(7)]),
    new TreeNode("F", [new TreeNode(9), new TreeNode(10)]),
  ]),
]);

// ฟังก์ชันหาผลรวมตัวเลขใน Tree (DFS - Depth First Search)
function sumNumbers(node) {
  if (!node) return 0;

  // ถ้า value เป็นตัวเลข ให้นับ ถ้าไม่ใช่ (เช่น D, F, null) ให้ข้าม
  let sum = typeof node.value === "number" ? node.value : 0;

  // วนหา children ทุก node
  for (const child of node.children) {
    sum += sumNumbers(child);
  }

  return sum;
}

// แสดง Tree ทั้งหมด
function printTree(node, indent = "") {
  if (node.value === null) {
    console.log(`${indent}(ว่าง) ⬜`);
  } else if (typeof node.value === "number") {
    console.log(`${indent}${node.value} ✅`);
  } else {
    console.log(`${indent}${node.value} (ข้าม)`);
  }
  for (const child of node.children) {
    printTree(child, indent + "  ");
  }
}

console.log("=== โครงสร้าง Tree ===\n");
printTree(tree);

console.log(`\n=== ตัวเลขที่นับ ===`);
console.log("2 + 3 + 4 + 5 + 7 + 9 + 10");

const result = sumNumbers(tree);
console.log(`\n=== คำตอบ ===`);
console.log(`ผลรวม = ${result}`);
