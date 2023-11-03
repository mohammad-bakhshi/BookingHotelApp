/*
  Warnings:

  - The primary key for the `Hotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `address` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP CONSTRAINT "Hotel_pkey",
ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hotel_id_seq";
