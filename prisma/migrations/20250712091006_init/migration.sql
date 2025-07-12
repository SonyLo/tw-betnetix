-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL,
    "idCountry" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "idFonbet" INTEGER NOT NULL,
    "idGroup" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_id_key" ON "Country"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Group_id_key" ON "Group"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_idFonbet_key" ON "Event"("idFonbet");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_idCountry_fkey" FOREIGN KEY ("idCountry") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_idGroup_fkey" FOREIGN KEY ("idGroup") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
