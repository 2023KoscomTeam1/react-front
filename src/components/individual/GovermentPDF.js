import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { OpenInBrowser } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';

const ViewPDF = () => {
    const buttonStyle = {
        fontSize: '2px',
        fontFamily: 'Arial, sans-serif',
      };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <IconButton variant="contained" onClick={openModal} startIcon={<OpenInBrowser />}>
                <p style={buttonStyle}>📑</p>
            </IconButton>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="PDF Modal"
                style={
                    {height:"10px", position: "absolute", zIndex: "3"} 
                }
            >
                <button onClick={closeModal}>Close</button>
                <iframe
                    title="PDF Viewer"
                    src="/pdf/yesan.pdf"
                    width="100%"
                    height="500px"
                />
            </Modal>
        </div>
    );
};

export default ViewPDF;