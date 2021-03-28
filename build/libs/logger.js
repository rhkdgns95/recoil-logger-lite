import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";
export function DebugObserver() {
    var snapshot = useRecoilSnapshot();
    useEffect(function () {
        setTimeout(function () {
            var nodes = snapshot.getNodes_UNSTABLE({ isModified: true });
            var node = [].concat.apply([], Array.from(nodes))[0];
            if (node && node.prevState && node.nextState && node.date) {
                var prevState = node.prevState, nextState = node.nextState, date = node.date;
                console.group("[" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "] @ " + node.key);
                console.debug("%c prev state: ", "color: #949394; font-weight: bold;", prevState);
                console.debug("%c Node:", "color: #009ff2; font-weight: bold;", {
                    node: node,
                });
                console.debug("%c next state: ", "color: #43a547; font-weight: bold;", nextState);
                console.groupEnd();
                delete node.nextState;
                delete node.prevState;
                delete node.date;
            }
        });
    }, [snapshot]);
    return null;
}
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