import { Timestamp } from "firebase/firestore"

export interface Paper { 
    name: string,
    url: string,
}
export interface Contributor {
    name: string,
    description: string,
    profileUrl: string
}
export interface Model {
    description: string,
    id: string,
    views: number,
    lastUpdated: Timestamp | any,
    name: string,
    github: string,
    docker: string,
    sensors: string[],
    tasks: string[],
    license: string,
    papers: Paper[],
    contributed: Contributor
}