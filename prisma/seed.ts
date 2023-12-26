import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let main = async () => {
  const user = await prisma.user.create({
    data: {
      lastName: "lname",
      firstName: "fname",
      middleName: "mname",
      suffix: "",
      gender: "MALE",
      birthDate: new Date("2000-01-01").toISOString(),
    },
  });
  const account = await prisma.account.create({
    data: {
      username: "owner",
      password: "$2b$10$OQ/73kEyBdetRnfJQbB.kOQqROdKVJr9k2kEAnuIn6ANb8ge8Hwsm",
      role: "ADMIN",
      userId: user.id,
    },
  });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    console.log("seeding complete.");
    prisma.$disconnect();
  });
