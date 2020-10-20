import React from 'react'
import { connect } from 'react-redux'

function Loading(props) {
    console.log(props.isLoading)
    return props.isLoading ?

        (
            <div>
                Loading...
            </div>
        )

        :

        (

            <div>
                {/* not loading */}
            </div>
        )
}

const mapStateToProps = (state) => {

    return {
        isLoading: state.loadingReducer.isLoading
    }
}

export default connect(mapStateToProps)(Loading)
