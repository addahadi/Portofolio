type position = {
  left:string
  top:string
}
interface toolsObj {
    title: string
    icon : string
    position? : position
}

export interface WorksProps {
    title: string
    img: string | toolsObj[]
    desc: string
    icon: string
    path: string
    edge?: string
}

export interface WorkProps {
    value : WorksProps    
}

export interface ProfileProps {
  title : string
  Text : string
}


export type KnowMe = Pick<WorksProps, "title" | "img" | "desc" | "path"> & {
  att?: string[];
};



export interface KnowMeProps {
    value : KnowMe 
}