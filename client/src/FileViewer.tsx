import React, { useEffect, useState } from "react"
import { IFileInfo } from "./iFileInfo";
import styles from './style.css';
export function FileViewer() {
    //   const [dir, setDir] = useState({})  
    const [files, setFiles] = useState<Array<IFileInfo>>([])
    const [path, setPath] = useState('/')
    useEffect(() => {
        fetch(`http://localhost:3000/dir?path=${path}`).then(res => res.json()).then(res => {
            console.log(res)
            setFiles(res.files)
        })
    }, [path]);
    return <div>
        {
            path != '/' && (
                <div className={styles.text} onClick={() => {
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
            )
        }


        {files.map(file => {
            return <div className={styles.text} onClick={() => {
                if (file.isDirectory) {
                    setPath((path) => path + '/' +  file.name);
                }else{ 
                    fetch(`http://localhost:3000/download?path=${path + '/' +  file.name}`).then(res => res.blob()).then(res => {
                        console.log(res)
                        let a = document.createElement('a')
                        a.href = URL.createObjectURL(res);
                        a.download = `${file.name}`
                        a.click();
                    })
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
