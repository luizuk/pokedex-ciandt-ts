import { ReactNode } from "react"

export interface RouteTypes extends Array<RouteTypes> {
  title: string
  pageName: string
  path: string
  element: ReactNode
  private: boolean
}


export interface IUseData {
  setAllPokemon: (data?: any) => void;
}