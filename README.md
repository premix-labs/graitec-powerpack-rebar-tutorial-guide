# Graitec PowerPack Rebar Tutorial Guide

คู่มือภาษาไทยสำหรับเรียนรู้ `GRAITEC PowerPack Rebar` ใน Revit แบบค่อยเป็นค่อยไป ตั้งแต่การเตรียมโมเดล การใส่เหล็กในองค์ประกอบหลัก การแก้ warning ที่เจอบ่อย ไปจนถึงการทำ detail, schedule, report และการตั้งระบบเบื้องต้น

## เนื้อหาในเล่ม

- เตรียมไฟล์และตั้งค่าก่อนเริ่มใช้งาน
- ใส่เหล็ก `Beam`, `Column`, `Slab`, `Wall`, `Footing`
- งาน `Openings`
- การแก้ชุดเหล็กหลังสร้างแล้ว
- `Detail Rebar`, `Reinforcement Schedule`, `Generate Report`
- `Design Templates`, `Design Status`, `Configurations`
- `Assign Rebar Roles`, `Clone Drawings`
- บท warning, troubleshooting, และคู่มือตัดสินใจกรณีต่างเวอร์ชันหรือไม่มี type/cover ตามตัวอย่าง

## การพัฒนาในเครื่อง

ข้อกำหนด:

- Node.js 20 หรือใหม่กว่า

คำสั่งหลัก:

```bash
npm ci
npm run dev
```

เปิดดูที่ `http://localhost:4321`

## การ build

```bash
npm run build
```

ไฟล์ผลลัพธ์จะถูกสร้างในโฟลเดอร์ `dist`

## GitHub Pages

repo นี้ตั้งค่าให้ deploy ขึ้น GitHub Pages ผ่าน GitHub Actions แล้ว โดยใช้ path:

`https://premix-labs.github.io/graitec-powerpack-rebar-tutorial-guide/`

ถ้ายังไม่ขึ้นหน้าเว็บ ให้ตรวจ 2 อย่าง:

1. ใน GitHub repo เปิด `Settings > Pages` แล้วเลือก `GitHub Actions`
2. push branch `main` เพื่อให้ workflow ทำงาน

## โครงสร้างสำคัญ

- `src/content/docs` เนื้อหาหนังสือ
- `prompt` ชุด prompt สำหรับ review หนังสือในมุม check/editor/qa/score
- `public` ไฟล์ static

## หมายเหตุ

ตัวอย่างค่าในหนังสือใช้เพื่อฝึก workflow ในโปรแกรม ไม่ใช่ค่ามาตรฐานสำหรับโครงการจริง การใช้งานจริงต้องยึดแบบโครงสร้าง มาตรฐานที่เกี่ยวข้อง และวิศวกรผู้ออกแบบ
