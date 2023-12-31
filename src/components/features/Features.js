import React from 'react'
import './FeatureStyle.css'
import FCard from './FCard'
import data from './FeatureApi'

const Features = () => {
    return (
        <>
            <section className='features top' id='features' >
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I Do</h1>
                    </div>

                    <div className="content grid">
                        {data.map((val, index) => {
                            return<FCard key={index} image={val.image} title={val.title} desc={val.desc} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
