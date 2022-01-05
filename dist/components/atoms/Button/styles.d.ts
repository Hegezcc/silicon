export declare const VARIANT_STYLES: {
    primary: {
        readonly background: "linear-gradient(180deg, #5561FF 0%, #3643FC 100%)";
        readonly '&:hover': {
            readonly background: "linear-gradient(180deg, #6B75FF 0%, #535FFF 100%)";
            readonly cursor: "pointer";
            readonly boxShadow: "0px 12px 16px 0px #0000004D";
        };
        readonly '&:active': {
            readonly background: "linear-gradient(180deg, #4B4FA0 0%, #44488B 100%)";
            readonly boxShadow: "none";
        };
        readonly '&:disabled': {
            readonly background: "#35374f";
            readonly color: "rgba(255, 255, 255, 0.6)";
            readonly cursor: "not-allowed";
        };
    };
    secondary: {
        readonly background: "#3d3e50";
        readonly '&:hover': {
            readonly cursor: "pointer";
            readonly boxShadow: "0px 12px 16px 0px rgba(0, 0, 0, 0.3)";
        };
        readonly '&:disabled': {
            readonly background: "#35374f";
            readonly color: "rgba(255, 255, 255, 0.6)";
            readonly cursor: "not-allowed";
        };
        readonly '&:active': {
            readonly boxShadow: "none";
        };
    };
    tertiary: {
        readonly background: "#28293d";
        readonly color: "#fff";
        readonly textDecoration: "underline";
        readonly '&:hover': {
            readonly background: "#323347";
            readonly boxShadow: "0px 12px 16px rgba(0, 0, 0, 0.3)";
            readonly cursor: "pointer";
        };
        readonly '&:active': {
            readonly background: "#242537";
            readonly boxShadow: "none";
        };
        readonly '&:disabled': {
            readonly cursor: "not-allowed";
            readonly boxShadow: "none";
            readonly background: "#28293d";
            readonly color: "rgba(255, 255, 255, 0.6)";
        };
    };
    ghost: {
        readonly border: "2px solid #60648B";
        readonly background: "#323347";
        readonly '&:hover': {
            readonly border: "2px solid #B9BCD9";
            readonly cursor: "pointer";
        };
        readonly '&:active': {
            readonly border: "2px solid #45475A";
            readonly boxShadow: "none";
        };
        readonly '&:disabled': {
            readonly border: "2px solid #6E719833";
            readonly color: "#6E7198";
            readonly cursor: "not-allowed";
        };
    };
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, {}, never>;
