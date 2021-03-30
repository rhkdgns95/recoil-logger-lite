import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";
export var DebugObserver = function (_a) {
    var _b = _a.printType, printType = _b === void 0 ? "object" : _b;
    var snapshot = useRecoilSnapshot();
    useEffect(function () {
        for (var _i = 0, _a = snapshot.getNodes_UNSTABLE({
            isModified: true,
        }); _i < _a.length; _i++) {
            var node = _a[_i];
            if ((node === null || node === void 0 ? void 0 : node.nextState) && (node === null || node === void 0 ? void 0 : node.prevState) && (node === null || node === void 0 ? void 0 : node.date)) {
                var prevState = node.prevState, nextState = node.nextState, date = node.date;
                var p = printType === "object" ? prevState : "\n" + JSON.stringify(prevState);
                var n = printType === "object" ? nextState : "\n" + JSON.stringify(nextState);
                console.group("[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] @ " + node.key);
                console.debug("%c prev state: ", "color: #949394; font-weight: bold;", p);
                console.debug("%c Node:", "color: #009ff2; font-weight: bold;", {
                    node: node,
                });
                console.debug("%c next state: ", "color: #43a547; font-weight: bold;", n);
                console.groupEnd();
                delete node.nextState;
                delete node.prevState;
                delete node.date;
            }
        }
    }, [snapshot]);
    return _jsx(_Fragment, {}, void 0);
};
export var effects_UNSTABLE = [
    function (_a) {
        var onSet = _a.onSet, node = _a.node;
        onSet(function (nextState, prevState) {
            Object.assign(node, {
                prevState: prevState,
                nextState: nextState,
                date: new Date(),
            });
        });
    },
];
//# sourceMappingURL=logger.js.map