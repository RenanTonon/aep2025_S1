import type { JSX } from "react"
import { HeaderMenu } from "./components/HeaderMenu";

interface Props {
    children: JSX.Element;
}

export const PageLayout = (props:Props) => {
    return (
        <div className="">
            {props.children}
            <div>
                <div></div>
                <div></div>
            </div>
            
        </div>
    )
}