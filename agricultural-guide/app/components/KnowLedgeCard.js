import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function KnowLedgeCard({title, data, id}) {

    console.log("title", title)
    console.log("title", data)
    console.log("title", id)

    return (
        <div className="card" style={{width: '100%', maxHeight: '100%'}}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span className="card-text">
                    <div dangerouslySetInnerHTML={{ __html: data }} />
                </span>
                <Link href={`/posts/${id}`} className="btn btn-primary">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default KnowLedgeCard