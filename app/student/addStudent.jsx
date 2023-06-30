"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function addStudentList() {

    const router = useRouter()
    const [name, setName] = useState("")
    const [nim, setNim] = useState("")
    const [modal, setModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleChange() {
        setModal(!modal);
    }

    async function handleSubmit(e) {
        setIsLoading(true)
        e.preventDefault();
        // GET API LINK
        await fetch('GET YOUR API LINK', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: name,
                nim: nim
            })
        });

        setIsLoading(false)
        setName("");
        setNim("");
        router.refresh();
        setModal(false);
    }

    return (
        <>
            <button className="btn bg-white text-black hover:text-white" onClick={handleChange}>Add <i className='bx bx-plus hover:text-white' ></i></button>
            <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add New</h3>
                    <form onSubmit={handleSubmit}>
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
                            <button className="btn btn-primary" type="submit">Submit</button> :
                            <button className="btn loading" type="button">Saving...</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
