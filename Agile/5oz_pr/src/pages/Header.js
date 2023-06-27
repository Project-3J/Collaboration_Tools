import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { FaHatWizard, FaUser} from "react-icons/fa";
import {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal'; 


function Header() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal  = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }


  
  return (
    <Nav className ="nav-all">
      <Nav.Item>
        <Nav.Link href="/" className = "logo"><FaHatWizard></FaHatWizard> 5Oz</Nav.Link>
      </Nav.Item>
      <Nav className='nav-type'>
        <Nav.Item>
          <Nav.Link className='nav-type-text'>내 작업</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-type-text'>프로젝트</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link className='nav-type-text' onClick = {ShowDropDown}>
            팀
          </Nav.Link>
          {dropbox && <DropDownList/>}
        </Nav.Item> */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            팀
          </Dropdown.Toggle>
            <Dropdown.Menu className='dropdownlist'>
              <Dropdown.Item onClick = {handleShowModal}>5oz에 사용자 초대</Dropdown.Item>
              <Dropdown.Item href="#/action-2">팀 만들기</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      
        <Nav className ='nav-setting'>
          <Nav.Item className = "nav-icon">
            <BsFillBellFill/>
          </Nav.Item>
          {/* <Nav.Item >
            <Nav.Link> 알림</Nav.Link>
          </Nav.Item>  
          <Nav.Item className = "nav-icon">
            <BsFillGearFill/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>설정</Nav.Link>
          </Nav.Item>
          <Nav.Item className = "nav-icon">
            <FaUser/>
          </Nav.Item> */}
          {/* <Nav.Item>
            <Nav.Item >
              <div onClick={()=> {modal === true ? setModal(false) : setModal(true)}}>
                계정
              </div>
              <div>
                {modal === true ? <Modal/> : null}
              </div>
            </Nav.Item>
          </Nav.Item> */}
        </Nav>
      </Nav>
      {/* Modal component */}
        <Modal show={showModal}>
          <Modal.Header onClick={handleCloseModal} closeButton >
            <Modal.Title>5oz에 사용자 초대</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>이메일을 입력해주세요.</p>
            <input className='header-team-input' type='text' placeholder='ex) dhomp7730@gmail.com'></input>
          </Modal.Body>
          <Modal.Footer>
            {/* Add modal footer content here */}
            {/* Example: */}
            <button onClick>추가</button>
          </Modal.Footer>
        </Modal>

        </Nav>

    
  );
}


// function Modal(){
//   return(
//     <div className='modal-logout'>
//       로그아웃
//     </div>

//   )
// }

export default Header;
