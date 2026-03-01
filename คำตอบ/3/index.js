// ข้อ 3: ถ้า n มีค่าเท่ากับ 256 หลังจากจบการทำงานแล้ว r มีค่าเป็นเท่าใด
// i := n;
// r := 0;
// while (i >= 1) do
// begin
//     for j := 1 to n do
//         r := r + 1;
//     i := i / 2;
// end;

const n = 256;
let i = n;
let r = 0;

console.log("=== เริ่มต้น ===");
console.log(`n = ${n}, i = ${i}, r = ${r}\n`);

let round = 0;
while (i >= 1) {
  round++;
  const oldI = i;
  for (let j = 1; j <= n; j++) {
    r = r + 1;
  }
  i = Math.floor(i / 2); // integer division
  console.log(
    `รอบที่ ${round}: i = ${oldI} → ${i}, inner loop ทำ ${n} ครั้ง, r = ${r}`,
  );
}

console.log(`\n=== จบการทำงาน ===`);
console.log(`จำนวนรอบ outer loop = ${round}`);
console.log(`คำตอบ: r = ${r}`);
