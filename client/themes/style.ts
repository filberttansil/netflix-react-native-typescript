"use strict";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  authContainer: {
    flex: 1,
    paddingHorizontal: 26,
  },
  headerContainer: {
    marginBottom: 12,
  },
  header: {
    fontSize: 26,
    color: "#F5F5F5",
    fontWeight: "bold",
    marginBottom: 10,
  },
  headerDesc: {
    color: "darkgray",
    fontSize: 16,
  },
  formContainer: {
    gap: 20,
  },
  footer: {
    marginTop: 20,
    gap: 26,
  },
  authButton: {
    backgroundColor: "#831010",
    marginTop: 16,
    paddingVertical: 8,
  },
  footerDesc: { color: "darkgray", fontSize: 16 },
  footerBold: { color: "#831010", fontWeight: "bold" },
});
