---
title: Assign Rebar Roles และ Clone Drawings
description: จัดบทบาทของเหล็กและคัดลอกรูปแบบเอกสารเพื่อลดงานซ้ำ
sidebar:
  order: 17
---

## 87. บทนี้ใช้ตอนไหน

บทนี้มีประโยชน์เมื่อคุณเริ่มทำงานกับเอกสารจริงและต้องทำซ้ำหลาย element

เครื่องมือหลักคือ

- `Assign Rebar Roles`
- `Clone Drawings`

> บทนี้ใช้หลังจากโมเดลและ detail ต้นแบบเริ่มนิ่งแล้ว ถ้ายังไม่ได้ทำเหล็กและตรวจใน `3D` กับ `Section` ให้กลับไปบทก่อนหน้านี้ก่อน

---

## 88. Assign Rebar Roles

ใช้กำหนดบทบาทของเหล็ก เช่น

- main bars
- ties
- stirrups
- เหล็กเสริมประเภทอื่น

ประโยชน์ของการกำหนดบทบาทให้ชัดคือ

- ช่วยให้ detail ชัดขึ้น
- ช่วยให้ schedule สื่อความหมายขึ้น
- ช่วยให้ทีมเข้าใจโมเดลตรงกัน

### วิธีใช้แบบเริ่มต้น

1. เลือกชุดเหล็กหรือ host ที่ต้องการจัดบทบาท
2. ไปที่แท็บ `PowerPack Rebar`
3. คลิก `Assign Rebar Roles`
4. กำหนดบทบาทหลักให้เหล็ก เช่น main bars, ties หรือ stirrups
5. กดยืนยัน
6. ตรวจผลก่อนนำไปทำ schedule หรือ detail

### Checkpoint หลัง Assign Rebar Roles

1. บทบาทของเหล็กอ่านแล้วสื่อความหมายตรงกับหน้าที่จริง
2. ไม่มีชุดเหล็กสำคัญที่ยังไม่ได้ assign role
3. ถ้าจะทำ schedule ต่อ ให้เช็ก bar mark และ role คู่กันอีกครั้ง

---

## 89. Clone Drawings

ใช้คัดลอกรูปแบบ drawing หรือ detail ที่ทำไว้แล้วไปใช้กับ element อื่น

เหมาะกับกรณี

- คานหลายตัวคล้ายกัน
- เสาหลายต้นคล้ายกัน
- ต้องทำ drawing ซ้ำจำนวนมาก

### วิธีใช้แบบเริ่มต้น

1. เตรียม drawing ต้นแบบ 1 ชุดให้เรียบร้อยก่อน
2. เลือก element ต้นแบบหรือ drawing ต้นแบบตาม workflow ที่ใช้
3. คลิก `Clone Drawings`
4. เลือก element ปลายทางที่ geometry ใกล้เคียงกัน
5. กดยืนยัน
6. เปิด view ปลายทางแล้วตรวจ orientation, `Rebar Cover` และตำแหน่ง detail ทันที

> [!IMPORTANT]
> `Clone Drawings` เหมาะกับ element ที่ geometry, orientation, และ `Rebar Cover` ใกล้เคียงกันจริง ถ้าต่างกันมาก ให้ทำ drawing ใหม่แทนการ clone

### Checkpoint หลัง Clone Drawings

1. detail อยู่กับ element ปลายทางถูกตัว
2. annotation ไม่กลับด้านหรือหลุดตำแหน่ง
3. ถ้าปลายทางเป็น mirrored geometry ให้หยุดตรวจเรื่อง orientation ก่อนอย่างอื่น

---

## 90. ลำดับการใช้ที่แนะนำ

1. ทำโมเดลและเหล็กให้ถูกก่อน
2. กำหนด `Rebar Roles`
3. ทำ detail ต้นแบบ 1 ชุด
4. ใช้ `Clone Drawings` ไปยัง element ที่คล้ายกัน

---

## 91. สิ่งที่ควรระวัง

- อย่า clone drawing ไปยัง element ที่ต่างจากต้นแบบมากเกินไป
- อย่าเริ่ม clone ก่อนเช็ก orientation และ `Rebar Cover`
- ถ้า roles ยังมั่วอยู่ เอกสารปลายทางก็จะอ่านยากตามไปด้วย

---

## 92. สรุปแบบสั้นที่สุด

- `Assign Rebar Roles` = ทำให้เหล็กแต่ละตัวมีหน้าที่ชัด
- `Clone Drawings` = เอาเอกสารต้นแบบไปใช้ซ้ำ
- เหมาะมากกับงานที่ทำซ้ำหลายชิ้น
