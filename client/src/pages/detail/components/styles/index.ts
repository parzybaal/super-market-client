interface Styles {
  container: object;
  img: object;
  arrowContainer: object;
}

const styles: Styles = {
  container: {
    maxWidth: 650,
    flexGrow: 1,
    position: "relative",
  },
  img: {
    height: 550,
    display: "block",
    maxWidth: 650,
    overflow: "hidden",
    width: 650,
  },
  arrowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 250,
    width: 650,
  },
};

export default styles;
