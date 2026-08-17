-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `category` ENUM('apartment', 'villa', 'townhouse', 'office', 'turnkeyInterior') NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `style` VARCHAR(191) NOT NULL,
    `thumbnail` TEXT NOT NULL,
    `summary` TEXT NOT NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
    `publishedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Project_slug_key`(`slug`),
    INDEX `Project_category_idx`(`category`),
    INDEX `Project_featured_idx`(`featured`),
    INDEX `Project_status_idx`(`status`),
    INDEX `Project_sortOrder_idx`(`sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectDetail` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `eyebrow` VARCHAR(191) NOT NULL,
    `displayTitle` VARCHAR(191) NOT NULL,
    `italicTitle` VARCHAR(191) NOT NULL,
    `heroImage` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `bedrooms` VARCHAR(191) NULL,
    `bathrooms` VARCHAR(191) NULL,
    `duration` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NOT NULL,
    `overviewTitle` VARCHAR(191) NOT NULL,
    `overviewParagraphs` JSON NOT NULL,
    `floorPlanImage` TEXT NULL,
    `seoTitle` VARCHAR(191) NULL,
    `seoDescription` TEXT NULL,

    UNIQUE INDEX `ProjectDetail_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectMetric` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `ProjectMetric_projectId_sortOrder_idx`(`projectId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectInfoRow` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `ProjectInfoRow_projectId_sortOrder_idx`(`projectId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectSpace` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` TEXT NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `ProjectSpace_projectId_sortOrder_idx`(`projectId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectStoryBlock` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `index` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `image` TEXT NOT NULL,
    `imageSide` ENUM('left', 'right') NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `ProjectStoryBlock_projectId_sortOrder_idx`(`projectId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectFloorPlanNote` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` TEXT NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `ProjectFloorPlanNote_projectId_sortOrder_idx`(`projectId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectRelated` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `relatedProjectId` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `ProjectRelated_projectId_sortOrder_idx`(`projectId`, `sortOrder`),
    INDEX `ProjectRelated_relatedProjectId_idx`(`relatedProjectId`),
    UNIQUE INDEX `ProjectRelated_projectId_relatedProjectId_key`(`projectId`, `relatedProjectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignSample` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `category` ENUM('apartment', 'townhouse', 'villa', 'livingRoom', 'bedroom', 'kitchen', 'kitchenCabinet', 'childrenRoom') NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `style` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NULL,
    `thumbnail` TEXT NOT NULL,
    `summary` TEXT NOT NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
    `publishedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DesignSample_slug_key`(`slug`),
    INDEX `DesignSample_category_idx`(`category`),
    INDEX `DesignSample_featured_idx`(`featured`),
    INDEX `DesignSample_status_idx`(`status`),
    INDEX `DesignSample_sortOrder_idx`(`sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignSampleDetail` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `eyebrow` VARCHAR(191) NOT NULL,
    `displayTitle` VARCHAR(191) NOT NULL,
    `italicTitle` VARCHAR(191) NOT NULL,
    `heroImage` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `propertyType` VARCHAR(191) NOT NULL,
    `bedrooms` VARCHAR(191) NULL,
    `bathrooms` VARCHAR(191) NULL,
    `budgetRange` VARCHAR(191) NULL,
    `suitableFor` VARCHAR(191) NULL,
    `overviewTitle` VARCHAR(191) NOT NULL,
    `overviewParagraphs` JSON NOT NULL,
    `floorPlanImage` TEXT NULL,
    `seoTitle` VARCHAR(191) NULL,
    `seoDescription` TEXT NULL,

    UNIQUE INDEX `DesignSampleDetail_sampleId_key`(`sampleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignSampleMetric` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `DesignSampleMetric_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignSampleInfoRow` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `DesignSampleInfoRow_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignSampleGalleryItem` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `image` TEXT NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `DesignSampleGalleryItem_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignFeature` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `index` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `image` TEXT NOT NULL,
    `imageSide` ENUM('left', 'right') NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `DesignFeature_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignFloorPlanNote` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` TEXT NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `DesignFloorPlanNote_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuggestedPackage` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `SuggestedPackage_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuggestedPackageItem` (
    `id` VARCHAR(191) NOT NULL,
    `packageId` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `SuggestedPackageItem_packageId_sortOrder_idx`(`packageId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesignSampleRelated` (
    `id` VARCHAR(191) NOT NULL,
    `sampleId` VARCHAR(191) NOT NULL,
    `relatedSampleId` VARCHAR(191) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,

    INDEX `DesignSampleRelated_sampleId_sortOrder_idx`(`sampleId`, `sortOrder`),
    INDEX `DesignSampleRelated_relatedSampleId_idx`(`relatedSampleId`),
    UNIQUE INDEX `DesignSampleRelated_sampleId_relatedSampleId_key`(`sampleId`, `relatedSampleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectDetail` ADD CONSTRAINT `ProjectDetail_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectMetric` ADD CONSTRAINT `ProjectMetric_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectInfoRow` ADD CONSTRAINT `ProjectInfoRow_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectSpace` ADD CONSTRAINT `ProjectSpace_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectStoryBlock` ADD CONSTRAINT `ProjectStoryBlock_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectFloorPlanNote` ADD CONSTRAINT `ProjectFloorPlanNote_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectRelated` ADD CONSTRAINT `ProjectRelated_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectRelated` ADD CONSTRAINT `ProjectRelated_relatedProjectId_fkey` FOREIGN KEY (`relatedProjectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignSampleDetail` ADD CONSTRAINT `DesignSampleDetail_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignSampleMetric` ADD CONSTRAINT `DesignSampleMetric_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignSampleInfoRow` ADD CONSTRAINT `DesignSampleInfoRow_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignSampleGalleryItem` ADD CONSTRAINT `DesignSampleGalleryItem_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignFeature` ADD CONSTRAINT `DesignFeature_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignFloorPlanNote` ADD CONSTRAINT `DesignFloorPlanNote_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuggestedPackage` ADD CONSTRAINT `SuggestedPackage_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuggestedPackageItem` ADD CONSTRAINT `SuggestedPackageItem_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `SuggestedPackage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignSampleRelated` ADD CONSTRAINT `DesignSampleRelated_sampleId_fkey` FOREIGN KEY (`sampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesignSampleRelated` ADD CONSTRAINT `DesignSampleRelated_relatedSampleId_fkey` FOREIGN KEY (`relatedSampleId`) REFERENCES `DesignSample`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
