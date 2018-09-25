import { Logable } from "./Logable";

export interface Authenticable {
    authentic(logable: Logable) : any 
}


