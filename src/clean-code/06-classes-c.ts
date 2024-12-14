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
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  interface UserSettingsProps {
    person: PersonProps;
    settings: SettingsProps;
    user: UserProps;
  }

  class UserSettings {
    public person: Person;
    public settings: Settings;
    public user: User;

    constructor({ person, settings, user }: UserSettingsProps) {
      this.person = new Person(person);
      this.settings = new Settings(settings);
      this.user = new User(user);
    }
  }

  const person = new Person({
    birthDay: new Date("1999-06-15"),
    gender: "M",
    name: "Roberto",
  });

  const settings = new Settings({
    lastOpenFolder: "/home",
    workingDirectory: "/user/home",
  });

  const user = new User({
    email: "robertonc1599@gmail.com",
    role: "Administrator",
  });

  const userSettings = new UserSettings({
    person,
    settings,
    user,
  });

  console.log({ userSettings });
})();
