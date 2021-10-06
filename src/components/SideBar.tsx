import { Children, ReactNode } from "react";

type SideBarProps = {
  children: ReactNode
}
export function SideBar(props : SideBarProps) {
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {props.children}          
        </div>
      </nav>
  )
}