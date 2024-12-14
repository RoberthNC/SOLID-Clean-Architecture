(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    birthDay: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthDay: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDay }: PersonProps) {
      this.birthDay = birthDay;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    email: string;
    person: PersonProps;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, person }: UserProps) {
      super(person);
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface UserSettingsProps {
    lastOpenFolder: string;
    user: UserProps;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ workingDirectory, user, lastOpenFolder }: UserSettingsProps) {
      super(user);
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/user/home",
    lastOpenFolder: "/home",
    user: {
      email: "robertonc1599@gmail.com",
      role: "Administrator",
      person: {
        name: "Roberto",
        birthDay: new Date("1999-06-15"),
        gender: "M",
      },
    },
  });
  console.log({ userSettings });
})();
