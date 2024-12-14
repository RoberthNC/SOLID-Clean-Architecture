(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDay: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDay: Date
    ) {
      super(name, gender, birthDay);
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDay: Date
    ) {
      super(email, role, name, gender, birthDay);
    }
  }

  const userSettings = new UserSettings(
    "/user/home",
    "/home",
    "robertonc1599@gmail.com",
    "Admin",
    "Roberto",
    "M",
    new Date("1999-06-15")
  );

  console.log({ userSettings });
})();
