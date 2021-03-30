import React from "react";
import { useEffect } from "react";
import { AtomEffect, useRecoilSnapshot } from "recoil";

type TPrintType = "string" | "object";

interface IProps {
  printType?: TPrintType;
}

export const DebugObserver: React.FC<IProps> = ({ printType = "object" }) => {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    for (const node of snapshot.getNodes_UNSTABLE({
      isModified: true,
    }) as any) {
      if (node?.nextState && node?.prevState && node?.date) {
        const { prevState, nextState, date } = node;
        const p =
          printType === "object" ? prevState : "\n" + JSON.stringify(prevState);
        const n =
          printType === "object" ? nextState : "\n" + JSON.stringify(nextState);

        console.group(
          `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] @ ${
            node.key
          }`
        );
        console.debug(
          "%c prev state: ",
          "color: #949394; font-weight: bold;",
          p
        );
        console.debug("%c Node:", "color: #009ff2; font-weight: bold;", {
          node,
        });
        console.debug(
          "%c next state: ",
          "color: #43a547; font-weight: bold;",
          n
        );
        console.groupEnd();
        delete node.nextState;
        delete node.prevState;
        delete node.date;
      }
    }
  }, [snapshot]);
  return <></>;
};

export const effects_UNSTABLE: readonly AtomEffect<any>[] | undefined = [
  ({ onSet, node }) => {
    onSet((nextState, prevState) => {
      Object.assign(node, {
        prevState,
        nextState,
        date: new Date(),
      });
    });
  },
];
