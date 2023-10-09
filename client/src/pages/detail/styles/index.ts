interface Styles {
  container: object;
}

const styles: Styles = {
  container: {
    backgroundColor: "#EFEFEF",
    height: "100vh",
    alignItems: "center",
    padding: "0 5rem",
    flexDirection: "row",
    textAlign: "start",
    gap: "3rem",
    minWidth: "100%",
    width: "100%",
  },
};

const smallScreenMediaQuery = "@media (max-width: 768px)";
(styles.container as Record<string, object>)[smallScreenMediaQuery] = {
  flexDirection: "column",
};

export default styles;
