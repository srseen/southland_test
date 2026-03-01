# 1.

## หลักการแก้ปัญหาเบื้องต้นคือ ไล่หา error ที่เกิดขึ้น ให้ scope เล็กลงจนเจอปัญหาที่เกิดขึ้นจริง

### step 1 : Reproduce ปัญหาให้ได้ก่อน

    - ลองใช้งานเว็บไซต์ดู ว่าพังตรงไหน ทำ step อะไรถึงเจอปัญหา
    - เกิดกับ user ทุกคนไหม? ทุก browser / device ไหม?
    - ถ้า reproduce ไม่ได้ = debug ยาก ต้องถาม user เพิ่ม

### step 2 : ดูว่าอยู่ขั้นตอน dev หรือ production ("เว็บไซต์ที่พัฒนาขึ้นมา ใช้งานแล้วมีปัญหาใช้งานไม่ได้ = production")

### step 3 : ดู error ที่ DevTools ( 2 จุดหลักที่ต้องดู)

    - Console : error ที่เกิดขึ้น ถ้าเป็น js error ต้องดู = frontend
    - Network : error ที่เกิดขึ้น ถ้าเป็น api error ต้องดู = backend
        - ดู HTTP Status Code เช่น 400 = request ผิด, 401/403 = permission, 404 = path ผิด, 500 = server error

### step 4 : ดู error ที่ log ใน server เช่น

    - db connect error
    - config ผิด
    - third-party error
    - อื่นๆ
