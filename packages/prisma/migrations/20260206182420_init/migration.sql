-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "trips";

-- CreateTable
CREATE TABLE "trips"."file_ingestion_status" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "totalRows" INTEGER NOT NULL DEFAULT 0,
    "processedRows" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "file_ingestion_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trips"."trips_group" (
    "id" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "originLat" DOUBLE PRECISION NOT NULL,
    "originLon" DOUBLE PRECISION NOT NULL,
    "destinationLat" DOUBLE PRECISION NOT NULL,
    "destinationLon" DOUBLE PRECISION NOT NULL,
    "hourOfDay" INTEGER NOT NULL,
    "tripCount" INTEGER NOT NULL DEFAULT 1,
    "datasources" TEXT[],
    "firstSeenAt" TIMESTAMP(3) NOT NULL,
    "lastSeenAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trips_group_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "file_ingestion_status_filename_key" ON "trips"."file_ingestion_status"("filename");

-- CreateIndex
CREATE INDEX "file_ingestion_status_status_idx" ON "trips"."file_ingestion_status"("status");

-- CreateIndex
CREATE INDEX "file_ingestion_status_filename_idx" ON "trips"."file_ingestion_status"("filename");

-- CreateIndex
CREATE INDEX "trips_group_region_hourOfDay_idx" ON "trips"."trips_group"("region", "hourOfDay");

-- CreateIndex
CREATE INDEX "trips_group_originLat_originLon_idx" ON "trips"."trips_group"("originLat", "originLon");

-- CreateIndex
CREATE INDEX "trips_group_destinationLat_destinationLon_idx" ON "trips"."trips_group"("destinationLat", "destinationLon");

-- CreateIndex
CREATE UNIQUE INDEX "trips_group_region_originLat_originLon_destinationLat_desti_key" ON "trips"."trips_group"("region", "originLat", "originLon", "destinationLat", "destinationLon", "hourOfDay");
