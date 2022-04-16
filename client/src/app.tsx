import React, { useEffect, useState } from "react"
import styles from './style.css';
export function App() {
    return <FileViewer />
}
interface FileInfo {
    isDirectory: boolean,
    name: string
}

function FileViewer() {
    //   const [dir, setDir] = useState({})  
    const [files, setFiles] = useState<Array<FileInfo>>([])
    const [path, setPath] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3000/${path}`).then(res => res.json()).then(res => {
            console.log(res)
            setFiles(res.files)
        })
    }, [path]);
    return <div>
        <div  className={styles.text} onClick={() => {
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
            return <div  className={styles.text} onClick={() => {
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

