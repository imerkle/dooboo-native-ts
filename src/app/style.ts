import { StyleSheet } from "react-native";

const bold = "bold";
const styles = StyleSheet.create({
    pad20: {
        padding: 20,
    },
    h4: {
        fontSize: 20,
        fontWeight: bold,
        marginBottom: 5,
    },
    h5: {
        color: "#bec0c4",
        fontSize: 12, 
        fontWeight: bold,
        marginBottom: 4,
    },
    caption: {
        color: "#71757c",
        fontSize: 14,
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    header: {
        backgroundColor: "#1a1818",
        padding: 4,
    },
    titleheader: {
        fontSize: 18,
        fontWeight: "bold",
    }
});
export default styles;