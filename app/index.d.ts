declare interface carDetails {
  company: string;
  model: string;
  year: number;
  img: [string];
  color: string;
}

declare interface UserData {
  name: string;
  email: string;
  loggedIn: boolean;
  joinedAt: number;
  phoneNo: number;
  userType: string;
}

declare interface carInDetails {
    whoAdded: string;
    whenAdded: number;
    approval: boolean;
    
}