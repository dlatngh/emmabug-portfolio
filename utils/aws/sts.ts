import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts";

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const roleArn = process.env.ROLE_ARN;

const stsClient = new STSClient({
  credentials: {
    accessKeyId: accessKeyId!,
    secretAccessKey: secretAccessKey!,
  },
});

export async function assumeRole() {
  try {
    const assumeRoleCommand = new AssumeRoleCommand({
      RoleArn: roleArn,
      RoleSessionName: "S3Session",
    });
    const response = await stsClient.send(assumeRoleCommand);

    if (!response.Credentials) {
      throw new Error("No credentials returned from AssumeRole");
    }

    return {
      accessKeyId: response.Credentials.AccessKeyId!,
      secretAccessKey: response.Credentials.SecretAccessKey!,
      sessionToken: response.Credentials.SessionToken!,
    };
  } catch (error) {
    console.error("Error while assuming role", error);
    throw error;
  }
}
