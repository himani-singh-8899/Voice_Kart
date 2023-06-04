import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ActionButton from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "400px !important",
      minWidth: "350px",
    },
    "& .css-bdhsul-MuiTypography-root-MuiDialogTitle-root": {
      padding: "5px 10px",
    },
  },
  root1: {
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      //maxWidth: "950px !important",
    },
    "& .css-bdhsul-MuiTypography-root-MuiDialogTitle-root": {
      padding: "10px 20px",
    },
  },
  root4: {
    "& .MuiDialog-paperWidthSm": {
      width: "550px",
      maxWidth: "900px !important",
    },
  },
  root2: {
    "& .MuiDialog-paperWidthSm": {
      width: "100%",
      maxWidth: "900px !important",
    },
    marginTop: "9%",
  },
  root3: {
    textAlign: "center",
    fontWeight: "1000",
    fontSize: "large",
  },
  closeButton: {
    position: "absolute",
    color: "#fff",
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    // onClose(selectedValue);
  };
  return (
    <Dialog
      className={
        // props.hompageWidth
        //   ? classes.root2
        //   :
        props.disableWidth
          ? classes.root1
          : // : props.editstyle
            // ? classes.root4
            classes.root
      }
      aria-labelledby="simple-dialog-title"
      aria-describedby="alert-dialog-description"
      open={open}
    >
      {props.modalTitleRequired ? (
        <DialogTitle
          className={props.modalTitleCenter ? classes.root3 : ""}
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ background: "#5ab7a7" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ padding: "5px 0px 0px",fontWeight:'700',fontSize:'22px' ,color:'white'}}>{props.modalTitle}</div>
            <div>
              {props.isNotRequiredCancelIcon ? null : (
                <IconButton
                  aria-label="close"
                  style={{ color: "#fff" }}
                  className={classes.closeButton}
                  onClick={() => {
                    props.onClose(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              )}
            </div>
          </div>
        </DialogTitle>
      ) : (
        " "
      )}
      <DialogContent
        style={{
          background: props.background,
          backgroundColor: props.backgroundColor,
          maxWidth: props.maxWidth,
          backgroundImage: props.backgroundImage,
          padding: props.padding,
          paddingTop: props.paddingTop ? props.paddingTop : "10px",
        }}
      >
        <DialogContentText id="alert-dialog-description">
          {props.modalContent}
        </DialogContentText>
      </DialogContent>
      {props.modalFooterRequired ? (
        <div>
          <DialogActions>
            {props.buttonFooter ? (
              <div>
                {" "}
                <ActionButton
                  buttonText={props.modalActionText}
                  handleSubmit={props.handleSubmit}
                  backgroundColor={"#ef6406"}
                  color="#fff"
                  border={"none"}
                  width="120px"
                />
              </div>
            ) : (
              ""
            )}
          </DialogActions>
        </div>
      ) : (
        ""
      )}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
};

export default function CustomModal(props) {
  return (
    <div>
      <SimpleDialog
        modalContent={props.modalContent}
        modalTitleRequired={props.modalTitleRequired}
        modalFooterRequired={props.modalFooterRequired}
        handleSubmit={props.handleSubmit}
        modalActionText={props.modalActionText}
        borderRadius={props.borderRadius}
        open={props.open}
        onClose={props.handleClose}
        disableWidth={props.disableWidth}
        modalTitle={props.modalTitle}
        isNotRequiredCancelIcon={props.isNotRequiredCancelIcon}
        background={props.background}
        backgroundColor={props.backgroundColor}
        maxWidth={props.maxWidth}
        hompageWidth={props.hompageWidth}
        backgroundImage={props.backgroundImage}
        paddingTop={props.paddingTop}
        buttonFooter={props.buttonFooter}
        modalTitleCenter={props.modalTitleCenter}
        editstyle={props.editstyle}
      />
    </div>
  );
}
