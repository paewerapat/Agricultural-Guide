import React from 'react'
import KnowLedgeCard from './KnowLedgeCard'

function KnowLedge() {
    return (
        <>
            <div className='header-banner bg-success'>
                <h2 className='text-with-line'>
                    เรื่องน่ารู้
                </h2>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center align-items-center row-gap-3">
                    <div className="col-md-4 col-sm-6">
                        <KnowLedgeCard />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <KnowLedgeCard />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <KnowLedgeCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KnowLedge