(() => {

    //Aplicando el principio de responsabilidad unica
    //Priorizar la composición a la herencia
    
    type Gender = 'M'|'F';

    interface PersonProps {
        name      : string;
        gender    : Gender;
        birthDate : Date;
    }

    class Person {
        public name      : string;
        public gender    : Gender;
        public birthDate : Date;
        constructor( {name,gender,birthDate}: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps{
        email: string;
        role: string;
    }
        

    class User {
        
        email      : string;
        lastAccess : Date;
        role       : string;
        
        
        constructor(
           { email, role } : UserProps

        ){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

        

    }

    interface SettingsProps{
        workingDirectory : string,
        lastOpenFolder   : string,
        
    }

    class Settings {
        public workingDirectory : string;
        public lastOpenFolder   : string;
        constructor({workingDirectory, lastOpenFolder}: SettingsProps){
            
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps{
        workingDirectory : string,
        lastOpenFolder   : string,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthDate: Date
    }

    class UserSettings{

        public person: Person;
        public user: User;
        public settings: Settings;



        constructor({name, gender, birthDate, email, role, lastOpenFolder, workingDirectory}: UserSettingsProps){
            this.person = new Person({name, gender, birthDate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory});
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