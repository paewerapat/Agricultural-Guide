import { CKEditor } from 'ckeditor4-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function CreateQAndA() {

    const { user } = useSelector(state => state);
    const initialData = "<p>Enter your text here...</p>"
    const [data, setData] = useState(initialData);

    async function submitQuestion(e) {
        e.preventDefault();
        try {
            const body = {
                questionInfo: data,
                userId: user.userId
            }
            const res = await fetch("/api/question/create", {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    token: user.token
                }
            })
            const resJson = await res.json();
            toast.success(resJson.msg);
            setData(initialData);
        } catch (err) {
            toast.error(err.msg)
        }
    }

    return (
        <>
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>สร้างคำถาม</h2>
            </div>

            <form className="container mt-5 mb-3" onSubmit={submitQuestion}>
                <CKEditor 
                    initData={data}
                    value={data}
                    name="create-post"
                    onChange={({editor}) => {
                        setData(editor.getData());
                    }}
                    type="classic"
                />
                <div className="d-flex justify-content-end gap-2 mt-3">
                    <button type='reset' className='btn btn-lg btn-secondary'>
                        Reset
                    </button>
                    <button type='submit' className='btn btn-lg btn-primary'>
                        สร้างคำถาม
                    </button>
                </div>
            </form>
        </>
    )
}

export default CreateQAndA