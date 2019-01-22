import React from 'react'

function MissionUpcomingDetail({ details, flight_number, mission_name, launch_date_utc, links, rocket, launch_site }) {
    // const styles={
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3,1fr)'
    // }
    const styles = {
        height: '100v',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center'
        // justifyContent: 'space-between'
        // flexDirection: 'row'
    }

    // console.log(launch_site)
    console.log(JSON.stringify(launch_site));


    return (
        <div style={styles}>
            <div>
                {/* <img style={{display: 'block'}} src={links.mission_patch_small} alt={links.mission_patch_small}/> */}
                <h3>{mission_name}</h3>
                {/* <p>{rocket.first_stage.cores[0].core_serial}</p> */}
                <p >{details}</p>
                {/* <p>{JSON.stringify(launch_site)}</p> */}
                {/* <p>{flight_number}</p> */}
                <p>Launch Date UTC: {launch_date_utc}</p>
                <p>Flight Number: {flight_number}</p>
            </div>
        </div>
    )
}

export default MissionUpcomingDetail