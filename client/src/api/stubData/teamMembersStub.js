var faker = require('faker');

const seed = count => {
  const users = [];
  for (let i = 0; i < count; i++) {
    let image = faker.image.avatar();
    let email = faker.internet.email();
    let name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    let role = faker.random.word();
    let id = count;
    users.push({
      image,
      email,
      name,
      role,
      id,
    });
  }
  return users;
};

export default function teamMembersStub(count) {
  return seed(count);
}
