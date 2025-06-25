import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  console.log("CREATING EMPLOYEES");
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  await createEmployee({
    name: faker.person.fullName(),
    birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
    salary: faker.finance.amount({
      min: 50000,
      max: 100000,
      dec: 0,
    }),
  });
  console.log("EMPLOYEES CREATED");
}
