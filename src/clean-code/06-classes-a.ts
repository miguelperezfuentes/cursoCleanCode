(() => {

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F';
    class Person {

        constructor(
            public name:string,
            public gender:Gender, 
            public birthDate: Date
        ){}
    }
        

    class User extends Person{
        public lastAccess = new Date()
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

        

    }
    class UserSettings extends User{
        constructor(
            public wokingDirectory : string,
            public lastOpenFolder : string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ){
            super(email,role,name,gender,birthdate);
        }
    }

    const userSettings = new UserSettings(
        'user/home',
        'home',
        'miguel@gmail.com',
        'Admin',
        'Miguel',
        'M',
        new Date('11-05-2003')
    )

    console.log({ userSettings: UserSettings });

    


})();