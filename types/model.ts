export interface Paper { 
    name: string,
    url: string,
}
export interface Model {
    description: string,
    name: string,
    github: string,
    docker: string,
    sensors: string[],
    tasks: string[],
    license: string,
    papers: Paper[]
}