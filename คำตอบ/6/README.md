# 6.

## โจทย์: จากข้อที่ 5 ให้ทำการค้นหาข้อมูลลูกค้าย่อยเท่านั้นและให้แสดงว่าเป็นลูกค้าย่อยของลูกค้าหลักรายไหน

## แนวคิด

- ลูกค้าย่อย = ลูกค้าที่มี `parent_customer_id IS NOT NULL`
- ใช้ **Self JOIN** เพื่อเชื่อมตาราง `customers` กับตัวเอง → ดึงข้อมูลลูกค้าหลักมาแสดง

## SQL Query

```sql
SELECT
    sub.customer_id       AS sub_customer_id,
    p1.prefix_name        AS sub_prefix,
    sub.first_name         AS sub_first_name,
    sub.last_name          AS sub_last_name,
    main.customer_id      AS main_customer_id,
    p2.prefix_name        AS main_prefix,
    main.first_name        AS main_first_name,
    main.last_name         AS main_last_name
FROM customers sub
INNER JOIN customers main ON sub.parent_customer_id = main.customer_id
INNER JOIN prefixes p1 ON sub.prefix_id = p1.prefix_id
INNER JOIN prefixes p2 ON main.prefix_id = p2.prefix_id;
```

## อธิบาย Query

| ส่วน                                           | อธิบาย                                                    |
| ---------------------------------------------- | --------------------------------------------------------- |
| `FROM customers sub`                           | เริ่มจากตาราง customers โดยตั้งชื่อว่า `sub` (ลูกค้าย่อย) |
| `INNER JOIN customers main`                    | join กับตัวเองโดยตั้งชื่อว่า `main` (ลูกค้าหลัก)          |
| `ON sub.parent_customer_id = main.customer_id` | เชื่อม FK ลูกค้าย่อย → PK ลูกค้าหลัก                      |
| `INNER JOIN prefixes p1`                       | ดึงคำนำหน้าของลูกค้าย่อย                                  |
| `INNER JOIN prefixes p2`                       | ดึงคำนำหน้าของลูกค้าหลัก                                  |

> **หมายเหตุ**: การใช้ `INNER JOIN` จะทำให้ได้เฉพาะลูกค้าที่มี `parent_customer_id` เท่านั้น (ลูกค้าย่อย)
> ลูกค้าหลักที่ `parent_customer_id IS NULL` จะไม่ถูกดึงมา

## ตัวอย่างผลลัพธ์

| sub_customer_id | sub_prefix | sub_first_name | sub_last_name | main_customer_id | main_prefix | main_first_name | main_last_name |
| --------------- | ---------- | -------------- | ------------- | ---------------- | ----------- | --------------- | -------------- |
| 2               | นาง        | สมหญิง         | รักดี         | 1                | นาย         | สมชาย           | ใจดี           |
| 3               | นางสาว     | สมศรี          | มั่นใจ        | 1                | นาย         | สมชาย           | ใจดี           |
