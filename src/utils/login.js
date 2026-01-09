export function LoginService (user, passwd){

    if (user == "admin" && passwd == "admin123"){
        return{
            name: "Aministrador",
            lastName: "Main",
            role: "admin",
            image: "",
        };
    }else{
        return null;
    }
}