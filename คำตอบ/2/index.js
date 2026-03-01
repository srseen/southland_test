// ข้อ 2: จากส่วนของโปรแกรมที่กำหนดให้ต่อไปนี้ หลังจากจบการทำงานแล้ว ค่าของ i มีค่าเป็นเท่าใด
// x := 1;
// i := 1;
// while (x <= 1000)
// begin
//     x := 2^x;
//     i := i + 1;
// end;

let x = 1;
let i = 1;

console.log("=== เริ่มต้น ===");
console.log(`x = ${x}, i = ${i}\n`);

let round = 0;
while (x <= 1000) {
  round++;
  const oldX = x;
  x = Math.pow(2, x); // 2 ยกกำลัง x
  i = i + 1;
  console.log(`รอบที่ ${round}: x = 2^${oldX} = ${x}, i = ${i}`);
}

console.log(`\n=== จบการทำงาน ===`);
console.log(`คำตอบ: i = ${i}`);
