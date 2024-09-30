import { StyleSheet } from "react-native";

export const colors = {
  primary: "#9BCF63",
  secondary: "#FF5F1F",
  background: "#F8F9FA",
  text: "#212529",
  mutedText: "#6C757D",
  border: "#CED4DA",
  white: "#FFFFFF",
  black: "#000000",
  success: "#218838",
  error: "#DC3545",
};

export const fontSizes = {
  small: 12, // Used for smaller text or descriptions
  medium: 16, // Standard text size for most content
  large: 24, // Title headers
  xlarge: 32, // Larger headers for sections
};

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

export const borderRadius = {
  small: 5,
  medium: 10,
  large: 20,
};

const shadow = {
  shadowColor: colors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
};

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
  },

  // Text styles
  title: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.medium,
  },
  subtitle: {
    fontSize: fontSizes.medium,
    color: colors.mutedText,
    marginBottom: spacing.small,
  },
  smallText: {
    fontSize: fontSizes.small,
    color: colors.mutedText,
  },
  largeText: {
    fontSize: fontSizes.xlarge,
    fontWeight: "bold",
    color: colors.text,
  },

  // Button styles
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: borderRadius.medium,
    alignItems: "center",
    ...shadow,
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSizes.medium,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: borderRadius.medium,
    alignItems: "center",
    ...shadow,
  },

  // Card styles
  card: {
    backgroundColor: colors.white,
    padding: spacing.large,
    borderRadius: borderRadius.medium,
    marginBottom: spacing.large,
    ...shadow,
  },
  cardTitle: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.small,
  },
  cardSubtitle: {
    fontSize: fontSizes.medium,
    color: colors.mutedText,
    marginBottom: spacing.medium,
  },

  // Input styles
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.small,
    borderRadius: borderRadius.small,
    fontSize: fontSizes.medium,
    marginBottom: spacing.medium,
  },

  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: colors.white,
    padding: spacing.large,
    borderRadius: borderRadius.medium,
    width: "80%",
    ...shadow,
  },
  modalTitle: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
    marginBottom: spacing.medium,
    color: colors.text,
    textAlign: "center",
  },
  modalText: {
    fontSize: fontSizes.medium,
    marginBottom: spacing.medium,
    color: colors.text,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.small,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  sectionTitle: {
    fontSize: fontSizes.large,
    fontWeight: "bold",
  },
  sectionContent: {
    paddingVertical: spacing.small,
  },
  scrollView: {
    marginTop: spacing.small,
  },
  progressBar: {
    height: 8,
    borderRadius: borderRadius.small,
    marginBottom: spacing.small,
  },
  progressText: {
    fontSize: fontSizes.small,
    color: colors.mutedText,
    marginBottom: spacing.small,
    textAlign: "center",
  },
  pointsText: {
    fontSize: fontSizes.medium,
    fontWeight: "bold",
    color: colors.secondary,
  },
  detailsButton: {
    fontSize: fontSizes.medium,
    color: colors.mutedText,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.small,
    gap: spacing.small,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.small,
    gap: spacing.small,
    justifyContent: "space-between",
  },
  text: {
    fontSize: fontSizes.medium,
    color: colors.text,
  },
});
