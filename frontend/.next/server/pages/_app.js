"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./src/theme/theme.js

const theme = (0,styles_namespaceObject.createTheme)({
    palette: {
        mode: "light",
        background: {
            default: "rgb(242, 243, 245)",
            paper: "rgb(255, 255, 255)",
            dark: "rgb(0, 0, 0)"
        },
        primary: {
            main: "rgb(2, 15, 45)"
        },
        secondary: {
            main: "rgb(255, 255, 255)"
        },
        text: {
            primary: "rgb(60, 60, 60)",
            secondary: "rgb(123, 132, 140)",
            white: "rgb(255, 255, 255)"
        },
        success: {
            main: "rgb(0, 176, 85)"
        },
        info: {
            main: "rgb(0, 149, 211)"
        },
        warning: {
            main: "rgb(243, 149, 48)"
        },
        error: {
            main: "rgb(255, 40, 52)"
        },
        divider: "rgb(197, 197, 197)"
    },
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: '"Roboto", sans-serif',
        fontSize: 13,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.25
        },
        h2: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.25
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.25
        },
        h4: {
            fontSize: "1.125rem",
            fontWeight: 500,
            lineHeight: 1.25
        },
        h5: {
            fontSize: "1.0625rem",
            fontWeight: 500,
            lineHeight: 1.25
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.25
        },
        overline: {
            fontWeight: 600
        }
    }
});
/* harmony default export */ const theme_theme = (theme);

// EXTERNAL MODULE: ./src/utils/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(3713);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/HomeOutlined"
const HomeOutlined_namespaceObject = require("@mui/icons-material/HomeOutlined");
var HomeOutlined_default = /*#__PURE__*/__webpack_require__.n(HomeOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/CameraAlt"
const CameraAlt_namespaceObject = require("@mui/icons-material/CameraAlt");
var CameraAlt_default = /*#__PURE__*/__webpack_require__.n(CameraAlt_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/InsertPhotoOutlined"
const InsertPhotoOutlined_namespaceObject = require("@mui/icons-material/InsertPhotoOutlined");
var InsertPhotoOutlined_default = /*#__PURE__*/__webpack_require__.n(InsertPhotoOutlined_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Instagram"
const Instagram_namespaceObject = require("@mui/icons-material/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LinkedIn"
const LinkedIn_namespaceObject = require("@mui/icons-material/LinkedIn");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_namespaceObject);
;// CONCATENATED MODULE: ./src/layout/Header.js

















const Header = ({ onSidebarMobileOpen  })=>{
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
            elevation: 5,
            sx: {
                backgroundColor: theme.palette.primary.default,
                color: theme.palette.common.white
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                    sx: {
                        minHeight: 70
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "inherit",
                            onClick: onSidebarMobileOpen,
                            sx: {
                                display: {
                                    md: "none"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                fontSize: "medium"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            style: {
                                textDecoration: "none"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    display: {
                                        md: "inline",
                                        xs: "none"
                                    }
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((IconButton_default()), {
                                    size: "large",
                                    disabled: true,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((CameraAlt_default()), {
                                            style: {
                                                color: theme.palette.common.white,
                                                height: 50,
                                                width: 30
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            component: "h1",
                                            variant: "h2",
                                            sx: {
                                                flexGrow: 1,
                                                color: theme.palette.common.white,
                                                fontFamily: '"Libre Baskerville"',
                                                fontWeight: "bold",
                                                textDecoration: "none",
                                                marginLeft: "10px"
                                            },
                                            children: "Dog Breeds Classification"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                flexGrow: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                            component: "a",
                            color: "primary",
                            href: "/",
                            size: "small",
                            variant: "text",
                            sx: {
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: "medium",
                                mr: 2,
                                "& svg": {
                                    mr: 0.5
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((HomeOutlined_default()), {}),
                                " Home"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                            component: "a",
                            color: "primary",
                            href: "/classifier",
                            size: "small",
                            variant: "text",
                            sx: {
                                color: theme.palette.common.white,
                                fontSize: theme.typography.subtitle1,
                                fontWeight: "medium",
                                mr: 2,
                                "& svg": {
                                    mr: 0.5
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((InsertPhotoOutlined_default()), {}),
                                " Image Classifier"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                            orientation: "vertical",
                            sx: {
                                height: 32,
                                mx: 2,
                                display: {
                                    lg: "flex",
                                    md: "none",
                                    xs: "none"
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: {
                                    lg: "flex",
                                    md: "none",
                                    xs: "none"
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    "aria-label": "LinkedIn",
                                    color: "primary",
                                    href: "https://www.linkedin.com/in/chi-han-lin-498310126/",
                                    target: "_blank",
                                    sx: {
                                        color: theme.palette.common.white,
                                        fontSize: theme.typography.subtitle1,
                                        fontWeight: "medium",
                                        mr: 2,
                                        "& svg": {
                                            mr: 0.5
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((LinkedIn_default()), {
                                        fontSize: "large"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                    "aria-label": "Instagram",
                                    color: "primary",
                                    href: "https://www.instagram.com/chihan.lin/",
                                    target: "_blank",
                                    sx: {
                                        color: theme.palette.common.white,
                                        fontSize: theme.typography.subtitle1,
                                        fontWeight: "medium",
                                        mr: 2,
                                        "& svg": {
                                            mr: 0.5
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                                        fontSize: "large"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {})
            ]
        })
    });
};
/* harmony default export */ const layout_Header = (Header);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: external "@mui/material/Hidden"
const Hidden_namespaceObject = require("@mui/material/Hidden");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Link"
var Link_ = __webpack_require__(5246);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemButton"
const ListItemButton_namespaceObject = require("@mui/material/ListItemButton");
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
;// CONCATENATED MODULE: ./src/layout/Footer.js












const Footer = ()=>{
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            backgroundColor: theme.palette.primary.main,
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100%",
            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                backgroundColor: theme.palette.primary.main,
                position: "relative",
                padding: theme.spacing(1),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 0,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Hidden_default()), {
                            mdDown: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                container: true,
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                    sx: {
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                            component: "a",
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    color: theme.palette.text.secondary,
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                            component: "a",
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                primary: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "body2",
                                                    color: theme.palette.text.secondary,
                                                    children: "Terms of Use"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            item: true,
                            xs: 12,
                            md: 4,
                            justifyContent: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            variant: "body2",
                                            color: theme.palette.text.secondary,
                                            children: [
                                                "Copyright \xa9 ",
                                                new Date().getFullYear(),
                                                " Chi-Han.Lin FMP."
                                            ]
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            container: true,
                            item: true,
                            xs: 12,
                            md: 4,
                            justifyContent: "center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                        primary: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            variant: "body2",
                                            color: theme.palette.text.secondary,
                                            children: [
                                                "Image by",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                    href: "https://www.freepik.com/author/starline",
                                                    alt: "starline",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    color: theme.palette.text.secondary,
                                                    children: "starline"
                                                }),
                                                " ",
                                                "on",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                                    href: "https://www.freepik.com/free-vector/technological-background-with-circuit-lines-diagram-blue-color_9106760.htm#page=2&query=digital%20technology%20background&position=5&from_view=search#position=5&page=2&query=digital%20technology%20background",
                                                    alt: "Unsplash",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    color: theme.palette.text.secondary,
                                                    children: "freepik"
                                                }),
                                                "."
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
;// CONCATENATED MODULE: ./src/layout/Sidebar.js












const Sidebar = ({ onMobileClose , openMobile  })=>{
    const theme = (0,material_.useTheme)();
    const lgUp = (0,material_.useMediaQuery)((theme)=>theme.breakpoints.up("lg"));
    external_react_default().useEffect(()=>{
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
            anchor: "left",
            onClose: onMobileClose,
            open: !lgUp && openMobile,
            variant: "temporary",
            PaperProps: {
                sx: {
                    backgroundColor: theme.palette.background.default,
                    width: 256
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        style: {
                            textDecoration: "none"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((IconButton_default()), {
                                size: "large",
                                disabled: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((CameraAlt_default()), {
                                        style: {
                                            color: theme.palette.primary.main,
                                            height: 30,
                                            width: 30
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "h1",
                                        variant: "h6",
                                        color: theme.palette.text.primary,
                                        flexGrow: 1,
                                        fontWeight: "bold",
                                        textDecoration: "none",
                                        marginLeft: "10px",
                                        children: "Doggo breeds classification"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        display: "flex",
                        paddingBottom: 2,
                        paddingTop: 5,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                            color: "primary",
                            component: "a",
                            href: "/",
                            size: "small",
                            variant: "text",
                            sx: {
                                color: theme.palette.text.secondary,
                                fontSize: theme.typography.body2,
                                fontWeight: "medium",
                                mr: 2,
                                "& svg": {
                                    mr: 0.5
                                }
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((HomeOutlined_default()), {}),
                                " Home"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                        color: "primary",
                        component: "a",
                        href: "/classifier",
                        size: "small",
                        variant: "text",
                        sx: {
                            color: theme.palette.text.secondary,
                            fontSize: theme.typography.body2,
                            fontWeight: "medium",
                            mr: 2,
                            "& svg": {
                                mr: 0.5
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((InsertPhotoOutlined_default()), {
                                style: {
                                    height: 23,
                                    width: 23
                                }
                            }),
                            " Image Classifier"
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/layout/Layout.js








const Layout = ({ children  })=>{
    const theme = (0,material_.useTheme)();
    const [isSidebarMobileOpen, setIsSidebarMobileOpen] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            backgroundColor: theme.palette.background.dark,
            height: "10%"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                onSidebarMobileOpen: ()=>setIsSidebarMobileOpen(true)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Sidebar, {
                onMobileClose: ()=>setIsSidebarMobileOpen(false),
                openMobile: isSidebarMobileOpen
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
Layout.propTypes = {
    children: (external_prop_types_default()).node
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/pages/_app.js












const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
const App = ({ Component , pageProps , emotionCache =clientSideEmotionCache  })=>{
    external_react_default().useEffect(()=>{
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        external_aos_default().init({
            once: true,
            delay: 0,
            duration: 800,
            offset: 0,
            easing: "ease-in-out"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "minimum-scale=1, initial-scale=1, width=device-width",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Image Classification"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "image, classification, machine learning"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Image Classification"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
                theme: theme_theme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
};
App.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 3713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/createEmotionCache.js

function createEmotionCache() {
    return cache_default()({
        key: "css"
    });
};
;


/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 5246:
/***/ ((module) => {

module.exports = require("@mui/material/Link");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(8981)));
module.exports = __webpack_exports__;

})();