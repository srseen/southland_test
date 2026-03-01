# คำตอบแบบทดสอบ Programmer Assessment Test

## บริษัท เซาท์แลนด์ รับเบอร์ จำกัด

---

## โครงสร้างโปรเจค

```
├── README.md                  ← คุณอยู่ที่นี่
├── package.json               ← npm scripts สำหรับรันโปรแกรม
├── คำถาม/                     ← ไฟล์โจทย์ต้นฉบับ (PDF)
│   └── Programmer Assessment Test.pdf
├── public/                    ← รูปภาพประกอบ
│   ├── question_4.png
│   └── er-diagram.png
└── คำตอบ/                     ← คำตอบแยกตามข้อ
    ├── 1/README.md            ← ข้อ 1: การ Debug เว็บไซต์
    ├── 2/README.md + index.js ← ข้อ 2: Loop Trace (ค่า i)
    ├── 3/README.md + index.js ← ข้อ 3: Nested Loop (ค่า r)
    ├── 4/README.md + index.js ← ข้อ 4: Tree Sum (DFS)
    ├── 5/README.md + er-diagram.drawio ← ข้อ 5: Database Design
    └── 6/README.md              ← ข้อ 6: SQL Query
```

---

## วิธีรันโปรแกรม

### ความต้องการ

- **Node.js** v16 ขึ้นไป

### รันทีละข้อ

```bash
# ข้อ 2 - หาค่า i
npm run q2

# ข้อ 3 - หาค่า r (n=256)
npm run q3

# ข้อ 4 - หาผลรวมตัวเลขใน Tree
npm run q4
```

### รันทุกข้อพร้อมกัน

```bash
npm run test:all
```

---

## สรุปคำตอบแต่ละข้อ

### ข้อ 1 — การตรวจสอบปัญหาเว็บไซต์เบื้องต้น

> [ดูคำตอบเต็มที่ คำตอบ/1/README.md](คำตอบ/1/README.md)

**แนวทาง 4 ขั้นตอน:**

1. **Reproduce** ปัญหาให้ได้ก่อน
2. ดูว่าอยู่ **Dev** หรือ **Production**
3. ดู error ที่ **DevTools** (Console + Network)
4. ดู **Server Logs** (DB, Config, Third-party)

---

### ข้อ 2 — Loop Trace: ค่าของ i

> [ดูคำตอบเต็มที่ คำตอบ/2/README.md](คำตอบ/2/README.md) | [ซอร์สโค้ด](คำตอบ/2/index.js)

**คำตอบ: `i = 5`**

| รอบ | x     | i   |
| --- | ----- | --- |
| 1   | 2     | 2   |
| 2   | 4     | 3   |
| 3   | 16    | 4   |
| 4   | 65536 | 5   |

```bash
npm run q2
```

---

### ข้อ 3 — Nested Loop: ค่าของ r (n=256)

> [ดูคำตอบเต็มที่ คำตอบ/3/README.md](คำตอบ/3/README.md) | [ซอร์สโค้ด](คำตอบ/3/index.js)

**คำตอบ: `r = 2,304`** (9 รอบ × 256 = 2,304)

```bash
npm run q3
```

---

### ข้อ 4 — Tree Traversal: ผลรวมตัวเลข

![โจทย์ข้อ 4](public/question_4.png)

> [ดูคำตอบเต็มที่ คำตอบ/4/README.md](คำตอบ/4/README.md) | [ซอร์สโค้ด](คำตอบ/4/index.js)

**คำตอบ: `ผลรวม = 40`** (2 + 3 + 4 + 5 + 7 + 9 + 10)

- ใช้ **DFS** traverse ทุก node
- นับเฉพาะ node ที่เป็น **ตัวเลข** (ข้าม D, F)

```bash
npm run q4
```

---

### ข้อ 5 — Database Design & Normalization

> [ดูคำตอบเต็มที่ คำตอบ/5/README.md](คำตอบ/5/README.md) | [ER Diagram (.drawio)](คำตอบ/5/er-diagram.drawio)

**Normalize เป็น 4 ตาราง:**

| ตาราง             | หน้าที่                         |
| ----------------- | ------------------------------- |
| `prefixes`        | เก็บคำนำหน้าชื่อ                |
| `customer_sizes`  | เก็บขนาดลูกค้า (S, M, B)        |
| `customer_grades` | เก็บเกรดลูกค้า (A, B, C, D)     |
| `customers`       | ตารางหลัก + Self-Referencing FK |

> **จุดสำคัญ**: `parent_customer_id` เป็น Self-Referencing FK — NULL = ลูกค้าหลัก, มีค่า = ลูกค้าย่อย

#### ER Diagram

![ER Diagram](public/er-diagram.png)

---

### ข้อ 6 — SQL Query ค้นหาลูกค้าย่อย

> [ดูคำตอบเต็มที่ คำตอบ/6/README.md](คำตอบ/6/README.md)

ใช้ **Self JOIN** เพื่อเชื่อมตาราง `customers` กับตัวเอง:

```sql
SELECT sub.*, main.first_name AS main_customer
FROM customers sub
INNER JOIN customers main ON sub.parent_customer_id = main.customer_id;
```

---

## เทคโนโลยีที่ใช้

- **JavaScript (Node.js)** — ข้อ 2, 3, 4
- **SQL (MySQL)** — ข้อ 5, 6
- **draw.io** — ER Diagram ข้อ 5
