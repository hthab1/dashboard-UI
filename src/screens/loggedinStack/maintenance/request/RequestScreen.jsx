import React, { useEffect, useRef, useState } from "react";
import Header from "../../../../components/loggedinStack/Header";
import "./RequestScreen.css";
import { BsChevronLeft, BsThreeDots } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../reducers/sidebarReducer";
import RequestMessage from "../../../../components/loggedinStack/maintenance/requestMessage/RequestMessage";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import FormSelect from "../../../../components/loggedinStack/common/formSelect/FormSelect";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: window.screen.width > 900 ? "50%" : "80%",
    maxHeight: "90%",
    borderRadius: 10,
  },
};

const data = [
  {
    message:
      "My roof is leaking heavily since last week Monday. Kindly send a team to check it out.",
    timestamp: "1659779675538",
    role: "tenant",
  },
  {
    message: "Our team will come to check leakage",
    timestamp: "1659779675538",
    role: "staff",
  },
];

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "semi-annualy", label: "Semi-annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
  { value: "annualy", label: "Annually" },
];

const inventory = [
  {
    name: "PVC toilet fitting",
    quantity: 0,
  },
  {
    name: "PVC toilet fitting",
    quantity: 0,
  },
  {
    name: "PVC toilet fitting",
    quantity: 0,
  },
  {
    name: "PVC toilet fitting",
    quantity: 0,
  },
  {
    name: "PVC toilet fitting",
    quantity: 0,
  },
  {
    name: "PVC toilet fitting",
    quantity: 0,
  },
];

function RequestScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const listRef = useRef();
  const textAreaRef = useRef();
  const [assignModal, setAssignModal] = useState(false);
  const [repairModal, setRepairModal] = useState(false);
  const [staffMember, setStaffMember] = useState({});
  const [list, setList] = useState(inventory);
  const [dropdown, setDropdown] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(data);

  const { title } = location.state.request;
  const now = new Date();

  useEffect(() => {
    dispatch(setActiveTab("maintenance"));

    setTimeout(() => {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    const closeDropdown = (e) => {
      if (e.path[2].className !== "requestScreenHeaderMore") {
        setDropdown(false);
      }
    };
    if (isSubscribed) {
      if (dropdown) {
        document.body.addEventListener("click", closeDropdown);
      }
    }
    return () => {
      isSubscribed = false;
      if (dropdown) {
        document.body.removeEventListener("click", closeDropdown);
      }
    };
  }, [dropdown]);

  const handleSend = () => {
    setSent(true);
    setMessages([
      ...messages,
      {
        message: message,
        timestamp: `${now.getTime()}`,
        role: "staff",
      },
    ]);
    setMessage("");
    setTimeout(() => {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    let items = [...list];

    items[index] = { 
      name: items[index].name,
      quantity: value
     };
    setList(items);
  };

  const handleApprove = () => {
    setDropdown(false);
  };

  const handleAssign = () => {
    setAssignModal(false);
  };

  const handleMark = () => {
    setDropdown(false);
  };

  const handleAdd = () => {
    setDropdown(false);
    setRepairModal(false)
  };

  const handleClose = () => {
    setDropdown(false);
  };

  return (
    <div className="loadedPage requestScreen">
      <Modal
        isOpen={assignModal}
        onRequestClose={() => setAssignModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalAssign">
          <div className="modalAssignQuestion">
            Select the staff to assign maintenance request to:
          </div>
          <FormSelect
            options={options}
            placeholder="Select a staff member"
            value={staffMember}
            onChange={(value) => setStaffMember(value.value)}
          />
          <div className="modalAssignButtons modalAssignButtonMarginBottom">
            <div
              className="modalAssignButton "
              onClick={() => setAssignModal(false)}
            >
              Cancel
            </div>
            <div
              className="modalAssignButton AssignModalButtonContinue"
              onClick={handleAssign}
            >
              Assign Request
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={repairModal}
        onRequestClose={() => setRepairModal(false)}
        style={customStyles}
        contentLabel="View Service Charge"
      >
        <div className="modalAssign">
          <div className="modalAssignQuestion modalRepairMaterialsHeader">
            Repair Materials
          </div>
          <div className="modalAssignQuestion ">
            Select the inventory used to fulfil request
          </div>
          <div className="modalRequestListItems">
            {list.map((item, index) => (
              <div key={index} className="modalRequestItem">
                <div className="modalRequestItemName">{item.name}</div>
                <input
                  type="number"
                  min={0}
                  className="modalRequestItemInput"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
            ))}
          </div>

          <div className="modalAssignButtons">
            <div
              className="modalAssignButton "
              onClick={() => setRepairModal(false)}
            >
              Cancel
            </div>
            <div
              className="modalAssignButton AssignModalButtonContinue"
              onClick={handleAdd}
            >
              Assign Request
            </div>
          </div>
        </div>
      </Modal>
      <Header pageName="Request" />
      <div className="board">
        <div className="boardContent">
          <div className="requestScreenHeader">
            <div className="requestScreenHeaderLeft">
              <div className="requestScreenBack" onClick={() => navigate(-1)}>
                <BsChevronLeft />
              </div>
              <span>{title}</span>
            </div>
            <div className="requestScreenHeaderRight">
              <div
                className="requestScreenHeaderButton"
                onClick={() => setAssignModal(true)}
              >
                Assign Ticket
              </div>
              <div className="requestScreenHeaderMore">
                <div onClick={() => setDropdown(true)}>
                  <BsThreeDots />
                </div>
                {dropdown && (
                  <div className="moreDropdown">
                    <span
                      className="moreDropdownChoice"
                      onClick={handleApprove}
                    >
                      Approve Request
                    </span>
                    <span
                      className="moreDropdownChoice"
                      onClick={() => setAssignModal(true)}
                    >
                      Assign Request
                    </span>
                    <span className="moreDropdownChoice" onClick={handleMark}>
                      Mark as Done
                    </span>
                    <span
                      className="moreDropdownChoice"
                      onClick={() => setRepairModal(true)}
                    >
                      Add Repair Items
                    </span>
                    <span className="moreDropdownChoice" onClick={handleClose}>
                      Close Request
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="requestScreenContent">
            {messages.map((item, index) => (
              <RequestMessage
                key={index}
                timestamp={parseInt(item.timestamp)}
                message={item.message}
                staff={item.role === "staff" && true}
              />
            ))}
            <span ref={listRef}></span>
          </div>
          <div className="requestScreenTextAreaContainer">
            <textarea
              ref={textAreaRef}
              name=""
              id=""
              cols="30"
              rows="6"
              className="requestScreenTextArea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setSent(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                  textAreaRef.current.blur();
                }
              }}
            />
            <div className="requestScreenSendButton" onClick={handleSend}>
              Send
            </div>
          </div>
          {sent && (
            <span className="requestScreenSentSuccessfully">
              Your response was successfully posted
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestScreen;
