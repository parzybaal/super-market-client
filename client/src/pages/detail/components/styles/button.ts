interface Styles {
  button: object;
  activeButton: object;
}

const styles: Styles = {
  button: {
    padding: "15px",
    borderRadius: "25px",
    width: "200px",
    height: "50px",
    textTransform: "none",
    alignItems: "center",
    gap: "0.6rem",
    backgroundColor: "#38A34A",
    "&:hover": {
      backgroundColor: "#246D30",
    },
  },
  activeButton: {
    padding: "7px",
    borderRadius: "25px",
    width: "200px",
    height: "50px",
    textTransform: "none",
    alignItems: "center",
    gap: "0.6rem",
    backgroundColor: "#38A34A",
    "&:hover": {
      backgroundColor: "#246D30",
    },
    justifyContent: "space-between",
  },
};

export default styles;
