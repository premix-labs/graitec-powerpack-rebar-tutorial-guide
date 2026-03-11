---
title: เหล็กเดือยและเหล็กต่อเสา
description: สอนใส่ Top Starter Bars และ Bottom Starter Bars ในเสาแบบทำตามได้
sidebar:
  order: 6
---

## 9. บทต่อของงานเสา: เหล็กเดือยและเหล็กต่อ

หลังจากใส่เหล็กยืน เหล็กยืนเสริม เหล็กคาด และเหล็กปลอกแล้ว ขั้นถัดไปของงานเสาคือการทำเหล็กที่ยื่นขึ้นหรือลงเพื่อเตรียมต่อช่วงถัดไป

ในหน้าต่าง `Reinforcement` ของเสา คุณจะเห็นหัวข้อที่เกี่ยวข้องอยู่แล้ว เช่น

- `Longitudinal reinforcement > Top Starter Bars`
- `Longitudinal reinforcement > Bottom Starter Bars`
- `Transverse Reinforcement > Top Starter Bars`
- `Transverse Reinforcement > Bottom Starter Bars`

บทนี้ใช้ค่าตัวอย่างที่ทดลองแล้วเห็นผลจริงในโมเดล เพื่อให้คุณทำตามได้ตรง ๆ

> หมายเหตุ: ค่าชุดนี้เป็นค่าฝึก workflow ในโปรแกรม ไม่ใช่ค่ามาตรฐานของงานจริง

### 9.1 ก่อนเริ่ม

ให้เสามีอย่างน้อยดังนี้ก่อน

- เหล็กยืนหลัก
- เหล็กปลอกหลัก

ถ้ามี `Secondary Bars` หรือ `Cross Tie` อยู่แล้วก็ใช้ต่อได้เลย

### 9.2 แนวคิดของ Starter Bars

- `Top Starter Bars` คือเหล็กที่ยื่นขึ้นเหนือหัวเสา
- `Bottom Starter Bars` คือเหล็กที่ยื่นลงใต้ตีนเสา

โดยมากใช้สำหรับ

- ต่อเสาชั้นล่างกับเสาชั้นบน
- ต่อเสากับฐาน

## 9.3 ทดลองใส่ Top Starter Bars

### 9.3.1 ใส่เหล็กยืนช่วงบน

1. เปิด `3D View` และ `Section`
2. เลือกเสา 1 ต้น
3. ไปที่แท็บ `PowerPack Rebar`
4. เปิดคำสั่ง `Reinforcement`
5. ไปที่ `Longitudinal reinforcement > Top Starter Bars > Main Bars`

ให้ใส่ค่าตัวอย่างดังนี้

- `Quantity along a = 2`
- `Quantity along b = 2`
- `Rebar type along x = 13M`
- `Rebar type along y = 13M`
- `Bottom offset = 0 mm`
- `Top offset = 600 mm`

จากนั้นกด `OK`

### 9.3.2 สิ่งที่ควรเห็น

ใน `Section` และ `3D` คุณควรเห็นว่า

- มีเหล็กยื่นขึ้นจากหัวเสา
- แนวของเหล็กตรงกับแนวเหล็กยืนหลัก
- เหล็กยังอยู่ภายในหน้าตัดเสา

ถ้ายังไม่เห็น ให้เช็ก `Detail Level = Fine` และใช้ `Rebar Visibility`

## 9.4 ใส่ปลอกช่วง Top Starter Bars

1. เลือกเสาต้นเดิม
2. เปิด `Reinforcement`
3. ไปที่ `Transverse Reinforcement > Top Starter Bars`

ให้ใช้ค่าตัวอย่างดังนี้

- `Rebar type = 10M`
- `Configurations = Steel Binders`
- `Bottom offset (O1)` ขยับขึ้นไปให้ช่วงปลอกไปอยู่ใกล้หัวเสา

จากนั้นกด `Add` ในตาราง แล้วใส่ package ชุดแรกเป็น

- `Q = 4`
- `S = 100 mm`

เวลาตรวจผล ให้ยึดตำแหน่งใน `Section` และข้อความสรุปด้านบนของหน้าต่างเป็นหลัก ถ้าช่วงปลอกไปอยู่ใกล้หัวเสาและตามช่วงยื่นขึ้น แปลว่าใช้ได้

### 9.4.1 สิ่งที่ควรเห็น

- ปลอกช่วงบนอยู่เฉพาะบริเวณหัวเสา
- ไม่กองอยู่กลางหรือล่างเสา
- ปลอกตามขึ้นไปคุมช่วงที่มี starter bars

## 9.5 ทดลองใส่ Bottom Starter Bars

### 9.5.1 ใส่เหล็กยืนช่วงล่าง

1. เลือกเสาต้นเดิม
2. เปิด `Reinforcement`
3. ไปที่ `Longitudinal reinforcement > Bottom Starter Bars > Main Bars`

ให้ใส่ค่าตัวอย่างดังนี้

- `Quantity along a = 2`
- `Quantity along b = 2`
- `Rebar type along x = 13M`
- `Rebar type along y = 13M`
- `Bottom offset = 0 mm`
- `Top offset = 600 mm`

จากนั้นกด `OK`

### 9.5.2 สิ่งที่ควรเห็น

- มีเหล็กยื่นลงจากตีนเสา
- แนวเหล็กตรงกับเหล็กยืนหลัก
- เหล็กไม่ลอยขึ้นไปอยู่กลางเสา

## 9.6 ใส่ปลอกช่วง Bottom Starter Bars

1. เลือกเสาต้นเดิม
2. เปิด `Reinforcement`
3. ไปที่ `Transverse Reinforcement > Bottom Starter Bars`

ให้ใช้ค่าตัวอย่างดังนี้

- `Rebar type = 10M`
- `Configurations = Steel Binders`
- `Bottom offset (O1) = 50 mm`

จากนั้นกด `Add` ในตาราง แล้วใส่ package ชุดแรกเป็น

- `Q = 4`
- `S = 100 mm`

### 9.6.1 สิ่งที่ควรเห็น

- ปลอกช่วงล่างอยู่ใกล้ตีนเสา
- ปลอกตามลงไปคุมช่วงเดือยล่าง
- ไม่ลอยขึ้นไปอยู่กลางเสา

## 9.7 สรุปค่าตัวอย่างที่ใช้ในบทนี้

### Top Starter Bars > Main Bars

- `Quantity along a = 2`
- `Quantity along b = 2`
- `13M`
- `Bottom offset = 0 mm`
- `Top offset = 600 mm`

### Transverse Reinforcement > Top Starter Bars

- `10M`
- `Q = 4`
- `S = 100 mm`
- ปรับ `Bottom offset (O1)` ให้ช่วงปลอกไปอยู่ที่หัวเสา

### Bottom Starter Bars > Main Bars

- `Quantity along a = 2`
- `Quantity along b = 2`
- `13M`
- `Bottom offset = 0 mm`
- `Top offset = 600 mm`

### Transverse Reinforcement > Bottom Starter Bars

- `10M`
- `Bottom offset (O1) = 50 mm`
- `Q = 4`
- `S = 100 mm`

## 9.8 วิธีเช็กว่าทำถูกหรือยัง

หลังจากใส่แล้ว ให้เปิด `Section` ตรวจตามนี้

1. เหล็กยื่นขึ้นหรือลงในทิศที่ถูก
2. เหล็กยื่นอยู่ในแนวเดียวกับเหล็กหลัก
3. ปลอกช่วง starter อยู่ถูกตำแหน่ง
4. เหล็กไม่เลยออกนอกคอนกรีต

ถ้าเปิด `3D` แล้วอ่านยาก ให้ซ่อนองค์ประกอบรอบข้างชั่วคราวก่อน

## 9.9 ปัญหาที่มักเจอ

- ใส่แล้วไม่เห็นเหล็กยื่น
  - เช็ก `Detail Level`
  - เช็ก `Rebar Visibility`
  - เช็กว่าอยู่ที่ `Top Starter Bars` หรือ `Bottom Starter Bars` ถูกหัวข้อ

- เหล็กยื่นผิดทิศ
  - ตรวจว่ากำลังใส่หัวข้อบนหรือล่างถูกหรือไม่

- ปลอกช่วง starter ไปอยู่ผิดตำแหน่ง
  - สำหรับช่วงบน ให้ขยับ `Bottom offset (O1)` ขึ้นไปใกล้หัวเสา
  - สำหรับช่วงล่าง ให้เริ่มจาก `Bottom offset (O1) = 50 mm`

- เหล็กหลุด host
  - ลดค่าความยาวยื่นชั่วคราว
  - ตรวจ cover และตำแหน่งเหล็กยืนหลัก

## 9.10 สิ่งที่ควรจำ

- `Top Starter Bars` ใช้ยื่นขึ้น
- `Bottom Starter Bars` ใช้ยื่นลง
- เริ่มจาก `2 x 2`, `13M`, `0 / 600` ก่อน
- ปลอกช่วง starter เริ่มจาก `10M`, `Q = 4`, `S = 100`
- เช็กผลใน `Section` ก่อนเสมอ
