-- AlterTable
ALTER TABLE "RefreshToken" ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL DEFAULT (now() + interval '7 days');
