import React, { Component } from 'react'
import { 
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormInput,
    CRow,
    CSpinner,
    CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as specialtyActions from '../../services/redux/actions/specialtyActions'
import colorTypes from '../../services/models/others/colorTypes'
import actionTypes from '../../services/models/others/actionTypes'
import notification from '../../services/models/others/notification'
import Notification from '../../components/common/Notification'
import Confirmation from '../../components/common/Confirmation'

export class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showConfirmationModal: false,
            notifications: [],
            loaded: false,
            failed: false,
            error: ""
        }
    }

    // async componentDidMount() {
    //     await this.props.getSpecialties();
    //     this.setState({
    //         loaded: this.props.specialty.loaded,
    //         failed: this.props.specialty.failed,
    //         error: this.props.specialty.error,
    //     })
    // }

    render() {
        const { loaded, failed, error, notifications } = this.state;
        
        return (
            <>
                { failed && 
                    <CAlert color={colorTypes.DANGER}>{error}</CAlert>
                }
                { notifications.map((notification, index) => 
                    <Notification key={index} mode={notification.mode} title={notification.title} body={notification.body}></Notification>
                )}
                { loaded && !failed &&
                    <>
                        <CCol xs="3" className="mb-4">
                            <CCard>
                                <CCardBody>
                                    <h4>Búsqueda de personas</h4>
                                </CCardBody>
                            </CCard>
                        </CCol>

                        <CForm className='row'>
                            {/* <CCol xs="7" className="mb-3" style={{width: '18%'}}>
                                <CFormLabel><h6>Ingrese el link de linkedIn:</h6></CFormLabel>
                            </CCol> */}
                            <CCol xs="5">
                                <CFormInput type="text" id="name" placeholder='Ingrese el link de linkedIn o nombre de la persona'/*value={specialty.name} onChange={this.onChange('name', false, false)} invalid={!firstTime && errors.name !== null}*//>
                            </CCol>
                            <CCol xs="2">
                                <CButton onClick={this.onSearch} style={{color: 'white'}}>
                                    <CIcon icon={cilMagnifyingGlass} size="lg"/>
                                </CButton>
                            </CCol>
                        </CForm>
                        
                    </>
                }
                { !loaded &&
                    <CRow className="center">
                        <CSpinner color={colorTypes.PRIMARY}/>
                    </CRow>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(peopleActions, dispatch)
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(People)