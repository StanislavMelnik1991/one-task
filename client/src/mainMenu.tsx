import React, { useEffect, useMemo, useState } from "react"
import{FileViewer} from "./FileViewer"
import{SocketDemo} from "./socketDemo/socketDemo"
export function MainMenu (){
    const [currentPage, setCurrentPage] = useState<string>("")
    const pages: Record<string, React.ReactElement> = useMemo(()=>{
        return {
            FileViewer: <FileViewer />, 
            SocketDemo: <SocketDemo />
        }
    },[])
    const menu = useMemo(()=>{
       return Object.keys(pages).map(page=>{
            return <li onClick={()=>{
                setCurrentPage(page)
            }
            }>{page}</li>
        })
    },[pages])
    return <div>
            <ul>{menu}</ul>
            <div>
        {
            pages[currentPage]||<SocketDemo />
        }
        </div>
    </div>
}
