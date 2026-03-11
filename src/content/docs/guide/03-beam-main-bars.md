---
title: ใส่เหล็กคาน
description: ใส่เหล็กล่าง เหล็กบน และเหล็กปลอกในคาน
sidebar:
  order: 3
---

## 6. แบบฝึกหัดที่ 1: ใส่เหล็กคานด้วย Main Bars

นี่คือบทฝึกที่ควรทำก่อนที่สุด และควรทำตามลำดับนี้เสมอ

1. ใส่ `Bottom Longitudinal`
2. ใส่ `Top Longitudinal`
3. ใส่ `Transversal Bars`

ถ้าคุณเพิ่งเริ่ม อย่าเริ่มจาก `Beam Bottom Bars` ก่อน เพราะเมนูนั้นเหมาะกับเหล็กเสริมเฉพาะช่วงรองรับมากกว่า ไม่ใช่การเริ่มวางเหล็กหลักทั้งคาน

### 6.1 เปิดมุมมองให้พร้อม

1. เปิด `3D View`
2. เปิด `Structural Plan` หรือ `Section` ที่เห็นคานชัด
3. คลิกมุมมอง `3D`
4. ตั้ง `Detail Level = Fine`

### 6.2 เลือกคานให้ถูกตัว

1. คลิกคาน 1 ตัวในโมเดล
2. ดู `Properties`
3. ยืนยันว่าเป็น `Structural Beam`
4. เช็กค่า `Rebar Cover - Top`, `Rebar Cover - Bottom`, `Rebar Cover - Other Faces`

### 6.3 กดปุ่มไหนก่อน

1. ไปที่แท็บ `PowerPack Rebar`
2. คลิก `Main Bars`
3. เมื่อหน้าต่าง `Main Bars` เปิดขึ้น ให้เริ่มที่เมนูซ้าย `Bottom Longitudinal`

### 6.4 ขั้นที่ 1: ใส่ Bottom Longitudinal

ในหน้าต่าง `Main Bars` ให้คลิกเมนูซ้าย `Bottom Longitudinal` แล้วกรอกค่าเริ่มต้นนี้

> [!WARNING]
> ค่า `Left offset (X1)` และ `Right offset (X2)` ที่เป็น `0 mm` ใช้เพื่อการฝึกกับคานตัวอย่างเท่านั้น ไม่ใช่ค่าปลอดภัยทั่วไปสำหรับทุกคาน ถ้า `Rebar Cover` ของคานยังไม่ชัด ให้เริ่มจากค่า offset ที่สอดคล้องกับ cover ก่อน

- `Quantity` = `2`
- `Rebar type` = `10M` หรือ DB ที่เล็กใกล้เคียงถ้ามี
- `Left offset (X1)` = `0 mm` ถึง `50 mm`
- `Right offset (X2)` = `0 mm` ถึง `50 mm`
- `Bottom offset (Z)` = `40 mm`
- `Hook angle` = `0` ถ้าต้องการเริ่มแบบตรง หรือปล่อยให้โปรแกรมคำนวณภายหลัง
- `Hook length` = `0`
- `Anchorage length (A1)` = `150 mm`
- `Anchorage length (A2)` = `150 mm`

### ตารางค่าที่ต้องกรอก: Bottom Longitudinal

| ช่องที่ต้องกรอก | ค่าแนะนำ |
| --- | --- |
| `Quantity` | `2` |
| `Rebar type` | `10M` |
| `Left offset (X1)` | `0 mm` หรือ `50 mm` |
| `Right offset (X2)` | `0 mm` หรือ `50 mm` |
| `Bottom offset (Z)` | `40 mm` |
| `Hook angle (1)` | `0 deg` |
| `Hook angle (2)` | `0 deg` |
| `Hook length (L1)` | `0 mm` |
| `Hook length (L2)` | `0 mm` |
| `Anchorage length (A1)` | `150 mm` |
| `Anchorage length (A2)` | `150 mm` |

### วิธีทำทีละปุ่ม

1. คลิก `Bottom Longitudinal`
2. คลิกช่อง `Quantity` แล้วพิมพ์ `2`
3. คลิกช่อง `Rebar type` แล้วเลือก `10M`
4. คลิก `Left offset (X1)` แล้วใส่ `0` หรือ `50`
5. คลิก `Right offset (X2)` แล้วใส่ `0` หรือ `50`
6. คลิก `Bottom offset (Z)` แล้วใส่ `40`
7. ถ้าต้องการให้โปรแกรมช่วยคำนวณความยาว ให้กด `Calculate bars length`
8. ถ้าค่าบางตัวเปลี่ยนหลังคำนวณ ถือว่าเป็นเรื่องปกติ
9. กด `OK`

> [!IMPORTANT]
> ถ้าคุณยังไม่แน่ใจว่า geometry และ `Rebar Cover` ของคานถูกต้องหรือไม่ อย่าเพิ่งกด `Calculate bars length` ในรอบแรก ให้สร้างเหล็กด้วยค่าพื้นฐานก่อน แล้วค่อยกลับมาคำนวณภายหลัง

### หมายเหตุสำคัญ

- ถ้า `Quantity = 0` จะไม่เกิดเหล็ก
- ถ้ากด `Calculate bars length` แล้วค่า offset หรือ anchorage เปลี่ยน เป็นเพราะโปรแกรมคำนวณตาม geometry จริง
- ถ้าต้องการทดลองให้เหล็กขึ้นก่อน อาจกด `OK` โดยไม่กด `Calculate bars length` ก็ได้

### 6.5 เช็กผลของ Bottom Longitudinal

1. กลับไปที่ `3D View`
2. ซูมเข้าที่คาน
3. ดูว่ามีเหล็ก 2 เส้นบริเวณด้านล่างคานหรือไม่
4. ถ้ายังไม่เห็น ให้กด `Rebar Visibility`

### สิ่งที่ควรเห็น

- มีเหล็ก 2 เส้นอยู่ด้านล่างของคาน
- เหล็กอยู่ภายในคาน ไม่ทะลุออกนอกผิว

### 6.6 ขั้นที่ 2: ใส่ Top Longitudinal

หลังจากเห็นเหล็กล่างแล้ว ให้กลับเข้า `Main Bars` อีกครั้ง แล้วคลิกเมนูซ้าย `Top Longitudinal`

> [!WARNING]
> อย่าใส่เหล็กบนต่อทันทีถ้ายังไม่เห็นเหล็กล่างใน `3D View` หรือ `Section` เพราะถ้าเหล็กล่างยังผิดตำแหน่ง การใส่เหล็กบนเพิ่มจะทำให้แยกสาเหตุได้ยากขึ้น

ให้กรอกค่าตั้งต้นนี้

- `Quantity` = `2`
- `Rebar type` = `10M`
- `Left offset (X1)` = `0 mm`
- `Right offset (X2)` = `0 mm`
- `Top offset (Z)` = `40 mm`
- `Hook angle` = `0`
- `Hook length` = `0`
- `Anchorage length (A1)` = `0 mm` ถึง `150 mm`
- `Anchorage length (A2)` = `0 mm` ถึง `150 mm`

### ตารางค่าที่ต้องกรอก: Top Longitudinal

| ช่องที่ต้องกรอก | ค่าแนะนำ |
| --- | --- |
| `Quantity` | `2` |
| `Rebar type` | `10M` |
| `Left offset (X1)` | `0 mm` |
| `Right offset (X2)` | `0 mm` |
| `Top offset (Z)` | `40 mm` |
| `Hook angle (1)` | `0 deg` |
| `Hook angle (2)` | `0 deg` |
| `Hook length (L1)` | `0 mm` |
| `Hook length (L2)` | `0 mm` |
| `Anchorage length (A1)` | `0 mm` หรือ `150 mm` |
| `Anchorage length (A2)` | `0 mm` หรือ `150 mm` |

### วิธีทำทีละปุ่ม

1. คลิก `Top Longitudinal`
2. ใส่ `Quantity = 2`
3. เลือก `Rebar type = 10M`
4. ใส่ `Left offset (X1) = 0`
5. ใส่ `Right offset (X2) = 0`
6. ใส่ `Top offset (Z) = 40`
7. ถ้าต้องการ ให้กด `Calculate bars length`
8. หรือถ้าต้องการทดลองแบบง่าย ให้กด `OK` เลย

### สิ่งที่ต้องระวัง

- อย่าใส่ `Top offset (Z)` เป็นค่ามากเกินหน้าตัดคาน เช่น `400 mm` สำหรับคาน 16 x 32
- ค่า `Top offset` เป็นระยะจากผิวด้านบน ไม่ใช่ความลึกทั้งหมดของคาน

### 6.7 เช็กผลของ Top Longitudinal

1. กลับไป `3D View`
2. หมุนโมเดลดูด้านบนของคาน
3. คลิกเหล็กแล้วดู `Properties`
4. ถ้าทำถูก จะเห็น `G.Rebar Role = Top longitudinal layer`

### 6.8 ขั้นที่ 3: ใส่ Transversal Bars

หลังจากมีเหล็กบนและเหล็กล่างแล้ว ค่อยใส่ปลอกคาน

> [!IMPORTANT]
> ถ้าเหล็กบนหรือเหล็กล่างยังทะลุออกนอกคาน หรือยังหาไม่เจอใน `3D View` อย่าเพิ่งไปที่ `Transversal Bars` ให้แก้ longitudinal bars ให้เรียบร้อยก่อน

### ปุ่มที่ต้องกด

1. เลือกคานเดิม
2. ไปที่ `PowerPack Rebar`
3. คลิก `Main Bars`
4. คลิกเมนูซ้าย `Transversal Bars`

### ค่าตั้งต้นสำหรับทดลอง

- `Start offset (O1)` = `50 mm` ถึง `100 mm`
- `End offset (O2)` = `50 mm` ถึง `100 mm`
- `Link rebar type` = `10M` ถ้าในไฟล์มีแค่นี้ หรือใช้ขนาดเล็กกว่านี้ถ้ามี
- `Enclosed links` = `10M`
- `Configurations` = `Stirrups`
- `Define distribution by` = `Spacing`
- `Distribution type` = `Uniform Distribution`

### ตารางค่าที่ต้องกรอก: Transversal Bars

| ช่องที่ต้องกรอก | ค่าแนะนำ |
| --- | --- |
| `Start offset (O1)` | `50 mm` ถึง `100 mm` |
| `End offset (O2)` | `50 mm` ถึง `100 mm` |
| `Link rebar type` | `10M` |
| `Enclosed links` | `10M` |
| `Configurations` | `Stirrups` |
| `Define distribution by` | `Spacing` |
| `Distribution type` | `Uniform Distribution` |
| `Q` | ระบบคำนวณให้ |
| `S` | `150 mm` |
| `L` | ระบบคำนวณให้ |
| `Link diameter` | `10M` |
| `Enclosed links` ในตาราง | `10M` |

### ค่าชุดสั้นที่สุดสำหรับคานตัวอย่าง 16 x 32

ถ้าคุณไม่อยากไล่อ่านหลายบรรทัด ให้กรอกตามนี้เลย

#### Bottom Longitudinal

- `Quantity = 2`
- `Rebar type = 10M`
- `X1 = 0`
- `X2 = 0`
- `Z = 40`
- `A1 = 150`
- `A2 = 150`

#### Top Longitudinal

- `Quantity = 2`
- `Rebar type = 10M`
- `X1 = 0`
- `X2 = 0`
- `Z = 40`
- `A1 = 0` หรือ `150`
- `A2 = 0` หรือ `150`

#### Transversal Bars

- `O1 = 50 ถึง 100`
- `O2 = 50 ถึง 100`
- `S = 150`
- `Configurations = Stirrups`
- `Define distribution by = Spacing`
- `Distribution type = Uniform Distribution`
- `Link diameter = 10M`

### วิธีกรอกในตารางด้านล่าง

1. คลิกเครื่องหมาย `+` สีเขียว
2. ให้มี 1 แถวเพิ่มขึ้นมา
3. ในแถวนั้นให้ใส่
   - `S` = `150 mm`
   - `Link diameter` = `10M`
   - `Enclosed links` = `10M`
4. ค่า `Q` และ `L` ปล่อยให้โปรแกรมคำนวณให้เอง
5. ดูบรรทัดเทาด้านบนว่าระบบคำนวณช่วงปลอกได้ยาวเกือบเต็มคานหรือไม่
6. กด `OK`

### ค่าที่ใช้งานได้จริงจากการทดลอง

ค่าชุดนี้เป็นค่าที่ทดลองแล้วทำให้ `Transversal Bars` ขึ้นเต็มคานได้จริง

- `Configurations = Stirrups`
- `Define distribution by = Spacing`
- `Distribution type = Uniform Distribution`
- `S = 150 mm`
- `Link rebar type = 10M`
- `Enclosed links = 10M`
- `Start offset` และ `End offset` หลังคำนวณอาจกลายเป็นประมาณ `97 mm`

### วิธีเช็กว่าปลอกขึ้นถูกแล้วหรือยัง

ให้ดู 2 จุดนี้

1. บรรทัดเทาด้านบนในหน้าต่าง `Transversal Bars`
   - ถ้าขึ้นประมาณ `37 bars from 97 mm to 5497 mm` แปลว่าปลอกวิ่งเกือบเต็มคานแล้ว
   - ถ้าขึ้นประมาณ `12 bars from 50 mm to 1700 mm` แปลว่าปลอกยังมาแค่บางช่วง
2. ดูใน `3D View`
   - ถ้าปลอกขึ้นเต็มคาน จะเห็น stirrups เรียงตลอดช่วงคาน

### ถ้าปลอกมาแค่ครึ่งคาน

ให้ตรวจตามนี้

1. `Configurations` ต้องเป็น `Stirrups`
2. `Define distribution by` ต้องเป็น `Spacing`
3. `Distribution type` ต้องเป็น `Uniform Distribution`
4. อย่าใช้ `Multiple links` สำหรับการทดลองครั้งแรก
5. ถ้าโปรแกรมคำนวณ `Start offset` และ `End offset` ใหม่ อย่าตกใจ ให้ดูบรรทัดเทาด้านบนเป็นหลัก

### ถ้าปลอกยังไม่ขึ้น

- ให้ถือว่าคานตัวนี้ผ่านขั้น `Main Bars` แล้วถ้าเหล็กบน-ล่างขึ้นครบ
- ปลอกอาจต้องปรับ distribution หรือชนิด link เพิ่มภายหลัง
- สำหรับผู้เริ่มต้น ให้ฝึกให้เหล็กบน-ล่างขึ้นให้ชัวร์ก่อน แล้วค่อยกลับมาปรับปลอก

### 6.9 เช็กผลหลังใส่เหล็กคานครบ

หลังจากทำ `Bottom Longitudinal` และ `Top Longitudinal` แล้ว ให้ตรวจดังนี้

1. เปิด `3D View`
2. คลิกเหล็กแต่ละชุด
3. ดู `Properties`
4. ตรวจว่า role ถูกต้อง

### สิ่งที่ควรเห็น

- ชุดหนึ่งเป็น `Bottom longitudinal layer`
- อีกชุดหนึ่งเป็น `Top longitudinal layer`
- ทั้งสองชุดอยู่ภายในคาน

### 6.10 ถ้ายังไม่เห็นเหล็ก

ให้ตรวจตามลำดับนี้

1. มุมมองนี้เป็น `Fine` หรือยัง
2. คานนี้เป็น `Structural Beam` จริงหรือไม่
3. cover ถูกตั้งไว้หรือยัง
4. ใช้ `Rebar Visibility` แล้วหรือยัง
5. คลิกใกล้คานแล้วกด `TAB` เพื่อไล่หา `Rebar`

---

