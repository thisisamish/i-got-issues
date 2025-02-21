import { PrismaClient, Prisma, $Enums } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    image: "https://example.com/alice.jpg",
    assignedIssues: {
      create: [
        {
          title: "Fix authentication flow",
          description: "Investigate and resolve session expiry issues",
          status: "IN_PROGRESS",
        },
      ],
    },
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    image: "https://example.com/bob.jpg",
  },
];

const issueData: Prisma.IssueCreateInput[] = [
  {
    title: "Migrate database provider",
    description:
      "Migrate the production database provider from PlanetScale to Prisma Postgres",
    status: "IN_PROGRESS",
  },
  {
    title: "Optimize API response times",
    description: "Refactor database queries for better performance",
    status: "OPEN",
  },
  {
    title: "Implement dark mode",
    description: "Add dark mode support in the frontend application",
    status: "CLOSED",
  },
];

const accountData: Prisma.AccountCreateInput[] = [
  {
    user: { connect: { email: "alice@example.com" } },
    type: "oauth",
    provider: "google",
    providerAccountId: "alice_google_id",
    access_token: "alice_access_token",
    refresh_token: "alice_refresh_token",
    expires_at: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
    token_type: "Bearer",
  },
];

const sessionData: Prisma.SessionCreateInput[] = [
  {
    user: { connect: { email: "alice@example.com" } },
    sessionToken: "session_token_alice",
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // Expires in 24 hours
  },
];

const verificationTokenData: Prisma.VerificationTokenCreateInput[] = [
  {
    identifier: "alice@example.com",
    token: "verification_token_123",
    expires: new Date(Date.now() + 60 * 60 * 1000), // Expires in 1 hour
  },
];

export async function main() {
  console.log("Seeding database...");

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
  for (const i of issueData) {
    await prisma.issue.create({ data: i });
  }
  for (const acc of accountData) {
    await prisma.account.create({ data: acc });
  }
  for (const s of sessionData) {
    await prisma.session.create({ data: s });
  }
  for (const vt of verificationTokenData) {
    await prisma.verificationToken.create({ data: vt });
  }

  console.log("Seeding complete!");
}

main();
