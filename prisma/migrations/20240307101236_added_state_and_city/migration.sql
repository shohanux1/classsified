-- CreateTable
CREATE TABLE "bdsmActivity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "bdsmActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "States" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bdsmActivity_id_key" ON "bdsmActivity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "States_id_key" ON "States"("id");

-- CreateIndex
CREATE UNIQUE INDEX "City_id_key" ON "City"("id");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
