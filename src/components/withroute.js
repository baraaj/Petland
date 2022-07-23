import React from 'react'

    import { useNavigate, useParams } from "react-router-dom";
import Petedit from './petedit';

export const withRouter = (Petedit) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <Petedit {...props} id={params.id} navigate={navigate} />;
};
  

export default withRouter(withRouter); 