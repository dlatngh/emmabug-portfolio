import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { assumeRole } from "./sts";

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;
const REGION = process.env.REGION;

async function createS3Client() {
  const assumeRoleCredentials = await assumeRole();
  const s3Client = new S3Client({
    credentials: assumeRoleCredentials,
  });

  return s3Client;
}

export function getObjectUrl(objectFolder: string, objectKey: string): string {
  return `https://${S3_BUCKET_NAME}.s3.${REGION}.amazonaws.com/${objectFolder}/${objectKey}`;
}
