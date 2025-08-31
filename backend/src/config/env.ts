import dotenv from "dotenv";

dotenv.config();

interface EnvVars {
  DB_USER: string;
  DB_PASS: string;
  DB_COLLECTION: string;
}

const getEnv = (key: keyof EnvVars): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
  return value;
};

export const env: EnvVars = {
  DB_USER: getEnv("DB_USER"),
  DB_PASS: getEnv("DB_PASS"),
  DB_COLLECTION: getEnv("DB_COLLECTION"),
};
