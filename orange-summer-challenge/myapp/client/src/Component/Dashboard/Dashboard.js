
import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../Layout/Spinner';

function Dashboard({auth:{user,loading}}) {
  return loading || user === null ? (
    <Spinner />
    ) : (
        <Fragment>
         {user.typeuser == 'Manager'?
        <div >
          <h1 className='authok'>Manager</h1>
          </div>:<div>User</div> 
        } 
        </Fragment>
    )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,

}
const mapStateToProps = (state) => ({
  auth: state.auth,
  
});

export default connect(mapStateToProps, {
  
})(Dashboard);



