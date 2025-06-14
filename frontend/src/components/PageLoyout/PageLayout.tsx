import { Children, type JSX } from "react";
import { HeaderMenu } from "./components/HeaderMenu";

// interface Props {
//     children: JSX.Element
// }
export const PageLayout =  () => {
    return (
        <div className="">
            <HeaderMenu/>
            <div className="flex h-full w-full">
                
            </div>
        </div>
    )
}