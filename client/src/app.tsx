import React, { useEffect, useState } from "react"

export function App() {
    return <FileViewer />
}
function FileViewer() {
    //   const [dir, setDir] = useState({})  
    const [files, setFiles] = useState([])
    const [path, setPath] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3000/${path}`).then(res => res.json()).then(res => {
            console.log(res)
            setFiles(res.files)
        })
    }, [path]);
    return <div>
        <div onClick={() => {
            setPath((path) => {
                const r = path.split('/')
                r.pop()
                return r.join("/");

            })
        }
        }>
            <span>
                ..
            </span>
        </div>

        {files.map(file => {
            return <div onClick={() => {
                if (file.isDirectory) {
                    setPath((path) => path + '/' + file.name);
                    // fetch(`http://localhost:3000/${path}`).then(res => res.json()).then(res => {
                    //     setFiles(res.files)
                    // })
                }
            }
            }>
                <span>
                    {file.name}
                </span>
                <span>
                    {file.isDirectory ? '...' : ''}
                </span>
            </div>
        })
        }
    </div>
}

