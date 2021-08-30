import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './modal.css'

function Modal({showModal, setShowModal}) {

    const modalRef = useRef()
    
    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }
    
    const [characterCount, setCharacterCount] = useState(0)

    const [projectName, setProjectName] = useState({name: ''})

    const { name } = projectName

    const boardName = e => {
        if (e.target.value.length > 0) {
            setCharacterCount(e.target.value.length)
        } else {
            setCharacterCount('')
        }
        setProjectName({ ...projectName, name: e.target.value })
    }
    
    const createKanBan = e => {
        if (projectName) {
            setShowModal(false)
        }
        const boardName = document.querySelector('.title')
        boardName.innerText = projectName.name
        setCharacterCount(0)
    }

    console.log(characterCount)

    return (
        <>
            {showModal ? 
                <div className='modalBackdrop' ref={modalRef} onClick={closeModal}>
                    <form className='modalContainer'>
                        <div>
                            <label htmlFor='name' className='label'>Project Name</label>
                            <input type='text' defaultValue='' className='input' onChange={boardName} name='name' />
                        </div>
                        {
                            projectName && characterCount ? (

                                <div className='btn-div'>
                                    <Link className='button' to='/kanban' onClick={createKanBan}>Create</Link>
                                </div>
                        ) : (
                            ''
                        )
                        }                   
                    </form>
                </div>
                : null
            }
        </>
    )
}

export default Modal