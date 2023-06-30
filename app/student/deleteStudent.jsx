"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DeleteStudentList(items) {

    const router = useRouter()
    const [modal, setModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    async function handleDelete(StudentId) {
        // GET API LINK
        setIsLoading(true)
        await fetch(`GET YOUR API LINK/${StudentId}`, {
            method: 'DELETE',
        });
        setIsLoading(false)
        router.refresh();
        setModal(false);
    }
    function handleChange() {
        setModal(!modal);
    }

    return (
        <>
            <button className="btn btn-error btn-sm" onClick={handleChange}><i className='bx bxs-trash text-gray-500-' ></i></button>
            <input type="checkbox" checked={modal} onChange={handleChange} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure delete {items.name} ?</h3>
                    <div className="modal-action">
                        <button className="btn" type="button" onClick={handleChange}>Close</button>
                        {!isLoading ?
                            <button className="btn btn-primary" type="submit" onClick={() => handleDelete(items.id)}>Delete</button> :
                            <button className="btn loading" type="button">Deleting...</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
