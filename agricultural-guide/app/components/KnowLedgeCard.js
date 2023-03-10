import Image from 'next/image'
import React from 'react'

function KnowLedgeCard({title, data, id}) {
    return (
        <div className="card" style={{width: '100%'}}>
            <Image src="https://www.agrivi.com/wp-content/uploads/2014/05/Blog-How-to-be-a-Farmer-1200x565.png" className="card-img-top" alt="..." width="400" height="165" style={{objectFit: 'contain'}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default KnowLedgeCard