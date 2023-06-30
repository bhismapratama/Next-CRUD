"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function updateStudentList(items) {

    const router = useRouter()
    const [name, setName] = useState(items.name)
    const [nim, setNim] = useState(items.nim)
    const [modal, setModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleChange() {
        setModal(!modal);
    }

    async function handleUpdate(e) {
        setIsLoading(true)
        e.preventDefault();
        // GET API LINK
        await fetch(`GET YOUR API LINK/${items.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: name,
                nim: nim
            })
        });

        setIsLoading(false)
        router.refresh();
        setModal(false);
    }

    return (
        <>
            <button className="btn bg-white text-black hover:text-white" onClick={handleChange}><i class='bx bxs-edit-alt'></i></button>
            <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit {items.name}</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label font-bold">name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="input 
                                w-full 
                                input-bordered"
                                placeholder="Student Name"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">nim</label>
                            <input
                                type="text"
                                value={nim}
                                onChange={(e) => setNim(e.target.value)}
                                className="input 
                                w-full 
                                input-bordered"
                                placeholder="Student nim"
                            />
                        </div>
                        <div className="modal-action">
                            <button className="btn" type="button" onClick={handleChange}>Close</button>
                            {!isLoading ? 
                            <button className="btn btn-primary" type="submit">Update</button> :
                            <button className="btn loading" type="button">Updating...</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
