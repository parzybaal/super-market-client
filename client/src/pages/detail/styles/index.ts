interface Styles {
  container: object;
}

const styles: Styles = {
  container: {
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    padding: "0 5rem",
    flexDirection: "row",
    textAlign: "start",
    gap: "3rem",
  },
};

const smallScreenMediaQuery = "@media (max-width: 768px)";
(styles.container as Record<string, object>)[smallScreenMediaQuery] = {
  flexDirection: "column",
};

export default styles;
