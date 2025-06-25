(() => {

    //No aplicando el principio de responsabilidad unica
    
    type Gender = 'M'|'F';

    interface PersonProps {
        name      : string;
        gender    : Gender;
        birthDate : Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;
        constructor( {name,gender,birthDate}: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps{
        name: string;
        gender: Gender;
        birthDate: Date;
        email: string;
        role: string;
    }
        

    class User extends Person{
        
        email: string;
        role: string;
        lastAccess : Date;
        
        constructor(
           { name, gender, birthDate, email, role } : UserProps

        ){
            super({name, gender, birthDate});
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

        

    }

    interface UserSettingsProps{
        workingDirectory : string,
        lastOpenFolder : string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date
    }

    class UserSettings extends User{
        public workingDirectory : string;
        public lastOpenFolder : string;
        constructor({workingDirectory, lastOpenFolder, email, role, name, gender, birthDate }: UserSettingsProps){
            super({name, gender, birthDate, email, role});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: 'user/home',
        lastOpenFolder: 'home',
        email: 'miguel@gmail.com',
        role: 'Admin',
        name: 'Miguel',
        gender: 'M',
        birthDate: new Date('11-05-2003')
    })

    console.log({ userSettings: UserSettings });

    


})();