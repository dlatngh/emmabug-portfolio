import { S3Client } from "@aws-sdk/client-s3";
import { assumeRole } from "./sts";

const S3_BUCKET_NAME = process.env.NEXT_PUBLIC_S3_BUCKET_NAME as string;
const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION as string;

async function createS3Client() {
  const assumeRoleCredentials = await assumeRole();
  const s3Client = new S3Client({
    credentials: assumeRoleCredentials,
  });

  return s3Client;
}

export function getObjectUrl(objectFolder: string, objectKey: string): string {
  if (objectFolder.length === 0) {
    return `https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${objectKey}`;
  }
  const folder = objectFolder.replaceAll(" ", "+");
  return `https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${objectFolder}/${objectKey}`;
}
