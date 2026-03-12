---
title: ใส่เหล็กฐานราก
description: ทดลองใส่เหล็กฐานรากด้วย Main Bars แล้วต่อไปยัง Supported Element Longitudinal และ Links พร้อมวิธีเช็กผลใน plan, section, และ 3D
sidebar:
  order: 13
---

## 50. แบบฝึกหัดที่ 6: ใส่เหล็กฐานราก

บทนี้เหมาะกับการฝึกงาน footing แบบพื้นฐาน เพราะเป็น host ที่ใช้บ่อยและช่วยให้เข้าใจการวางเหล็กในองค์ประกอบแผ่นหนา รวมถึงการวางเหล็กของเสา หรือตอม่อที่รองรับอยู่บน footing

เป้าหมายของบทนี้คือ

1. เลือก footing ให้ถูกชนิด
2. ใช้ `Main Bars` กับ footing
3. ใส่ `Supported Element Longitudinal` ให้กับเสา หรือตอม่อบน footing
4. ใช้ `Links` เป็นปลอกของ supported element
5. ตรวจชั้นเหล็กบน-ล่างใน `Section` และ `3D`

---

## 51. เตรียม footing ก่อนกดคำสั่ง

1. เลือก footing
2. ดู `Properties`
3. ยืนยันว่าเป็น `Structural Foundation`
4. เช็กวัสดุว่าเป็นคอนกรีต
5. ตั้ง `Rebar Cover` ให้เรียบร้อย
6. เปิด `3D View` และ `Section`

ถ้าจะฝึกครั้งแรก ให้ใช้ footing รูปสี่เหลี่ยมธรรมดาก่อน

### Checkpoint ก่อนเริ่ม

ก่อนกด `Main Bars` ให้ตอบให้ได้ครบ 4 ข้อนี้

1. footing ตัวนี้เป็น host คอนกรีตจริง
2. มี `Section` ที่ตัดผ่าน footing ให้เห็นความหนาจริง
3. ค่า `Rebar Cover` ของ footing ถูกตั้งไว้แล้ว
4. footing ยังไม่มี opening หรือ geometry ซับซ้อนที่ทำให้ดูชั้นเหล็กยาก

---

## 52. ค่าเริ่มต้นที่แนะนำ

### 52.1 ค่าสำหรับ `Pad - Bars`

- `Rebar type` = `10M`
- `Spacing` = `150 mm`
- `Cover` = `50 mm`
- `Offset` = `50 mm`

ถ้า footing หนาและกว้างพอ สามารถใช้ค่าชุดนี้เพื่อฝึก workflow ได้ง่าย

### 52.2 ค่าสำหรับ `Supported Element Longitudinal`

ถ้า footing ของคุณมีเสา หรือตอม่อวางอยู่ด้านบน ให้ใช้ค่าตั้งต้นดังนี้

- `Main Bars Along X` = `13M`, `Quantity = 2`
- `Main Bars Along Y` = `13M`, `Quantity = 2`
- `Offset` = `65 mm`
- `Top` = `40 mm`
- `Bottom` = `65 mm`
- `Lateral left / right` = `40 mm`
- `Angle bottom` = `90`
- `Length bottom` = `150 mm`

### 52.3 ค่าสำหรับ `Links`

- `Rebar type` = `10M`
- `Quantity` = `3`
- `Spacing` = `150 mm`
- `Offset` = `0 mm`
- `Lateral left / right / rear / front` = `40 mm`
- `Angle` = `135`

> [!IMPORTANT]
> ถ้ายังไม่เคยฝึก footing มาก่อน ให้หยุดที่ `Pad - Bars` ก่อน แล้วค่อยเพิ่ม `Supported Element Longitudinal` และ `Links` ทีละชุด อย่าใส่ทุกเมนูพร้อมกันตั้งแต่ครั้งแรก

---

## 53. ขั้นตอนพื้นฐาน

> [!WARNING]
> ถ้า UI ของ footing ในเครื่องคุณใช้ชื่อเมนูไม่เหมือนตัวอย่าง อย่าสร้างทุกชุดพร้อมกัน ให้สร้างทีละชุดแล้วเช็กใน `Section` และ `3D` ทุกครั้ง เพื่อกันการวางเหล็กผิดด้านหรือผิด host

### 53.1 สร้าง `Pad - Bars` ก่อน

1. เลือก footing
2. ไปที่แท็บ `PowerPack Rebar`
3. คลิก `Main Bars`
4. ในหน้าต่าง reinforcement ไปที่ `Pad - Bars`
5. เริ่มจาก `Bottom Bars Along X` และ `Bottom Bars Along Y`
6. ถ้าเครื่องคุณยังไม่ยอมให้กรอกค่าอื่น ให้ใส่ `Quantity` ก่อน เช่น `4`
7. กด `OK`
8. กลับเข้า `Main Bars` ใหม่ แล้วค่อยเติม `Cover`, `Offset`, หรือ `Hooks`
9. เมื่อชั้นล่างขึ้นถูกแล้ว จึงค่อยทำ `Top Bars Along X` และ `Top Bars Along Y`

### 53.2 วิธีเช็กว่าชั้นล่างและชั้นบนถูกหรือยัง

- ถ้าเหล็กอยู่ใกล้ผิวล่างของ footing ใน preview ให้ถือว่าเป็นชั้นล่าง
- ถ้า preview อ่านยาก ให้สร้างทีละชั้นแล้วกลับไปดูใน `Section`
- ถ้าเหล็กไปอยู่ใกล้ผิวบน แปลว่าเลือกเมนูผิดชั้น

### 53.3 ใส่ `Supported Element Longitudinal`

หลังจาก `Pad - Bars` ขึ้นถูกต้องแล้ว จึงค่อยใส่เหล็กของเสา หรือตอม่อที่อยู่บน footing

1. เลือก footing ตัวเดิม
2. กลับเข้า `Main Bars`
3. ไปที่ `Supported Element Longitudinal`
4. เริ่มจาก `Main Bars Along X`
5. ถ้ารอบแรกแก้ค่าได้ไม่ครบ ให้ใส่ `Quantity = 2` และ `Rebar type = 13M` ก่อน
6. กด `OK`
7. เปิดคำสั่งเดิมอีกครั้ง แล้วค่อยเติม `Offset`, `Top`, `Bottom`, `Lateral left`, `Lateral right`, `Angle bottom`, `Length bottom`
8. ทำแบบเดียวกันกับ `Main Bars Along Y`
9. เช็กใน `3D` ให้เห็นเหล็กยืน 4 มุมก่อน

ถ้าต้องการเหล็กยืนเสริมเพิ่มจาก 4 มุมจึงค่อยใช้

- `Secondary Bars Along X`
- `Secondary Bars Along Y`

โดยให้เริ่มจาก `Quantity = 1` ก่อนเสมอ

> [!WARNING]
> ถ้า supported element มีหน้าตัดเล็ก อย่าเพิ่งใส่ `Secondary Bars` ตั้งแต่แรก เพราะมีโอกาสทำให้เหล็กแน่นเกินไปหรือซ้อนกันโดยไม่จำเป็น

### 53.4 ใส่ `Links`

1. กลับเข้า `Main Bars`
2. ไปที่ `Supported Element Transversal > Links`
3. ถ้ารอบแรกยังแก้ค่าได้ไม่ครบ ให้ใส่ `Quantity = 3` ก่อน
4. กด `OK`
5. เปิดคำสั่งเดิมอีกครั้ง แล้วตั้งค่า `Rebar type = 10M`, `Spacing = 150 mm`
6. ตั้ง `Offset = 0 mm`
7. ตั้ง `Lateral left`, `Lateral right`, `Lateral rear`, `Lateral front` ให้เริ่มที่ `40 mm`
8. ตั้ง `Angle = 135`
9. กด `OK`
10. เช็กใน `3D` ว่า links ล้อมเหล็กยืนอยู่ใน host จริง และไม่มีเส้นลอยเหนือหัวเสา/ตอม่อ

> [!WARNING]
> ถ้า `Links` ลอยอยู่เหนือ supported element หรือขึ้นข้อความ `Rebar is placed completely outside of its host` ให้ลด `Offset` ลงเป็น `0 mm` ก่อน แล้วตรวจ `L1/L2/L3/L4` อีกครั้ง

### 53.5 เรื่อง `Binders Bars`

ใน footing บางตัวคุณอาจเห็นเมนู

- `Binders Bars Along X`
- `Binders Bars Along Y`

เมนูนี้ใช้สำหรับเหล็กคาดเสริมหรือ binder bar ภายใน supported element แต่ **ไม่จำเป็นต้องใช้ทุกกรณี**

สำหรับการฝึกครั้งแรก แนะนำให้

- ใช้ `Pad - Bars`
- ใช้ `Supported Element Longitudinal`
- ใช้ `Links`

แล้ว **ยังไม่ใช้ `Binders`**

> [!WARNING]
> ถ้าใส่ `Binders` แล้วเกิด warning หรือมีเส้นลอยออกนอก host ให้ลบ `Binders` ออกก่อน และคงไว้เฉพาะ `Pad - Bars`, `Supported Element Longitudinal`, และ `Links`

---

## 54. วิธีเช็กผล

- ใน `Plan` ให้ดูว่าเหล็กกระจายเต็ม footing หรือไม่
- ใน `Section` ให้ดูว่าชั้นบนและชั้นล่างอยู่ในคอนกรีตจริง
- ใน `3D` ให้ดูว่าไม่มีเส้นทะลุออกนอก footing
- ใน `3D` ให้ดูว่าเหล็กยืนและ links ของ supported element อยู่ใน host จริง

---

## 55. ปัญหาที่เจอบ่อย

### เหล็กชิดขอบเกินไป

ให้เช็ก `Rebar Cover` และ offset

### เหล็กทะลุออกนอก footing

ให้ลด hook เพิ่ม offset หรือเช็ก shape ของเหล็ก

### `Links` ลอยอยู่เหนือ supported element

ให้สงสัย `Offset` และ cover ของ `Supported Element Transversal` ก่อน

- ลด `Offset` ลงก่อน
- เช็ก `Lateral left / right / rear / front`
- ตรวจใน `3D` ว่า links ล้อมเหล็กยืนจริง

### `Binders` แล้วขึ้น warning

ถ้า `Binders` ขึ้นข้อความ `Rebar is placed completely outside of its host` หรือมีเส้นลอยนอก host ให้ลบ `Binders` ออกก่อน เพราะใน footing พื้นฐานส่วนนี้ไม่จำเป็น

### หาเหล็กไม่เจอ

ให้เช็ก `Detail Level = Fine` และใช้ `Rebar Visibility`

### กด `Main Bars` แล้วงงว่าเมนูไหนคือชั้นล่าง

ให้สังเกตจาก preview ในหน้าต่าง และใช้ `Section` เช็กหลังสร้างทีละชั้น อย่าพยายามสร้างสองชั้นพร้อมกันตั้งแต่ครั้งแรก
