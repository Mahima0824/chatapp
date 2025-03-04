(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9d28f1._.js", {

"[project]/app/Components/Message.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Context/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const easing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cubicBezier"])(0.35, 0.17, 0.3, 0.86);
const Message = ({ message, isOwnMessage, isNewestMessage, setNewestMessageId, handleEdit, handleCopy, handleDelete })=>{
    _s();
    const isEmojiOnly = /^<img src=".*?" alt="emoji".*?>$/.test(message.text);
    const isImage = message.file && message.file.type.startsWith("image/");
    const isPdf = message.file && message.file.type === "application/pdf";
    const { setIsmodel, setSelectedImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const openImageModal = (imgUrl)=>{
        setSelectedImage(imgUrl);
        setIsmodel(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Message.useEffect": ()=>{
            if (isNewestMessage) {
                setTimeout({
                    "Message.useEffect": ()=>{
                        setNewestMessageId(null);
                    }
                }["Message.useEffect"], 1000);
            }
        }
    }["Message.useEffect"], [
        isNewestMessage,
        setNewestMessageId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: isNewestMessage ? {
            opacity: 0,
            y: isOwnMessage ? 250 : -250,
            x: isOwnMessage ? -250 : 250
        } : {},
        animate: isNewestMessage !== null ? {
            opacity: 1,
            y: 0,
            x: 0
        } : {},
        transition: isNewestMessage !== null ? {
            duration: 0.5,
            ease: easing
        } : {},
        className: `flex flex-col relative w-full ${isOwnMessage ? "justify-end items-end" : "justify-start items-start"} my-5`,
        children: [
            isEmojiOnly ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                dangerouslySetInnerHTML: {
                    __html: message.text
                },
                className: "w-20 h-20 block object-center object-cover"
            }, void 0, false, {
                fileName: "[project]/app/Components/Message.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this) : isPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 w-fit rounded-lg max-w-[75%] shadow-md bg-gray-100 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        className: "text-red-500 w-8 h-8"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-gray-800",
                                children: message.file?.name
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Message.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: message.file?.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-500 underline text-sm",
                                children: "Open PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Message.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Message.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : message.file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-fit rounded-lg max-w-[75%] shadow-md  text-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    onClick: ()=>openImageModal(message.file.url),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: message.file?.url,
                        alt: message.file?.name || "Uploaded file",
                        className: "rounded",
                        style: {
                            maxWidth: message.file?.width ? `${message.file.width}px` : "200px",
                            maxHeight: message.file?.height ? `${message.file.height}px` : "200px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/Message.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Message.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                as: "div",
                className: "relative group cursor-pointer rounded-lg bg-blue-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Button, {
                        className: "p-3 cursor-pointer items-center transition-all text-white ease-linear duration-200 gap-2 flex justify-between w-fit shadow-md  ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-nowrap ",
                                style: {
                                    textWrap: "nowrap"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: message.text
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Message.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden group-hover:block text-xs transition-all ease-linear duration-200 text-gray-300 ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {}, void 0, false, {
                                    fileName: "[project]/app/Components/Message.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Message.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Items, {
                            className: "absolute z-[99] right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-[#2A2A36] shadow-lg ring-1 ring-black/5 focus:outline-none text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-1 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                        children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopy(message),
                                                className: `${active ? "bg-gradient-to-r from-blue-500 to-indigo-500  text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: "Copy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Message.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Message.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                        children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(message),
                                                className: `${active ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Message.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Message.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                        children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(message.id),
                                                className: `${active ? "bg-gradient-to-r from-red-600 to-red-400 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/Message.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Message.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Message.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Message.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Message.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-xs text-gray-300 mt-1 text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "",
                        children: message.time
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCheckmarkDone"], {}, void 0, false, {
                            fileName: "[project]/app/Components/Message.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this) : ("TURBOPACK unreachable", undefined)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Message.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Message.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/Message.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_s(Message, "WfcC4ALAtQmp9LxclO34iBBjfU0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Message;
const __TURBOPACK__default__export__ = Message;
var _c;
__turbopack_refresh__.register(_c, "Message");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Icon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const IconButton = ({ name, size = 24, color = "white", onClick, className = "" })=>{
    const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__[name];
    if (!IconComponent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Icon not found"
        }, void 0, false, {
            fileName: "[project]/app/Components/Icon.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex items-center justify-center gap-2 w-8 h-8 bg-[#2A2A36] hover:bg-[#2a2a367e] text-white rounded-full shadow-md transition-all ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            size: size,
            color: color
        }, void 0, false, {
            fileName: "[project]/app/Components/Icon.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/Icon.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
_c = IconButton;
const __TURBOPACK__default__export__ = IconButton;
var _c;
__turbopack_refresh__.register(_c, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/InfoModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const InfoModal = ({ handleSearch, onAvatarClick })=>{
    _s();
    const [isMoreOpen, setIsMoreOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const moreMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InfoModal.useEffect": ()=>{
            function handleClickOutside(event) {
                if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
                    setIsMoreOpen(false);
                }
            }
            if (isMoreOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "InfoModal.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["InfoModal.useEffect"];
        }
    }["InfoModal.useEffect"], [
        isMoreOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
                as: "div",
                className: "relative inline-block text-left",
                children: ({ close })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Button, {
                                    className: "flex items-center justify-center gap-2 w-8 h-8 bg-[#2A2A36] hover:bg-[#2a2a367e] text-white rounded-full shadow-md transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiDotsVertical"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/InfoModal.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/InfoModal.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            !isMoreOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Items, {
                                className: "absolute z-[99] right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-[#2A2A36] shadow-lg ring-1 ring-black/5 focus:outline-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-1 py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                            children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSearch,
                                                    className: `${active ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white" : "text-white"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Search"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 23
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                            children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `${active ? "bg-gradient-to-r from-red-500 to-pink-500 text-white" : "text-white"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTrash"], {
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 25
                                                        }, this),
                                                        " Clear Chat"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 23
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                            children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: onAvatarClick,
                                                    className: `${active ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" : "text-white"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                    children: "Disappearing Messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                            children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: onAvatarClick,
                                                    className: `${active ? "bg-gradient-to-r from-red-600 to-red-400 text-white" : "text-white"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                    children: "Mute Notifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"].Item, {
                                            children: ({ active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        close();
                                                        setIsMoreOpen(true);
                                                    },
                                                    className: `${active ? "bg-gradient-to-r from-gray-500 to-gray-700 text-white" : "text-white"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEllipsisH"], {
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 25
                                                        }, this),
                                                        " More"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/InfoModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/InfoModal.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/InfoModal.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/Components/InfoModal.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            isMoreOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: moreMenuRef,
                className: "absolute z-[100] right-0 mt-2 w-48 bg-[#1F1F2B] shadow-lg rounded-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-1 py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMoreOpen(false),
                            className: "w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/InfoModal.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700",
                            children: "Block"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/InfoModal.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700",
                            children: "Report"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/InfoModal.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onAvatarClick,
                            className: "w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700",
                            children: "Wallpaper"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/InfoModal.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left text-white px-4 py-2 text-sm rounded-md hover:bg-gray-700",
                            onClick: onAvatarClick,
                            children: "Media, Links, and Docs"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/InfoModal.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/InfoModal.tsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/InfoModal.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/InfoModal.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_s(InfoModal, "1xLMD8mgq1fczx6R91SN+K/Pr+o=");
_c = InfoModal;
const __TURBOPACK__default__export__ = InfoModal;
var _c;
__turbopack_refresh__.register(_c, "InfoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$InfoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/InfoModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Context/context.tsx [app-client] (ecmascript)");
;
;
;
;
;
const Header = ({ conversation, search, setSearch, handleSearch, onAvatarClick })=>{
    if (!conversation) return null;
    const { setVideomodel, setVoicemodel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Usemodel"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-3 px-8 glassBg border-b border-gray-700 shadow-lg backdrop-blur-md z-[99]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 cursor-pointer",
                        onClick: onAvatarClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-14 h-14 border-[3px] p-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full bg-black rounded-full p-[2px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: conversation.avatar,
                                        className: "w-full h-full object-cover rounded-full",
                                        alt: conversation.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg text-white font-semibold",
                                        children: conversation.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-400",
                                        children: conversation.lastSeen || "Last Seen Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/Header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Header.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex relative items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: "FaPhoneAlt",
                                size: 18,
                                onClick: ()=>setVoicemodel(true)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Header.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: "FaVideo",
                                size: 18,
                                onClick: ()=>setVideomodel(true)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Header.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$InfoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    search: search,
                                    setSearch: setSearch,
                                    handleSearch: handleSearch,
                                    onAvatarClick: onAvatarClick
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Header.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Header.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Header.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Components/Header.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/placeholders-and-vanish-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PlaceholdersAndVanishInput": (()=>PlaceholdersAndVanishInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function PlaceholdersAndVanishInput({ placeholders, onChange, onSubmit, arrow }) {
    _s();
    const [currentPlaceholder, setCurrentPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startAnimation = ()=>{
        intervalRef.current = setInterval(()=>{
            setCurrentPlaceholder((prev)=>(prev + 1) % placeholders.length);
        }, 3000);
    };
    const handleVisibilityChange = ()=>{
        if (document.visibilityState !== "visible" && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
            startAnimation();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlaceholdersAndVanishInput.useEffect": ()=>{
            startAnimation();
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "PlaceholdersAndVanishInput.useEffect": ()=>{
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["PlaceholdersAndVanishInput.useEffect"];
        }
    }["PlaceholdersAndVanishInput.useEffect"], [
        placeholders
    ]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const newDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [animating, setAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const formatMessageWithLinks = (text)=>{
        return text.replace(urlRegex, (url)=>url.startsWith("https") ? `<a href="${url}" target="_blank" class="text-white underline">${url}</a>` : url).replace(/(@\w+)/g, "<b>$1</b>"); // Bold mentions
    };
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlaceholdersAndVanishInput.useCallback[draw]": ()=>{
            if (!inputRef.current) return;
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            canvas.width = 800;
            canvas.height = 800;
            ctx.clearRect(0, 0, 800, 800);
            const computedStyles = getComputedStyle(inputRef.current);
            const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
            ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
            ctx.fillStyle = "#FFF";
            ctx.fillText(value, 16, 40);
            const imageData = ctx.getImageData(0, 0, 800, 800);
            const pixelData = imageData.data;
            const newData = [];
            for(let t = 0; t < 800; t++){
                let i = 4 * t * 800;
                for(let n = 0; n < 800; n++){
                    let e = i + 4 * n;
                    if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
                        newData.push({
                            x: n,
                            y: t,
                            color: [
                                pixelData[e],
                                pixelData[e + 1],
                                pixelData[e + 2],
                                pixelData[e + 3]
                            ]
                        });
                    }
                }
            }
            newDataRef.current = newData.map({
                "PlaceholdersAndVanishInput.useCallback[draw]": ({ x, y, color })=>({
                        x,
                        y,
                        r: 1,
                        color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`
                    })
            }["PlaceholdersAndVanishInput.useCallback[draw]"]);
        }
    }["PlaceholdersAndVanishInput.useCallback[draw]"], [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlaceholdersAndVanishInput.useEffect": ()=>{
            draw();
        }
    }["PlaceholdersAndVanishInput.useEffect"], [
        value,
        draw
    ]);
    const animate = (start)=>{
        const animateFrame = (pos = 0)=>{
            requestAnimationFrame(()=>{
                const newArr = [];
                for(let i = 0; i < newDataRef.current.length; i++){
                    const current = newDataRef.current[i];
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        if (current.r <= 0) {
                            current.r = 0;
                            continue;
                        }
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;
                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach((t)=>{
                        const { x: n, y: i, r: s } = t;
                        if (n > pos) {
                            ctx.beginPath();
                            ctx.rect(n, i, s, s);
                            ctx.fillStyle = "#000000";
                            ctx.strokeStyle = "#000000";
                            ctx.stroke();
                        }
                    });
                }
                if (newDataRef.current.length > 0) {
                    animateFrame(pos - 8);
                } else {
                    setValue("");
                    setAnimating(false);
                }
            });
        };
        animateFrame(start);
    };
    const handleInputChange = (e)=>{
        if (!animating) {
            let inputText = e.target.value;
            let formattedText = formatMessageWithLinks(inputText);
            setValue(inputText);
            onChange && onChange({
                target: {
                    value: formattedText
                }
            });
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !animating) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        let renewText;
        if (urlRegex.test(renewText)) {
            renewText = formatMessageWithLinks(renewText);
            setValue(renewText);
        } else {
            setValue(value);
        }
        if (!value.trim()) return;
        let formattedMessage = formatMessageWithLinks(value);
        vanishAndSubmit();
        onSubmit && onSubmit({
            target: {
                value: formattedMessage
            }
        });
    // setValue(" ");
    };
    const vanishAndSubmit = ()=>{
        setAnimating(true);
        draw();
        const maxX = newDataRef.current.reduce((prev, current)=>current.x > prev ? current.x : prev, 0);
        animate(maxX);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`w-full relative max-w-7xl mx-auto bg-zinc-800 h-10 rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
                value && "bg-gray-50`),
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute pointer-events-none  text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20", !animating ? "opacity-0" : "opacity-100"),
                ref: canvasRef
            }, void 0, false, {
                fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                lineNumber: 218,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                onChange: handleInputChange,
                onKeyDown: handleKeyDown,
                ref: inputRef,
                value: value,
                type: "text",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full relative text-sm sm:text-base z-50 border-none placeholder-white bg-transparent text-white h-full rounded-full focus:outline-none focus:ring-0  pl-4 pr-20", animating && " text-transparent")
            }, void 0, false, {
                fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this),
            arrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: !value,
                type: "submit",
                className: "absolute right-2 top-1/2 z-50 -translate-y-1/2 h-7 w-7 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "text-gray-500 h-4 w-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                            lineNumber: 251,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M5 12l14 0",
                            initial: {
                                strokeDasharray: "50%",
                                strokeDashoffset: "50%"
                            },
                            animate: {
                                strokeDashoffset: value ? 0 : "50%"
                            },
                            transition: {
                                duration: 0.3,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                            lineNumber: 252,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M13 18l6 -6"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                            lineNumber: 265,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M13 6l6 6"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                            lineNumber: 266,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                    lineNumber: 240,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                lineNumber: 236,
                columnNumber: 21
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                className: "absolute right-2 top-1/2 z-50 -translate-y-1/2 p-2 rounded-lg hover:bg-zinc-700 transition",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                    className: "w-6 h-6 text-blue-500 hover:text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                    lineNumber: 273,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                lineNumber: 269,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center rounded-full pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: !value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            y: 5,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: -15,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3,
                            ease: "linear"
                        },
                        className: "dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate",
                        children: placeholders[currentPlaceholder]
                    }, `current-placeholder-${currentPlaceholder}`, false, {
                        fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                        lineNumber: 283,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                    lineNumber: 281,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
                lineNumber: 279,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/placeholders-and-vanish-input.tsx",
        lineNumber: 212,
        columnNumber: 10
    }, this);
}
_s(PlaceholdersAndVanishInput, "YbppWR6Au1KVu2z/5H7LjU+07F0=");
_c = PlaceholdersAndVanishInput;
var _c;
__turbopack_refresh__.register(_c, "PlaceholdersAndVanishInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/CalenderModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-day-picker/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
const CalendarModal = ({ isOpen, closeModal, setCalanderValue })=>{
    let selectValue;
    const hadlingchange = (e)=>{
        selectValue = e;
        setCalanderValue(selectValue);
        closeModal();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
        appear: true,
        show: isOpen,
        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            as: "div",
            className: "relative z-50",
            onClose: closeModal,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"
                }, void 0, false, {
                    fileName: "[project]/app/Components/CalenderModal.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                        enter: "transition transform duration-300 ease-out",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition transform duration-200 ease-in",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"].Panel, {
                            className: "w-full max-w-fit   text-white ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.4,
                                    ease: "easeOut"
                                },
                                className: "w-fit mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "",
                                        children: selectValue
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/CalenderModal.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
                                        mode: "single",
                                        className: "rounded-lg bg-[#2A2A36] w-fit mx-auto px-8 py-3 text-white",
                                        onSelect: (e)=>hadlingchange(e)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/CalenderModal.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/CalenderModal.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/CalenderModal.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/CalenderModal.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/CalenderModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/CalenderModal.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/CalenderModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_c = CalendarModal;
const __TURBOPACK__default__export__ = CalendarModal;
var _c;
__turbopack_refresh__.register(_c, "CalendarModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/SearchModal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/placeholders-and-vanish-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$CalenderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/CalenderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/sl/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const SearchModal = ({ setSearch, onSearch })=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCalendarOpen, setIsCalendarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = (e)=>{
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Send search query to update active chat
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-4 px-6 glassBg border-b border-gray-700 shadow-lg backdrop-blur-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-44 items-center justify-between ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 flex-1 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex items-center gap-3 text-gray-300 hover:text-white transition",
                            onClick: ()=>setSearch(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full h-9 w-9 flex items-center rotate-180 justify-center bg-black dark:bg-zinc-900 transition duration-200 transform hover:scale-105",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "text-gray-400 h-6 w-6",
                                        transition: {
                                            duration: 0.3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                d: "M5 12l14 0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/SearchModal.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 18l6 -6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/SearchModal.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 6l6 6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/SearchModal.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/SearchModal.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/SearchModal.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-medium",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/SearchModal.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/SearchModal.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceholdersAndVanishInput"], {
                                arrow: true,
                                onChange: handleSearch,
                                onSubmit: (e)=>e.target.value,
                                placeholders: [
                                    "Search..."
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/Components/SearchModal.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/SearchModal.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/SearchModal.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center justify-center gap-2 w-8 h-8 bg-[#2A2A36] hover:bg-[#2a2a367e] text-white rounded-full shadow-md transition-all",
                            onClick: ()=>setIsCalendarOpen(true),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$sl$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlCalender"], {}, void 0, false, {
                                fileName: "[project]/app/Components/SearchModal.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/SearchModal.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$CalenderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isOpen: isCalendarOpen,
                            closeModal: ()=>setIsCalendarOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/SearchModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/SearchModal.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/SearchModal.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/SearchModal.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(SearchModal, "Yujke8E3xmRMH86/WpoALBqjrlM=");
_c = SearchModal;
const __TURBOPACK__default__export__ = SearchModal;
var _c;
__turbopack_refresh__.register(_c, "SearchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/Toast.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "errorToast": (()=>errorToast),
    "successToast": (()=>successToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
const successToast = (message)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(message);
};
const errorToast = (message)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/ChatInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/placeholders-and-vanish-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ms$2d$3d$2d$emoji$2d$picker$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/ms-3d-emoji-picker/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const ChatInput = ({ handleEmojiSelect, handleFileUpload, handleSend, message })=>{
    _s();
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(message);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const handleClickOutside = {
                "ChatInput.useEffect.handleClickOutside": (event)=>{
                    if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                        setShowPicker(false);
                    }
                }
            }["ChatInput.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ChatInput.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky bottom-0 border-t border-gray-700 bg-zinc-900 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 p-4 bg-zinc-800 rounded-lg relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: pickerRef,
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPicker(!showPicker),
                            className: "p-2 rounded-lg hover:bg-zinc-700 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                className: "w-6 h-6 text-gray-400 hover:text-white"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/ChatInput.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/ChatInput.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-12 left-0 bg-transparent shadow-lg rounded-lg z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ms$2d$3d$2d$emoji$2d$picker$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Picker"], {
                                isOpen: true,
                                handleEmojiSelect: handleEmojiSelect
                            }, void 0, false, {
                                fileName: "[project]/app/Components/ChatInput.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/ChatInput.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/ChatInput.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>fileInputRef.current?.click(),
                    className: "p-2 rounded-lg hover:bg-zinc-700 transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                        className: "w-6 h-6 text-gray-400 hover:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/ChatInput.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/ChatInput.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "file",
                    ref: fileInputRef,
                    className: "hidden",
                    onChange: handleFileUpload,
                    accept: ".pdf,.doc,.docx,.txt,.jpg,.png"
                }, void 0, false, {
                    fileName: "[project]/app/Components/ChatInput.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceholdersAndVanishInput"], {
                        placeholders: [
                            "Type a message..."
                        ],
                        onChange: (e)=>setInputMessage(e.target.value),
                        onSubmit: ()=>{
                            handleSend(inputMessage);
                            setInputMessage("");
                        },
                        arrow: false
                    }, void 0, false, {
                        fileName: "[project]/app/Components/ChatInput.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/ChatInput.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/ChatInput.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/ChatInput.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
_s(ChatInput, "REOXPJ3Beq0fHTWy/bf2lDouZyQ=");
_c = ChatInput;
const __TURBOPACK__default__export__ = ChatInput;
var _c;
__turbopack_refresh__.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/PersonalInfo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Context/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const PersonalInfo = ({ conversation, setSidebarOpen, sharedMedia, sharedLinks, sharedDocs, setShowWallpaperModal, showWallpaperModal, handleColorChange, setCustomColor, handleWallpaperUpload, wallpaperInputRef })=>{
    _s();
    const { setIsmodel, setSelectedImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const openImageModal = (imgUrl)=>{
        setSelectedImage(imgUrl);
        setIsmodel(true);
    };
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("media");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.5,
            ease: "linear"
        },
        className: "w-1/3  p-6 shadow-lg  relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setSidebarOpen(false),
                className: "absolute top-4 right-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-6 h-6 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/app/Components/PersonalInfo.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/PersonalInfo.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: conversation.avatar,
                        alt: conversation.name,
                        className: "w-24 h-24 rounded-full mx-auto shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-white text-lg font-semibold mt-4",
                        children: conversation.name
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/PersonalInfo.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-gray-300 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold",
                        children: "🔔 Notifications"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Turn on/off message notifications for this chat."
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-blue-500 px-4 py-2 mt-2 rounded-md text-white",
                        children: "Toggle Notifications"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-4 font-semibold",
                        children: "⏳ Disappearing Messages"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Enable disappearing messages for privacy."
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-red-500 px-4 py-2 mt-2 rounded-md text-white",
                        children: "Enable Disappearing"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/PersonalInfo.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-around border-b border-gray-600 pb-2",
                        children: [
                            "media",
                            "links",
                            "docs"
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab),
                                className: `text-gray-400 px-4 py-2 ${activeTab === tab ? "text-white border-b-2 border-blue-400" : ""}`,
                                children: tab.charAt(0).toUpperCase() + tab.slice(1)
                            }, tab, false, {
                                fileName: "[project]/app/Components/PersonalInfo.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    activeTab === "media" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 mt-4",
                        children: sharedMedia.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                className: "h-full w-full rounded-lg cursor-pointer object-cover shadow-sm",
                                onClick: ()=>openImageModal(img)
                            }, index, false, {
                                fileName: "[project]/app/Components/PersonalInfo.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    activeTab === "links" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-2",
                        children: sharedLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: " bg-zinc-700 p-3 rounded-lg flex items-center gap-3 hover:bg-zinc-600 transition",
                                children: [
                                    "🔗",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400 truncate",
                                        children: link
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/Components/PersonalInfo.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    activeTab === "docs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3",
                        children: sharedDocs.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center bg-zinc-700 p-3 rounded-lg hover:bg-zinc-600 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-gray-300",
                                        children: [
                                            "📄 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: doc.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/PersonalInfo.tsx",
                                                lineNumber: 126,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: doc.url,
                                        className: "bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 transition",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Download"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/Components/PersonalInfo.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/PersonalInfo.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-5 relative flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowWallpaperModal(true),
                        className: "bg-blue-500 px-4 py-2 mt-2 rounded-md text-white",
                        children: "Change Wallpaper"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-red-600 px-4 py-2 rounded-md text-white hover:bg-red-700 transition",
                        children: "🚨 Block & Report"
                    }, void 0, false, {
                        fileName: "[project]/app/Components/PersonalInfo.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/PersonalInfo.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            showWallpaperModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-zinc-800 p-6 rounded-lg shadow-lg w-80 text-white relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowWallpaperModal(false),
                            className: "absolute top-4 right-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6 text-gray-400"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/PersonalInfo.tsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "Change Wallpaper"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm text-gray-400 mb-2",
                            children: "Choose a Color"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 flex-wrap mb-4",
                            children: [
                                "#1E1E1E",
                                "#091E427D",
                                "#2C3E5D",
                                "#B3B9C4",
                                "#2C333A",
                                "#C3DEFE33"
                            ].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-10 h-10 rounded-full border-2 border-gray-400",
                                    style: {
                                        backgroundColor: color
                                    },
                                    onClick: ()=>handleColorChange(color)
                                }, color, false, {
                                    fileName: "[project]/app/Components/PersonalInfo.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm text-gray-400 mb-2",
                            children: "Pick a Custom Color"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "color",
                            onChange: (e)=>{
                                setCustomColor(e.target.value);
                                handleColorChange(e.target.value);
                            },
                            className: "w-full h-10 border-none bg-transparent cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>wallpaperInputRef.current?.click(),
                            className: "bg-blue-500 w-full mx-auto px-4 py-2 rounded-md mt-3 text-white flex items-center justify-center gap-2",
                            children: "📷 Upload Image"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            ref: wallpaperInputRef,
                            className: "hidden",
                            accept: "image/*",
                            onChange: handleWallpaperUpload
                        }, void 0, false, {
                            fileName: "[project]/app/Components/PersonalInfo.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/PersonalInfo.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/PersonalInfo.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/PersonalInfo.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_s(PersonalInfo, "LftG/JzDShPUIHAOJZM3zUYH884=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = PersonalInfo;
const __TURBOPACK__default__export__ = PersonalInfo;
var _c;
__turbopack_refresh__.register(_c, "PersonalInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/ChatWindow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Message.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dayjs/plugin/relativeTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dayjs/plugin/isToday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$isYesterday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dayjs/plugin/isYesterday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$SearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/SearchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Context/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/ChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$PersonalInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/PersonalInfo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$isToday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$isYesterday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const ChatWindow = ({ conversation, messages: initialMessages, sharedMedia, sharedLinks, sharedDocs })=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMessages);
    const [newestMessageId, setNewestMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWindow.useEffect": ()=>{
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["ChatWindow.useEffect"], [
        messages
    ]);
    const handleSend = (textMessage, file = null)=>{
        if (textMessage?.trim() || file) {
            const newMessage = {
                id: messages.length + 1,
                text: textMessage,
                sender: "sender",
                time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().format("h:mm A"),
                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])().format("YYYY-MM-DD"),
                conversationId: conversation.id,
                file
            };
            setNewestMessageId(newMessage.id);
            setMessages([
                ...messages,
                newMessage
            ]);
        } else {
            textMessage == null ? null : message;
        }
        setMessage("");
    };
    const handleEmojiSelect = (selectedEmoji)=>{
        const emojiMessage = `<img src="${selectedEmoji.url}" alt="emoji" class="w-full h-full inline-block" />`;
        handleSend(emojiMessage);
        setShowPicker(false);
    };
    const handleFileUpload = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            const fileMessage = {
                name: file.name,
                type: file.type,
                url: fileUrl
            };
            handleSend("", fileMessage);
        }
    };
    const groupedMessages = messages.filter((msg)=>msg.conversationId === conversation.id).reduce((acc, msg)=>{
        if (!acc[msg.date]) acc[msg.date] = [];
        acc[msg.date].push(msg);
        return acc;
    }, {});
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSearch = ()=>{
        setSearch(true);
        console.log("serach");
    };
    const wallpaperInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [wallpaper, setWallpaper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showWallpaperModal, setShowWallpaperModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customColor, setCustomColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#000000");
    const [editMessageId, setEditMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { editmodel, setEditmodel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const handleWallpaperUpload = (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setWallpaper(`url(${fileUrl})`);
            setShowWallpaperModal(false);
        }
    };
    const handleColorChange = (color)=>{
        setWallpaper(color.startsWith("#") ? color : `url(${color})`);
        setShowWallpaperModal(false);
    };
    const handleEdit = (msg)=>{
        setMessage(msg.text);
        setEditMessageId(msg.id);
        setContextMenu(null);
        setEditmodel(true);
    };
    const handleCopy = (msg)=>{
        navigator.clipboard.writeText(msg.text);
        setContextMenu(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["successToast"])("success");
    };
    const handleDelete = (msgId)=>{
        setMessages(messages.filter((m)=>m.id !== msgId));
        setContextMenu(null);
    };
    const [activeConversation, setActiveConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(conversation);
    const [filteredMessages, setFilteredMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(messages);
    const handleSearching = (query)=>{
        if (!query) {
            setActiveConversation(conversation);
            setFilteredMessages(messages);
            return;
        }
        const matchingConversation = conversations.find((conv)=>conv.name.toLowerCase().includes(query.toLowerCase()));
        if (matchingConversation) {
            setActiveConversation(matchingConversation);
            const newMessages = messages.filter((msg)=>msg.conversationId === matchingConversation.id);
            setFilteredMessages(newMessages);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex h-screen",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.6
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col flex-1 ${sidebarOpen ? "lg:w-2/3" : "w-full"}`,
                children: [
                    search ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$SearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setSearch: setSearch,
                        setSearch: setSearch,
                        onSearch: handleSearching
                    }, void 0, false, {
                        fileName: "[project]/app/Components/ChatWindow.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        conversation: conversation,
                        search: search,
                        setSearch: setSearch,
                        handleSearch: handleSearch,
                        onAvatarClick: ()=>setSidebarOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/ChatWindow.tsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4",
                        style: {
                            backgroundImage: wallpaper.startsWith("#") ? "none" : wallpaper,
                            backgroundColor: wallpaper.startsWith("#") ? wallpaper : "",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        },
                        children: [
                            Object.entries(groupedMessages).map(([date, msgs])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center bg-slate-300/10 w-fit mx-auto py-2 px-4 rounded-full text-xs text-gray-400   my-4",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).isToday() ? "Today" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).isYesterday() ? "Yesterday" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format("DD MMM, YYYY")
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/ChatWindow.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: msgs.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Message$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    message: msg,
                                                    isOwnMessage: msg.sender === "sender",
                                                    isNewestMessage: msg.id === newestMessageId,
                                                    setNewestMessageId: setNewestMessageId,
                                                    handleEdit: handleEdit,
                                                    handleCopy: handleCopy,
                                                    handleDelete: handleDelete,
                                                    messages: filteredMessages,
                                                    conversation: activeConversation
                                                }, msg.id, false, {
                                                    fileName: "[project]/app/Components/ChatWindow.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/ChatWindow.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, date, true, {
                                    fileName: "[project]/app/Components/ChatWindow.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/app/Components/ChatWindow.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/ChatWindow.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        handleEmojiSelect: handleEmojiSelect,
                        handleFileUpload: handleFileUpload,
                        handleSend: handleSend,
                        message: message
                    }, void 0, false, {
                        fileName: "[project]/app/Components/ChatWindow.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/ChatWindow.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$PersonalInfo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                conversation: conversation,
                setSidebarOpen: setSidebarOpen,
                sharedMedia: sharedMedia,
                sharedLinks: sharedLinks,
                sharedDocs: sharedDocs,
                setShowWallpaperModal: setShowWallpaperModal,
                showWallpaperModal: showWallpaperModal,
                handleColorChange: handleColorChange,
                setCustomColor: setCustomColor,
                handleWallpaperUpload: handleWallpaperUpload,
                wallpaperInputRef: wallpaperInputRef
            }, void 0, false, {
                fileName: "[project]/app/Components/ChatWindow.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/ChatWindow.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
};
_s(ChatWindow, "v0np3D/6dizGtdGAORvgyAXL1IA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = ChatWindow;
const __TURBOPACK__default__export__ = ChatWindow;
var _c;
__turbopack_refresh__.register(_c, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card-hover-effect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>Card),
    "CardDescription": (()=>CardDescription),
    "CardTitle": (()=>CardTitle),
    "HoverEffect": (()=>HoverEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const HoverEffect = ({ items, className })=>{
    _s();
    let [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleMouseDown = (e)=>{
        isDown.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };
    const handleMouseLeave = ()=>{
        isDown.current = false;
    };
    const handleMouseUp = ()=>{
        isDown.current = false;
    };
    const handleMouseMove = (e)=>{
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: scrollRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex overflow-x-auto whitespace-nowrap gap-6 py-10 cursor-grab active:cursor-grabbing", "custom-scroll"),
        style: {
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth"
        },
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        children: items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 shrink-0 h-full rounded-lg bg-zinc-800/[0.9] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.link,
                    className: "relative group block h-full w-full",
                    onMouseEnter: ()=>setHoveredIndex(idx),
                    onMouseLeave: ()=>setHoveredIndex(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: item.title,
                                className: "w-14 h-14 rounded-full mx-auto object-cover border-2 border-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/card-hover-effect.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardTitle, {
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/components/ui/card-hover-effect.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardDescription, {
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/components/ui/card-hover-effect.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-300 text-sm mt-2",
                                children: [
                                    item.followers,
                                    " Followers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/card-hover-effect.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/card-hover-effect.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/card-hover-effect.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, idx, false, {
                fileName: "[project]/components/ui/card-hover-effect.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/card-hover-effect.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(HoverEffect, "KnajGUB7nJe7Zl7bSdYWf2VAlYU=");
_c = HoverEffect;
const Card = ({ className, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg h-full group-hover:border-slate-700 relative z-20 text-center", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/card-hover-effect.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/card-hover-effect.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/card-hover-effect.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
};
_c1 = Card;
const CardTitle = ({ className, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-zinc-100 font-bold tracking-wide mt-4", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card-hover-effect.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
};
_c2 = CardTitle;
const CardDescription = ({ className, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 text-zinc-400 tracking-wide text-sm", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/card-hover-effect.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
};
_c3 = CardDescription;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "HoverEffect");
__turbopack_refresh__.register(_c1, "Card");
__turbopack_refresh__.register(_c2, "CardTitle");
__turbopack_refresh__.register(_c3, "CardDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/SuggestFriend.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SuggestFriend": (()=>SuggestFriend),
    "suggestedFriends": (()=>suggestedFriends)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2d$hover$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/card-hover-effect.tsx [app-client] (ecmascript)");
;
;
function SuggestFriend() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto overflow-y-auto ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center text-white mb-6",
                children: "People You May Know"
            }, void 0, false, {
                fileName: "[project]/app/Components/SuggestFriend.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2d$hover$2d$effect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverEffect"], {
                items: suggestedFriends
            }, void 0, false, {
                fileName: "[project]/app/Components/SuggestFriend.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/SuggestFriend.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SuggestFriend;
const suggestedFriends = [
    {
        title: "John Doe",
        description: "Software Engineer at Google. Passionate about AI & ML.",
        link: "/chatapp/johndoe",
        image: "https://i.pravatar.cc/150?img=2",
        followers: 1200
    },
    {
        title: "Jane Smith",
        description: "Product Designer at Facebook. Loves minimal UI/UX design.",
        link: "/chatapp/janesmith",
        image: "https://i.pravatar.cc/150?img=5",
        followers: 890
    },
    {
        title: "David Lee",
        description: "Blockchain Developer, building the future of Web3.",
        link: "/chatapp/davidlee",
        image: "https://i.pravatar.cc/150?img=4",
        followers: 530
    },
    {
        title: "Emma Brown",
        description: "AI Researcher at OpenAI, exploring deep learning.",
        link: "/chatapp/emmabrown",
        image: "https://i.pravatar.cc/150?img=5",
        followers: 2200
    },
    {
        title: "Michael Scott",
        description: "Regional Manager at Dunder Mifflin. Loves paper.",
        link: "/chatapp/michaelscott",
        image: "https://i.pravatar.cc/150?img=5",
        followers: 450
    },
    {
        title: "Michael Scott",
        description: "Regional Manager at Dunder Mifflin. Loves paper.",
        link: "/chatapp/michaelsc",
        image: "https://i.pravatar.cc/150?img=5",
        followers: 450
    }
];
var _c;
__turbopack_refresh__.register(_c, "SuggestFriend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/StatusWindow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/placeholders-and-vanish-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$SuggestFriend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/SuggestFriend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/transition/transition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const StatusWindow = ({ statusUpdates })=>{
    _s();
    const [selectedStatusIndex, setSelectedStatusIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLiked, setIsLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusWindow.useEffect": ()=>{
            if (selectedStatusIndex !== null) {
                setIsOpen(true);
                setIsLiked(false);
                const timer = setTimeout({
                    "StatusWindow.useEffect.timer": ()=>{
                        if (selectedStatusIndex < statusUpdates.length - 1) {
                            setSelectedStatusIndex({
                                "StatusWindow.useEffect.timer": (prev)=>prev !== null ? prev + 1 : null
                            }["StatusWindow.useEffect.timer"]);
                        } else {
                            setIsOpen(false);
                            setSelectedStatusIndex(null);
                        }
                    }
                }["StatusWindow.useEffect.timer"], 5000);
                return ({
                    "StatusWindow.useEffect": ()=>clearTimeout(timer)
                })["StatusWindow.useEffect"];
            }
        }
    }["StatusWindow.useEffect"], [
        selectedStatusIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4  border-t min-h-screen overflow-y-auto border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-gray-200 mb-2",
                children: "Status Updates"
            }, void 0, false, {
                fileName: "[project]/app/Components/StatusWindow.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 overflow-x-auto",
                children: statusUpdates.map((status, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-pointer flex flex-col items-center",
                        onClick: ()=>setSelectedStatusIndex(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.04
                                },
                                className: "w-16 h-16 rounded-full border-2 border-green-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: status.avatar,
                                    alt: status.user,
                                    className: "w-full h-full rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/StatusWindow.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/StatusWindow.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-1",
                                children: status.time
                            }, void 0, false, {
                                fileName: "[project]/app/Components/StatusWindow.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, status.id, true, {
                        fileName: "[project]/app/Components/StatusWindow.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/Components/StatusWindow.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$SuggestFriend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuggestFriend"], {}, void 0, false, {
                fileName: "[project]/app/Components/StatusWindow.tsx",
                lineNumber: 74,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"], {
                appear: true,
                show: isOpen,
                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$transition$2f$transition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"].Child, {
                        enter: "transition ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        className: "relative w-[90%] max-w-lg bg-black rounded-lg shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsOpen(false);
                                    setSelectedStatusIndex(null);
                                },
                                className: "absolute top-3 right-3 text-white bg-gray-800 p-2 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/StatusWindow.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/StatusWindow.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-3 right-3 h-1 bg-gray-700 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        width: "0%"
                                    },
                                    animate: {
                                        width: "100%"
                                    },
                                    transition: {
                                        duration: 5,
                                        ease: "linear"
                                    },
                                    className: "h-full bg-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/StatusWindow.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/StatusWindow.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 flex flex-col h-screen w-full items-center",
                                children: selectedStatusIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        statusUpdates[selectedStatusIndex].type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                            src: statusUpdates[selectedStatusIndex].media,
                                            className: "w-full rounded-lg h-full object-cover",
                                            autoPlay: true,
                                            loop: true,
                                            controls: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/StatusWindow.tsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: statusUpdates[selectedStatusIndex].media,
                                            alt: "Status",
                                            className: "w-full rounded-lg h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/StatusWindow.tsx",
                                            lineNumber: 122,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-200 text-lg mt-4",
                                            children: statusUpdates[selectedStatusIndex].status
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/StatusWindow.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "self-start flex items-center gap-3 mt-7 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceholdersAndVanishInput"], {
                                                    placeholders: [
                                                        "Type a message..."
                                                    ],
                                                    onChange: (e)=>console.log(e.target.value),
                                                    onSubmit: ()=>console.log("submit")
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/StatusWindow.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                    onClick: ()=>setIsLiked(!isLiked),
                                                    whileTap: {
                                                        scale: 0.8
                                                    },
                                                    animate: {
                                                        scale: isLiked ? [
                                                            1,
                                                            1.3,
                                                            1
                                                        ] : 1,
                                                        color: isLiked ? "#ff0000" : "#ccc"
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    className: "text-white text-2xl",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"], {}, void 0, false, {
                                                        fileName: "[project]/app/Components/StatusWindow.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/StatusWindow.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/StatusWindow.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/StatusWindow.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/StatusWindow.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/Components/StatusWindow.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/StatusWindow.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/StatusWindow.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
_s(StatusWindow, "B18F8cASppMg7aoLD/EpaPVSocE=");
_c = StatusWindow;
const __TURBOPACK__default__export__ = StatusWindow;
var _c;
__turbopack_refresh__.register(_c, "StatusWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Person.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
;
;
const Person = ({ conversation, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `w-full p-3  cursor-pointer transition-all duration-200 hover:bg-[#ffffff20]`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: "w-12 h-12 border-[3px] p-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-black rounded-full p-[2px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                    src: conversation?.avatar,
                                    alt: conversation.name,
                                    className: "w-full h-full object-cover rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Person.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Person.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Person.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 right-1 bottom-0 z-40 bg-green-500 absolute rounded-full border-2 border-black"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Person.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Person.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-base text-slate-200 font-semibold",
                            children: conversation.name
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Person.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-slate-400",
                            children: conversation.lastMessage
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Person.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Person.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/Person.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/Person.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = Person;
const __TURBOPACK__default__export__ = Person;
var _c;
__turbopack_refresh__.register(_c, "Person");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Group.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
;
;
const Group = ({ conversation, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `w-full p-3  cursor-pointer transition-all duration-200 hover:bg-[#ffffff20]`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: "w-12 h-12 border-[3px] p-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-black rounded-full p-[2px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                    src: conversation?.avatar,
                                    alt: conversation.name,
                                    className: "w-full h-full object-cover rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Group.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Group.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Group.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 right-1 bottom-0 z-40 bg-green-500 absolute rounded-full border-2 border-black"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Group.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Group.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-base text-slate-200 font-semibold",
                            children: conversation.name
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Group.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-slate-400",
                            children: conversation.lastMessage
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Group.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Components/Group.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/Group.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/Group.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_c = Group;
const __TURBOPACK__default__export__ = Group;
var _c;
__turbopack_refresh__.register(_c, "Group");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Calls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Context/context.tsx [app-client] (ecmascript)");
;
;
;
;
const Calls = ({ call })=>{
    const { setVideomodel, setVoicemodel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Usemodel"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>{
            call.type === "video" ? setVideomodel(true) : setVoicemodel(true);
        },
        className: "flex items-center justify-between p-3 hover:bg-gray-800 rounded-lg cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                        className: "w-12 h-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                            src: "https://i.pravatar.cc/150?img=6",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/app/Components/Calls.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Calls.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-semibold",
                                children: call.name
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Calls.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-sm",
                                children: call.time
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Calls.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Calls.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Calls.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: call.type === "video" ? "FaVideo" : "FaPhoneAlt",
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/Components/Calls.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, call.id, true, {
        fileName: "[project]/app/Components/Calls.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
_c = Calls;
const __TURBOPACK__default__export__ = Calls;
var _c;
__turbopack_refresh__.register(_c, "Calls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Status.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
;
;
const Status = ({ status, viewed, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                className: `w-12 h-12 border-2 ${viewed ? "border-gray-500" : "border-green-500"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                    src: status.avatar,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/Components/Status.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Components/Status.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-semibold",
                        children: status.user
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Status.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 text-sm",
                        children: status.time
                    }, void 0, false, {
                        fileName: "[project]/app/Components/Status.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Status.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/Status.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = Status;
const __TURBOPACK__default__export__ = Status;
var _c;
__turbopack_refresh__.register(_c, "Status");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Components/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/placeholders-and-vanish-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Person$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Person.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Calls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Calls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Status.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Context/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const Sidebar = ({ conversations, statusUpdates, onSelectConversation, onSelectStatus, groups, calls, onSelectCall })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Chats");
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { setProfilemodel, setSettingmodel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const handleTabClick = (tab)=>{
        setActiveTab(tab);
        setSearchTerm("");
    };
    const filteredConversations = conversations.filter((conv)=>conv.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredGroups = groups.filter((group)=>group.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredStatus = statusUpdates.filter((status)=>status.user?.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredCalls = calls.filter((call)=>call.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        },
        className: "fixed top-0 left-0 h-screen w-[350px] bg-gray-900 border-r border-gray-700 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.1
                        },
                        className: "flex items-center gap-4 cursor-pointer",
                        onClick: ()=>setProfilemodel(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-12 h-12 border-2 border-blue-500 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                    src: "https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXQlMjBtb2RhbCUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",
                                    className: "w-full h-full object-cover",
                                    alt: "User"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/Sidebar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-semibold",
                                children: "Mahima"
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Sidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: "PiNotePencil",
                                size: 16,
                                onClick: ()=>setProfilemodel(true)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                name: "IoSettings",
                                size: 16,
                                onClick: ()=>setSettingmodel(true)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Components/Sidebar.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Sidebar.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$placeholders$2d$and$2d$vanish$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceholdersAndVanishInput"], {
                placeholders: [
                    "Search"
                ],
                onChange: (e)=>setSearchTerm(e.target.value),
                arrow: true
            }, void 0, false, {
                fileName: "[project]/app/Components/Sidebar.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-around mt-4 border-b border-gray-600 relative",
                children: [
                    "Chats",
                    "Groups",
                    "Status",
                    "Calls"
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        onClick: ()=>handleTabClick(tab),
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        className: `relative py-2 px-4 text-sm font-semibold rounded-t-lg transition-all duration-300 ${activeTab === tab ? "text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg scale-105" : "text-gray-400 hover:text-white hover:bg-gray-800"}`,
                        children: tab
                    }, tab, false, {
                        fileName: "[project]/app/Components/Sidebar.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/Components/Sidebar.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.3
                },
                className: "mt-4  ",
                children: [
                    activeTab === "Chats" && filteredConversations.map((conv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Person$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                conversation: conv,
                                onClick: ()=>onSelectConversation(conv)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this)
                        }, conv.id, false, {
                            fileName: "[project]/app/Components/Sidebar.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)),
                    activeTab === "Groups" && filteredGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                conversation: group,
                                onClick: ()=>onSelectConversation(group)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        }, group.id, false, {
                            fileName: "[project]/app/Components/Sidebar.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)),
                    activeTab === "Status" && filteredStatus.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                status: status,
                                onClick: ()=>onSelectStatus(status)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        }, status.id, false, {
                            fileName: "[project]/app/Components/Sidebar.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)),
                    activeTab === "Calls" && filteredCalls.map((call)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: {
                                scale: 1.05
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Calls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                call: call,
                                onClick: ()=>onSelectCall(call)
                            }, void 0, false, {
                                fileName: "[project]/app/Components/Sidebar.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        }, call.id, false, {
                            fileName: "[project]/app/Components/Sidebar.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/Components/Sidebar.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/Sidebar.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_s(Sidebar, "OSN9fAZiLT9T+Mjwe5XtNRY8PJ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"]
    ];
});
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_refresh__.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/chatapp/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ChatWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/ChatWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$StatusWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/StatusWindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/Components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const [selectedConversation, setSelectedConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "1": [
            {
                id: 1,
                userId: "user123",
                text: "Hey, John!",
                sender: "sender",
                time: "10:00 AM"
            },
            {
                id: 2,
                userId: "1",
                text: "Hey, how are you?",
                sender: "receiver",
                time: "10:05 AM"
            }
        ],
        "2": [
            {
                id: 1,
                userId: "user123",
                text: "Hi, Jane!",
                sender: "sender",
                time: "11:00 AM"
            },
            {
                id: 2,
                userId: "2",
                text: "Let’s catch up soon!",
                sender: "receiver",
                time: "11:15 AM"
            }
        ]
    });
    const statusUpdates = [
        {
            id: "1",
            user: "John Doe",
            status: "Enjoying the weekend! 🌴",
            time: "2h ago",
            avatar: "https://i.pravatar.cc/150?img=1",
            image: "https://source.unsplash.com/400x700/?beach",
            type: "image"
        },
        {
            id: "2",
            user: "Jane Smith",
            status: "Coffee time ☕",
            time: "4h ago",
            avatar: "https://i.pravatar.cc/150?img=2",
            image: "https://source.unsplash.com/400x700/?coffee",
            type: "image"
        }
    ];
    const conversations = [
        {
            id: "1",
            name: "John Doe",
            avatar: "https://i.pravatar.cc/150?img=1",
            lastMessage: "Hey, how are you?"
        },
        {
            id: "2",
            name: "Jane Smith",
            avatar: "https://i.pravatar.cc/150?img=2",
            lastMessage: "Let’s catch up soon!"
        }
    ];
    const groups = [
        {
            id: "101",
            name: "Friends Group",
            avatar: "https://i.pravatar.cc/150?img=3"
        }
    ];
    const [selectedCall, setSelectedCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const calls = [
        {
            id: "301",
            name: "Jane Smith",
            time: "Yesterday, 5:30 PM",
            type: "video"
        },
        {
            id: "302",
            name: "Jane Smith",
            time: "Yesterday, 5:30 PM",
            type: "audio"
        }
    ];
    const sharedMedia = [
        "https://images.unsplash.com/photo-1665970128288-1f872310713e?w=500",
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500",
        "https://images.unsplash.com/photo-1557683316-973673baf926?w=500"
    ];
    const sharedLinks = [
        "https://www.example.com/article1",
        "https://www.example.com/article2",
        "https://www.example.com/article3"
    ];
    const sharedDocs = [
        {
            name: "Document 1",
            url: "https://www.example.com/doc1.pdf"
        },
        {
            name: "Document 2",
            url: "https://www.example.com/doc2.pdf"
        },
        {
            name: "Document 3",
            url: "https://www.example.com/doc3.pdf"
        }
    ];
    const handleSelectConversation = (conversation)=>{
        setSelectedConversation(conversation);
        setSelectedStatus(null);
    };
    const handleSelectStatus = (status)=>{
        setSelectedStatus(status);
        setSelectedConversation(null);
    };
    const handleSelectCall = (call)=>{
        setSelectedCall(call);
        setSelectedConversation(null);
        setSelectedStatus(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.6
        },
        className: "flex items-center justify-center h-screen bg-gradient-to-br from-[#1e1e2e] to-[#101018]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full rounded-2xl text-white glassEffect overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        conversations: conversations,
                        groups: groups,
                        statusUpdates: statusUpdates,
                        calls: calls,
                        onSelectConversation: handleSelectConversation,
                        onSelectStatus: handleSelectStatus,
                        onSelectCall: handleSelectCall
                    }, void 0, false, {
                        fileName: "[project]/app/chatapp/page.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-[350px] overflow-y-auto min-h-screen w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: " overflow-y-auto min-h-screen",
                            children: selectedConversation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$ChatWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                conversation: selectedConversation,
                                messages: messages[selectedConversation.id] || [],
                                sharedMedia: sharedMedia,
                                sharedLinks: sharedLinks,
                                sharedDocs: sharedDocs
                            }, void 0, false, {
                                fileName: "[project]/app/chatapp/page.tsx",
                                lineNumber: 218,
                                columnNumber: 17
                            }, this) : selectedStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Components$2f$StatusWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                statusUpdates: statusUpdates,
                                selectedStatus: selectedStatus,
                                onClose: ()=>setSelectedStatus(null)
                            }, void 0, false, {
                                fileName: "[project]/app/chatapp/page.tsx",
                                lineNumber: 226,
                                columnNumber: 17
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/app/chatapp/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/chatapp/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/chatapp/page.tsx",
                lineNumber: 199,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/chatapp/page.tsx",
            lineNumber: 198,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/chatapp/page.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(Home, "HRypMWFiTKnq5CqwNPslGmee+NU=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/chatapp/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_9d28f1._.js.map